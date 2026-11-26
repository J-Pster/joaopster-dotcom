# Aula 3: Câmera e composição

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que duas imagens do mesmo modelo, com a mesma luz e os mesmos materiais, podem parecer uma foto profissional ou uma captura de tela, só mudando a câmera?*

## Por que a câmera é uma decisão de projeto

Nas aulas 1 e 2 a imagem dependeu de luz e material. A câmera decide **o que entra no quadro e com que geometria de perspectiva**. Nos módulos 9 e 10 você navegava pelo modelo com câmeras de trabalho (altura dos olhos, campo de visão). Aqui a câmera vira uma peça de comunicação: ela decide o que o observador vai ver e sentir sobre a casa. E um render sério simula uma câmera de verdade, com lente, sensor e abertura, porque o olho humano e as fotos que usamos como referência seguem essas regras.

## Distância focal e campo de visão

**Distância focal** (em milímetros) é a distância entre o centro óptico da lente e o sensor. Ela define o **campo de visão** (*field of view*, FOV): o quanto da cena cabe no quadro. Regra: **focal curta, campo largo (grande angular); focal longa, campo estreito (teleobjetiva).** O manual do Blender descreve isso na câmera: focais longas dão FOV menor (mais zoom), focais curtas mostram mais cena.

A conta, por semelhança de triângulos (fórmula da óptica, presente em textos de fotografia):

`FOV = 2 x arctan( tamanho_do_sensor / (2 x distância_focal) )`

Para um sensor de 36 mm de largura (padrão da fotografia "full frame"), o campo **horizontal** é:

| Focal | Campo horizontal | Uso típico |
|---|---|---|
| 14 mm | cerca de 104 graus | ultra grande angular, distorce muito |
| 18 mm | 90 graus | interiores pequenos |
| 24 mm | cerca de 74 graus | interiores e fachadas (muito usada) |
| 35 mm | cerca de 54 graus | interiores amplos, mais natural |
| 50 mm | cerca de 40 graus | "visão normal", detalhes |
| 85 mm | cerca de 24 graus | detalhes, retrato |

Cálculo de exemplo: 24 mm num sensor de 36 mm: `2 x arctan(36 / 48) = 2 x arctan(0,75) = 2 x 36,9 = 73,7 graus`.

Duas observações importantes:

- Campos citados em tabelas de fotografia costumam ser **diagonais** (por exemplo, 24 mm = 84 graus na diagonal), que são maiores que os horizontais acima. Ao comparar com o número que o seu programa mostra, veja se ele usa horizontal ou diagonal. No Blender, o modo de ajuste do sensor (*Sensor Fit*: Auto, Horizontal, Vertical) define a que dimensão o ângulo se refere, e o tamanho do sensor pode ser alterado; **o padrão é geralmente 36 mm, confira em Camera do seu arquivo**.
- Alguns programas expõem o **FOV em graus** em vez da focal em mm (o Sweet Home 3D, como vimos no módulo 9, e o D5, segundo um dos vídeos citados na aula 6); outros usam a focal (um dos vídeos de Twinmotion cita 28 mm). Use a tabela como ponte: 90 graus é 18 mm, 60 graus é cerca de 31 mm.

### Qual focal usar para casas

- **Interiores:** 18 a 28 mm de focal equivalente a 36 mm (cerca de 75 a 100 graus horizontais). Um cômodo pequeno pede campo largo para caber. O autor Leandro Amaral, em texto sobre fotografia de maquete eletrônica, diz que as lentes mais usadas em arquitetura ficam entre 10 e 24 mm para fotos externas.
- **Fachadas externas:** 24 a 35 mm.
- **Detalhes (uma bancada, uma mesa):** 50 mm ou mais.

**Distorção de grande angular:** focais muito curtas esticam objetos nas bordas do quadro (um sofá no canto parece mais largo). É um efeito real de projeção. Abaixo de uns 20 mm, o efeito começa a incomodar em móveis nas bordas. Não use grande angular só para "caber mais": afaste a câmera, se o modelo permitir (mas um modelo de casa tem paredes, então o limite prático é a parede atrás da câmera).

**Um mal-entendido comum:** que a teleobjetiva "achata" a imagem e a grande angular "aumenta o espaço". O que muda a perspectiva é a **distância da câmera ao assunto**, e a focal só obriga você a se afastar ou aproximar para o mesmo enquadramento. Este ponto é explicado no guia de distância focal citado abaixo. Para a casa: um cômodo parece maior numa imagem de 18 mm feita perto do canto porque a perspectiva exagera a distância entre o primeiro plano e o fundo. Isso é uma ferramenta, mas cuidado: se você quer avaliar se a sala da sua casa é confortável, use uma focal moderada (24 a 35 mm), senão vai se enganar sobre o tamanho real.

