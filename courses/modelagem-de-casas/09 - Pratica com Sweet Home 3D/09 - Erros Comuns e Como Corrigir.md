[Voltar ao módulo](./README.md)

# Aula 9: Erros comuns e como corrigir

*Pergunta que esta aula responde: quando o modelo sai errado, como descubro a causa pelo mecanismo do programa (e não por tentativa e erro) e como conserto?*

## Método de diagnóstico

Quase todo erro no Sweet Home 3D nasce de cinco causas. Antes de mexer no modelo, pergunte, nesta ordem:

1. **Modo:** qual botão de ferramenta está ativo (Selecionar, Criar paredes, Criar cômodos...)? (aula 1)
2. **Nível:** em qual aba de nível estou, e o objeto está no nível certo? (aula 4)
3. **Unidade e escala:** a unidade das preferências é a que penso? A planta de fundo foi calibrada? (aulas 1 e 2)
4. **Ordem de construção:** fiz cômodo antes de porta? Escada antes do nível de cima? (aulas 3 e 4)
5. **Número:** o que o diálogo do objeto (duplo clique) mostra, e o que o projeto diz? Compare com o valor esperado e conserte no diálogo, não no olho.

O botão de **desfazer** (e Ctrl+Z, conforme um tutorial de terceiros; confira na sua versão) resolve o erro que você acabou de fazer. Para erros antigos, use os passos abaixo.

## Tabela geral

Cada linha: sintoma, causa pelo mecanismo, correção.

### Desenho e planta

| Sintoma | Causa | Correção |
|---|---|---|
| Cada clique cria uma parede quando você só queria selecionar | Modo **Criar paredes** ainda ativo | Esc para terminar a sequência, botão **Selecionar** |
| A parede não sai reta ou sai com ângulo estranho | Magnetismo desligado (ou tecla Alt/cmd/Shift+Alt pressionada sem querer) | Religue o magnetismo nas preferências; use Enter e digite ângulo |
| A casa é 100 vezes maior ou menor do que devia | Unidade das preferências diferente da que você digitou (centímetros x metros) | Troque a unidade e refaça as medidas erradas; confira com uma cota |
| A planta de fundo não bate com as cotas | Calibração com uma só medida, ou imagem deformada | **Planta > Modificar imagem de fundo…**; confira uma segunda cota; troque a imagem se estiver deformada (aula 2) |
| O contorno da casa não fecha | O último ponto não coincide com o primeiro | Edite as coordenadas da última parede no diálogo; use junção de paredes (versão 5.5 em diante) |
| A área do cômodo é menor que a do projeto | Projeto em eixo; o programa mostra área livre | Não é erro: compare com a tabela de áreas livres da aula 8 |
| Área diferente até da livre | Espessura errada, parede duplicada ou fora de posição | Selecione cada parede, confira espessura e coordenadas |
| Face de parede que "pisca" ou textura falha | Duas paredes sobrepostas | Selecione a área com o retângulo de seleção, veja quantos objetos há, apague o duplicado |
| Não consigo selecionar o que está debaixo | Outro objeto por cima, ou o objeto está em outro nível | Selecione por retângulo, use a lista de móveis, troque de aba de nível |

### Esquadrias e cômodos

| Sintoma | Causa | Correção |
|---|---|---|
| A porta ou janela "flutua", não abre vão | Foi solta fora da parede, ou no nível errado | Arraste de novo sobre a parede com magnetismo ligado; confira o nível |
| A porta abre para o lado errado | O sentido depende do lado em que foi solta (FAQ) | Opção de espelhar o modelo (Mirrored shape) no diálogo |
| A janela vaza acima da parede | Elevação + altura maior que a altura da parede | Reduza a altura ou a elevação (aula 3) |
| Janela na altura errada | Peitoril não foi digitado como **elevação** | Corrija a elevação no diálogo |
| Faixa sem piso sob a porta | Cômodo criado antes da porta, com contorno na face da parede | Apague o cômodo e refaça com duplo clique depois das portas |
| Cômodo sem teto (visto de dentro) | Teto oculto na janela do cômodo, ou visualização aérea (o teto só se vê por baixo) | Marque o teto visível e teste na **Visita virtual** |
| O duplo clique não cria o cômodo | A área não está totalmente cercada por paredes | Feche a parede aberta ou desenhe o cômodo clicando nos cantos |
| Forro em 2,90 m em vez de 2,70 m | O teto sai da altura do nível ou da altura padrão das paredes | Crie um nível e ajuste a **altura do nível** para 2,70 m (aula 4); confira que as paredes externas continuam em 2,90 m |

