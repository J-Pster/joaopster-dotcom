[Voltar ao módulo](./README.md)

# Aula 1: Definir o projeto e desenhar a rede

*Pergunta que esta aula responde: antes de comprar qualquer placa, como transformo "quero uma rede privada" em requisitos, escolha de meio, orçamento e um desenho que eu consiga testar e defender do ponto de vista legal?*

> Preços de hardware verificados em setembro de 2026 nas páginas oficiais da Raspberry Pi e nas lojas citadas nos módulos anteriores; são valores em dólar, sem frete e sem impostos de importação (que no Brasil pesam e eu não pesquisei). Esta aula não dá parecer jurídico: ela aponta para as aulas do curso que ensinaram cada regra.

## Por que projetar antes de comprar

Você é desenvolvedor: pense nisso como levantamento de requisitos antes de escolher stack. O erro típico de quem chega ao rádio é comprar duas placas LoRa, ligar, ver que "funciona a 300 m" e concluir que o resto é ajuste. O que o curso mostrou é o contrário: o alcance é dominado por altura e visada ([Módulo 2, Aula 3](../02%20-%20Propagacao%20de%20Radio/03%20-%20Linha%20de%20Visada%20Horizonte%20e%20Fresnel.md)), o ar é escasso ([Módulo 9, Aula 3](../09%20-%20Redes%20Mesh/03%20-%20Limites%20Fisicos%20da%20Mesh%20sobre%20LoRa.md)) e a legalidade depende do regime, que decide até se o equipamento pode ser cifrado ([Módulo 5, Aula 6](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md)). Essas três coisas se decidem no papel, e custam zero.

O entregável desta aula é um **documento de projeto de uma página**. Todas as aulas seguintes o alimentam e o corrigem.

## Passo 1: requisitos (as respostas viram números)

Responda por escrito, com número quando houver:

| Pergunta | Por que importa | Onde o curso ensinou |
|---|---|---|
| **Quem** usa (2 pessoas, família, bairro)? | Define o tráfego. Uma rede LoRa de um canal comporta algumas dezenas de usuários ativos | [M9, Aula 8](../09%20-%20Redes%20Mesh/08%20-%20Planejamento%20de%20Rede.md) |
| **Onde** estão (casa fixa, a pé, carro, mato)? | Define altura, antena e se há nós móveis | [M4, Aula 5](../04%20-%20Antenas/05%20-%20Tipos%20de%20Antenas.md) |
| **O que** trafega (texto, posição, telemetria, arquivo pequeno)? | Voz e imagem não cabem em LoRa | [M8, Aula 2](../08%20-%20LoRa%20e%20LoRaWAN/02%20-%20Parametros%20SF%20BW%20CR%20e%20Tempo%20no%20Ar.md) |
| **Distância** entre os pontos mais afastados e o terreno? | Entra no orçamento de enlace | [M2, Aula 8](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md) |
| **Disponibilidade** (conversa casual ou emergência)? | Decide energia, redundância e contingência | Aula 10 deste módulo |
| **Privacidade** (canal cifrado, sem internet, sem metadados)? | Decide o regime legal e o software | [M9, Aula 9](../09%20-%20Redes%20Mesh/09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md), [M10, Aula 8](../10%20-%20Reticulum/08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md) |
| **Ligação com a internet** (nenhuma, opcional, obrigatória)? | Decide se há gateway (Aula 8) | [M11](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md) |
| **Orçamento** e tempo de manutenção que aceito? | Nó remoto quebra; alguém precisa subir lá | Aula 10 |

Se você não consegue responder "quem" e "o quê", ainda não tem projeto: tem uma vontade.

## Passo 2: escolher o meio

Os módulos anteriores deram as opções. Aqui elas viram uma tabela de decisão, não uma lista de nomes:

| Necessidade | Escolha razoável | Por quê |
|---|---|---|
| Mensagens curtas entre pessoas, pouco esforço, apps prontos | **Meshtastic** ([M9, Aulas 4 e 5](../09%20-%20Redes%20Mesh/05%20-%20Meshtastic%20na%20Pratica.md)) | Firmware pronto, apps para celular, comunidade grande |
| Ligar meios diferentes (LoRa, Wi-Fi, TCP, packet) na mesma rede, endereço por chave pública, sem servidor | **Reticulum** ([M10](../10%20-%20Reticulum/README.md)) | Camada de rede própria, agnóstica ao meio; mais trabalho e projeto de mantenedor único ([M10, Aula 9](../10%20-%20Reticulum/09%20-%20Comparacao%20Maturidade%20e%20Riscos.md)) |
| Sensores enviando dados a um servidor, muitos dispositivos | **LoRaWAN** com gateway próprio ([M8, Aulas 5 e 6](../08%20-%20LoRa%20e%20LoRaWAN/06%20-%20Redes%20TTN%20ChirpStack%20Helium%20e%20Gateway%20Proprio.md)) | Estrela com servidor; não é malha e não serve para conversa |
| Comunicação aberta, identificada, com voz, HF ou VHF | **Radioamador** ([M5](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/README.md), [M7](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/README.md)) | Exige licença e proíbe cifrar |
| Pouco alcance (mesma propriedade), sem licença | Wi-Fi ou rede cabeada comum | LoRa é a ferramenta errada para 200 m |

