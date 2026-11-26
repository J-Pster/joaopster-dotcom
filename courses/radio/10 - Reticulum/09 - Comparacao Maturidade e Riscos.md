[Voltar ao módulo](./README.md)

# Aula 9: Comparação, maturidade e riscos

*Pergunta que esta aula responde: quando escolher Reticulum, Meshtastic, MeshCore ou IP tradicional, e quão maduro, estável e sustentável é o Reticulum hoje (setembro de 2026)?*

> Verificado em 24 de setembro de 2026 em: GitHub (API de releases, commits e contribuidores de `markqvist/Reticulum`, `LXMF`, `Sideband`, `NomadNet`, `RNode_Firmware`), PyPI, `MIRROR.md`, `Contributing.md`, `LICENSE`/cabeçalhos de código, `reticulum.network/crypto.html`, documentação do Meshtastic e README do MeshCore. Números de versão e datas mudam: refaça a conferência antes de decidir.

## Por que comparar

Os Módulos 8 e 9 mostraram LoRa, mesh e o Meshtastic (o Módulo 9 tem o MeshCore). O Reticulum resolve um problema **diferente**: em vez de "uma malha de rádios com um app", ele é uma **pilha de rede** que pode usar rádios LoRa **entre outros meios**. Comparar é entender de que camada cada um é.

## Comparação honesta

| Aspecto | **Reticulum** | **Meshtastic** | **MeshCore** | **IP tradicional (TCP/IP)** |
|---|---|---|---|---|
| **O que é** | Pilha de rede completa, agnóstica de meio | Firmware e protocolo de mesh LoRa com app (fonte: docs do projeto) | "Protocolo de mesh leve e híbrido para rádios de pacotes", biblioteca C++ com firmwares prontos (README) | Modelo de camadas do qual a internet é feita |
| **Onde roda a pilha** | No **computador ou celular** (Python); o RNode é só o modem de rádio | **No próprio rádio** (firmware), com o celular como interface | No próprio rádio (firmware), com funções fixas: cliente "companion", repetidor, servidor de sala (README) | No sistema operacional |
| **Endereçamento** | **Hash de chave pública** (16 bytes), sem alocação; portátil entre meios | ID de nó de 4 bytes, derivado do endereço MAC do Bluetooth (docs) | Não confirmado por mim | Endereço IP atribuído + DNS |
| **Roteamento** | Announces assinados, tabela de próximo salto, até 128 saltos, sob demanda | Difusão (*flooding*) para broadcast; desde a versão 2.6, abordagem diferente para mensagens diretas (docs, com campo de próximo salto no cabeçalho); campo de limite de saltos de 3 bits (docs) | Roteamento híbrido; repetidores de função fixa (README) | Protocolos de roteamento configurados (BGP, OSPF etc.) |
| **Criptografia** | Obrigatória, por pacote: X25519, AES-256-CBC, sigilo futuro em links | Cifra o payload (docs: só o subpacote é cifrado, o cabeçalho não). Detalhes de chave: veja o Módulo 9 | Não confirmado por mim | Opcional, em camadas acima (TLS) |
| **Tamanho de pacote** | MTU 500 bytes, dividido em 2 quadros LoRa no RNode | Até 237 bytes de dados no quadro (docs) | Não confirmado por mim | 1500 (Ethernet) |
| **Meios** | LoRa, Wi-Fi, Ethernet, TCP, I2P, serial, packet radio (KISS) etc. | LoRa (principal), com ponte MQTT (o cabeçalho tem flag "via MQTT") | Rádios de pacotes e LoRa | Praticamente todos, com IP |
| **Aplicações** | LXMF, Sideband, NomadNet, MeshChat, `rncp`, `rnsh` etc. | App próprio (celular, web); mensagens, telemetria, posição | Apps próprios: Android, iOS, web (README) | Todas |
| **Uma conversa entre desconhecidos** | Exige trocar hashes (sem descoberta de nome global) | Canais e nós vizinhos, ótimo para "quem está por perto" | Semelhante | DNS e busca |
| **Curva de aprendizado** | **Alta**: conceito novo, configuração, Python | Baixa: flash, app, canal | Baixa a média | Conhecida |
| **Licença do software** | *Reticulum License* (com restrições de uso, abaixo); protocolo em domínio público | Consulte o projeto (não verifiquei) | MIT (README) | n/a |

