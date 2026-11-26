# Aula 5: Formatos de arquivo e interoperabilidade

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que exporta para o quê, e o que se perde quando um modelo sai de um programa e entra em outro?*

## Por que interoperabilidade é um problema real

Cada programa guarda o modelo no seu próprio formato nativo (o arquivo do SketchUp é `.skp`, o do Revit é `.rvt`, o do Blender é `.blend`, o do Sweet Home 3D é `.sh3d`). Esses arquivos refletem a lógica interna do programa: o Revit guarda "parede com camadas e parâmetros", o Blender guarda "malha de triângulos". Para trocar de programa é preciso passar por um **formato de intercâmbio**, um arquivo que os dois entendem. Só que todo formato de intercâmbio entende um subconjunto do que o programa de origem sabe. **O que não cabe no formato se perde.**

Regra de fundo, vinda do módulo 7: quanto mais inteligente é a informação (parede, porta, material com espessura), mais difícil ela atravessar um formato que só entende geometria. Descer de BIM para malha é fácil e perde inteligência; subir de malha para BIM é praticamente impossível de forma automática.

## Os formatos que importam, por natureza

| Formato | Natureza | O que carrega | O que perde | Uso típico |
|---|---|---|---|---|
| **DWG / DXF** | CAD (linhas e sólidos) | Geometria 2D e 3D precisa, camadas (layers), blocos | Semântica de construção; materiais fotográficos | Trocar plantas com outros escritórios e programas de CAD |
| **OBJ** | Malha | Geometria de malha e materiais básicos (num arquivo auxiliar) | Unidades explícitas, hierarquia rica, dados de construção | Levar um modelo a programa de arte 3D ou render |
| **FBX** | Malha (formato proprietário da Autodesk, muito difundido) | Malha, materiais, hierarquia, animação | Semântica de construção | Pipelines de jogos e visualização |
| **glTF / GLB** | Malha para tempo real | Malha, materiais PBR (que simulam reflexo real), hierarquia | Semântica de construção | Web, realidade aumentada, motores em tempo real |
| **DAE (Collada)** | Malha | Malha, materiais, cenas | Semântica de construção | Formato mais antigo, aceito por SketchUp, Sweet Home 3D e FreeCAD |
| **STL** | Malha só de geometria | Superfície triangulada | Cor, textura, hierarquia | Impressão 3D |
| **IFC** | BIM aberto | Classe do elemento (parede, laje), propriedades, relações, hierarquia | Recursos proprietários do programa de origem | Trocar modelo BIM entre programas diferentes |

**IFC (Industry Foundation Classes)** é padrão aberto da organização buildingSMART. Foi criado para trocar informação geométrica e não geométrica entre programas de fabricantes distintos, sem depender de nenhum deles. A prática é imperfeita: artigo de e-zigurat alerta que exportações costumam **perder informação**, seja por tradutores ineficientes, seja por esquemas complexos mal configurados, seja por recursos paramétricos que não existem no formato neutro. Trate IFC como ponte útil que precisa de teste, não como cópia perfeita.

## O que cada programa aceita (verificado em setembro de 2026)

Marquei a origem: **oficial** (página do fabricante consultada) ou **resumo** (só resumo de busca, ou o site bloqueou o acesso direto).

| Programa | Importa | Exporta | Origem |
|---|---|---|---|
| **Sweet Home 3D** | OBJ, DAE, 3DS, KMZ (modelos 3D de objetos) | Formatos de exportação não confirmados na FAQ; veja o módulo 9 | Oficial (FAQ) |
| **SketchUp Free** | SKP, JPG, PNG | SKP, PNG, STL | Oficial |
| **SketchUp (assinantes)** | DWG, DXF (ajuda oficial); IFC 2x3 e IFC 4 (ajuda oficial); 3DS, DAE, KMZ, STL (resumo) | DWG e DXF (2D e 3D), STL, COLLADA, 3DS, FBX, KMZ, OBJ, VRML, XSI, USDZ e glTF (ajuda oficial); IFC 4 e IFC 2x3 (2x3 só no Windows até a versão 2025, segundo a ajuda oficial) | Oficial. A ajuda não especifica qual plano libera cada formato; confira na página de comparação de planos |
| **Revit** | DWG, IFC e outros (não confirmado em detalhe) | DWG, DXF, DGN, SAT, DWF, FBX, NWC, gbXML, IFC | Resumo (Autodesk bloqueou o acesso direto) |
| **Archicad** | DWG, DXF, IFC, BCF | DWG, DXF, IFC, BCF | Resumo |
| **FreeCAD** | STEP, IGES, STL, SVG, DXF, OBJ, IFC, DAE (lista oficial) | os mesmos | Oficial. Segundo a documentação, IFC nas versões 2x3 e 4; quantidades declaradas no IFC não são importadas, mas a geometria é recriada |
| **Blender** | Importadores nativos de OBJ, glTF, FBX, STL, entre outros; DWG e SKP não são nativos | os mesmos | Não confirmado nesta verificação (a documentação consultada retornou erro): conhecimento geral, confira no módulo 12 |
| **Bonsai** | IFC (é o formato nativo do modelo) | IFC | Oficial |
| **Twinmotion** | Direct Link com Archicad, Revit, Rhino, Navisworks e SketchUp Pro; Datasmith e outros formatos | (imagens, vídeos) | Resumo de busca de páginas do site oficial |

