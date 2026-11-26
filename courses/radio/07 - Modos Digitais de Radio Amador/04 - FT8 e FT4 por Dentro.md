[Voltar ao módulo](./README.md)

# Aula 4: FT8 e FT4 por dentro

*Pergunta que esta aula responde: como o FT8 transforma uma frase como "K1JT K9AN EN50" em 79 símbolos de 8 tons, por que essa estrutura decodifica a -21 dB e o que ela custa?*

> Fonte principal: Franke, Somerville e Taylor, "The FT4 and FT8 Communication Protocols" (QEX, 2020), o artigo dos criadores, consultado em setembro de 2026. Onde escrevo "conta minha" ou "calculado aqui", é aritmética a partir dos números do artigo, não algo que o artigo afirma.

## Contexto: por que o FT8 existe

O FT8 nasceu em julho de 2017 (WSJT-X 1.8) e o FT4, para concursos, em 2019 (WSJT-X 2.1). Os modos anteriores da mesma família (JT4, JT9, JT65) usavam ciclos de **60 s** e, por isso, um contato levava no mínimo 4 minutos. Segundo o artigo, reduzir o ciclo para 15 s, otimizar o decodificador LDPC e aceitar uma perda de cerca de **4 dB** de sensibilidade em relação ao JT65 fez do FT8 um "ponto ideal" para DX e uso geral em HF, VHF e UHF baixo. O FT4 aceita outros 3,2 dB de perda e é duas vezes mais rápido.

Repare no padrão: **sensibilidade é trocada por velocidade**, exatamente a troca de Shannon do Módulo 3.

## Visão geral do pipeline

```
texto -> 77 bits -> +14 bits de CRC = 91 -> LDPC(174,91) -> 174 bits
      -> grupos de 3 bits -> 58 símbolos (tons 0 a 7, código Gray)
      -> + 3 sequências de sincronismo de 7 símbolos = 79 símbolos
      -> 8-GFSK, 6,25 baud -> 12,64 s de sinal, 50 Hz de banda
```

O mesmo pipeline, em sentido inverso, roda no receptor. Vamos por etapas, sempre perguntando "por que assim".

## 1. Codificação da fonte: 77 bits

Toda transmissão FT8 e FT4 carrega **exatamente 77 bits** de informação do usuário. Um contato mínimo troca indicativos, um localizador Maidenhead de 4 caracteres, relatório de sinal e confirmações. Se todos esses campos fossem texto ASCII, "K1JT K9AN EN50" ocuparia 14 x 8 = 112 bits. O artigo resolve com **compressão sem perda de campos conhecidos**:

- 3 bits definem o **tipo de mensagem** (`i3`, oito tipos) e os outros 74 bits têm significado que depende do tipo.
- **Indicativo padrão**: 28 bits.
- **Localizador de 4 caracteres**: 15 bits. Conferência: um localizador Maidenhead tem 2 letras de A a R (18 valores cada) e 2 dígitos (10 cada), logo `18 x 18 x 10 x 10 = 32.400` combinações, que cabem em `2^15 = 32.768`.
- **Relatório de sinal**: 5 bits, de -30 a +32 dB **só em valores pares** (32 valores).
- **Texto livre**: até 13 caracteres, em 71 bits. Conferência: se o alfabeto tem 42 símbolos (dígitos, letras maiúsculas, espaço e alguns sinais), `13 x log2(42) = 13 x 5,39 = 70,1 bits`, que cabem em 71.

Conta de uma mensagem padrão (tipo 1): `c28 r1 c28 r1 R1 g15` mais os 3 bits do tipo:

```
28 + 1 + 28 + 1 + 1 + 15 + 3 = 77 bits
```

| Tipo | Exemplo | Uso |
|---|---|---|
| 0.0 | `TNX BOB 73 GL` | Texto livre, 13 caracteres |
| 0.1 | `K1ABC RR73; W9XYZ -08` | DXpedition (Fox e Hound) |
| 0.3, 0.4 | `K1ABC W9XYZ 6A WI` | ARRL Field Day |
| 0.5 | `123456789ABCDEF012` | Telemetria (71 bits) |
| 1 | `K1ABC/R W9XYZ/R R EN37` | Mensagem padrão |
| 2 | `G4ABC/P PA9XYZ JO22` | Concursos VHF europeus |
| 3 | `K1ABC W9XYZ 579 WI` | ARRL RTTY Roundup |
| 4 | `PJ4/K1ABC RRR` | Indicativo não padrão |

