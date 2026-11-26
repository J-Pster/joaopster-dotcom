# Aula 9: O espectro como recurso regulado (ITU e Anatel)

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que não se pode simplesmente transmitir em qualquer frequência, e quem decide quem usa o quê?*

## O problema que a regulação resolve

Três fatos físicos, todos vistos neste módulo, criam a necessidade de regras:

1. **Meio compartilhado e sem cercas.** A onda EM se espalha em todas as direções (Aula 2) e atravessa fronteiras. Não existe "meu pedaço" de ar: qualquer receptor na região capta o que você transmite, e o seu sinal soma com o de outros.
2. **Interferência destrutiva.** Dois transmissores na mesma frequência e no mesmo lugar se somam no receptor (Aula 4) e, sem coordenação, nenhum dos dois é recebido bem; o ruído sobe (Aula 7). É como dois processos escrevendo no mesmo arquivo sem lock.
3. **Recurso finito.** A largura de banda disponível é limitada e cada serviço (TV, celular, aviação, socorro) precisa de faixas com propriedades adequadas de propagação (Aula 6). A faixa que serve bem a comunicação de longo alcance com antenas pequenas (algumas centenas de MHz a poucos GHz) é disputadíssima.

Analogia para desenvolvedores: espectro é como o espaço de endereços IP, portas ou nomes de domínio. Sem uma entidade que atribua e registre, haveria colisões. A diferença é que a colisão de rádio acontece no ar, em tempo real, e afeta serviços críticos, como comunicação de aeronaves e emergências.

## Quem regula: da ITU à Anatel

### Nível internacional: ITU

A **ITU** (União Internacional de Telecomunicações) é a agência da ONU para tecnologias de informação e comunicação. Fundada em 1865 para redes de telégrafo, tem 194 Estados-membros e mais de mil empresas, universidades e organizações associadas. Entre suas funções, alocar globalmente o espectro de rádio e as órbitas de satélite e desenvolver padrões técnicos (página institucional da ITU, verificado em setembro de 2026).

O instrumento central é o **Regulamento de Radiocomunicações** (Radio Regulations), um tratado internacional revisado nas **Conferências Mundiais de Radiocomunicações (WRC)**. A edição mais recente consultada é a de **2024**, incorporando a WRC-23 realizada em Dubai (página de publicações da ITU, verificado em setembro de 2026). O Regulamento contém a **Tabela de Atribuição de Faixas de Frequências**: para cada faixa, quais serviços de radiocomunicação podem usá-la.

Como as necessidades e infraestruturas variam pelo mundo, o planeta é dividido em **três regiões da ITU**, e algumas atribuições diferem entre elas: Região 1 (Europa, África, Oriente Médio e norte da Ásia), Região 2 (as Américas, incluindo o Brasil) e Região 3 (resto da Ásia e Oceania). Por isso a mesma faixa pode ter uso diferente na Europa e nas Américas. Um exemplo que você verá no curso: as faixas de baixa potência usadas por LoRa mudam por região (módulo 8).

### Terminologia: atribuir, distribuir, autorizar

O mundo regulatório separa três verbos que soam parecidos:

| Termo (inglês) | O que significa | Quem faz |
|---|---|---|
| **Allocation** (atribuição) | Uma faixa é reservada a um ou mais **serviços** (radiodifusão, móvel, fixo, aeronáutico, amador, radionavegação etc.) | ITU, na Tabela do Regulamento |
| **Allotment** (distribuição) | Um canal ou faixa é reservado a um país ou área | ITU e acordos entre países |
| **Assignment** (autorização, consignação) | Uma estação específica recebe permissão de usar uma frequência sob condições (potência, local, tipo) | Administração nacional |

Os serviços têm categoria: **primário** ou **secundário**. Um serviço secundário na mesma faixa não pode causar interferência ao primário nem exigir proteção contra ele. É por essa hierarquia que, em algumas faixas, o radioamadorismo é permitido mas deve ceder lugar a outros usos.

### Nível nacional: Anatel

No Brasil, a **Anatel** (Agência Nacional de Telecomunicações) administra o espectro de radiofrequências conforme a Lei nº 9.472, de 1997 (Lei Geral de Telecomunicações). A Anatel define radiofrequência como a faixa do espectro de **8,3 kHz a 3000 GHz** em que é possível a radiocomunicação, trata o espectro como recurso limitado que constitui **bem público** e segue as atribuições de faixas de tratados internacionais aprovados pela UIT. Periodicamente publica o **Plano de Atribuição, Destinação e Distribuição de Faixas de Frequências no Brasil** (página da Anatel sobre radiofrequência, verificado em setembro de 2026).