Meshtastic e Reticulum podem coexistir, cada um no seu hardware, mas **dividem o mesmo ar** (915 MHz): dois sistemas transmitindo na mesma faixa aumentam colisões ([M9, Aula 3](../09%20-%20Redes%20Mesh/03%20-%20Limites%20Fisicos%20da%20Mesh%20sobre%20LoRa.md)). Se você quer os dois, teste em bancadas separadas e meça a ocupação do ar (Aula 9).

A pergunta de arquitetura que o [Módulo 11](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md) trata (quem guarda o quê, onde estão os pontos únicos de falha) entra aqui como decisão simples: **onde ficam o gateway, o relógio e o armazenamento das mensagens?** Uma rede em que o único nó com internet é o seu Raspberry Pi da sala tem um ponto único de falha, e você precisa saber disso desde o desenho.

## Passo 3: desenho de referência

Um desenho que a maioria dos projetos privados pequenos acaba tendo:

```
[Nó móvel]   [Nó móvel]
     \          /
      \  LoRa  /
   [Nó de morro solar]---LoRa---[Nó de morro solar 2]
            \                        /
             \         LoRa         /
              [Nó fixo alto em casa]
                     | USB / SPI
              [Raspberry Pi gateway]---- rede local / internet (opcional)
                     |
              [serviços locais: mensagens, status, monitoramento]
```

Três papéis distintos, cada um com exigências diferentes:

- **Nós móveis:** placa com bateria, antena pequena, celular como interface. Fáceis. Nada de Raspberry Pi.
- **Nós remotos de morro:** microcontrolador (nRF52 ou ESP32), energia solar, caixa estanque, mastro. É aqui que o projeto realmente é difícil (Aula 2).
- **Gateway em casa:** Raspberry Pi com energia da rede, SSD ou SD com proteção, rede local. É onde você, desenvolvedor, se sente em casa (Aulas 3, 7 e 8).

Regra de projeto: **o Raspberry Pi vai onde há energia e teto; o microcontrolador vai onde não há**. A Aula 2 mostra a conta que justifica isso.

## Passo 4: orçamento

Preços oficiais e de lojas, setembro de 2026, em dólar, sem frete e sem impostos:

| Item | Preço | Fonte |
|---|---|---|
| Raspberry Pi Zero 2 W | US$ 15 | Página oficial do produto |
| Raspberry Pi 4 (1 GB) | US$ 35 | Comunicado oficial de preços, abril de 2026 |
| Raspberry Pi 5 (1 GB / 2 GB) | US$ 45 / US$ 65 | Comunicados oficiais, fevereiro e abril de 2026 (com a tabela do CNX Software) |
| Raspberry Pi 5 (8 GB / 16 GB) | US$ 175 / US$ 305 | CNX Software, abril de 2026, a partir do comunicado oficial |
| Placa LoRa Heltec V3 | ~US$ 30 | Aula 3 do Módulo 8 |
| Wio-SX1262 com XIAO ESP32S3 | ~US$ 11 | Aula 3 do Módulo 8 |
| RAK4631 (só o módulo-núcleo) | US$ 18 a 24 | Aula 3 do Módulo 8 |
| Nó solar completo (RAK, painel de 6 W, bateria de 10.000 mAh, caixa, antena de 5 dBi, suporte) | ~US$ 120 por nó | Relato de montagem de Dan Pupius (para quatro nós, sem impostos) |

Duas observações que mudaram em 2026:

1. **A memória subiu de preço.** A Raspberry Pi informou em comunicados oficiais (outubro de 2025, fevereiro e abril de 2026) aumentos sucessivos nos modelos 4 e 5 com 2 GB ou mais, atribuídos à alta de custo da memória LPDDR4 (a empresa fala em aumento de sete vezes em um ano). Os modelos "clássicos" com memória LPDDR2 (Zero, 3 e anteriores) não tiveram aumento. **Você não precisa de um Pi 5 de 16 GB para um gateway de rede LoRa:** o Pi 4 de 1 GB ou o Zero 2 W bastam (Aula 2). Comprar mais do que precisa é o erro caro deste ano.
2. **Preço de módulo não é preço de conformidade.** O item mais caro de uma rede legal pode ser o equipamento com homologação da Anatel, não a placa (Módulo 8, Aula 3, seção sobre homologação).

Monte a sua planilha com colunas: item, quantidade, preço unitário, frete/imposto estimado, onde compra, situação de homologação. **Deixe a coluna "homologação" em branco até preenchê-la com um documento real** (certificado ou declaração de conformidade); é ela que decide se o item entra.

