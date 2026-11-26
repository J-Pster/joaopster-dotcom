# Aula 8: Alcance real, antena e erros comuns

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como calcular o alcance esperado de um enlace LoRa, como medi-lo em campo, quanto a antena e a instalação pesam de verdade, e quais são os erros que fazem um link funcionar a 10 metros e falhar a 200?*

Esta aula junta tudo: o orçamento de enlace ([Módulo 2, Aula 8](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md)), as antenas ([Módulo 4](../04%20-%20Antenas/README.md)) e os parâmetros LoRa (Aulas 1 e 2). Lembrete legal: os limites de potência e de antena da Aula 4 valem; nada aqui sugere ultrapassar o que o certificado do produto declara.

## Exemplo resolvido: um enlace de 10 km

**Cenário.** Duas placas LoRa em 915 MHz, BW 125 kHz. Transmissor de +14 dBm, antenas de 2 dBi nas duas pontas, 0,5 dB de perda de conector e cabo curto em cada ponta. Terreno suburbano com obstáculos, expoente `n = 3,5` (o mesmo valor que o Módulo 2 chamou de "urbano denso"; é uma suposição, não uma medição).

**Passo 1: perda de percurso.** Em espaço livre a 915 MHz a 1 km: `PL(1 km) = 20 x log10(915) + 32,44 = 91,7 dB` (Módulo 2, Aula 2). Com o modelo log-distância: `PL(d) = 91,7 + 10 x n x log10(d em km)`. A 10 km, `PL = 91,7 + 35 = 126,7 dB`.

**Passo 2: potência recebida.**

```
Pr = Pt - Lt + Gt - PL + Gr - Lr
Pr = 14 - 0,5 + 2 - 126,7 + 2 - 0,5 = -109,7 dBm
```

**Passo 3: piso de ruído e SNR.** `-174 + 10 x log10(125.000) + NF = -174 + 51 + 6 = -117,0 dBm`. O SNR recebido é `-109,7 - (-117,0) = +7,3 dB`.

**Passo 4: margem por SF.** Margem = `Pr` menos a sensibilidade (Aula 2). Como a sensibilidade já embute o SNR mínimo, dá para conferir direto pela diferença entre o SNR recebido e o SNR exigido:

| SF | Sensibilidade | Margem a 10 km |
|---|---|---|
| 7 | -124,5 dBm | 14,9 dB |
| 8 | -127,0 dBm | 17,4 dB |
| 9 | -129,5 dBm | 19,9 dB |
| 10 | -132,0 dBm | 22,4 dB |
| 11 | -134,5 dBm | 24,9 dB |
| 12 | -137,0 dBm | 27,4 dB |

**Decisão.** O Módulo 2 recomenda margem de desvanecimento de 15 dB. Com ela, SF7 (14,9 dB) fica 0,1 dB abaixo, então **SF8 é o menor SF que fecha o enlace de 10 km**, com 17,4 dB (tempo no ar de 20 bytes: 103 ms contra 57 ms em SF7, Aula 2). Se houvesse chuva ou folhagem no caminho (Módulo 2, Aula 4), subiria para SF9 ou SF10.

**Quanto alcança cada SF** (mesmos números, margem de 15 dB):

| SF | `n = 3` | `n = 3,5` | `n = 4` |
|---|---|---|---|
| 7 | 14,5 km | 9,9 km | 7,4 km |
| 8 | 17,6 km | 11,7 km | 8,6 km |
| 9 | 21,3 km | 13,8 km | 9,9 km |
| 10 | 25,8 km | 16,2 km | 11,5 km |
| 11 | 31,3 km | 19,1 km | 13,2 km |
| 12 | 37,9 km | 22,6 km | 15,3 km |

Três leituras: (1) o ambiente (`n`) muda o alcance mais que o SF (SF12 com `n = 4` alcança 15 km; SF7 com `n = 3` alcança 14,5 km); (2) de SF7 a SF12 o alcance multiplica por 2,3 com `n = 3,5`, como a Aula 2 disse; (3) **o horizonte é um teto**: antenas a 2 m de altura têm cerca de 12 km de visada em terreno plano (Módulo 2, Aula 3), então os números acima só são alcançáveis com antenas mais altas ou terreno favorável (com 10 m em cada ponta, a visada sobe para cerca de 26 km).

