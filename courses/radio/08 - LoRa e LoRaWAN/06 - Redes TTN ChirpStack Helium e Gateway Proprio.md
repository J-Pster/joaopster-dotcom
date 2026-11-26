# Aula 6: Redes LoRaWAN: The Things Network, ChirpStack, Helium e gateway próprio

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: se o LoRaWAN precisa de um servidor de rede e de gateways, onde eu conecto meus dispositivos (rede pública, servidor meu, rede tokenizada) e o que eu preciso para ter o meu próprio gateway?*

Verificado em setembro de 2026 nos sites e repositórios citados. Versões e situações de rede mudam rápido; confirme antes de decidir.

## A decisão em três perguntas

Antes de comparar sistemas, três perguntas ordenam tudo:

1. **Quem opera o servidor de rede?** Você (privacidade e controle) ou um terceiro (conveniência).
2. **Quem tem os gateways?** Você (cobertura garantida onde você precisa) ou uma comunidade (cobertura gratuita, mas onde há voluntário).
3. **O que os terceiros enxergam?** O payload pode ir cifrado de ponta a ponta (Aula 5), mas os **metadados** (quem, quando, RSSI, SNR, gateway) passam pelo operador do servidor.

Para o objetivo do curso (uma rede de comunicação **privada**), a resposta natural é: servidor próprio e gateway próprio. As opções públicas ajudam a aprender.

## The Things Network e The Things Stack

**The Things Network (TTN)** é uma comunidade de gateways abertos, e **The Things Stack** é o software de servidor de rede que a The Things Industries desenvolve. A rede comunitária hoje roda no **The Things Stack Sandbox** (chamada de Community Edition em páginas mais antigas).

- **Clusters** do Sandbox (consultados na documentação): `au1` (Sydney, Austrália), `eu1` (Irlanda) e `nam1` (Califórnia, EUA). O console recomenda o cluster conforme a localização do dispositivo. Para o Brasil, o plano é AU915; o console de seleção de cluster (console.cloud.thethings.network) pede a região do dispositivo e mostra o cluster recomendado. Não confirmei qual ele indica para o Brasil.
- **Política de uso justo:** o Sandbox limita o **tempo no ar de uplink a 30 segundos por dia por nó** e a **10 mensagens de downlink por dia por nó** (página de duty cycle do TTN). Com 33 bytes no ar, isso são 417 mensagens por dia em SF7, e só 16 em SF12 (Aula 4). Redes privadas não têm esse limite, mas seguem a lei e o LoRaWAN.
- **Registro de um dispositivo (OTAA):** você cria uma *application*, adiciona um dispositivo com `JoinEUI`, `DevEUI` e `AppKey`, escolhe o **plano de frequência** e a versão do LoRaWAN, e grava as chaves no dispositivo. O plano de frequência precisa bater com o do firmware e, no AU915, com a **sub-banda** que os gateways escutam (Aula 5).
- **Plano para o Brasil:** o TTN mantém planos com sufixo `_BR` ("Brazil 915-928 MHz, FSB 2, dwell time disabled"). O da comunidade é o de **sub-banda 2**.
- **Conexão de gateway:** por **LoRa Basics Station** (WebSocket com TLS para o servidor de rede) ou pelo **Semtech UDP Packet Forwarder** (mais simples, sem autenticação forte).
- **Código aberto:** o servidor The Things Stack tem versão livre (licença Apache-2.0 no GitHub), com a versão 3.36.2 publicada em 17 de agosto de 2026. Existem também The Things Stack Cloud e Enterprise, pagos, que não pesquisei.

**Limites para o seu caso:** é uma rede pública, seus metadados passam por um servidor na Austrália, na Irlanda ou nos EUA, e a cobertura do Brasil depende de gateways voluntários (não pesquisei a densidade). É ótima para aprender, testar e prototipar sensor.

## ChirpStack (servidor próprio, código aberto)

**ChirpStack** é um servidor de rede LoRaWAN de código aberto (licença **MIT**), pensado para você rodar em casa ou na empresa. A versão estável mais recente que vi foi a **v4.19.2** (publicada em 19 de setembro de 2026, no GitHub).

Componentes (documentação do ChirpStack):

- **ChirpStack**: servidor de rede e de aplicação, unificados desde a v4, com interface web para gateways, dispositivos e integrações, e uma API gRPC. Precisa de banco **PostgreSQL**, **Redis** e um **broker MQTT** (a documentação de migração da v3 para a v4 fala em criar o banco PostgreSQL e recomenda um Redis novo).
- **ChirpStack Gateway Bridge** e **MQTT Forwarder**: convertem o que sai do gateway (Semtech UDP ou Basics Station) em mensagens MQTT para o servidor. O prefixo do tópico traz a região (exemplo da documentação: `us915_0` para os canais 0 a 7 do US915).
- **ChirpStack Concentratord**: daemon de código aberto para o concentrador de rádio, com API ZeroMQ.
- **ChirpStack Gateway OS**: imagem baseada em OpenWrt para Raspberry Pi. Vem em dois sabores: **base** (o Pi é só gateway, encaminha para um servidor externo) e **full** (o Pi é gateway **e** servidor).
- **Gateway Mesh**: extensão de malha entre gateways (Aula 5).
- Suporte multirregião: um só servidor atende várias regiões, cada uma com seu arquivo de configuração e seu prefixo MQTT.

