# Módulo 8: LoRa e LoRaWAN

Você já sabe como uma onda se propaga e perde potência (Módulo 2), como a informação é gravada nela e como o espalhamento espectral troca banda por sensibilidade (Módulo 3), como a antena a irradia (Módulo 4), o que a lei permite em 915 MHz (Módulo 5) e como o rádio vira software (Módulos 6 e 7). Este módulo responde à pergunta central do curso: **por que o LoRa alcança tão longe com tão pouca potência, e como eu monto, configuro e mantenho um enlace e uma rede com ele?** Ele vem agora porque o LoRa é o rádio das redes mesh e do Reticulum dos Módulos 9 e 10: tudo o que vier depois é lógica de rede sobre a camada física que você aprende aqui.

A estrutura segue a ordem do curso: fundamento (por quê), mecanismo (como funciona), ferramenta (chips, redes) e prática (link e teste).

## Aulas

1. [Por que o LoRa alcança longe com pouca potência](./01%20-%20Por%20que%20LoRa%20Alcanca%20Longe.md): chirp, deslocamento cíclico, dechirp e FFT, ganho de processamento, SNR negativo, tolerância a interferência e deriva.
2. [Parâmetros SF, BW e CR: taxa, sensibilidade e tempo no ar](./02%20-%20Parametros%20SF%20BW%20CR%20e%20Tempo%20no%20Ar.md): a fórmula oficial do tempo no ar, o pacote (preâmbulo, sync word, cabeçalho, CRC), otimização de baixa taxa e exemplos calculados (20 bytes em SF7 e SF12).
3. [Chips, módulos e placas](./03%20-%20Chips%20Modulos%20e%20Placas.md): SX1276/78, SX1262, LLCC68, LR1121, Ra-01H, Heltec, T-Beam, RAK4631, Wio-SX1262, com preços de setembro de 2026 e armadilhas de hardware.
4. [Frequências por região, regulamentação e duty cycle](./04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md): AU915 como plano do Brasil, o que o Ato 14448 da Anatel diz (e o que ficou não confirmado), homologação para uso próprio e contas de duty cycle.
5. [LoRaWAN: arquitetura, classes, ativação e segurança](./05%20-%20LoRaWAN%20Arquitetura%20Classes%20e%20Seguranca.md): LoRa contra LoRaWAN, elementos da rede, classes A/B/C, ADR, OTAA e ABP, chaves, o plano AU915 e por que é uma estrela e não uma malha.
6. [Redes: The Things Network, ChirpStack, Helium e gateway próprio](./06%20-%20Redes%20TTN%20ChirpStack%20Helium%20e%20Gateway%20Proprio.md): onde conectar, o que cada operador enxerga, a situação da Helium em 2026 e como montar um gateway.
7. [Primeiro link ponto a ponto](./07%20-%20Primeiro%20Link%20Ponto%20a%20Ponto.md): dois módulos com ESP32 e RadioLib, código comentado, o que precisa ser igual nos dois lados e cinco experimentos.
8. [Alcance real, antena e erros comuns](./08%20-%20Alcance%20Antena%20e%20Erros%20Comuns.md): um enlace de 10 km calculado, efeito de antena e cabo, método de teste de alcance e a lista de erros de campo.

## Aviso de regulamentação e segurança

Transmitir em radiofrequência no Brasil exige **equipamento certificado e homologado pela Anatel** (radiação restrita: sem licença de usuário, mas com homologação do produto) ou operação sob licença de radioamador, com as regras próprias desse serviço (aberto, identificado, sem criptografia). Este módulo ensina a **ler** a regulamentação e o hardware; a Aula 4 registra o que confirmei nos textos oficiais e o que ficou **não confirmado** (em especial o enquadramento de um LoRa de canal fixo em 125 kHz depois de outubro de 2025). Não transmita antes de resolver a base legal, nunca use potência ou antena fora do certificado, e nunca transmita sem antena. Antena externa envolve risco de queda, choque elétrico e descarga atmosférica: faça com profissional habilitado e longe da rede elétrica. Dados regulatórios, versões e preços foram verificados em setembro de 2026.

## Sobre a curadoria

O conteúdo principal é o texto das aulas, baseado em fontes oficiais (Semtech, LoRa Alliance, Anatel, RadioLib, The Things Network, ChirpStack). Os vídeos indicados tiveram **título e canal confirmados**, mas **não foram assistidos**; onde descrevo um vídeo, é pelo que o título ou a descrição indicam. Preços de placas são em dólar, de lojas dos EUA ou dos fabricantes, e **não** incluem frete, impostos nem homologação; não conferi preços no Brasil.

## Checklist de saída do módulo

- [ ] Por que a modulação por chirp permite decodificar um sinal 20 dB abaixo do ruído? (ganho de processamento `SF x 3,01 dB`, dechirp mais FFT)
- [ ] Como um símbolo LoRa codifica `SF` bits, e por que cada `+1` em SF dobra o tempo no ar e ganha cerca de 2,5 dB?
- [ ] Como BW e CR entram na taxa, na sensibilidade e no tempo no ar? Calcule à mão o tempo no ar de 20 bytes em SF7 (56,6 ms) com a fórmula.
- [ ] Por que a sync word não é segurança, e o que precisa ser idêntico nos dois lados para um link ponto a ponto funcionar?
- [ ] Qual a diferença entre LoRa e LoRaWAN, e quem faz o quê entre dispositivo, gateway, servidor de rede, join server e servidor de aplicação?
- [ ] Como o ADR usa a margem entre o SNR medido e o SNR exigido, e por que ele reduz o tempo no ar?
- [ ] Como `AppKey`, `NwkSKey` e `AppSKey` protegem a mensagem, e o que continua visível para o operador da rede?
- [ ] Por que o LoRaWAN é uma estrela e não uma malha (energia, gateways, servidor central, capacidade)?
- [ ] Qual plano LoRaWAN se aplica ao Brasil, o que o Ato 14448 exige em 915 a 928 MHz e o que eu não consegui confirmar?
- [ ] Dado um enlace (Pt, ganhos, perdas, distância, ambiente), como calcular a margem por SF e escolher o SF, e o que uma antena ausente, um cabo longo ou um SWR alto fazem nessa conta?

Quando estiver confiante, siga para o [Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md).
