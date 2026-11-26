# Aula 6: O espectro eletromagnético e as faixas de rádio

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: rádio, luz e raios X são a mesma coisa? Se sim, por que se comportam de modo tão diferente, e por que cada faixa de rádio (HF, VHF, UHF...) serve a um propósito?*

## Uma só coisa, variando a frequência

Pela Aula 2, toda onda EM tem o mesmo mecanismo (campos que se sustentam) e a mesma velocidade `c` no vácuo. O que muda de uma para outra é só a **frequência** (e, por `c = f x lambda`, o comprimento de onda). O conjunto de todas as frequências possíveis é o **espectro eletromagnético**. Luz visível é uma pequena faixa dele; rádio é outra, e a diferença está apenas em `f`.

Cuidado com um ponto de honestidade: as fronteiras entre regiões são **convenções**, não linhas físicas. Nada muda abruptamente ao cruzar uma delas, e fontes diferentes usam limites ligeiramente diferentes.

## Por que ondas de frequências diferentes se comportam de modo diferente

Duas ideias explicam quase tudo.

**1. Energia do fóton.** Em escala microscópica a energia de uma onda EM vem em pacotes chamados **fótons**. A energia de um fóton é proporcional à frequência:

`E = h x f`, com `h = 6,626 x 10^-34 J.s` (constante de Planck).

Em elétron-volts (eV, unidade de energia usada em física atômica; 1 eV = 1,602 x 10^-19 J): `h = 4,136 x 10^-15 eV.s`. Atalho: `E (eV) = 1240 / lambda (nm)`.

Exemplos:
- FM, 100 MHz: `4,136 x 10^-15 x 10^8 = 4,1 x 10^-7 eV`.
- Wi-Fi, 2,4 GHz: `9,9 x 10^-6 eV`.
- Luz verde, 550 nm: `1240 / 550 = 2,25 eV`.
- Raio X de 1 nm: `1240 eV` (cerca de 1,2 keV).

Átomos e moléculas só reagem a energias específicas (mover elétrons de camada, quebrar ligações químicas, arrancar elétrons). Fótons de rádio têm milhões de vezes menos energia do que qualquer uma dessas transições. Por isso rádio não altera moléculas: age só como um campo oscilante empurrando cargas (elétrons em antenas, íons e moléculas polares na água). Na luz visível e acima, cada fóton pode mexer com uma molécula individualmente (é como funcionam a visão, a fotossíntese e a queimadura solar).

Rádio pode ser tratado como onda contínua (a descrição clássica das Aulas 1 a 4) porque cada sinal reúne um número astronômico de fótons minúsculos.

**2. Tamanho da onda em relação aos objetos** (Aula 3). O que a onda faz ao encontrar um obstáculo depende de `lambda` comparado com o tamanho do obstáculo. Ondas de 3 m contornam uma árvore; ondas de 500 nm (luz) são bloqueadas por uma folha; raios X de 0,1 nm passam entre os átomos e atravessam tecidos moles.

## O espectro completo (do rádio aos raios gama)

Valores convencionais aproximados:

| Região | Comprimento de onda | Frequência | Energia do fóton | Fonte típica / uso |
|---|---|---|---|---|
| Rádio | de mm a mais de 100 km | abaixo de 3 THz (ver nota) | abaixo de 12 meV | antenas, circuitos oscilantes |
| Infravermelho | 1 mm a 700 nm | 300 GHz a 430 THz | cerca de 1,2 meV a 1,8 eV | calor, controle remoto, fibra óptica |
| Visível | 700 a 400 nm | 430 a 750 THz | cerca de 1,8 a 3,1 eV | luz, visão |
| Ultravioleta | 400 a 10 nm | 750 THz a 30 PHz | cerca de 3,1 a 124 eV | Sol, esterilização |
| Raios X | 10 a 0,01 nm | 30 PHz a 30 EHz | cerca de 124 eV a 124 keV | imagem médica |
| Raios gama | menos de 0,01 nm | mais de 30 EHz | mais de 124 keV | núcleos atômicos, cosmos |

Notas:
- Prefixos: PHz = 10^15 Hz (peta), EHz = 10^18 Hz (exa).
- O limite superior do "rádio" varia por fonte. A Anatel define radiofrequência como a faixa de 8,3 kHz a 3000 GHz, "onde é possível a radiocomunicação" (página oficial da Anatel sobre radiofrequência, verificado em setembro de 2026). O limite de 3000 GHz (3 THz) é o adotado pela regulamentação internacional.
- **Micro-ondas** é um nome usado por engenheiros para a parte do rádio de cerca de 300 MHz a 300 GHz, não uma região independente.
- Raios X e gama se sobrepõem em energia; a distinção convencional é a origem (X vem de elétrons, gama de núcleos atômicos).
- O visível é uma faixa estreita (de 430 a 750 THz, menos de uma oitava, isto é, a frequência máxima é menos que o dobro da mínima). O rádio, em contraste, cobre cerca de 12 ordens de grandeza (de 3 Hz a 3 THz).

