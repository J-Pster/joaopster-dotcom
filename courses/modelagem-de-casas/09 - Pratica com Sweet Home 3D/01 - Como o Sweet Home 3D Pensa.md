[Voltar ao módulo](./README.md)

# Aula 1: Como o Sweet Home 3D pensa (e como instalar e abrir)

*Pergunta que esta aula responde: por que o Sweet Home 3D parte de uma planta 2D e gera o 3D sozinho, que "objetos" ele entende, e o que preciso configurar antes de desenhar a primeira parede?*

## O problema que ele resolve

No módulo 7 você viu que um modelo 3D pode ser feito de duas maneiras: **modelando geometria** (você cria cada face, como no SketchUp e no Blender) ou **descrevendo objetos** com parâmetros (uma parede tem dois pontos, espessura e altura; o programa deduz as faces, como no BIM). Modelar geometria dá liberdade e exige trabalho; descrever objetos é rápido e exige que a casa caiba nas categorias que o programa conhece.

O Sweet Home 3D é um programa de **descrição por objetos, versão leve**. O site oficial o define como um aplicativo gratuito de design de interiores que ajuda a posicionar móveis sobre a planta 2D de uma casa, com pré-visualização em 3D. Não há "modelar uma parede"; há **dizer onde ela começa, onde termina, quão grossa e quão alta é**, e o 3D aparece.

Isso responde à pergunta central da aula: o programa parte da planta porque **a planta é a descrição mínima da casa**. Você aprendeu no módulo 3 que a planta baixa carrega posição, espessura e abertura das paredes, e que a altura vem do corte. No Sweet Home 3D, a altura é apenas mais um número da parede.

## Os objetos que o programa entende

Tudo o que existe num arquivo do Sweet Home 3D é um destes objetos. Conhecê-los é conhecer o programa:

| Objeto | O que guarda | O que o programa deduz sozinho |
|---|---|---|
| **Parede** | Ponto inicial, ponto final, **espessura**, **altura** (com opção de altura diferente no início e no fim), cor ou textura de cada lado | As faces 3D, o encontro entre paredes consecutivas e os furos de portas e janelas |
| **Cômodo** (room) | Um polígono, nome, cor ou textura do piso, cor ou textura do teto, se o piso e o teto aparecem | O piso e o teto 3D, a área (pode ser exibida no plano) |
| **Porta ou janela** | Modelo 3D, largura, profundidade, altura, **elevação** (peitoril), sentido de abertura | Ajusta a espessura à da parede onde cai e **abre o vão** nela |
| **Móvel** (qualquer outro item do catálogo) | Modelo 3D, nome, posição, ângulo, elevação, dimensões, cor ou material | Sobe em cima de outro móvel se for solto sobre ele; gira para encostar a parte de trás na parede |
| **Nível** (pavimento) | Elevação, altura do pavimento, espessura do piso | O que aparece em cada andar e onde ficam os tetos |
| **Cota** (dimensão), **texto**, **polilinha** | Anotações no plano | Nada: são só desenho 2D |
| **Câmera** | Posição, ângulos, campo de visão (vista aérea e visita virtual) | A perspectiva |

Duas consequências práticas:

1. **Nunca desenhe o furo da porta.** O guia oficial diz que os buracos de portas e janelas são calculados automaticamente: você desenha a parede inteira e depois solta a esquadria sobre ela.
2. **Cômodo não é parede.** Um cômodo é uma área com piso e teto; as paredes que o cercam são outra coisa. Você pode ter cômodo sem parede (uma varanda aberta) e parede sem cômodo. Se você só desenha paredes, a casa terá paredes, mas não terá piso nem teto.

## Duas vistas do mesmo dado

O plano (vista de cima, 2D) e a vista 3D **não são dois desenhos**: são duas janelas para um único modelo. Alterar uma parede no plano altera o 3D no mesmo instante, e vice-versa quando você mexe em algo pela vista 3D que aceita edição. É o mesmo princípio do módulo 7 (modelo separado das vistas), aplicado numa ferramenta simples.

O que isso implica: você **não desenha "a fachada"**. As fachadas e cortes do módulo 3 aparecem como pontos de vista da câmera 3D, não como desenhos técnicos gerados com hachura e cota. O programa produz planta (com cotas que você mesmo adiciona) e imagens em perspectiva; não produz cortes técnicos automáticos. Isso é uma das fronteiras discutidas na aula 7.

## Instalação e licença (verificado em setembro de 2026)

