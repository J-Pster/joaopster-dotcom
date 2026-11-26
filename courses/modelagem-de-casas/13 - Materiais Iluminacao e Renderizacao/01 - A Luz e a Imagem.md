# Aula 1: A luz e a imagem

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que a luz faz de fato numa cena 3D, e por que a mesma sala pode parecer uma foto ou um desenho de computador só mudando a luz?*

## Por que começar pela luz

Uma imagem 3D é o resultado de um cálculo: para cada ponto da tela, o programa descobre que luz chegaria à câmera vinda daquele ponto. Se a luz do cálculo for pobre (uma única fonte, sem sombra suave, sem reflexo entre paredes), a imagem parece falsa, não importa quão bom seja o modelo. Se a luz for boa, um modelo simples já parece crível. No módulo 2 você aprendeu de onde vem a luz natural e como ela entra na casa (lux, fator de luz do dia, orientação). Aqui vemos o que a máquina faz com essa luz.

Esta aula vale para qualquer programa: Sweet Home 3D, SketchUp com render, Blender, Twinmotion, D5. Os nomes de botões mudam, a física não.

## Luz direta e luz indireta

- **Luz direta:** vai da fonte (sol, lâmpada) até a superfície em linha reta, sem tocar em mais nada. Cria a área iluminada e a sombra nítida.
- **Luz indireta:** chegou à superfície depois de bater em outra(s). O sol entra pela janela, ilumina o piso (luz direta no piso), e o piso reflete parte dessa luz para o teto e as paredes (luz indireta nelas). O céu também é fonte indireta: a luz do sol espalhada pela atmosfera.

Em uma sala real com uma janela, a maior parte do que você enxerga é luz indireta. Uma parede que o sol nunca toca continua visível justamente porque recebe luz refletida do piso, da parede oposta e do céu.

**Iluminação global** (*global illumination*, GI) é o nome de tudo isso junto: calcular a luz direta e todas as reflexões entre superfícies. Um programa sem GI só calcula a luz direta e "pinta" um valor fixo de luz ambiente no resto. O resultado: sombras pretas chapadas e cantos sem a leve escurecida natural de onde a luz mal chega. A GI produz automaticamente três efeitos que denunciam realismo:

1. **Sangramento de cor** (*color bleeding*): um piso de madeira laranja tinge de laranja a base da parede branca.
2. **Escurecimento gradual nos cantos e sob móveis**, porque ali chega menos luz refletida.
3. **Sombras com interior claro**: a sombra de uma mesa não é preta, é iluminada pela luz que vem do resto da sala.

O bloqueio de luz nos cantos tem nome próprio, **oclusão de ambiente** (*ambient occlusion*, AO). Você encontrará o termo de novo na aula 2, como um mapa de textura, e na aula 5, como aproximação usada por motores rápidos.

## Quanta luz: intensidade, exposição e o problema dos números enormes

No mundo físico, as grandezas são as do módulo 2: fluxo luminoso em lúmens (lm), iluminância em lux (lx = lm/m2). Os programas de render costumam usar outra escala, a de **potência radiante**, em watts (W), que é a energia emitida em forma de luz, não a potência elétrica da lâmpada. Isto causa confusão frequente: uma lâmpada LED vendida como "equivalente a 100 W" consome bem menos que isso da rede elétrica e emite um fluxo luminoso da ordem de 1500 lm (ordem de grandeza, confira a embalagem), e nenhum desses números é o valor que você digita num programa.

O manual do Blender (versão 5.2 LTS, consultado em setembro de 2026) dá uma tabela de potências radiantes típicas para luzes pontuais e de área (valores do próprio manual):

| Fonte real | Potência no Blender | Tipo sugerido |
|---|---|---|
| Vela | 0,05 W | Point |
| Lâmpada LED de 800 lm | 2,1 W | Point |
| Lâmpada de 1000 lm | 2,9 W | Point |
| Refletor PAR38 de 1500 lm | 4 W | Area, Disk |
| Lâmpada fluorescente tubular de 2500 lm | 4,5 W | Area, Rectangle |

