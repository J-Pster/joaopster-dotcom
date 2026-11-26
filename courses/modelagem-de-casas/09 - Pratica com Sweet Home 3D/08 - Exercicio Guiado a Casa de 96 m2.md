[Voltar ao módulo](./README.md)

# Aula 8: Exercício guiado, a casa de 96 m²

*Pergunta que esta aula responde: como aplico, na ordem certa e com os números do projeto, tudo o que vi nas aulas 1 a 7 para modelar a casa de exemplo do módulo 3 e provar, por conferência numérica, que o modelo bate com o projeto?*

Este é o exercício da "receita" do módulo 3 (aula 9): o modelo é aprovado quando os números que ele mostra coincidem com o projeto. A casa é a **casa térrea de 96 m², terreno de 10 x 25 m, rua ao sul** da aula 8 do módulo 3. Tenha aquela aula aberta: as tabelas de ambientes e esquadrias são a fonte dos números.

**Sobre os rótulos de menu:** os passos usam os nomes do guia oficial em português (Arquivo, Planta, Mobiliário, Visualização 3D). Onde a documentação oficial não confirma um detalhe (por exemplo, o sentido do ângulo digitado com Enter), o passo diz "confira" e dá um teste.

## Decisões de modelagem (e o que foi simplificado)

| Item do projeto | Como fica no modelo | Motivo |
|---|---|---|
| Convenção de medida | **Eixo a eixo** (as áreas do módulo 3 são nominais, de eixo a eixo) | Módulo 3, aula 8 |
| Espessura das paredes | Externas 0,20 m; internas 0,10 m | Valores usuais da aula 5 do módulo 3; são escolha do exercício, o projeto do módulo 3 não fixa |
| Altura | Paredes internas 2,70 m; externas e pilares 2,90 m | Forro a 2,70 m; topo de parede a 2,90 m (apoio do telhado) |
| Desníveis (varanda -0,05 m, banheiro -0,02 m, terreno -0,30 m) | **Ignorados** | 5 cm e 2 cm não valem a complexidade; o terreno do programa é plano (aula 4) |
| Telhado | Duas águas, 30%, beiral de 0,60 m leste e oeste, feito com empenas e dois planos (aula 4) | O programa não tem ferramenta de telhado |
| Empena sul, sobre a varanda | **Não modelada** | Exigiria viga sobre os pilares; exercício extra |

Convenção de direções: **norte para o topo do plano, leste para a direita, a frente (varanda) embaixo, ao sul**. Todas as posições abaixo são medidas a partir do canto sudoeste da casa (x para leste, y para o norte). O eixo Y do programa pode apontar para baixo na tela e o ponto (0, 0) pode estar em outro lugar: o que importa é a relação entre as paredes, então trabalhe com comprimentos e direções, não com as coordenadas absolutas do programa.

## Passo 0: preparar o arquivo

1. Novo arquivo. Salve como `casa96_v01.sh3d`.
2. **Arquivo > Preferências…**: unidade (metro ou centímetro, a que você escolheu na aula 1), **altura padrão das paredes novas 2,70 m** e espessura padrão 0,10 m (a das internas; as externas você altera depois).
3. Atenção ao ponto de partida: a casa fechada (sala, cozinha, corredor e quartos) mede 8,00 x 10,00 m, de y = 2,00 m a y = 12,00 m. A varanda de 8,00 x 2,00 m fica a sul, de y = 0 a y = 2,00 m, sem paredes.

## Passo 1: o contorno fechado (paredes externas)

Modo **Criar paredes**. Comece no canto sudoeste da casa fechada, ponto (0, 2), e desenhe com **Enter**, digitando comprimento e ângulo (aula 2). Lembre de testar antes a convenção de ângulo do seu programa.

| Parede | Direção | Comprimento (m) | Chega em |
|---|---|---|---|
| Frontal (sala e cozinha) | Leste | 8,00 | (8, 2) |
| Leste | Norte | 10,00 | (8, 12) |
| Norte | Oeste | 8,00 | (0, 12) |
| Oeste | Sul | 10,00 | (0, 2) |

