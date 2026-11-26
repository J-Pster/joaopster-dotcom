[Voltar ao módulo](./README.md)

# Aula 6: CAD 2D, modelo 3D geométrico e BIM

*Pergunta que esta aula responde: o que muda quando o modelo deixa de ser só desenho ou só forma e passa a carregar dados de construção, e quando cada abordagem vale a pena?*

## Por que isso existe

Existem três "gerações" de representação digital de uma casa, e os softwares que você vai conhecer nos módulos seguintes se distribuem entre elas. Sem essa distinção, comparações como "SketchUp faz planta?" ou "Revit é só um SketchUp mais caro?" ficam sem sentido.

Vamos usar o mesmo exemplo nas três: **uma parede externa de 15 cm de espessura, 3,00 m de comprimento e 2,70 m de altura, com uma janela**.

## 1. CAD 2D: a prancheta digital

**CAD** (Computer-Aided Design) 2D, como o AutoCAD, substitui a prancheta. O SPBIM resume: o CAD tornou-se sinônimo de uma "folha digital, prancheta virtual"; funciona com linhas e formas simbólicas.

Como a parede existe: **duas linhas paralelas com 15 cm entre elas**, talvez com hachura, na planta. Em outra vista (corte), você desenha outras linhas para a mesma parede. Não existe "a parede": existe um desenho em cada folha.

- O desenho é o dado. Nada sabe que aquelas linhas são uma parede.
- Se a parede mudar de lugar, você corrige a planta, o corte, a fachada, uma a uma. A coerência depende da sua atenção.
- Quantidades (área de alvenaria, número de janelas) são contadas à mão ou por regras externas.

Serve muito bem para: **desenhar plantas rapidamente**, produzir pranchas e fazer detalhamento (o que você fez no módulo de desenho técnico). Continua sendo a base de muito trabalho, e os arquivos DWG de plantas são a "matéria-prima" comum (aula 8).

## 2. Modelo 3D geométrico: a maquete digital

Aqui a casa existe como **forma em três dimensões** (aulas 1 a 5). SketchUp, Blender e Sweet Home 3D operam principalmente assim.

Como a parede existe: uma **caixa** (grupo ou componente) de 3,00 x 0,15 x 2,70 m, com um vão subtraído.

- **A forma é o dado.** Mas não há semântica: para o programa, é um bloco, não uma parede de alvenaria com reboco.
- **As vistas saem do modelo:** de um único modelo você pode gerar planta (corte horizontal), fachadas e cortes. Isso já elimina o problema de coerência entre folhas, porque a geometria é uma só.
- **Quantitativos são limitados** (áreas e volumes podem ser lidos, mas não "cinco janelas do tipo X").
- **Excelente para visualização** (materiais, luz, passeios virtuais) e para explorar volumetria antes de detalhar.

Limite: tudo o que não for forma (material, custo, fase de construção, tipo) precisa ser mantido por você à parte, em nomes, tags e planilhas.

## 3. BIM: o modelo com dados

**BIM** (Building Information Modeling, Modelagem da Informação da Construção) é, segundo o SPBIM, um **processo** para produzir e gerenciar dados da construção ao longo de todo o ciclo de vida da edificação, simulando digitalmente a construção real. No software, isso se traduz em um modelo feito de **objetos inteligentes**.

Como a parede existe: um **objeto "Parede"** com propriedades:

- **Tipo:** por exemplo "Parede externa, alvenaria cerâmica, 15 cm final".
- **Camadas:** bloco, chapisco, reboco, pintura, cada uma com espessura e material.
- **Parâmetros:** altura, comprimento, base e topo (definidos por **níveis**), resistência ao fogo, custo, fase etc.
- **Relações:** a janela é um objeto "hospedado" na parede: se você move ou apaga a parede, a janela acompanha, e o vão é aberto automaticamente.
- **Níveis (levels):** planos horizontais de referência (piso térreo, piso superior, cobertura). Paredes são "presas" a níveis: mudar o nível muda a altura das paredes que dependem dele.

### O que isso permite