Para o sol, o manual usa **irradiância em W/m2** (energia por metro quadrado) e sugere: céu claro 1000 W/m2, céu nublado 500 W/m2, céu encoberto 200 W/m2, luar 0,001 W/m2. Do lado de fora, o sol é muito mais intenso que qualquer luz de dentro da sala (o módulo 2 deu as ordens de grandeza em lux), e o olho não vê essa diferença toda porque a pupila se fecha. O programa, que não tem pupila, precisa de um substituto: a exposição.

**Exposição** é o ajuste que decide quanto do brilho calculado vira brilho da imagem. Mede-se em **stops** (fotografia): cada stop dobra ou divide por dois o brilho. O manual do Blender dá a conta: `valor_final = valor_calculado x 2^(exposição)`. Exposição +1 dobra, +2 quadruplica, -1 divide por 2, -2 divide por 4.

Exemplo resolvido: a sala está saindo estourada (branca) com o sol de 1000 W/m2 entrando pela janela. Você reduz a exposição em 3 stops: `2^(-3) = 1/8`, o brilho da imagem cai a 12,5% e os detalhes voltam. O manual avisa exatamente isso: valores físicos de luz "produzem luzes muito mais brilhantes ou escuras do que você espera", porque o olho se adapta e o motor não; a compensação é o ajuste de exposição.

Na prática, **o mesmo par (luz, exposição) se compensa**: dobrar a potência da lâmpada e baixar 1 stop na exposição dá a mesma imagem. Por isso duas pessoas com o mesmo programa podem usar potências muito diferentes e obter imagens iguais. O que importa é a **proporção entre as luzes** da cena (janela versus lâmpadas, por exemplo), e a exposição final ajusta o conjunto.

## Cor da luz: temperatura em kelvin

A luz branca não é uma cor única. Um corpo aquecido brilha com cor que depende da temperatura: brasa vermelha, filamento amarelo, ferro branco-azulado. **Temperatura de cor** é a temperatura (em **kelvin**, K) de um corpo negro ideal que emitiria luz daquela cor. Não é a temperatura física da lâmpada. Quanto mais baixo o número, mais alaranjada a luz; quanto mais alto, mais azulada.

Valores típicos, em ordem de grandeza (fontes de iluminação comerciais):

| Fonte | Temperatura aproximada |
|---|---|
| Vela | cerca de 1900 K |
| Lâmpada incandescente / LED branco quente | 2700 K |
| LED neutro (escritório) | cerca de 4000 K |
| Luz do dia (sol com céu limpo, meio-dia) | cerca de 5500 a 6500 K |
| Céu nublado ou sombra aberta | cerca de 6500 a 7500 K |

Os valores de luz de lâmpada (2700 K, 4200 K, 5600 K) aparecem em materiais de fabricantes brasileiros de iluminação; os da vela e do céu nublado são ordens de grandeza de literatura, não conferidos numa norma aqui.

Por que isso importa no render: o **olho se adapta**. Numa sala com lâmpada de 2700 K você a acha "branca" depois de um minuto. A câmera não se adapta, a menos que você diga qual é o "branco" da cena (o **balanço de branco**). Duas consequências:

- Uma cena interna à noite, com luz de 2700 K, sai bem laranja se você ajustar o balanço de branco para luz do dia. Isso costuma ser desejável (é a sensação de "aconchego").
- Uma sala de dia tem duas luzes de cores diferentes brigando: a **janela (azulada, 6000 K ou mais)** e as **lâmpadas (alaranjadas)**. É esse contraste de cor que dá vida a imagens de interiores. Uma imagem com todas as luzes exatamente brancas parece de catálogo de software.