## As faixas de rádio: a designação da ITU

A **União Internacional de Telecomunicações (ITU)** dividiu o espectro de rádio em **bandas numeradas por décadas**. A banda de número `N` cobre de `0,3 x 10^N` a `3 x 10^N` Hz. Cada banda tem um fator 10 entre limites inferior e superior.

| Banda ITU | Sigla | Nome | Frequência | Comprimento de onda |
|---|---|---|---|---|
| 1 | ELF | extremely low frequency | 3 a 30 Hz | 100.000 a 10.000 km |
| 2 | SLF | super low frequency | 30 a 300 Hz | 10.000 a 1.000 km |
| 3 | ULF | ultra low frequency | 300 Hz a 3 kHz | 1.000 a 100 km |
| 4 | VLF | very low frequency | 3 a 30 kHz | 100 a 10 km |
| 5 | LF | low frequency | 30 a 300 kHz | 10 a 1 km |
| 6 | MF | medium frequency | 300 kHz a 3 MHz | 1 km a 100 m |
| 7 | HF | high frequency | 3 a 30 MHz | 100 a 10 m |
| 8 | VHF | very high frequency | 30 a 300 MHz | 10 a 1 m |
| 9 | UHF | ultra high frequency | 300 MHz a 3 GHz | 1 m a 10 cm |
| 10 | SHF | super high frequency | 3 a 30 GHz | 10 a 1 cm |
| 11 | EHF | extremely high frequency | 30 a 300 GHz | 1 cm a 1 mm |
| 12 | THF | tremendously high frequency | 300 GHz a 3 THz | 1 mm a 100 micrômetros |

Sobre os nomes: são só uma escala de rótulos em "orders of magnitude" (extremamente baixa, super baixa, ultra baixa, muito baixa, baixa, média, alta, muito alta, ultra alta, super alta, extremamente alta, tremendamente alta). Eles nasceram na história do rádio: no início ninguém usava acima do que hoje se chama "média"; a "alta" (HF) era a fronteira tecnológica, e as demais foram acrescentadas por extensão, sem significado físico especial nos nomes em si. HF, VHF e UHF são, portanto, apenas décadas de frequência.

Os comprimentos de onda seguem `300 / f (MHz)`. Também existem nomes métricos (ondas quilométricas, hectométricas, decamétricas, métricas, decimétricas, centimétricas, milimétricas), que descrevem a mesma coisa em metros.

Há ainda uma nomenclatura por **letras** usada em radar, satélite e micro-ondas (L, S, C, X, Ku, K, Ka...). Valores usuais (convenção IEEE, com variações entre padrões; confira a fonte do seu equipamento): L 1 a 2 GHz, S 2 a 4 GHz, C 4 a 8 GHz, X 8 a 12 GHz, Ku 12 a 18 GHz, K 18 a 27 GHz, Ka 27 a 40 GHz.

## O que cada faixa faz (visão que o módulo 2 aprofunda)

**Por que a propagação difere** (cada item é aprofundado no módulo 2):

- **VLF, LF, MF (abaixo de 3 MHz):** a onda acompanha a curvatura da Terra (onda de superfície) e segue o solo; alcance de centenas de km, com muita energia perdida no terreno. VLF penetra alguns metros de água do mar, e por isso é usado em comunicação com submarinos. MF é a onda média do rádio AM.
- **HF (3 a 30 MHz):** a **ionosfera**, camadas de gás ionizado (elétrons livres) a partir de cerca de 60 a 80 km de altitude, curva a onda de volta para a Terra. Abaixo de uma frequência-limite (que varia com hora do dia e atividade solar, tipicamente dentro do HF), ela reflete; acima, a onda escapa ao espaço. Resultado: comunicação entre continentes com pouca potência. O mecanismo completo é o tema central do módulo 2.
- **VHF e UHF (30 MHz a 3 GHz):** atravessam a ionosfera (não voltam), então o alcance normal é a **linha de visada**: enquanto houver caminho sem obstruções entre antenas, cerca de 30 a 100 km na Terra, dependendo da altura das antenas. Satélites comunicam por essas faixas porque a onda passa direto pela ionosfera. UHF penetra mais em prédios que SHF, e menos que VHF.
- **SHF e EHF (acima de 3 GHz):** linha de visada estrita, feixes muito direcionais, e **absorção** por chuva (acima de cerca de 10 GHz), vapor d'água (pico próximo de 22 GHz) e oxigênio (pico próximo de 60 GHz). Ótimo para enlaces ponto a ponto de grande capacidade e para satélite; ruim para atravessar obstáculos.

**Por que a perda no espaço aumenta com a frequência.** O espaço vazio não absorve a onda. Mas a **área efetiva** de uma antena receptora isotrópica encolhe com o quadrado do comprimento de onda: `Ae = lambda^2 / (4 x pi)`. Com a densidade de potência `S` vinda da Aula 2, a potência captada é `S x Ae`. Portanto, com antenas de ganho fixo, a mesma distância custa mais potência em frequências mais altas. O resultado é a fórmula da **perda no espaço livre** (FSPL, free-space path loss):

