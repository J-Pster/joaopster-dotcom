[Voltar ao módulo](./README.md)

# Aula 9: Boas práticas de modelagem

*Pergunta que esta aula responde: quais hábitos mantêm um modelo leve, correto e editável, e por que cada um se apoia em algo que você já viu neste módulo?*

## Por que isso existe

Um modelo que "parece certo" na tela pode estar cheio de problemas invisíveis: faces duplicadas, buracos, objetos soltos, malha desnecessariamente pesada. Eles aparecem tarde, quando o arquivo trava, o render sai errado ou a booleana falha. As boas práticas são a **prevenção** desses custos. Todas derivam de conceitos das aulas anteriores; aqui elas viram lista de verificação.

## 1. Modele como se constrói

Segue a lógica da obra (aula 4 e módulo 4): estrutura, paredes, lajes, aberturas, cobertura, acabamentos, cada etapa em seu grupo e sua tag.

- **Por quê:** o modelo reproduz relações reais (a laje apoia na parede, o beiral sai do telhado) e erros de encaixe aparecem enquanto modela.
- **Como:** paredes e lajes com espessura real; nada "flutuando" ou "encostado só visualmente"; peças que na obra são separadas, separadas no modelo.
- **Contra-exemplo:** desenhar a fachada como um plano com textura de janela. Serve para uma imagem fixa, não para um modelo que gera cortes e ajustes.

## 2. Poucos polígonos: só o detalhe que responde a uma pergunta

Cada face custa memória, tempo de exibição e de render (aula 2). A regra é: **detalhe só onde ele será visto ou medido**.

- **Curvas com o número mínimo de segmentos** que pareça suave na distância em que será visto. Um círculo de 24 lados em SketchUp (padrão) costuma bastar em uma coluna vista de longe; 12 pode servir para um detalhe pequeno; 48 só para primeiro plano.
- **Não modele o que não existe na pergunta:** ferragens de esquadria que só se veriam a 5 cm da câmera, tubulação oculta dentro da parede em uma maquete de visualização, armadura de aço em um modelo de hobby.
- **Cuidado com modelos baixados** (mobiliário, vegetação de bibliotecas online): costumam ter muitas faces, e um único sofá detalhado pode pesar mais do que a casa inteira. Prefira versões simples e reduza texturas grandes. Vídeos sobre "poly count" ajudam a calibrar o que é pesado.
- **LOD adequado à fase** (aula 6): em estudo volumétrico, LOD 100 a 200; em modelo final de hobby, no máximo 300.

## 3. Sem geometria duplicada ou solta

- **Duplicatas:** duas paredes idênticas empilhadas no mesmo lugar (frequente ao copiar e colar por engano) dobram o peso e brigam em luzes e cortes (aparece como "pisca-pisca" no render, z-fighting). Também falsificam quantitativos.
- **Faces internas:** ao colar dois volumes, sobra uma face de contato dentro do bloco. Se a intenção era um volume só, use união (booleana) ou apague-a.
- **Arestas soltas e pontos órfãos:** lixo que impede o objeto de ser reconhecido como sólido (aula 2).
- **Como caçar:** ative a exibição de geometria oculta, faça seleção pela caixa e observe o contador de entidades; no SketchUp use o **Entity Info** e o botão de sólido, ou extensões como o Solid Inspector (aparece em resumos de busca); no Blender, selecione geometria não manifold. Compare o número de faces com o esperado.

## 4. Faces orientadas e sólidos fechados

Herdado da aula 2: lado frontal para fora, sem furos. Regra de conferência antes de exportar ou renderizar: gire o modelo e procure a cor de "verso" (azul no SketchUp) do lado de fora; use o Entity Info para ver se objetos importantes são reconhecidos como sólidos.

## 5. Componentes para o que se repete

Herdado da aula 5: uma janela, uma porta, um pilar típico, uma cadeira, sempre componente (instância de uma definição). Além de facilitar a edição, **reduz o arquivo**, porque a geometria é guardada uma vez.

## 6. Organização, nomes e camadas desde o primeiro dia

Herdado da aula 5: hierarquia por pavimento e sistema, tags de visibilidade poucas, nomes que descrevem. Um modelo organizado permite esconder o telhado, isolar a estrutura, achar uma peça e, mais tarde, alimentar quantitativos.

## 7. Precisão e origem sob controle

