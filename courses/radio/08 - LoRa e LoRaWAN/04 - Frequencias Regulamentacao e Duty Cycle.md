# Aula 4: Frequências por região, regulamentação e duty cycle

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: em que frequência, com que potência e com que ocupação de canal posso operar LoRa, no mundo e no Brasil, e o que eu consegui (e não consegui) confirmar nas fontes oficiais?*

> **Aviso.** Esta aula ensina a **ler** a regulamentação. Não é parecer jurídico. Transmitir em radiofrequência no Brasil exige que o equipamento seja **certificado e homologado pela Anatel** (para radiação restrita não há licença de usuário, mas há homologação do produto). Consulte sempre o texto vigente e o certificado do seu produto antes de emitir. Nada aqui orienta contornar regra. Onde não consegui confirmar algo em fonte primária, escrevo "não confirmado". Verificado em setembro de 2026.

## Por que cada região tem seu plano

O LoRa não tem faixa própria. Ele usa as faixas **ISM** (industriais, científicas e médicas) de uso sem licença de usuário. Cada país libera trechos diferentes, com limites diferentes de potência, ocupação de canal e tipo de modulação. Por isso o LoRaWAN define **planos regionais** ([Regional Parameters](https://resources.lora-alliance.org/technical-specifications/rp002-1-0-5-lorawan-regional-parameters), versão RP002-1.0.5, outubro de 2025). A tabela de planos que o The Things Network publica:

| Plano | Faixa | Onde |
|---|---|---|
| EU863-870 (EU868) | 863 a 870 MHz | Europa e países que seguem a CEPT |
| US902-928 (US915) | 902 a 928 MHz | EUA, Canadá e vizinhos |
| **AU915-928 (AU915)** | **915 a 928 MHz** | Austrália, e **Brasil** e vários países da América do Sul |
| EU433 | 433,05 a 434,79 MHz (o Regional Parameters cita 433 a 435 MHz para o Brasil) | Faixa de 433 MHz (região 1 da ITU) |
| AS923 (grupos 1 a 4) | subfaixas entre 915 e 928 MHz | Ásia e outros |
| KR920, IN865, RU864, CN470 | específicos de cada país | Coreia, Índia, Rússia, China |

Para o Brasil, o documento de Regional Parameters (versão 1.0.3 rev A, a que consegui ler na íntegra) traz esta linha: **902 a 907,5 MHz: "Other"; 915 a 928 MHz: AU915-928; 433 a 435 MHz: EU433**. O The Things Network, na sua tabela por país, indica **AU915-928** para o Brasil e cita a Resolução 680/2017 e o Ato 14448/2017 (seção 10.3, escrita assim na página do TTN) como base regulatória. Nesses documentos está a resposta curta à pergunta "qual região LoRaWAN se aplica ao Brasil": **AU915**, com os canais entre 915 e 928 MHz.

**O que não se aplica ao Brasil:** o EU868. A faixa de 863 a 870 MHz não é a do LoRa aqui. No Ato 14448 a única menção a 864 a 868 MHz que vi é uma linha de outro tipo de sistema (com canalização de 100 kHz e seleção dinâmica de canal). Não encontrei previsão de LoRa nessa faixa; portanto, **placa "EU868" não deve ser usada no Brasil** (não confirmado como proibição expressa, mas também não confirmado como permitido). Compre variante de 915 MHz.

## O que a Anatel diz (textos primários que li)

A cadeia é esta:

1. **Lei Geral de Telecomunicações (9.472/1997), art. 162, § 2º:** é vedado usar transmissor de radiofrequência sem certificação expedida ou aceita pela Anatel (citada nos considerandos do Ato 18086/2025, da própria Anatel).
2. **Resolução 680/2017** (Regulamento sobre Equipamentos de Radiocomunicação de Radiação Restrita). Diz (arts. 4º a 6º) que o equipamento deve ter certificação emitida ou aceita pela Anatel; deve trazer a frase de que "não tem direito à proteção contra interferência prejudicial e não pode causar interferência em sistemas devidamente autorizados"; e deve ser projetado para usar **apenas a antena comercializada com o equipamento**, salvo condições específicas dos requisitos técnicos.
3. **Ato 14448/2017**, os requisitos técnicos. A página da Anatel mostra "Última atualização: 14 de outubro de 2025". Ele foi alterado pelo **Ato 14158, de 1º de outubro de 2025**, que, entre outras coisas, **revogou o item 10.3.4.4** (adiante).
4. **Resolução 715/2019**, o regulamento de avaliação da conformidade e homologação (exige homologação prévia para uso e comercialização).

### As duas portas do item 10 (915 a 928 MHz)

O item 10 do Ato 14448 trata de "espalhamento espectral ou outras modulações digitais" nas faixas 902 a 907,5 MHz, 915 a 928 MHz, 2,4 GHz e 5,8 GHz. Para 915 a 928 MHz há dois caminhos técnicos:

**Caminho A: sistemas de salto em frequência** (item 10.2)

- Os canais de salto são separados por pelo menos 25 kHz ou pela largura a 20 dB do canal (o maior dos dois).
- A sequência é pseudoaleatória e cada transmissor usa, em média, igualmente cada frequência.
- **Potência de pico de saída até 1 W** com pelo menos 35 canais de salto, ou 0,25 W com menos de 35 (item 10.2.5.1).
- Se a largura a 20 dB do canal for **menor que 250 kHz**: pelo menos **35 frequências** e **tempo médio de ocupação de qualquer frequência de no máximo 0,4 s em 14 s** (10.2.5.2).
- Se for **250 kHz ou mais**: pelo menos 17 frequências e 0,4 s em 7 s (10.2.5.3).
- Largura máxima a 20 dB do canal de salto: **500 kHz** (10.2.5.4).

**Caminho B: sequência direta ou "outras técnicas de modulação digital"** (item 10.3)

- Largura de faixa a 6 dB de **no mínimo 500 kHz** (10.3.1).
- Potência de pico de saída de no máximo **1 W** (10.3.2).
- Densidade espectral de potência em qualquer faixa de 3 kHz de no máximo **8 dBm** (10.3.3).
- O item 10.3.4 permitia medir a potência pela média e o subitem 10.3.4.4 dispensava esses equipamentos do requisito de 500 kHz. **Esse subitem 10.3.4.4 foi revogado pelo Ato 14158, de 1º de outubro de 2025.** Pela redação atual que li, a dispensa não existe mais.

### Antena de ganho alto

O item 10.5: quem usa antena de transmissão com **ganho direcional acima de 6 dBi** deve **reduzir a potência de pico na saída do transmissor** pelo mesmo número de dB que o ganho excede 6 dBi. Exemplo: antena de 9 dBi exige reduzir 3 dB a potência do transmissor. Pela lógica do texto, quem sobe a antena não sobe o EIRP.

### E o duty cycle?

**Não encontrei um limite de duty cycle (percentual de tempo transmitindo) para LoRa no item 10.** O limite de tempo no item 10.2 é o **tempo médio de ocupação por frequência de salto** (0,4 s em 14 s) descrito acima, e o que ele significa para um pacote LoRaWAN de SF12 (mais de 1 s no ar) **não consegui confirmar**: o texto fala em tempo *médio* de ocupação de "qualquer radiofrequência", e um dispositivo que sorteia canais entre 64 tem baixa ocupação média por canal, mas não vi nenhum documento da Anatel aplicando essa leitura ao LoRaWAN.

Um dado que confunde: o item 6.2 do mesmo Ato fala em "dispositivos de operação periódica", com limite de 2 segundos de transmissão por hora para sinais de supervisão. **Esse item é para sinais de controle (alarme, chave remota) e proíbe expressamente transmissão de dados** (6.2.6.3). Números como "1 a 2 s por hora" que você encontrar em resumos de terceiros podem vir daí e **não** se aplicam a um sensor LoRa que envia leitura.

### Como certificados reais tratam LoRa

Os certificados de homologação que abri:

- **RAK5146** (concentrador LoRa, um módulo): certificado ICC 03.062/2026-I. Tecnologias "Outras" (LoRa e FSK), faixas de transmissão 902 a 907,5 MHz e 915 a 928 MHz, **potência máxima de saída de 0,157 W** (cerca de 22 dBm), "antena integrada", "produto não acabado, cuja integração em outro equipamento requerer nova avaliação".
- **RAK7240V2** (gateway): certificado ICC 06.045/2024.2, mesma potência (0,157 W) e faixas, "possui conector para antena externa"; o módulo LoRa interno é o RAK5146, já homologado.
- Uma certificadora brasileira (ABCP) diz que módulos LoRaWAN AU915 para o Brasil operam na Categoria II (radiação restrita) sob a **seção 10.2.5 do Ato 14448**, isto é, pelo **caminho de salto** (um site de certificadora, não a Anatel).

A leitura coerente com isso (minha, não da Anatel) é que o LoRaWAN AU915, com 64 canais de 125 kHz mais 8 de 500 kHz sorteados a cada transmissão, foi enquadrado no regime de salto.

### O ponto mais delicado: LoRa de canal fixo

Um par de placas conversando **num canal único de 125 kHz** (o que a Aula 7 faz) **não salta** entre frequências (portanto não é claramente um sistema do caminho A) e **não tem 500 kHz de largura a 6 dB** (portanto, depois de outubro de 2025, não está claramente no caminho B). O que se conclui: **um LoRa ponto a ponto de canal fixo em 125 kHz pode não se enquadrar em nenhum dos dois caminhos do item 10** para efeito de certificação. Isso é **minha leitura dos textos, não uma posição da Anatel**, e não consegui confirmar. O que estou seguro em dizer:

- Produtos certificados que a Anatel aceitou foram avaliados pelo fabricante em algum enquadramento; o certificado do produto e o manual dizem qual.
- Uma placa de desenvolvimento genérica não carrega essa garantia.

Por isso, este módulo trata o ponto a ponto como **exercício técnico** e as escolhas legais aparecem na Aula 7.

## Homologação de produto importado para uso próprio

A Anatel mantém o procedimento de **Declaração de Conformidade para uso próprio**: pessoa física ou jurídica que importa um produto **sem finalidade de comercialização** nem de prestação de serviço de telecomunicações pode pedir homologação da unidade. Do que li na página oficial:

- Só vale para produtos de **Categoria II** que **não fiquem ligados à rede elétrica** durante o uso (por segurança elétrica). A lista de exemplos da Anatel inclui, textualmente, **placas de circuito impresso com interfaces sem fio para pesquisa e desenvolvimento (produtos não acabados)**.
- É para a **unidade** (identificada pelo número de série), não para o modelo.
- Exige, entre outros documentos, cópia do certificado estrangeiro (por exemplo, FCC) e o manual do produto (manual da Anatel).
- Desde 25 de outubro de 2019 o certificado de homologação é emitido **sem cobrança**, segundo o FAQ da Anatel. O manual de declaração para uso próprio que abri ainda fala em boleto e em meta de análise de 80% dos pedidos em 45 dias, então os dois textos não batem: **confira a versão vigente**.
- Os requisitos técnicos do Ato 14448 **continuam valendo**: a homologação por declaração não perdoa um produto que não os atenda.
- Gateways ligados à tomada não entram nessa via.

Esses trâmites mudam. Confira o "Manual para homologação de outros produtos de telecomunicações para uso próprio" na página da Anatel antes de comprar.

## O radioamador entra onde? (ligação com o Módulo 5)

A faixa de 915 a 928 MHz também é faixa amadora (33 cm; [Módulo 5, Aula 3](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/03%20-%20Bandas%20Classes%20e%20Potencia.md)). Um radioamador com licença pode operar LoRa ali, **desde que** siga as regras do serviço: comunicação aberta, identificada, sem criptografia e sem fins comerciais ([Aula 5](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md) e [Aula 6](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md) do Módulo 5). Nesse regime o produto é homologado por declaração de conformidade e o operador responde pela estação (conforme a Aula 6 do Módulo 5). Consequências práticas:

- **LoRaWAN cifrado (AES-128) não é compatível com o serviço amador** (a criptografia é proibida, item 6.11 do Ato 926, segundo o Módulo 5).
- **Em 433 MHz o LoRa não pode ser usado no serviço amador**: o item 6.12 do Ato 926 proíbe espalhamento espectral e salto em frequência abaixo de 440 MHz (Módulo 5).
- Para uma rede **privada** (o objetivo do curso), o serviço amador não serve. O caminho é radiação restrita com produto certificado.

## Faixa de 433 MHz

No Ato 14448, item 4.1.5: a faixa de **433 a 435 MHz** pode ser usada por equipamentos de radiação restrita com potência irradiada de no máximo **10 mW EIRP**, com emissões fora da faixa abaixo de 250 nW EIRP (até 1 GHz). O Regional Parameters lista EU433 para o Brasil. Dez miliwatts é 10 dBm; contra os 22 dBm de módulos típicos de 915 MHz, é uma perda de 12 dB, o que compensa parte da vantagem de propagação da frequência mais baixa (Módulo 2). Mesmo assim, valem as regras de homologação.

## Como é em outras regiões (para você entender o contraste)

- **Europa (EU868):** o limite é de **ciclo de trabalho** (duty cycle), por sub-banda, conforme a norma ETSI EN 300 220. A página do TTN lista: 863 a 865 MHz: 0,1%; 865 a 868 MHz: 1%; 868 a 868,6 MHz: 1%; 868,7 a 869,2 MHz: 0,1%; 869,4 a 869,65 MHz: 10%; 869,7 a 870 MHz: 1%. O LoRaWAN define também 1% para as frequências de *join* na maior parte das regiões.
- **EUA (US915):** não há duty cycle, mas há limite de tempo por canal: **400 ms** de tempo no ar em canal de 125 kHz, o que limita o payload de aplicação a 11 bytes no SF mais alto permitido (SF10), segundo a Semtech.
- **Austrália (AU915, e a referência para o Brasil no LoRaWAN):** o documento de Regional Parameters diz que dispositivos AU podem usar **EIRP máximo de +30 dBm** (é um padrão do protocolo, não a lei brasileira) e trata o limite de 400 ms como uma opção (*UplinkDwellTime*), ligada só quando a regulamentação local exige; o plano de canais do TTN para o Brasil usa o rótulo "dwell time disabled".

Esse é o motivo de eu ter separado tanto o que é do protocolo e o que é da lei: **a especificação LoRaWAN não é regulamentação**. A regra que vale no Brasil é a da Anatel.

## Duty cycle na prática: contas com o tempo no ar

**Duty cycle** é a fração do tempo em que você está transmitindo: `DC = ToA / (ToA + tempo de silêncio)`. Com `DC = 1%`, o silêncio mínimo é `ToA x 99`.

Exemplo: pacote LoRaWAN de 20 bytes de aplicação, que vira 33 bytes no ar (Aula 5), em 125 kHz, CR 4/5:

| SF | ToA | Silêncio mínimo a 1% | Pacotes por hora a 1% |
|---|---|---|---|
| 7 | 71,9 ms | 7,1 s | 500 |
| 12 | 1.810 ms | 179 s (quase 3 min) | 19 |

E na política de uso justo do **The Things Stack Sandbox** (TTN): 30 s de tempo no ar por dia por nó (Aula 6): `30 / 0,0719 = 417` mensagens por dia em SF7, contra `30 / 1,81 = 16` em SF12. Ou seja, para mandar mais mensagens, **vale usar o menor SF que fecha o enlace** (é o que o ADR faz, Aula 5).

Esses 1% são regra europeia; para o Brasil não encontrei número equivalente (seção acima). Na prática, mantenha o ToA baixo e siga o que o certificado e o manual do produto dizem.

## Lista de checagem antes de transmitir

1. A variante de frequência da minha placa cobre 915 a 928 MHz?
2. O produto que vou usar é **homologado pela Anatel**, ou tenho homologação por declaração para uso próprio?
3. Estou dentro dos limites do certificado (potência, antena)? Se troquei a antena, ela é a do certificado?
4. Conheço o enquadramento (salto em 35 canais ou 500 kHz) do produto? O manual e o certificado dizem.
5. Para radioamador: tenho licença, estou identificado, sem criptografia, sem finalidade comercial?
6. Estou a uma distância segura de pessoas da antena (exposição a RF, [Módulo 1, Aula 8](../01%20-%20Fisica%20de%20Ondas%20e%20Espectro%20Eletromagnetico/08%20-%20Radiacao%20e%20Seguranca%20de%20RF.md))?

## O que não consegui confirmar

- Como a Anatel enquadra formalmente um LoRa de canal fixo de 125 kHz (nem salto, nem 500 kHz) depois de 1º de outubro de 2025.
- Se o "0,4 s em 14 s" do item 10.2.5.2 é aplicado por pacote ou por média, para LoRaWAN em SF11 e SF12.
- O status de homologação de cada placa de desenvolvimento citada (Heltec, LilyGO, RAK4631, Seeed): **não confirmado**.
- Se há norma específica para gateways em uso externo além do certificado do produto: não pesquisei.
- Regras para uso de potência acima da do certificado: assumo que **não são permitidas**, porque o certificado do produto é a fonte da potência.

## Resumo

- O plano LoRaWAN do Brasil é **AU915-928** (915 a 928 MHz); o TTN e o documento de Regional Parameters listam o Brasil assim. EU868 não é o plano daqui.
- O Ato 14448 traz dois caminhos para 915 a 928 MHz: **salto em frequência** (35 canais, 1 W de pico, ocupação média de 0,4 s em 14 s por frequência) e **modulação digital** (500 kHz de largura a 6 dB; dispensa por potência média revogada em 1º de outubro de 2025).
- Antena de ganho acima de 6 dBi obriga a reduzir a potência do transmissor pelo excesso; 433 MHz é limitado a 10 mW EIRP.
- Não encontrei um limite de duty cycle para LoRa no item 10 do Ato. Os "1 a 2 s por hora" vêm do item 6.2, que é só para sinais de controle.
- Produtos certificados que vi (RAK5146, RAK7240V2) declaram 0,157 W, e módulos "não acabados" exigem nova avaliação quando integrados. Um LoRa ponto a ponto de canal fixo em placa genérica não tem garantia de estar coberto.

## Para aprofundar

- [ ] [Ato nº 14448/2017, requisitos técnicos de radiação restrita](https://informacoes.anatel.gov.br/legislacao/atos-de-certificacao-de-produtos/2017/1139-ato-14448) (Anatel): o texto do item 10 e das demais regras citadas aqui (última atualização na página: 14/10/2025).
- [ ] [Resolução nº 680/2017](https://informacoes.anatel.gov.br/legislacao/resolucoes/2017/936resolucao-680) (Anatel): o regulamento base de radiação restrita (arts. 4º a 6º).
- [ ] [Declaração de Conformidade para uso próprio](https://www.gov.br/anatel/pt-br/regulado/certificacao-de-produtos/declaracao-de-conformidade) (Anatel): quando e como homologar uma unidade importada para uso próprio.
- [ ] [Frequency Plans by Country](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country/) (The Things Network): tabela de países e planos, com o aviso de que não é documento oficial.
- [ ] [Duty Cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/) (The Things Network): conceito de duty cycle, sub-bandas europeias e política de uso justo.
- [ ] [RP002-1.0.5 LoRaWAN Regional Parameters](https://resources.lora-alliance.org/technical-specifications/rp002-1-0-5-lorawan-regional-parameters) (LoRa Alliance): a especificação atual dos planos regionais (li a versão 1.0.3 rev A para o texto de AU915).

[Próxima aula: LoRaWAN, arquitetura, classes e segurança](./05%20-%20LoRaWAN%20Arquitetura%20Classes%20e%20Seguranca.md)