Indicativos que não cabem em 28 bits (composto como `PJ4/K1ABC`, ou de evento especial) usam o tipo 4: um indicativo de até 11 caracteres, e o **outro** indicativo enviado só como um **hash de 12 bits**. Um hash não tem inversa única, então o WSJT-X mostra o último indicativo que já viu com aquele hash, entre `< >`, ou `<...>` se não houver. O artigo afirma que colisões de hash, em prática, são raras.

**Por que compactar assim?** Cada bit a menos é menos energia a proteger. Com 77 bits em vez de 112, o mesmo esforço de FEC dá mais margem. E o preço de mensagens estruturadas é claro: **não existe texto livre grande** no FT8. O artigo diz que texto arbitrário pode ser enviado, "mas só em pequenas quantidades".

## 2. CRC e FEC: 77 + 14 + 83 = 174

Os 77 bits recebem um **CRC de 14 bits** (polinômio `0x6757` em hexadecimal, calculado sobre a mensagem estendida com zeros até 82 bits), formando 91 bits. Depois, **83 bits de paridade** produzem um bloco de 174 bits.

A taxa de código é `91 / 174 = 0,52`: a cada 174 bits transmitidos, só 91 são "carga" (77 de mensagem e 14 de checagem).

### O que é um código LDPC

O código usado é um **LDPC** (Low-Density Parity Check) de parâmetros (174, 91), projetado especificamente para o FT8 e o FT4. Ele é definido por uma **matriz de paridade** esparsa de 83 linhas por 174 colunas. Cada linha é uma equação: "a soma (módulo 2, ou XOR) de certos bits da palavra deve ser zero". Uma sequência de 174 bits é uma **palavra de código válida** somente se as 83 somas derem zero.

Mini-exemplo com 6 bits e 3 equações (uma versão em escala de brinquedo, criada aqui para explicar a lógica; o código real é muito maior):

```
c1: b1 + b2 + b3 = 0
c2: b3 + b4 + b5 = 0
c3: b1 + b5 + b6 = 0
```

Se o receptor recebe uma palavra em que **c1 e c3 falham** mas c2 está certa, qual bit provavelmente foi trocado? O bit que participa de c1 e de c3 e não de c2: `b1`. Inverter `b1` conserta as duas equações. O decodificador LDPC faz isso em escala: milhares de equações e "votos" entre bits e equações, com um refinamento a mais: as **decisões brandas**.

### Decisão branda

O demodulador não entrega "0" ou "1", e sim uma **probabilidade** (quão certo ele está). O decodificador do WSJT-X combina duas técnicas:

- **BP (belief propagation)**: rápido, iterativo; os bits e as equações trocam "crenças" (probabilidades) até convergirem para uma palavra válida. Na prática, "a maioria dos sinais é decodificada com poucas iterações de BP" (artigo).
- **OSD (ordered statistics decoding)**: mais caro e mais sensível; entra quando o BP falha e "pode dar vários dB de sensibilidade adicional".

O **CRC** é o último guarda: se a palavra decodificada não fecha o CRC, a mensagem é descartada.

### Informação a priori (AP)

Quando você responde a um CQ, você já sabe seu indicativo, o do parceiro e o tipo de mensagem que espera. O artigo conta: você "sabe" pelo menos **62 dos 77 bits** da próxima mensagem. O decodificador só precisa descobrir os 15 restantes e verificar se a solução é confiável. Isso aumenta a sensibilidade em vários dB, ao preço de mais decodificações falsas. Nas simulações do artigo, o máximo de AP dá cerca de 2 dB em canais pouco perturbados e, no canal mais perturbado, ganhos de cerca de 5 dB (FT4) e 10 dB (FT8).

## 3. Modulação: 8-GFSK

Os 174 bits são agrupados de 3 em 3, gerando `174 / 3 = 58` símbolos de dados. Cada símbolo escolhe **um entre 8 tons** (0 a 7). O mapeamento usa **código Gray**: tons vizinhos diferem em um único bit. Assim, o erro mais provável (confundir um tom com o vizinho, por Doppler ou ruído) estraga apenas 1 bit dos 3.

