[Voltar ao módulo](./README.md)

# Aula 7: Aplicações sobre Reticulum: LXMF, Sideband, NomadNet e MeshChat

*Pergunta que esta aula responde: o Reticulum entrega pacotes e links; quem entrega uma conversa? Que protocolo de mensagens e que programas rodam por cima, com que garantias, em quais plataformas, e em que estado estão hoje?*

> Verificado em setembro de 2026 no manual oficial (*Programs Using Reticulum*), nos READMEs e releases dos repositórios (LXMF, Sideband, NomadNet, Reticulum MeshChat) e no PyPI. Versões e datas mudam depressa: confira antes de instalar.

## Por que existe uma camada de aplicação padrão

O Reticulum resolve endereçamento, roteamento, cifra e transferência confiável (Aulas 2 a 4). Falta um **formato de mensagem** e uma **política de entrega** para uma conversa humana: assunto, corpo, anexos, confirmação de leitura, entrega a quem está **offline**. Se cada app inventasse o seu, nenhum falaria com outro. O projeto criou o **LXMF** (*Lightweight Extensible Message Format*) como padrão. O manual diz que padrões surgidos do uso real dão "compatibilidade e interoperabilidade entre muitos aplicativos cliente", num "ecossistema aberto em que os usuários escolhem o aplicativo, mas continuam ligados a todos".

## LXMF

**O que é** (README do LXMF e manual): formato de mensagem e protocolo de entrega, feito para gastar o mínimo de banda, com **roteamento sem configuração, criptografia fim a fim e sigilo futuro**, sobre qualquer meio que o Reticulum suporte. Eficiente o bastante para packet radio e LoRa.

### Formato da mensagem

```
[destino 16 B] [origem 16 B] [assinatura Ed25519 64 B] [payload msgpack: timestamp, conteúdo, título, campos]
```

- Origem e destino são **hashes de destino Reticulum de 16 bytes**. Diferente de um pacote Reticulum puro, **uma mensagem LXMF carrega a origem**: isso é escolha do LXMF, não do Reticulum. Se a origem vai na parte cifrada só para o destinatário (o que é o esperado, pois a mensagem inteira é cifrada para ele), confira no código do LXMF da sua versão; não verifiquei esse detalhe.
- A **assinatura** cobre destino, origem, payload e o **message-id** (SHA-256 de destino, origem e payload; nunca vai na mensagem, é calculado).
- O **payload** é uma lista `msgpack` com quatro itens: carimbo de tempo, conteúdo, título e um dicionário de **campos** livre (anexos, comandos, telemetria).
- **Sobrecarga total: 111 bytes** (README do LXMF) para ter mensagem assinada, datada, extensível, cifrada e roteada sem configuração.

Modelos de uso citados no README: SMS (só conteúdo), e-mail (título e corpo, anexos nos campos), controle de máquinas e sensores (comandos nos campos), grupos de discussão estilo Usenet e boletins.

### Três formas de entrega

O `LXMessage` do exemplo oficial (`docs/example_sender.py`) escolhe o método de entrega:

| Método (`desired_method`) | Como viaja | Quando |
|---|---|---|
| `DIRECT` | Por um **link** Reticulum (Aula 4). Padrão | Destinatário alcançável agora. Tem sigilo futuro |
| `OPPORTUNISTIC` | **Um único pacote**, sem link | Mensagens curtas, sem custo de estabelecer link |
| `PROPAGATED` | Entregue a um **nó de propagação** | Destinatário **offline** ou inalcançável |

### Nós de propagação: armazenar e encaminhar

O Zen do Reticulum (Aula 1) trata armazenar e encaminhar (*store and forward*) como modo primário. No LXMF isso é o **Propagation Node** (README): guarda mensagens (cifradas) para quem não está alcançável no momento; os nós de propagação por padrão **fazem peering entre si** e sincronizam, formando um repositório criptografado distribuído. Destinatários buscam suas mensagens em qualquer nó disponível quando voltam. O pacote `lxmf` inclui o `lxmd`, um roteador LXMF leve que também roda como nó de propagação (`lxmd --help`). O NomadNet também permite hospedar um.

Você não precisa saber isso para enviar uma mensagem; é o que garante que ela **chegue depois**, sem que remetente e destinatário estejam ligados ao mesmo tempo.

### Mensagem em papel

Uma mensagem LXMF cifrada pode virar **QR code** ou um URI `lxm://...`, e ser levada em papel, cartão ou em outro canal qualquer; o destinatário importa no app. O README traz uma mensagem de teste que exige importar uma identidade fornecida e escanear o QR no Sideband.