Fonte: [sweethome3d.com](https://www.sweethome3d.com/) e página de download do site oficial.

- **Versão atual exibida no site:** 7.5, com data de atualização de 5 de maio de 2025 na página de download.
- **Licença:** GNU General Public License, ou seja, software livre e de código aberto. O código é aberto e o programa é gratuito na versão distribuída pelo site.
- **Plataformas:** Windows, macOS e Linux (desktop); também há aplicativos para iOS e Android (pagos nas lojas) e uma versão online que roda em navegador com WebGL. A versão online, segundo o guia oficial, não tem algumas funções (importação de modelos 3D, criação de foto e vídeo, exportação OBJ, impressão, o atalho Enter para digitar medidas de parede). Neste módulo usamos a versão desktop.
- **Instaladores do site (tamanhos do site oficial):** Windows, cerca de 85 MB, em instalador com assistente; macOS, cerca de 84 MB (arquivo .dmg, arrastar o aplicativo para uma pasta); Linux 64 bits, cerca de 72 MB (arquivo .tgz, extrair e executar). Os instaladores trazem o Java embutido. Existem ainda uma versão portátil (para pendrive) e um arquivo JAR para uso avançado.
- **O que vem no catálogo:** a página de download lista para a versão gratuita cerca de 929 peças de mobiliário e 26 texturas; a versão paga das lojas de aplicativos traz mais de 10.000 modelos 3D e 400 texturas. O site também oferece bibliotecas extras gratuitas, que você instala na aula 5. Esses números podem mudar; confira na página de download.
- **Idioma:** o programa está disponível em 29 idiomas, incluindo português do Brasil. Os nomes de menu deste módulo seguem o guia oficial em português; se a sua versão mostrar outro rótulo, confira o nome exato do menu na sua versão.

Passos: baixe apenas do site oficial (sweethome3d.com, link "Download"), execute o instalador da sua plataforma e abra o programa. Como o Java já vem embutido, não é preciso instalar nada à parte nesses instaladores. Se a vista 3D aparecer preta, duplicada ou o programa acusar erro fatal de renderização, a FAQ oficial recomenda atualizar os drivers da placa de vídeo e, em último caso, usar as opções descritas nela (versão 32 bits, ou modo sem 3D).

**Nota sobre memória:** a FAQ informa que o instalador reserva por padrão até 1 GB ou 2 GB de memória (conforme o sistema) e que isso é ajustável por uma opção de configuração do Java (`-Xmx`). Você só precisa disso em projetos muito grandes, com muitos modelos importados.

Veja: [Curso Sweet Home 3D: Instalação do programa (Aula 1/16)](https://www.youtube.com/watch?v=q51bJbdRvus) (Bruno Toniolo), série em português de cerca de 2016; a interface pode ter mudado, a lógica não.

## A interface: quatro painéis

Segundo o guia oficial, a janela tem quatro painéis redimensionáveis:

1. **Catálogo de móveis:** organizado em categorias que se expandem. É de onde você arrasta portas, janelas, móveis e luminárias.
2. **Lista de móveis da casa:** um inventário de tudo o que já está no projeto, com colunas personalizáveis (nome, dimensões etc.) e ordenação por clique no cabeçalho.
3. **Planta:** a vista de cima, com grade e réguas. Aqui você desenha.
4. **Vista 3D:** a casa em perspectiva, em dois modos: **Visualização aérea** (padrão, câmera orbitando a casa) e **Visita virtual** (câmera com altura de olhos, como uma pessoa caminhando; aparece um ícone de visitante no plano).

O foco alterna entre painéis com Tab e Shift+Tab ou clicando neles (um retângulo colorido indica o painel ativo), e o teclado se comporta conforme o painel em foco: setas movem o item selecionado no plano, mas orbitam a câmera se o foco estiver na vista 3D. Há botões de **desfazer e refazer** na barra de ferramentas.

**Modos do plano** (botões da barra de ferramentas, nomes do guia em português): **Selecionar**, **Criar paredes**, **Criar cômodos**, **Criar dimensões** e **Adicionar textos**, entre outros (o guia também menciona polilinhas, versão 5.0 em diante). Você sempre está em um modo: com "Criar paredes" ativo, cada clique no plano faz parede; para editar o que já existe, volte para **Selecionar**. Esquecer o modo é o erro nº 1 de iniciante (aula 9).

Nos menus, os nomes que aparecem no guia em português são: **Arquivo**, **Planta**, **Mobiliário** e **Visualização 3D**. É por eles que você chega às funções das próximas aulas.

## Preferências: configure antes de desenhar

Caminho no guia oficial: **Arquivo > Preferências…** (no macOS, o menu do aplicativo Sweet Home 3D > Preferências). O guia manda verificar ali a **unidade padrão** e a **espessura e altura padrão das paredes novas**.

Decisões que você deve tomar (o guia confirma a existência da unidade e das medidas padrão; os demais itens você localiza na janela, pois o nome exato varia):

| Decisão | Recomendação para este curso | Por quê |
|---|---|---|
| Unidade | Centímetro ou metro (escolha uma e não troque no meio do projeto). O programa também suporta unidades imperiais; confira a lista na sua versão | Todas as cotas do módulo 3 estão em metros; digitar um número na unidade errada gera uma casa 100 vezes maior ou menor |
| Altura padrão de parede novo | 2,70 m (o pé-direito do exemplo do módulo 3) | Cada parede nova já nasce com a altura certa; senão você editará uma por uma |
| Espessura padrão de parede novo | 0,20 m para externas; ajuste as internas depois para 0,10 m | Espessuras usuais da aula 5 do módulo 3 |
| Catálogo em "lista pesquisável" | Ativar, se o seu rótulo existir | Um tutorial de terceiros (sbcode.net) recomenda; facilita achar peça por nome |
| Vista aérea centrada na seleção | Ativar, se existir | O mesmo tutorial recomenda; a câmera passa a girar em torno do que você selecionou |
| Magnetismo | Deixar ligado | Faz o cursor "grudar" em ângulos e em paredes; detalhado na aula 2 |

Referência: a seção "Começando uma nova casa" do guia oficial recomenda exatamente essa conferência de preferências antes de começar.

## O fluxo recomendado (e o mapa do módulo)

O guia oficial propõe esta ordem, que é a mesma lógica do módulo 3 (do contorno ao detalhe):

1. Importar uma planta escaneada como fundo (opcional). **Aula 2**
2. Desenhar as paredes sobre ela. **Aula 2**
3. Editar espessura, cor e textura das paredes. **Aulas 2 e 5**
4. Adicionar portas e janelas e ajustar seus tamanhos. **Aula 3**
5. Adicionar móveis e posicioná-los com precisão. **Aula 5**
6. Desenhar cômodos e definir pisos e tetos. **Aula 3**
7. Adicionar níveis e escadas para casas de mais de um pavimento. **Aula 4**
8. Desenhar cotas e textos. **Aula 7**
9. Imprimir ou exportar. **Aula 7**

Salve com frequência (botão **Salvar casa** na barra de ferramentas, ou Arquivo > Salvar). O arquivo do projeto tem extensão `.sh3d` e, segundo a FAQ, **contém todos os móveis usados**, então pode ser levado a outro computador sem levar bibliotecas junto. A FAQ diz ainda que o programa mantém cópias de segurança automáticas, mas isso não substitui salvar versões com nomes diferentes (`casa_v01.sh3d`, `casa_v02.sh3d`) antes de mudanças grandes.

> **Limite entre hobby e projeto profissional:** o Sweet Home 3D gera uma visualização e uma planta esquemática. Não verifica normas, estrutura ou instalações. A planta que ele imprime não substitui o projeto legal (assinado por arquiteto ou engenheiro com RRT ou ART, módulo 6) nem o projeto executivo.

## Resumo

- O Sweet Home 3D descreve a casa por **objetos com parâmetros** (parede, cômodo, esquadria, móvel, nível) e **deduz o 3D**; o plano e a vista 3D são duas vistas do mesmo modelo.
- Você desenha a parede inteira e o programa **abre os vãos** quando você solta portas e janelas sobre ela; cômodo (piso e teto) é um objeto separado da parede.
- Versão 7.5, licença GPL, gratuito no site oficial (verificado em setembro de 2026); Windows, macOS e Linux, com Java embutido nos instaladores.
- Quatro painéis: catálogo, lista de móveis, planta, vista 3D (aérea ou visita virtual). Sempre há um modo ativo (Selecionar, Criar paredes, Criar cômodos...).
- Antes de desenhar: em Arquivo > Preferências, defina unidade e altura e espessura padrão das paredes.
- O arquivo `.sh3d` leva os móveis dentro; salve versões.

## Para aprofundar

- [ ] [Guia do usuário oficial em português](https://www.sweethome3d.com/pt-br/guia-do-usuario-do-sweet-home-3d/) (sweethome3d.com): fonte oficial de menus, interface e fluxo; a versão em inglês está em [users-guide](https://www.sweethome3d.com/users-guide/).
- [ ] [Curso Sweet Home 3D: Instalação do programa (Aula 1/16)](https://www.youtube.com/watch?v=q51bJbdRvus) (Bruno Toniolo): abertura da única série em português do zero à casa completa (2016).
- [ ] [como usar o sweet home 3d PRIMEIROS PASSOS](https://www.youtube.com/watch?v=Br1CDnJm6qc) (CONSTRUIR EM 3D): primeiros passos em português, pelo título; conteúdo não avaliado.
- [ ] [Como usar o Sweet home 3d - PASSO a PASSO - programa de MODELAGEM](https://www.youtube.com/watch?v=H1CR0vUNryc) (CAMINHO CERTO 3D): passo a passo em português, pelo título.
- [ ] [Sweet Home 3D for beginners. Learn 3D in 5 mins](https://www.youtube.com/watch?v=cvKqD_EDSZ4) (Boston Controls, inglês): visão rápida para ver o fluxo inteiro em minutos.
- [ ] [Sweet Home 3D Official tutorials in English (playlist)](https://www.youtube.com/playlist?list=PLtu3HarR0EUZwMcTm1JzTmo4yCfNuUtCg) (Sweet Home 3D, inglês): lista que apareceu em busca como tutoriais oficiais; canal oficial em [youtube.com/SweetHome3D](https://www.youtube.com/SweetHome3D).
- [ ] [User Interface Configuration](https://sbcode.net/sh3d/interface-config/) (sbcode.net, inglês): texto curto sobre os quatro painéis e as preferências recomendadas.

[Próxima aula: Planta de fundo e paredes com medidas exatas](./02%20-%20Planta%20de%20Fundo%20e%20Paredes.md)
