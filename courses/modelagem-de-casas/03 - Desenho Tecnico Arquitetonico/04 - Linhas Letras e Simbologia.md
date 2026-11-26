[Voltar ao módulo](./README.md)

# Aula 4: Linhas, letras e simbologia

*Pergunta que esta aula responde: como um desenho feito só de traços consegue dizer, sem legenda em cada canto, o que é parede cortada, o que está escondido, o que é eixo, o que é medida e o que é símbolo?*

## O problema: tudo no desenho é traço preto

O desenho técnico é feito, em princípio, com uma só cor: a NBR 10067 diz que o desenho técnico é representado na **cor preta**, e que se outras cores forem necessárias o significado precisa constar em legenda. Se tudo é traço preto, o que diferencia uma parede de uma linha de cota? Duas coisas: **o tipo da linha** (contínua, tracejada, traço e ponto) e a **largura da linha** (extralarga, larga, estreita). Combinando os dois, cria-se um vocabulário: cada combinação tem significado fixo. Quem lê aprende o vocabulário uma vez e o usa em todo projeto.

Isto complementa a projeção ortogonal (aula 2): a projeção decide **onde** desenhar; a linha decide **o que aquilo é**.

## Tipos de linha (NBR 6492:2021, Anexo A, Tabela A.1)

O Anexo A da NBR 6492:2021 (informativo) resume os tipos de linha e suas aplicações em arquitetura e urbanismo. A NBR 8403 é a norma geral de aplicação de linhas em desenho técnico. A tabela abaixo reproduz as aplicações da Tabela A.1 da NBR 6492:2021, que li no texto integral. As **aparências** (o desenho de cada traço) estão nas figuras da norma; aqui as descrevo por nome.

| Tipo de linha (nome na norma) | Aparência | Aplicação em projeto de arquitetura |
|---|---|---|
| **Contínua extralarga** | Traço contínuo, o mais grosso | Contornos visíveis de elementos **em corte** e seções **quando não se usam hachuras**; limites de importância especial em corte |
| **Contínua larga** | Traço contínuo, grosso | Contornos visíveis de elementos em corte **quando se usam hachuras**; contornos e arestas visíveis das partes à vista; curvas de nível principais; limites entre materiais à vista; representação simplificada de portas, janelas, escadas e acessórios |
| **Contínua estreita** | Traço contínuo, fino | Linhas de cota; linhas de chamada; hachuras; curvas de nível secundárias; mudança de nível em planta; setas de sentido de acesso; contornos de seções rebatidas na própria vista; também arestas visíveis e representação de portas, janelas e escadas, como alternativa à larga |
| **Contínua com zigue-zague, estreita** | Traço fino com zigue-zague | Limites de vistas ou cortes parciais interrompidos |
| **Tracejada estreita** | Traços curtos com vãos, fino | **Arestas e contornos não visíveis** (o que está escondido) |
| **Traço e ponto, estreita** | Traço longo, ponto, fino | Linhas de centro, linhas de simetria, trajetórias |
| **Traço e ponto, extralarga** | Traço e ponto, mais grosso | **Marcação dos planos de corte**: extremidades e pontos de mudança de direção |
| **Traço e dois pontos, estreita** | Traço longo, dois pontos, fino | Cantos antes da conformação; contornos de peças adjacentes; detalhes situados antes do plano de corte; centro de gravidade; posição-limite de peças móveis; **projeções de pavimentos em balanço, marquises e beirais** |
| **Traço longo e ponto, estreita** | Traço longo e ponto, fino | Linhas de eixo |

Como ler a tabela sem decorar:

- **Grossa = o que foi cortado ou é contorno principal.** É o que o plano secante atravessou (paredes, lajes, pilares no corte). A grossura dá "peso" ao que é estrutura.
- **Fina = informação auxiliar**: medidas, hachuras, chamadas.
- **Tracejada = escondido**: existe, mas você não o veria da posição de onde olha.
- **Traço e ponto = eixo, centro ou simetria, e também marcação do plano de corte** (com traço mais grosso).
- **Traço e dois pontos = imaginário ou de outro nível**: o beiral que está acima do plano de corte da planta, a peça vizinha, uma posição alternativa.

Exemplo de leitura numa **planta baixa**: as paredes cortadas pelo plano a 1,50 m estão em linha grossa; as portas (folha e arco de giro) e janelas em linha mais fina; o beiral do telhado, que está acima do plano de corte e portanto foi "removido", aparece como projeção em traço e dois pontos; a linha de cota é fina, com números. A aula 5 usa essa lógica.

## Largura das linhas (Tabela A.2)

