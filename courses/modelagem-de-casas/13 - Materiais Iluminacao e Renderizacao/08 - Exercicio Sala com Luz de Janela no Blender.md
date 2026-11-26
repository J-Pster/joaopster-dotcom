# Aula 8: Exercício prático, uma sala com luz de janela no Blender

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como aplicar tudo (luz, material, câmera, motor, fluxo) em uma imagem completa, do zero ao arquivo final, num programa gratuito?*

Programa: **Blender 5.2 LTS** (a página oficial de download listava a 5.2.2 LTS em setembro de 2026), gratuito para qualquer uso. Os nomes de painéis e campos abaixo são os do manual oficial 5.2 (docs.blender.org). **Onde eu não confirmei o nome exato de um botão ou atalho, o texto diz "confira".** Os valores numéricos de partida (amostras, exposição, rugosidade) são pontos de partida, não regras: ajuste olhando a imagem.

**Pré-requisitos:** noções do Blender do módulo 12 (mover objetos, modificadores, materiais no editor de sombreamento). Aula 1 a 7 deste módulo.

## O que você vai produzir

Uma imagem 3:2 ou 16:9 de uma sala de estar de cerca de 4,0 x 5,0 m, pé-direito de 2,70 m, com **uma janela** por onde entra o sol da tarde de inverno, piso de madeira, paredes brancas, um sofá e uma mesa simples (caixas), vista da câmera de um canto. Depois você compara com uma variante à noite.

O objetivo não é a beleza do móvel, é **dominar o processo** e conferir o resultado com uma conta, para saber que a luz está certa.

## Etapa 0: a conta que vai validar a luz

Do módulo 2, o sol tem altura e direção. Vamos usar uma cidade de exemplo no hemisfério sul, latitude cerca de 23,5 graus sul (a de São Paulo, arredondada), no **solstício de junho** (inverno). A altura do sol ao meio-dia solar vale:

`altura = 90 - |latitude - declinação|`

Com latitude -23,5 e declinação do sol de +23,44 graus em junho: `90 - |-23,5 - 23,44| = 90 - 46,94 = cerca de 43 graus`, com o sol ao **norte** (no hemisfério sul, o sol do meio-dia fica ao norte).

Colocamos a janela na parede voltada ao **norte**, com peitoril a 0,90 m e altura da abertura de 1,20 m (topo em 2,10 m). O raio de sol que passa pelo peitoril (a 0,90 m) toca o piso a uma distância horizontal de `0,90 / tan(43) = 0,90 / 0,9325 = 0,97 m` da parede; o que passa pelo topo (2,10 m) toca o piso a `2,10 / 0,9325 = 2,25 m`.

**Previsão:** ao meio-dia solar de junho, a mancha de sol no piso vai de aproximadamente **0,97 m a 2,25 m** da parede da janela, na perpendicular. (A espessura da parede reduz um pouco a mancha; considere a espessura da parede no cálculo se quiser precisão.) No verão, com o sol quase a pino, o cálculo dá uma mancha colada na parede ou nenhuma: é o efeito do beiral e da carta solar do módulo 2.

Guarde esse número. No fim, a mancha do seu render deve cair nessa faixa: se cair, a direção do sol está certa.

## Etapa 1: modelar a sala

Com as ferramentas do módulo 12 (ou o que você preferir; um cômodo desenhado no Sweet Home 3D e exportado em OBJ também serve, ver módulos 9 e 8):

1. **Casca fechada:** piso, teto e quatro paredes com **espessura** (0,15 a 0,20 m), formando um volume fechado, **exceto** pelo vão da janela (e, se quiser, uma porta). Qualquer fresta deixa a luz entrar onde não devia.
2. **Vão da janela:** 1,50 m de largura x 1,20 m de altura, peitoril a 0,90 m, na parede norte. Faça o furo de verdade (modificador *Boolean* do módulo 7 ou edição da malha), não apenas um desenho.
3. **Objetos:** um sofá e uma mesa como caixas com pequeno chanfro (bevel), tapete, um quadro: o suficiente para ver luz e sombra.
4. **Unidades:** confirme metros e escala real (uma porta tem 2,10 m).