O Blender tem o parâmetro **Temperature** nas luzes (o manual descreve como "temperatura de corpo negro em kelvin, para cores naturais de emissão"); o campo **Color** funciona como tinta adicional. O manual do Blender também tem um **White Balance** em Color Management, com temperatura e tint. Confira o nome exato dos campos na sua versão, porque a interface muda entre versões.

## Sombras: por que umas são duras e outras suaves

A sombra é a ausência de luz direta de uma fonte. O que define se ela tem borda nítida ou macia é o **tamanho da fonte visto da superfície**:

- Fonte minúscula (uma lâmpada pontual, o sol visto de uma janela estreita) gera **sombra dura**: ou você vê a fonte por inteiro ou não vê.
- Fonte grande (uma janela ampla com céu nublado, uma luminária difusa) gera **sombra suave**: de alguns pontos da superfície você vê parte da fonte, e a **penumbra** (zona de transição) aparece.

Regra prática: quanto maior a fonte em relação à distância, mais suave a sombra. O manual do Blender confirma nas propriedades das luzes: fontes com **raio maior têm sombras e brilhos especulares mais suaves e parecem mais fracas**, porque a mesma potência se espalha numa área maior. O sol, no manual, tem o parâmetro **Angle** (diâmetro angular), que é exatamente isso: um sol real subtende cerca de meio grau no céu, e aumentar o valor suaviza as sombras.

Consequência para o render de uma sala: a luz de janela tem sombras de borda suave, porque a "fonte" é a abertura inteira mais o céu. Colocar a luz da janela como um **retângulo do tamanho do vão** (luz de área) é o jeito que dá esse resultado. O manual sugere exatamente essa aplicação: uma luz de área retangular no lugar de uma janela.

## Do valor calculado à imagem: exposição e tone mapping

O motor de render calcula, para cada pixel, uma quantidade de luz **sem limite superior** (o sol pode valer 100.000 vezes a sombra). Uma tela só mostra do preto ao branco, ou seja, uma faixa estreita. O processo tem três passos (explicação do conceito, detalhada no vídeo de apoio abaixo):

1. **Cálculo linear:** os valores de luz são somados como na física (duas lâmpadas iguais dão o dobro de luz).
2. **Tone mapping** (mapeamento de tons): comprime a faixa enorme de valores para a faixa que a tela mostra, preservando detalhes em sombras e em luzes altas e desaturando as cores muito brilhantes, como o filme faz.
3. **Conversão para a tela** (curva gama do sRGB): corrige o fato de que nossa percepção e as telas não são lineares.

O manual do Blender chama o passo 2 de **View Transform** e lista as opções (Blender 5.2 LTS, página "Displays and Views"):

- **Standard:** sem tone mapping, só a conversão da tela. O que passa do branco fica estourado (tudo vira branco chapado). Serve para gráficos não realistas.
- **AgX:** o manual diz que melhora o Filmic, dá mais realismo, tem cerca de 16,5 stops de faixa dinâmica e desatura as cores muito expostas, "para imitar a resposta natural do filme". Costuma ser a boa escolha inicial para arquitetura.
- **Filmic:** o manual o marca como obsoleto (*deprecated*), substituído pelo AgX.
- **ACES 1.3, ACES 2.0, Khronos PBR Neutral:** padrões usados em cinema e em fotografia de produto; existem para casos específicos.
- **False Color:** mapa de calor da intensidade, para você ver **quais áreas estão estouradas e quais estão pretas** e ajustar a exposição.
- **Raw:** só para inspeção, não para entrega final.

Na aba **Color Management** das propriedades de render ficam a View Transform, o **Look** (efeito artístico), a **Exposure** (em stops, a fórmula acima), a **Gamma** e o **White Balance**. Sempre que uma imagem sair "lavada", com o branco acinzentado, ou "queimada", com janelas sem detalhe, comece por aí antes de mexer nas luzes.

