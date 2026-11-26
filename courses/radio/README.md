# Estudo de Rádio: Trilha de Aprendizado

Objetivo final: entender rádio, RF, LoRa, redes mesh e arquiteturas descentralizadas (Reticulum, P2P) o
suficiente para projetar e montar minha própria rede de comunicação privada.

## Filosofia da trilha: o porquê antes do como

Este curso é montado para quem só aceita conhecimento novo depois de entender o fundamento por trás
dele, a física, a lógica, o motivo. Por isso, cada módulo segue a mesma regra interna: primeiro o
**porquê** (o que causa o fenômeno, qual problema real está sendo resolvido), só depois o **como**
(equipamento, configuração, prática). E os módulos entre si seguem a mesma lógica em escala maior:
começamos na física pura da onda eletromagnética e só chegamos em LoRa, redes mesh e Reticulum depois
de ter a base inteira sedimentada, para que cada camada nova se apoie em algo que já faz sentido.

## Estrutura: 12 módulos, em ordem de dependência

O conteúdo principal é **texto escrito para este curso**: cada módulo tem uma pasta com um `README.md`
(índice das aulas e checklist de saída) e vários arquivos de aula, cada um com o porquê, o mecanismo, o
método e um resumo de revisão. Links (artigos, documentação oficial, vídeos) entram só como apoio, e em
maior número nos módulos práticos (6 a 10 e 12).

| # | Módulo | Do que trata |
|---|--------|--------------|
| 1 | [Física de Ondas e Espectro Eletromagnético](./01%20-%20Fisica%20de%20Ondas%20e%20Espectro%20Eletromagnetico/README.md) | A física pura: o que é uma onda EM, frequência, comprimento de onda, amplitude, o espectro completo |
| 2 | [Propagação de Rádio](./02%20-%20Propagacao%20de%20Radio/README.md) | Por que HF reflete na ionosfera e viaja longe, e por que VHF/UHF dependem de linha de visada |
| 3 | [Modulação](./03%20-%20Modulacao/README.md) | Como a informação "pega carona" numa onda portadora: AM, FM, e depois ASK/FSK/PSK |
| 4 | [Antenas](./04%20-%20Antenas/README.md) | Ressonância, impedância, SWR, tipos de antena, dummy load |
| 5 | [Rádio Amador, Regulamentação e Prática](./05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/README.md) | Licença, bandas, call sign, regras de conteúdo/criptografia, operação básica |
| 6 | [SDR, Software Defined Radio](./06%20-%20SDR%20-%20Software%20Defined%20Radio/README.md) | Rádio definido por software, RTL-SDR, por que RX é mais simples que TX |
| 7 | [Modos Digitais de Rádio Amador](./07%20-%20Modos%20Digitais%20de%20Radio%20Amador/README.md) | FT8, pacotes de dados sobre áudio, VARA |
| 8 | [LoRa e LoRaWAN](./08%20-%20LoRa%20e%20LoRaWAN/README.md) | Por que LoRa alcança tão longe com tão pouca potência, LoRa vs. LoRaWAN, primeiro link |
| 9 | [Redes Mesh](./09%20-%20Redes%20Mesh/README.md) | Por que mesh existe, roteamento conceitual, Meshtastic, MeshCore |
| 10 | [Reticulum](./10%20-%20Reticulum/README.md) | A "pilha de rede alternativa": filosofia, criptografia, roteamento, interfaces, gateways |
| 11 | [Arquitetura Descentralizada / P2P](./11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md) | Por que a internet centralizou, descentralizado vs. distribuído, redes de emergência |
| 12 | [Projeto Prático, Raspberry Pi + Hardware Embarcado](./12%20-%20Projeto%20Pratico%20-%20Raspberry%20Pi%20e%20Hardware%20Embarcado/README.md) | Capstone: PTT via GPIO, por que decodificadores migram pra Rust, montar o primeiro nó Reticulum/Meshtastic |

## Por que essa ordem

- **1→2→3 (Física → Propagação → Modulação):** você não entende por que HF "dá a volta no mundo" sem
  antes entender onda/frequência; e não entende modulação sem já aceitar que a onda portadora é só um
  "veículo" físico regido pelas regras dos módulos 1 e 2.
- **4 (Antenas)** vem logo depois porque ressonância de antena é uma consequência direta do módulo 1
  (comprimento de onda), é a primeira vez que a física vira uma peça física que você segura na mão.
- **5 (Rádio Amador)** entra aqui porque só faz sentido falar de bandas, potência e regras depois de já
  entender fisicamente o que uma banda de frequência é e o que uma antena faz com ela.
- **6→7 (SDR → Modos Digitais)** é a virada de "rádio como física" para "rádio como dado processado por
  software", pré-requisito direto para entender FT8, pacotes de dados e VARA.
- **8→9 (LoRa → Redes Mesh)** é o ponto em que a trilha converge para o objetivo prático do curso: LoRa é
  a camada de rádio, mesh é a camada de rede construída em cima dela (Meshtastic, MeshCore).
- **10 (Reticulum)** exige que módulos 8 e 9 já estejam entendidos, porque Reticulum é justamente uma
  camada de rede que pode rodar sobre LoRa, mesh, rádio amador ou internet ao mesmo tempo.
- **11 (Descentralização/P2P)** é o "porquê" filosófico que dá sentido a tudo que veio antes, por que
  vale a pena ter uma rede própria em primeiro lugar.
- **12 (Projeto Prático)** é o capstone: junta rádio (módulos 1-7), LoRa/mesh (8-9) e Reticulum (10) num
  projeto real de Raspberry Pi.

## Como usar esta trilha

1. Siga os módulos na ordem da tabela, cada um depende dos anteriores.
2. Dentro de cada pasta, leia as aulas na ordem listada no `README.md` daquele módulo.
3. Marque o progresso nos checkboxes dos links de apoio conforme for usando.
4. Ao final de cada módulo, responda ao "checklist de saída" sem consultar nada, se não conseguir, é
   sinal de que o "porquê" ainda não fixou, e vale revisar antes de avançar.

## Sobre o formato e a curadoria

- **Os vídeos não foram assistidos.** Título e canal foram conferidos, mas a descrição de cada um vem do título.
- **O texto vem de pesquisa na web**, sem abrir todas as normas e sem testar todo o hardware. O que não foi confirmado está marcado como "não confirmado" ou "confira". Trate como ponto de partida.
- **Regulamentação, preços, versões e projetos ativos** foram verificados em setembro de 2026 e mudam rápido. Antes de transmitir, confirme a regra vigente na Anatel.
- **Transmitir exige licença ou homologação.** Radioamador é serviço público e aberto (não é canal privado); rede privada usa equipamento de radiação restrita homologado (ex.: LoRa em 915 MHz). Veja os módulos 5 e 8.