| Parâmetro | FT8 | FT4 |
|---|---|---|
| Duração do símbolo T | 0,160 s | 0,048 s |
| Taxa de símbolos (`1/T`) | 6,25 baud | 20,83 baud (calculado aqui) |
| Índice de modulação h | 1 | 1 |
| Espaçamento entre tons (`h/T`) | 6,25 Hz | 20,83 Hz (calculado aqui) |
| Número de tons | 8 | 4 |
| Bits por símbolo | 3 | 2 |
| Filtro gaussiano | BT = 2 | BT = 1 |
| Símbolos por transmissão | 79 | 105 (com 2 de rampa) |
| Duração do sinal | 12,64 s | cerca de 5 s (calculado aqui) |
| Ciclo T/R | 15 s | 7,5 s |
| Largura ocupada | 50 Hz | cerca de 83 Hz (calculado aqui: 4 tons x 20,83 Hz) |

O que cada parâmetro faz:

- **FSK contínua em fase (CPFSK) com h = 1**: o espaçamento entre tons é igual à taxa de símbolos, o que faz os 8 tons serem **ortogonais** entre si: o receptor mede a energia de cada tom sem que um "vaze" no outro. (Módulo 3, Aula 6, apresentou FSK e MSK.)
- **Gaussiana (G) com BT = 2**: as transições de frequência entre símbolos são suavizadas por um filtro gaussiano, o que reduz os "lobos laterais" do espectro. Os pulsos suavizados duram mais que T e se sobrepõem aos vizinhos, uma interferência intersimbólica **deliberada** para deixar o espectro compacto. O artigo mostra que isso torna o sinal tão estreito que "dezenas deles cabem numa fatia de poucos kHz com pouca ou nenhuma interferência mútua".
- **Envelope constante**: a amplitude é constante, exceto uma rampa de subida e descida de `T/8 = 20 ms` (cosseno elevado). Assim, um amplificador não linear não gera intermodulação com um sinal FSK (artigo). Isso não dispensa o cuidado com ALC da Aula 2, que é sobre o áudio antes do amplificador.
- **8 tons em vez de 2**: com 3 bits por símbolo, a mesma taxa de bits usa símbolos 3 vezes mais longos, e cada símbolo acumula mais energia (Módulo 3, Aula 6 e 7).
- **Por que 160 ms, e por que o FT4 usa espaçamento maior**: o artigo diz que "o tamanho do espalhamento de frequência do canal em relação ao espaçamento de tons do modo é o fator mais importante" na degradação. No canal ionosférico de alta latitude perturbado, o espalhamento Doppler passa do espaçamento de 6,25 Hz do FT8, e o FT8 não atinge 50% de decodificação, em nenhum SNR, com o esquema básico de decodificação (BP com blocos de 1 símbolo); o FT4, com espaçamento maior, decodifica melhor ali.

### Taxas

```
bits transmitidos no ar = 79 símbolos x 3 bits = 237 bits em 12,64 s = 18,75 bit/s
informação útil          = 77 bits / 12,64 s      = 6,09 bit/s
                         = 77 bits / 15 s (ciclo) = 5,1 bit/s
```

Isso confirma `Rb = Rs x log2(M) = 6,25 x 3 = 18,75 bit/s` (Módulo 3, Aula 5).

## 4. Sincronismo: arranjos de Costas

O sinal FT8 leva 21 dos 79 símbolos dedicados a sincronismo: **três blocos de 7 tons** com a sequência **3, 1, 4, 0, 6, 5, 2**, no começo, no meio e no fim:

```
[Costas 7] [29 símbolos de dados] [Costas 7] [29 símbolos de dados] [Costas 7]
7 + 29 + 7 + 29 + 7 = 79
```

O receptor correlaciona o áudio com esse padrão conhecido para estimar o **deslocamento de tempo** e o **de frequência**. Um arranjo de Costas tem a propriedade de a autocorrelação em tempo e frequência ter um único pico nítido (explicação geral, não do artigo), e por isso um padrão de apenas 7 tons permite achar o sinal nos dois eixos ao mesmo tempo. O FT4 usa **quatro** arranjos de Costas de 4 tons diferentes.

O custo é **overhead**: `79 / 58 = 1,36`, ou seja, 1,3 dB (calculado aqui) de energia gasta em sincronismo. E o overhead do CRC é `91 / 77`, ou 0,7 dB (calculado aqui). A troca compensa por facilitar a busca do sinal sob ruído (Aula 3).

## 5. Como o receptor decodifica

O artigo descreve o processo do WSJT-X:

1. **Análise espectral** de todo o áudio do ciclo (por exemplo, 200 a 3000 Hz) para achar **candidatos**.
2. Para cada candidato, **sincroniza** (tempo e frequência) com os arranjos de Costas.
3. Calcula as **decisões brandas** por detecção não coerente em blocos de 1, 2 e 3 símbolos (no FT4, 1, 2 e 4). Num bloco de 3 símbolos FT8, há `8^3 = 512` sequências possíveis; o programa correlaciona a janela recebida com cada uma delas (512 correlações) para obter as 9 decisões brandas. Blocos maiores dão mais sensibilidade quando o canal é estável; blocos de 1 símbolo são mais robustos em desvanecimento rápido.
4. Roda **BP** e, se falhar, **OSD**; confere o **CRC**.
5. Se decodificou, **regenera o sinal ideal**, estima o ganho complexo do canal e o **subtrai** do áudio; então repete a análise. Um sinal forte, depois de removido, pode revelar outro mais fraco **na mesma frequência**. O artigo relata que essas passagens múltiplas conseguem decodificar "dois ou três sinais na mesma frequência ou quase".

Assim, uma janela de 3 kHz do rádio SSB contém dezenas de sinais de 50 Hz, e todos são decodificados juntos. Uma conta simples: `3000 Hz / 50 Hz = 60` posições de 50 Hz por ciclo (conta minha; na prática os sinais se sobrepõem em parte). Com dois ciclos alternados (par e ímpar), a banda de FT8 lota facilmente.

## 6. Desempenho: os limites de decodificação

Limiares medidos por simulação no artigo (SNR em 2500 Hz em que a probabilidade de decodificação é 50%):

| Decodificador | FT8, ruído branco (AWGN) | FT8, latitude média perturbada | FT4, AWGN | FT4, latitude média perturbada |
|---|---|---|---|---|
| Só BP, blocos de 1 símbolo | -19,6 dB | -16,5 dB | -15,3 dB | -12,7 dB |
| BP com blocos de vários símbolos | -20,3 dB | -17,0 dB | -16,9 dB | -14,0 dB |
| Blocos + BP + OSD | -20,8 dB | -18,6 dB | -17,5 dB | -15,2 dB |

Duas leituras:

- A distância entre o melhor caso e o pior (do -20,8 para o -16,5 no FT8) é o **preço do canal real** em relação ao ideal.
- A diferença FT8 versus FT4 no ruído branco é `-20,8 - (-17,5) = 3,3 dB`, coerente com os "3,2 dB" que o artigo cita.

Na operação real, os operadores relatam decodificações a cerca de -21 dB e, com AP, algo abaixo disso (uma apresentação de operador cita -24 dB ocasionalmente). Trate esses como relatos, não como especificação.

### Conferência com Shannon

Podemos comparar o FT8 com o limite do Módulo 3, Aula 7. Com o limiar de -20,8 dB em 2500 Hz:

```
S/N0 = 2500 Hz x 10^(-2,08) = 20,8 Hz            (potência do sinal dividida pela densidade de ruído)
Eb/N0 = (S/N0) / taxa = 20,8 / 6,09 = 3,4  ->  5,3 dB
```

O limite de Shannon é `Eb/N0 = -1,59 dB`. O FT8 opera cerca de **6,9 dB** acima. Por que tão longe do limite? Parte é overhead (1,3 dB de sincronismo e 0,7 dB de CRC, calculados acima), parte é o comprimento curto do bloco (174 bits; códigos curtos ficam mais longe do limite que códigos longos) e parte é a detecção não coerente.

Outra forma da conta: a capacidade de um canal AWGN de 50 Hz com o SNR de sinal daquela banda:

```
SNR em 50 Hz = -20,8 + 10 x log10(2500 / 50) = -20,8 + 17 = -3,8 dB = 0,417
C = 50 x log2(1 + 0,417) = 50 x 0,505 = 25 bit/s
```

O FT8 entrega 6 bit/s, cerca de um quarto da capacidade teórica. O modo troca deliberadamente eficiência por simplicidade e latência curta: é o mesmo tipo de compromisso que o LoRa fará no Módulo 8, só que com outra ferramenta (chirps em vez de FSK de tons).

## 7. A sequência de um contato

O artigo dá o exemplo de QSO entre K1JT e K9AN, com os rótulos `Tx1` a `Tx6` da interface:

```
Tx6: CQ K1JT FN20        (K1JT chama)
Tx1: K1JT K9AN EN50      (K9AN responde: destino, origem, localizador)
Tx2: K9AN K1JT -10       (K1JT dá o relatório de K9AN: -10 dB)
Tx3: K1JT K9AN R-12      (K9AN confirma e dá o relatório dele: R = "roger")
Tx4: K9AN K1JT RRR       (K1JT confirma)
Tx5: K1JT K9AN 73        (K9AN se despede)
```

Cada mensagem traz o indicativo de quem transmite, e todas, exceto o CQ, são dirigidas a um parceiro. O relatório é a **SNR em 2500 Hz** medida por quem recebe, em passos de 2 dB (ver a codificação do relatório acima). "RR73" combina o RRR com o 73 numa só mensagem, para encurtar o contato. Se a resposta do parceiro não é decodificada, o programa **repete a transmissão anterior**: um ciclo perdido custa 15 s.

Com ciclos de 15 s, a decisão entre decodificar e responder cabe em poucos segundos, o que exige automação. A caixa **Auto Seq** do WSJT-X analisa as mensagens decodificadas e monta a próxima. Mas, segundo o artigo, "o WSJT-X exige que todo QSO seja iniciado por um operador humano. Não gostamos da ideia de operação totalmente robótica com modos como FT4 e FT8, e o software a impede." (com poucas exceções opcionais: o modo Fox de DXpedition e concursos). O software também exige a confirmação do operador para registrar o contato.

## 8. É público e aberto

O protocolo do FT8 está completamente documentado (artigo, código-fonte em licença GPLv3, matrizes do LDPC publicadas) e qualquer pessoa com um receptor SSB (ou um RTL-SDR, Módulo 6) e o WSJT-X pode decodificar cada sinal que você transmitir. Isso é exatamente o que o serviço de radioamador pede (Módulo 5, Aula 5). Compressão de campos (77 bits), FEC e hash de indicativos não são criptografia: quem tem o algoritmo lê tudo.

## Resumo

- O FT8 carrega 77 bits (indicativos de 28 bits, localizador de 15, relatório de 5, texto livre de 13 caracteres), com CRC de 14 bits e LDPC(174,91), formando 174 bits, ou 58 símbolos de 3 bits.
- A modulação é 8-GFSK: 8 tons ortogonais de espaçamento 6,25 Hz, símbolos de 160 ms com transições gaussianas suaves, envelope constante e 50 Hz de banda; três arranjos de Costas de 7 símbolos (21 dos 79) fornecem o sincronismo.
- O decodificador combina detecção em blocos, BP e OSD, confere CRC, usa informação a priori do QSO e subtrai sinais já decodificados para revelar os mais fracos.
- O limiar ideal é cerca de -21 dB em 2500 Hz (Eb/N0 de cerca de 5 dB, uns 7 dB acima do limite de Shannon); o custo é a taxa: cerca de 6 bit/s. O FT4 é 3,3 dB menos sensível e 2 vezes mais rápido.
- Todo QSO em FT8 começa com uma decisão humana, e todo o protocolo é público, o que combina com as regras do radioamador.

## Para aprofundar

- [ ] [The FT4 and FT8 Communication Protocols](https://wsjt.sourceforge.io/FT4_FT8_QEX.pdf) (Franke, Somerville e Taylor; QEX): a definição completa dos dois protocolos, com codificação, LDPC, GFSK, Costas e curvas de desempenho.
- [ ] [What Is FT8? How It Works and Why So Many Operators Use It](https://www.youtube.com/watch?v=ugmrYXIPSIM) (She's On Frequency): explicação em vídeo do funcionamento do FT8 antes de ensinar a operar (título e canal confirmados; conteúdo não assistido).
- [ ] [Get Started with FT8 - An Introduction for Beginners](https://www.youtube.com/watch?v=YyWX0i87P0o) (Ham Radio DX): introdução ao fluxo do WSJT-X, com decodificação de vários sinais na mesma janela (título e canal confirmados; conteúdo não assistido).
- [ ] [WSJT-X 2.7.0 User Guide](https://wsjt.sourceforge.io/wsjtx-doc/wsjtx-main-2.7.0.html) (Joe Taylor, K1JT): lista dos modos e do que cada um foi projetado para fazer.
- [ ] [Channel Coding (PySDR)](https://pysdr.org/content/channel_coding.html) (Marc Lichtman): FEC, taxa de código, decisão branda e LDPC, com a base teórica do Módulo 3 (página já referenciada no Módulo 3).

[Próxima aula: Operando FT8 com WSJT-X](./05%20-%20Operando%20FT8%20com%20WSJT-X.md)
