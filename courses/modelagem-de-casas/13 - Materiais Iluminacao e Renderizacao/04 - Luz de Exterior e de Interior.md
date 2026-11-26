# Aula 4: Luz de exterior e de interior

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como reproduzir no programa a luz de um dia real (sol, céu, horário) fora e dentro da casa, incluindo a luz que entra pelas janelas e as lâmpadas?*

## O que é a luz de um dia: sol mais céu

Fora de casa, em dia de sol, há duas fontes:

- **O sol:** uma fonte pequena e muito intensa, tão distante que seus raios chegam praticamente **paralelos**. Gera sombras de borda nítida e cor levemente amarelada. Sua direção depende da hora, do dia do ano e da latitude, exatamente o que você estudou no módulo 2 (altura e azimute, carta solar).
- **O céu:** uma fonte gigante, azulada, que ilumina de todas as direções. É luz do sol espalhada pela atmosfera. Preenche as sombras (por isso a sombra de uma árvore não é preta) e é a única fonte em dia nublado.

Um render de exterior convincente é, na maioria das vezes, **um sol com a direção certa mais um céu**. O restante (reflexo do chão, das paredes vizinhas) sai da iluminação global da aula 1.

Ligação com o módulo 2: se o seu lote tem a fachada da sala voltada a oeste, o sol da tarde entra por ela no verão e no inverno de formas diferentes (a altura do sol muda). Você pode **reproduzir no render** a situação estudada na carta solar e verificar o beiral, a proteção solar e o conforto: é o teste mais útil do render para um projeto de casa.

## Três formas de fazer o sol e o céu

### 1. Luz de sol mais cor de céu (o mais simples)

Uma **luz de sol** (direcional, sem posição, só direção) e um fundo de cor azul clara. No Blender, o manual descreve o **Sun Light**: intensidade constante, vem de uma direção única "do infinito"; a localização do objeto não afeta o resultado, só sua **rotação**. O parâmetro **Strength** do sol é em W/m2, com os valores de referência da aula 1 (1000 para céu claro). O parâmetro **Angle** é o diâmetro angular do sol e controla a suavidade da sombra. Simples e rápido, mas o céu é uma cor uniforme, o que ilumina de forma pouco realista.

### 2. Céu procedural (Sky Texture)

Um **modelo matemático da atmosfera** calcula cor do céu, sol e luz a partir de parâmetros. No Blender, é o nó **Sky Texture** no mundo (*World*). O manual lista o que se controla:

- **Sky Type:** modelo do céu. O manual descreve o **Multiple Scattering** como o mais preciso (considera múltiplas reflexões na atmosfera); Single Scattering, Preetham e Hosek/Wilkie são marcados como legados.
- **Sun Elevation** (altura do sol acima do horizonte, em graus) e **Sun Rotation** (rotação em torno do zênite): equivalem a altitude e azimute do módulo 2.
- **Turbidity** (turbidez): 2 é ártico, 3 é céu limpo, 6 é dia quente e úmido, 10 é dia enevoado (valores do manual).
- **Sun Disc, Sun Size, Sun Intensity, Air, Aerosols, Ozone, Altitude:** ajustes finos.
- **Aviso do manual:** os céus Single e Multiple Scattering são "muito brilhantes por padrão (por isso precisos)", e a correção é **baixar a exposição** em Color Management.

A vantagem é a coerência: sol e céu vêm do mesmo modelo, a cor do céu muda com a altura do sol (laranja no fim da tarde) e você controla o horário. Para reproduzir uma data e hora exatas de uma cidade, um vídeo de apoio cita um complemento de posição do sol que traz data, hora e latitude; procure em **Edit, Preferences, Add-ons** ou em Extensions da sua versão (o manual 5.2 não trouxe página para ele, então confira o nome exato).

### 3. HDRI: uma fotografia do céu inteiro

Um **HDRI** (*high dynamic range image*, imagem de alta faixa dinâmica) é uma foto panorâmica de 360 graus de um local real. Em imagem comum, o valor máximo é o branco. Numa HDRI, os pixels do sol têm valores milhares de vezes maiores que os do céu, preservados como números reais. Assim, a imagem funciona como **fonte de luz**: o sol dentro da foto ilumina a cena de verdade, e o céu, as árvores e os prédios da foto iluminam e refletem em materiais lisos. É a forma mais rápida de dar realismo a reflexos de vidro e metal (a HDRI aparece refletida) e a luz de "lugar real".