### Níveis, escadas e telhado

| Sintoma | Causa | Correção |
|---|---|---|
| A escada não fura o piso de cima | Não existe nível acima, ou o piso do nível de cima não tem cômodo na região | Adicione o nível (Planta > Níveis > Adicionar nível); o furo é automático quando existe (blog oficial) |
| A escada é íngreme ou termina fora do piso | Altura padrão de 262 cm não combina com a sua altura de nível | Ajuste a altura da escada e a do nível; recalcule os degraus (aula 4) |
| Objetos aparecem no andar errado | Aba de nível errada na hora de desenhar | Selecione, corte e cole na aba correta |
| Casa térrea: "onde está o telhado?" | O programa não cria telhado (FAQ) | Use empenas, planos importados ou plugin (aula 4) |
| O telhado esconde tudo na vista aérea | O plano de telhado é um objeto opaco | Desmarque a visibilidade do objeto enquanto edita o interior |

### Móveis, modelos e texturas

| Sintoma | Causa | Correção |
|---|---|---|
| Móvel flutuando ou enterrado na parede | Elevação padrão, ou solto sobre outro móvel (o programa o sobe) | Corrija a elevação no diálogo; confira posição |
| Modelo importado gigante ou minúsculo | Unidade do arquivo diferente | Reimporte digitando o tamanho real no passo 3 do assistente (aula 5) |
| Modelo importado de lado ou de costas | Orientação do passo 2 do assistente | Reimporte ou gire o modelo pelo diálogo |
| Modelo sem textura (cinza ou branco) | Textura fora do pacote (arquivo `.mtl` sem imagens) | Importe o `.zip` com o modelo e as imagens juntos |
| Arquivo 3DS que dá erro | Formato problemático | A FAQ sugere converter passando por FBX |
| Textura com escala errada | Escala de textura não definida | Ajuste a escala da textura no diálogo (versão 5.5 em diante) |
| Textura com emenda visível | Imagem não contínua (seamless) | Troque por textura contínua; 256 x 256 pixels basta (site oficial) |
| Cor ou textura não muda | Você editou o cômodo, não a parede (ou o contrário) | Cada objeto tem seu acabamento; abra o diálogo do objeto certo |

### Render, vista 3D e desempenho

| Sintoma | Causa | Correção |
|---|---|---|
| Render escuro por dentro | Sem fontes de luz suficientes, ou sol fora do horário | Adicione luminárias, ajuste a potência, escolha um horário de dia (aula 6) |
| Render noturno com céu claro | Céu com textura diurna | Troque para cor sólida escura (blog oficial) |
| Manchas escuras onde a luz toca o teto | Luz encostada no teto | Afaste a luz (blog oficial) |
| O render demora horas | Resolução alta, qualidade máxima, modelos pesados | Trabalhe por etapas: prévia pequena, imagem final grande (aula 6); FAQ: menos polígonos e resolução menor aceleram |
| Vista 3D preta, duplicada ou erro fatal | Driver de vídeo | Atualize o driver, ative aceleração de hardware; alternativas na FAQ oficial (32 bits, DirectX no lugar de OpenGL, modo sem 3D) |
| Programa lento ou acaba a memória | Projeto grande com modelos pesados | Aumente a memória do Java (`-Xmx`, FAQ) e reduza a complexidade |
| Impressão da vista 3D em branco | Renderização fora de tela (FAQ) | Atualize o driver ou imprima a planta e exporte a imagem 3D separadamente |
| PDF fora de escala | Impressão "ajustada à página" | Configurar página… com escala fixa; imprimir em 100% (aula 7) |
| OBJ exportado com tamanho estranho | Unidade diferente no programa de destino | Meça uma parede conhecida e ajuste a escala (aula 7) |

