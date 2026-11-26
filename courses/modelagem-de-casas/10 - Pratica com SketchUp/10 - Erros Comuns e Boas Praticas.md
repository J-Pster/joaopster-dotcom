[Voltar ao módulo](./README.md)

# Aula 10: Erros comuns e boas práticas

*Pergunta que esta aula responde: por que o modelo "quebra" (faces que não fecham, faces azuis, arquivo lento) e que hábitos de organização evitam isso?*

## Por que os erros seguem um padrão

Na aula 1 você viu que o SketchUp é uma malha de arestas e faces, sem "objetos" que se protejam sozinhos. Todos os problemas típicos são consequências de três fatos dessa malha: (1) uma face só existe se as arestas formam um contorno **fechado e plano**; (2) toda face tem **dois lados** e o programa não impede você de deixar o lado errado para fora; (3) **tudo que você desenha fica no arquivo**, inclusive o que você já não usa. Entender esses três fatos permite diagnosticar quase qualquer falha em vez de decorar receitas.

## Erro 1: faces invertidas

**O que é.** Cada face tem uma **frente** e um **verso**. Por padrão, a frente aparece em branco e o verso em azul (cores padrão do estilo). A regra oficial: orientar todas as faces de modo que a **frente aponte para fora** e o verso para dentro ([Orienting Faces](https://help.sketchup.com/en/3d-warehouse/orienting-faces), verificado em setembro de 2026).

**Por que importa.** A ajuda oficial diz que orientação inconsistente pode causar falhas de cor entre faces vizinhas e problemas no software de renderização (e ainda na impressão 3D). Em um render, um verso exposto pode sair escuro, sem material ou com a textura errada. Materiais também se aplicam ao lado da frente ou ao lado do verso; pintar o lado errado gera "manchas" que aparecem só em certos ângulos.

**Como nasce.** Uma face desenhada no chão pode ter a frente para baixo; ao empurrar para cima, o verso fica visível de fora. Planta importada de CAD também traz faces com orientação aleatória (a importação tem a opção de orientar faces, aula 6).

**Como achar.** Mude para um **estilo monocromático** (a ajuda recomenda): frente e verso ficam visualmente distintos, e tudo que é "do lado errado" aparece azulado. Orbite pelo modelo procurando azul do lado de fora.

**Como corrigir.** No menu de contexto (clique direito):

- **Reverse Faces** para faces isoladas (selecione cada uma).
- **Orient Faces** para faces **adjacentes**: selecione o grupo (ou as faces) e o SketchUp deixa todas consistentes entre si. Depois confira a olho se o lado de fora ficou branco; se o conjunto inteiro ficou invertido, use Reverse Faces nele.
- Se você suavizou arestas (Soften/Smooth), ative a **Hidden Geometry** no menu de contexto para ver e corrigir cada superfície.

**Regra do modelador.** Ao empurrar uma face para criar volume, confira depois; corrija a orientação antes de aplicar materiais.

Vídeos: [Faces invertidas no SketchUp](https://www.youtube.com/watch?v=XlB2NJxvou8) (Expert Cursos), [Aula 22 Sketchup - Faces e Problemas com Faces Invertidas](https://www.youtube.com/watch?v=RY_m7Ko04wU) (Izabel de Lima | Xdeai).

## Erro 2: geometria suja

"Suja" quer dizer: arestas soltas, duplicadas, fora do plano, pequenos vãos, faces sobrepostas. Sintomas e causas:

### A face não se forma

Uma face nasce só quando as arestas formam um laço fechado **e coplanar**. Duas causas explicam quase todos os casos:

1. **Lacuna**: as extremidades não se encontram (mesmo por frações de milímetro). A ajuda de Follow Me dá o mesmo conselho para extrusões que falham: dê zoom e procure lacunas entre as linhas; use a Line para ligar.
2. **Arestas fora do plano**: uma aresta ligeiramente levantada torna o contorno não plano; não há face possível. Uma técnica descrita pela comunidade: desenhe uma **diagonal** atravessando a área; se a face aparece, o contorno não é plano. Outra: no painel Styles, coloque a cor das arestas em "por eixo"; uma aresta que não é vermelha, verde ou azul é suspeita (dicas de fóruns e sites de terceiros; confira na sua versão).

**Como evitar.** Desenhe travando eixos (aula 4), digite medidas e use inferência de extremidade em vez de "quase" clicar no ponto. Ajustar a precisão e o snap de comprimento (Model Info > Units) ajuda.

### Push/Pull não funciona

- **Face dentro de grupo ou componente fechado:** a causa oficial é essa; a ajuda ([Push Pull Is Not Working](https://help.sketchup.com/en/troubleshooting/why-push-pull-not-working)) manda dar **duplo clique** no grupo ou componente para editar, e então selecionar a superfície.
- **Furo que não atravessa:** a face oposta tem linhas dividindo-a; apague-as (aula 3).

### Faces sobrepostas que piscam

Duas faces no **mesmo plano**, uma sobre a outra (por exemplo, a face de um grupo e a de outro), disputam o mesmo lugar na tela e piscam ao orbitar (o nome técnico é *z-fighting*). Corrija afastando uma delas por uma distância mínima, apagando a duplicada, ou revendo se você precisa das duas.

### Linhas soltas e duplicadas

Restos de guia, linhas que sobraram depois de apagar uma face e arestas dentro de faces coplanares. Use o **Outliner** (aula 5) para ver o que está solto (fora de grupos) e o Select com caixa de seleção para achar arestas isoladas.

### Distância da origem

A ajuda de importação de CAD aconselha posicionar a geometria **perto da origem** para evitar problemas de desempenho. Isso vale para o seu modelo: não deixe partes do desenho a quilômetros da origem.

### Modelagem excessiva

Curvas com muitos segmentos, detalhes minúsculos e móveis complexos do Warehouse pesam. Para um estudo de casa, modele para o **propósito**: um vaso decorativo não precisa de 50 mil faces.

## Erro 3: arquivo pesado e lento

A ajuda oficial ([Cleaning Up Bloated Models](https://help.sketchup.com/en/cleaning-bloated-models), [Improving Performance](https://help.sketchup.com/en/sketchup/improving-performance)) explica o **modelo inchado**: mesmo depois de apagar entidades, "sua definição fica no modelo". Causas:

| Causa | Como reduzir |
|---|---|
| Materiais e texturas não usados (principalmente de alta resolução) | reusar materiais; reduzir a resolução das imagens; preferir JPEG a TIFF |
| Componentes importados (3D Warehouse ou outros) | procurar versão com menos arestas; usar poucos |
| Geometria complexa | usar o mínimo de polígonos necessário (menos segmentos em curvas) |
| Textos 3D com fontes complexas | fontes simples sem serifa |
| Efeitos visuais ativos (sombras, neblina, texturas) | desligar durante a modelagem; usar um estilo simples para trabalhar e outro para apresentar |
| Muita geometria visível | ocultar com tags o que não precisa |
| Duplicação de geometria | usar componentes em vez de cópias |
| Guias em excesso | apagar |

**Limpeza:** **Window > Model Info > Statistics > Purge Unused** remove componentes, estilos e materiais não usados. A ajuda informa que a partir do SketchUp 2025 o programa pergunta se você deseja purgar ao salvar manualmente, opção configurável em Preferences > General. Na interface em português, procure o equivalente (algumas fontes brasileiras citam "Janela > Informações do Modelo > Estatísticas > Eliminar os não usados"; confira o nome exato na sua versão). Salve antes de purgar: em arquivos grandes, o programa pode travar durante a limpeza.

No **SketchUp for Web**, a ajuda menciona configurações de otimização de memória em App Settings.

## Erros de organização (aula 5, resumidos)

| Sintoma | Causa provável | Correção |
|---|---|---|
| Ao mover a laje, a parede "rasga" | geometria solta e colada | agrupar cada sistema (Paredes, Piso, Telhado) |
| Mudei uma janela e todas mudaram | as janelas são instâncias do mesmo componente | usar **Make Unique** na que deve ser diferente |
| Escondi uma tag e faces continuam visíveis ou somem estranhamente | tag atribuída a faces soltas | tags só em grupos e componentes |
| Perdi um objeto no modelo | não sei onde está | Outliner |
| Cortes não preenchem | geometria não forma laço fechado no grupo | corrigir faces (Erro 1 e 2) |
| Planta importada gigante ou minúscula | unidade errada no import | reimportar com a unidade certa (aula 6) |
| Janela não abre o vão | Cut Opening desligado, ou contexto errado (parede em outro grupo) | ativar Cut Opening; abrir o grupo antes de posicionar |
| Follow Me falha | perfil não perpendicular ou lacuna no caminho | corrigir perfil e fechar lacunas |

## Boas práticas: um checklist para usar sempre

**Antes de desenhar**

1. Template métrico e unidades (aula 2).
2. Tags criadas com prefixo numérico.
3. Uma planta de referência, importada ou desenhada, em um grupo bloqueado.

**Enquanto desenha**

4. Trave eixos e digite medidas (aula 4). Se a linha não está colorida, não desenhe.
5. Agrupe cedo: quando uma peça ficar pronta, agrupe antes de começar outra.
6. Componente para tudo que se repete; grupo para peças únicas.
7. Nomeie tudo: grupos, componentes, materiais, tags e cenas.
8. Apague guias quando terminarem de servir.
9. Meça com a fita métrica para conferir dimensões-chave.

**Ao terminar cada fase**

10. Salve **com número de versão** (`Casa_v01.skp`, `Casa_v02.skp`): o SketchUp não guarda histórico reeditável, então versões são o seu desfazer de longo prazo. No Free o modelo fica no Trimble Connect; baixe cópias locais.
11. Verifique faces (estilo monocromático), Outliner (nada solto) e Purge Unused.
12. Estilo simples para trabalhar; estilo de apresentação só ao final.

**Antes de exportar (aula 8)**

13. Escala e unidades confirmadas; faces para fora; tags certas visíveis.

**Nível de detalhe.** Um hobby não precisa de parafusos. Decida o nível de detalhe pelo que você quer ver ou decidir: volumes e aberturas para estudo de forma; mobiliário para estudo de layout; materiais para estudo de acabamento. Cada detalhe extra tem custo em peso e em manutenção.

## Resumo

- Faces têm frente e verso; a frente deve apontar para fora. Ache faces invertidas com estilo monocromático e corrija com Reverse Faces (isoladas) ou Orient Faces (adjacentes).
- Face que não se forma quase sempre é lacuna ou aresta fora do plano; Push/Pull que não age é grupo fechado (duplo clique) ou linhas na face oposta.
- Arquivo pesado é modelo inchado: purgue (Model Info > Statistics > Purge Unused), reuse materiais e componentes, use estilos simples e oculte com tags.
- Agrupe cedo, use componentes para o que se repete, tags só em grupos e componentes, nomeie tudo, apague guias.
- Salve versões numeradas e verifique faces, Outliner e purga antes de exportar.

## Para aprofundar

- [ ] [Faces invertidas no SketchUp](https://www.youtube.com/watch?v=XlB2NJxvou8) (Expert Cursos): corrigindo faces invertidas.
- [ ] [Aula 22 Sketchup - Faces e Problemas com Faces Invertidas - Curso Sketchup Completo](https://www.youtube.com/watch?v=RY_m7Ko04wU) (Izabel de Lima | Xdeai): faces e problemas com faces invertidas.
- [ ] [Etiquetas e estrutura - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=2hclGtpK-u4) (SketchUp Brasil): organização com tags.
- [ ] [Groups vs Components vs Tags in SketchUp | Complete Beginner Guide 2026](https://www.youtube.com/watch?v=a7CAuO73rNE) (SketchUp Core, inglês): organização básica.
- [ ] [10 Dicas para o SketchUp não travar e ficar muito mais rápido!](https://blog.totalcad.com.br/10-dicas-para-o-sketchup-nao-travar-e-ficar-muito-mais-rapido/) (totalCAD, artigo em português, não aberto por mim): desempenho.
- [ ] Documentação oficial: [Orienting Faces](https://help.sketchup.com/en/3d-warehouse/orienting-faces), [Cleaning Up Bloated Models](https://help.sketchup.com/en/cleaning-bloated-models), [Improving Performance](https://help.sketchup.com/en/sketchup/improving-performance), [Push Pull Is Not Working](https://help.sketchup.com/en/troubleshooting/why-push-pull-not-working).

Nota de lacuna: não encontrei um vídeo bom sobre "geometria suja" e "arquivo pesado" que eu pudesse confirmar por título; use os textos oficiais acima.

Quando estiver confiante, siga para o [Módulo 11: Prática com BIM, Revit e Archicad](../11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md).
