# Aula 5: Como o computador calcula a imagem

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que a vista 3D do programa é instantânea e o render "de verdade" demora minutos ou horas, o que são amostras, ruído e denoising, e o que faz o computador (CPU ou placa de vídeo) ser mais ou menos rápido?*

## O problema: transformar uma cena em pixels

Você tem um modelo (milhares de triângulos, módulo 7), materiais (aula 2) e luzes (aulas 1 e 4). Falta calcular, para cada pixel da imagem, uma cor. Há duas famílias de solução, com filosofias opostas. Já vimos as duas de passagem: no módulo 9, o Sweet Home 3D mostra uma vista 3D em tempo real e, separadamente, uma "foto" calculada por outro processo.

## Rasterização: projetar e pintar (tempo real)

A **rasterização** parte do **modelo**, não do pixel. Para cada triângulo, o programa:

1. **Projeta** os vértices na tela (a perspectiva da câmera, aula 3).
2. Descobre quais **pixels o triângulo cobre** (transformar o triângulo em pixels é a "rasterização").
3. Guarda, para cada pixel, o triângulo mais próximo (um "mapa de profundidade") para saber o que está na frente.
4. **Calcula a cor** do pixel com uma fórmula de iluminação **local**: só considera a superfície, a luz e a câmera, sem olhar o resto da cena.

Como cada triângulo é processado uma vez, e as placas de vídeo têm milhares de pequenas unidades que fazem isso em paralelo, o tempo por imagem é de milissegundos: você gira o modelo a 30 ou 60 quadros por segundo. É o que é chamado de **tempo real**, usado em jogos e nas vistas dos programas.

O custo é a **falta de luz global**. Um triângulo "não sabe" o que há ao redor. Para simular sombra, reflexo e luz indireta, o programa usa **truques**: mapas de sombra (uma imagem de profundidade a partir da luz), sondas de luz (*light probes*, fotos 360 graus do ambiente tiradas em pontos do cenário, usadas como reflexo e luz indireta aproximados), pré-cálculo de luz nas paredes (*baking*), e efeitos no espaço da tela (só enxergam o que já está visível). O manual do Blender descreve isso para o EEVEE, seu motor de tempo real: "baseado em rasterização e não é um *path tracer*. Em vez de calcular cada raio de luz, a rasterização determina que superfície está visível pela câmera. Em seguida estima a interação da luz com essas superfícies e materiais com numerosos algoritmos". E avisa: "o EEVEE é projetado para PBR, mas não é perfeito, e o Cycles sempre dará renders mais fisicamente precisos".

Os motores de tempo real evoluíram e hoje **incluem raios** onde vale a pena. O manual do EEVEE 5.2 descreve um modo de **traçado de raios** (*Raytracing*) que gera raios a partir de cada superfície para aumentar a precisão da luz indireta, com dois métodos: por **sondas** (mais barato) ou **Screen-Trace** (contra o mapa de profundidade da tela, com sondas como reserva quando o raio sai da tela). Ainda assim é aproximação com limitações. Os programas de arquitetura em tempo real (D5, Twinmotion, Enscape, aula 6) se anunciam com traçado de raios em tempo real ou como opção de path tracer (um dos vídeos de Twinmotion cita uma opção *path tracer*); os detalhes de cada um variam e não foram verificados aqui.

## Path tracing: seguir a luz de volta (fidelidade)

O **traçado de caminhos** (*path tracing*) parte do **pixel**. A ideia é simular o que a física faz, mas **de trás para frente**, porque a maioria dos raios de luz emitidos por uma lâmpada nunca chega à câmera e seria desperdício segui-los. O manual do Cycles define: "Amostragem é o processo de traçar raios da câmera para dentro da cena e fazê-los quicar até atingir uma fonte de luz, como um objeto de luz, uma malha emissiva ou o fundo do mundo."

Para um pixel, o algoritmo faz:

1. Lança um raio da câmera pelo pixel.
2. Acha a superfície que o raio bate.
3. Consulta o **material** (aula 2): reflete? Espalha? Atravessa? **Sorteia** uma direção, com mais chance nas direções mais prováveis para aquele material.
4. Repete do ponto de impacto, novo sorteio, novo salto (*bounce*), até bater numa **fonte de luz** (soma-se a luz, com a cor acumulada dos materiais no caminho) ou passar do limite de saltos.
5. Guarda a cor daquele **caminho**: uma **amostra**.

Um único caminho é **aleatório**: pode chegar direto à janela (pixel brilhante) ou errar (pixel escuro). Para saber a cor real, repete-se muitas vezes e tira-se a média. Isso é um método estatístico (**Monte Carlo**): quanto mais amostras, mais o resultado se aproxima do valor verdadeiro. Amostras insuficientes aparecem como **ruído** (granulação) na imagem.

Uma relação estatística geral: o ruído cai com a raiz quadrada do número de amostras. Para **reduzir o ruído pela metade**, é preciso **quadruplicar** as amostras (e o tempo). Por isso "só mais amostras" é um caminho caro e é preciso outros truques (abaixo).

**Por que o path tracing é fiel:** reflexos, sombras suaves, luz indireta, sangramento de cor, vidro e refração **saem do mesmo processo**, sem truque especial para cada efeito. A luz de uma sala que entra por uma janela e bate no piso, na parede e no teto acontece porque os caminhos seguem esses saltos. **Por que é lento:** há muitos pixels, muitas amostras por pixel, vários saltos por amostra, e cada salto exige achar em qual triângulo o raio bate (uma cena de casa tem milhões).

No Blender, o **Cycles** é o path tracer; o **EEVEE** é o de tempo real. Um artigo do Solare (link abaixo) resume: use EEVEE para esboços e validação rápida de materiais; use Cycles para a imagem final que precisa de máxima precisão de luz, sombras e reflexos. O mesmo artigo lista o que o Cycles faz melhor: luzes IES, transparência avançada (como vidro de janela, "o EEVEE bloqueia a luz") e mapas de deslocamento.

## Os controles do path tracing (Cycles)

Todos ficam nas propriedades de render. Definições do manual do Cycles (Blender 5.2 LTS):

- **Max Samples (Render):** número máximo de caminhos por pixel na imagem final. Mais é mais limpo e mais lento.
- **Noise Threshold (amostragem adaptativa):** o programa mede o ruído de cada pixel e **para de amostrar os pixels que já estão limpos**, concentrando o tempo nos ruidosos. O manual: valores típicos de 0,1 a 0,001, quanto menor mais qualidade e mais tempo; 0 = automático. Ideia útil: a parede lisa precisa de poucas amostras, a sombra atrás do sofá, de muitas.
- **Min Samples:** mínimo de amostras por pixel antes de a adaptação valer (0 = automático).
- **Time Limit:** para o render ao atingir o tempo, mesmo sem chegar às amostras.
- **Max Bounces (Light Paths):** limites de saltos: total, difuso, brilhante (*glossy*), transmissão, volume e transparência, individuais. O manual diz que idealmente seriam infinitos, mas em prática número menor basta e converge mais rápido; **0 saltos = só luz direta** (sem iluminação global). Para interiores, número baixo de saltos deixa o ambiente escuro demais porque falta a luz indireta.
- **Clamping (Direct e Indirect):** limita o brilho de uma amostra para reduzir *fireflies* (pontos brancos isolados), ao custo de reduzir luzes intencionalmente fortes.
- **Light Tree:** ajuda quando há muitas luzes (o manual diz que reduz ruído com custo de tempo por amostra).
- **Path Guiding:** aprende a direção da luz importante em cenas de difícil acesso, como uma sala iluminada por abertura pequena; **só CPU** (manual).

## Denoising: limpar o ruído com inteligência

**Denoising** é um algoritmo que recebe a imagem ruidosa e produz uma versão limpa "adivinhando" a partir dos pixels vizinhos e de informações extras da cena. O manual: "usa um algoritmo especializado para uma imagem menos ruidosa sem exigir mais amostras". No Cycles:

- **OpenImageDenoise:** denoiser de IA da Intel, "tipicamente a melhor qualidade".
- **OptiX:** denoiser de IA da NVIDIA (só em placas NVIDIA).
- **Automatic:** escolhe o melhor disponível, preferindo OpenImageDenoise.
- **Passes de entrada:** Nenhum, **Albedo**, **Albedo + Normal**. O manual recomenda ao menos Albedo, porque só com a cor "pode borrar detalhes, especialmente com poucas amostras". Albedo e normal são justamente os mapas da aula 2 (cor base e direção da superfície): o denoiser usa os contornos e texturas conhecidos para não borrar a madeira e o rejunte.
- É preciso ligar em separado o denoising para a **vista** de trabalho e para o **render final**.

**Limitações reais** (mostradas nos vídeos de apoio): com poucas amostras, o denoiser "inventa" manchas e alisa detalhes finos (o efeito "pintura a óleo"); em animação, as manchas mudam quadro a quadro e ficam visíveis. A regra: **denoising ajuda, não substitui amostras suficientes**.

É comum que os motores de arquitetura em tempo real também usem denoising para mostrar imagens limpas rapidamente (não verifiquei o método de cada um).

## Resolução, amostras e tempo

O tempo de um path tracing é, em ordem de grandeza, proporcional a **pixels x amostras** (mais complexidade da cena). Exemplo:

- Full HD, 1920 x 1080 = 2.073.600 pixels. Com 256 amostras: cerca de 531 milhões de caminhos.
- 4K, 3840 x 2160 = 8.294.400 pixels, **quatro vezes** a Full HD. Com as mesmas 256 amostras, cerca de quatro vezes o tempo.

Consequência: **dobrar largura e altura quadruplica o tempo**. Por isso o fluxo profissional (aula 7) é testar em baixa resolução e amostra menor e só entregar a final em alta. Recursos práticos: o **Percentage** da resolução no painel Format (o manual sugere para "pequenos testes de render com a mesma proporção da final") e o **Render Region** (renderiza só um retângulo do quadro, para testar uma sombra ou um material).

Uma imagem de 1080 pixels de largura basta para a tela e para a maior parte do estudo de projeto; 4K e mais só valem para impressão ou apresentação grande.

## CPU ou placa de vídeo (GPU)

- **CPU** (processador): poucas unidades muito flexíveis (tipicamente de algumas unidades a algumas dezenas de núcleos). Usa a memória RAM do computador (que costuma ser grande). Rende bem em cenas enormes.
- **GPU** (placa de vídeo): milhares de unidades simples que trabalham em paralelo, ideais para a repetição de cálculos de raios. Costuma ser **bem mais rápida** que a CPU, mas com **memória de vídeo (VRAM) limitada**: se a cena não cabe, o render falha ou fica lento (o manual do Cycles alerta para essas limitações e para a interface travar em GPUs antigas quando a mesma placa cuida da tela).

O manual do Cycles (5.2 LTS) lista as tecnologias de GPU: **CUDA** e **OptiX** (NVIDIA; o OptiX usa a aceleração de raios por hardware das placas RTX), **HIP** (AMD, RDNA1 ou mais nova), **oneAPI** (Intel Arc), **Metal** (Apple Silicon). Para usar, ativa-se o dispositivo em **Preferences, System, Cycles Render Devices** e escolhe-se **GPU Compute** na cena. O denoiser também pode rodar na GPU (opção Use GPU do denoising), com requisitos de arquitetura descritos no manual. Uma observação dos vídeos de apoio: quem instala o Blender e nunca ativou a GPU renderiza na CPU sem saber; verifique isso primeiro.

Os motores de tempo real de arquitetura (D5, Lumion, Twinmotion) **exigem placa de vídeo dedicada**: a página oficial do D5 informa mínimo de uma NVIDIA GTX 1060 6 GB, AMD RX 6400 ou Intel Arc A3, e recomenda RTX 3060 ou melhor; a do Lumion diz que precisa de "GPU potente" e 105 GB livres em disco (consultadas em setembro de 2026). Confira sempre a lista de requisitos atual antes de instalar.

Um computador sem placa dedicada ainda faz renders: o Sweet Home 3D (aula 9) renderiza só com a CPU, e o Cycles também roda na CPU, só que mais devagar.

## Quando usar cada um