### Endereço LXMF e identidade

O **endereço LXMF** do usuário é o **hash do destino `lxmf.delivery`** da sua identidade. O README do MeshChat resume: "pense no endereço LXMF como seu e-mail próprio, cifrado fim a fim, infalsificável, roteado por uma malha". Consequências:

- **Sem cadastro.** Você não pede uma conta em servidor algum.
- **Anuncie para ser encontrado.** Sem announce, você fica invisível e ninguém consegue lhe enviar nada (README do MeshChat). Ao mudar de meio (do Wi-Fi para o LoRa do morro), anuncie de novo para atualizar o caminho.
- **Faça backup da identidade.** É o seu endereço (Aula 2).

### Estado do protocolo

O PyPI mostra `lxmf` **1.1.1**, enviada em 30 de julho de 2026. A tag do último *release* no GitHub que li era mais antiga (0.9.6, abril de 2026); o commit mais recente que li do repositório é de 20 de julho de 2026. Use o PyPI como referência de versão instalável. Como o próprio projeto avisa nos READMEs, os repositórios do GitHub são **espelhos**; o desenvolvimento acontece fora deles.

## Sideband

**O que é:** cliente LXMF com interface gráfica, também cliente de telefonia **LXST**, rastreador de situação e sistema de controle e monitoramento remoto (README).

**Plataformas listadas no README:** Android, Linux, macOS e Windows. **iOS não aparece.** Versão mais recente que li: **2.1.0**, publicada em **28 de agosto de 2026** (GitHub).

**Recursos** (README): mensagens e chamadas de voz; imagens e arquivos por todos os meios; **mensagens de áudio** com Codec2 e Opus que funcionam mesmo em LoRa; **telemetria e localização** compartilhadas diretamente entre pares; mapas offline; **mensagens em papel** por QR; usar um **Android como transport node** improvisado para montar ou estender redes; execução remota de comandos; **plugins**.

**Distribuição e licença:** APK no repositório, com certificado de assinatura fixo e hashes publicados para verificação; o projeto diz que nunca será distribuído em lojas que não deixem o desenvolvedor controlar a assinatura. O README declara a licença **CC BY-NC-SA 4.0** (uso não comercial). O Android roda sem APIs do Google. Desenvolvimento fora do GitHub; ali só espelho e releases.

**Instalação no Windows** (README): baixe o ZIP na página de releases, descompacte e rode `Sideband.exe`. Na primeira execução ele cria a configuração padrão do Reticulum em `C:\Users\USUARIO\.reticulum\config` se você não tiver. **Sem conectividade local existente, adicione uma interface** (por exemplo, um dos hubs públicos do Reticulum Testnet, Aula 5).

## NomadNet

**O que é** (manual e README): "suíte completa de comunicação criptografada" em **terminal**: mensagens (diretas e com entrega atrasada para quem está offline), compartilhamento de arquivos e um **navegador de texto** para **páginas** hospedadas em nós, com páginas dinâmicas, autenticação de usuários etc. Mesmo cliente LXMF, em modo texto.

- Páginas escritas em **Micron**, uma linguagem de marcação leve (o manual lista analisadores em JavaScript e navegadores gráficos como o rBrowser).
- O README informa uso **bem-sucedido em enlaces de rádio de 300 bps**.
- Nós podem gerar páginas por PHP, Python, bash e outros; e hospedar **Propagation Nodes**.
- Instalação: `pip install nomadnet`; execução: `nomadnet` (ou `nomadnet --daemon`, sem interface). Licença GPL-3.0. PyPI: **1.4.3** (11 de setembro de 2026).
- Plataformas: README cobre Linux/macOS (via terminal) e **Android por Termux**. Windows: **não confirmado**; confira na documentação da sua versão.

Programas relacionados que o manual lista: **RNS Page Node** (servir páginas e arquivos), **Retipedia** (servir a Wikipédia ou qualquer arquivo `.zim`), **rBrowser** (navegador web de nós NomadNet).

## Reticulum MeshChat e o fork MeshChatX

**Reticulum MeshChat** (liamcottle, licença MIT): app com interface web (Vue), em processo Python que roda uma instância Reticulum e um servidor WebSocket; empacotado com Electron para Windows, macOS e Linux. Instalação alternativa por Docker, Raspberry Pi e Android via Termux. Último release que li: **v2.4.0** (6 de julho de 2026).