O último segmento deve fechar no ponto inicial. **Conferência:** perímetro = 8 + 10 + 8 + 10 = 36,00 m.

Depois, selecione as quatro (Shift+clique), **Planta > Modificar paredes…**: espessura 0,20 m e altura 2,90 m.

**Pilares da varanda (opcional, mas dão apoio ao telhado):** duas paredes curtas de 0,20 m de comprimento, espessura 0,20 m e altura 2,90 m, centradas em (0, 0) e (8, 0). Se for difícil desenhar trechos tão curtos, use ampliação máxima na planta e edite as coordenadas no diálogo.

## Passo 2: paredes internas

Cada divisória sai do eixo de uma parede e vai até o eixo de outra. Espessura 0,10 m, altura 2,70 m (o padrão que você configurou).

| Parede | De | Até | Comprimento (m) |
|---|---|---|---|
| Sul do corredor | (0, 7) | (8, 7) | 8,00 |
| Norte do corredor | (0, 8) | (8, 8) | 8,00 |
| Sala/cozinha | (5, 2) | (5, 7) | 5,00 |
| Quarto 1/banheiro | (3, 8) | (3, 12) | 4,00 |
| Banheiro/Quarto 2 | (5, 8) | (5, 12) | 4,00 |

Para iniciar uma divisória exatamente sobre o eixo de outra parede, clique perto do ponto e deixe o magnetismo grudar; depois use Enter para o comprimento. **Confira** no diálogo de cada parede as coordenadas inicial e final e corrija digitando, se preciso. Se você fez o "teste do eixo" da aula 2, sabe onde o traço cai em relação à espessura; ajuste se o seu programa se comportar diferente.

**Conferência de comprimentos internos:** 8 + 8 + 5 + 4 + 4 = 29,00 m.

## Passo 3: portas e janelas

Arraste do catálogo (categoria de portas e de janelas), solte sobre a parede correta e **ajuste no diálogo**: dimensões, elevação e posição (aula 3). Os valores abaixo vêm do quadro de esquadrias do módulo 3. A coluna "centro" é a posição do centro do item ao longo da parede, medida do canto sudoeste (para as paredes horizontais, a partir de x = 0; para as verticais, a partir de y = 0). Se o campo do diálogo referir-se ao **centro**, use este valor; senão converta pela borda (aula 3).

| Código | Parede | Largura x altura (m) | Elevação (m) | Posição (do início ao fim) | Centro |
|---|---|---|---|---|---|
| P1 | Frontal (y = 2) | 0,90 x 2,10 | 0 | x de 1,00 a 1,90 | x = 1,45 |
| P2 | Sala/cozinha (x = 5) | 0,80 x 2,10 | 0 | y de 3,60 a 4,40 | y = 4,00 |
| P3 | Sul do corredor (y = 7) | 0,80 x 2,10 | 0 | x de 1,00 a 1,80 | x = 1,40 |
| P4 | Norte do corredor (y = 8) | 0,80 x 2,10 | 0 | x de 0,80 a 1,60 | x = 1,20 |
| P5 | Norte do corredor (y = 8) | 0,70 x 2,10 | 0 | x de 3,65 a 4,35 (escolha do exercício) | x = 4,00 |
| P6 | Norte do corredor (y = 8) | 0,80 x 2,10 | 0 | x de 6,40 a 7,20 (escolha do exercício) | x = 6,80 |
| J1 | Oeste (x = 0) | 1,50 x 1,20 | 1,10 | y de 3,50 a 5,00 | y = 4,25 |
| J2 | Leste (x = 8) | 1,20 x 1,20 | 1,10 | y de 3,80 a 5,00 | y = 4,40 |
| J3 | Norte (y = 12) | 1,50 x 1,20 | 1,10 | x de 0,75 a 2,25 | x = 1,50 |
| J4 | Norte (y = 12) | 0,60 x 0,60 | 1,80 | x de 4,20 a 4,80 (escolha do exercício, fora do eixo x = 4) | x = 4,50 |
| J5 | Norte (y = 12) | 1,50 x 1,20 | 1,10 | x de 5,75 a 7,25 (escolha do exercício) | x = 6,50 |

