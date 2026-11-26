[Voltar ao módulo](./README.md)

# Aula 6: Solo, contrapeso, altura e instalação segura

*Pergunta que esta aula responde: por que o ambiente ao redor (terra, prédios, altura) muda tanto o desempenho da antena, e como instalar sem se machucar nem colocar a casa em risco?*

## Aviso de segurança e limite legal

Esta aula explica os princípios. **Instalar mastro, torre ou antena em altura é atividade perigosa**: quedas, choque elétrico por contato com a rede de energia e descarga atmosférica são as causas mais graves de acidente. Estruturas altas ou sobre telhados podem exigir projeto e responsável técnico (engenheiro, com ART, a Anotação de Responsabilidade Técnica), aprovação de condomínio ou prefeitura, e há regras de prefeituras e da concessionária de energia que **variam por município e estado**. Este texto não substitui norma, projetista nem eletricista. Sobre exposição à radiofrequência (RF), há limites regulados pela Anatel para estações; a resolução que trata de limites de exposição a campos eletromagnéticos é a Resolução Anatel 700/2018, citada de memória e **não confirmada** nesta pesquisa (verifique a norma vigente antes de operar potência alta). Textos de referência para a norma de proteção contra descargas atmosféricas: ABNT NBR 5419 (não confirmei a edição vigente em setembro de 2026).

## O solo é parte da antena

### Por que

Uma antena não irradia no vazio: o solo (ou um plano condutor) fica dentro da região onde os campos existem, e a Terra reflete e absorve. Dois efeitos:

1. **Reflexão (imagem)**: o solo condutor funciona como espelho, criando uma "antena imagem" abaixo. A onda direta e a refletida se somam ou se cancelam conforme o ângulo, alterando o diagrama de radiação em elevação. É o motivo de um monopolo de `lambda/4` sobre plano condutor funcionar (aula 1).
2. **Perda**: terra real é condutor imperfeito. Corrente que passa por ela dissipa calor. Antena perto do chão com muito campo penetrando no solo perde energia.

### Efeito no diagrama e na altura (horizontal)

Um dipolo horizontal a `h` de altura:

- **Baixo (menos de `lambda/4`)**: a irradiação sobe quase vertical (bom para comunicação regional em HF, *NVIS*, sobe e volta em algumas centenas de km) e o rendimento cai bastante, porque o solo tem perdas.
- **Mais alto (de `lambda/2` para cima)**: o lóbulo principal desce em direção ao horizonte, o que serve para longa distância.

Em **HF** o "alto" é relativo: 10 m já é meia onda em 14 MHz e um quarto em 7 MHz. Em **VHF/UHF e acima**, `lambda` é curto e as antenas ficam com muitos `lambda` de altura. A propagação passa a ser em linha de visada, e o que manda é liberar a linha até o outro ponto.

### Altura em VHF/UHF/LoRa

O horizonte de rádio (Módulo 2) é maior que o óptico porque a atmosfera curva o raio. Uma aproximação padrão para uma antena de altura `h` em metros e o horizonte em quilômetros: `d = 4,12 x raiz(h)` (raio efetivo da Terra de 4/3; valor de referência comum, verifique na aula de propagação do Módulo 2). Entre duas antenas: `d = 4,12 x (raiz(h1) + raiz(h2))`. Exemplo: 10 m e 10 m: `4,12 x (3,16 + 3,16) = 26 km`; 3 m e 3 m: `4,12 x (1,73 + 1,73) = 14 km`. Isso é o máximo em terreno liso e sem obstáculos; morro, prédio e árvore reduzem.

Consequência: em VHF/UHF/LoRa, **altura vale mais que ganho**. Subir a antena de 3 m para 10 m aumenta muito o alcance de linha de visada; trocar por outra de 3 dB a mais aumenta bem pouco. E cada metro de cabo grosso adicional (aula 3) custa menos que o ganho de altura. Mas em terreno acidentado, ponha a antena onde ela enxerga o destino (topo do telhado, cume), não simplesmente mais alta.

## Contrapeso e plano de terra

### Por que

O monopolo de `lambda/4` é "metade" de um dipolo; a outra metade é o **plano de terra**: superfície condutora onde a corrente da antena retorna e cria a "imagem". Sem plano de terra, o monopolo não tem metade e faz o cabo virar a metade que falta (aula 3: corrente de modo comum). O **contrapeso** (*counterpoise*) é qualquer estrutura condutora que faz esse papel quando o solo real não serve.

### Como fazer

- **Plano de terra sólido**: chapa de metal, capô/teto do carro (antena de veículo magnética), laje com ferro, disco de metal. Quanto maior em relação a `lambda`, melhor; a base mínima é de cerca de `lambda/4` de raio.
- **Radiais**: fios de comprimento `lambda/4` saindo da base da antena como raios de roda. Ao nível do solo (enterrados ou apoiados), **muitos radiais** (dezenas em HF) reduzem as perdas do solo. **Elevados** (a dois ou três metros ou mais, no ar), bastam de dois a quatro radiais sintonizados. Radiais inclinados para baixo (45 graus) elevam a impedância de 36 para perto de 50 ohms (aula 5).
- **Dispositivos portáteis** (rádio de mão, módulos): o corpo do aparelho, o cabo, o operador e o que estiver na bancada viram o contrapeso. É por isso que uma antena de borracha muda de desempenho conforme como é segurada.
- **Antena comercial pronta**: siga o manual do fabricante. Algumas (dipolos e colineares) já trazem o "plano de terra" embutido na geometria; outras exigem plano de terra externo e não funcionam bem presas direto num tubo de plástico.