## Passo 5: legalidade no desenho

Antes de fechar o desenho, responda estas quatro, e só siga com a resposta escrita:

1. **Em que regime esta rede opera?** Radiação restrita (915 a 928 MHz, equipamento homologado, sem licença de usuário, sem proteção contra interferência), radioamador (licença, aberta, sem cifra) ou PX. Se a resposta for "não sei", volte ao [Módulo 5, Aula 6](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md).
2. **O equipamento está homologado?** O que o [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md) trouxe: placas de desenvolvimento importadas normalmente não têm certificação Anatel, e existe uma via de declaração de conformidade para uso próprio. Uma parte do enquadramento do LoRa de canal fixo ficou "não confirmada" lá; ela continua não confirmada aqui.
3. **A rede é cifrada?** Cifra e serviço amador são incompatíveis ([Módulo 5, Aula 5](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md)); a cifra do Meshtastic e do Reticulum só cabe no regime de radiação restrita ([Módulo 9, Aula 9](../09%20-%20Redes%20Mesh/09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md); [Módulo 10, Aula 8](../10%20-%20Reticulum/08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md)).
4. **Há ligação com a internet?** Um gateway que injeta tráfego LoRa na internet muda o modelo de ameaça (metadados, MQTT público) e, se houver serviço a terceiros, o quadro regulatório. Aula 8.

**Aviso de limite:** esta aula e o módulo ensinam a projetar e montar uma rede pequena, de uso próprio, com equipamento de baixa potência. Redes que atendem a terceiros, comercializam serviço, ou usam amplificadores e antenas acima do certificado saem do que o curso cobre e exigem consulta à Anatel e, quando cabível, a um profissional habilitado.

## Entregável: documento de projeto (uma página)

Crie o arquivo `projeto.md` com estas seções, preenchidas:

1. **Objetivo** em uma frase e a lista de usuários.
2. **Requisitos** (tabela do Passo 1, com números).
3. **Meio escolhido** e por quê (tabela do Passo 2).
4. **Topologia**: desenho em texto, com os nós, papéis e o gateway.
5. **Orçamento** (planilha do Passo 4) e o total.
6. **Regime legal** e situação de homologação de cada item.
7. **Riscos**: os cinco maiores (energia, raio, homologação, ponto único de falha, seu tempo).
8. **Critério de sucesso**: um teste medível (por exemplo, "mensagem entregue entre a sala e o morro X em 9 de cada 10 tentativas").

## Checklist da etapa

- [ ] Respondi as oito perguntas do Passo 1 com números.
- [ ] Escolhi o meio com a tabela e sei o que estou deixando de fora.
- [ ] Tenho o desenho com três papéis (móvel, remoto, gateway).
- [ ] O orçamento tem a coluna de homologação preenchida ou marcada "pendente".
- [ ] Sei em que regime a rede opera e o que esse regime proíbe.
- [ ] Escrevi o critério de sucesso.

## Resumo

- Projeto de rádio se decide no papel: alcance vem de altura e visada, o ar é escasso, e o regime legal decide se pode cifrar.
- Meshtastic serve para mensagens com pouco esforço; Reticulum, para unir meios diferentes com endereço por chave; LoRaWAN, para sensores em estrela; radioamador, para comunicação aberta e licenciada.
- Três papéis: móvel (placa com bateria), remoto (microcontrolador com solar) e gateway (Raspberry Pi onde há energia).
- Em 2026 os Raspberry Pi 4 e 5 com 4 GB ou mais ficaram bem mais caros por causa da memória; para gateway, 1 GB ou um Zero 2 W bastam.
- O documento de projeto de uma página, com critério de sucesso medível, é o entregável.

## Para aprofundar

- [ ] [Raspberry Pi: "A new 3GB Raspberry Pi 4 for $83.75, and more memory-driven price increases"](https://www.raspberrypi.com/news/a-new-3gb-raspberry-pi-4-for-83-75-and-more-memory-driven-price-increases/) (Raspberry Pi, comunicado oficial): explica a alta de preço da memória e quais modelos foram afetados.
- [ ] [Raspberry Pi Zero 2 W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) (Raspberry Pi, página do produto): especificações do modelo de US$ 15 e o prazo de produção garantido (ao menos até janeiro de 2030).
- [ ] [Planejamento de rede (Módulo 9, Aula 8)](../09%20-%20Redes%20Mesh/08%20-%20Planejamento%20de%20Rede.md): o método de sítios, papéis e testes que este documento de projeto aplica.
- [ ] [Meshtastic Site Planner](https://meshtastic.org/docs/software/site-planner/) (Meshtastic, ferramenta aberta, citada no Módulo 9): mapa de cobertura previsto a partir de terreno; a própria documentação manda validar com teste real.

[Próxima aula: Hardware embarcado e energia](./02%20-%20Hardware%20Embarcado%20e%20Energia.md)