O que costuma ficar sob controle nacional:
- Quais serviços operam em cada faixa no Brasil (dentro da Tabela da ITU).
- Quem pode usar cada faixa e sob que condições (autorização de uso de radiofrequências).
- Requisitos técnicos do equipamento, com certificação e **homologação** de produtos de telecomunicações pela Anatel, ou seja, o equipamento à venda deve ser avaliado quanto à conformidade e às regras de emissão.
- Limites de exposição humana a campos eletromagnéticos (Aula 8).
- Fiscalização e sanções por uso irregular.

## Formas de uso do espectro

Em termos gerais, existem três situações (detalhes e nomes exatos variam e devem ser conferidos na regulamentação vigente da Anatel):

1. **Uso licenciado (com autorização individual):** uma operadora, emissora ou estação recebe o direito de usar uma faixa ou canal específico, com proteção contra interferência de terceiros. Em muitos países, faixas para celular são obtidas por licitação.
2. **Uso sem licença individual, com equipamento certificado:** dispositivos de baixa potência (Wi-Fi, Bluetooth, controles remotos, sensores, LoRa) operam em faixas destinadas a esse fim, com limites de potência e regras de uso, mas **sem proteção** contra interferência e sem direito de interferir em outros. Em regulamentação brasileira o termo usado é "radiação restrita"; confira a norma vigente e a faixa específica.
3. **Faixas ISM** (industrial, científica e médica): a ITU designa faixas para aplicações que geram energia de RF **sem finalidade de comunicação** (por exemplo, fornos de micro-ondas em 2,45 GHz). Comunicações podem operar nelas, mas devem aceitar interferência dessas aplicações. Segundo meu conhecimento (não confirmado nesta sessão), 2,4 GHz é ISM em todo o mundo, 433 MHz é ISM apenas na Região 1 e 902 a 928 MHz apenas na Região 2, o que explica por que o LoRa usa faixas diferentes entre Europa e Américas; verifique no Regulamento e na regulamentação brasileira antes de confiar nesse detalhe.

O **radioamadorismo** é um serviço de radiocomunicação com faixas próprias na Tabela, regulado no Brasil pela Anatel, com licença individual e regras de conteúdo; o módulo 5 trata disso em detalhe.

## Limites entre estudar e transmitir (aviso importante)

- **Estudar, calcular, montar em bancada e receber (ouvir) sinais** são atividades em geral tratadas de modo distinto de transmitir. Mesmo assim, o sigilo de comunicações privadas e outras regras podem se aplicar à interceptação de conteúdo; não presuma que "ouvir é sempre livre" e confira.
- **Transmitir** em radiofrequência exige, conforme a faixa e a potência, uma licença (por exemplo, a do radioamador) ou o uso de equipamento homologado dentro das faixas e limites destinados a uso sem licença. Transmitir fora dessas condições pode causar interferência em serviços de segurança (aviação, socorro, telefonia móvel) e gera sanções.
- O curso ensina a entender e a operar dentro das regras; **nunca** a burlá-las (por exemplo, alterar potência ou faixa de um equipamento homologado, ou usar frequências que não são suas).
- Regras mudam. Sempre que precisar da regra atual (faixa, potência, licença), consulte a Anatel diretamente. Este material foi verificado apenas em nível geral em setembro de 2026.

## Resumo

- O espectro é regulado porque o meio é compartilhado e sem fronteiras, a interferência destrói a comunicação, e a largura de banda é finita.
- A ITU (agência da ONU, fundada em 1865) mantém o Regulamento de Radiocomunicações (edição 2024, com a WRC-23), com a Tabela de Atribuições e três regiões; o Brasil está na Região 2 (Américas).
- Atribuição (faixa para serviços), distribuição (canal para país) e autorização (estação individual) são etapas diferentes; serviços podem ser primários ou secundários.
- A Anatel administra o espectro no Brasil (Lei 9.472/1997), trata-o como bem público e publica o plano de atribuição, homologa equipamentos e fiscaliza.
- Existe uso licenciado, uso sem licença com equipamento certificado (sem proteção contra interferência) e faixas ISM; faixas ISM variam por região.
- Transmitir exige licença ou equipamento homologado em faixa permitida; ouvir e estudar têm regime próprio, mas confira as regras; nunca burle a regulamentação.

## Para aprofundar

- [ ] [Radiofrequência (Anatel)](https://www.gov.br/anatel/pt-br/regulado/radiofrequencia) (Anatel): página institucional sobre o espectro, a definição de radiofrequência e o plano de atribuição; ponto de partida para as normas vigentes.
- [ ] [Radio Regulations (ITU)](https://www.itu.int/pub/R-REG-RR) (ITU): página da publicação do Regulamento de Radiocomunicações, com as edições disponíveis.
- [ ] [About ITU](https://www.itu.int/en/about/Pages/default.aspx) (ITU): visão geral do que a ITU faz, incluindo alocação de espectro e órbitas.

Ao concluir esta aula, siga para o [Módulo 2: Propagação de Rádio](../02%20-%20Propagacao%20de%20Radio/README.md).
