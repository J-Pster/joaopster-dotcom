[Voltar ao módulo](./README.md)

# Aula 3: Escalas e cotas

*Pergunta que esta aula responde: como uma casa de vários metros cabe numa folha de papel, como se calcula o tamanho real a partir do desenho e vice-versa, e como as medidas são escritas para que ninguém precise medir o desenho com régua?*

## O problema: a casa é maior que a folha, e o papel deforma

Uma casa de 8 m por 12 m não cabe numa folha A0 (841 mm x 1189 mm) em tamanho real. É preciso **reduzir** o desenho por um fator fixo. Esse fator é a **escala**. A NBR 6492:2021 define escala como a relação dimensional entre a representação de um objeto no desenho e suas dimensões reais.

Existe um segundo problema: mesmo com escala, o desenho impresso pode ser ampliado, reduzido ou distorcido numa cópia, num PDF impresso "ajustado à página" ou numa foto de celular. Se a obra dependesse de medir o desenho com régua, qualquer distorção viraria erro de construção. A solução é escrever as medidas: as **cotas**. A regra do ofício é: **na obra, vale a cota escrita, não a medida tirada do desenho**.

## Escala: a definição

A escala é uma razão escrita `desenho : real`.

```
escala = medida no desenho / medida real     (mesma unidade nos dois lados)
```

Portanto, em **1:50**, cada 1 unidade no papel corresponde a 50 unidades na realidade: 1 cm no papel = 50 cm reais = 0,50 m.

A NBR 8196 (emprego de escalas) distingue três tipos:

| Tipo | Forma | Significado | Exemplos |
|---|---|---|---|
| Escala **natural** | 1:1 | Desenho no tamanho real | Detalhes muito pequenos ou moldes |
| Escala de **redução** | 1:n (n > 1) | Desenho menor que o objeto | 1:20, 1:50, 1:100 |
| Escala de **ampliação** | n:1 | Desenho maior que o objeto | 2:1, 5:1 (peças pequenas; pouco usadas em arquitetura) |

A NBR 6492:2021 (Anexo A.3.1) lista as **escalas usuais** em arquitetura e urbanismo: 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000 e 1:2000. A ideia da lista é limitar as opções a números "redondos" para que um escalímetro (régua com várias escalas gravadas) cubra tudo.

Repare que a escala 1:75 **não** está nessa lista. Material didático de universidades a cita como usada em desenhos de apresentação; ela aparece na prática, mas a norma não a lista como usual.

### Como calcular: três operações que você usa o tempo todo

**1) Do desenho para o real.** Multiplique a medida do desenho pelo denominador.

> Numa planta em 1:50, uma parede mede 12 cm no papel. Tamanho real: 12 cm x 50 = 600 cm = 6,00 m.

**2) Do real para o desenho.** Divida a medida real pelo denominador.

> Um cômodo de 4,00 m de largura, desenhado em 1:100: 400 cm / 100 = 4 cm no papel.

**3) Descobrir a escala.** Divida a medida real pela medida no desenho (na mesma unidade).

> Uma sala de 5 m está com 10 cm no papel. 500 cm / 10 cm = 50, logo a escala é 1:50.

Um atalho: em **1:100**, 1 cm no papel = 1 m real (a escala em que "o centímetro vira metro"). Em **1:50**, 1 cm = 0,5 m, ou 2 cm = 1 m. Em **1:20**, 1 cm = 20 cm.

### Que escala escolher

A escolha é um compromisso entre **legibilidade** (o desenho tem que mostrar os detalhes que a etapa precisa) e **tamanho da folha** (a casa inteira precisa caber). Quanto maior o denominador, menor o desenho e menos detalhe.

A norma não prescreve uma escala para cada peça, mas orienta as escolhas por etapa (por exemplo, "escalas compatíveis" para detalhes). A tabela abaixo mostra a **prática usual** no Brasil, e serve de ponto de partida, não de regra:

| Peça | Escala usual | Por quê |
|---|---|---|
| Planta de situação | 1:500, 1:1000 ou maior denominador | Mostra quadra e ruas vizinhas; não precisa de detalhe da casa |
| Implantação (casa no lote) | 1:100 ou 1:200 | Precisa mostrar o lote todo e a casa com recuos |
| Plantas, cortes e fachadas de casa | 1:50 (a mais usada) ou 1:100 | 1:50 mostra paredes, portas, mobiliário e cotas legíveis; 1:100 é usado quando a casa é grande |
| Desenhos de apresentação | 1:75 (às vezes) | Cabe numa folha menor, com boa leitura |
| Ambientes especiais (banheiro, cozinha) | 1:25 ou 1:20 | Mais detalhe para louças, bancadas e revestimentos |
| Detalhes construtivos | 1:20, 1:10, 1:5 | Encontros de materiais, esquadrias, peitoril |

Fonte da prática: material didático de curso de arquitetura (a escala 1:50 como mais usada em plantas, cortes e fachadas, e a 1:75 apenas em apresentação) e aula de desenho técnico. Se o seu município ou órgão exigir escala específica para aprovação, a exigência local prevalece (módulo 6).

### Um erro clássico: escala não se "vê"

Uma pessoa vendo um PDF na tela não sabe a escala do desenho. A tela amplia e reduz. Duas defesas:

- **Sempre escrever a escala** no título de cada desenho (a NBR 6492:2021 pede escala em cada desenho e no carimbo).
- Incluir uma **escala gráfica**: uma barra com marcas de metro no desenho. A NBR 6492:2021 (A.3.2) recomenda a escala gráfica, e ela acompanha o desenho quando ele é ampliado ou reduzido (a barra cresce e diminui junto). O PDF pode ser impresso em outro tamanho; a barra ainda diz o tamanho real.

### Como usar o escalímetro

O **escalímetro** é uma régua de seção triangular com várias escalas gravadas (a combinação de escalas varia por modelo e fabricante). Você posiciona a escala desejada sobre o desenho e **lê diretamente o valor real**, sem fazer contas. Vale ao medir uma planta impressa para conferir uma medida que não está cotada, mas lembre: use só para conferência, não para a obra.

## Cotas: escrever a medida em vez de mandar medir

A NBR 6492:2021 define **cota** como toda e qualquer medida expressa em peças gráficas de projetos. Uma cota completa tem os elementos abaixo, que também aparecem nas figuras A.20 a A.22 da norma:

- **Linha de cota**: linha fina paralela ao trecho medido, com os limites marcados (traço oblíquo, seta ou ponto).
- **Linhas de chamada** (ou de extensão): linhas finas que partem do objeto até a linha de cota. A norma manda pará-las **2 mm a 3 mm antes** do objeto medido, para não confundir com o contorno.
- **Cifra**: o número da medida, com altura de **2,5 mm ou 1,8 mm** (norma), sem encostar na linha de cota.

Regras da NBR 6492:2021 (A.5.1):

1. Use o sistema métrico; **numa única peça, use sempre a mesma unidade** de medida.
2. As linhas de cota devem ficar **preferencialmente fora do desenho**, para não poluir.
3. Nos **cortes, cotam-se apenas as medidas verticais** (as horizontais estão nas plantas).
4. **Evite duplicar cotas**: uma mesma medida escrita duas vezes convida a divergência quando um valor for alterado e o outro não.
5. Se a dimensão não cabe dentro do elemento (uma parede fina), coloque a cota ao lado, indicando o local exato com uma linha.
6. Vãos de portas e janelas: a cota indica o **vão acabado pronto para receber as esquadrias** (a NBR 6492:2021, A.5.2).

### Cotas em série: como organizar

A norma não impõe uma organização única, mas a prática usual de plantas baixas usa **três faixas de cotas** no sentido de cada fachada, de dentro para fora:

| Faixa | O que mede | Para quê |
|---|---|---|
| 1ª (mais próxima da casa) | Medidas parciais: vãos de janelas e portas, trechos de parede entre aberturas | Posicionar cada abertura |
| 2ª | Distâncias entre eixos de paredes ou entre pilares | Conferir a posição de cada elemento estrutural/paredes |
| 3ª (mais externa) | Medida total da edificação naquele sentido | Conferir a soma; a soma das cotas de dentro tem que bater com a total |

A conferência é aritmética: a soma das parciais de uma faixa deve dar a cota da faixa seguinte. Se não bate, há erro no projeto ou na cotagem. Isso é o equivalente de "fechar a conta".

Também é usual cotar **dentro** dos cômodos as dimensões livres (largura x comprimento) e escrever a área. Dimensões internas (livres) e externas (com paredes) são coisas diferentes, e o projeto precisa deixar claro qual está sendo cotada: uma sala "de 4,00 m" que mede 4,00 m de eixo a eixo terá menos de 4,00 m livres, porque desconta metade da espessura de cada parede.

