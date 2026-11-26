[Voltar ao módulo](./README.md)

# Aula 5: Escolher o software e configurar o modelo

*Pergunta que esta aula responde: com qual programa vou modelar esta casa, e como deixo o arquivo configurado (unidades, níveis, organização) para que o modelo nasça limpo?*

## Por que decidir agora e não antes

Nos módulos 7 e 8 você aprendeu como o computador representa um modelo e como escolher software por critério. Escolher antes de ter planta e parâmetros seria decidir por fama. Agora você sabe o que o projeto **exige do programa**: quantos pavimentos, telhado simples ou complexo, terreno inclinado, se precisa de plantas e cortes, se precisa de imagens bonitas. E a configuração inicial, feita uma vez, evita os erros que mais estragam modelos: unidade errada, origem perdida, tudo numa camada só.

## Etapa 1: decidir com critério

Use a [árvore de decisão do módulo 8, aula 6](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/06%20-%20Arvore%20de%20Decisao%20e%20Plano%20de%20Estudo.md) e os [critérios do módulo 8, aula 3](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/03%20-%20Criterios%20de%20Escolha%20e%20Tabela%20Comparativa.md). Responda por escrito, na ordem:

1. **Que máquina eu tenho?** (RAM, placa de vídeo, sistema operacional.)
2. **Sou estudante matriculado?** (Só nesse caso as licenças educacionais de Archicad e Revit se aplicam.)
3. **Que produto final preciso?** Escolha o mais importante:
   - ver a casa e testar layout;
   - planta técnica cotada;
   - modelo BIM com quantitativos;
   - imagens realistas.
4. **Quanto tempo posso investir por semana?**

Depois, cruze o produto final com o que cada programa entrega, com base nos módulos práticos:

| Produto principal | Programa provável | Base no curso |
|---|---|---|
| Ver a casa em 3D, testar layout, sem burocracia | Sweet Home 3D | [módulo 9](../09%20-%20Pratica%20com%20Sweet%20Home%203D/README.md) |
| Liberdade de forma (telhado especial, pé-direito duplo, terreno em declive) | SketchUp | [módulo 10](../10%20-%20Pratica%20com%20SketchUp/README.md) |
| Plantas, cortes e tabelas que se atualizam, coerência entre desenhos | Revit ou Archicad (estudante ou teste) ou FreeCAD BIM e Bonsai (gratuitos) | [módulo 11](../11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md) |
| Imagens de alta qualidade | modelar em qualquer um e renderizar no Blender | [módulo 12](../12%20-%20Pratica%20com%20Blender%20para%20Arquitetura/README.md) e [módulo 13](../13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md) |

Licenças e preços mudam; confirme na página oficial no dia em que for instalar (o módulo 8, aula 4, tem os fatos verificados em setembro de 2026).

**Teste de duas horas** (módulo 8): antes de se comprometer, modele um cômodo de 4 m x 3 m com uma porta, uma janela e pé-direito de 2,70 m em dois candidatos e compare tempo, frustração e resultado.

Escreva a **ficha de decisão de software** (5 linhas): programa escolhido, por que, o que ele **não** entrega (que será feito à mão, aula 9), plano B e custo real.

Uma combinação frequente e legítima: modelar num programa e renderizar em outro. Isso é viável desde que você planeje o **formato de troca** (OBJ, FBX, glTF, IFC, DWG; [módulo 7, aula 7](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/07%20-%20Formatos%20de%20Arquivo%20e%20Perdas%20na%20Conversao.md) e [módulo 8, aula 5](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/05%20-%20Formatos%20e%20Interoperabilidade.md)) e aceite que toda conversão perde algo: descer de BIM para malha é fácil, o inverso não.

## Etapa 2: configurar o arquivo-base

Estas decisões valem para qualquer programa; a coluna da direita diz onde ver como cada um faz.

