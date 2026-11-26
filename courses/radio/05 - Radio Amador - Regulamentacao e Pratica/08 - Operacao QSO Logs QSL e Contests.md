[Voltar ao módulo](./README.md)

# Aula 8: Operação prática: CQ, QSO, logs, QSL, concursos e DX

*Pergunta que esta aula responde: como se faz, na prática, um contato de rádio dentro das regras, como se registra e confirma esse contato e o que são concursos e DX?*

> Regras de procedimento conferidas no Ato nº 3448/2026 (itens 10 e 12), verificadas em setembro de 2026. Serviços de confirmação (LoTW, eQSL) e pacotes da LABRE mudam; confira nos sites oficiais.

## Por que existe um procedimento padrão

Do Módulo 3 você sabe que o canal de voz é estreito e ruidoso. Da Aula 5 você sabe que é um meio compartilhado e aberto. Sem protocolo, seria o caos de todos falando ao mesmo tempo. O procedimento de operação é o **protocolo de acesso ao meio**, escrito em parte pela Anatel e em parte pela tradição:

- **Escutar antes de transmitir** (evitar colisão): item 10.3 I do Ato 3448.
- **Chamada curta e limitada** (não travar o canal): no máximo **3 chamadas seguidas** e volta à escuta (10.3 II).
- **Identificação de ambas as estações** ao estabelecer contato, sempre completa (10.3 III e IV).
- **Duração máxima de cada transmissão: 10 minutos**, exceto emergência (10.3 V).
- **Emergência tem prioridade absoluta** (Ato 926, 6.4).

## Anatomia de um QSO por voz (SSB ou FM)

**QSO** é um contato entre duas estações (código Q, Aula 4). A sequência típica:

1. **Escolher a frequência e escutar.** Cheque no plano de faixas (Aula 3) se você pode usar ali. Pergunte "a frequência está em uso?" (`QRL?`) e espere. Se alguém responder, procure outra.
2. **Chamar CQ.** **CQ** é uma chamada geral: "quero contato com qualquer estação". Modelo de chamada em voz (no máximo três vezes, depois escute):
   > "CQ, CQ, CQ, aqui é Papa Yankee Dois Alfa Bravo Charlie, Papa Yankee Dois Alfa Bravo Charlie, escutando."
   **CQ DX** pede contato distante; **CQ** seguido de uma região ou de um modo é possível. Em repetidora, **não** se chama CQ: use "procurando contato" ou "escutando" com o indicativo.
3. **Uma estação responde** com o indicativo dela, seguido do seu.
4. **Você confirma** os dois indicativos e passa o **relatório RS** (por exemplo "cinco e nove"), seu **nome** e sua **localização (QTH)**.
5. **Troca de assuntos** (equipamento, antena, clima, propagação), em trocas curtas. Cada transmissão respeita o limite de 10 min e o indicativo é dito periodicamente.
6. **Encerramento:** "73" (cumprimentos) e ambos os indicativos. Depois, liberar a frequência.
7. **Registro no log.**

Pontos de etiqueta que a comunidade espera:

- **Não interrompa** um QSO em andamento, exceto emergência. Se quiser entrar, espere uma pausa e diga só seu indicativo.
- **Frequências de chamada** só para o primeiro contato; depois combine outra (Aula 7, simplex).
- **Segmentos exclusivos** (piloto, IBP, satélite, repetidoras) são intocáveis para conversa.
- **Linguagem clara e educada**, sem termos obscenos ou ofensivos (Ato 3448, 4.1).
- Ao atender em pileup (muitos chamando um DX), **espere ser chamado** e responda de forma curta.

### Em CW e em modos digitais

- **CW:** o QSO segue a mesma estrutura, com abreviações e código Q. O relatório é **RST** (599 típico). CQ em CW: `CQ CQ CQ DE PY2ABC PY2ABC K` ("DE" = de; "K" = passo a transmissão).
- **Modos digitais** (Módulo 7): FT8, por exemplo, troca automaticamente indicativos, grade de localização e relatório em dB em janelas de tempo. As regras de identificação (indicativo no sinal) e de **não criptografia** continuam valendo.