**Exemplo resolvido.** Uma parede externa tem 6,00 m de comprimento total (cota total). Nela há uma porta com vão de 0,90 m e uma janela com vão de 1,50 m. As parciais (valores de exemplo) na primeira faixa, da esquerda para a direita, podem ser: 0,60 (canto até porta) + 0,90 (vão da porta) + 1,30 (trecho cheio) + 1,50 (vão da janela) + 1,70 (trecho até o canto) = 6,00. A soma bate com a cota total. Isso é a verificação.

## Cotas de nível: a altura em relação a um referencial

Alturas não se cotam como comprimentos horizontais; usam-se **cotas de nível**, que indicam a altura de um ponto em relação a uma **referência de nível** (a NBR 6492:2021 define: "cota de nível indicada pelo projeto para o início da demarcação altimétrica"). A convenção mais comum é adotar o piso acabado do pavimento térreo como nível 0,00 (a norma exige, no projeto executivo, uma referência única para as cotas de nível).

Dois tipos importantes (definições da NBR 6492:2021):

| Sigla | Nome | O que significa |
|---|---|---|
| **N.A.** | Nível acabado | Cota do nível **considerando** a espessura do revestimento |
| **N.O.** | Nível em osso | Cota do nível **sem** considerar a espessura do revestimento e de seu substrato |

Por que existe essa distinção: quando o pedreiro molda a laje ou o contrapiso, ele trabalha no "osso" (a estrutura bruta). O piso cerâmico, a argamassa e a cola vão por cima e somam alguns centímetros. Se o projeto só dissesse "piso a +0,00", ficaria a dúvida: é o topo do concreto ou o topo da cerâmica? O N.O. e o N.A. eliminam a dúvida, e a diferença entre eles é a espessura do acabamento. Exemplo: um banheiro com piso acabado 2 cm abaixo do piso acabado do corredor (para conter água) aparece com N.A. = -0,02 e um N.O. correspondente mais baixo, descontando a espessura do revestimento.

A norma ainda define **eixos** (A.6.1): marcas de coordenadas em que os eixos **transversais** levam **números** (1, 2, 3...) e os **longitudinais** levam **letras** (A, B, C...). Formam uma malha de referência, usada em projetos maiores e estruturais: "o pilar P3 está no cruzamento B-2".

## Resumo

- A escala existe porque a casa não cabe na folha; é uma razão desenho:real. Em 1:50, 1 cm no papel = 50 cm reais. Real = desenho x n; desenho = real / n; n = real / desenho.
- A NBR 6492:2021 lista as escalas usuais: 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:2000. Na prática, 1:50 para plantas, cortes e fachadas de casa e 1:20 a 1:5 para detalhes.
- Nunca meça o desenho na obra: vale a cota escrita. A escala gráfica acompanha ampliações e reduções do desenho.
- Cotas: linha de cota fora do desenho, linhas de chamada param 2 a 3 mm do objeto, mesma unidade em todo o desenho, nos cortes só cotas verticais, sem duplicar cotas, vãos de portas e janelas no vão acabado.
- Cotas de nível medem altura a partir de uma referência; N.A. (com revestimento) e N.O. (sem revestimento) evitam ambiguidade entre estrutura e acabamento.
- Conferência: as cotas parciais somam as totais; medidas iguais em peças diferentes devem coincidir.

## Para aprofundar

- [ ] [Aprenda de maneira fácil e rápida, como usar escala e o escalímetro. Completo.](https://www.youtube.com/watch?v=9tfqY5_THz4) (Arquisefaz): demonstra o uso do escalímetro e a leitura de escalas. Título e canal confirmados; conteúdo não assistido.
- [ ] [ABNT NBR 6492:2021, Anexo A.3 e A.5](https://arquivos.ufrrj.br/arquivos/2021103028882828758439fd707c0a63a/NBR_6492_2021.pdf) (ABNT): escalas usuais, escala gráfica e regras de cotas, com as figuras A.20 a A.26 mostrando limites de cota, cotas de vãos e cotas de nível.

[Próxima aula: Linhas, letras e simbologia](./04%20-%20Linhas%20Letras%20e%20Simbologia.md)
