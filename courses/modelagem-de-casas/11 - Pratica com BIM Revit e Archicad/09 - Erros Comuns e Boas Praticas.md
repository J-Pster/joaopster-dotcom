[Voltar ao módulo](./README.md)

# Aula 9: Erros comuns e boas práticas

*Pergunta que esta aula responde: quais erros mais fazem um modelo BIM mentir (tabela errada, área errada, IFC vazio de significado), por que acontecem e como evitá-los desde o começo?*

## Por que os erros de BIM são diferentes

Em SketchUp ou Sweet Home 3D, um erro costuma ser **visível**: a parede está no lugar errado, a porta flutua. Em BIM, o erro mais perigoso é o **invisível**: o desenho está bonito, mas o tipo está errado, a parede está presa ao nível errado, a classe IFC está trocada. A tabela sai com a aparência de certa. Por isso a aula 5 insistiu em conferir números e em testar mudando um tipo. Esta aula reúne os erros mais comuns, agrupados pela etapa em que nascem (aulas 4 a 7).

**Nota sobre as fontes:** os itens vêm da documentação oficial e dos materiais usados nas aulas anteriores; os que vêm só de relato de vídeo estão marcados.

## Erros de estrutura (níveis, unidades, arquivo)

| Erro | Sintoma | Por que acontece | Como evitar ou corrigir |
|---|---|---|---|
| **Unidade errada** no arquivo de partida | Paredes de 2,7 mm ou 2.700 m | O template estava em outra unidade | Comece de um template métrico; meça uma parede conhecida logo no início (Bonsai: "New Metric (m) Project") |
| **Altura digitada em vez de relação com níveis** | Mudou o pé-direito e metade das paredes não acompanhou | A altura foi um número solto, não "do nível A ao nível B" | Crie os níveis (aula 4) e prenda base e topo a eles |
| **Nível sem vista de planta** (Revit) | O nível existe, mas não há planta para trabalhar nem folha | A opção de criar vista de planta foi desmarcada, e o nível ficou de referência | Marque a criação de planta ao criar níveis de pavimento (comportamento descrito na ajuda oficial) |
| **Salvar só uma parte no Bonsai** | Perdeu o projeto BIM ou o `.blend` | No Bonsai, Ctrl+S salva **só o IFC**; o `.blend` é salvo à parte | Trate o `.ifc` como arquivo principal e salve os dois de propósito |
| **Sem versão** | Um erro descoberto tarde e nenhum ponto de retorno | Só um arquivo | `casa96_v01`, `v02`...; guarde a última versão boa |

## Erros de parede

| Erro | Sintoma | Por que | Correção |
|---|---|---|---|
| **Paredes soltas ou sobrepostas** em vez de unidas | Hachura confusa, contagem de comprimento dobrada, quinas abertas | Duas paredes se cruzam sem junção | Use as ferramentas de junção (Bonsai: mitre, butt, extend; FreeCAD: Add; Revit e Archicad: confira as opções de junção de paredes na sua versão); confira em planta e em 3D |
| **Linha de localização errada** | Áreas dos cômodos 5 a 10 cm diferentes do projeto | Você desenhou pela face em vez do eixo (ou o contrário) | Decida antes; para eixo a eixo use o alinhamento pelo centro (aula 4); teste com um cômodo |
| **Tipo genérico** ("Parede genérica 200") | Tabela não separa externas de internas | Ninguém nomeou nem definiu camadas | Crie tipos com nome de significado (`EXT20`, `INT10`) desde o primeiro dia |
| **Mudar a espessura pelo lugar errado** | Espessura muda, acabamentos não; ou muda em paredes que você não queria | Editar a instância (ou a geometria) em vez do tipo. Um vídeo de Archicad relata que, em geometria trapezoidal de composição, o núcleo ajusta e as novas paredes entram na mesma composição | Antes de editar, saiba se o parâmetro é de **tipo** ou de **instância** (aula 2) |
| **Empena e altura de parede esquecidas** | Fachada com faixa vazia sob o telhado | Parede parou em 2,90 m e o telhado sobe | Anexar topo da parede ao telhado (Revit), estender paredes até a face do telhado (Bonsai, operação Extend), ou registrar a simplificação |

## Erros de esquadrias