A largura não é livre. A NBR 6492:2021 (A.1.3) diz que as larguras devem ser escolhidas de acordo com o **tipo, tamanho, escala do desenho e métodos de reprodução**, e apresenta uma tabela de **grupos de linhas**. Cada grupo é uma família de três larguras que mantém proporção fixa: extralarga : larga : estreita = **1 : 1/2 : 1/4**. Entre uma família e a seguinte, a razão é de aproximadamente 1,4 (raiz de 2): 0,25, 0,35, 0,50, 0,70, 1,00. Essa é a mesma razão que liga os formatos de papel A0, A1, A2 etc., o que faz a espessura acompanhar ampliações e reduções de cópia entre formatos.

| Grupo (mm) | Extralarga | Larga | Estreita |
|---|---|---|---|
| 0,25 | 0,50 | 0,25 | 0,13 |
| 0,35 | 0,70 | 0,35 | 0,18 |
| 0,50 | 1,00 | 0,50 | 0,25 |
| 0,70 | 1,40 | 0,70 | 0,35 |
| 1,00 | 2,00 | 1,00 | 0,50 |

O grupo é chamado pela largura da linha "larga". Por que isso importa: se o desenho for reduzido (de A1 para A3, por exemplo), a linha estreita não pode sumir e a extralarga não pode virar mancha. Escolher o grupo pela escala e pelo tamanho da folha preserva a legibilidade. Um projetista escolhe, por exemplo, o grupo 0,50 para uma planta em 1:50 (valor ilustrativo; a norma não prescreve grupo para cada escala) e usa os três pesos dele consistentemente em todos os desenhos da prancha.

Em softwares de desenho e de modelagem, isso vira a configuração de **espessuras de linha por camada ou por categoria**: paredes cortadas com um peso, mobiliário com outro, cotas com o mais fino. Sem essa configuração, o desenho gerado por computador sai "achatado", com todos os traços iguais.

## Letras e números

Texto também é padronizado, por dois motivos: legibilidade após redução de cópias e uniformidade entre desenhistas. NBR 6492:2021, Anexo A.2:

- Fonte **sem serifa** (sem "pezinhos"), com traço de espessura uniforme igual a **um décimo da altura da letra maiúscula**.
- Textos **preferencialmente em caixa alta**, exceto unidades de medida e exigências ortográficas.
- **Sem itálico**, exceto grafia em idioma estrangeiro.

Alturas de letras e algarismos (Tabela A.3, com o corpo tipográfico correspondente em pontos), na ordem da tabela:

| Altura (mm) | Corpo (pt) | Aplicação indicada na norma |
|---|---|---|
| 7,0 | 28 | Título da prancha |
| 5,0 | 20 | Denominação (título) do desenho |
| 3,5 | 14 | Denominação dos ambientes, marcação dos eixos, representação gráfica de acesso |
| 2,5 | 10 | Cotas, informações em geral, cotas de nível, numeração da folha nos símbolos de vistas, cortes e chamadas de detalhe |
| 1,8 | 7,5 | Numeração de espelhos e outras informações quando não houver espaço para 2,5 mm |

(A associação altura x aplicação vem da tabela A.3, cuja formatação no PDF é confusa; a ordem acima é a mais consistente com o texto, mas confira nas páginas 24 e 25 da norma se precisar de precisão.)

## Símbolos padronizados (NBR 6492:2021, A.4 a A.10)

Símbolos são desenhos convencionais que substituem uma frase. O Anexo A da norma mostra as figuras; as descrições abaixo são o que cada uma faz.

| Símbolo | O que indica | Detalhes da norma |
|---|---|---|
| **Norte** | Orientação do desenho | N = norte verdadeiro; NM = norte magnético (só em estudos preliminares); NP = norte de projeto (posição relativa entre desenhos, opcional junto ao verdadeiro) |
| **Chamada** | Texto ou número ligado a um ponto do desenho | Linha de chamada a **45°** |
| **Acesso** | Por onde se entra | Símbolo gráfico de acesso |
| **Sentido ascendente** | Direção de subida de escadas e rampas | Indicação do sentido ascendente (figuras A.14 e A.15) |
| **Inclinação de cobertura** | Caimento de telhado ou laje | Indicação seguindo o **sentido do fluxo das águas** (figuras A.16 e A.17: telhado e laje de cobertura) |
| **Fachadas, elevações e vistas** | Onde e para que lado se olha | Símbolo de indicação (figura A.18) |
| **Corte** | Onde o plano secante passa, e para que lado se olha | Linha de traço e ponto extralarga nas extremidades e mudanças de direção (Tabela A.1), com a marcação da figura A.28 |
| **Eixos** | Malha de referência | **Números (1, 2, 3...)** nos eixos transversais e **letras (A, B, C...)** nos longitudinais |
| **Detalhes e ampliações** | Trecho que tem outro desenho em escala maior | Marcação e chamada de detalhe ou ampliação (figura A.29) |
| **Cota de nível** | Altura de um ponto | Com N.A. ou N.O. quando necessário (aula 3) |
| **Numeração dos desenhos** | Ordem dos desenhos numa prancha | Numerados de **1 a n** em cada prancha, sem exceção |
| **Designação de portas e janelas** | Tipo de esquadria | Portas **P1, P2, P3... Pn**; janelas **J1, J2, J3... Jn** |
| **Ambientes** | Nome de cada cômodo | Todos os compartimentos identificados nas plantas gerais pelo nome, com número de referência quando necessário |