Regra: você define **o norte** do modelo como um dos eixos (por exemplo, o eixo Y positivo é o norte). Anote. A parede da janela está no lado norte.

## Etapa 2: motor, amostras e cor (Render Properties)

Abra as **Render Properties** (aba de render das propriedades).

1. **Render Engine:** **Cycles** (aulas 5 e 6). Se você tem uma placa de vídeo compatível, ative-a em **Edit, Preferences, System, Cycles Render Devices** e selecione **GPU Compute** como dispositivo na cena (manual do Cycles, GPU Rendering). Caso contrário, use CPU.
2. **Sampling:** para testes, **Render (Max) Samples** em 128, **Noise Threshold** ligado em 0,05 (manual: valores típicos de 0,1 a 0,001), **Denoise (Render)** ligado com o denoiser **Automatic** ou **OpenImageDenoise** e passes **Albedo** (o manual recomenda ao menos Albedo). Deixe o Denoise da vista (viewport) ligado para trabalhar.
3. **Light Paths, Max Bounces:** **não reduza** os saltos abaixo do padrão. Interiores dependem da luz indireta (aula 5); confira o valor padrão na sua versão.
4. **Color Management:** **View Transform: AgX** (aula 1), **Look: None**, **Exposure: 0** por enquanto.
5. **Film:** mantenha o padrão. **Não** ligue **Transparent** (o fundo teria de ser transparente).
6. **Output Properties, Format:** **Resolution** 1920 x 1080 (ou 1800 x 1200 para 3:2). Deixe **Percentage** em **25%** nos testes.

## Etapa 3: o teste "argila" (luz sem material)

1. Crie um **material** cinza: **Principled BSDF** com **Base Color** em cinza médio (valor perto de 0,5) e **Roughness** alta (0,8). Aplique em **todos** os objetos (arraste, ou o mesmo material em todos os slots).
2. No viewport, mude o **Viewport Shading** para **Rendered** (modo de renderização ao vivo), com a câmera ainda por criar (próxima etapa) ou olhe pela vista livre.

Você vai ver só luz e sombra. Este é o modo de julgar as etapas 4 e 5.

## Etapa 4: câmera

1. **Add, Camera** (menu Add). Selecione a câmera e use **View, Cameras, Set Active Object as Camera** (atalho **Ctrl+Numpad0**) para torná-la a câmera ativa e ver por ela (manual, Camera View; **Numpad0** alterna para a vista da câmera).
2. Posicione num canto oposto à janela, altura de **1,2 a 1,5 m**, olhando na diagonal para a parede da janela e o sofá. Para posicionar interativamente, ligue **Lock Camera to View** na vista de câmera e navegue (manual); depois desligue para não mover a câmera sem querer.
3. **Camera Properties, Lens:** **Focal Length** 24 mm (ver aula 3 para a conta, cerca de 74 graus horizontais com sensor de 36 mm). **Confira o Sensor Fit e o Width** do sensor na aba Camera.
4. **Verticais:** deixe a câmera **nivelada** (rotação em X de 90 graus, Y e Z conforme quiser para girar) e ajuste **Shift Y** (e Shift X) para enquadrar mais piso ou mais teto (manual, Camera, Shift). As linhas verticais das paredes devem ficar paralelas às bordas da imagem.
5. **Composição:** ative as guias de terços nas opções de exibição da câmera (o manual cita as linhas que dividem o quadro em terços; confira o nome do painel). Posicione a janela e o sofá em terços; deixe **Depth of Field desligado** (sala nítida).

## Etapa 5: a luz do dia

Opção A (principal, física): **Sol e céu procedurais.**