Observações:

- O módulo 3 fixa as posições de P1, P2, P3, P4, J1, J2 e J3 (aula 8). As posições de P5, P6, J4 e J5 não estão nas tabelas de lá; escolhi valores razoáveis. J4 fica fora de x = 4,00 porque a parede norte será dividida nesse ponto (passo 6) e uma janela não pode atravessar a divisão.
- **Portas dos quartos e do banheiro** (P4, P5, P6) abrem **para dentro** dos cômodos, para não invadir o corredor (módulo 3). A abertura depende do lado em que você solta a porta; inverta com "espelhar" (aula 3). Para P1, P2 e P3, escolha o sentido que preferir e teste o giro no plano.
- Nomeie cada item com o código (P1... J5).
- **Conferência (corte AA do módulo 3):** ao longo de x = 1,45, o corte atravessa P1 (1,00 a 1,90), P3 (1,00 a 1,80), P4 (0,80 a 1,60) e J3 (0,75 a 2,25). Confirme que os quatro contêm x = 1,45.

## Passo 4: cômodos

Crie os cômodos **depois das portas** (aula 3). Modo **Criar cômodos**:

- **Varanda:** sem paredes ao redor, clique nos quatro cantos (0, 0), (8, 0), (8, 2), (0, 2) e finalize com duplo clique.
- **Sala, cozinha, corredor, Quarto 1, Banheiro e Quarto 2:** dê **duplo clique** dentro de cada área fechada.

Nomeie cada um pelo diálogo (Planta > Modificar cômodos…) e exiba a área.

### Conferência de áreas (o ponto central do exercício)

As áreas do módulo 3 (25, 15, 8, 12, 8, 12 m²) são **nominais**, de eixo a eixo. Um cômodo detectado pelo duplo clique mede a **área livre**, porque as paredes ocupam espaço. Cálculo com paredes externas de 0,20 m e internas de 0,10 m:

| Cômodo | Largura livre (m) | Comprimento livre (m) | Área livre (m²) | Área nominal (m²) |
|---|---|---|---|---|
| Sala | 5,00 - 0,10 - 0,05 = 4,85 | 5,00 - 0,10 - 0,05 = 4,85 | 23,52 | 25,00 |
| Cozinha | 3,00 - 0,05 - 0,10 = 2,85 | 4,85 | 13,82 | 15,00 |
| Corredor | 8,00 - 0,10 - 0,10 = 7,80 | 1,00 - 0,05 - 0,05 = 0,90 | 7,02 | 8,00 |
| Quarto 1 | 3,00 - 0,10 - 0,05 = 2,85 | 4,00 - 0,05 - 0,10 = 3,85 | 10,97 | 12,00 |
| Banheiro | 2,00 - 0,05 - 0,05 = 1,90 | 3,85 | 7,32 | 8,00 |
| Quarto 2 | 2,85 | 3,85 | 10,97 | 12,00 |
| Varanda (sem parede) | 8,00 | 2,00 | 16,00 | 16,00 |

Lógica das subtrações: cada parede come **metade da espessura** de cada lado do eixo (0,10 m para as externas, 0,05 m para as internas). Soma dos cômodos fechados: 23,52 + 13,82 + 7,02 + 10,97 + 7,32 + 10,97 = **73,62 m²**. Mais a varanda de 16,00 m² = 89,62 m² de áreas livres, contra 96,00 m² nominais. A diferença de 6,38 m² são as **paredes** dentro do retângulo de 8 x 10 m (a casa fechada de 80 m² nominais tem 73,62 m² livres). Se o programa mostrar valores muito diferentes (arredondamentos de 1 a 2 centésimos são normais), há erro de espessura, de posição de parede ou de eixo: volte ao passo 1.

