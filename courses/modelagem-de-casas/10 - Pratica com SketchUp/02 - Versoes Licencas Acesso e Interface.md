[Voltar ao módulo](./README.md)

# Aula 2: Versões, licenças, acesso e interface

*Pergunta que esta aula responde: qual versão do SketchUp eu posso usar de graça para modelar minha casa, o que ela deixa de fazer, e como é a tela onde vou trabalhar?*

## Por que a licença importa antes de qualquer botão

O SketchUp não é um programa único: é uma família de planos que compartilham o mesmo modelador, mas liberam recursos diferentes. Se você aprender um fluxo que depende de um recurso pago sem saber, perde tempo. Como no módulo 08 você comparou licenças, aqui vai só o que interessa para um hobista modelando a própria casa.

**Verificado em setembro de 2026.** Fontes: [página de planos da Trimble](https://sketchup.trimble.com/en/plans-and-pricing), [página do SketchUp Free](https://sketchup.trimble.com/en/plans-and-pricing/sketchup-free), [ajuda oficial sobre o Free](https://help.sketchup.com/en/admin/sketchup-free) e [ajuda oficial sobre importar/exportar](https://help.sketchup.com/en/sketchup/using-sketchup-data-other-modeling-programs-or-tools). Preços e regras mudam com frequência; confirme na página oficial antes de assinar.

## Os planos

| Plano | Onde roda | Uso | Preço (verificado em set/2026) |
|---|---|---|---|
| **SketchUp Free** | navegador (SketchUp for Web) | pessoal, não comercial | grátis |
| **SketchUp Go** | web e iPad | profissional/comercial | US$ 10,75 por mês, cobrado anualmente |
| **SketchUp Pro** | desktop (Windows e Mac), web, iPad | profissional | US$ 33,25 por mês, cobrado anualmente |
| **SketchUp Studio** | Windows (desktop) | profissional avançado | US$ 71,58 por mês, cobrado anualmente |

Observações sobre a tabela:

- Preços da página oficial em dólar. O preço em reais e impostos podem diferir e **não foi confirmado**. Alguns sites de terceiros citam valores anuais ligeiramente diferentes (por exemplo, US$ 399 por ano para o Pro e US$ 819 para o Studio); a página oficial lista o valor mensal com cobrança anual, então prefira essa fonte.
- Existem ainda planos especializados (Pro Scan, Pro Civil Contractor, Pro Advanced Workflows) e planos educacionais (estudante e educador, US$ 55 por usuário, segundo a mesma página). Só entram se você tiver vínculo educacional; não avaliei as regras de elegibilidade.
- **Não existe edição desktop gratuita permanente** para hobby (o antigo SketchUp Make foi descontinuado). Não foi encontrada nenhuma na página oficial.

### O que o Free inclui e o que não inclui

Confirmado nas páginas oficiais:

- Roda 100% no navegador, exige uma conta **Trimble ID** e conexão com a internet ([Getting Started with SketchUp for Web](https://help.sketchup.com/en/sketchup-web/getting-started-sketchup-web)).
- Vem com **10 GB de armazenamento** na nuvem (Trimble Connect) e acesso ao **3D Warehouse**.
- "SketchUp Free is not for commercial use" (uso não comercial). Modelar a sua própria casa como hobby é uso pessoal; ler os termos de uso atuais antes de começar é prudente, especialmente se um dia o modelo for usado para um serviço pago.
- **Sem suporte** da SketchUp para usuários Free, e créditos de IA só em plano pago.
- **Importa** SKP, JPG e PNG. **Exporta** SKP, PNG e STL (página do plano Free e tabela da ajuda oficial de importação e exportação).

Consequência prática, **não oficial mas consistente**: como o Free só importa imagens JPG e PNG (não DWG), o fluxo "importar planta como imagem e traçar por cima" funciona no Free, e o fluxo "importar planta em DWG" exige um plano pago. No fórum oficial da comunidade, usuários relatam que o painel de importação do Free mostra a mensagem "Upgrade to import the following file types" e que JPG mesmo assim funciona ([discussão](https://forums.sketchup.com/t/what-formats-are-available-for-import-on-free-web-version/344597)); trate o painel do seu app como a fonte final.

**Extensões** (plug-ins): a página de planos da Trimble lista o Go sem extensões e o Pro com mais de 1000 extensões. Sobre o Free, um moderador da comunidade oficial afirma que as versões web não usam extensões ([discussão](https://forums.sketchup.com/t/extensions-for-sketchup-for-web/108593)). Trate como "não disponível no Free e no Go".

**LayOut** (documentação 2D em pranchas): vem com o Pro; a página de planos lista o Go sem LayOut. No Free, não.

### Tabela: o que cada tarefa deste módulo exige

| Tarefa | Free | Go | Pro/Studio |
|---|---|---|---|
| Desenhar, empurrar/puxar, modelar (aulas 3 a 6) | sim | sim | sim |
| Grupos, componentes, tags | sim | sim | sim |
| Importar planta como imagem (JPG/PNG) | sim | sim | sim |
| Importar planta em DWG/DXF | não | sim | sim |
| 3D Warehouse | sim (alguns recursos só em plano pago) | sim | sim |
| Terreno por geolocalização (Add Location, contexto do local) | localização sim; contexto e malha de terreno exigem Go | sim | sim |
| Sandbox (terreno a partir de curvas de nível) | ver aula 8 | ver aula 8 | sim (desktop) |
| Extensões | não | não | sim |
| LayOut | não | não | sim |
| Exportar OBJ, FBX, DWG, IFC, glTF | não | ver nota | sim |
| Exportar imagem PNG e STL | sim | sim | sim |

Nota sobre a exportação no Go: a tabela da ajuda oficial de importação e exportação lista OBJ, FBX e COLLADA como Go/Pro/Studio e IFC, glTF e USDZ como Pro/Studio. Outra página da ajuda descreve a exportação de FBX como "In SketchUp Pro". Há inconsistência entre as páginas; confira no seu plano.

## Que caminho seguir

1. **Comece no Free.** Para aprender a lógica (aulas 1 a 5) e fazer o exercício guiado da casa de 2 quartos (aula 9), o Free basta se você desenhar a planta direto com medidas ou importar uma imagem.
2. Se você já tem a planta em **DWG**, ou precisa de **extensões**, **LayOut**, ou de **exportar em formatos como OBJ, FBX ou IFC** para o módulo 13 (renderização) ou o módulo 11 (BIM), avalie o **teste gratuito de 7 dias do Pro** ([página do teste](https://sketchup.trimble.com/en/products/sketchup-pro/trial)) e planeje esse período para quando tiver a planta e o modelo prontos, para não gastar os 7 dias aprendendo o básico.
3. Só assine se, depois disso, o hobby justificar. Go é mais barato mas não tem extensões nem LayOut.

## Instalação e acesso

- **Free e Go (web):** abra o SketchUp for Web no navegador, entre com o Trimble ID e crie um modelo novo. Não há instalação. A ajuda recomenda aceleração de hardware ativada no navegador. O caminho exato até o botão de entrar muda; use a página oficial de planos e escolha o Free.
- **Pro e Studio (desktop):** baixe o instalador na conta Trimble. A versão atual é o **SketchUp 2026**, suportada junto com 2024 e 2025 (verificado em setembro de 2026 na [página de requisitos](https://help.sketchup.com/en/sketchup/system-requirements)). No Windows 11: 8 GB de RAM no mínimo, 6 GB de disco, placa de vídeo dedicada (a recomendação cita 8 GB de VRAM) e um mouse de 3 botões com roda. Internet é necessária na instalação e na autorização da assinatura. O motor gráfico novo exige DirectX 12; sem isso o programa usa o motor clássico.

Use **mouse de 3 botões**: a roda serve para dar zoom e, pressionada, para orbitar (aula 3). Em notebook sem mouse é muito mais lento.

## A interface

### SketchUp for Web

Segundo a [ajuda oficial](https://help.sketchup.com/en/sketchup-web/sketchup-web-tools):

- **Barra de menu no topo:** Menu Principal, nome do modelo, SketchUp AI, Desfazer, Refazer e o estado de salvamento.
- **Barra de ferramentas à esquerda:** dividida em **Main Toolbar** (ferramentas mais usadas) e **Expanded Toolset** (todo o resto). Ao usar uma ferramenta do conjunto expandido, ela aparece em um "slot" recente da barra principal. Um botão **Edit** permite rearranjar e adicionar ferramentas. Há um campo **Search SketchUp** para achar comandos pelo nome.
- **Painéis à direita:** materiais, estilos, tags, 3D Warehouse, cenas etc.
- **Caixa de medidas** no canto inferior, que mostra e aceita valores (aula 4).
- **Barra de colaboração:** foto do perfil, mostrar/ocultar cursores, compartilhar.

A Main Toolbar contém, com os atalhos de teclado que a ajuda lista: Select (barra de espaço), Eraser (E), Paint Bucket (B), Pencil (L), Rectangle (R), Push/Pull (P), Move (M), Rotate (Q), Scale (S), Tape Measure (T), Orbit (O) e Pan (H). O rótulo "Pencil (L)" é o que a página lista; na ajuda geral do SketchUp a ferramenta de linhas se chama **Line** e usa a mesma tecla L. Confira o nome exato na sua versão.

O Expanded Toolset traz, entre outros: Lasso, Sample Material, Circle (C), 2-Point Arc (A), Arc, Polygon, 3-Point Arc, Pie, Freehand, Rotated Rectangle, 3D Text, Offset (F), Follow Me, Flip, as ferramentas sólidas, Dimension, Protractor, Axes, Text Label, Create Section, Tag, Zoom (Z), Zoom Extents, Zoom Window, Position Camera, Look Around, Walk e AI Render. A própria página observa que não informa quais ferramentas dependem do plano.

### SketchUp desktop (Pro e Studio)

Barras de ferramentas configuráveis, menus (Edit, View, Camera, Draw, Tools, Window, Extensions), a **bandeja padrão** (Default Tray) com painéis como Tags, Materials, Styles, Scenes, Components, e a **caixa de medidas** no canto inferior direito. A ajuda oficial explica que o painel Tags fica em "Window > Tags" no macOS e na bandeja padrão no Windows. Os menus aparecem traduzidos se o programa estiver em português; o texto deste módulo usa os nomes em inglês da documentação oficial. Confira a tradução na sua instalação.

### Unidades antes de desenhar

Modele em **metros ou milímetros**, formato decimal. No desktop, o caminho é Window > Model Info > Units (confirmado na [ajuda](https://help.sketchup.com/en/managing-units-measurement)): você escolhe o formato (Architectural, Decimal, Engineering ou Fractional), a unidade de comprimento e a precisão. Modelos novos vêm de um **template** (modelo inicial) que já define unidades; escolha um template métrico. A ajuda diz que a versão web segue a mesma estrutura de Model Info; confira o caminho na sua tela. Errar a unidade só se percebe quando você digita "3" e recebe 3 polegadas.

## Salvamento e nuvem

No Free, os modelos ficam no Trimble Connect (10 GB). Baixe cópias `.skp` no seu computador de tempos em tempos, principalmente porque o Free depende de conta e de conexão. O formato `.skp` é o arquivo nativo do SketchUp.

## Resumo

- Plano recomendado para começar: SketchUp Free (web, pessoal, grátis); importa só SKP, JPG e PNG e exporta SKP, PNG e STL.
- Extensões, LayOut e importação de DWG dependem de plano pago (Go tem DWG; extensões e LayOut são do Pro/Studio). Pro tem teste de 7 dias.
- Preços oficiais de setembro de 2026: Go US$ 10,75/mês, Pro US$ 33,25/mês, Studio US$ 71,58/mês (cobrança anual, em dólar); valores em reais não confirmados.
- No desktop, a versão atual é SketchUp 2026; no Windows 11 são necessários 8 GB de RAM e placa de vídeo dedicada.
- A interface web tem Main Toolbar e Expanded Toolset à esquerda e painéis à direita; configure unidades métricas antes de desenhar.

## Para aprofundar

- [ ] [Como usar o SKETCHUP FREE | ONLINE | GRÁTIS em 2024 e 2025](https://www.youtube.com/watch?v=PhK5U-cgItw) (Professor Nisenbaum): acesso e primeiros passos no SketchUp Free, em português.
- [ ] [COMO USAR O SKETCHUP ONLINE GRATUITO | Tutorial SketchUp para Iniciantes](https://www.youtube.com/watch?v=zYzPskc4_mY) (Davidson Felipe | Arquitetura na Prática): visão geral do SketchUp online para iniciantes.
- [ ] [SketchUp Free - Como usar o SketchUp Online sem precisar instalar nada!](https://www.youtube.com/watch?v=1TAoIsNey3Q) (3DM): outro caminho de acesso ao SketchUp online.
- [ ] [SketchUp Free - Acesse o SketchUp na Web](https://www.youtube.com/watch?v=0hCJiO3wkQQ) (SketchUp Brasil, canal oficial): como abrir a versão web; pode estar desatualizado quanto ao nome de planos.
- [ ] [Interface do SketchUp para Web](https://www.youtube.com/watch?v=cbZjT1loEko) (SketchUp Brasil): tour pela interface web, do canal oficial.
- [ ] [#011 - SketchUp Online Grátis: Aprenda a Usar. Sem Instalação](https://www.youtube.com/watch?v=tWRfpWzHSGc) (Studio Baroli): mais uma visão do SketchUp online gratuito.
- [ ] [Mini Curso Sketchup Free On Line - Aula 01 | Login, Acesso e Introdução](https://www.youtube.com/watch?v=zAE3I3po7cA) (Gabriel Daudt): login, acesso e introdução ao Free.

Nota: vídeos sobre "o que o Free permite" envelhecem rápido; confie na documentação e na tela do seu app. Título e canal foram confirmados; o conteúdo não foi assistido.

[Próxima aula: Ferramentas essenciais](./03%20-%20Ferramentas%20Essenciais.md)