1. **Coerência automática entre vistas:** planta, corte, fachada e 3D são visões do mesmo banco de dados. Mudou a parede, mudou em toda parte.
2. **Quantitativos (schedules):** tabela automática de janelas por tipo, área de parede por material, volume de concreto. O SPBIM aponta o BIM 5D (custos) como decorrência.
3. **Detecção de conflitos (clash detection):** achar a viga que atravessa a tubulação (integrando disciplinas: arquitetura, estrutura, instalações dos módulos 4 e 5).
4. **Simulação e planejamento:** cronograma (4D), custo (5D), operação (6D, 7D), com ressalvas: a NBS (fonte abaixo) adverte que, além do 3D, "há pouco consenso na indústria" sobre 6D, e recomenda especificar os requisitos de informação em vez de usar apenas o número da dimensão.

### O custo

BIM exige **mais planejamento e mais aprendizado**: você define tipos, níveis e parâmetros antes de ver a casa "bonita". O modelo também pesa mais, e a liberdade formal costuma ser menor do que em uma maquete solta.

## LOD, LOI: quanto detalhe e quanta informação

Em BIM não basta dizer "está modelado". Precisa-se dizer **até que ponto**.

- **LOD** (Level of Development, nível de desenvolvimento): o quanto a **geometria** (e informação associada) é confiável para uso em cada fase. O AIA introduziu cinco níveis em 2008 (LOD 100 a 500), e o BIMForum acrescentou o LOD 350. Resumo (Revizto): 100 conceitual; 200 esquemático, com formas e tamanhos aproximados; 300 detalhado, com dimensões e posições exatas; 350 documentação de construção, com conexões entre sistemas; 400 fabricação; 500 as-built.
- **Cuidado com uma confusão comum:** *Level of Detail* (quão detalhado visualmente) não é *Level of Development* (quão confiável o elemento é para uso). Um objeto pode ter muitos detalhes visuais e ainda ser LOD 200 (pouco confiável).
- **LOI** (Level of Information, nível de informação): o conteúdo **não gráfico** do objeto: fabricante, modelo, custo, manutenção. Alguns autores dizem: LOD é a geometria, LOI é o dado.
- Normas mais recentes (a série ISO 19650) falam em "nível de necessidade de informação", ideia de pedir só o necessário para cada finalidade (não confirmado em detalhe nesta pesquisa; verifique na norma).

Para sua casa de hobby, o alvo é algo entre LOD 200 e 300: dimensões corretas, tipos coerentes e sem entrar no detalhe de fabricação.

## IFC, openBIM e closed BIM

BIM tem um problema de comunicação: cada software (Revit, Archicad etc.) guarda o modelo no seu formato próprio (RVT, PLN). Se cada profissional usa um programa, como trocar? Duas respostas:

- **Closed BIM:** todos usam o mesmo fabricante e trocam arquivos nativos.
- **openBIM:** cada um usa o programa que quiser e troca por **padrões abertos**. O principal é o **IFC** (Industry Foundation Classes), um esquema de dados aberto, padronizado como **ISO 16739**, mantido pela buildingSMART. O IFC codifica identidade e semântica dos objetos (nome, identificador, tipo), atributos (material, propriedades térmicas) e relações (localização, conexões) (segundo a descrição da buildingSMART vista em busca). Complementam o IFC outros padrões da mesma organização (por exemplo, BCF para comentários e IDS para especificar informação exigida; verifique na fonte).

A aula 7 mostra o que o IFC preserva e o que não. Tem também **BIM aberto e gratuito**: FreeCAD e Bonsai (add-on do Blender) trabalham com IFC como formato principal.

### BIM no Brasil (verificado em setembro de 2026, por resumos de busca)

