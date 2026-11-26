[Voltar ao módulo](./README.md)

# Aula 8: Terreno, extensões, exportação e ponte para render

*Pergunta que esta aula responde: como coloco a casa sobre um terreno com desnível, o que as extensões acrescentam (e em que plano), e em que formato levo o modelo para os módulos seguintes?*

Verificado em setembro de 2026 nas páginas de ajuda oficiais citadas. Disponibilidade por plano muda; confira na sua conta.

## Terreno

### Por que o terreno importa

Uma casa modelada sobre um plano perfeitamente horizontal esconde as decisões mais caras de uma obra: cortes e aterros (quanto de terra tirar e quanto colocar), muros de arrimo, rampas de acesso. O módulo 06 mostrou como a legislação e o desnível do lote limitam o projeto. Modelar o terreno no SketchUp permite ver a casa no lugar.

### Como o SketchUp representa um terreno: a TIN

O SketchUp representa terrenos como uma **TIN** (Triangulated Irregular Network, rede irregular de triângulos): uma malha de triângulos cujos vértices estão em alturas diferentes. Segundo a [ajuda oficial](https://help.sketchup.com/en/sketchup/creating-terrain-scratch), há dois métodos principais com as ferramentas **Sandbox**:

1. **A partir de curvas de nível (From Contours):** você importa ou desenha as curvas de nível, posiciona cada uma na altura correta com o Move, seleciona todas (com o Lasso) e ativa a ferramenta. O SketchUp gera uma TIN agrupada, editável como qualquer grupo. Curvas de nível vêm do **levantamento planialtimétrico** do terreno (módulo 06).
2. **Do zero (From Scratch):** cria uma grade plana retangular de dimensões e espaçamento que você define (na tela ou na caixa de medidas), que depois você deforma. Outras ferramentas de Sandbox mencionadas em tutoriais e na ajuda de esculpir terreno incluem **Smoove** (esculpir com suavização) e **Drape** (aplicar uma imagem sobre o terreno).

No desktop, as ferramentas de Sandbox ficam em **View > Toolbars** ou **Draw > Sandbox**, segundo a ajuda. Se não aparecem, algumas fontes relatam que é preciso ativar (confira o nome exato na sua versão). Na versão web, relatos de usuários na comunidade indicam que as ferramentas de Sandbox não aparecem no Free; não encontrei confirmação oficial. Trate como "não disponível no Free" até verificar.

### Terreno por localização (Add Location)

A ferramenta **Add Location** (menu principal ou painel Shadows na web) posiciona o modelo no mapa. Segundo a [ajuda](https://help.sketchup.com/en/sketchup-web/how-use-add-location):

- **Para todos os usuários web** (inclusive Free): buscar por endereço, posicionar o modelo, ajustar a orientação em relação ao Norte e clicar em **Set Geolocation**.
- **Com Go ou superior:** **Import Context**, com **Flat Site** (mapa aplicado a um plano) ou **Elevated Site** (malha de terreno com elevação), textura de satélite ou mapa de ruas em várias resoluções e **prédios 3D** da região.

Cuidados: a elevação vem de bases de dados gerais e pode ter resolução baixa; para a sua casa, o levantamento do terreno é mais confiável. Não use o modelo importado para decidir cortes e aterros reais.

O tipo de arquivo **DEM** (modelo digital de elevação) também está listado como importável em planos pagos, segundo a tabela da ajuda de importação e exportação.

### Terreno simples no Free (sem Sandbox)

Você pode aproximar um terreno inclinado com o que já sabe:

1. Desenhe o retângulo do lote (por exemplo, 12,00 x 20,00 m) e agrupe.
2. Para um declive uniforme de 10% ao longo de 12,00 m, o desnível é 12,00 x 0,10 = 1,20 m. Entre no grupo, selecione uma das arestas de 20,00 m e use o Move, travando no azul, digitando `1.2m`. A face fica inclinada (as arestas opostas são paralelas, então a face continua plana).
3. Para um **patamar** onde a casa se apoia, desenhe um retângulo na superfície inclinada e ajuste com o Move/Push/Pull, ou reserve o patamar como grupo separado.

Para terrenos irregulares reais (várias inclinações), o desenho manual perde precisão; nesse caso, o teste gratuito do Pro ou o Go (Add Location com contexto) servem.

Vídeos: [TUTORIAL SKETCHUP: Como fazer a modelagem completa de um terreno (CURVAS DE NÍVEL + AJUSTES)](https://www.youtube.com/watch?v=vt78rHoiWoc) (Archiviza 3D); [Curvas de nível - Desenvolvimento SketchUp](https://www.youtube.com/watch?v=-euRNvsmbC8) (SketchUp Brasil); [Curso SketchUp 2017 - Aula 17: Modelando Terrenos no SketchUp](https://www.youtube.com/watch?v=qp1Cje5plp0) (Chahoud Cursos, de 2017); [Implantar casa em terreno com curvas de nível no SketchUp](https://www.youtube.com/watch?v=kX3SOGjHCiI) (CURSOS 3D).

## Extensões

### Por que existem

O SketchUp é aberto: desenvolvedores externos escrevem código (em Ruby) que acrescenta ferramentas. As **extensões** ampliam o programa: ferramentas de telhado, escada, limpeza de geometria, parede paramétrica, renderizadores. Muito do que uma casa exige, sem elas, se faz manualmente.

### O que está disponível em cada plano

- **Pro e Studio (desktop):** acesso completo. A página de planos da Trimble lista "mais de 1000 extensões" no Pro.
- **Go:** a página lista o plano sem extensões.
- **Free:** um moderador da comunidade oficial afirma que as versões web não aceitam extensões. Não encontrei declaração oficial recente; trate como "não".

### Como instalar (desktop)

Conforme a [ajuda do Extension Warehouse](https://help.sketchup.com/en/extension-warehouse/adding-extensions-sketchup):

1. Dentro do SketchUp: **Extensions > Extension Warehouse** (ou pelo ícone), navegue e clique **Install** na página da extensão. Também é possível acessar pelo navegador em extensions.sketchup.com.
2. Para arquivos baixados (.rbz): abra o **Extension Manager** (menu Extensions), clique em **Install Extension** e escolha o arquivo.
3. Gerencie (ativar, desativar, atualizar, desinstalar) no Extension Manager; o SketchUp avisa quando há atualização.

Cuidados: extensões executam código no seu computador; instale só do Extension Warehouse ou de desenvolvedores conhecidos; confirme compatibilidade com a sua versão do SketchUp; algumas são pagas.

Exemplos que sites de terceiros citam para arquitetura (não verificados por mim na loja oficial): CleanUp³ (limpeza de geometria importada) e Profile Builder (elementos paramétricos como paredes, pisos e corrimãos). Antes de instalar qualquer uma, leia a descrição e as avaliações na loja.

Vídeos: [6 plugins essenciais para SketchUp (Como baixar e usar)](https://www.youtube.com/watch?v=jfnWaPy2NSo) (Expert Cursos); [Sketchup | Os melhores plugins que uso no Sketchup](https://www.youtube.com/watch?v=vo0DkgVUBn4) (Arquiteto Leandro Amaral).

### LayOut (documentação 2D)

O **LayOut** vem com o Pro e serve para montar pranchas (folhas com escala, cotas e legendas) a partir do modelo. Foi visto no módulo 03 como desenho técnico; aqui ele automatiza uma prancha a partir de cenas do SketchUp. O Free e o Go não incluem (aula 2). Vídeos: [PRANCHA COM PLANTA BAIXA NO SKETCHUP | LAYOUT # 01/04](https://www.youtube.com/watch?v=xLzJYG4RwMY) (CtrlArq Cursos).

## Exportação

### Por que exportar

O modelo do SketchUp (.skp) só abre no SketchUp. Para render em outro programa (módulo 13), edição em Blender (módulo 12) ou troca com BIM (módulo 11), você converte para um formato de troca. Um **formato de troca** é um arquivo que outros programas leem; cada um guarda coisas diferentes (geometria, materiais, cenas, dados BIM).

### Imagens 2D

**File > Export > 2D Graphic** (desktop). Segundo a [ajuda](https://help.sketchup.com/en/sketchup/importing-and-exporting-image-files): imagens **raster** (JPEG, PNG, TIFF, BMP) e **vetoriais** (PDF, EPS). Opções: **Use View Size** (tamanho da vista, 1:1), largura e altura em pixels, **anti-aliasing** (suaviza serrilhado), **fundo transparente** (PNG/TIFF) e compressão do JPEG. Exportação vetorial não leva recursos que dependem de raster (texturas, sombras, sombreamento suave, fundos, transparência); se você precisa desses elementos em PDF, a ajuda sugere imprimir para PDF em vez de exportar.

No Free você exporta PNG (página do plano). O caminho exato no app web pode diferir do menu do desktop; confira.

### Modelo 3D: o que cada formato leva e quem exporta

Tabela baseada na [ajuda oficial de importação e exportação](https://help.sketchup.com/en/sketchup/using-sketchup-data-other-modeling-programs-or-tools) e nas páginas específicas (verificado em setembro de 2026):

| Formato | Para que serve | Plano (segundo a ajuda) |
|---|---|---|
| **SKP** | arquivo nativo | Free e todos |
| **PNG** (imagem) e **STL** (impressão 3D) | apresentação e prototipagem | Free e todos |
| **OBJ** | geometria e materiais; muito aceito em render e Blender | Go, Pro, Studio (a página de FBX diz Pro; confira) |
| **FBX** | geometria, materiais; usado em motores e visualização | Go, Pro, Studio (mesma ressalva) |
| **glTF / GLB** | formato binário com materiais PBR | Pro e Studio |
| **IFC** (2x3 e 4) | dados BIM, com classificações | Pro e Studio |
| **DWG / DXF** | troca com CAD (2D e 3D) | Go, Pro, Studio |
| **COLLADA (.dae), KMZ, 3DS** | outros formatos de troca | Go, Pro, Studio |
| **USDZ** | realidade aumentada em dispositivos Apple | Pro e Studio |

Como exportar 3D (desktop): **File > Export > 3D Model**, escolher o tipo. Opções documentadas do FBX (a ajuda lista): exportar só a seleção atual, triangular todas as faces, exportar faces de dois lados, separar faces desconectadas, exportar mapas de textura, trocar YZ (eixo Y para cima, pois o padrão é Z para cima) e escolher a unidade. O glTF é exportado como **GLB** (binário) com materiais PBR. O IFC exporta a **classificação** dos elementos; a ajuda avisa que algumas entidades do SketchUp podem não exportar e recomenda **verificar o arquivo** depois.

### Exportar DWG 2D com escala

Para não perder a escala, use **vista padrão com projeção paralela** antes de exportar 2D (a ajuda de CAD insiste). Um corte com plano de seção pode ser exportado como DWG.

### Checklist antes de exportar

1. Faces todas orientadas com a frente para fora (aula 10). Faces invertidas viram superfícies escuras ou invisíveis no render.
2. Unidades e escala confirmadas com a fita métrica.
3. Guias apagadas, tags necessárias visíveis, geometria oculta que você não quer exportar apagada ou desativada.
4. **Purge Unused** (aula 10).
5. Texturas com tamanho razoável.
6. Salve o `.skp` original em separado.

## Ponte para os próximos módulos

- **Módulo 11 (BIM: Revit e Archicad):** o IFC do SketchUp leva classificações, mas o SketchUp não cria "paredes BIM" com camadas e dados; você teria de classificar os elementos. O SketchUp Studio traz um importador de Revit (página de planos). Para começar em BIM, geralmente é mais eficiente modelar nativamente no programa BIM e usar o SketchUp como estudo de volumetria.
- **Módulo 12 (Blender):** OBJ, FBX ou glTF (planos pagos). Antes, faça a limpeza da aula 10.
- **Módulo 13 (Materiais, iluminação e renderização):** o plano Studio oferece renderização fotorrealista (página de planos); sites de terceiros nomeiam V-Ray e Twinmotion, que não confirmei na página oficial. Se você usar um renderizador externo, exporte no formato que ele aceita e reaplique materiais lá.
- **Estratégia para o Free:** modele e organize no SketchUp Free; quando precisar exportar para OBJ/FBX/DWG/IFC, use o teste de 7 dias do Pro (ou o Go, se OBJ/FBX bastarem) com o modelo já pronto.

Não encontrei um vídeo confiável específico sobre exportação do SketchUp que eu pudesse confirmar; a documentação oficial acima é a melhor referência.

## Resumo

- Terreno no SketchUp é uma TIN: por curvas de nível (From Contours) ou do zero (From Scratch), com Sandbox no desktop; Add Location geolocaliza no Free e traz contexto de terreno a partir do Go.
- Para um terreno simples no Free, mova uma aresta do lote na vertical: declive % = desnível / distância x 100.
- Extensões (Pro e Studio, desktop) instalam pelo Extension Warehouse ou por arquivo .rbz no Extension Manager; Free e Go não as aceitam; LayOut é do Pro.
- Free exporta SKP, PNG e STL; OBJ, FBX, DWG, IFC e glTF exigem planos pagos (com alguma inconsistência documentada para OBJ/FBX no Go).
- Antes de exportar: faces orientadas, escala confirmada, limpeza (Purge Unused) e guias removidas.

## Para aprofundar

- [ ] [TUTORIAL SKETCHUP: Como fazer a modelagem completa de um terreno (CURVAS DE NÍVEL + AJUSTES)](https://www.youtube.com/watch?v=vt78rHoiWoc) (Archiviza 3D): terreno completo a partir de curvas de nível.
- [ ] [Curvas de nível - Desenvolvimento SketchUp](https://www.youtube.com/watch?v=-euRNvsmbC8) (SketchUp Brasil): canal oficial.
- [ ] [Curso SketchUp 2017 - Aula 17: Modelando Terrenos no SketchUp](https://www.youtube.com/watch?v=qp1Cje5plp0) (Chahoud Cursos): terreno com Sandbox; de 2017, interface pode ter mudado.
- [ ] [Implantar casa em terreno com curvas de nível no SketchUp](https://www.youtube.com/watch?v=kX3SOGjHCiI) (CURSOS 3D): implantação da casa no terreno.
- [ ] [6 plugins essenciais para SketchUp (Como baixar e usar)](https://www.youtube.com/watch?v=jfnWaPy2NSo) (Expert Cursos): mostra a instalação antes da escolha.
- [ ] [Sketchup | Os melhores plugins que uso no Sketchup](https://www.youtube.com/watch?v=vo0DkgVUBn4) (Arquiteto Leandro Amaral): plug-ins de um arquiteto.
- [ ] [PRANCHA COM PLANTA BAIXA NO SKETCHUP | LAYOUT # 01/04](https://www.youtube.com/watch?v=xLzJYG4RwMY) (CtrlArq Cursos): documentação 2D no LayOut (Pro).
- [ ] Documentação oficial: [Creating 3D Terrain](https://help.sketchup.com/en/sketchup/creating-terrain-scratch), [How to Use Add Location](https://help.sketchup.com/en/sketchup-web/how-use-add-location), [Adding Extensions to SketchUp](https://help.sketchup.com/en/extension-warehouse/adding-extensions-sketchup), [Working with GLTF Files](https://help.sketchup.com/en/sketchup/working-gltf-files), [Exporting FBX Files](https://help.sketchup.com/en/sketchup/exporting-fbx-files).

Nota: vídeos não assistidos; título e canal confirmados. Avisos: terreno, cortes e aterros e implantação reais dependem de levantamento e responsável técnico habilitado.

[Próxima aula: Exercício guiado, casa de 2 quartos](./09%20-%20Exercicio%20Guiado%20Casa%20de%202%20Quartos.md)