### Por que P1, J1: os quadros

As designações P1, J1 existem para não repetir todas as informações em cada porta. A planta só indica "P2" e um **quadro de esquadrias** lista, para P2: dimensões, material, tipo de abertura, ferragens, quantidade. A mesma lógica vale para os **quadros de acabamentos** (piso, parede, teto de cada cômodo) e o **quadro de áreas**, que a NBR 6492:2021 (A.9) prevê. O símbolo aponta, o quadro detalha: isso mantém o desenho limpo e a informação sem duplicação.

### Hachuras e representação de materiais

**Hachura** é um padrão de traços ou pontos que preenche a área cortada para indicar o material (concreto, alvenaria, madeira, terra...). A NBR 12298 trata da representação de área de corte por hachuras, e a NBR 6492:2021 (A.10, figuras A.35 e A.36) mostra as convenções dos materiais mais usados. Duas regras:

1. Se o desenho usa hachura no corte, o contorno do corte usa a linha **larga**; sem hachura, o contorno usa a **extralarga** (Tabela A.1). Em desenhos em escala pequena, é comum não hachurar e preencher a área cortada com o traço grosso.
2. **A hachura é convenção, não lei**: as convenções variam um pouco entre escritórios e softwares. Por isso a norma pede a **legenda** ("listagem de símbolos e outras formas de sinalização, acompanhados de seus significados"). O que vale é a legenda da prancha.

## Como o leitor usa tudo isso

Diante de uma prancha, este raciocínio de leitura resolve 90% das dúvidas:

1. **Legenda e notas** primeiro: quais símbolos e convenções esta prancha usa?
2. **Título e escala** de cada desenho: o que estou vendo e em que proporção?
3. **Traço grosso**: o que foi cortado (estrutura e paredes).
4. **Traço fino**: o que está à vista, cotas, hachuras.
5. **Tracejado e traço com dois pontos**: o que está escondido ou em outro nível.
6. **Símbolos de referência** (corte, fachada, detalhe): para onde ir a seguir.

## Resumo

- Como tudo é preto, o significado vem do **tipo** (contínua, tracejada, traço e ponto) e da **largura** (extralarga, larga, estreita, na proporção 1 : 1/2 : 1/4) da linha.
- Grosso = cortado/estrutura; fino = cotas, hachuras, auxiliares; tracejado = escondido; traço e ponto extralarga = marcação do plano de corte; traço e dois pontos = beirais, marquises e outros elementos fora do plano de corte.
- O grupo de larguras (0,25 a 1,00 mm de linha larga na Tabela A.2) é escolhido por escala, tamanho de folha e reprodução, para preservar a legibilidade em reduções.
- Letras: sem serifa, caixa alta, sem itálico, altura de 7,0 mm (título da prancha) a 1,8 mm (informação miúda); cotas usam 2,5 mm ou 1,8 mm.
- Símbolos padronizados (norte, corte, fachada, chamada a 45°, eixos numerados e com letras, P1/J1, quadros) substituem frases longas; a legenda da prancha é a autoridade final.

## Para aprofundar

- [ ] [Linhas e Hachuras em Desenho Técnico](https://www.youtube.com/watch?v=uHEuQwdlcms) (Atelier de Desenho Técnico, Furg): apresenta os tipos de linha e as hachuras. Título e canal confirmados; conteúdo não assistido, e pode seguir a norma geral de desenho técnico (NBR 8403) e não o Anexo A da NBR 6492.
- [ ] [ABNT NBR 6492:2021, Anexo A](https://arquivos.ufrrj.br/arquivos/2021103028882828758439fd707c0a63a/NBR_6492_2021.pdf) (ABNT): as **figuras** A.2 a A.7 mostram as linhas em uso num corte, plantas de térreo, pavimento superior e cobertura; as figuras A.11 a A.19 mostram os símbolos. É o melhor "exemplo visual" que o texto não substitui.

[Próxima aula: A planta baixa](./05%20-%20Planta%20Baixa.md)