**Como ler a tabela.** Onde escrevi "não confirmado por mim", eu **não** li a fonte primária. O Módulo 9 aprofunda Meshtastic e MeshCore: use-o como referência deles.

### Quando usar cada um

- **Meshtastic ou MeshCore:** você quer falar com pessoas **por perto**, com hardware barato e um app pronto, sem configurar nada e sem computador no meio; o rádio roda a rede sozinho. Ótimos para grupos, trilhas, eventos. Limite: pouca flexibilidade fora do próprio ecossistema; escala de flooding em rede lotada (Módulo 9, Aula 3).
- **Reticulum:** você quer **uma rede sua**, que junte **vários meios** (LoRa com Wi-Fi e internet), com **endereço estável** independente de onde estiver, transferência de arquivos, páginas, mensagens assíncronas com armazenar e encaminhar e integração com programas seus. Custo: precisa de um computador ou celular rodando a pilha em cada nó, e curva de aprendizado maior. Bom para infraestrutura pessoal ou comunitária mais durável.
- **IP tradicional:** quando há banda e infraestrutura confiável. Para qualquer coisa que exija muita banda ou baixa latência, é o certo. O Reticulum não compete nisso.
- **Juntos:** os ecossistemas são **separados**: protocolos diferentes que **não interoperam diretamente** (não encontrei ponte oficial). Um mesmo hardware LoRa costuma servir a um ou outro conforme o firmware instalado (Módulo 8). Em geral, escolha um por rede.

Nota sobre "RNode = só modem": o repositório do RNode mostra que o firmware é um adaptador de rede LoRa para o computador. Existe também um projeto de comunidade, `microReticulum` (C++), que traz a pilha para microcontroladores e uma variante de firmware RNode que implementa um transport node; não o avaliei.

## Maturidade em setembro de 2026

### Está ativo?

**Sim, muito.** Fatos (GitHub e PyPI, lidos em 24 de setembro de 2026):

- Último commit em `markqvist/Reticulum`: **24 de setembro de 2026** (Mark Qvist, "Updated readme").
- Versões: o `Changelog.md` lista **28 números de versão de 1.2.0 (28 abr 2026) a 1.5.4 (11 set 2026)**. PyPI `rns` **1.5.4**, publicada em **11 de setembro de 2026**.
- O que mudou recentemente (Changelog): 1.5.0 (22 ago 2026) melhorou bastante o tratamento de tráfego do transporte, com filas de prioridade; 1.5.1 (28 ago) adicionou controle adaptativo de entrada e saída e mais estatísticas no `rnstatus`; 1.5.2 (28 ago) corrigiu uma regressão em transferências de Resource introduzida na 1.5.1; 1.5.3 e 1.5.4 (set) trouxeram melhorias no `rngit` e correções de BLE do RNode.
- O manual e o código descrevem descoberta de interfaces, blackhole, rngit e outras funções que **não existiam** na época das primeiras versões: o projeto evolui.
- `LXMF` 1.1.1 (30 jul 2026), `Sideband` 2.1.0 (28 ago 2026), `NomadNet` 1.4.3 (11 set 2026), `RNode Firmware` 1.86 (abr 2026), `MeshChat` v2.4.0 (jul 2026).

O manual afirma: API e formato de fio "completos e estáveis, mas podem mudar se absolutamente necessário". Uma regressão numa versão 1.5.1 corrigida em horas na 1.5.2 é exemplo de que **versões novas às vezes quebram**: prefira fixar versões em nós de infraestrutura e testar antes de atualizar.

### O risco do mantenedor único

