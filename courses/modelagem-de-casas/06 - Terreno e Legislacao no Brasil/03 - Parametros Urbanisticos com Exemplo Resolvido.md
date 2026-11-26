# Aula 3: Parâmetros urbanísticos com exemplo resolvido

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que significam taxa de ocupação, coeficiente de aproveitamento, recuos, gabarito e permeabilidade, e como eles definem o volume máximo que cabe num lote?*

> **Aviso obrigatório:** modelo de hobby não é projeto legal. Construir exige projeto aprovado e responsável técnico. Isto não é aconselhamento jurídico e as regras variam por município. **Todos os números deste exemplo são fictícios**, escolhidos para ensinar o cálculo; os da sua cidade estão na lei de zoneamento dela.

## Por que existem parâmetros

Cada parâmetro é uma resposta numérica a uma das alavancas da Aula 1: **intensidade** (TO e CA), **forma** (recuos e gabarito) e **impacto ambiental** (permeabilidade). Juntos, eles desenham no espaço um volume máximo dentro do qual o projeto precisa caber, o chamado **envelope construtivo**. Modelar em 3D sem conhecer esse envelope é projetar às cegas.

## Os parâmetros, um a um

**Taxa de ocupação (TO).** Percentual do lote que a **projeção horizontal** da edificação pode ocupar. É a "sombra" que a casa faz no chão quando vista de cima. Serve para garantir área livre no lote (luz, ventilação, jardim, infiltração de água).

`TO = área de projeção da edificação / área do lote`

Regras de contagem variam: muitas leis excluem da projeção beirais até certa largura, marquises, pergolados abertos ou subsolos totalmente enterrados. Confira o que a lei da sua cidade computa.

**Coeficiente de aproveitamento (CA).** Número que multiplicado pela área do lote dá a **área construída total máxima**, somando todos os pavimentos. Serve para limitar a densidade (quantas pessoas cabem, quanto se usa a infraestrutura).

`área construída máxima = CA x área do lote`

Existe o **CA básico** (o que todo proprietário tem direito) e, em algumas cidades, o **CA máximo**, que só se alcança pagando uma contrapartida ao município (a outorga onerosa do direito de construir, instrumento do Estatuto da Cidade). Para casas, em geral vale o básico. O que entra na área computável varia: garagens, áreas técnicas e varandas frequentemente são descontadas total ou parcialmente. Confirme na lei local.

**Gabarito (altura máxima).** Limite de altura da edificação, expresso em metros, em número de pavimentos, ou ambos. Serve para controlar sombra sobre os vizinhos, ventilação, paisagem e infraestrutura. Cuidado: cada município define de um jeito **onde se mede a altura** (a partir de qual nível do terreno, até a cumeeira, o beiral ou a laje) e como tratar terrenos inclinados.

**Recuos.** Distâncias mínimas entre a edificação e as divisas do lote. Servem para luz, ventilação, privacidade, futura ampliação de ruas, arborização e segurança contra propagação de incêndio.

- **Recuo frontal:** entre a edificação e o alinhamento (divisa com a rua/calçada). Nas cidades brasileiras é comum de 3 a 5 m em zonas residenciais, mas isso varia muito e não foi confirmado como regra nacional.
- **Recuos laterais:** entre a edificação e as divisas laterais. Muitas leis admitem construir **encostado na divisa (recuo zero)** se a parede não tiver aberturas, e exigem recuo (por exemplo 1,5 m) quando há janela. Isso interage com o Código Civil (Aula 7).
- **Recuo de fundos:** entre a edificação e a divisa dos fundos.

Muitos municípios aumentam o recuo conforme a altura (quanto mais alto, mais afastado). Lote de esquina costuma ter dois recuos frontais.

**Afastamento** é termo usado às vezes como sinônimo de recuo, às vezes para a distância entre duas edificações no mesmo lote ou entre blocos. Veja como a sua lei usa a palavra.

**Taxa de permeabilidade (TP).** Percentual do lote que deve permanecer com **solo natural permeável** (grama, jardim, terra), capaz de absorver água da chuva. Serve para reduzir enchentes e recarregar o lençol freático. Cimentado, pavimentado, laje e edificação não contam; alguns municípios aceitam pisos drenantes com peso reduzido ou reservatórios de retenção como compensação parcial.

`área permeável mínima = TP x área do lote`

**Vagas de garagem.** Muitas leis exigem número mínimo de vagas por unidade residencial (por exemplo, uma vaga por casa) e dimensões mínimas da vaga. Serve para não transferir o estacionamento para a rua. Números variam por zona e porte.

**Outros parâmetros que aparecem:** lote mínimo e testada (largura de frente) mínima, área mínima de unidade, taxa de solo natural, cota de terreno natural, altura de muros e vedações na frente, tratamento de esquina (chanfro). O Módulo 1 (programa) e o Módulo 3 (desenho) já lhe deram a base para ler essas medidas na planta.

## Exemplo numérico resolvido: lote de 10 m x 25 m

**Dados do lote:** terreno plano, retangular, interno (não é esquina), testada (frente) 10 m, profundidade 25 m.

**Parâmetros fictícios da zona:**

| Parâmetro | Valor |
|---|---|
| Taxa de ocupação (TO) | 60% |
| Coeficiente de aproveitamento (CA) | 1,2 |
| Gabarito | 2 pavimentos, até 8 m |
| Recuo frontal | 4 m |
| Recuos laterais | 1,5 m de cada lado |
| Recuo de fundos | 3 m |
| Taxa de permeabilidade (TP) | 20% |
| Vagas | 1 por casa |