`FSPL (dB) = 32,44 + 20 x log10(d em km) + 20 x log10(f em MHz)`

Exemplo resolvido para `d = 1 km`:

| Frequência | 20 x log10(f) | FSPL |
|---|---|---|
| 7 MHz | 16,9 | 49,3 dB |
| 100 MHz | 40,0 | 72,4 dB |
| 433 MHz | 52,7 | 85,2 dB |
| 915 MHz | 59,2 | 91,7 dB |
| 2.400 MHz | 67,6 | 100,0 dB |

De 433 MHz para 2,4 GHz, a perda sobe 14,9 dB, ou seja, cerca de 31 vezes mais potência perdida. É uma das razões de o LoRa usar faixas abaixo de 1 GHz: mais alcance por miliwatt (módulo 8). Em contrapartida, uma antena do mesmo **tamanho físico** ganha mais em frequência alta (é um número maior de comprimentos de onda), e parte dessa perda é compensada; o módulo 4 fecha esse raciocínio.

**Largura de banda.** **Largura de banda** (bandwidth) é a faixa de frequências que um sinal ocupa. Ela limita a quantidade de informação por segundo (quanto maior, mais bits, Aula 7 e módulo 3). Em frequências altas há mais espaço: um canal com 1% da frequência central é 1 MHz em 100 MHz, mas 24 MHz em 2,4 GHz. Daí o Wi-Fi ter canais de 20 MHz ou mais, e o FM ter canais de 200 kHz (a faixa comum de FM é da ordem de 88 a 108 MHz).

**O compromisso.** Em resumo:

| Frequência mais baixa | Frequência mais alta |
|---|---|
| Alcance maior, contorna e atravessa obstáculos | Alcance menor, bloqueada por obstáculos e chuva |
| Antenas grandes | Antenas pequenas |
| Pouca largura de banda absoluta | Muita largura de banda |
| Onda de superfície ou ionosfera (HF) | Linha de visada |

Não existe faixa "melhor": cada aplicação escolhe a posição no compromisso. LoRa e radioamadorismo de longo alcance vão para baixo; Wi-Fi 5 GHz e 5G de altíssima velocidade vão para cima.

## Faixas do dia a dia (para orientar)

Valores aproximados, para dar noção; a atribuição exata é regulada (Aula 9):

| Faixa | Exemplos |
|---|---|
| MF | rádio AM |
| HF | radioamadorismo (por exemplo 7 MHz), radiodifusão internacional |
| VHF | rádio FM, comunicação aeronáutica, radioamador de 144 MHz |
| UHF | TV digital, celular, 433 MHz e 915 MHz de dispositivos de baixa potência (ISM, com regras por região), GPS (cerca de 1,575 GHz) |
| SHF | Wi-Fi 5 GHz, radares, enlaces de micro-ondas e satélite |
| 2,45 GHz | forno de micro-ondas (água absorve bem nessa faixa) e Wi-Fi/Bluetooth em 2,4 GHz, o que explica interferência entre eles |

## Resumo

- O espectro EM é um contínuo: rádio, infravermelho, luz, UV, raios X e gama são a mesma onda, variando em frequência; as fronteiras são convenções.
- A energia do fóton é `E = h x f`. Fótons de rádio têm energia milhões de vezes menor que a necessária para alterar moléculas, por isso rádio é não ionizante (Aula 8).
- A ITU divide o rádio em bandas de uma década: ELF (3 Hz) até THF (3 THz); HF = 3 a 30 MHz, VHF = 30 a 300 MHz, UHF = 300 MHz a 3 GHz.
- O comportamento muda com a faixa: onda de superfície (abaixo de 3 MHz), reflexão ionosférica (HF), linha de visada (VHF em diante), absorção atmosférica (acima de 10 GHz).
- A perda no espaço livre cresce com `20 x log10(f)`; largura de banda absoluta cresce com a frequência; tamanho de antena cai com a frequência. Toda faixa é um compromisso.

## Para aprofundar

- [ ] [The Electromagnetic Spectrum (NASA Science)](https://science.nasa.gov/ems/) (NASA): série de vídeos e livro sobre cada região do espectro; a página, na versão consultada, descreve as regiões sem dar números de frequência.
- [ ] [NASA - Tour of the Electromagnetic Spectrum](https://www.youtube.com/watch?v=HPcAWNlVl-8) (SpaceScienceSarah): vídeo da série da NASA passando pelas regiões do espectro; o canal, confirmado por oEmbed, é SpaceScienceSarah, e o conteúdo não foi assistido.

[Próxima aula: Ruído e relação sinal-ruído](./07%20-%20Ruido%20e%20Relacao%20Sinal%20Ruido.md)
