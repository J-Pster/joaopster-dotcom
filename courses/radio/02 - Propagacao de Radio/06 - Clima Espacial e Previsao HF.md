# Aula 6: Ciclo solar, índices e previsão de propagação em HF

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que faz a propagação HF mudar de um ano para outro e de um dia para outro, que números medem isso (SFI, K, A) e como ler uma previsão?*

## Por que isso existe

Na Aula 5, a ionosfera depende da radiação solar. O Sol não é constante. Sua atividade varia num ciclo de cerca de 11 anos e tem surtos de horas a dias. Como a densidade de elétrons `N` (e, portanto, `fc` e a MUF) depende disso, a propagação HF também varia. A comunidade criou índices numéricos para resumir o estado do Sol e da ionosfera, e programas de previsão que os usam.

## Ciclo solar e manchas

O Sol tem um ciclo magnético de cerca de 11 anos. O sinal visível é o número de **manchas solares** (regiões escuras, mais frias, ligadas a campos magnéticos intensos, de onde partem erupções). Mais manchas significa mais radiação ultravioleta e raios X, logo mais ionização, `fc` mais alta e MUF mais alta: as bandas de 21 a 28 MHz e até 50 MHz abrem para longa distância. No mínimo do ciclo, a MUF diurna raramente passa de 15 a 20 MHz, e as bandas altas ficam quase mortas; sobram as baixas e médias.

