# Aprendendo Modelagem de Casas

Objetivo final: entender os princípios do projeto residencial e dominar softwares de modelagem (Sweet
Home 3D, SketchUp, BIM, Blender) para modelar a minha própria casa, como hobby.

## Filosofia da trilha: o porquê antes do como

Este curso segue a metodologia da pasta `Aprendendo` (veja o [README geral](../README.md)): começar pela
base, entender o porquê de cada coisa antes de aprender o como, e só chegar ao software depois de saber
o que se está tentando representar. Por isso o curso só abre o primeiro programa no módulo 9. Antes
disso vêm a função da casa, o sol e o vento, o desenho técnico, a estrutura, as instalações, as regras
do terreno e os conceitos de modelagem. Quem entende isso modela uma casa que faz sentido, e não apenas
uma casa bonita no computador.

## Aviso importante: modelo de hobby não é projeto legal

Modelar a casa em software é ótimo para entender, testar ideias e conversar com um profissional. Mas
construir exige projeto aprovado na prefeitura, com responsável técnico (arquiteto com RRT, engenheiro
com ART). O módulo 6 explica isso, e o módulo 14 fecha o curso mostrando como levar o modelo a um
profissional.

## Estrutura: 14 módulos, em ordem de dependência

| # | Módulo | Do que trata |
|---|--------|--------------|
| 1 | [Fundamentos de Arquitetura Residencial](./01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/README.md) | Por que a casa é como é: função, programa de necessidades, setorização, ergonomia e processo de projeto |
| 2 | [Conforto Ambiental e Implantação](./02%20-%20Conforto%20Ambiental%20e%20Implantacao/README.md) | Sol, ventilação, luz natural e como posicionar a casa no terreno |
| 3 | [Desenho Técnico Arquitetônico](./03%20-%20Desenho%20Tecnico%20Arquitetonico/README.md) | A linguagem padronizada dos projetos: escalas, plantas, cortes, fachadas e leitura de projeto |
| 4 | [Sistemas Construtivos e Estrutura](./04%20-%20Sistemas%20Construtivos%20e%20Estrutura/README.md) | Por que a casa fica em pé: forças, fundações, sistemas construtivos, lajes e telhados |
| 5 | [Instalações Prediais Básicas](./05%20-%20Instalacoes%20Prediais%20Basicas/README.md) | Hidráulica, esgoto, elétrica e outras instalações, e como elas condicionam a planta |
| 6 | [Terreno e Legislação no Brasil](./06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/README.md) | Plano diretor, índices, leitura do terreno, aprovação, responsabilidade técnica e acessibilidade |
| 7 | [Fundamentos de Modelagem 3D, CAD e BIM](./07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/README.md) | Geometria digital, organização do modelo e a diferença entre CAD, 3D e BIM |
| 8 | [Panorama de Softwares e Como Escolher](./08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/README.md) | Categorias de software, comparativo para hobby, licenças e formatos de arquivo |
| 9 | [Prática com Sweet Home 3D](./09%20-%20Pratica%20com%20Sweet%20Home%203D/README.md) | O caminho mais rápido de uma planta a uma casa em 3D (gratuito) |
| 10 | [Prática com SketchUp](./10%20-%20Pratica%20com%20SketchUp/README.md) | Modelagem 3D flexível por faces, grupos e componentes |
| 11 | [Prática com BIM: Revit e Archicad](./11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md) | Modelo paramétrico, pranchas e quantitativos, e alternativas gratuitas (FreeCAD, Bonsai) |
| 12 | [Prática com Blender para Arquitetura](./12%20-%20Pratica%20com%20Blender%20para%20Arquitetura/README.md) | Modelagem por malha, gratuita e poderosa, com render |
| 13 | [Materiais, Iluminação e Renderização](./13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md) | A física da luz e do material, motores de render e pós-produção |
| 14 | [Projeto Completo: Modelando Sua Casa](./14%20-%20Projeto%20Completo%20Modelando%20Sua%20Casa/README.md) | Capstone: do terreno ao modelo final, e como validar com um profissional |