Um detalhe importante: a Exposure do **Color Management** age depois do cálculo (na visualização); a **Exposure** do painel **Film** age nos dados. O manual do Cycles faz essa distinção. Para uma imagem que você vai retocar depois em outro programa (aula 7), a diferença importa.

Em outros programas o conceito se repete com outros nomes: exposição automática ou manual, tone mapper, curva de resposta da câmera. Se você for usar D5, Twinmotion ou Enscape, procure "exposição" e desative a automática para ter controle (a aula 6 detalha).

## Por que uma imagem "parece falsa": diagnóstico rápido

| Sintoma | Causa provável em termos de luz |
|---|---|
| Sombras pretas e chapadas | Sem luz indireta (GI fraca ou desligada) ou sem luz de preenchimento |
| Tudo com a mesma claridade, sem "profundidade" | Uma única luz frontal ou luz ambiente demais |
| Janela branca estourada, sem paisagem | Exposição alta demais para o brilho externo, ou faixa dinâmica baixa (Standard) |
| Sala "de laboratório" | Todas as luzes brancas com a mesma cor, sem contraste janela azulada versus lâmpada quente |
| Sombras de borda cortante em tudo | Fontes minúsculas; use luzes de área e aumente o tamanho do sol |
| Imagem acinzentada e sem contraste | View Transform Standard mal exposto ou exposição baixa; ajuste na aula 7 |

## Resumo

- Luz **direta** vem da fonte; **indireta** vem de reflexões. A **iluminação global** calcula as duas e produz sangramento de cor, cantos escurecidos e sombras com interior claro.
- Potência de luz em render é potência radiante (W) ou irradiância do sol (W/m2), não os watts elétricos da lâmpada. O manual do Blender dá tabelas de referência.
- **Exposição** em stops: `valor x 2^(exposição)`. Luz e exposição se compensam; o que importa é a proporção entre as luzes.
- **Temperatura de cor** em kelvin: baixo é laranja, alto é azul. Contraste entre janela (azulada) e lâmpada (quente) dá realismo.
- Sombra suave vem de fonte grande; sombra dura, de fonte pequena. Tone mapping (AgX, Filmic, Standard) comprime a luz para a tela.

## Para aprofundar

- [ ] [A temperatura da cor e os tipos de luz](https://www.youtube.com/watch?v=_NsIhOGm9-k) (Entre Pra Morar): em português, temperatura de cor de lâmpadas (foco em decoração, serve para entender o kelvin).
- [ ] [AgX vs Filmic - More Realistic Renders in Blender 4.0](https://www.youtube.com/watch?v=b83ElHqmFO0) (Bouncing Rays, inglês): explica por que precisamos de tone mapping e a diferença entre linear e percepção.
- [ ] [AgX in Blender 4.0. It's coming, are you ready?](https://www.youtube.com/watch?v=YsTQEzcmD5w) (Christopher 3D, inglês): compara Standard, Filmic e AgX na mesma cena.
- [ ] [The Secret to Rendering Vibrant Colors with AgX in Blender is the Raw Workflow](https://www.youtube.com/watch?v=hS7uaTquwWc) (CG Cookie, inglês): exposição e cor depois do tone mapping, para quem quer ir mais fundo.
- [ ] [Displays and Views](https://docs.blender.org/manual/en/latest/render/color_management/displays_views.html) (Manual do Blender 5.2 LTS): lista oficial de View Transforms, exposure, gamma e white balance.
- [ ] [Light Objects](https://docs.blender.org/manual/en/latest/render/lights/light_object.html) (Manual do Blender 5.2 LTS): tipos de luz, tabela de potências reais e valores do sol.
- [ ] [O que é iluminação direta e indireta?](https://blog.nvidia.com.br/blog/o-que-e-iluminacao-direta-e-indireta/) (NVIDIA Brasil): artigo curto em português sobre GI.

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido.

[Próxima aula: Como o material responde à luz](./02%20-%20Como%20o%20Material%20Responde%20a%20Luz.md)
