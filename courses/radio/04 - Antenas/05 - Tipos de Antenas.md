[Voltar ao módulo](./README.md)

# Aula 5: Tipos de antenas e para que cada uma serve

*Pergunta que esta aula responde: dada a física das aulas anteriores, por que cada tipo de antena tem aquele formato e quando usar cada uma?*

Toda antena é uma variação de três decisões: **tamanho** em relação a `lambda` (aula 1), **geometria** que define o diagrama e o ganho (aula 4) e **forma de alimentação** que define a impedância (aula 2). Aqui, os principais formatos, cada um pela razão de existir.

## Dipolo de meia onda

Dois braços retos de `lambda/4` cada, alimentados no centro. Impedância de cerca de 73 ohms (SWR 1,46 em cabo de 50 ohms), ganho de 2,15 dBi, polarização paralela ao fio, diagrama de rosca com nulos nas pontas. É a antena de referência, barata, sem plano de terra, feita com fio. Alimentado com coaxial exige balun/choke (aula 3).

- **Monobanda**: comprimento certo para uma frequência (`143 / f` metros). Melhor eficiência e casamento onde foi cortado.
- **Multibanda**: um dipolo de meia onda também é ressonante, com impedância diferente, em múltiplos ímpares da frequência (3x, 5x). Para bandas que não são múltiplos, se usam soluções como o **dipolo em leque** (*fan dipole*, vários dipolos de comprimentos diferentes no mesmo ponto de alimentação), o **dipolo com traps** (circuitos LC que "isolam" trechos do fio conforme a banda) e o **dipolo de fio alimentado por linha paralela com tuner**. Cada solução troca simplicidade por desempenho ou por potência suportada; nenhuma é de graça.
- **V invertido (inverted V)**: dipolo com o centro no alto de um mastro e as pontas inclinadas para baixo. Só precisa de um suporte e baixa a impedância para perto de 50 ohms.

## Monopolo e plano de terra (ground plane)

Um único braço vertical de `lambda/4` sobre um plano condutor (aula 1: o plano é um espelho). Ganho ideal cerca de 5 dBi sobre plano perfeito (metade do espaço, mais concentrado), na prática menos por causa das perdas do solo. Omnidirecional na horizontal, polarização vertical. Impedância de cerca de 36 ohms com o plano horizontal; **radiais inclinados para baixo** (cerca de 45 graus) elevam para perto de 50 ohms. O **plano de terra** pode ser a lataria do carro, um disco de metal, uma malha, ou 3 a 4 fios radiais de `lambda/4` (que fazem o papel de superfície). Aula 6 explica por que o plano de terra decide o desempenho.

Onde aparece: rádios de carro, verticais de VHF/UHF fixas, e a versão de fio dos módulos LoRa. **Se o dispositivo não tem plano de terra (antena solta numa placa pequena), o resto do circuito e o cabo viram o contrapeso**, com resultado imprevisível.

## Vertical de HF

Monopolos de `lambda/4` em HF são grandes (10 m em 7 MHz), então se usa o encurtamento com bobina ou capacitor ("carga"), o que reduz a eficiência (aula 1). Precisam de um bom sistema de terra ou radiais (aula 6). Vantagem: ângulo de saída baixo, bom para contatos a longa distância; desvantagem: capta mais ruído local.

## Yagi-Uda

Um elemento **excitado** (dipolo alimentado) mais elementos **parasitas** que não têm cabo: um **refletor** atrás (ligeiramente mais longo que o dipolo) e **diretores** na frente (ligeiramente mais curtos). Os parasitas recebem energia do campo do elemento excitado e reirradiam com defasagem tal (por causa de seus comprimentos e espaçamentos) que os campos somam à frente e se cancelam atrás. É "mudar o diagrama com espelhos": nenhuma potência extra, só direção. Cada diretor extra estreita o feixe e sobe o ganho. Antenas de TV de telhado são Yagis. Valores típicos de projeto: 3 elementos em torno de 7 dBi, 5 elementos perto de 10 dBi, e relação frente-costas de 15 a 20 dB ou mais (varia bastante com o projeto; confira o datasheet). Impedância baixa, tipicamente casada por *gamma match*, dipolo dobrado ou balun. A polarização é a do plano em que os elementos estão (deitados = horizontal, em pé = vertical), portanto **a polarização precisa casar com a do outro lado**.

Uso: enlaces ponto a ponto, repetidoras, satélite (Yagi pequeno em UHF/VHF), rádio-direção. Exige apontamento e mastro mais forte que um monopolo.

## Colineares e omnis de "5 dBi"

Empilhar meios-comprimentos verticais em fase é a antena **colinear** (*collinear*): as correntes de cada trecho são mantidas em fase por uma bobina de defasagem ou por seções de cabo entre elementos. Resultado: feixe vertical mais estreito, mesmo azimute, ganho maior (aula 4: ganho trocado por cobertura vertical). Omnis de LoRa de "5 a 8 dBi" são colineares embutidas em tubo de fibra. Dependem de montagem vertical, sem obstáculo ao redor (é comum ter baixa eficiência e ganho real menor que o anunciado; medir com analisador ajuda a saber o que se comprou).

## Antenas de borracha e por que são fracas