## Por que essa ordem

- **Módulos 1 a 3 (o que é uma casa e como ela se comunica):** antes de desenhar, é preciso saber o que a
  casa precisa fazer, como o clima a afeta e qual é a linguagem em que projetos são escritos.
- **Módulos 4 a 6 (o que a torna real):** estrutura, instalações e regras do terreno são o que separa um
  desenho de uma casa que pode ser construída. Ficam antes do software para que o modelo já nasça
  coerente.
- **Módulos 7 e 8 (o que é modelar e com o quê):** conceitos de modelagem e o panorama de programas,
  para escolher a ferramenta com critério em vez de por moda.
- **Módulos 9 a 12 (as ferramentas):** um módulo prático por software. Não é preciso fazer todos; veja
  "Qual software seguir" abaixo.
- **Módulo 13 (a imagem):** luz e material valem para qualquer programa.
- **Módulo 14 (o projeto):** junta tudo na sua própria casa.

## Qual software seguir (módulos 9 a 12)

Os módulos 9 a 12 levam ao mesmo resultado por caminhos diferentes. Escolha um (ou mais) depois de ler o
módulo 8. Situação de licenças para hobby, verificada pelos pesquisadores em setembro de 2026 (confira
sempre nas páginas oficiais, porque mudam):

| Software | Custo para hobby | Observação |
|----------|------------------|------------|
| Sweet Home 3D | Gratuito e de código aberto (GPL) | O mais simples: planta 2D que gera o 3D. Bom para começar |
| SketchUp | O SketchUp Free (versão web) é gratuito para uso pessoal, não comercial | O Free não importa DWG e extensões e LayOut são do Pro/Studio; Go e Pro são pagos. Detalhes no módulo 8 |
| Revit e Archicad | Teste gratuito de 30 dias; licença educacional gratuita só para estudantes matriculados | Para hobby sem vínculo de estudante, são pagos |
| Blender | Gratuito (GPL) | Curva de aprendizado maior; ótimo para render |
| FreeCAD BIM e Bonsai | Gratuitos e de código aberto | Alternativas BIM sem custo, com material só em inglês |

## Sobre o formato e a curadoria

O conteúdo principal de cada módulo é **texto escrito para este curso**, em aulas curtas e diretas, com
uma só voz do começo ao fim. Links (artigos, normas, documentação oficial e vídeos) entram só como apoio
para o que texto não mostra bem. Nos módulos de software e de imagem (9 a 13) há mais vídeos, porque ver
a interface e o gesto ajuda. Regras da curadoria:

- **Os vídeos não foram assistidos.** Título e canal foram conferidos, mas a descrição de cada vídeo vem
  do título. Vale dar 2 ou 3 minutos a cada um antes de investir tempo.
- **O texto foi montado a partir de pesquisa na web**, sem acesso a algumas páginas oficiais (bloqueios) e
  sem abrir todas as normas ABNT. O que não foi confirmado está marcado no texto como "não confirmado" ou
  "confira". Trate como ponto de partida, não como norma.
- **Preços, licenças e versões** foram verificados em setembro de 2026 e mudam rápido.
- **Passos de software** (menus, atalhos) foram escritos a partir de documentação oficial e não testados
  em todos os casos; onde há dúvida o texto diz "confira o nome exato na sua versão".

## Como usar esta trilha

1. Siga os módulos na ordem (módulos 9 a 12: escolha o software).
2. Cada módulo tem um `README.md` com a lista de aulas. Leia as aulas em ordem; cada uma termina com um
   resumo de revisão rápida e, quando útil, links de apoio com checkbox.
3. Ao final de cada módulo, responda o checklist de saída sem consultar. Se não conseguir, revise.
4. No módulo 14, aplique tudo à sua própria casa.