- **Contribuições:** no espelho do GitHub, `markqvist` tem cerca de **2191 commits** contra **23** do segundo colocado (API de contribuidores), ou seja, o projeto é, na prática, do autor.
- **`MIRROR.md`** (adicionado em 27 de dezembro de 2025): o autor declara que o repositório é **espelho público**, que se retira de toda **interação pública** com o projeto, que **não haverá suporte, respostas a issues, discussões nem gestão de comunidade** em qualquer fórum público, e que "isto não é uma pausa temporária". Diz que o software "permanece disponível para uso como está", e que atualizações "podem aparecer em intervalos imprevisíveis". Convida quem quiser a construir sobre o código, já que o protocolo é público.
- **Na prática, desde então:** o volume de releases **continuou alto** (28 versões em 4,5 meses, listadas acima). Os READMEs de Sideband e NomadNet informam que o desenvolvimento acontece fora do GitHub, e que o código mais recente do Sideband só está disponível **pelo próprio Reticulum**. O `Changelog` traz um comando `rngit release ... fetch` (Git e releases sobre Reticulum) para baixar versões assinadas.
- **`Contributing.md`:** exige coordenação prévia com o mantenedor antes de PRs; **proíbe contribuições escritas com LLMs**; e exige **cessão de copyright** do código contribuído (CLA). Tom duro com iniciantes.

**Leitura de risco:** o projeto está **vivo**, mas depende de uma pessoa que já disse que não dará suporte público e que a pausa não é temporária, mesmo continuando a publicar. Isso significa (a) **suporte comunitário**, não do autor: você aprende pelo manual e pelo código; (b) **risco de continuidade** (saúde, cansaço, decisão) que a licença e o protocolo público em parte mitigam, mas não eliminam; (c) o tom do projeto pode ser um atrito para novatos.

### Licença: não é "open source" no sentido comum

O código-fonte do Reticulum (cabeçalho dos arquivos, `LICENSE`) é a **Reticulum License**: um texto tipo MIT com **duas restrições adicionais**: (1) proíbe o uso "em qualquer sistema que inclua entre suas funções a capacidade de causar dano intencional a seres humanos", (2) proíbe o uso, direto ou indireto, na criação de **conjuntos de dados de treino de IA, aprendizado de máquina ou modelos de linguagem**. O GitHub não reconhece a licença (marca como "NOASSERTION"). Pela minha leitura, restrições de campo de uso a tiram da definição de *open source* da OSI; **não sou advogado**: se pretende usar o Reticulum em produto comercial, em pesquisa ou em qualquer coisa que toque IA, **leia a licença e consulte um advogado**. Para montar uma rede pessoal, as restrições não interferem no uso.

- O **protocolo** foi dedicado ao **domínio público** em 2016 (manual). Por isso existem **reimplementações independentes** que não estão sob a Reticulum License.
- Outras licenças no ecossistema: **Sideband** CC BY-NC-SA 4.0 (não comercial); **NomadNet** e **RNode Firmware** GPL-3.0; **MeshChat** MIT.

### Reimplementações do protocolo (mitigam o risco de implementação única)

Encontradas por busca e **não avaliadas por mim**: `microReticulum` (C++, para microcontroladores e nativo); `rsReticulum` e `rns-rs` (Rust); `leviculum` (Rust), que se descreve como "ainda não pronto para produção". O `rsReticulum` diz explicitamente que **a implementação Python continua sendo a de referência**, e seu alvo de compatibilidade era a versão 1.3.8, com utilitários como `rnx` e `rngit` ainda não implementados. Ou seja: **existe ecossistema**, mas a implementação Python define o protocolo.

### Segurança: sem auditoria externa

A página oficial de primitivas (lida em setembro de 2026) diz que o Reticulum "é um software relativamente jovem", "foi construído com as melhores práticas de criptografia em mente" e "**não foi auditado externamente**", podendo ter falhas de privacidade ou segurança. Em dezembro de 2024 o autor abriu uma discussão sobre organizar uma auditoria com a Trail of Bits (discussão nº 628); **não encontrei que ela tenha ocorrido**, e a página oficial ainda diz o contrário. Existem críticas independentes de privacidade circulando (por exemplo, um documento no Codeberg discutido em um fórum da comunidade), contestadas por parte da comunidade; **não as avaliei**. Regra para você: **não confie a vida ou a liberdade de alguém** somente ao Reticulum enquanto não houver auditoria.