## Perspectiva de arquitetura: as verticais devem ser verticais

Numa câmera comum, se você **inclina** o corpo para cima para enquadrar um prédio ou uma parede alta, as linhas verticais parecem convergir para o alto (efeito de "prédio caindo", chamado em fotografia de *keystoning*). O olho humano não percebe assim: para nós, as paredes são verticais. Por isso, em imagem de arquitetura, a convenção é **manter as linhas verticais paralelas entre si e ao lado da imagem**.

Como se consegue:

1. **Câmera nivelada:** manter a câmera horizontal (sem inclinar para cima ou para baixo). As verticais ficam verticais, mas o enquadramento pega muito piso e pouco teto (ou o contrário).
2. **Deslocamento de lente (*shift*):** a lente e o sensor deslocam-se um em relação ao outro, o que muda o recorte da imagem **sem inclinar** a câmera. O manual do Blender define **Shift** como o ajuste dos pontos de fuga e demonstra: com o shift as linhas horizontais permanecem horizontais; com a rotação do objeto câmera, ficam inclinadas. O manual também esclarece: usar shift equivale a renderizar com FOV maior e recortar fora do centro.
3. **Correção depois** (pós-produção): corrigir perspectiva em software de edição (existe em GIMP, Krita, darktable). Perde-se resolução nas bordas.

No Blender, o procedimento usual é deixar a câmera **nivelada** (rotação em X de 90 graus, olhando na horizontal; essa informação vem de fórum da comunidade, não do manual, confira no seu arquivo) e ajustar **Shift Y** no painel da câmera até o enquadramento desejado. Um vídeo do canal CG Masters mostra esse ajuste para render de arquitetura (link abaixo). Existem também extensões que fazem isso com um clique, mas você não precisa delas.

Outros programas têm o mesmo recurso com outros nomes: correção de verticais, *two-point perspective* (perspectiva de dois pontos de fuga, só há dois pontos de fuga no horizonte porque as verticais não convergem), ou "manter vertical". No D5, um dos vídeos citados diz para deixar a vista em "two-point perspective" no render.

## Altura, posição e enquadramento

- **Altura da câmera.** A altura dos olhos de um adulto em pé é em torno de 1,60 m (usada nos módulos 9 e 10). Na prática de fotografia de interiores, câmera um pouco mais baixa (1,0 a 1,3 m) dá cômodos mais imponentes e evita ver o topo dos móveis; não é norma, é hábito de estúdio, e vale testar ambos.
- **Posição:** nos cantos, olhando na diagonal, pega-se mais parede; no centro da parede, simetria.
- **Evite:** câmera colada em parede (distorção), câmera dentro de móvel, quadro cortando a moldura da janela ao meio, horizonte torto.

## Composição: guiar o olhar

Composição é a organização do quadro. Algumas regras clássicas de fotografia, usadas em archviz, descritas em texto de Leandro Amaral e em outras fontes:

- **Regra dos terços:** divida o quadro com duas linhas verticais e duas horizontais, formando nove partes. Coloque o assunto principal nas linhas ou nos pontos de cruzamento. O Blender tem guias de composição na câmera (o manual cita linhas que dividem o quadro em terços, ativáveis nas propriedades da câmera; confira o nome exato do painel na sua versão).
- **Linhas de guia:** corredores, bordas de piso, vigas levam o olhar até o ponto de interesse. Linhas diagonais criam dinamismo.
- **Simetria:** funciona para fachada frontal e ambientes formais; transmite estabilidade.
- **Enquadramento dentro do enquadramento:** ver a sala através de uma porta ou janela.
- **Camadas (primeiro plano, plano médio, fundo):** um elemento em primeiro plano (uma cadeira, um vaso, ligeiramente fora de foco) dá profundidade.
- **Ordem visual:** menos objetos, mais foco. Um quadro cheio de objetos parece bagunça, e o efeito de "catálogo" some. O texto do arquiteto Leandro Amaral cita o minimalismo como recurso.
- **Horizontal ou vertical:** casas térreas e ambientes largos pedem quadro horizontal; edifícios altos, vertical (na casa de 2 andares, teste).