1. **World Properties, Surface:** troque a cor por **Sky Texture** (o nó do manual). Em **Sky Type**, use **Multiple Scattering** (o manual o descreve como o mais preciso).
2. **Sun Elevation:** **43 graus** (a altura da conta). **Sun Rotation:** gire até o sol vir do **norte** do seu modelo, ou seja, da janela. Confira olhando pelo viewport em modo Rendered: o sol deve entrar pelo vão e cair no piso.
3. **Sun Disc** ligado; **Sun Size** em cerca de 1 a 3 graus para uma sombra de borda macia (o sol real tem cerca de meio grau; um vídeo da Architecture Topics usa um valor maior para suavizar a sombra). **Sun Intensity** no padrão (o manual diz que o sol pode queimar o piso; reduza se estourar).
4. **Exposure** em **Color Management:** o manual avisa que os céus Single e Multiple Scattering são "muito brilhantes por padrão" e manda baixar a exposição. Comece com **-1** e mude por passos de 0,5 até a sala parecer natural (aula 1).
5. Use o **View Transform: False Color** como ferramenta de diagnóstico (manual: é um mapa de calor da intensidade): áreas vermelhas ou brancas estão estouradas, azuis muito escuras. Volte para AgX depois.

Opção B (mais limpa e rápida): luz de área no vão (aula 4). Desligue o sol do céu (ou use um céu só de cor) e adicione uma **luz de área retangular** (Add, Light, Area, forma **Rectangle**) do tamanho do vão (1,5 x 1,2 m), do lado de fora, apontada para dentro; **Power** alto (comece por centenas de watts e ajuste, o valor depende do tamanho e da exposição); cor levemente azulada. Sombras suaves e pouco ruído, sem a mancha de sol.

Opção C (fotografia real): uma HDRI do Poly Haven (aula 7) pelo **Environment Texture** no mundo, girando o mapeamento para o sol entrar pela janela.

**Se a imagem estiver muito ruidosa** (comum em interior com abertura pequena): suba as amostras; use a Opção B; use portais em luzes de área ou path guiding em CPU (o manual do Cycles cita ambos; aula 4).

## Etapa 6: teste de renderização

1. Com a câmera ativa e **Percentage** a 25%, renderize com **F12** (Render, Render Image; confira o nome do menu). A janela de render mostra o resultado.
2. Julgue com a lista:
   - A **mancha de sol** cai perto de 0,97 m a 2,25 m da parede da janela? Se não, gire o **Sun Rotation** ou revise a elevação.
   - A **sala** está legível, sem áreas pretas nem estouradas? (False Color ajuda.)
   - **Sombras suaves** nas bordas? Ajuste o tamanho do sol.
   - Vertical reta? Composição equilibrada?
3. Ajuste **exposição** (stops) antes de mexer na potência de qualquer luz.

## Etapa 7: materiais reais

Só agora, com a luz aprovada.

**Baixe as texturas** (CC0) do Poly Haven ou do ambientCG (aula 7): um piso de madeira, um reboco ou pintura de parede (ou use cor sólida), um tecido para o sofá. Guarde o link e a licença de cada uma.

**Piso de madeira:**
1. No editor de sombreamento, no **Principled BSDF** do piso, ligue a imagem **de cor** à **Base Color**; **rugosidade** à **Roughness** (com o nó de imagem em **Non-Color**); **normal** ao nó **Normal Map**, e a saída dele à entrada **Normal** (também **Non-Color**; se o relevo parecer invertido, o mapa é DirectX, aula 2).
   Um atalho: o complemento **Node Wrangler** (documentado no manual, precisa ser ativado em Preferences, Add-ons ou Extensions) tem a função de carregar todos os mapas de um Principled BSDF de uma vez (vários vídeos citam **Ctrl+Shift+T**; confira no seu Blender).
2. **Escala:** o mapeamento (nó **Mapping**, **Scale**; ou projeção **Box** do nó de imagem, aula 2). Consulte o tamanho real da textura e ajuste para que uma tábua tenha largura plausível (7 a 15 cm) em relação à porta (0,80 m).
3. **Coat** leve se for piso envernizado (aula 2) e ligeira variação de rugosidade.