**EIRP** do exemplo: `14 - 0,5 + 2 = 15,5 dBm`. Está longe dos limites do Ato 14448 (1 W de pico com salto em 35 canais; a redução se aplica só acima de 6 dBi de ganho), mas vale o que o certificado do seu produto declara (os que vi dizem 0,157 W, ou 22 dBm).

## O que a antena e a instalação mudam

Os números do mesmo enlace, partindo da margem de 14,9 dB do SF7:

| Mudança | Efeito na margem | Nova margem SF7 |
|---|---|---|
| Antena de 5 dBi em vez de 2 dBi, nas duas pontas | +6 dB | 20,9 dB |
| 5 m de coaxial fino em cada ponta (cerca de 0,7 dB/m, valor do RG-58 a 1 GHz; Módulo 4, Aula 3; a 915 MHz é um pouco menos) | cerca de -6 dB (3,5 dB por ponta, dos quais 0,5 dB já estavam contados) | 8,9 dB |
| Antena da ponta transmissora com SWR 3:1 | -1,25 dB (perda por descasamento) | 13,7 dB |
| SWR 10:1 na antena transmissora | -4,8 dB | 10,1 dB |
| Antena ausente | tudo reflete; o transmissor pode ser danificado | (não transmite) |

Como ler:

- **+6 dB de antena** equivalem a 1,5 vez a distância com `n = 3,5` (`10^(6/35)`). É a melhoria mais barata que existe, mas com o teto legal de 6 dBi para não reduzir potência (Aula 4), e com a troca de antena dentro do que o certificado cobre.
- **O cabo importa muito em UHF.** Cinco metros de cabo fino comem cerca de 3,5 dB, o que equivale a trocar uma antena de 5 dBi por uma de 1,5 dBi. Prefira **cabo curto e grosso** ou coloque o rádio junto da antena e leve o resto por cabo de dados (Módulo 4, Aula 3).
- **SWR ruim custa pouco em dB até certo ponto, mas indica problema** (conector solto, água, antena errada) e estressa o amplificador (Módulo 4, Aula 2). Um SWR de 3:1 perde só 1,25 dB; um curto ou aberto perde tudo.
- **Altura vale mais que ganho.** Subir a antena de 2 m para 10 m mais que dobra o horizonte e tira o caminho da zona onde o solo cancela o sinal (Módulo 2, Aulas 3 e 4; Módulo 4, Aula 6).
- **Polarização.** As duas antenas devem ser verticais e paralelas; uma vertical e uma deitada perdem muito (Módulo 4, Aula 4).
- **Antena de borracha dentro de caixa, encostada em metal ou perto do ESP32** perde vários dB (o Módulo 4, Aula 5, fala em 3 a 10 dB de ordem de grandeza, sem fonte primária). A antena do módulo, no ar livre, longe de metal, vale mais que uma "melhor" que ficou apertada num gabinete.
- **Conectores de rádio LoRa** costumam ser U.FL/IPEX na placa, com um pigtail para SMA ou RP-SMA. Cada adaptador perde um pouco (Módulo 4, Aula 3). Cuidado para não conectar na **antena de 2,4 GHz** de Wi-Fi da placa (a Heltec V3 tem uma mola separada para 2,4 GHz e um conector IPEX só para o LoRa).
- **Segurança de instalação.** Antena alta é risco de queda, choque elétrico e descarga atmosférica. Faça com quem entenda de mastro, aterramento e para-raios, longe de rede elétrica (Módulo 4, Aula 6; Módulo 5, Aula 9).

## Como fazer um teste de alcance

O teste é uma medição, não um passeio. Método:

1. **Fixe as variáveis.** Mesma frequência, SF, BW, CR e potência nos dois lados; anote-as. Mude **uma** coisa por vez.
2. **Use o código da Aula 7 com um contador.** O transmissor envia "seq N" a cada 5 s, o receptor registra `seq`, RSSI e SNR. A **taxa de perda** é `1 - recebidos / enviados` num trecho.
3. **Registre a posição.** Um celular com GPS no receptor, anotando hora e local, ou uma placa com GPS (o T-Beam). Sem posição, os números não viram mapa.
4. **Transmissor em ponto alto e fixo, receptor em movimento** a pé ou de carro, mas **parando** em cada ponto por alguns pacotes (no vídeo do Modest Maker, o autor relata que caminhar mais devagar melhorou o RSSI medido; conheço isso pela descrição do vídeo, que não assisti).
5. **Meça nos dois sentidos** e em **mais de um SF**.
6. **Interprete pelo SNR, não só pelo RSSI.** Margem em campo = **SNR medido - SNR exigido do SF** (a mesma conta do ADR, Aula 5). Exemplo: pacote em SF9 recebido com SNR de -5 dB: `-5 - (-12,5) = 7,5 dB` de margem. Quando a margem ficar perto de zero, você está no limite do enlace. **Para o projeto**, subtraia a margem de desvanecimento (10 a 15 dB) desse limite. O RSSI sozinho engana: RSSI de -100 dBm com SNR de -10 dB indica que o piso de ruído está em -90 dBm, ou seja, **há interferência** e o enlace é pior do que o RSSI sugere.
7. **Repita em outro dia e horário.** Chuva, temperatura e folhagem mudam o resultado.

O registro do balão de 2019 (766 km, SF11, RSSI -120 dBm, SNR -14,25 dB) é um bom exemplo de como um SNR negativo ainda decodifica, e de que os recordes precisam de altitude: o próprio TTN observa, no relato do recorde de 2023, que a maioria dos dispositivos da The Things Stack fica entre 25 e 100 metros do gateway.

## Erros comuns e como diagnosticar

| # | Erro | Sintoma | Como confirmar e corrigir |
|---|---|---|---|
| 1 | **Antena ausente, errada ou mal conectada** | Alcance de poucos metros; ou placa que esquenta e "queima"; RSSI muito baixo mesmo perto | Confira o conector; use antena de **915 MHz** (uma de 433 MHz em 915 MHz fica fora de ressonância, Módulo 4, Aula 7); nunca transmita sem antena |
| 2 | **Frequência errada** | Não recebe nada, ou `RADIOLIB_ERR_INVALID_FREQUENCY` | Módulo de 433 MHz (Ra-02, SX1278) não vai a 915; placa "EU868" fora da faixa brasileira (Aula 4); os dois lados na mesma frequência |
| 3 | **SF, BW, CR, preâmbulo ou sync word divergentes** | TX "sucesso" e RX mudo | Escreva todos os parâmetros explícitos nos dois códigos (Aula 7); teste na bancada a 1 m |
| 4 | **Alimentação fraca** | Placa reinicia no momento do TX; pacote some quando a potência sobe | Fonte que aguente o pico (Ra-01SH-P: 690 mA); fio curto e grosso; capacitor perto do módulo; LiPo carregada |
| 5 | **TCXO/chave de RF não configurados** (SX126x) | `begin` falha, ou o chip inicia e não sai sinal | `tcxoVoltage` e DIO2 da sua placa (Heltec V3: 1,8 V e DIO2 como chave) |
| 6 | **Módulo LLCC68 com SF alto** | Erro de SF inválido | O LLCC68 não faz SF10 a SF12 em 125 kHz (Aula 3) |
| 7 | **Interferência local** | SNR muito pior que o esperado | Outro rádio de 915 MHz perto; roteador, USB 3 e fontes chaveadas; afaste antena e mude de canal |
| 8 | **Antena colada em metal ou no ESP32** | Alcance muito abaixo do calculado | Afaste e eleve (Módulo 4, Aula 6) |
| 9 | **Polarização cruzada** | Sinal cai muito com a rotação | Antenas verticais e paralelas |
| 10 | **Potência acima do certificado ou antena de ganho fora do certificado** | (o sintoma é legal, não técnico) | Cumpra o certificado do produto (Aula 4) |
| 11 | **Confundir dBi com dBd, ou confiar no ganho anunciado** | Estimativa de alcance otimista | Módulo 4, Aula 4; meça com NanoVNA (Módulo 4, Aula 7) |
| 12 | **Esquecer o horizonte** | O cálculo dá 30 km, o campo dá 8 | Módulo 2, Aula 3: altura das antenas e relevo |
| 13 | **ABP com contador de quadros reiniciado** (LoRaWAN) | O gateway vê o pacote, o servidor descarta | Registre de novo o dispositivo ou use OTAA (Aula 5) |
| 14 | **Sub-banda errada (AU915)** | Join nunca acontece | Sub-banda do dispositivo igual à do gateway (Aula 5) |