No Blender, o manual do **World** diz: use o nó **Environment Texture** (não o Image Texture) para luz baseada em imagem; ele suporta mapeamento **equirretangular** (latitude e longitude, o formato panorâmico padrão) e de bola espelhada. Seus controles práticos:

- **Strength** do fundo (Background): multiplica a luz da HDRI.
- **Rotação:** é o que escolhe de qual lado vem o sol. Um nó de mapeamento (Mapping) com a rotação em Z gira a HDRI; vídeos citados mostram o atalho Ctrl+T do complemento **Node Wrangler**, que o manual documenta.
- **Truque documentado no manual do Cycles (Is Camera Ray):** dá para usar duas cores/imagens no mundo: uma para a luz (baixa resolução) e outra para o que a câmera vê direto (alta resolução), misturadas com o nó Light Path (saída Is Camera Ray). Serve para clarear ou girar o fundo sem mudar a iluminação. Um dos vídeos abaixo detalha isso para o EEVEE.

**Escolher a HDRI:** use uma HDRI cuja **luz combine com a do seu render**: sol alto e duro para meio-dia; céu encoberto (sombras suaves) para dia nublado; sol baixo e alaranjado para fim de tarde. Uma HDRI de estúdio (caixa de luz) serve para objetos, não para casa. Onde baixá-las: aula 7 (Poly Haven, licença CC0). Resolução: para **só iluminar**, 1K ou 2K bastam; para **ver o fundo** através da janela, 4K ou mais (um vídeo de apoio usa 1K para luz e explica a troca).

**Cuidado com a coerência solar:** uma HDRI tem sol numa direção; a rotação dela precisa bater com a orientação real da casa (o norte do módulo 2) se você quer a análise solar. Um artigo do blog da totalCAD (sobre Enscape) descreve a técnica de alinhar a sombra de um marcador cilíndrico com a HDRI e com o sol geográfico. Para fins de apresentação, basta escolher a direção que cause a sombra mais agradável.

### Qual escolher

| Objetivo | Melhor opção |
|---|---|
| Testar insolação de um horário e data exatos | Céu procedural com posição do sol (ou luz de sol) |
| Render bonito rápido com reflexos ricos | HDRI |
| Controle total e separado (sol, céu, fundo) | Sol mais céu procedural, ou sol mais HDRI baixa |
| Cena noturna | Céu com sol abaixo do horizonte, ou HDRI noturna, mais luzes artificiais |

Um vídeo de apoio (Architecture Topics) mostra o fluxo de céu procedural com sol alinhado por um complemento, usando três cliques e ajustando o tamanho do sol para suavizar sombra e a intensidade para não queimar o piso.

## Horário e cor da luz

A altura do sol define quase tudo:

- **Sol alto (meio-dia):** sombras curtas e duras, luz branca e forte. Deixa a imagem chapada e com contraste ruim para fachadas (fotógrafos evitam).
- **Sol baixo (manhã cedo, fim de tarde, a "hora dourada"):** sombras longas, luz laranja de temperatura baixa (aula 1), textura de parede realçada por luz rasante. É o horário preferido para fachadas.
- **Céu encoberto:** sem sombras marcadas; luz difusa e fria, contraste baixo. Bom para mostrar cor e material com fidelidade, pouco dramático.
- **Crepúsculo (azul):** céu azul profundo com lâmpadas acesas dentro: a combinação clássica de imagem de casa.

A rotação da HDRI ou do sol define **de que lado** vem a luz. Regra prática de composição: luz lateral ou de três quartos (vinda de lado e um pouco de frente) mostra o volume; luz frontal chapa; contraluz cria silhueta.

## Luz de interior: o caso mais difícil

Por que é mais difícil do que parece: numa sala, a luz do dia entra por **aberturas pequenas** (janelas), e o cálculo precisa encontrar essas aberturas partindo da câmera. Um dos vídeos e o manual do Cycles explicam a dificuldade: o motor lança raios da câmera, e só uma fração deles chega, por acaso, à janela e ao céu, então a imagem fica **ruidosa** (granulada) e precisa de mais amostras (aula 5). O manual do Cycles cita, para este caso, dois recursos: o **Path Guiding** (que "aprende" a direção da luz importante, para situações como uma sala iluminada por uma pequena abertura; só funciona em CPU) e as **luzes de área do tipo portal**, que guiam o cálculo manualmente. (Confirme os nomes e onde ficam na sua versão.)

