[Voltar ao módulo](./README.md)

# Aula 7: Mobiliário, materiais e vegetação

*Pergunta que esta aula responde: como preencher o modelo com móveis, acabamentos e plantas sem deixá-lo pesado, sem perder a escala real e sem esquecer que cada item tem consequência (circulação, permeabilidade, sombra)?*

## Por que esta etapa é de projeto e não de enfeite

Móvel no modelo é **teste de circulação**: é ali que você descobre que a porta do guarda-roupa bate na cama. Material é **decisão de conforto e de custo** (cor clara no telhado, piso frio na cozinha; [módulo 2, aula 3](../02%20-%20Conforto%20Ambiental%20e%20Implantacao/03%20-%20Conforto%20Termico%20Materiais%20e%20Cor.md)). Vegetação é **área permeável e sombra**. Por isso a etapa vem depois do corpo (aula 6) e antes do render (aula 8): o render mostra o que você decidiu; não decide por você.

## Etapa 1: mobiliário com medida real

1. Use a lista de móveis do programa de necessidades e as medidas do [módulo 1, aula 6](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/06%20-%20Dimensionando%20Ambientes%20Mobiliario%20Portas%20e%20Janelas.md). Referências (l x p, em metros): cama de casal 1,40 x 1,90; guarda-roupa de casal 1,60 x 0,50; sofá de 3 lugares 1,70 x 0,70; mesa retangular de 4 lugares 1,20 x 0,80; geladeira 0,70 x 0,70; fogão 0,55 x 0,60; tanque 0,52 x 0,53; máquina de lavar 0,60 x 0,65.
2. **Prefira as medidas dos móveis que você realmente vai comprar.** Se o sofá real tem 2,10 m, o de 1,70 m do catálogo mente sobre a sala.
3. Onde baixar modelos:
   - o **catálogo** do Sweet Home 3D (com importação de modelos) no [módulo 9, aula 5](../09%20-%20Pratica%20com%20Sweet%20Home%203D/05%20-%20Moveis%20Catalogo%20Modelos%20e%20Texturas.md);
   - o **3D Warehouse** e componentes no SketchUp ([módulo 10, aula 7](../10%20-%20Pratica%20com%20SketchUp/07%20-%20Materiais%20Warehouse%20Cenas%20e%20Cortes.md));
   - bibliotecas de objetos nos programas BIM (módulo 11) e ativos do Blender (módulo 12).
4. Regras para modelos baixados: **confira escala e unidade** (um modelo em milímetros entra 1000 vezes maior), **peso** (muitos polígonos travam o arquivo), **origem** e **licença**. Use poucos e leves.
5. Coloque cada móvel com as **circulações mínimas**: 0,50 m em quartos e em frente ao sofá, 0,85 m em frente à pia, 0,75 m ao redor da mesa. Desenhe também o **giro de porta e de portas de móveis**.
6. Se a circulação falhar, **volte à planta 2D e corrija lá primeiro** (aula 3); o modelo e a planta precisam continuar iguais.

## Etapa 2: acabamentos e materiais

Material tem dois lados: o que **parece** (cor, textura) e o que **faz** (reflete, isola, esquenta). Para o capstone, faça primeiro o quadro de decisões e só depois aplique no modelo.

**Quadro de acabamentos** (planilha):

| Ambiente | Piso | Parede | Teto | Esquadria | Observação de conforto ou manutenção |
|---|---|---|---|---|---|
| Cozinha | porcelanato | cerâmica até 1,50 m | pintura lavável | alumínio | fácil de limpar; área molhada |
| Dormitório | (sua escolha) | pintura | forro | | |

Critérios:

- **Áreas molhadas** pedem piso e parede laváveis e antiderrapantes no box.
- **Cobertura clara** e telha de baixa absorção em clima quente (módulo 2, aula 3).
- **Cor externa** clara reduz o calor absorvido pelas paredes.
- **Textura com escala real**: um piso de 60 x 60 cm precisa entrar no modelo com 60 x 60 cm, senão o rejunte fica gigante. É o mesmo problema do módulo 9, aula 5.

Aplicação no modelo: aplique o material à **face certa** (frente e verso), com o tamanho real de textura, e evite materiais pesados ou não usados (incham o arquivo; módulo 10, aula 7). Os fundamentos de como a luz e o material interagem estão no [módulo 13](../13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md); aqui basta escolher e aplicar de forma coerente.