**Passo 1: área do lote.**
`10 x 25 = 250 m2`

**Passo 2: limite pela taxa de ocupação.**
`0,60 x 250 = 150 m2` de projeção máxima.

**Passo 3: limite pelo coeficiente de aproveitamento.**
`1,2 x 250 = 300 m2` de área construída total máxima.

**Passo 4: limite pela permeabilidade.**
`0,20 x 250 = 50 m2` de solo permeável mínimo.

**Passo 5: envelope pelos recuos (a área onde a projeção pode ficar).**
- Largura útil: `10 - 1,5 - 1,5 = 7 m`
- Profundidade útil: `25 - 4 - 3 = 18 m`
- Área do envelope: `7 x 18 = 126 m2`

**Passo 6: qual limite manda?** A projeção pode ser, no máximo, o **menor** entre a TO (150 m2) e o envelope dos recuos (126 m2). Logo a projeção máxima real é **126 m2**. Neste caso os recuos são a restrição que mais aperta; a TO efetiva fica em `126 / 250 = 50,4%`.

**Passo 7: área construída possível.**
- Dois pavimentos com a mesma projeção: `2 x 126 = 252 m2`, abaixo do teto do CA (300 m2). Cabe.
- Para chegar em 300 m2 seria preciso mais que 2 pavimentos, mas o gabarito trava em 2. Então o teto real é **252 m2** (e só se ambos os pavimentos usarem o envelope inteiro, e se a lei computar tudo).

**Passo 8: permeabilidade.**
Área livre do lote: `250 - 126 = 124 m2`. Suponha que garagem descoberta e calçada de acesso ocupam 45 m2 de piso impermeável. Área permeável: `124 - 45 = 79 m2`, ou `79 / 250 = 31,6%`, acima dos 20% exigidos. Se o piso da garagem passasse de 74 m2, a permeabilidade cairia abaixo de 50 m2 (20%) e o projeto seria reprovado.

**Passo 9: altura.**
Dois pavimentos com pé-direito de 2,80 m (valor usual, sujeito ao código de obras) somados à laje intermediária (espessura da ordem de 0,15 m a 0,20 m) e ao telhado ficam abaixo de 8 m se a cumeeira não for muito alta. Confirme como o município mede o gabarito.

**Resumo do exemplo:**

| Item | Limite | Valor real neste projeto |
|---|---|---|
| Projeção | min(TO 150; recuos 126) | 126 m2 |
| Área construída | CA 300; gabarito 2 pav. | até 252 m2 |
| Área permeável | mínimo 50 m2 | 79 m2 no exemplo |
| Vagas | 1 | 1 (cabe na frente, com 4 m de recuo) |

**Variação para praticar:** se a lei permitisse encostar numa lateral (recuo zero, parede cega), a largura útil seria `10 - 1,5 = 8,5 m`, o envelope `8,5 x 18 = 153 m2`, e agora a TO (150 m2) passaria a ser o limite. Isso mostra que **o limite que trava muda conforme as regras**, por isso é essencial calcular todos.

## Onde os erros costumam acontecer

- Aplicar parâmetros de outra zona ou de outra cidade.
- Esquecer que o recuo se mede a partir da **divisa real** do terreno (levantamento topográfico, Aula 4), não do muro existente, que pode estar fora do lugar.
- Esquecer o que conta ou não como área computável (varandas, garagens, beirais).
- Ignorar exceções: lote pequeno, lote de esquina, terreno em declive, recuo para calçada futura.

## Resumo

- TO limita a projeção da edificação; CA limita a área construída total; gabarito limita a altura; recuos definem o envelope horizontal; TP garante solo permeável.
- O volume máximo é o **menor** entre todos os limites: calcule cada um.
- No exemplo (lote 10 x 25 m, parâmetros fictícios), os recuos limitaram a projeção a 126 m2 (abaixo dos 150 m2 da TO) e a área construída a até 252 m2 (abaixo dos 300 m2 do CA).
- Os métodos de contagem (o que entra na área, onde se mede a altura) variam por município.
- Confirme os números oficiais do seu lote na prefeitura, sempre.

## Para aprofundar

- [ ] [Taxa de ocupação e coeficiente de aproveitamento: O que é](https://caosplanejado.com/taxa-de-ocupacao-e-coeficiente-de-aproveitamento/) (Renato Saboya, Caos Planejado): definição rigorosa de TO e CA e como calcular.
- [ ] [COMO CALCULAR A TAXA DE OCUPAÇÃO, COEFICIENTE DE APROVEITAMENTO E TAXA DE PERMEABILIDADE](https://www.youtube.com/watch?v=j0Ly_PRlxW4) (Flashcards Arquitetura): vídeo sobre o cálculo dos três índices principais (conteúdo não assistido; descrição pelo título e canal).
- [ ] [RECUOS DE CONSTRUÇÃO: Respondendo as Principais Perguntas!](https://www.youtube.com/watch?v=jnw3t0KAESs) (Jonatas Rosa, DR. OBRAS): vídeo sobre recuos (conteúdo não assistido).

[Próxima aula: O terreno: documentos, topografia e restrições](./04%20-%20O%20Terreno%20Documentos%20Topografia%20e%20Restricoes.md)