**Paredes:** **Base Color** perto de **0,8** (branco de parede real, aula 2, não 1,0); **Roughness** de 0,6 a 0,9. **Teto:** um pouco mais claro que as paredes (0,85). **Sofá:** tecido; se quiser, camada **Sheen** (aula 2). **Vidro:** veja abaixo.

**Vidro da janela (opcional; deixar sem vidro ainda é válido):** um plano de vidro comum bloqueia o sol nos raios de sombra. O tutorial de Francesco Milanese (aula 2) mistura um nó **Glass BSDF** com um **Transparent BSDF** via **Mix Shader**, com o fator controlado por um nó **Light Path** (saídas de raio de sombra e de reflexão) e um nó **Math** em modo Maximum, de modo que a luz do sol passe e o vidro ainda reflita. Alternativamente, o manual oferece **Thin Wall** no Principled BSDF para vidros de janela; o efeito sobre a sombra desse modo **não foi confirmado**, teste. Renderize um teste para ver se o sol continua entrando.

Renderize de novo, a 25%, e compare com o teste argila: a luz mudou (o piso claro reflete mais luz)? Ajuste a exposição.

## Etapa 8: render final

1. **Salve o arquivo** (Ctrl+S).
2. **Output Properties, Format:** **Percentage 100%**.
3. **Sampling:** **Max Samples** 512 (ou mais), **Noise Threshold** 0,01, **Denoise** com **OpenImageDenoise**, **Passes** em **Albedo + Normal**, **Prefilter Accurate** e **Quality High** (opções do manual; mais lento e mais limpo).
4. Renderize (**F12**). Anote o **tempo** e o **hardware**: é o seu dado para calibrar as próximas.
5. Salve a imagem no menu da janela de render (**Image, Save As**; confira o nome exato) em **PNG** e, se for retocar, também em **OpenEXR** (aula 7).

## Etapa 9: pós-produção

Abra a imagem no GIMP, no Photopea ou no Krita (aula 7). Ajustes, em pequenos passos e comparando com o original:

1. **Curvas** ou **níveis** para dar contraste suave (AgX sai achatado).
2. **Sombras e realces:** recupere detalhes na janela sem clarear demais.
3. **Balanço de branco:** conferir se a sala não ficou verde.
4. **Nitidez** leve, **vinheta** muito sutil.
5. Compare **antes e depois** lado a lado. Se o efeito é visível a olho nu, exagerou.

## Etapa 10: variante noturna

Mude a luz para o **crepúsculo ou noite** para exercitar a aula 1 (cores) e a aula 4 (lâmpadas):

1. **Sky Texture:** **Sun Elevation** negativa (um vídeo da Architecture Topics usa cerca de -5 graus) ou reduza a intensidade do fundo.
2. Adicione **luzes pontuais ou de área** no teto e um **spot** ou **abajur** (Add, Light). Cor: use o parâmetro de **Temperature** da luz (manual) em **2700 a 3000 K** para as lâmpadas. Potências de partida do manual: LED de 800 lm, cerca de **2,1 W** (Point); tubo fluorescente de 2500 lm, cerca de **4,5 W** (Area, Rectangle). Aumente a exposição ao gosto.
3. **IES:** se tiver um arquivo, use o nó **IES Texture** numa luz pontual (aula 4).
4. Deixe a janela com **azul**: o contraste de cor (janela azulada, lâmpada quente) é o que dá a sensação de "casa habitada".

## Checklist final de verificação

| Pergunta | Se a resposta for "não" |
|---|---|
| A mancha de sol cai onde a conta previu? | Revise Sun Elevation, Sun Rotation e o eixo "norte" |
| A janela tem detalhe (não é um retângulo branco)? | Exposição, AgX, ou clarear sombras na pós |
| Existem cantos completamente pretos ou pontos brancos isolados (fireflies)? | Mais amostras, mais saltos, ou Clamping (aula 5) |
| O piso e as paredes têm escala correta comparadas à porta? | Escala do mapeamento (aula 2) |
| A cor base das paredes é menor que 1? | Aula 2 |
| Há luz de contraste de cor (janela azulada, lâmpada quente)? | Aula 1 |
| Verticais paralelas, composição aprovada? | Câmera nivelada e Shift (aula 3) |
| Guardei o link e a licença de cada textura? | Aula 7 |