**Proporção da imagem** (largura por altura): 3:2 e 4:3 são "de foto"; 16:9 é "de tela e vídeo". O manual do Blender define a resolução em **Output Properties, painel Format, Resolution X e Y** (com **Percentage** para reduzir o tamanho de testes mantendo a proporção, e **Swap Dimensions** para virar retrato/paisagem).

## Profundidade de campo

Câmeras reais focam numa distância; o que está antes e depois fica borrado. A faixa nítida é a **profundidade de campo** (*depth of field*, DoF). O manual do Blender descreve os controles: **Focus Object** ou **Focus Distance** (onde focar) e **F-Stop** (a abertura: **valores baixos dão efeito de desfoque forte**). O desfoque das luzes fora de foco tem forma poligonal (*bokeh*), controlada pelo número de lâminas (**Blades**).

Em arquitetura, o efeito de DoF forte é usado com moderação: você quer mostrar o projeto, então quase tudo nítido, com no máximo um desfoque discreto em primeiro plano para dar ar de foto. Um F-Stop muito baixo faz a casa parecer uma maquete em miniatura (efeito *tilt shift*). Em programas de tempo real (D5, Twinmotion), o DoF costuma vir desligado; ligue em cenas de detalhe.

Um aviso técnico do manual do Blender: no motor de tempo real (EEVEE), o DoF é um filtro de pós-processamento e só funciona na vista de câmera; no Cycles (path tracing) ele é calculado fisicamente, mas pede mais amostras (aula 5).

## Cuidados práticos

- **Recorte (clipping):** o Blender tem Clip Start e End na câmera; objetos além do limite não aparecem diretamente. Se paredes "somem" quando a câmera chega perto, é esse valor.
- **Cena de câmeras:** salve várias câmeras (uma por ângulo) em vez de mexer numa só; assim você pode re-render tudo depois de mudar a luz.
- **Verifique o horizonte:** linha do horizonte reta.
- **Teste sempre com baixa resolução** e ligue as guias de composição; só depois suba a qualidade (aula 7).

## Resumo

- A câmera decide o que a imagem mostra e a geometria da perspectiva. Simule a de verdade: focal, sensor, abertura.
- `FOV = 2 x arctan(sensor / (2 x focal))`; com sensor de 36 mm, 24 mm dá cerca de 74 graus horizontais. Interiores usam 18 a 28 mm; detalhes, 50 mm ou mais.
- O que muda a perspectiva é a distância da câmera, não a focal em si; grande angular demais distorce as bordas.
- Em arquitetura, verticais devem ficar paralelas: câmera nivelada e ajuste de **shift** em vez de inclinar a câmera (manual do Blender).
- Composição: regra dos terços, linhas de guia, simetria, camadas, menos objetos. DoF discreto; F-Stop baixo gera desfoque forte.
- Resolução e proporção fazem parte da decisão; teste pequeno, entregue grande.

## Para aprofundar

- [ ] [Blender Tip - Camera Shift for Architecture Renders](https://www.youtube.com/watch?v=b1rUuvH3fs8) (CG Masters, inglês): correção de verticais com o shift da câmera.
- [ ] [Blender Cameras - Focal Length & Aperture Explained](https://www.youtube.com/watch?v=UlYwlewfcfQ) (My 3D POV, inglês): animação curta de focal e abertura na câmera do Blender.
- [ ] [CURSO DE FOTOGRAFIA LENTES AULA 02](https://www.youtube.com/watch?v=QDSS9YdDRXs) (Mauricio Guartelá, PT-BR): grande angular, lente normal e teleobjetiva em fotografia, com menção a arquitetura (pelo título e pela descrição da busca; não assistido).
- [ ] [Fotografia na Maquete Eletrônica: 12 Dicas Infalíveis de Composição](https://arquitetoleandroamaral.com/fotografia-na-maquete-eletronica/) (Arquiteto Leandro Amaral, português): terços, simetria, moldura, minimalismo, linhas diagonais, para render.
- [ ] [Cameras](https://docs.blender.org/manual/en/latest/render/cameras.html) (Manual do Blender 5.2 LTS): focal, FOV, shift, profundidade de campo, abertura, sensor.
- [ ] [Distância focal em fotografia: guia completo](https://camera-duel.com/pt/guide/comprendre-la-distance-focale) (Camera Duel): tabelas de ângulo de visão e explicação da compressão de perspectiva por distância (site de terceiros).

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido.

[Próxima aula: Luz de exterior e de interior](./04%20-%20Luz%20de%20Exterior%20e%20de%20Interior.md)