## Etapa 3: vegetação e área externa

1. **Comece pela área permeável.** Marque no modelo a área permeável mínima calculada na aula 1 (exemplo: 50 m²) e projete o gramado, os canteiros e o piso drenante nela. Calçada de concreto e deck impermeável **não contam**; confira como o município conta piso drenante e cobogó (regra local).
2. **Árvores como sombra estratégica.** Copa de folha caduca a oeste ou norte dá sombra no verão e deixa passar sol no inverno (módulo 2, aula 2). Posicione com a projeção da copa madura, não a muda.
3. **Distância de estruturas.** Raízes e queda de folhas afetam fundação, muro e calha; **peça orientação a um paisagista ou agrônomo** para escolher espécie e distância. Não confirmado aqui: não há regra geral em metros nos módulos deste curso.
4. **Modelos de vegetação leves.** Árvores 3D detalhadas pesam muito; use versões simplificadas (planos recortados, "billboards") em modelos que terão muitas plantas. Procure plantas prontas no catálogo ou na biblioteca do seu programa (não confirmado o que cada um traz) e verifique o peso.
5. **Área externa:** muro, portão, calçada, rampa, garagem, lixo, medidores. Confira que a água do telhado cai no seu lote e que o acesso de veículo cumpre a vaga exigida pela lei.
6. **Paisagismo com mais profundidade**: há playlists em português de paisagismo em SketchUp (abaixo).

## Etapa 4: controle de peso e de coerência

Ao final da aula, meça:

- tamanho do arquivo (compare com a versão anterior);
- tempo para girar a vista 3D (se travou, o problema é peso);
- número de modelos importados e sua origem;
- que **nada foi apagado do que servia de prova** (paredes, esquadrias, níveis).

Use "purge", "limpar não usados" ou equivalente do programa. Mantenha uma versão **sem mobiliário** salva à parte: será a base limpa para os cortes e quantitativos da aula 9.

## Entregável da aula 7

- Casa mobiliada com circulações conferidas.
- Quadro de acabamentos por ambiente.
- Lista dos modelos importados com fonte e licença.
- Área externa com a área permeável calculada e marcada.
- Versão `casa_v0N_mobiliada` e versão limpa sem mobiliário.

## Checklist da aula 7

- [ ] Cada móvel tem a medida do que será comprado e respeita circulação e giro de porta.
- [ ] Modelos importados foram conferidos em escala, peso e licença.
- [ ] O quadro de acabamentos foi feito antes da aplicação dos materiais.
- [ ] As texturas têm escala real e estão na face correta.
- [ ] A área permeável mínima foi cumprida no modelo, com projeção de copa realista.
- [ ] O arquivo continua leve, com uma versão limpa preservada.

## Resumo

- Móvel no modelo testa circulação; use as medidas dos itens reais.
- Modelos baixados exigem conferência de escala, peso, origem e licença.
- Decida acabamentos em quadro por ambiente antes de aplicar; textura precisa de escala real.
- Vegetação começa pela área permeável e pela sombra, com projeção da copa madura.
- Mantenha o arquivo leve e uma versão limpa, sem mobiliário, para a documentação.

## Para aprofundar

- [ ] [Curso Gratuito de SketchUp para Paisagismo (playlist)](https://www.youtube.com/playlist?list=PLQ_RJ0sLt85-zV2Ea_jGSMC915aYDMSUv) (Prof. Ronaldo Luidi): pelo título, cobre vegetação e área externa em SketchUp. Só serve a quem usa SketchUp; conteúdo não assistido.
- [ ] [Aula 6: Paisagismo com SketchUp, Canteiros, Piscina e Deck de Madeira (Atualizada)](https://www.youtube.com/watch?v=Mv9Iswv8e1M) (Prof. Ronaldo Luidi): pelo título, aborda área de lazer com deck e piscina. Conteúdo não assistido.

Não encontrei série em português dedicada a mobiliário e acabamentos; use o catálogo e a biblioteca do seu programa e o módulo 13.

[Próxima aula: Iluminação, câmeras e render](./08%20-%20Iluminacao%20Cameras%20e%20Render.md)