**Esqueleto de uma instalação com a imagem "full" num Raspberry Pi** (da documentação de "Getting started" do Gateway OS; confira a versão do seu guia):

1. Grave a imagem no cartão SD, ligue o Pi e faça SSH. Se houver Wi-Fi, ele sobe como ponto de acesso `ChirpStackAP` (senha `ChirpStackAP`) no IP 192.168.0.1.
2. Rode `sudo gateway-config`. Escolha o modelo do concentrador (o *shield*) e o **plano de canais**. No Brasil, um plano AU915 compatível com as 8 sub-bandas do gateway (confirme os planos disponíveis na sua versão).
3. Na imagem "full", o gateway é criado sozinho no ChirpStack. Acesse a interface em `http://192.168.0.1:8080`.
4. Crie um **perfil de dispositivo** (*device profile*) com a região igual à configurada no gateway, uma **aplicação** e o **dispositivo** (com a `AppKey`).
5. Ligue o dispositivo e observe o Join-request chegando.

O ChirpStack aceita dados de gateways desconhecidos na configuração padrão do Gateway OS (a documentação avisa; você pode restringir).

## Helium: o que sobrou em 2026

**Helium** é uma rede "descentralizada" em que donos de *hotspots* são recompensados com o token HNT. Tinha dois braços: **IoT** (LoRaWAN) e **Mobile** (celular por Wi-Fi/5G). Situação em setembro de 2026, segundo fontes primárias e um relatório de terceiros:

- **A Helium Mobile (operadora de consumo) foi vendida** à Noble Mobile em junho de 2026. A Helium se define agora como **plataforma de infraestrutura para operadoras**, com receita de "descarga" (*offload*) de dados de Wi-Fi para operadoras. O texto do blog oficial diz que está "inteiramente focada" na rede e cita expansão em curso no **Brasil** e no Reino Unido.
- O relatório do 2º trimestre de 2026 (Blockworks) aponta receita de protocolo de US$ 3,35 milhões, dos quais o Mobile responde por 99,3% e o **IoT por US$ 23,1 mil (0,7%)**, "recorrente mas imaterial". O IoT passa a um regime de "manutenção" com a precificação de dados atual.
- **Proof of Coverage** (o mecanismo que premiava quem só "existia") está sendo aposentado (HIP-149, em vigor desde 29 de julho de 2026): os hotspots ganham por tráfego real.
- Para usar a rede IoT, o dispositivo paga por **Data Credits** em blocos de **24 bytes**, só sobre o payload de aplicação (o overhead LoRaWAN não conta), cobrado apenas quando a mensagem é entregue; os DCs são fixados em dólar (documentação da Helium).

Leitura para o seu caso: a **rede IoT LoRaWAN da Helium existe, mas está em segundo plano** e vive de token e de infraestrutura de terceiros. Para uma **rede privada**, ela não é a resposta (mesmos problemas de metadados públicos do TTN, mais uma dependência de mercado). Não pesquisei a cobertura IoT no Brasil.

## Gateway próprio

Um gateway LoRaWAN é um **concentrador** (chip SX1301, SX1302 ou SX1303, com front-end SX1250 ou similar) que ouve vários canais e SFs ao mesmo tempo, mais um computador que empacota os dados e fala com o servidor por IP. A Kerax (loja brasileira) descreve um gateway SX1302 com SX1250 com "até 8 canais simultâneos", TX de até 27 dBm e sensibilidade "até -142 dBm" (dados do fabricante).

Caminhos:

| Caminho | Exemplos | Vantagem | Cuidado |
|---|---|---|---|
| **Comprar gateway com homologação Anatel** | RAK7240V2 (certificado ICC 06.045/2024.2); Altus GW700 (homologação 16956-22-14445, 915 a 928 MHz, 27 dBm); gateways Kerax (Femto e Pico) com Anatel | Base legal clara | Preço e o que o certificado autoriza (potência e antena) |
| **Gateway importado** | SenseCAP Outdoor Gateway AU915, US$ 399 na Seeed | Preço de mercado global | **Não confirmei Anatel**; importação exige homologação |
| **Raspberry Pi mais concentrador (DIY)** | Pi com módulo RAK5146 e ChirpStack Gateway OS | Aprende-se tudo; controle total | O certificado do RAK5146 diz "produto não acabado; integração em outro equipamento requer nova avaliação": o conjunto DIY **não herda** a homologação sem mais |
| **"Gateway" de um canal com ESP32** | Uma placa ESP32 com um único módulo LoRa fazendo o papel de gateway | Barato, bom para estudar o formato | **Não é um gateway LoRaWAN de verdade**: ouve um canal e um SF por vez e perde os pacotes dos outros canais e SFs. A Semtech tem notas oficiais sobre um "Hub de um canal" (AN1200.94 e AN1200.96), que não li |