A "antena de borracha" (*rubber duck*) dos rádios portáteis e módulos é um fio enrolado em espiral dentro de um plástico flexível, muito menor que `lambda/4` (em 146 MHz, `lambda/4` são 49 cm e a antena tem 10 a 20 cm). Pela aula 1, ficam **eletricamente curtas**: a resistência de radiação é pequena, a eficiência cai, a banda fica estreita. Além disso, **não têm plano de terra próprio**: o corpo do rádio (e a mão do usuário) fazem o contrapeso, com resultado variável. Estimativas comuns colocam essas antenas várias dB abaixo de um chicote de `lambda/4` de tamanho cheio (da ordem de 3 a 10 dB, dependendo do modelo e do uso; ordem de grandeza sem fonte primária nesta pesquisa). Trocar a borracha por um chicote de `lambda/4` ou por uma antena externa de ganho em cabo curto costuma ser a melhoria mais barata que existe num portátil. E tenha em mente que o ganho anunciado ("2,15 dBi") de antenas de borracha baratas é frequentemente otimista; se a medição é importante, meça (aula 7).

## Patch (microstrip)

Um retângulo de metal sobre placa de circuito com plano de terra embaixo, de lado cerca de `lambda/2` no meio dielétrico. Usada em GPS, Wi-Fi, celular, radares: é plana, barata e integra na placa. Ganho típico de 6 a 9 dBi, feixe direcional (de dezenas de graus), banda estreita, polarização linear (ou circular com desenho especial). Ponto de atenção: o desempenho depende do material da placa e do tamanho do plano de terra; a frequência de ressonância muda com o dielétrico e com o que estiver encostado.

## Helicoidal

Um fio enrolado como mola, com circunferência de cerca de 1 `lambda`, no **modo axial**: irradia pelo eixo e produz **polarização circular**. Ganho aumenta com o número de voltas, cerca de 10 a 15 dBi em projetos comuns (típicos; varia). Onde aparece: satélites e enlaces em que a polarização gira, porque circular compensa a rotação (aula 4). Existe também a helicoidal de modo normal, que é só uma "mola" curta encurtada (é a antena de borracha da seção acima).

## Loop (espira)

Um fio dobrado em círculo ou quadrado. Duas famílias com propósitos diferentes:

- **Loop grande (de onda completa)**: perímetro de cerca de 1 `lambda`. Ganho um pouco maior que um dipolo, impedância na casa de 100 ohms (ou 120), banda razoável.
- **Loop pequeno (magnético)**: perímetro muito menor que `lambda` (por exemplo, `< lambda/10`). Responde principalmente ao **campo magnético** da onda, muito menos ao elétrico, o que **rejeita ruído elétrico local** (por isso se usa para recepção em ambientes urbanos ruidosos de HF). Resistência de radiação muito baixa, largura de banda muito estreita (precisa ser ressintonizada a cada mudança de frequência com capacitor variável), tensões enormes no capacitor. Compacta, mas ineficiente e trabalhosa.

## Fio longo e EFHW

- **Fio longo / fio aleatório (random wire)**: um fio comprido, de comprimento sem relação especial com a frequência, alimentado na ponta e casado por um tuner. Simples, mas com contrapeso mal definido (o cabo e a casa viram contrapeso), então há risco de RF em casa e desempenho imprevisível.
- **EFHW** (*End-Fed Half-Wave*, fio de meia onda alimentado na ponta): fio de `lambda/2` alimentado na extremidade, onde a impedância é alta (alguns milhares de ohms). Um **unun de 49:1** (aula 3) faz o casamento. Um fio de 20 m e um unun cobrem 40 m (7 MHz), e como um fio alimentado na ponta continua com impedância alta em todos os **múltiplos inteiros** da frequência (14, 21 e 28 MHz), o mesmo fio e o mesmo unun servem para várias bandas com ajuste pequeno ou nenhum (o casamento em cada banda varia com o ambiente). Vantagem: um só ponto alto de suporte e um fio simples, bom para portátil. Desvantagem: o cabo do rádio costuma funcionar como contrapeso, então **choke no cabo é obrigatório** (aula 3).

## Como escolher

| Necessidade | Antena típica |
|---|---|
| Testar/experimentar em HF com fio e mastro só | dipolo, V invertido, EFHW |
| Comunicação local em VHF/UHF/LoRa, todas as direções | vertical de `lambda/4` ou colinear |
| Ponto a ponto, distância, ou reduzir interferência | Yagi ou painel/patch |
| Satélite | Yagi (com apontamento) ou helicoidal |
| Ambiente de ruído em HF, espaço mínimo | loop magnético |
| Dispositivo compacto, integrado | patch, chip, meandro |

## Resumo

- Dipolo: 73 ohms, 2,15 dBi, base de referência. Monopolo `lambda/4` + plano de terra: 36 ohms (50 com radiais inclinados), até 5 dBi ideal.
- Yagi: elementos parasitas moldam o feixe (mais diretores = mais ganho, feixe mais estreito); é preciso apontar e casar polarização.
- Colinear/omni de alto ganho = donut achatado: mais alcance no horizonte, pior para alvos acima ou abaixo.
- Antena de borracha é eletricamente curta e sem plano de terra: eficiência baixa por física, não por defeito.
- Patch: plano, direcional, banda estreita. Helicoidal: circular, para satélite. Loop pequeno: rejeita ruído elétrico, mas é estreito e ineficiente. EFHW: unun 49:1, choke obrigatório.

## Para aprofundar

- [ ] [Multiband Antennas: Everything That Actually Works](https://www.youtube.com/watch?v=-eFSyDtPFHU) (DXCommander): comparação prática de soluções multibanda (título e canal confirmados; conteúdo não assistido).

[Próxima aula: Solo, altura e instalação segura](./06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md)
