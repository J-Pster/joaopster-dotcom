[Voltar ao módulo](./README.md)

# Aula 9: Extrair plantas, cortes, fachadas, quantitativos e pranchas

*Pergunta que esta aula responde: o que o meu programa consegue gerar de documentação a partir do modelo, e como produzo à mão ou em planilha o que ele não gera?*

> **Aviso obrigatório.** Plantas, cortes e quantitativos do modelo de hobby são **material de estudo e de conversa**. Não são projeto legal nem executivo, e os quantitativos **não são orçamento**. A prefeitura só aceita projeto assinado por responsável técnico (arquiteto com RRT, engenheiro com ART).

## Por que extrair do modelo

Num modelo 3D, planta, corte e fachada são **consequência**: cortes horizontais, cortes verticais e vistas ortogonais da mesma geometria ([módulo 3, aula 9](../03%20-%20Desenho%20Tecnico%20Arquitetonico/09%20-%20Do%20Desenho%202D%20ao%20Modelo%203D.md) e [módulo 7, aula 8](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/08%20-%20Da%20Planta%20ao%20Modelo.md)). Se as peças saem do mesmo modelo, elas **não se contradizem**. E se saírem diferentes da planta 2D da aula 3, você achou um erro de modelagem. Por isso esta etapa é também a **prova numérica final** do modelo. Além disso, o profissional da aula 11 lê melhor um conjunto organizado de peças do que um arquivo 3D solto.

## O que cada programa consegue gerar

A tabela vem do que os módulos práticos verificaram. Onde o módulo não confirmou, está escrito.

| Peça | Sweet Home 3D | SketchUp | BIM (Revit, Archicad, FreeCAD BIM, Bonsai) | Blender |
|---|---|---|---|---|
| Planta baixa cotada | sim: cotas, textos e polilinhas; imprime em PDF com papel e escala ([módulo 9, aula 7](../09%20-%20Pratica%20com%20Sweet%20Home%203D/07%20-%20Cotas%20Exportacao%20Plugins%20e%20Limites.md)) | plano de seção horizontal em vista superior; cotas na cena; pranchas formais exigem LayOut (Pro) ([módulo 10, aulas 7 e 8](../10%20-%20Pratica%20com%20SketchUp/07%20-%20Materiais%20Warehouse%20Cenas%20e%20Cortes.md)) | sim, a vista se atualiza sozinha; pranchas e tabelas ([módulo 11](../11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md)) | não é a ferramenta para isso |
| Cortes | não tem cortes técnicos (módulo 9) | planos de seção, salvos em cenas | sim, gerados do modelo | possível por câmera ortogonal e planos de corte; sem cotas técnicas (não confirmado em detalhe) |
| Fachadas (elevações) | vista 3D ou captura; não é elevação técnica | vista ortogonal (câmera paralela) em cena | sim | câmera ortogonal |
| Quantitativos | sem quantitativos de obra (módulo 9) | sem tabela nativa nos módulos deste curso; extensões só no Pro e Studio (módulo 10) | sim, tabelas geradas do modelo | não é a ferramenta |
| Prancha com carimbo | monta-se fora (PDF, editor) | LayOut (Pro) ou montagem externa | sim, prancha nativa (módulo 11) | monta-se fora |
| Exportação para outros | OBJ | SKP, PNG e STL no Free; DWG, OBJ, FBX, IFC e glTF em planos pagos (módulo 10) | IFC (módulo 11); outros formatos, confira no seu programa | glTF, OBJ, FBX, entre outros (confira no seu Blender) |

A regra prática: **BIM** gera a documentação quase inteira; **SketchUp** gera vistas e cortes bons, com prancha e tabelas dependendo do plano; **Sweet Home 3D** gera planta cotada e imagens; **Blender** serve à imagem. Onde o programa não gera, você usa **a planilha e o editor de PDF**, como abaixo.

## Método universal: documentação do modelo em cinco peças

### 1. Planta baixa

- Corte horizontal a cerca de **1,50 m** (módulo 3, aula 5), com paredes cortadas em linha grossa, esquadrias, móveis e cotas.
- Cotas: parciais, totais e de esquadrias; nome e **área livre** de cada ambiente; indicação do norte; escala gráfica.
- **Conferência:** compare com a planta 2D da aula 3. Toda diferença é erro de um dos dois.

### 2. Cortes