- A **Estratégia BIM BR** foi instituída pelo **Decreto 9.983/2019**.
- O **Decreto 10.306/2020** estabelece o uso do BIM em obras e serviços de engenharia realizados **por órgãos e entidades da administração pública federal**, em fases: a partir de 1º de janeiro de 2021 (modelos de arquitetura e engenharia, detecção de interferências, quantitativos, documentação gráfica), 2024 (orçamento, planejamento e controle de execução, modelagem as-built) e 2028 (gestão e manutenção). Fonte oficial: [Planalto](https://planalto.gov.br/ccivil_03/_ato2019-2022/2020/decreto/d10306.htm) (página não abriu na verificação; dados vêm de resumos de busca).
- Isso vale para obras públicas federais, **não obriga** uma casa particular a usar BIM.
- Normas: a **ABNT NBR 15965** (sistema de classificação da informação da construção, em várias partes) e a **série ABNT NBR ISO 19650** (gestão da informação em BIM, versão brasileira da ISO 19650).

## Quando cada abordagem serve

| Objetivo | Melhor escolha | Por quê |
|---|---|---|
| Desenhar planta e prancha rapidamente, a partir do que já sabe | CAD 2D | Rápido, sem custo de modelagem |
| Ver a casa em 3D, testar volumes e materiais, render | Modelo 3D geométrico | Liberdade de forma, leve |
| Planta, corte e fachada coerentes que mudam juntos; tabela de esquadrias | BIM | Vistas e dados vêm do mesmo modelo |
| Entregar para engenheiro, construtora ou prefeitura que usam BIM | BIM (com IFC) | Interoperabilidade |
| Só quer entender e brincar com a própria casa | 3D geométrico ou BIM leve | Depende do prazer e da meta (módulo 8) |

Esta é a pergunta que o módulo 8 responde: qual software cabe no seu objetivo.

## Resumo

- **CAD 2D** é desenho: linhas e formas sem significado; cada vista é um desenho independente.
- **Modelo 3D geométrico** é forma: uma geometria única de onde saem as vistas, mas sem dados de construção.
- **BIM** é modelo com objetos inteligentes: parâmetros, tipos, níveis, relações, quantitativos e coerência automática entre vistas.
- **LOD** mede a maturidade da geometria (100 a 500), **LOI** o conteúdo de informação; não confunda "detalhado visualmente" com "desenvolvido".
- **IFC** (ISO 16739, buildingSMART) é o formato aberto de troca BIM; **openBIM** é trabalhar por padrões abertos. No Brasil, o Decreto 10.306/2020 impõe BIM a obras públicas federais, não a casas particulares.

## Para aprofundar

- [ ] [Afinal, o que é BIM? Entenda.](https://www.youtube.com/watch?v=freYVfVT7a4) (engenhaBIM, Eng. Fabricio Ferreira): introdução em português.
- [ ] [DIFERENÇA ENTRE CAD x BIM NA PRÁTICA](https://www.youtube.com/watch?v=_yyJ1GKit9Q) (Rafael Ferrera): pelo título, compara CAD e BIM na prática.
- [ ] [Qual a diferença entre BIM e CAD? | Série BIM - Vídeo 2](https://www.youtube.com/watch?v=4VLzziiw0hE) (Escola Desenhar): mais uma comparação em português.
- [ ] [O que é BIM? - Introdução ao ARCHICAD](https://www.youtube.com/watch?v=v2vihOdcDSA) (Graphisoft Brasil): a lógica do modelo único, do ponto de vista do Archicad.
- [ ] [Descomplica BIM - Nível de detalhamento (LOD)](https://www.youtube.com/watch?v=UD2yNDnN_Yo) (HR Compacta): LOD em português.
- [ ] [Descomplica BIM - Nível de Informação (LOI)](https://www.youtube.com/watch?v=JQ7GbkMfjX8) (HR Compacta): LOI em português.
- [ ] [CAD vs BIM: Saiba as diferenças e porque utilizar o BIM](https://spbim.com.br/cad-vs-bim/) (SPBIM, português, conteúdo confirmado por leitura).
- [ ] [BIM dimensions: 3D, 4D, 5D, 6D BIM explained](https://www.thenbs.com/knowledge/bim-dimensions-3d-4d-5d-6d-bim-explained) (NBS, inglês, conteúdo confirmado por leitura).
- [ ] [BIM Level of Development (LOD) explained: LOD 100 to 500](https://revizto.com/resources/blog/bim-lod-levels-of-development) (Revizto, inglês, conteúdo confirmado por leitura).
- [ ] [Normas e padrões BIM no Brasil](https://bimexcellence.com.br/normas-e-padroes-bim-no-brasil/) (BIM Excellence, português, conteúdo confirmado por leitura).

[Próxima aula: Formatos de arquivo e o que se perde ao converter](./07%20-%20Formatos%20de%20Arquivo%20e%20Perdas%20na%20Conversao.md)
