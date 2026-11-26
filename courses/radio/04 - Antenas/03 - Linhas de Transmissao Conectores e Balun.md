[Voltar ao módulo](./README.md)

# Aula 3: Linhas de transmissão, conectores e balun

*Pergunta que esta aula responde: como a energia chega até a antena sem vazar nem se perder no caminho, e por que cabo, conector e balun decidem o desempenho tanto quanto a antena?*

## O problema: o cabo também é parte do sistema

Ligar transmissor e antena com "qualquer fio" falha por três motivos: o fio irradiaria e captaria ruído pelo caminho (aula 1: campos que não se cancelam); a impedância dele não seria controlada (aula 2: reflexões); e perderia energia em forma de calor. Uma **linha de transmissão** é um cabo com geometria fixa que resolve as três: conduz a onda de forma guiada, com impedância característica `Z0` constante e perda conhecida por metro. O cabo entre o transmissor e a antena, e sua qualidade, costuma decidir mais do alcance do que os 2 ou 3 dBi extras que se paga por uma antena melhor.

## Dois tipos de linha

### Cabo coaxial (linha desbalanceada)

Um condutor central envolto por isolante (dielétrico), envolvido por uma malha condutora (a blindagem), coberta por uma capa. O campo eletromagnético fica **entre** o centro e a malha, contido dentro do cabo. O que acontece do lado de fora do cabo não o afeta e ele quase não irradia. Vantagens: fácil de instalar (pode passar junto de metal, ser enterrado, encostar em parede), blindado contra ruído. É o padrão de 50 ohms. Desvantagens: mais perda que a linha paralela.

Chama-se **desbalanceado** porque os dois condutores têm papéis diferentes: o central leva o sinal, a malha é geralmente aterrada (referência). Isso importa na seção do balun.

### Linha paralela (linha balanceada, "ladder line")

Dois fios paralelos separados por espaçadores ou plástico (300, 450 ou 600 ohms). Os campos de cada fio se cancelam (correntes opostas), então irradia pouco *se* estiver equilibrada. Tem **perda muito baixa**, principalmente em alto SWR, e por isso é usada em HF com antenas multibanda e sintonizador. Desvantagens: precisa ser mantida longe de metal e do chão (o campo fica exposto ao redor), não é comum em VHF/UHF, e precisa de balun ou tuner balanceado para conectar a um rádio de saída coaxial.

## Perda no cabo: atenuação por metro e por frequência

A energia dissipa por dois efeitos que crescem com a frequência: a resistência do metal (efeito pelicular: a corrente de alta frequência anda só na superfície do condutor, aumentando a resistência efetiva) e as perdas no isolante. Por isso a atenuação de cabo aumenta com a frequência, aproximadamente com a raiz quadrada dela nas frequências mais baixas e mais rápido nas altas.

Valores publicados (dB por 100 pés, 1 pé = 0,3048 m; 100 pés = 30,5 m) que consegui confirmar:

| Cabo | Dielétrico | `VF` | Atenuação publicada |
|---|---|---|---|
| RG-58 | polietileno sólido | 0,66 | 3,3 dB a 50 MHz; 13,1 dB a 750 MHz; 21,5 dB a 1 GHz |
| RG-213 | polietileno sólido | 0,66 | 5,98 dB a 750 MHz |
| RG-8 | polietileno sólido | não confirmado | 5,97 dB a 750 MHz |
| LMR-400 | polietileno espumado | 0,85 | 3,5 dB a 750 MHz |