| Erro | Sintoma | Por que | Correção |
|---|---|---|---|
| **Um tipo para cada instância** | Tabela com 11 linhas quando devia ter 6 | Duplicou o tipo a cada porta | Um tipo por dimensão; muitas instâncias |
| **Alterar instância quando queria tipo** (ou vice-versa) | Só uma porta mudou, ou todas mudaram sem querer | Propriedades de tipo afetam todas as instâncias; de instância, só a selecionada | Leia o rótulo antes de editar: na ajuda oficial do Revit, largura e espessura de porta são de tipo; peitoril e material de batente, de instância |
| **Esquadria não hospedada** | Porta não fura a parede ou fica no ar | No Bonsai, a parede não foi selecionada antes de criar a porta | Selecione a parede primeiro; se esqueceu, use Apply Void (Shift+O), com cuidado, ou recrie |
| **Mover a esquadria sem regenerar** (Bonsai) | O vão fica onde a porta estava | Mover pelas ferramentas do Blender não altera o modelo IFC | Depois de mover, selecione a parede e regenere (Shift+G) |
| **Sentido de abertura invertido** | Porta do quarto bate na cama | Colocou no lado errado | Bonsai: Shift+F inverte; Revit e Archicad: controle de inversão do objeto (confira) |

## Erros de cômodo e área

| Erro | Sintoma | Por que | Correção |
|---|---|---|---|
| **Comparar área nominal com área livre** | "O modelo perdeu 6 m²" | A área nominal (eixo a eixo, módulo 3) inclui as paredes | Compare com a área livre (aula 4) e entenda a diferença |
| **Regra de limite do cômodo** | Áreas menores que a esperada no Revit | O padrão do Revit é usar a **face do acabamento** da parede | Escolha a regra (centro, núcleo) nas configurações de área e volume e documente qual foi |
| **Cômodo não fechado** | Sem área ou área estranha | As paredes não fecham o perímetro (falta parede, porta sem parede sob ela) | Feche o contorno; confira em planta. Varanda sem parede precisa de limite manual (módulo 9) |
| **Cômodo com nome duplicado ou vazio** | Tabela de áreas ilegível | Não foi nomeado | Nomeie ao criar |

## Erros de vista, prancha e tabela

| Erro | Sintoma | Por que | Correção |
|---|---|---|---|
| **"Corrigir" o desenho em vez do modelo** | Corte, planta e tabela discordam | Linhas de detalhe e textos soltos sobre a vista | Corrija no modelo; anotação só como etiqueta e cota ligadas a objetos |
| **Tabela sem conferir a definição do parâmetro** | Área de parede em uma face vs duas, com ou sem vão | Cada programa define área de um jeito | Confira a definição; compare com sua conta manual (aula 5) |
| **Tabela sem agrupar** | 11 linhas de portas iguais | "Itemizar cada instância" ligado (Revit) | Agrupe por tipo e totalize |
| **Prancha ajustada à mão** | Escala trocada, desenho esticado | Tentativa de ajustar na folha o que era da vista | Volte à vista |
| **Vista com filtro esquecido** | Falta um elemento na planta | Categoria ou camada desligada, ou sobreposição gráfica ativa | Confira os filtros da vista |

## Erros de IFC

| Erro | Sintoma | Por que | Correção |
|---|---|---|---|
| **Classe IFC errada** (parede como coluna) | Quantitativo por classe errado | A classe é declaração humana e não há restrição do software (documentação do Bonsai) | Confira a classe de cada categoria |
| **Objetos "proxy"** | Elementos genéricos no visualizador | Classificação perdida na exportação | Mapeie categorias para classes na exportação (Revit) e refaça |
| **Tipos e perfis duplicados, elementos não editáveis** | Modelo IFC recebido pesado e teimoso | Relato do vídeo da BIMvoice após exportar do Revit para o Bonsai | Confira, limpe e não use o IFC como arquivo de origem |
| **Exportar sem abrir em outro programa** | Descobre a perda só quando o outro lado reclama | Ninguém conferiu | Ritual da aula 7 antes de entregar |
| **Confiar que o IFC leva as regras paramétricas** | Objeto virou "burro" na importação | O esquema não carrega as regras do programa de origem (módulo 7) | Mantenha o arquivo nativo como origem |

## Erros de método