## Erros de método (não de botão)

Estes não têm mensagem de erro, mas custam mais:

1. **Modelar antes de ler o projeto.** Sem as tabelas do módulo 3 (aula 8), você "chuta" medidas e o modelo não confere com nada. Leia primeiro, modele depois.
2. **Não definir a convenção eixo x face.** Tudo vem 5 a 10 cm errado e a soma de erros estraga a mobília. Decida na aula 2.
3. **Detalhar cedo.** Colocar mobília e textura antes de fechar as paredes e esquadrias obriga a refazer. Siga o fluxo.
4. **Confiar no olho.** Uma janela "parece" no lugar certo até a cota mostrar 20 cm de diferença.
5. **Não salvar versões.** Salve `casa_v01`, `v02`... antes de mudanças grandes. A FAQ diz que o programa mantém cópias de segurança automáticas, mas elas não são um histórico de versões.
6. **Ignorar o limite.** Insistir em cortes técnicos, quantitativos ou telhados complexos no Sweet Home 3D é perder tempo; migre para outro programa (módulos 10 a 12) quando a necessidade ultrapassar os limites da aula 7.

## Onde pedir ajuda

- **FAQ oficial** ([sweethome3d.com/faq](https://www.sweethome3d.com/faq/)) para instalação, renderização, memória e modelos.
- **Dicas oficiais** ([sweethome3d.com/tips](https://www.sweethome3d.com/tips/)) para soluções como porão, mezanino, tetos inclinados, vãos em paredes grossas e paisagismo.
- **Fórum oficial** ([sweethome3d.com/support/forum](https://www.sweethome3d.com/support/forum)) para pesquisar o seu problema; muitas discussões antigas explicam soluções que o programa aceitava em versões antigas, portanto confira a data e a versão da resposta.

## Resumo

- Diagnostique por **causa**: modo, nível, unidade e escala, ordem de construção, número no diálogo.
- Erros de planta (unidade, calibração, contorno aberto, paredes duplicadas) se corrigem no diálogo do objeto e com cotas de conferência.
- Erros de esquadria e cômodo vêm da **ordem** (portas antes de cômodos) e dos campos de **elevação** e **espelhar**.
- Escada só fura o piso se há nível acima; telhado nunca é automático.
- Modelos importados dependem de unidade, orientação e texturas juntas; render escuro é falta de luz, não defeito.
- Salve versões, verifique numericamente, e reconheça quando o programa chegou ao limite.

## Para aprofundar

- [ ] [FAQ do Sweet Home 3D](https://www.sweethome3d.com/faq/) (site oficial, inglês): respostas oficiais para instalação, renderização, memória e importação.
- [ ] [Tips and Tricks](https://www.sweethome3d.com/tips/) (site oficial, inglês): índice de dicas do blog e do canal oficial.
- [ ] [Curso Sweet Home 3D: Criando uma casa em 30 minutos (Aula 16/16)](https://www.youtube.com/watch?v=4uce1KBMWsk) (Bruno Toniolo): ver um fluxo correto de ponta a ponta ajuda a reconhecer onde o seu diverge.
- [ ] [Fórum oficial do Sweet Home 3D](https://www.sweethome3d.com/support/forum) (site oficial, inglês): pesquisa de problemas específicos.

Quando estiver confiante, siga para o [Módulo 10: Prática com SketchUp](../10%20-%20Pratica%20com%20SketchUp/README.md).