**Conexão ao servidor.** Três opções: o **Semtech UDP Packet Forwarder** (histórico, porta UDP 1700, simples e sem autenticação; o gateway Altus cita UDP para o TTN e MQTT para o ChirpStack), a **LoRa Basics Station** (WebSocket seguro; o endereço do servidor no Sandbox tem a forma `wss://<cluster>.cloud.thethings.network:8887`) e o **ChirpStack MQTT Forwarder**.

**Instalação.** O que vale mais é a **altura da antena e a perda do cabo** (Módulo 4, Aulas 3 e 6; Módulo 2, Aula 3). Um gateway mal instalado num armário perde mais alcance que SF12 recupera. Regras práticas: antena no ponto mais alto possível e com visada, cabo curto e grosso (ou o gateway junto da antena e cabo Ethernet até o interior), proteção contra raio e aterramento feitos por quem entenda. Sobre a antena, a Resolução 680 (art. 6º) diz que o equipamento deve usar apenas a antena comercializada com ele; o certificado do RAK7240V2 diz que o produto tem conector para antena externa, mas **as condições de antena de cada produto estão no certificado dele**: leia.

## Qual usar

| Objetivo | Servidor | Gateway |
|---|---|---|
| Aprender LoRaWAN em uma tarde | TTN (Sandbox) | Um gateway comunitário ou o seu |
| Rede privada (seu objetivo) | ChirpStack no seu Pi ou servidor | Gateway próprio homologado |
| Rede sem internet | ChirpStack "full" num Pi, com o gateway na mesma máquina | O concentrador do próprio Pi |
| Cobertura sem montar nada | Rede de terceiros (Helium IoT não confirmada no Brasil) | De terceiros |

E lembre: mesmo com servidor e gateway seus, LoRaWAN é uma **estrela**, com ponto único de falha no gateway e no servidor. Para comunicação entre pessoas sem infraestrutura, o caminho são as malhas dos Módulos 9 e 10.

## Resumo

- Três perguntas decidem a rede: quem opera o servidor, quem tem os gateways e o que terceiros veem (metadados sempre).
- The Things Stack Sandbox (TTN) é gratuito e ótimo para aprender, com uso justo de 30 s de uplink por dia e 10 downlinks por dia por nó, em clusters na Austrália, Irlanda e EUA.
- ChirpStack (MIT, v4.19.2) é o servidor próprio: ChirpStack mais PostgreSQL, Redis e MQTT; a imagem Gateway OS "full" faz gateway e servidor num Raspberry Pi.
- Helium IoT continua existindo, mas em 2026 a empresa refocou em Wi-Fi para operadoras (IoT é 0,7% da receita de protocolo); não serve a uma rede privada.
- Gateway próprio: um concentrador de 8 canais, com backhaul IP. Compre com homologação Anatel ou entenda que um conjunto DIY não herda o certificado do módulo.

## Para aprofundar

- [ ] [ChirpStack architecture](https://www.chirpstack.io/docs/architecture.html) (ChirpStack): diagrama e descrição dos componentes.
- [ ] [Getting started with ChirpStack Gateway OS](https://www.chirpstack.io/docs/chirpstack-gateway-os/guides/getting-started.html) (ChirpStack): o passo a passo oficial de instalação e configuração do gateway e do primeiro dispositivo.
- [ ] [How to install ChirpStack, Connecting a gateway, Connecting a device](https://www.youtube.com/watch?v=xIqKSWTAQFc) (Mirutec): vídeo cujo título indica a instalação do ChirpStack, a conexão de um gateway e de um dispositivo; conteúdo não assistido.
- [ ] [How To Connect RAK LoRaWAN Gateway with WisGateOS2 to the ChirpStack V3 LNS Using MQTT Bridge](https://www.youtube.com/watch?v=Gt9jrDNjUrg) (RAKwireless): vídeo do fabricante sobre ligar um gateway ao ChirpStack v3 por MQTT; é da geração anterior (v3), então serve para entender o conceito.
- [ ] [The Things Stack Sandbox](https://www.thethingsindustries.com/docs/concepts/ttn/) e [Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/) (The Things Industries): clusters, endereços e como conectar gateways por Basics Station ou UDP.
- [ ] [Data Credit](https://docs.helium.com/tokens/data-credit/) (Helium): como a rede cobra o uso.
- [ ] [The Next Era of the Helium Network](https://www.helium.com/blog/the-next-era-of-the-helium-network) (Helium): o texto oficial sobre a venda da Helium Mobile e o novo foco.
- [ ] [Helium Tokenholder Report, Q2 2026](https://blockworks.com/api/investor-report/helium-token-holder-report-q2-2026/pdf) (Blockworks Advisory): relatório de terceiros com a receita por sub-rede (fonte dos números de IoT citados acima).

[Próxima aula: Primeiro link ponto a ponto](./07%20-%20Primeiro%20Link%20Ponto%20a%20Ponto.md)