### Limitações funcionais (do próprio roadmap e do manual)

Ainda não implementados (Roadmap do repositório): **DNS distribuído** (nomes legíveis), **multicast global**, **seleção de caminho por métrica e múltiplos caminhos**, **proxy de destinos**. Multi-hop para destinos de grupo: planejado (manual). Sideband **sem iOS** (README). E você não tem busca global: precisa trocar hashes ou usar diretórios de nós e apps.

### Documentação: pequenas inconsistências

Páginas do mesmo manual mostram rodapés de versões diferentes (1.4.2, 1.5.0, 1.5.1, 1.5.4) porque foram geradas em datas distintas; o README do LXMF ainda cita AES-128 onde o Reticulum documenta AES-256; a saída do `rnsd` no manual mostra versão 0.5.8. Lição: quando o texto e o código divergirem, **vale o código da sua versão** (a Aula 2 seguiu isso).

## Recomendações práticas para o seu projeto

1. **Trate o Reticulum como excelente, jovem e não auditado.** Sirva a uso pessoal e comunitário, não a missão crítica.
2. **Fixe versões** (`pip install rns==<versão>`) em nós de infraestrutura e guarde a `.whl`; teste antes de atualizar.
3. **Faça backup** das identidades e das configurações.
4. **Aprenda o protocolo** (esta trilha) para não depender de suporte: o manual e o código são a fonte.
5. **Tenha um plano B** de comunicação para emergências (o Módulo 5 mostra alternativas legais).

## Resumo

- Reticulum é **pilha de rede** multimeio (roda no computador; RNode é o modem); Meshtastic e MeshCore são **mesh de LoRa com app**, com a pilha no próprio rádio; IP é o padrão para banda abundante. Ecossistemas separados.
- Reticulum vale a pena para uma **rede própria multimeio** com endereço estável, arquivos e mensagens assíncronas; Meshtastic e MeshCore para grupo local e simplicidade.
- **Está ativo em setembro de 2026**: último commit em 24 de setembro, PyPI `rns` 1.5.4 (11 set), 28 versões desde abril.
- **Mantenedor único**: o autor declarou em `MIRROR.md` (dez 2025) que se retirou da interação pública e não dará suporte, mas continua publicando; releases quebram às vezes.
- **Licença** com restrições (dano a humanos, treino de IA), fora da definição OSI; protocolo em domínio público; reimplementações existem.
- **Sem auditoria externa** (página oficial); funcionalidades como DNS distribuído e multicast global ainda são roadmap.

## Para aprofundar

- [ ] [Changelog do Reticulum](https://github.com/markqvist/Reticulum/blob/master/Changelog.md) (GitHub, espelho oficial): histórico de versões, correções e recursos por data.
- [ ] [MIRROR.md](https://github.com/markqvist/Reticulum/blob/master/MIRROR.md) e [Contributing.md](https://github.com/markqvist/Reticulum/blob/master/Contributing.md) (GitHub): a posição do autor sobre suporte e contribuições, e o processo de contribuição.
- [ ] [Cryptographic Primitives](https://reticulum.network/crypto.html) (site oficial): primitivas e o aviso de não auditoria.
- [ ] [Roadmap do Reticulum](https://github.com/markqvist/Reticulum/blob/master/Roadmap.md) (GitHub): o que ainda não existe.
- [ ] [Mesh Broadcast Algorithm](https://meshtastic.org/docs/overview/mesh-algo/) (documentação do Meshtastic) e [MeshCore (GitHub)](https://github.com/meshcore-dev/MeshCore): as fontes usadas na comparação.
- [ ] [Reticulum vs. Meshtastic: Key Differences Explained!](https://www.youtube.com/watch?v=BsAMeMp1hlg) (Vivian Van Zyl, LoraMeshDevices.com): comparação em vídeo; não assisti e o canal é de uma loja de hardware, considere o viés comercial.
- [ ] [Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md): Meshtastic e MeshCore em detalhe.

[Próxima aula: Laboratório guiado](./10%20-%20Laboratorio%20Guiado.md)