Veja também o artigo oficial da ARRL [Making Your First Contact](http://www.arrl.org/making-your-first-contact) (em inglês, com regras dos EUA em alguns pontos). A estrutura de QSO é universal, mas **siga as regras brasileiras** acima.

## O log: registrar cada contato

**Log** (ou "caderno de estação") é o registro de cada QSO. No Brasil, segundo o FAQ da LABRE, o registro **não é obrigatório**, mas é prática muito difundida e saudável, e necessário para diplomas como o **DXCC** e o **WAB**. Um log mínimo tem:

| Campo | Exemplo |
|---|---|
| Data e hora (em **UTC**, convenção mundial) | 2026-09-24 18:32 |
| Indicativo do outro | PY4XYZ |
| Frequência ou banda e modo | 7,100 MHz, SSB |
| Relatório enviado e recebido | 59 / 57 |
| Nome, QTH, observações | João, Belo Horizonte |

**Por que UTC:** os contatos cruzam fusos horários e países. Sem uma hora única, não há como conferir um contato entre dois logs, e as confirmações eletrônicas dependem disso.

Programas de log (gratuitos, vários) e sites como QRZ.com guardam essas informações. O formato de intercâmbio padrão em rádio amador para trocar logs entre programas é o **ADIF**. É conceitualmente um arquivo de registros com campos, do jeito que um desenvolvedor imagina.

## QSL: confirmar que o contato aconteceu

Um contato só "conta" para diplomas quando **confirmado** pelos dois lados. Há três caminhos:

### 1. Cartão QSL de papel

Um cartão de **9 cm x 14 cm** com indicativo, data, hora UTC, banda, modo e relatório (FAQ da LABRE). Envio:

- **Direto** (Correios): rápido, mas você precisa do endereço da outra estação (por exemplo consultado no QRZ.com) e paga o envio.
- **Via bureau**: a LABRE e as associações de cada país trocam **lotes** de cartões. É a opção econômica, porém **lenta**. Se quiser resposta rápida, o bureau não serve.
- O bureau é um serviço das associações. No estado de São Paulo, por exemplo, o site da LABRE-SP informa que só **associados** da LABRE-SP o usam; verifique a regra da LABRE do seu estado.

### 2. Confirmação eletrônica

- **LoTW** (Logbook of The World, operado pela ARRL): você envia seu log **assinado digitalmente** com o programa TQSL; um contato só é confirmado quando **as duas estações enviaram** logs coincidentes. É o método mais confiável para diplomas, porque a assinatura digital comprova quem enviou.
- **eQSL**: cartões QSL eletrônicos.
- **QRZ.com** e outros logbooks online.

A LABRE aceita para seu diploma **WAB** ("Worked All Brazil", contatos com todos os estados) confirmações via **LoTW e eQSL**, além do cartão físico (site da LABRE).

**Nota para o desenvolvedor:** o LoTW resolve o mesmo problema que um protocolo de "recibo mútuo assinado": ninguém acredita em um log unilateral; só vale o que os dois lados assinam e o sistema casa. É um bom exemplo de prova de conjunto de logs em vez de confiança em um só.

## Concursos (contests)

Um **concurso** é uma competição de rádio em **janela de tempo** (por exemplo, 24 ou 48 horas), em que se faz **o máximo de contatos válidos** em bandas e modos definidos, com troca **curta e padronizada** (indicativo, relatório e número de série ou região). Pontos dependem de distância, países e bandas.

Por que existem:

- **Treinamento**: operar rápido e com precisão, e testar equipamento e antenas sob pressão.
- **Propagação**: com centenas de estações ativas, você vê em tempo real quais bandas estão abertas para onde.
- **Comunidade**: gera atividade e amizade.

Aspectos regulatórios que aparecem no Ato 3448:

- **Simultaneidade em mais de uma banda** é permitida em **competições internacionais** (10.1 IV). Fora disso, tem limites.
- **Indicativo especial** é concedido por evento (12.3); prefixos PP a PX só a Classe A com participação comprovada em pelo menos dois concursos internacionais (12.12.3).
- Segue valendo a **identificação**, a **ausência de criptografia** e a **potência da sua classe**. Concurso não é licença para exceder limites.

A LABRE organiza concursos e diplomas (páginas de "Contest DX" e "Diplomas" no site).

## DX

**DX** significa "distância" ou "longa distância", em geral contatos com outro país ou continente. O DX é o esporte de propagação: aproveitar a ionosfera (Módulo 2) e horários e bandas adequados para alcançar estações remotas. Diplomas como o **DXCC** (contatos com um certo número de "entidades" ou países, da ARRL) e o **WAB** (todos os estados brasileiros, da LABRE) dão metas.

Algumas práticas:

- Consulte o plano de faixas: há **segmentos DX** marcados (por exemplo, 14,190 a 14,200 MHz em SSB nos 20 m). Não ocupe com conversa local.
- Estações raras (expedições) geram **pileups**: siga as instruções da estação DX e chame só quando indicado.
- Lembre que em HF os **privilégios da sua classe** limitam bandas (Aula 3): um Classe C sem 20 m participa do DX em 10 m, 15 m parcial, 80 m e 6 m.

## Resumo

- O procedimento de operação é o protocolo de acesso ao meio: **escutar antes, chamar no máximo 3 vezes, identificar ambos os indicativos completos, transmissões de até 10 min, emergência primeiro**.
- QSO por voz: verificar frequência livre, chamar CQ, receber resposta, trocar indicativos, RS, nome e QTH, conversar em trocas curtas, encerrar com 73 e registrar. Em repetidora, não se chama CQ.
- Log: não é obrigatório no Brasil, mas é prática recomendada e necessária para diplomas; use **UTC**.
- QSL: cartão (direto ou via bureau) ou confirmação eletrônica (**LoTW** com assinatura digital, **eQSL**). Só conta quando os dois lados confirmam.
- Concurso: competição em janela de tempo com troca curta; DX: longa distância. Ambos seguem as mesmas regras de identificação, sem cripto e com potência da classe.

## Para aprofundar

- [ ] [Making Your First Contact](http://www.arrl.org/making-your-first-contact) (ARRL): estrutura de um primeiro QSO, em inglês. Conceito universal; regras de licença são dos EUA.
- [ ] [FAQ: Perguntas Mais Frequentes](https://www.labre.org.br/faq-perguntas-mais-frequentes/) (LABRE): explica QSL, log, diplomas (WAB) e o papel da LABRE, em português.
- [ ] [Bureaux de QSLs Estaduais](https://www.labre.org.br/bureaux-de-qsls-estaduais/) (LABRE): como funciona o envio de cartões por bureau.
- [ ] [Ferramenta para solicitar o WAB](https://www.labre.org.br/diplomas/ferramenta-para-solicitar-o-wab/) (LABRE): como LoTW e eQSL se integram ao diploma "Worked All Brazil".

[Próxima aula: Segurança, emergência, comunidade e estudo para a prova](./09%20-%20Seguranca%20Emergencia%20Comunidade%20e%20Prova.md)