Isso reproduz, no programa, a diferença eixo x vão livre do módulo 3 e é a melhor prova de que o modelo está certo.

Piso e teto: por ora, cores neutras (texturas depois). Verifique se o **teto está visível** e a que altura fica (visita virtual). Se o forro estiver em 2,90 m em vez de 2,70 m, resolva pela aula 9 (erro "forro na altura errada").

## Passo 5: o telhado de duas águas (aproximação)

### 5a) Empena norte

A parede norte (y = 12) precisa de topo triangular: cumeeira em x = 4,00 m, a +4,10 m, com +2,90 m nas pontas. Passo a passo (aula 4):

1. Selecione a parede norte e use **Planta > Dividir parede** com o ponto de divisão em x = 4,00 (ou divida ao meio, que é o mesmo ponto, pois a parede tem 8,00 m).
2. Metade oeste: **altura no início 2,90, altura no fim 4,10** (com a opção de parede inclinada do diálogo; confira o rótulo). Se o "início" da parede for o lado leste, inverta os valores: o topo mais alto sempre deve ficar em x = 4,00.
3. Metade leste: 4,10 junto à divisão, 2,90 na ponta leste.

Verifique a vista 3D: as duas metades formam o "A". Atenção: as janelas J3, J4 e J5 devem ficar dentro de uma metade (por isso a escolha dos centros).

### 5b) Os dois planos de água

Use uma peça retangular simples (uma "caixa" ou painel plano do catálogo, ou importada), redimensionada e girada (aula 4). Dimensões e posição do centro:

| Item | Valor |
|---|---|
| Inclinação | 30% = 16,7 graus (arctan 0,30) |
| Comprimento da água | 4,60 / cos(16,7 graus) = 4,60 / 0,958 = **4,80 m** (4,60 = 0,60 de beiral + 4,00 até a cumeeira) |
| Comprimento ao longo da cumeeira | 12,00 m (de y = 0 a y = 12) |
| Espessura da peça | 0,04 m (escolha do exercício) |
| Água oeste, centro | x = 1,70; y = 6,00; z = 3,41 (média entre 2,72 no beiral e 4,10 na cumeeira) |
| Água leste, centro | x = 6,30; y = 6,00; z = 3,41 |
| Rotação em torno do eixo paralelo à cumeeira | +16,7 graus na oeste (sobe para o leste) e -16,7 graus na leste (desce para o leste) |

Como confirmar a altura do beiral: 2,90 - 0,30 x 0,60 = 2,72 m, o valor do corte BB do módulo 3. A cumeeira: 2,72 + 0,30 x 4,60 = 4,10 m.

O nome exato dos campos de rotação (pitch e roll no diálogo) e o sentido do ângulo: **confira na sua versão**, testando visualmente na vista 3D e no corte mental da aula 8 do módulo 3. Alternativa mais simples: importe um modelo de telhado de biblioteca (aula 4) e redimensione. O telhado esconde o interior na vista aérea; desmarque a **visibilidade** dos planos (aula 3) para inspecionar a casa por dentro, e marque de novo para os renders externos.

## Passo 6: móveis mínimos e uma verificação de uso

Coloque apenas o necessário para testar circulação (módulo 1): sofá e mesa de jantar na sala; fogão, geladeira e pia na cozinha; cama e guarda-roupa nos dois quartos; vaso, lavatório e box no banheiro. Procure na categoria correspondente do catálogo e ajuste dimensões pelas medidas reais.

Verificação: no Quarto 1 (2,85 x 3,85 m livres), coloque uma cama de casal e um guarda-roupa; use **cotas** para medir as folgas. Cabe uma passagem confortável? A porta P4 abre sem bater na cama? Isso é o uso de ergonomia (módulo 1) com o modelo.

## Passo 7: acabamento, luz, orientação, imagem