O **número de manchas suavizado** (SSN, sunspot number, média móvel de 13 meses) é o índice tradicional do ciclo. Segundo o NOAA/SWPC, o Painel de Previsão previu para o Ciclo 25 um máximo de 115 manchas, em julho de 2025 (informação da página de progresso do ciclo, verificada em setembro de 2026; o valor observado do pico não consegui confirmar de forma legível nessa página, então confira o gráfico atualizado em [spaceweather.gov](https://www.spaceweather.gov/products/solar-cycle-progression)). Depois do máximo, a atividade tende a decair por alguns anos até o mínimo; confira a fase atual antes de esperar bandas altas abertas.

## Fluxo solar (SFI, F10.7)

Contar manchas depende de observação visual; um sinal melhor para o rádio é o **fluxo solar em 10,7 cm**, medido em 2.800 MHz por radiotelescópio (F10.7). É a potência de ruído de rádio do Sol nessa frequência, dada em **sfu** (solar flux units, `1 sfu = 10^-22 W/m²/Hz`). Ele correlaciona bem com a ionização da ionosfera e é medido todos os dias (por exemplo, em Penticton, no Canadá). Ordem de grandeza: cerca de 65 a 70 sfu no mínimo solar e acima de 200 nos máximos fortes.

Regra grosseira que os radioamadores usam (não é norma):

| SFI | Expectativa em HF |
|---|---|
| Abaixo de 80 | Bandas baixas (80/40 m); bandas altas raramente abertas |
| Cerca de 100 a 150 | 20 m boa; 15 m e 10 m abrem em parte do dia |
| Acima de 150 | 15, 12, 10 m abrem com frequência; MUF às vezes acima de 30 MHz |

## Clima espacial: tempestades e apagões

Além do ciclo lento, há eventos rápidos, agrupados sob **clima espacial**:

- **Flare (erupção solar)**: aumento súbito de raios X, que chega à Terra em cerca de 8 minutos (velocidade da luz). Ioniza fortemente a camada D no lado iluminado. Resultado: **apagão de rádio (radio blackout)** em HF que dura de minutos a horas. O NOAA classifica em R1 a R5 (por fluxo de raios X); em R5, "apagão completo de HF em todo o lado iluminado da Terra por várias horas" (NOAA, verificado em setembro de 2026).
- **CME (ejeção de massa coronal)**: nuvem de plasma que chega em 1 a 3 dias e perturba o campo magnético terrestre: **tempestade geomagnética**. Efeitos no HF: normalmente a densidade da F2 cai (MUF cai) e a absorção nas latitudes altas cresce; aurora aparece em latitudes baixas em tempestades fortes.
- **Partículas energéticas**: causam absorção de calota polar em altas latitudes.

## Índices K, Kp e A (geomagnético)

O campo magnético da Terra é medido em observatórios; sua perturbação resume a atividade geomagnética.

- **K**: número de 0 a 9, quase logarítmico, calculado a cada 3 horas em um observatório, a partir da maior variação do campo horizontal. Segundo o NOAA, "1 é calmo e 5 ou mais indica tempestade geomagnética".
- **Kp**: média de K de uma rede de observatórios (planetário).
- **A** (e **Ap**): versão linear, diária, em unidades de nT aproximadamente, de 0 a 400. Mapeamento clássico de K para o índice `a` de 3 horas: K0 = 0, K1 = 3, K2 = 7, K3 = 15, K4 = 27, K5 = 48, K6 = 80, K7 = 140, K8 = 240, K9 = 400. O `A` do dia é a média dos oito `a` de 3 horas. (Mapeamento da literatura clássica; não o reconfirmei em fonte oficial nesta sessão.)

Escala G do NOAA (verificada em setembro de 2026): G1 (leve) Kp = 5; G2 (moderada) Kp = 6, "HF pode ter fading em latitudes altas"; G3 (forte) Kp = 7, "HF pode ficar intermitente"; G4 (severa) Kp = 8 ou 9-, "HF esporádico"; G5 (extrema) Kp = 9, "HF pode ficar impossível em muitas áreas por um a dois dias".

Guia rápido de leitura para HF: SFI alto e K baixo (0 a 2), condição favorável; K acima de 4 ou A acima de 30, tempestade, MUF caindo, sobretudo em latitudes altas. O Brasil, em latitudes baixas e médias, sente menos em tempestades moderadas, mas eventos fortes (G4 ou G5) se propagam a todo o planeta.

## Como escolher a frequência: regra de bolso

1. Determine a distância e o horário.
2. Consulte o SFI e K atuais.
3. De dia, longe: tente frequências altas (14 a 28 MHz). À noite, longe: 3,5 a 7 MHz.
4. Se o sinal não chega: teste a próxima banda abaixo ou acima; o sinal costuma aparecer em uma e não na outra (janela LUF/MUF, Aula 5).
5. Escute balizas (beacons) em cada banda: se você as ouve, a banda está aberta na direção delas.

## Previsão de propagação HF

Programas de previsão modelam a ionosfera (com base em SSN/SFI e mapas de `fc` derivados de longos históricos), traçam o caminho e computam MUF, LUF, perdas e SNR por hora.

- **VOACAP**: motor de previsão de HF (3 a 30 MHz), da NTIA/ITS, originalmente para a Voice of America. O site [voacap.com](https://www.voacap.com/) oferece previsões ponto a ponto, mapas de cobertura e SNR, com variações para radioamadores, entre outras (verificado em setembro de 2026). Atenção: o site proíbe acesso automatizado por scripts sem acordo prévio.
- **Previsões do NOAA/SWPC** (alertas, índices e escalas): [spaceweather.gov](https://www.spaceweather.gov/).
- **Software e aplicativos de terceiros** (por exemplo, painéis de propagação em sites de radioamador): existem vários; a qualidade varia e não os verifiquei nesta sessão.

Uma previsão é **estatística**: diz a condição mediana esperada para o mês, não garante um contato hoje. Para hoje, use dados em tempo real (SFI, K, redes de receptores como o Reverse Beacon Network e PSK Reporter, que mostram onde seu sinal foi ouvido, ver Módulo 7 para os modos digitais).

## Ligação com a rede privada

HF é sujeito a esses humores. Uma rede privada em HF (por exemplo, para áreas remotas) precisa de frequências múltiplas, agenda por horário e modos digitais robustos, aceitando indisponibilidade em tempestade. Já LoRa em 433/868/915 MHz, VHF e UHF não dependem da ionosfera para o uso normal em linha de visada: o clima espacial não os afeta de modo relevante. É um dos motivos de as redes mesh do Módulo 9 usarem sub-GHz e não HF.

## Resumo

- A atividade solar (ciclo de 11 anos) controla `fc` e a MUF; SSN e SFI (F10.7, em sfu) medem esse estado.
- Flare: raios X ionizam D no lado iluminado, causando apagão de HF (escala R); CME: tempestade geomagnética (escala G, Kp), com queda de MUF e fading.
- K (0 a 9, a cada 3 h), Kp (planetário), A (linear, diário). Kp 5 ou mais: tempestade (G1 e acima).
- Previsões como VOACAP são estatísticas; use dados em tempo real (balizas, PSK Reporter) para decidir hoje.
- VHF/UHF/LoRa quase não sofrem com clima espacial.

## Para aprofundar

- [ ] [NOAA Space Weather Scales](https://www.spaceweather.gov/noaa-scales-explanation) (NOAA/SWPC): definição oficial das escalas G (geomagnética), R (apagão de rádio) e S (radiação).
- [ ] [Planetary K-index](https://www.spaceweather.gov/products/planetary-k-index) (NOAA/SWPC): explica o Kp e sua relação com a escala G.
- [ ] [Why Does Space Weather Affect Ham Radio? With Tamitha Skov WX6SWW](https://www.youtube.com/watch?v=jazwULhkp08) (título do vídeo): pelo título, trata de clima espacial e radioamador; não assisti.

[Próxima aula: Troposfera, modos especiais e onda de terreno](./07%20-%20Troposfera%20e%20Modos%20Especiais.md)