## Se você não usa Blender

O mesmo processo vale em outros programas:
- **Sweet Home 3D (módulo 9, aula 6):** bússola e data/hora no painel de foto, luzes do catálogo, render do menu de foto; ajuste com pequeno e entregue com grande.
- **D5 Community ou Twinmotion (aula 6):** sol por data/hora, luzes de área, câmera com FOV/focal e exposição manual.
- Use os passos 2 (luz sem material), 4 (câmera), 6 (teste) e 9 (pós) em qualquer um.

## Resumo

- Ordem: modelo, luz com material neutro, materiais, câmera, teste pequeno, render final, pós.
- Valide a luz com uma conta: altura do sol ao meio-dia = `90 - |latitude - declinação|`; a mancha de sol no piso cai a `altura_do_ponto / tan(altura_do_sol)` da parede.
- No Blender: **Cycles**, **AgX**, **Sky Texture** (ou luz de área no vão, ou HDRI), **Noise Threshold**, **OpenImageDenoise** com **Albedo e Normal**, câmera nivelada com **Shift**.
- Materiais em faixa realista (parede perto de 0,8), escala conferida com a porta, mapas de dados em Non-Color.
- Registre tempo e hardware, e guarde as licenças dos ativos.

## Para aprofundar

- [ ] [Easy Interior Lighting in Blender (Tutorial)](https://www.youtube.com/watch?v=cPDdjTh0EYM) (Architecture Topics, inglês): céu procedural, sol, luzes escondidas e IES em cena de interior.
- [ ] [Lighting a Simple Interior Room in Blender (Beginner Tutorial)](https://www.youtube.com/watch?v=QVNIIQ4kW_I) (Thilakanathan Studios, inglês, interface antiga): sala com janelas iluminada por luzes de área, do zero.
- [ ] [Basic Workflow for Architectural Rendering in Blender (playlist)](https://www.youtube.com/playlist?list=PLCPczqB52NJBiaToXaF1ZHkdlh12NAZei) (cgbintang, inglês): fluxo de render de arquitetura no Blender, pelo título.
- [ ] [The FASTEST Cycles Renders you can get in Blender!](https://www.youtube.com/watch?v=Jv1vk8YWCsQ) (Kaizen, inglês): ajuste de amostras e denoising para a etapa 8.
- [ ] [Blender's Cycles vs. Eevee (Ray Tracing vs. Real Time)](https://www.youtube.com/watch?v=fAiai0fCBOw) (Remington Creative, inglês): para decidir motor.
- [ ] [Curso de Blender para arquitetura](https://solare.org.br/2022/10/07/curso-de-blender-para-arquitetura/) (Solare, português): curso gratuito; a aula 5 cobre materiais e a 6 cobre render e iluminação.
- [ ] [Iluminação de interiores com Cycles, o truque das janelas](https://solare.org.br/2024/04/12/iluminacao-de-interiores-com-cycles-o-truque-das-janelas/) (Solare, português).
- [ ] [O Material Correto para Vidros de Janela no Cycles](https://www.francescomilanese.com/pt/tutorials-br-all/tut-197-br-b3d-real-window-glass.html) (Francesco Milanese, transcrição em português): o vidro que deixa o sol passar.
- [ ] [Camera View](https://docs.blender.org/manual/en/latest/editors/3dview/navigate/camera_view.html) e [Format](https://docs.blender.org/manual/en/latest/render/output/properties/format.html) (Manual do Blender 5.2 LTS).

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido. Vídeos de versões antigas do Blender podem mostrar menus de outro nome.

[Voltar ao módulo](./README.md) e siga para o [Módulo 14: Projeto Completo, Modelando Sua Casa](../14%20-%20Projeto%20Completo%20Modelando%20Sua%20Casa/README.md).