| Situação | Motor |
|---|---|
| Girar e ajustar o modelo, testar materiais | Tempo real (vista 3D, EEVEE) |
| Testar luz de uma sala rapidamente | Tempo real com raios (D5, Twinmotion) ou path tracing em baixa resolução |
| Imagem final de interior com luz complexa | Path tracing (Cycles) com denoising |
| Vídeo curto de passeio | Tempo real (cada quadro em segundos) ou path tracing com poucas amostras e denoising |

## Resumo

- **Rasterização:** projeta triângulos na tela e calcula cor local por pixel; milissegundos por imagem, mas luz indireta, sombra suave e reflexo são aproximações (mapas de sombra, sondas, pré-cálculo).
- **Path tracing:** por pixel, sorteia caminhos de luz que quicam até uma fonte, e faz a média de muitas **amostras** (Monte Carlo). Fiel porque todos os efeitos saem do mesmo processo; lento porque é pesado.
- Ruído cai com a raiz das amostras (quadruplicar amostras reduz à metade). Ajudam: noise threshold adaptativo, denoising, mais saltos e portais em interiores.
- **Denoising** (OpenImageDenoise, OptiX) limpa a imagem, melhor com passes de albedo e normal; não substitui amostras suficientes.
- Tempo é proporcional a pixels x amostras: dobrar a resolução em cada lado quadruplica o custo. Teste pequeno, entregue grande.
- GPU costuma ser bem mais rápida que CPU, mas tem VRAM limitada; motores de tempo real de arquitetura exigem GPU dedicada.

## Para aprofundar

- [ ] [Rasterization, Ray Tracing, Path Tracing & Lumen - Explained for Beginners](https://www.youtube.com/watch?v=BFYC9usSTsI) (canal TUF, inglês): as técnicas lado a lado, visão de jogos.
- [ ] [INE 5420 - Computação Gráfica - Aula 10. Introdução ao Raytracing e ao Raycasting](https://www.youtube.com/watch?v=Q1JN5jO8Ee0) (Aldo von Wangenheim, PT-BR): aula universitária, mais teórica, para quem quer o rigor.
- [ ] [Blender's Cycles vs. Eevee (Ray Tracing vs. Real Time)](https://www.youtube.com/watch?v=fAiai0fCBOw) (Remington Creative, inglês): a diferença na prática.
- [ ] [Basics of Rendering. Cycles vs. Eevee [Blender]](https://www.youtube.com/watch?v=AuJMDdDqXVs) (ThreeDee, inglês): fundamentos dos dois.
- [ ] [The FASTEST Cycles Renders you can get in Blender!](https://www.youtube.com/watch?v=Jv1vk8YWCsQ) (Kaizen, inglês): GPU, noise threshold e denoising; o vídeo inclui um patrocínio.
- [ ] [20X Faster Rendering in Cycles (Blender Render Guide)](https://www.youtube.com/watch?v=pkICXEWc1kM) (Kaizen, inglês): otimização de cena, resolução, amostras, denoising com albedo e normal.
- [ ] [Blender FASTER renders in CYCLES (Denoiser preserves details!)](https://www.youtube.com/watch?v=VCnr5ipwbjk) (Activemotionpictures, inglês, de 2022): avançado, sobre denoising e mínimo de amostras.
- [ ] [Quando usar o Eevee ou Cycles em projetos arquitetônicos?](https://solare.org.br/2024/10/15/quando-usar-o-eevee-ou-cycles-em-projetos-arquitetonicos/) (Solare, português): critério de escolha para arquitetura.
- [ ] [Sampling](https://docs.blender.org/manual/en/latest/render/cycles/render_settings/sampling.html), [Light Paths](https://docs.blender.org/manual/en/latest/render/cycles/render_settings/light_paths.html), [GPU Rendering](https://docs.blender.org/manual/en/latest/render/cycles/gpu_rendering.html), [EEVEE](https://docs.blender.org/manual/en/latest/render/eevee/index.html) (Manual do Blender 5.2 LTS): definições oficiais.

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido.

[Próxima aula: Motores acessíveis e licenças](./06%20-%20Motores%20Acessiveis%20e%20Licencas.md)