Fontes: [Wikipedia, RG-58](https://en.wikipedia.org/wiki/RG-58) e [Wikipedia, Coaxial cable](https://en.wikipedia.org/wiki/Coaxial_cable). Os valores variam entre fabricantes e versões (RG-58 de baixa qualidade pode ser pior); antes de comprar, leia a folha de dados do fabricante para a sua frequência. Não consegui abrir a folha de dados da LMR-400 (Times Microwave) nesta pesquisa, por isso não listo LMR-400 em outras frequências.

O que se lê disso:

- **Cabo fino (RG-58) é ruim em UHF e acima.** A 1 GHz perde 21,5 dB por 100 pés, cerca de 0,7 dB por metro. Estimativa de ordem de grandeza (não confirmada): a 2,4 GHz a perda por metro é da ordem de 1 dB, então 10 m de RG-58 em 2,4 GHz perderiam cerca de 10 dB, ou seja, 90% da potência. Com 1 W na saída, 0,1 W chegam à antena.
- **Cabo grosso e de dielétrico espumado (RG-213, LMR-400) perde muito menos**, em troca de ser mais duro, mais caro e mais pesado. LMR-400 a 750 MHz (3,5 dB por 100 pés) perde pouco mais de um quarto do que o RG-58 perde na mesma frequência (13,1 dB).
- **Perda vale nos dois sentidos**: também enfraquece o sinal que a antena recebe antes de chegar ao receptor. E se a perda no cabo é de X dB, você não recupera trocando de antena por outra de ganho menor que X.

Regra prática: em HF e VHF baixo o cabo importa pouco em trechos curtos (RG-58 em 7 MHz: bem menos de 1 dB em 10 m). A partir de 400 MHz, **cada metro conta**. Módulo LoRa em 915 MHz: prefira a antena diretamente no módulo ou o cabo mais curto e grosso possível. Para estimar em sua situação: `perda total (dB) = perda por metro (folha de dados) x comprimento (m) + perda dos conectores`.

## Conectores

Um conector precisa manter os 50 ohms (senão cria um mini descasamento em cada junção), ser mecanicamente robusto e casar com o cabo. Os principais:

| Conector | Impedância | Faixa útil típica | Onde aparece | Notas |
|---|---|---|---|---|
| **SMA** | 50 ohms | até vários GHz (versões de precisão chegam a 18 GHz) | módulos LoRa, Wi-Fi, SDR, rádios portáteis | Rosca pequena, ótimo para GHz. Não é estanque sem vedação. Torque de mão: apertar demais danifica. |
| **RP-SMA** | 50 ohms | igual ao SMA | roteadores Wi-Fi | "Reverse polarity": o pino e o furo do SMA estão trocados. Parece igual mas **não encaixa** no SMA comum (mesma rosca, contato oposto). Confira antes de comprar antena. |
| **N** | 50 ohms | até 11 GHz ou mais | antenas externas, cabos de descida, repetidoras | Rosca robusta, com vedação de borracha (resistente à chuva). Padrão para instalação externa em UHF e acima. |
| **UHF (PL-259 e SO-239)** | não mantém 50 ohms de forma constante | HF e VHF (aceitável até algumas centenas de MHz; degrada bem acima) | rádios HF, antenas verticais e dipolos | Simples e barato. Não mantém a impedância constante, então perde desempenho em UHF e acima. "UHF" no nome não quer dizer que serve para UHF. |
| **BNC** | 50 ou 75 ohms (versões diferentes) | até alguns GHz (uso típico até UHF) | rádios portáteis, instrumentos, NanoVNA | Trava rápida por baioneta (quarto de volta). Boa para trocar antena com frequência. |

(Faixas úteis são valores típicos de manual e variam por fabricante e qualidade do conector; confira a folha de dados de cada peça.)

### Cuidado com adaptadores

Cada adaptador (por exemplo, SMA para N, BNC para SMA) é uma peça a mais: adiciona perda (mesmo que pequena), um possível descasamento e um ponto de falha mecânica e de entrada de água. Regras:

- Minimize o número de adaptadores em série. Prefira um cabo já feito com as duas pontas certas.
- Adaptador barato pode ter impedância ruim; em UHF e acima isso é visível na medição.
- Não use adaptador UHF para SMA para "fazer funcionar" numa antena de GHz: você conecta, mas não terá 50 ohms limpos.
- Externo: proteja com fita autofusão e fita de PVC por cima, ou capa termorretrátil com cola. Entrada de água em conector é uma das causas mais comuns de degradação lenta de um enlace.

### Pigtails

**Pigtail** é um cabo curto e flexível com um conector de cada lado, tipicamente de um conector minúsculo de placa (U.FL, também escrito IPEX) para um SMA/N na caixa. É usado porque módulos e placas (ESP32, Raspberry Pi, módulos LoRa) têm o pequeno conector miniatura na placa, mas a antena tem SMA.

- **O conector miniatura U.FL é frágil e tem número de ciclos de conexão pequeno** (o fabricante indica na ordem de dezenas; confira o datasheet do conector). Conecte uma vez e não desconecte no dia a dia; não tracione o cabo.
- O cabo é fino (cerca de 1 mm), e portanto tem **perda alta por metro**, especialmente em 915 MHz e 2,4 GHz. Use o mais curto que resolve (5 a 20 cm é o comum), não emende pigtail com extensão longa.
- Se for preciso alcançar longe, converta para cabo grosso (LMR-400 ou similar) logo depois do pigtail curto, no primeiro conector SMA/N.
- Não ligue o módulo sem antena ou carga conectada (aula 2: SWR infinito danifica a saída).

## Balun e choke

### Por que existe: o cabo coaxial é desbalanceado, o dipolo é balanceado

Um dipolo tem dois braços simétricos: a corrente sai por um e entra pelo outro em igualdade, é uma antena **balanceada**. Um coaxial é **desbalanceado**. Ao conectar o centro a um braço e a malha ao outro, existe um terceiro caminho que a física oferece à corrente: a **face externa da malha**. A malha tem duas superfícies: por dentro, a corrente do sinal normal; por fora, ela funciona como um fio comum. Parte da corrente do braço ligado à malha pode ir para baixo pela parte externa da malha em vez de ir para o braço da antena. Essa **corrente de modo comum** faz três estragos:

1. O cabo passa a **irradiar**: vira parte da antena, distorce o diagrama de radiação e muda a polarização e o ganho em relação ao projeto.
2. O SWR medido muda de acordo com como o cabo está posicionado (encostar a mão ou mover o cabo muda a leitura), sinal clássico de corrente na malha.
3. RF volta para dentro de casa: interferência em equipamentos, "zumbido" em áudio, choque na caixa do rádio, ruído captado no receptor pelo cabo.

### O que é um balun

**Balun** (*balanced to unbalanced*) é o dispositivo que conecta uma linha desbalanceada a uma carga balanceada forçando a corrente a ser igual nos dois lados. O tipo mais comum para dipolos é o **balun de corrente 1:1**: um choke que coloca uma alta impedância só no caminho da corrente de modo comum, deixando o sinal normal passar. Os tipos usuais de construção são: contas de ferrite enfiadas no cabo, um toroide com cabo enrolado, ou algumas voltas do próprio cabo formando uma bobina (funciona bem em frequências mais altas, onde as espiras são pequenas).

### Choke (supressor de corrente de modo comum)

O **choke** é a mesma função aplicada em qualquer ponto do cabo: um bloqueio para a corrente que sobe pela face externa da malha. Ferrite tipo 31, 43 e 52 são materiais comuns, cada um mais eficaz em uma faixa de frequência (confira a faixa da mistura no datasheet). Onde colocar: no ponto de alimentação de qualquer antena que tenha simetria (dipolo) e na entrada do cabo no rádio. Antenas verticais e de fio alimentado na ponta também se beneficiam, porque o cabo é o "contrapeso" implícito (Aula 6).

### Balun com relação (unun) para antenas de alta impedância

Antenas de fio de meia onda alimentadas na ponta (EFHW, Aula 5) têm impedância de alguns milhares de ohms na ponta, porque ali a tensão é máxima e a corrente mínima. Um transformador com relação de impedância de 49:1 (relação de espiras 7:1) reduz isso a valores próximos de 50 ohms. Como o lado de 50 ohms é desbalanceado e o do fio também, o dispositivo é chamado de **unun** (*unbalanced to unbalanced*). O valor 49:1 é o mais comum nas EFHW comerciais; a impedância real varia com o ambiente, portanto o casamento não é perfeito.

## Resumo

- Linha de transmissão = cabo com impedância controlada e perda conhecida; coaxial (fácil de instalar, blindado, perda maior) ou paralela (perda muito baixa, balanceada, exige cuidado e sintonizador).
- Atenuação cresce com a frequência: RG-58 perde 3,3 dB por 100 pés a 50 MHz e 21,5 dB a 1 GHz; LMR-400 (espumado, 0,85 de fator de velocidade) perde uma fração disso. Acima de 400 MHz cada metro de cabo fino pesa.
- Conectores: SMA e RP-SMA (compactos, GHz), N (externo, estanque), UHF (HF/VHF), BNC (rápido). RP-SMA não encaixa em SMA.
- Cada adaptador é uma peça a mais de perda e de falha. Pigtails devem ser curtos, e o U.FL suporta poucas reconexões.
- Balun/choke impedem que a corrente suba pela face externa da malha, o que evita cabo irradiando, leituras de SWR instáveis e RF em casa.
- Unun 49:1 casa antenas de fio alimentadas na ponta a 50 ohms.

## Para aprofundar

- [ ] [Coaxial cable](https://en.wikipedia.org/wiki/Coaxial_cable) (Wikipedia): tabela de cabos RG e LMR com atenuação e fator de velocidade.
- [ ] [RG-58](https://en.wikipedia.org/wiki/RG-58) (Wikipedia): atenuação por frequência do cabo de entrada mais comum.

[Próxima aula: Diagrama de radiação, ganho e polarização](./04%20-%20Diagrama%20de%20Radiacao%20Ganho%20e%20Polarizacao.md)