Um roteiro de diagnóstico em ordem: (1) bancada a 1 m com os mesmos parâmetros explícitos; (2) confira RSSI e SNR esperados; (3) conecte a antena certa e volte à distância; (4) só então mude SF e potência.

## Resumo

- Alcance = a maior distância em que `Pr` fica acima da sensibilidade do SF com margem: `Pr = Pt - Lt + Gt - PL + Gr - Lr`, sensibilidade `-174 + 10 log10(BW) + NF + SNR_min`. No exemplo de 10 km (`n = 3,5`, 14 dBm, 2 dBi): `Pr = -109,7 dBm`, SNR de 7,3 dB, e SF8 fecha com 17,4 dB de margem.
- O ambiente (`n`) e o horizonte limitam o alcance mais do que a escolha de SF; de SF7 a SF12 o ganho é de 2,3 vezes com `n = 3,5`.
- A antena vale muito: +6 dB (5 dBi contra 2 dBi nos dois lados) rende 1,5 vez a distância; 5 m de coaxial fino tiram cerca de 6 dB; altura vale mais que ganho; sempre polarização vertical nas duas pontas.
- Teste de alcance: parâmetros fixos, contador de sequência, RSSI e SNR registrados com posição; interprete a margem por `SNR - SNR exigido` e desconte 10 a 15 dB de projeto.
- Os erros de campo mais comuns são antena ausente ou errada, frequência ou variante do módulo errada, parâmetros divergentes, fonte fraca e configuração de TCXO ou chave de RF.

## Para aprofundar

- [ ] [LoRa Range and Signal Strength Tests in a Residential Community](https://www.youtube.com/watch?v=pbDqOI1zTm4) (Modest Maker): vídeo de teste de cobertura de um gateway em um bairro, comparando antenas e o efeito de velocidade e ADR, com visada e obstáculos; o que descrevo vem do texto de apresentação do vídeo, que não assisti.
- [ ] [LoRa Range Test using Different types of Antennas, Flexible PCB, Whip, suction cup antenna](https://www.youtube.com/watch?v=CbX5Uhxr1Xk) (Electronic Clinic): vídeo cujo título indica comparação de três tipos de antena em um teste de alcance em 433 MHz; conteúdo não assistido por inteiro.
- [ ] [LoRa Module VS nRF24 VS Generic RF Module || Range & Power Test](https://www.youtube.com/watch?v=nP6YuwNVoPU) (GreatScott!): vídeo cujo título indica um teste de alcance e consumo do LoRa contra outros módulos; conteúdo não assistido.
- [ ] [LoRaWAN distance world record broken, twice. 766 km using 25mW](https://www.thethingsnetwork.org/article/lorawan-distance-world-record) e [New LoRa world record: 1336 km](https://www.thethingsnetwork.org/article/new-lora-world-record-1336-km-830-mi) (The Things Network): os relatos dos recordes, com os parâmetros de cada um.
- [ ] [Adaptive Data Rate](https://www.thethingsnetwork.org/docs/lorawan/adaptive-data-rate/) (The Things Network): a conta de margem por SNR usada aqui.
- [ ] [Módulo 4, Aula 7: Medição, dummy load e erros comuns](../04%20-%20Antenas/07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md) e [Módulo 2, Aula 9: Ferramentas de estimativa](../02%20-%20Propagacao%20de%20Radio/09%20-%20Ferramentas%20e%20Escolha%20de%20Faixa.md): como medir a antena e como simular o enlace em software.

Quando estiver confiante, siga para o [Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md).