1. **Texturas:** piso da sala e dos quartos (madeira ou cerâmica), cozinha e banheiro (cerâmica); parede externa em cor clara. Combine com o quadro de acabamentos, se tiver um.
2. **Bússola e sol (módulo 2):** norte para o topo do plano. Gere uma imagem às 15h, em junho, e veja se J1 (oeste) recebe sol.
3. **Render:** aula 6. Faça um render pequeno da fachada sul (varanda + P1) e outro interno da sala.
4. **Planta cotada:** adicione cotas de eixo e de vão livre aos ambientes e imprima para PDF em escala 1:50 (A3).

## Passo 8: verificação final (a "prova" do módulo 3)

Marque cada item:

- [ ] Perímetro externo 36,00 m (soma das quatro paredes externas).
- [ ] Comprimento de paredes internas 29,00 m.
- [ ] Áreas livres dentro de 0,05 m² dos valores da tabela do passo 4; soma dos ambientes fechados 73,62 m².
- [ ] Corredor com 0,90 m livres de largura (0,90 é a largura livre, e vem de 1,00 m de eixo a eixo).
- [ ] As onze esquadrias, com dimensões, elevações e posições do quadro; portas dos quartos e banheiro abrindo para dentro.
- [ ] Corte AA: P1, P3, P4 e J3 todas contêm x = 1,45.
- [ ] Topo das janelas J1 e J3 em 2,30 m (1,10 + 1,20).
- [ ] Cumeeira em 4,10 m e ponta do beiral em 2,72 m.
- [ ] Forro em 2,70 m.
- [ ] Arquivo salvo com versão; uma foto e uma planta em PDF exportadas.

## Resumo

- O exercício segue a ordem do fluxo: preferências, contorno, divisórias, esquadrias, cômodos, cobertura, móveis, acabamento, render, documento.
- Trabalhe **eixo a eixo**; as áreas livres são menores que as nominais (73,62 m² de ambientes fechados mais 16,00 m² de varanda = 89,62 m², contra 96,00 m² nominais), e essa diferença é o teste do modelo.
- As esquadrias saem do quadro do módulo 3: peitoril vira **elevação**; posição inicial e final viram **centro**.
- Cobertura: empena por parede dividida com altura variável (2,90 nas pontas, 4,10 na cumeeira) mais dois planos de 4,80 m, inclinação de 16,7 graus.
- A prova final é numérica: perímetro, áreas, esquadrias e cotas de nível batendo com o projeto.

## Para aprofundar

- [ ] [Curso Sweet Home 3D: Criando uma casa em 30 minutos (Aula 16/16)](https://www.youtube.com/watch?v=4uce1KBMWsk) (Bruno Toniolo): casa completa em português, ótimo para ver o ritmo do fluxo inteiro (2016).
- [ ] [Curso Sweet Home 3D: Casa completa (Aula 15/16)](https://www.youtube.com/watch?v=9ri2PDpBXz4) (Bruno Toniolo): outra casa completa da mesma série.
- [ ] [COMO FAZER UMA CASA DO ZERO | SWEET HOME 3D](https://www.youtube.com/watch?v=BuuoaMcom1o) (CONSTRUIR EM 3D): casa do zero em português, pelo título; qualidade não avaliada.
- [ ] [COMO FAZER UMA PLANTA BAIXA COM SWEET HOME 3D](https://www.youtube.com/watch?v=Q8sxFzLEWGo) (CONSTRUIR EM 3D): planta baixa em português, pelo título.
- [ ] [como fazer sua propria planta baixa no SWEET HOME 3D](https://www.youtube.com/watch?v=HOwP2f9sOlU) (CONSTRUIR EM 3D): a própria planta baixa, pelo título.
- [ ] [Curso Sweet Home 3D: Alvenaria em "U" (Aula 13/16)](https://www.youtube.com/watch?v=BoLhfTZJzzo) (Bruno Toniolo): exemplo de paredes com forma diferente, útil para reforçar o gesto de desenhar contornos.

[Próxima aula: Erros comuns e como corrigir](./09%20-%20Erros%20Comuns%20e%20Como%20Corrigir.md)