Herdado da aula 1: unidade fixa; modelo perto da origem; eixo principal alinhado; nada de detalhes menores do que a precisão razoável; um objeto de referência de medida conhecida no início.

## 8. Limpeza periódica

Ao longo do trabalho o arquivo acumula "lixo": componentes que já não estão na cena, materiais e estilos que ninguém usa, camadas vazias.

- **SketchUp:** o recurso **Purge Unused** (Eliminar não usados), na janela Model Info (Statistics) ou no Outliner, remove componentes, materiais, estilos e tags não usados; a ideia é usar depois de deletar objetos, porque deletar da cena não apaga a definição da memória do arquivo. Há vídeos em português sobre isso na seção Para aprofundar.
- **Blender:** existe o purge de dados órfãos (Orphan Data).
- **BIM:** o equivalente é remover famílias e tipos não usados (Purge Unused no Revit).
- **Texturas:** reduza resolução de imagens de materiais (uma textura de 8K num piso é exagero).

## 9. Versões e backups

- Salve **versões numeradas** (`Casa_v01`, `Casa_v02`), pelo menos ao fim de cada sessão, e mantenha o nativo (aula 7).
- Antes de operações arriscadas (booleana grande, importação de arquivo pesado, mudança de origem), faça uma cópia.
- Mantenha uma pasta de **referências** (plantas, fotos, medidas) separada do modelo.

## 10. Trabalhe em partes

Separar o modelo em arquivos ou partes ocultáveis quando ele engordar: um arquivo para o terreno, outro para a casa, outro para o mobiliário; ou, se o programa permitir, referências externas ou vínculos (em BIM, vincular modelos). Para o hobby, muitas vezes basta esconder por tag o que não está sendo trabalhado.

## Lista de verificação rápida (antes de fechar cada sessão)

1. Todo objeto novo está em grupo ou componente, com nome e tag?
2. Repetições são componentes?
3. Há geometria solta na raiz do modelo?
4. Faces frontais para fora? Volumes que deveriam ser sólidos são sólidos?
5. Existe algo duplicado ou sobreposto?
6. Curvas com segmentos além do necessário? Texturas grandes demais?
7. Purge feito? Versão salva?
8. A unidade e a origem continuam as combinadas?

## Resumo

- Modele como se constrói: paredes e lajes com espessura real, em camadas coerentes com a obra.
- Use poucos polígonos: detalhe só onde será visto ou medido, curvas com poucos segmentos, cuidado com modelos baixados.
- Evite duplicatas, faces internas, arestas soltas e faces invertidas: elas quebram sólidos, booleanas, quantitativos e renders.
- Componentes para o repetido; hierarquia, tags e nomes desde o início; unidade e origem fixas.
- Limpe (purge), salve versões e mantenha o arquivo nativo.

## Para aprofundar

- [ ] [Truques para Otimizar o Modelo no SketchUp | Parte 1- Usando Purge Corretamente](https://www.youtube.com/watch?v=oGMpTdBpLYU) (MasterTuts): purge no SketchUp, em português.
- [ ] [Aula 02 C - Como dar Purge no SketchUp? Limpar o arquivo.](https://www.youtube.com/watch?v=Kw3c7tNYxIk) (Henrique Barsa): limpar o arquivo, em português.
- [ ] [Plugins para limpar o projeto - Modelos Saudáveis no SketchUp](https://www.youtube.com/watch?v=u4h-D_mEO8M) (SketchUp Brasil): extensões para limpar geometria e reduzir texturas (pelo título).
- [ ] [Como Reduzir o Tamanho dos Arquivos no SketchUp](https://www.youtube.com/watch?v=6nUAjlwV4hQ) (TotalCad Brasil): reduzir o peso do arquivo.
- [ ] [Poly Count Explained: How Many Polygons Should Your Model Have?](https://www.youtube.com/watch?v=EyK1F0BAl5Q) (Grant Abbitt, inglês): noção de quantidade de polígonos (título e canal confirmados).
- [ ] [HIGH vs MID vs LOW Poly Modeling (Which One is for you?!)](https://www.youtube.com/watch?v=-udAYOcF320) (Royal Skies, inglês): compara níveis de poligonagem.
- [ ] [Modeling Complex 3D Shapes with the Solid Tools](https://help.sketchup.com/en/sketchup/modeling-complex-3d-shapes-solid-tools) (Ajuda do SketchUp, inglês): o que é um sólido e como checar.

[Voltar ao módulo](./README.md)