- Ao menos **dois cortes** (um longitudinal e um transversal), passando pela escada e por uma área molhada, para mostrar pé-direito, laje, altura de peitoril, beiral e inclinação do telhado (módulo 3, aula 6).
- **Conferência:** o piso a piso, o pé-direito e a cumeeira medidos no corte batem com a aula 4.

### 3. Fachadas

- Quatro fachadas (frente, fundos, laterais) em vista ortogonal, com níveis, esquadrias e materiais indicados.
- **Conferência:** a altura total não passa do gabarito.

### 4. Quantitativos

Quantidade é **contagem e medição** do modelo. Se o programa não gera tabelas, você mede no modelo (ferramenta de área e de distância) e calcula em planilha.

| Item | Como calcular | Exemplo |
|---|---|---|
| Área construída | soma das áreas por pavimento (cuidado: a regra do município define o que entra: varanda, garagem) | 89,62 m² livres do exemplo do módulo 9 |
| Projeção da casa | área em planta da edificação | comparar com a projeção máxima |
| Área de piso por ambiente | quadro de áreas da aula 3 | soma |
| Área de parede | `perímetro x pé-direito - área de vãos` | perímetro 40 m x 2,70 m = 108 m², menos vãos de 12 m² = 96 m² |
| Área real do telhado | `projeção / cos(ângulo)` | projeção 80 m² com 30% (16,7 graus): `80 / 0,958 = 83,5 m²` |
| Esquadrias | contagem do quadro | 8 janelas, 6 portas |
| Área permeável | soma das áreas do lote não impermeabilizadas | comparar com o mínimo da aula 1 |
| Volume de laje | `área x espessura` | 60 m² x 0,20 m = 12 m³ |

Cada linha é uma **estimativa** de geometria. Ela não inclui perdas, sobras, cortes, revestimentos, instalações nem mão de obra. **Nunca use como orçamento.** Para orçamento real, o profissional levanta quantitativos do projeto executivo. O módulo 11 mostra como BIM gera tabelas do modelo; se você usa Revit, há vídeos na [aula 3 do módulo 11](../11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md), mas com a limitação de licença do módulo 8.

### 5. Prancha

Organize as peças em folhas com **carimbo** (módulo 3, aula 7): nome do projeto, autor (você, como "estudo de hobby"), escala, data, número da folha e **campo de revisão**. Adote escala coerente por peça (1:50 costuma servir para planta de casa; confira que cabe na folha). Se não houver LayOut ou prancha nativa, monte em um editor de PDF ou em uma apresentação, com a escala verificada por uma cota conhecida. Marque cada prancha como **"estudo, não é projeto legal"**.

Conjunto sugerido:

| Prancha | Conteúdo |
|---|---|
| 01 | Implantação e situação (croqui da aula 2 e terreno) |
| 02 | Planta baixa cotada e quadro de áreas |
| 03 | Cortes |
| 04 | Fachadas |
| 05 | Cobertura e quadro de esquadrias |
| 06 | Imagens 3D da aula 8 |

## Entregável da aula 9

- Conjunto de seis pranchas (ou peças equivalentes) marcado como estudo.
- Planilha de quantitativos com a fórmula de cada linha e a nota "estimativa, não orçamento".
- Relatório de consistência: diferenças entre modelo, planta 2D e quadros, com a causa e a correção.
- Lista do que o seu programa **não** gerou e como foi suprido.

## Checklist da aula 9

- [ ] Planta, cortes e fachadas saem da mesma versão do modelo, sem mobiliário desnecessário.
- [ ] A planta gerada coincide com a planta 2D da aula 3.
- [ ] Os cortes confirmam pé-direito, piso a piso, altura das esquadrias e inclinação do telhado.
- [ ] As fachadas respeitam o gabarito.
- [ ] Os quantitativos foram calculados com fórmulas visíveis e marcados como estimativa.
- [ ] As pranchas têm carimbo, escala verificada e o aviso de estudo.

## Resumo

- No modelo, planta, corte e fachada são consequência; se divergem da planta 2D, há erro de modelagem.
- BIM gera quase toda a documentação; SketchUp, vistas e cortes; Sweet Home 3D, planta cotada e imagens; Blender, imagens.
- O que o programa não gera, faz-se em planilha (quantitativos) e em editor de PDF (pranchas).
- Quantitativos de hobby são estimativas geométricas, nunca orçamento.
- Toda prancha leva carimbo, escala verificada e a marca de estudo.

[Próxima aula: Validar e revisar o modelo](./10%20-%20Validando%20o%20Modelo%20Checklist%20de%20Consistencia.md)