## Fluxos que aparecem no curso

1. **Sweet Home 3D para Blender:** exportar geometria como OBJ (a confirmar no módulo 9) e refinar materiais e luz no Blender. Perde-se a lógica de paredes e portas: no Blender é tudo malha.
2. **SketchUp para motor de render:** o Twinmotion tem **Direct Link** (sincronização com um clique) com SketchUp Pro, Archicad e Revit, e o Enscape roda dentro do próprio programa de origem. Você continua modelando lá e vê a mudança no render.
3. **Revit ou Archicad para SketchUp:** por IFC ou DWG. Ganha-se a liberdade de retocar; perde-se a atualização automática.
4. **Qualquer programa para FreeCAD ou Bonsai:** por IFC. Bom para abrir o modelo sem licença comercial e conferir o conteúdo.
5. **Revit e Archicad entre si:** por IFC. O artigo de e-zigurat, citado acima, adverte que há perda de dados entre eles.
6. **CAD (DWG) para modelagem:** importar a planta 2D como base e modelar por cima.

## Regras práticas para não perder trabalho

- **Decida o formato "mestre" do projeto.** Um programa guarda a verdade do modelo; os outros são cópias para tarefas específicas (render, impressão 3D).
- **Confira as unidades.** OBJ e FBX não carregam unidade de forma confiável: um modelo em metros pode chegar 100 vezes maior ou menor. Meça uma parede de referência depois de importar.
- **Teste com um modelo pequeno antes.** Exporte uma parede, uma porta e uma janela e veja o que chegou, antes de mandar a casa toda.
- **Exportar para malha é caminho de ida.** Se for a Blender, guarde sempre o arquivo original no programa de origem.
- **Materiais e texturas viajam separados.** Em OBJ, o material vai num arquivo auxiliar; guarde os arquivos de imagem juntos e verifique os caminhos.
- **IFC precisa de configuração.** Ajuste as opções de exportação (por exemplo, no SketchUp, tessellation ou body para geometria) e verifique o resultado.

## Resumo

- Cada programa tem formato nativo; para trocar, usa-se formato de intercâmbio, e o que não cabe nele se perde.
- DWG e DXF trocam desenho e geometria CAD; OBJ, FBX, glTF, DAE e STL trocam malha; IFC troca modelo BIM com classes e propriedades.
- Descer de BIM para malha perde inteligência; o caminho inverso não é automático.
- IFC é a ponte aberta do BIM, mas as exportações costumam perder informação: teste com um modelo pequeno.
- Motores de render em tempo real têm conexão direta (Direct Link) com SketchUp Pro, Archicad e Revit.

## Para aprofundar

- [ ] [IFC e Interoperabilidade em BIM](https://www.e-zigurat.com/pt-br/blog/ifc-e-interoperabilidade-bim/) (e-zigurat): por que o IFC existe e o alerta sobre perda de dados. Não cobre DWG nem OBJ.
- [ ] [Importar e exportar arquivos CAD no SketchUp](https://help.sketchup.com/en/sketchup/importing-and-exporting-cad-files) (SketchUp Help): lista oficial de formatos CAD e 3D de exportação.
- [ ] [Importar e exportar arquivos IFC no SketchUp](https://help.sketchup.com/en/importing-and-exporting-ifc-files) (SketchUp Help): versões de IFC e opções de exportação.
- [ ] [Video Guide: BlenderBim Addon for IFC Interoperability](https://www.youtube.com/watch?v=blj28Vc2G_I) (jbdtube, inglês): exemplo prático de IFC fora dos softwares comerciais, com o antigo nome do Bonsai.
- [ ] [Arquivos BIM: os principais formatos BIM](https://biblus.accasoftware.com/en/bim-files-the-main-bim-formats-for-design/) (BibLus, inglês): apoio textual; visto só no resumo de busca. Não encontrei vídeo em português sobre a diferença prática entre IFC, DWG e OBJ.

[Próxima aula: Árvore de decisão e plano de estudo](./06%20-%20Arvore%20de%20Decisao%20e%20Plano%20de%20Estudo.md)