| Decisão | Regra | Onde ver no seu programa |
|---|---|---|
| **Unidade** | metros ou centímetros, escolhida antes de desenhar; um erro de unidade multiplica tudo por 10 ou 100 | SH3D: preferências ([módulo 9, aula 1](../09%20-%20Pratica%20com%20Sweet%20Home%203D/01%20-%20Como%20o%20Sweet%20Home%203D%20Pensa.md)); SketchUp: [módulo 10, aula 2](../10%20-%20Pratica%20com%20SketchUp/02%20-%20Versoes%20Licencas%20Acesso%20e%20Interface.md); BIM e Blender: README do [módulo 11](../11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md) e do [módulo 12](../12%20-%20Pratica%20com%20Blender%20para%20Arquitetura/README.md) |
| **Origem e eixos** | um ponto fixo (por exemplo, o canto sudoeste do lote) e o eixo Y ou N alinhado ao norte do projeto | [módulo 7, aula 1](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/01%20-%20Como%20o%20Computador%20Representa%20um%20Objeto%203D.md) |
| **Escala 1:1** | modele em tamanho real; a escala só aparece na prancha | [módulo 3, aula 9](../03%20-%20Desenho%20Tecnico%20Arquitetonico/09%20-%20Do%20Desenho%202D%20ao%20Modelo%203D.md) |
| **Níveis** | um por pavimento, com elevação = piso a piso da aula 4 (exemplo: térreo 0,00; superior 2,95 m) | módulos 9 a 11 |
| **Planta de fundo** | importe a planta da aula 3 (imagem ou DWG), **calibre** com fator `real / medido` e **confira com uma segunda cota**; trave a referência | [módulo 7, aula 8](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/08%20-%20Da%20Planta%20ao%20Modelo.md); SH3D [aula 2](../09%20-%20Pratica%20com%20Sweet%20Home%203D/02%20-%20Planta%20de%20Fundo%20e%20Paredes.md); SketchUp [aula 6](../10%20-%20Pratica%20com%20SketchUp/06%20-%20Da%20Planta%20ao%20Modelo.md) |
| **Organização** | grupos, componentes, tags ou camadas com nomes claros desde o início | [módulo 7, aula 5](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/05%20-%20Hierarquia%20e%20Organizacao%20do%20Modelo.md); SketchUp [aula 5](../10%20-%20Pratica%20com%20SketchUp/05%20-%20Grupos%20Componentes%20e%20Tags.md) |
| **Versionamento** | salve versões numeradas e mantenha o arquivo nativo | [módulo 7, aula 9](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/09%20-%20Boas%20Praticas%20de%20Modelagem.md) |

**Camadas de organização do modelo.** Use a sobreposição do [módulo 6, aula 8](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/08%20-%20Levando%20as%20Regras%20para%20o%20Modelo%203D.md), de baixo para cima, como estrutura do arquivo:

1. Terreno (polígono das divisas e relevo).
2. Entorno (rua, calçada, vizinhos em volume simples, árvores relevantes).
3. Restrições (faixas não edificáveis, APP, servidões).
4. Recuos (linhas paralelas às divisas).
5. Envelope (volume máximo).
6. Casa (subdividida em estrutura, paredes, esquadrias, cobertura, mobiliário, vegetação).
7. Verificações (áreas permeáveis, sombras, visadas, rampa).

Se o seu programa não tem camadas (Sweet Home 3D não tem, conforme o módulo 9), use níveis, cores e nomes de objeto para separar o que puder, e registre o que ficou misturado.

**Nomenclatura de arquivo sugerida:** `casa_v01_AAAA-MM-DD`, subindo a versão a cada etapa concluída (implantação, volumes, aberturas, mobiliário, render). Salve duas cópias em locais diferentes.

## Etapa 3: montar o terreno e o envelope no arquivo

Antes da casa, o modelo já contém as camadas 1 a 5. Passos:

1. Desenhe o **polígono do lote** com as medidas do levantamento.
2. Coloque o **relevo**: curvas de nível ou, para simplificar, um plano inclinado (no lote de referência, cota 100,00 na frente e 102,50 nos fundos). Sweet Home 3D trabalha com terreno plano (módulo 9): nesse caso registre o desnível nas cotas dos níveis e como texto.
3. Desenhe as **linhas de recuo**.
4. **Extrude o envelope** até o gabarito (no exemplo, 6,90 x 18,00 m até 8 m).
5. Marque o **norte**.
6. Salve como versão 01.

**Prova de configuração** (5 minutos): meça no modelo a largura da testada, a diagonal do lote e a altura do envelope; compare com a ficha da aula 1. Se algum valor não bate, a unidade ou a calibragem está errada. Corrija agora.

## Entregável da aula 5

- Ficha de decisão de software.
- Arquivo `casa_v01` com unidade, origem, norte, níveis, terreno, recuos e envelope, com camadas organizadas.
- Planta de fundo calibrada e travada (se o programa aceitar).
- Registro da prova de configuração.

## Checklist da aula 5

- [ ] Decidi o software por objetivo, máquina, licença e tempo, e escrevi por que.
- [ ] Sei o que o programa não faz e como vou suprir (aula 9).
- [ ] Unidade, origem, eixo norte e escala 1:1 estão definidos.
- [ ] Os níveis têm a elevação de piso a piso da aula 4.
- [ ] Planta de fundo calibrada com uma cota e confirmada com outra.
- [ ] Terreno, recuos e envelope estão no modelo.
- [ ] O modelo tem nomes e organização por camada, tag, grupo ou nível.
- [ ] Salvei a versão 01.

## Resumo

- Escolha o programa pelo produto final que você precisa, pela máquina, pela licença e pelo tempo, e registre o que ele não entrega.
- A configuração inicial (unidade, origem, norte, níveis, escala 1:1) evita a maioria dos erros de modelo.
- Organize o arquivo como as camadas do módulo 6: terreno, entorno, restrições, recuos, envelope, casa, verificações.
- Calibre a planta de fundo com uma cota e confira com outra.
- Termine a aula com terreno e envelope modelados e uma prova numérica de que a configuração está certa.

[Próxima aula: Modelar volumes, paredes, aberturas, cobertura e escada](./06%20-%20Modelar%20Volumes%20Paredes%20Aberturas%20Cobertura%20e%20Escada.md)