## Obstáculos e vizinhança

- **Metal próximo** (calha, telhado metálico, mastro paralelo, fachada de vidro com película metalizada): reflete, sombreia, distorce o diagrama e desloca a ressonância. Afaste a antena pelo menos alguns `lambda/4` de grandes superfícies metálicas e afaste os dipolos de paredes e fios de energia.
- **Ruído elétrico** local (fontes chaveadas, LED, inversores, iluminação): em HF, o ruído entra pelo receptor mais que qualquer perda no cabo. Antena afastada da casa reduz.
- **Árvores e chuva**: em UHF e acima, a folhagem molhada atenua (Módulo 2). Antena atrás de folhas ou vidro com metal perde vários dB.

## Instalação segura

### Rede elétrica: a regra número 1

Antena, mastro e cabo de sustentação são **condutores**. Se qualquer parte tocar (ou chegar perto) de um fio da rede de energia (alta ou baixa tensão), a corrente passa por você e pela estrutura. Isso mata, e acontece frequentemente com mastros de TV e antenas de radioamador. Regras de conduta:

- **Nunca** instale, levante ou derrube antena/mastro onde, caindo, ele possa atingir a rede. Trate a distância como no mínimo o comprimento total da estrutura mais uma margem (regra prática comum, sem valor normativo aqui; a concessionária de energia local define distâncias oficiais, que dependem da tensão da rede).
- Não use mastro de metal molhado ou escada de metal perto de fios.
- Se um mastro tocar a rede, **não toque, não tente afastar**; afaste todos e chame a concessionária.
- Instale com pelo menos **duas pessoas**, com clima seco e sem vento forte, sem trovoada por perto.
- Em altura (telhado, torre): equipamento de proteção (cinto tipo paraquedista com trava-quedas, capacete). Torres e estruturas altas: contratar profissional.

### Aterramento e descargas atmosféricas

Um raio próximo (ou direto) injeta correntes e tensões enormes em qualquer condutor externo. Antena instalada sem cuidado pode levar isso pelo cabo até o equipamento e a casa. Antena **não atrai raio de forma especial** por existir, mas sem caminho controlado a descarga escolhe o pior. O que se faz:

- **Mastro aterrado** com condutor grosso e curto até um eletrodo de aterramento (haste ou malha) bem dimensionado; o eletrodo deve ser **interligado ao aterramento da instalação elétrica** (equipotencialização), senão cria-se diferença de tensão perigosa entre sistemas. Detalhes de projeto (dimensões, ligação ao SPDA, se existir) seguem a NBR 5419 e o projeto do prédio.
- **Protetor de linha coaxial (para-raios de coaxial, com centelhador ou gás)** na entrada do prédio, aterrado no mesmo ponto. Escolha um protetor projetado para a **frequência** e o **conector** do sistema; um mal escolhido causa perda e descasamento.
- **Desconecte o cabo da antena do equipamento** e afaste-o quando há tempestade. Nenhum protetor garante proteção contra impacto direto.
- **Um SPDA (sistema de proteção contra descargas atmosféricas) da edificação** é projetado sob a NBR 5419; adaptá-lo com antena exige o projetista.
- **Antena não é para-raios**: mastro aterrado ajuda a escoar; não pare sob ele.

### Exposição à RF

Radiofrequência de potência alta aquece tecidos (é o mesmo efeito de um forno de micro-ondas, em escala e frequência diferentes). Para módulos de 10 a 100 mW e rádios portáteis de poucos watts, o risco é muito baixo a distâncias normais de uso; para estações de dezenas a centenas de watts o cuidado se soma. Regras de bom senso: não fique perto da antena (mesmo a ponta de um dipolo) enquanto o transmissor está ligado, não coloque a antena de VHF/UHF de potência alta a centímetros da cabeça em transmissão longa, e ponha antenas fixas afastadas de áreas de convivência. O Módulo 5 trata da regulamentação e de limites para radioamadores. Para referência internacional, a ARRL informa que nos EUA todos os transmissores de radioamador devem cumprir as regras de exposição à RF da FCC, sem isenção por baixa potência desde 3 de maio de 2023 ([ARRL, RF exposure](https://www.arrl.org/rf-exposure)); é regra dos EUA, e a brasileira é da Anatel.

## Resumo

- O solo faz parte da antena: espelha (cria a imagem que permite o monopolo) e absorve (perdas). Altura muda o ângulo de saída em HF.
- Em VHF/UHF/LoRa, o que manda é a linha de visada: `d = 4,12 x raiz(h)` km por antena. Altura vence ganho.
- Monopolo precisa de plano de terra ou contrapeso: chapa, radiais (mais radiais quando sobre o solo; poucos, elevados e sintonizados no ar). Sem isso o cabo vira contrapeso.
- Metal próximo distorce o diagrama, ruído elétrico entra no receptor e folhagem molhada atenua: escolha bem o local.
- Segurança: nunca perto de rede elétrica (distância mínima maior que o comprimento da estrutura), sempre em dupla, seco, sem trovoada, com equipamento de proteção; estruturas altas exigem profissional.
- Aterre o mastro, interligue aos aterramentos da instalação e ponha protetor de coaxial na entrada; desconecte na tempestade.

## Para aprofundar

- [ ] [RF exposure](https://www.arrl.org/rf-exposure) (ARRL): guia (norte-americano) de avaliação de exposição à RF em estações de radioamador; para o Brasil, verifique a norma da Anatel.

[Próxima aula: Medição, dummy load e erros comuns](./07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md)