Funcionalidades (README): mensagens, arquivos, imagens e voz; **compatível com Sideband e NomadNet**; **navegar páginas e baixar arquivos** de nós NomadNet; anúncios e lista de pares descobertos; reenvio automático de mensagens não entregues quando o destinatário anuncia; sincronizar com nós de propagação, e **rodar o seu próprio**. Chamadas de áudio (Codec2) estão listadas como **recurso beta**. O README de configurar novas interfaces ainda tinha "TODO" quando li: use o manual do Reticulum.

O manual oficial também lista o **MeshChatX**, descrito como uma bifurcação "do futuro" com objetivo de reunir Reticulum, LXMF e LXST em um app, "não afiliada" ao original e "muito mais atualizada". Isso é a descrição do manual; **não avaliei o MeshChatX**.

## Outros programas do ecossistema (manual)

- **LXST**: formato de fluxo em tempo real sobre Reticulum (voz e telefonia), com sigilo futuro; `rnphone` para telefone em linha de comando e LXST Phone para desktop.
- **Reticulum Relay Chat (RRC)**: chat ao vivo, no espírito do IRC. Quem não estava presente não vê a conversa (por desenho).
- **RetiBBS**: quadro de mensagens; **LXMFy**: framework de bots para LXMF (há implementações para Home Assistant e integrações com LLM); **LXMF Interactive Client**; **RNS FileSync**; **RNMon** (monitoramento).
- **rngit**: Git sobre Reticulum (Aula 6).
- **Columba** (encontrado no GitHub): app Android nativo para mensagens por BLE, TCP ou RNode via LXMF; conferi só a descrição do repositório, não o app.

## Como escolher

| Objetivo | Opção natural |
|---|---|
| Mensagens no celular, com voz, telemetria e mapas | Sideband |
| Uso no desktop com interface gráfica | Sideband ou MeshChat |
| Terminal, servidor e nó de propagação, páginas | NomadNet e `lxmd` |
| Bots e automação | LXMF (biblioteca) e LXMFy |
| Controle e monitoramento remoto | Sideband (comandos e telemetria), `rnx`, `rnsh` |

## Resumo

- LXMF é o formato e protocolo de mensagens do ecossistema: 111 bytes de sobrecarga, assinatura Ed25519, cifra fim a fim, entrega **direta** (link), **oportunista** (um pacote) ou **propagada** (nós de propagação, para destinatários offline).
- O endereço LXMF é o hash de destino da sua identidade; sem cadastro; é preciso **anunciar** para ser encontrado; a identidade deve ter backup.
- Sideband (2.1.0, 28 ago 2026): Android, Linux, macOS e Windows; voz, arquivos, telemetria e mapas; licença CC BY-NC-SA 4.0. NomadNet (PyPI 1.4.3): terminal, páginas Micron, nó de propagação. MeshChat (v2.4.0, MIT): interface web e desktop. Todos falam LXMF entre si.
- O ecossistema é mantido por poucas pessoas: releases e apps mudam rápido; o desenvolvimento das ferramentas principais fica fora do GitHub.
- Mesmo em LoRa, o foco é texto curto, áudio comprimido e arquivos pequenos: a física da Aula 4 continua valendo.

## Para aprofundar

- [ ] [Programs Using Reticulum](https://reticulum.network/manual/software.html) (manual oficial): lista de programas e protocolos (LXMF, LXST, RRC).
- [ ] [LXMF (README no GitHub)](https://github.com/markqvist/LXMF) (espelho oficial): formato, entrega, nós de propagação, mensagem em papel, exemplos de código.
- [ ] [Sideband (GitHub)](https://github.com/markqvist/Sideband) (espelho oficial): funções, instalação por plataforma e verificação da assinatura do APK.
- [ ] [Nomad Network (GitHub)](https://github.com/markqvist/NomadNet) (espelho oficial): instalação, uso e nós.
- [ ] [Reticulum MeshChat (GitHub)](https://github.com/liamcottle/reticulum-meshchat) (Liam Cottle): app com interface web e como configurar.
- [ ] [Nomadnet using Reticulum Meshchat Program](https://www.youtube.com/watch?v=ISYE6wcgCzw) (Simon Phillips): navegar nós NomadNet pelo MeshChat; não assisti.
- [ ] [How To Pair RNode With Sideband | Ghost Off Grid Network Setup Part 4 (Reticulum)](https://www.youtube.com/watch?v=FrTnSp-hsyI) (GhostStrats): como parear um RNode com o Sideband; não assisti.

[Próxima aula: Modelo de ameaça, privacidade e legalidade](./08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md)
