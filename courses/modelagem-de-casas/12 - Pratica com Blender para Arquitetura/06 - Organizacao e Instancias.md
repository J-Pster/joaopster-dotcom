[Voltar ao módulo](./README.md)

# Aula 6: Organização e instâncias

*Pergunta que esta aula responde: como manter um modelo com dezenas de objetos legível e editável, e como repetir uma peça (uma janela, um pilar) para que mudar uma altere todas?*

## Por que essa aula existe

Uma casa simples já tem paredes, pisos, telhado, pilares, onze cortadores de vãos e referências. Sem organização, você perde tempo procurando, apaga o que não devia e não consegue esconder os cortadores no render. No módulo 7 (aula 5, [Hierarquia e organização do modelo](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/05%20-%20Hierarquia%20e%20Organizacao%20do%20Modelo.md)) você aprendeu quatro ferramentas conceituais: **grupos**, **componentes**, **tags** e **nomes**, e que confundir hierarquia com visibilidade dá problema. No Blender elas têm outros nomes:

| Conceito (módulo 7) | No SketchUp (módulo 10) | No Blender |
|---|---|---|
| Nomes | Nome de grupo/componente | Nome do **objeto** (`F2`) e da **coleção** |
| Tags (visibilidade, categoria) | Tags | **Coleções** (e seus interruptores) |
| Grupo (agrupar para mover junto) | Grupo | **Parentesco** (`Ctrl-P`) ou **Join** (`Ctrl-J`); ou coleção, se for só organização |
| Componente (repetição vinculada) | Componente | **Cópia vinculada** (`Alt-D`) ou **instância de coleção** |

## Coleções: pastas e interruptores

Uma **coleção** organiza objetos sem criar relação de transformação entre eles (Manual, Collections): não é parentesco. Mover uma coleção não move seus objetos; ela serve para **organizar, esconder, bloquear e excluir do render**. Um objeto pode estar em mais de uma coleção.

**Criar e mover:**

- `M` (Move to Collection): move os objetos selecionados para uma coleção existente, uma nova (`+ New Collection`) ou para a raiz (Scene Collection).
- `Shift-M` (Link to Collection): **liga** o objeto a mais uma coleção sem tirá-lo da atual.
- `Ctrl-G`: cria uma coleção nova com a seleção (Manual). Também dá para clicar com o botão direito no Outliner.

**Interruptores** (no Outliner, ao lado de cada coleção, e em `Properties > Collection`):

- **Selectable:** liga ou desliga a seleção dos objetos da coleção. O Manual cita o caso de "imagens de referência": desligue para não mover a planta sem querer.
- **Show In > Renders:** inclui ou não a coleção no render. Use para **cortadores e referências**.
- **Include** (por View Layer): tira a coleção de tudo (viewport, Outliner, render).
- **Hide in Viewport** (olho): esconde na vista sem afetar o render. `H` esconde os objetos selecionados; `Alt-H` reexibe; `Ctrl-H` esconde as outras coleções.

Como **estrutura para uma casa** (a do exercício da aula 8):

| Coleção | Conteúdo | Interruptores |
|---|---|---|
| `00_Referencia` | imagem da planta | não selecionável; fora do render |
| `01_Estrutura` | paredes externas, paredes internas, piso, pilares | normal |
| `02_Cobertura` | telhado | pode ser escondida para inspecionar o interior |
| `03_Escada` (se houver) | degraus e apoio | normal |
| `90_Cortes_Externas`, `91_Cortes_Internas` | cortadores de vãos (P1, J1...) | **fora do render**; exibidos como Wire |

**Cuidado:** as coleções de cortadores usadas por um Boolean com `Operand Type = Collection` devem ficar **no mesmo nível**, sem aninhamento, para não haver dúvida sobre quais objetos entram. (Coloquei irmãs, e o teste do Blender 5.2.2 confirmou o recorte dos onze vãos.)

## Nomes

Nome bom é um mapa. Convenção proposta:

- **Prefixo numérico** na coleção para ordenar (`01_`, `02_`).
- **Nome descritivo, sem acento nem espaço**, no objeto: `Paredes_Externas`, `Piso`, `Telhado`. Sem acento evita problema em exportação e em outros sistemas (aula 7).
- **O código do quadro de esquadrias** nos cortadores: `P1`, `P2`... `J1`... O mesmo código da planta do módulo 3.
- Versão no **nome do arquivo**: `casa96_v01.blend`, `casa96_v02.blend` (ver "Salvar" abaixo).

`F2` renomeia o objeto ativo. O Blender acrescenta `.001`, `.002` a nomes repetidos: sinal de duplicata acidental. `Ctrl-F2` (Batch Rename) renomeia muitos de uma vez.

O Outliner tem **campo de busca**: com nomes coerentes, achar `J3` numa cena grande é digitar três letras.

## Parentesco (`Ctrl-P`): use com parcimônia

Fazer um objeto **filho** de outro (`Ctrl-P > Object`) faz o filho acompanhar o pai ao mover, girar ou escalar. Serve para acessórios que andam juntos (um móvel e suas gavetas). Em modelagem de casa costuma ser problema: a escala do pai afeta os filhos, e o Manual avisa que aplicar transformações em objetos com filhos também aplica aos descendentes. Prefira **coleção** para organizar e **Join** (`Ctrl-J`) para virar um objeto só (o Join não transfere modificadores nem parentesco, Manual).

## Cópias vinculadas: o "componente" do Blender

**Duplicar** (`Shift-D`) cria uma cópia **independente**: nova malha. **Duplicar vinculado** (`Alt-D`, `Object > Duplicate Linked`) cria um novo objeto que **compartilha a mesma malha** (Manual, Duplicate Linked):