### Luz natural pelas janelas

Três abordagens, da mais simples à mais fiel:

1. **Luz de área no vão da janela** (truque do curso Solare de Blender para arquitetura): coloque uma **luz de área retangular** do tamanho do vão, logo do lado de fora da janela, apontada para dentro. Simula a luz do céu entrando. O manual do Blender sugere exatamente isso (luz de área retangular no lugar de uma janela) e diz que a luz de área produz **sombras de borda suave**, como a luz de janela real. O texto da Solare acrescenta uma segunda luz de área atrás da câmera, fraca, para iluminar as superfícies voltadas para a câmera. Vantagem: controle e pouco ruído. Desvantagem: é uma aproximação.
2. **Sol mais céu (ou HDRI) entrando pela janela aberta.** É a luz "de verdade". Dá as manchas de sol no piso, mas exige mais amostras e denoising. O vidro deve deixar a luz passar (aula 2 e aula 8).
3. **Plano emissor no vão.** O material emissor (aula 2) num plano no lugar da janela é outro truque clássico, sugerido também no [Manual Livre de Blender](https://nafergo.github.io/manual-livre-blender/render_tricks_no_cycles.html) (comunidade em português, sobre versões antigas do Cycles): um plano com emissão no lugar da abertura, com a visibilidade para a câmera desativada.

**O problema do contraste janela versus sala:** o exterior é muito mais claro que o interior. Se você exibe o interior corretamente, a janela sai queimada (branca). É o mesmo problema de um fotógrafo. Soluções: escolher a **View Transform** com boa faixa dinâmica (AgX, aula 1); baixar a intensidade do fundo; e na pós-produção (aula 7) clarear as sombras e recuperar a janela. Um fundo visível pela janela deve ter brilho plausível, senão a janela é um retângulo branco.

### Luz artificial

Lâmpadas são fontes pequenas ou médias, de temperatura de cor baixa (2700 K a 3000 K, aula 1). Tipos e usos no Blender (manual):

- **Point (pontual):** lâmpada nua. O manual traz a potência de uma LED de 800 lm em cerca de 2,1 W.
- **Spot:** cone de luz (spots embutidos no forro, arandelas). Parâmetros: **Angle** (abertura do cone) e **Blend** (suavidade da borda do cone).
- **Area (área):** superfícies luminosas: fita de LED atrás de moldura (luz indireta), painéis, tela de TV. Rectangle, Square, Disk e Ellipse.
- **Emissão em malha:** qualquer objeto vira fonte de luz (abajur, luminária). Modelos com material emissor (o vídeo de Poncell e Zaulas mostra a mecânica).

A **distribuição real** da luz de uma luminária é dada por um arquivo **IES** (fotometria): um arquivo de texto do fabricante que descreve a intensidade em cada direção (o facho de um spot embutido, por exemplo). O manual do Blender documenta o nó **IES Texture**: modo Internal (arquivo embutido) ou External (arquivo no disco), com saída Factor ligada à Strength de um nó de emissão. O resultado são poças de luz na parede iguais às de um fabricante. Sites de fabricantes e bibliotecas trazem arquivos IES (o site ieslibrary.com anuncia mais de 1,4 milhão de arquivos, segundo a página inicial; os termos de uso desse site não foram confirmados, então leia antes de usar). Em arquitetura de interiores é o que separa uma cena convincente de uma luz de videogame.

### Composição de luzes de uma sala (ordem prática)

1. **Luz natural** (janela) como fonte principal de dia; sem ela, a sala é dominada pelas lâmpadas.
2. **Luzes de teto** (plafom, spots embutidos) como luz geral, com IES e temperatura quente.
3. **Luz de destaque** (arandela, abajur, fita de LED em nicho): pequenas poças de luz que criam **camadas**, o que dá aparência de "ambiente vivido".
4. Compare com **fotos reais** de ambientes parecidos: a proporção entre luzes é o que mais engana o olho.

**Regra:** no render diurno, a janela manda e as lâmpadas ficam apagadas ou fracas (o olho não percebe lâmpada acesa de dia em sala clara). No render noturno é o contrário. Para a mistura crepuscular, ajuste as intensidades para que lâmpada e céu tenham brilho comparável.

## Resumo

- Exterior = **sol** (fonte pequena, direcional, sombra nítida) + **céu** (fonte gigante, azul, indireta). A direção do sol vem do módulo 2 (altura e azimute).
- Três formas: luz de sol com cor de fundo; **céu procedural** (Sky Texture, Multiple Scattering, com Sun Elevation e Rotation); **HDRI** (foto 360 graus de faixa dinâmica alta, que funciona como fonte de luz e reflexo).
- Sol baixo dá sombras longas e luz quente; céu encoberto dá luz difusa e sem contraste; a rotação define o lado da luz.
- Interior é difícil por causa do ruído: luz que passa por aberturas pequenas. Ajudam luz de área no vão, portais, path guiding, mais amostras e denoising.
- Lâmpadas: point, spot, area e emissão; **IES** dá a distribuição real de luminárias; temperatura de cor quente (2700 K a 3000 K) contra janela azulada.

## Para aprofundar

- [ ] [How to Light your Scenes with HDRIs in Blender](https://www.youtube.com/watch?v=QNr7lwhW0h4) (Ryan King Art, inglês): baixar HDRI, ligá-la ao mundo, ajustar brilho e fundo transparente.
- [ ] [The ULTIMATE GUIDE to HDRI Lighting in Blender!](https://www.youtube.com/watch?v=N3DZL56cG84) (The CG Essentials, inglês): girar a HDRI e separar a luz do fundo visível.
- [ ] [EEVEE Exterior Lighting Tutorial (HDRI only)](https://www.youtube.com/watch?v=pp1N4XnBgHw) (Gutemberg Nascimento, inglês): exterior no EEVEE só com HDRI; vale a ideia de separar luz e fundo por Is Camera Ray.
- [ ] [Easy Interior Lighting in Blender (Tutorial)](https://www.youtube.com/watch?v=cPDdjTh0EYM) (Architecture Topics, inglês): céu procedural, sol, IES e luzes escondidas em interior de dia e de noite.
- [ ] [Lighting a Simple Interior Room in Blender (Beginner Tutorial)](https://www.youtube.com/watch?v=QVNIIQ4kW_I) (Thilakanathan Studios, inglês, de 2017): luz de área nas janelas, com interface antiga (menus mudaram, o princípio vale).
- [ ] [AULA 19: ILUMINAÇÃO NATURAL EM CENA INTERNA](https://www.youtube.com/watch?v=7-TiVNOcjMY) (Projeto Jovem Arquiteto, PT-BR): luz natural em interiores no V-Ray, princípios valem para qualquer motor.
- [ ] [Vray 3.6 para SketchUp, Aula 12/30: Iluminação Natural (Luz do Sol)](https://www.youtube.com/watch?v=cOq3hWTZBZ4) (Chahoud Cursos, PT-BR): versão antiga do V-Ray; posição do sol, intensidade e sombra.
- [ ] [We just made IES Lighting EASY PEASY!](https://www.youtube.com/watch?v=EPLXNmOsGwg) (Mr Stev3D, inglês) e [IES lighting tip you need to know in Blender](https://www.youtube.com/watch?v=YV7ClYyhvwA) (Mr Stev3D): IES no Blender; o segundo, pela descrição, mostra o método com nós (ponto de luz mais nó IES Texture) e cita também um complemento à parte.
- [ ] [Iluminação de interiores com Cycles, o truque das janelas](https://solare.org.br/2024/04/12/iluminacao-de-interiores-com-cycles-o-truque-das-janelas/) (Solare, português): a luz de área no vão. Curso gratuito citado: [Curso de Blender para arquitetura](https://solare.org.br/2022/10/07/curso-de-blender-para-arquitetura/).
- [ ] [Environment Lighting (Blender Fundamentals 4.5 LTS)](https://studio.blender.org/training/blender-fundamentals-45-lts/blender_4-5_lts_environment-lighting/) (Blender Studio, inglês): lição oficial sobre céu e HDRI; o curso completo é por assinatura, confira o que está aberto.
- [ ] [Sky Texture](https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/sky.html), [World Environment](https://docs.blender.org/manual/en/latest/render/lights/world.html), [IES Texture](https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/ies.html) (Manual do Blender 5.2 LTS): definições oficiais.

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido.

[Próxima aula: Como o computador calcula a imagem](./05%20-%20Como%20o%20Computador%20Calcula%20a%20Imagem.md)
