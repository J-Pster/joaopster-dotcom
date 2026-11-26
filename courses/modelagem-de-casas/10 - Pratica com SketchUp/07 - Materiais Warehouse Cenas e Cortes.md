[Voltar ao módulo](./README.md)

# Aula 7: Materiais, 3D Warehouse, cenas, estilos e cortes

*Pergunta que esta aula responde: como dou aparência ao modelo, trago móveis e esquadrias prontos, salvo pontos de vista e vejo o interior da casa por um corte?*

## Por que esta aula vem depois da geometria

Cor, textura, mobília e pontos de vista não alteram a forma da casa. Se você aplicar materiais antes de a geometria estar limpa, precisará refazer. E se você baixar móveis pesados antes de organizar o modelo, o arquivo cresce sem controle. Depois de grupos, componentes e tags (aula 5), você pode enfeitar e apresentar sem medo.

## Materiais

**O que é.** Um **material** no SketchUp é uma combinação de cor e/ou textura (uma imagem repetida como ladrilho) aplicada às faces. Uma face tem um **lado da frente** e um **lado de trás** (aula 10); o material se aplica a cada lado separadamente.

**Como aplicar.** Segundo a ajuda oficial ([Applying Materials](https://help.sketchup.com/en/sketchup/applying-materials), verificado em setembro de 2026): abra o painel **Materials** ou ative a ferramenta **Paint Bucket** (atalho B), escolha o material na aba de seleção; se você pré-selecionou faces ou arestas, o material vai para a seleção; se não, clique na face. O SketchUp traz materiais padrão com cores e texturas fotográficas. A ferramenta **Sample Material** (no conjunto expandido da web) copia o material de uma face já pintada.

**Textura personalizada.** Você pode importar uma imagem como material (por exemplo, uma foto de piso), como a ajuda de importação de imagens descreve. A textura repete em ladrilho; o tamanho da imagem em metros determina a escala aparente (um piso de porcelanato 60 x 60 cm deve parecer 60 x 60 cm, não 5 m). No SketchUp for Web, o painel Materials também trabalha com mapas PBR (materiais fisicamente baseados), conforme a [ajuda de visualização](https://help.sketchup.com/en/visualization-sketchup-web).

**Cuidados:**

- **Peso:** a ajuda de "modelos inchados" diz que materiais, principalmente de alta resolução, permanecem no arquivo mesmo depois que você deixa de usá-los e "podem deixar o modelo lento". Reuse materiais e texturas, reduza a resolução das imagens importadas e use JPEG em vez de TIFF ([Cleaning Up Bloated Models](https://help.sketchup.com/en/cleaning-bloated-models), [Improving Performance](https://help.sketchup.com/en/sketchup/improving-performance)).
- **Organização:** dê nomes claros aos materiais (ex.: `Reboco_Branco`, `Piso_Porcelanato_60`).
- **Módulo 13:** materiais deste módulo servem para visualização no SketchUp. Se você for renderizar com outro programa (módulo 13), ele pode reinterpretar materiais; não gaste horas refinando texturas aqui antes de escolher o programa de render.
- No plano Free, a ajuda oficial avisa que alguns recursos de visualização exigem assinatura; confira o que aparece no seu painel.

Vídeo: [SketchUp | Descubra o segredo de como aplicar texturas corretamente no SketchUp](https://www.youtube.com/watch?v=CjJ0Carsf9c) (MasterTuts).

## 3D Warehouse: móveis, portas, janelas e materiais prontos

**Por que existe.** Modelar um sofá, uma pia e uma janela do zero leva horas. O **3D Warehouse** é, segundo a ajuda, "um site de modelos 3D prontos e pesquisáveis que funciona integrado ao SketchUp". Contém modelos de fabricantes e de usuários.

**Como usar.**

- No SketchUp for Web, o 3D Warehouse aparece como painel na barra lateral direita. No desktop, é aberto a partir do painel Components ou do menu de arquivo/importação (o nome exato do caminho varia; confira). Digite o que procura, clique no modelo e **Download**, depois clique no modelo de trabalho para posicionar (a ajuda [Inserting Components](https://help.sketchup.com/en/sketchup/inserting-components)).
- Também é possível importar um arquivo de componente salvo: File > Import, escolher o arquivo e clicar no modelo para posicionar (o Move fica ativo).
- Acesso: incluído no Free (a ajuda diz que alguns recursos só valem com assinatura); Go e Pro têm acesso pleno.
- Também existe download de **materiais** do Warehouse.

**Cuidados (aqui mora o peso do arquivo):**

1. **Complexidade:** componentes do Warehouse variam muito em número de arestas e faces. A ajuda de limpeza diz que o peso do arquivo cresce com a complexidade do componente e recomenda procurar, para o mesmo tipo de móvel, opções com menos complexidade.
2. **Escala e unidades:** confira o tamanho real com a fita métrica. Um sofá de 2,00 m deve ter 2,00 m.
3. **Origem e orientação:** confira se o componente está no eixo correto; use "Set Component Axes" se precisar (aula 5).
4. **Lixo aninhado:** modelos baixados podem trazer tags, materiais e componentes extras; use Purge Unused (aula 10).
5. **Licença:** alguns modelos de fabricantes têm termos próprios. Para hobby, verifique na página do modelo antes de usar em algo público.
6. **Qualidade não é garantida:** é conteúdo de usuários. Confira antes de confiar.

**Regra prática:** baixe poucos e leves, coloque em uma tag "04_Mobiliario" (aula 5) e mantenha o resto do modelo limpo.

Vídeos: [Aula 08: Usando o 3D Warehouse [MINI CURSO DE SKETCHUP 2023]](https://www.youtube.com/watch?v=VTeDrIumLko) (Beatriz Luz) e [Sketchup | A melhor forma de usar o 3D Warehouse [ATUALIZE-SE]](https://www.youtube.com/watch?v=esgRyIz21Hg) (Arquiteto Leandro Amaral).

## Estilos

Um **estilo** é, pela ajuda oficial, "uma coleção de configurações específicas para arestas, faces e fundos" ([Styles in SketchUp for Web](https://help.sketchup.com/en/styles-sketchup-web)). Um estilo com arestas "à mão" sugere um trabalho em andamento; um estilo formal aproxima-se de uma imagem realista.

O painel Styles na web tem três abas: **Edit Style** (edições: arestas, faces, fundo, marca d'água, modelo), **In Model** (estilos do modelo) e **Browse** (categorias prontas: Assorted Styles, Color Sets, Default Styles, Photo Modeling, Sketchy Edges, Straight Lines). A ajuda avisa que alguns recursos do painel, como ajustes de oclusão de ambiente, só existem com assinatura.

**Dica de desempenho da ajuda oficial:** mantenha dois estilos, um **simples** para trabalhar (sem sombras, sem texturas pesadas, sem efeitos) e outro **de apresentação** para o final.

**Sombras.** Para sombras reais, o modelo precisa saber onde está e em que direção fica o Norte: use **Add Location** (menu principal ou painel Shadows, na web). Geolocalização básica está disponível para todos os usuários web; contexto do local (mapa, terreno, prédios vizinhos) exige assinatura Go ou superior, segundo a [ajuda](https://help.sketchup.com/en/sketchup-web/how-use-add-location). Sombras ajudam a entender a insolação, o tema do módulo 02 (conforto ambiental): com a data e a hora corretas, você vê onde o sol entra nas janelas.

## Cenas

**Por que existem.** Uma **cena** salva uma configuração de visualização para voltar a ela com um clique. Segundo a [ajuda oficial](https://help.sketchup.com/en/sketchup/creating-scenes), uma cena guarda: posição e campo de visão da câmera, visibilidade de geometria oculta e de tags, estilos e neblina, sombra (data e hora), planos de seção ativos, ambiente/posição do sol e visibilidade e localização dos eixos. As cenas aparecem como abas no topo da janela.

**Como criar (desktop).** Prepare a vista (câmera, estilo, sombras, corte, tags visíveis) e, no painel **Scenes**, clique em **Add Scene**. Em "Show Details" você renomeia e escolhe o que a cena guarda. Se alterar algo depois, **Update Scene**. Cenas podem ser incluídas em uma animação.

**Cenas úteis para uma casa:**

| Cena | O que guarda |
|---|---|
| 01 Fachada frontal | câmera frontal, tags de estrutura e cobertura visíveis, sombras ligadas |
| 02 Planta (topo) | projeção paralela, vista de topo, corte horizontal, tag do telhado oculta |
| 03 Corte longitudinal | vista lateral, plano de seção vertical |
| 04 Sala | câmera interna, telhado oculto, mobiliário visível |
| 05 Sem telhado | tag de cobertura desligada, para mostrar a planta |

Não encontrei confirmação na documentação oficial que abri de quais recursos de cenas ficam liberados no Free (a página de visualização web fala em recursos que exigem assinatura sem detalhar). Confira no seu painel. Vídeos em português: [Aula 20: Configurando Cenas e Estilos](https://www.youtube.com/watch?v=IZcubh8AY6c) (Beatriz Luz) e [Cenas - Parte 1 - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=P0Zy9nNBUDs) (SketchUp Brasil).

## Cortes: planos de seção

**Por que existem.** Um corte é a forma de ver dentro. Em arquitetura, a **planta baixa** é, na essência, um corte horizontal da casa em uma altura definida (módulo 03), e os **cortes** são cortes verticais. Um **plano de seção** faz isso no modelo sem apagar nada: ele oculta o que está de um lado do plano.

**Como usar** (ajuda [Creating and Using Section Planes](https://help.sketchup.com/en/sketchup/slicing-model-peer-inside)): ative a ferramenta **Section Plane** (na web, "Create Section" no conjunto expandido), clique em uma face para posicionar o plano, dê um nome. Para orientar, passe o mouse sobre faces do ângulo desejado ou use as setas do teclado para alinhar com os eixos (azul: para cima, vermelho: para a direita, verde: para a esquerda, ou paralelo à superfície). Você pode mover ou rotacionar o plano, **inverter** a direção do corte e alinhar a câmera a ele.

**Regras:**

- Você pode inserir vários planos de seção, mas **só um pode ser o corte ativo em cada contexto** (grupo ou componente). Se você precisa de dois cortes ao mesmo tempo, coloque as partes da casa em grupos diferentes.
- **Preenchimento de seção (Section Fill):** ativa-se no painel Styles; funciona para geometria que forma **laço fechado** dentro do seu grupo ou componente. Paredes com faces abertas ou invertidas (aula 10) impedem o preenchimento.
- **Criar grupo a partir do corte (Create Group from Slice):** converte a interseção em geometria que você pode mover.
- **Exportação:** o corte pode ser exportado como DWG e outros formatos (planos pagos; aula 8).
- **Planta a partir do corte:** coloque um plano de seção horizontal na altura usual de corte de planta (módulo 03), olhe de cima em projeção paralela e salve como cena "Planta".

Vídeos: [SketchUp Brasil, Plano de Seção - Parte 1](https://www.youtube.com/watch?v=p2QCcFD4gRY), [Como fazer corte no sketchup, usando section plane](https://www.youtube.com/watch?v=RZqGXaCvJ-w) (Amanda Goulart), [Como fazer corte no SketchUp](https://www.youtube.com/watch?v=ro-nNUUpcDM) (3DM).

## Resumo

- Materiais (cor e textura) se aplicam com o Paint Bucket (B) ao lado da frente e de trás das faces; materiais pesados e não usados incham o arquivo.
- O 3D Warehouse dá móveis e esquadrias prontos; confira escala, peso, origem e licença; use poucos modelos e leves.
- Estilos são conjuntos de configuração visual (arestas, faces, fundo); use um estilo simples para trabalhar e outro para apresentar.
- Cenas salvam câmera, estilo, sombra, tags e cortes; sombras reais dependem da localização (Add Location).
- Planos de seção cortam o modelo sem apagar geometria; um por contexto ativo; a planta baixa é um corte horizontal.

## Para aprofundar

- [ ] [SketchUp | Descubra o segredo de como aplicar texturas corretamente no SketchUp](https://www.youtube.com/watch?v=CjJ0Carsf9c) (MasterTuts): aplicação de texturas.
- [ ] [Aula 08: Usando o 3D Warehouse [MINI CURSO DE SKETCHUP 2023]](https://www.youtube.com/watch?v=VTeDrIumLko) (Beatriz Luz): o Warehouse em português.
- [ ] [Sketchup | A melhor forma de usar o 3D Warehouse [ATUALIZE-SE]](https://www.youtube.com/watch?v=esgRyIz21Hg) (Arquiteto Leandro Amaral): o título indica a melhor forma de usar o Warehouse.
- [ ] [Aula 20: Configurando Cenas e Estilos [MINI CURSO DE SKETCHUP 2023]](https://www.youtube.com/watch?v=IZcubh8AY6c) (Beatriz Luz): cenas e estilos.
- [ ] [Cenas - Parte 1 - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=P0Zy9nNBUDs) (SketchUp Brasil): cenas no canal oficial.
- [ ] [Plano de Seção - Parte 1 - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=p2QCcFD4gRY) (SketchUp Brasil): planos de seção no canal oficial.
- [ ] [Como fazer corte no sketchup, usando section plane](https://www.youtube.com/watch?v=RZqGXaCvJ-w) (Amanda Goulart): passo a passo de um corte.
- [ ] [Como fazer corte no SketchUp | Tutorial de como criar cortes no sketchup](https://www.youtube.com/watch?v=ro-nNUUpcDM) (3DM): outra demonstração de corte.
- [ ] Documentação oficial: [Applying Materials](https://help.sketchup.com/en/sketchup/applying-materials), [Inserting Components](https://help.sketchup.com/en/sketchup/inserting-components), [Creating Scenes](https://help.sketchup.com/en/sketchup/creating-scenes), [Creating and Using Section Planes](https://help.sketchup.com/en/sketchup/slicing-model-peer-inside).

Nota: vídeos não assistidos; título e canal confirmados.

[Próxima aula: Terreno, extensões, exportação e ponte para render](./08%20-%20Terreno%20Extensoes%20Exportacao%20e%20Ponte%20para%20Render.md)