- Se você editar a malha de um (Edit Mode), **todas as cópias vinculadas mudam**. Serve para pilares, janelas iguais, degraus, cadeiras.
- **Location, Rotation e Scale continuam individuais**: mover ou girar uma cópia não afeta as outras.
- Materiais também são vinculados por padrão.
- Para **desvincular** uma cópia, `Object > Relations > Make Single User > Object & Data`, ou clicar no número ao lado do nome na aba Object Data. Aplicar escala (`Ctrl-A`) em malha compartilhada também exige tornar de usuário único (aula 2).

O Manual dá o exemplo de uma mesa: modele uma perna e faça três cópias vinculadas; ao alterar a malha, as quatro pernas mudam. No exercício, o segundo pilar da varanda é uma cópia vinculada do primeiro. Conta a favor do desempenho: a malha é armazenada uma vez.

## Instâncias de coleção

Uma cópia vinculada é de **um objeto**. Para repetir **um conjunto** (uma janela com caixilho, vidro e peitoril, cada um objeto), coloque as peças numa coleção e use **`Add > Collection Instance`**. Cada instância é um objeto leve que **mostra o conteúdo da coleção** (Manual). Mudou a coleção, todas as instâncias mudam. O campo **Instance Offset** da coleção define o ponto de encaixe (a origem da instância). `Object > Apply > Make Instances Real` transforma cada instância em objetos reais, para editar individualmente.

Na prática: modele a janela padrão numa coleção `Janela_120x120`, com a origem no centro do peitoril, e instancie nos vãos.

## Bibliotecas: `Link` e `Append`

Objetos, materiais e coleções podem vir de **outros arquivos `.blend`** (Manual, Link & Append):

- **Append** (`File > Append`): **copia** os dados para o seu arquivo; sem vínculo posterior.
- **Link** (`File > Link`): **referencia** o arquivo original. Alterou lá, atualiza aqui na próxima abertura ou em `Reload`. Objetos ligados não são editáveis (nem a posição); para posicionar, ligue como **coleção instanciada** (`Instance Collections`).

Uma biblioteca própria de janelas, portas e móveis com medidas conferidas é uma ótima prática: você modela uma vez, confere, e reaproveita em todas as casas.

## Salvar e versionar

- `Ctrl-S` salva; `Shift-Ctrl-S` salva como. `File > Save Incremental` grava uma nova versão numerada (verificado no menu do 5.2.2).
- A preferência **Save Versions** (`Edit > Preferences > Save & Load`) mantém o arquivo anterior com extensão `.blend1` ao sobrescrever.
- **Limpeza:** `File > Clean Up > Purge Unused Data...` remove dados órfãos (malhas sem objeto, materiais sem uso). Faça antes de enviar o arquivo.
- Guarde o **`.blend` original** mesmo depois de exportar (aula 7): exportar é caminho de ida, como o módulo 8 (aula 5) diz.

## Resumo

- **Coleções** organizam, escondem, bloqueiam e excluem do render (`M`, `Shift-M`, `Ctrl-G`). Interruptores: **Selectable**, **Show In > Renders**, **Include**, olho.
- **Nomes**: prefixos numéricos, sem acento, códigos do quadro de esquadrias (`P1`, `J1`); `F2` e `Ctrl-F2`.
- **Parentesco** (`Ctrl-P`) só quando as peças precisam andar juntas; para organizar, use coleção.
- **`Alt-D`** cria cópia vinculada: mesma malha, transformações independentes. **Instância de coleção** repete conjuntos. **Link/Append** trazem peças de outros arquivos.
- Versione o arquivo (`casa96_v01.blend`), use `Save Incremental` e `Purge Unused Data`.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados.

- [ ] [How To Use Linked Duplicates In Blender](https://www.youtube.com/watch?v=Qxw4RwbEDiM) (Guided Resolution, inglês, 2025): `Alt-D` vs `Shift-D`, edição de uma cópia refletindo em todas.
- [ ] [Learn to Link Objects in Blender!](https://www.youtube.com/watch?v=rsyGwLY_-Ts) (BlenderVitals, inglês): vídeo curto: `Alt-D`, economia de recursos e como usar `Make Single User`.
- [ ] [UNLIMITED Object Copies in Blender? How to Use Collection Instances](https://www.youtube.com/watch?v=HfMldZ2xYzY) (The CG Essentials, inglês): instâncias de coleção.
- [ ] [How to Use Blender's Outliner and Collections (Tutorial)](https://www.youtube.com/watch?v=ph6QUXNq5aE) (Ryan King Art, inglês): coleções, mover com `M`, parentesco, busca, filtros e interruptores do Outliner. É de 2021; os interruptores são os mesmos.
- [ ] [Create stairs quickly and easily in Blender 4.2, no add-ons, no complicated math](https://www.youtube.com/watch?v=3HrJfaCbGs8) (Expose Academy, inglês): aplicação de cópias vinculadas (`Alt-D`) e de `Shift-R` (repetir) na escada.
- [ ] [Manual do Blender 5.2 LTS: Collections](https://docs.blender.org/manual/en/latest/scene_layout/collections/collections.html), [Duplicate Linked](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/duplicate_linked.html) e [Link & Append](https://docs.blender.org/manual/en/latest/files/linked_libraries/link_append.html) (Blender Foundation): a fonte oficial dos interruptores, do `Alt-D` e das bibliotecas.

[Próxima aula: Complementos, formatos e ponte para o render](./07%20-%20Addons%20Formatos%20e%20Ponte%20para%20o%20Render.md)