- **Família no local (in-place) por preguiça.** A ajuda oficial define a família no local como elemento único, com um só tipo, para geometria que não será reutilizada. Um material em português sobre famílias a descreve como polêmica. Regra: se você vai repetir o objeto, crie família carregável; se é uma vez só e ligado a outra geometria, no local é aceitável. Muitas famílias no local em um modelo dificultam tabelas e reuso.
- **Detalhe demais.** Para uma casa de hobby, o alvo é entre LOD 200 e 300 (módulo 7): dimensões e posições corretas, sem parafuso. Modelar puxadores de porta consome horas e pesa o arquivo.
- **Pular a conferência.** Cada etapa termina com um número.
- **Licença.** Modelar 30 dias no teste e perder o acesso sem exportar. Ou usar licença educacional sem ser elegível (aula 3).
- **Achar que BIM é decoração.** Render e materiais realistas ficam para o módulo 13.

## Boas práticas (o mínimo que evita 80% dos problemas)

1. **Template e unidades primeiro**, salvamento versionado desde o começo.
2. **Níveis antes de tudo**, com altura por relação.
3. **Tipos com nome de significado** (`EXT20`, `P080`): a tabela e o IFC vão herdar esses nomes.
4. **Um tipo por dimensão**, várias instâncias.
5. **Camadas simples primeiro** (uma camada), refine depois.
6. **Confira um número a cada etapa**: perímetro, comprimento interno, áreas, contagens.
7. **Olhe em planta e em 3D** a cada bloco de trabalho.
8. **Modele só o que vai usar**: LOD 200 a 300.
9. **Documente simplificações** (empena sul não modelada, desníveis ignorados) em um arquivo de texto.
10. **Teste mudando um tipo** e veja planta, corte e tabela seguirem.
11. **Exporte IFC e PDF** e abra o IFC em outro programa antes do fim de qualquer prazo de licença.
12. **Guarde o arquivo nativo** como origem; IFC e PDF são saídas.

## Aviso

Modelo de estudo não é projeto. Para prefeitura e obra, projeto arquitetônico, estrutural e de instalações assinado por profissional habilitado (módulo 6).

## Resumo

- O erro típico do BIM é o **invisível**: tabela certa na aparência e errada nos dados.
- Os erros nascem em cinco lugares: **estrutura** (unidade, níveis, arquivo), **paredes** (junção, linha de localização, tipo genérico), **esquadrias** (tipo x instância, hospedagem), **cômodos** (nominal x livre, regra de limite) e **IFC** (classe errada, proxy, expectativa de paramétrico).
- Corrija sempre no **modelo**, nunca "por cima" do desenho.
- As práticas que evitam quase tudo: **tipos com nome**, **um tipo por dimensão**, **conferir um número por etapa**, **testar mudando o tipo** e **exportar IFC e PDF antes de qualquer prazo**.

## Para aprofundar

- [ ] [Finding what Revit gets wrong to IFC using Bonsai BIM](https://www.youtube.com/watch?v=6Lxao6kYvRw) (BIMvoice): erros reais na passagem Revit para IFC para Bonsai (inglês).
- [ ] [Parâmetros de tipo e instância em famílias](https://www.youtube.com/watch?v=82HmsoYxJ8c) (Vitrine Revit): tipo versus instância, em português, pelo título.
- [ ] [Como criar paredes com diferentes espessuras no Archicad usando uma única composição](https://www.youtube.com/watch?v=qFvzaCUKbko) (EIXO, Escola de Archicad): efeitos de mexer na espessura de uma composição.
- [ ] [Famílias Revit, websérie (episódios sobre tipos de família e hierarquia)](https://www.bee1.com.br/projeto-de-alvenaria-em-bim-2/) (Bee1): a série descreve, em português, os três tipos de família e a hierarquia categoria, família, tipo e instância, e comenta por que famílias no local são polêmicas.
- [ ] [Famílias: habilidade essencial](https://help.autodesk.com/cloudhelp/2025/PTB/Revit-GetStarted/files/GUID-7AEC5D66-C2E0-40E2-9504-3CC13781B87A.htm) (Autodesk, ajuda oficial em português): definições oficiais de tipo, instância e família no local.

[Voltar ao módulo](./README.md) e responda o checklist de saída. Quando estiver confiante, siga para o [Módulo 12: Prática com Blender para Arquitetura](../12%20-%20Pratica%20com%20Blender%20para%20Arquitetura/README.md).
