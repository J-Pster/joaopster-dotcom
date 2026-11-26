[Voltar ao módulo](./README.md)

# Aula 7: IFC, a ponte entre programas

*Pergunta que esta aula responde: o que existe dentro de um arquivo IFC, como exportá-lo e conferi-lo, e o que esperar (e não esperar) dele ao passar a casa de um programa BIM para outro?*

## Por que o IFC importa para quem não tem licença

O módulo 7 (aula 7) já explicou o princípio: converter é projetar a riqueza de um modelo sobre um formato diferente, e o **IFC** (*Industry Foundation Classes*, padrão ISO 16739 mantido pela buildingSMART) é o formato aberto que carrega **semântica**, não só forma. Esta aula usa isso na prática, por três razões:

1. **O Bonsai trabalha diretamente em IFC.** O arquivo do seu projeto **é** um IFC. Entender o IFC é entender o Bonsai (aula 6).
2. **É o que liga o aberto ao proprietário.** Se um dia você abrir um modelo de um amigo em Revit ou Archicad, ou entregar seu modelo a um engenheiro, o IFC é a ponte.
3. **Ele é o teste de honestidade do seu modelo.** Exportar para IFC e abrir em outro programa mostra o que o modelo realmente contém.

Link do que já foi visto: [Módulo 7, aula 7: Formatos de arquivo e perdas na conversão](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/07%20-%20Formatos%20de%20Arquivo%20e%20Perdas%20na%20Conversao.md).

## O que existe dentro de um IFC

### 1. Uma árvore espacial

Todo IFC organiza a informação em uma hierarquia (documentação do Bonsai): **`IfcProject > IfcSite > IfcBuilding > IfcBuildingStorey > IfcSpace`**: projeto, terreno, edifício, pavimento, espaço (cômodo). Todo objeto físico precisa pertencer a um lugar nessa árvore, e é assim que o "nível" das aulas 1 e 4 existe no formato aberto: como `IfcBuildingStorey`. Nos softwares, ao criar um projeto novo, a árvore vem pronta (no Bonsai, com um pavimento padrão chamado "My Storey").

### 2. Objetos com **classe**

Cada objeto tem uma **classe IFC**: `IfcWall`, `IfcSlab`, `IfcDoor`, `IfcWindow`, `IfcColumn`, `IfcRoof`, `IfcSpace`. A classe diz **o que é**. A documentação do Bonsai observa que o programa não impõe restrição entre forma e classe: você pode atribuir a classe `IfcColumn` a um cubo, ou a classe parede a uma forma qualquer. Ou seja, **a classe é uma declaração humana**, e classe errada é o erro mais comum em IFC (aula 9). A documentação também diz que porta e janela são subtipos de `IfcBuildingElement`.

### 3. Tipos e ocorrências

Assim como família e instância (aula 2), o IFC separa o **tipo** (`IfcDoorType`, `IfcWallType`) das **ocorrências** (cada porta concreta). O tipo guarda definição compartilhada (dimensões, conjunto de camadas de material); a ocorrência, a posição e as diferenças locais.

### 4. Relações

Objetos se ligam por **relações**: contenção (a parede está no pavimento), vão (a porta "preenche" um vão aberto na parede: a documentação do Bonsai chama de *void relation*, criada automaticamente se a parede é selecionada antes de colocar a porta), material (uma parede tem camadas). É isso que a "parede é uma parede" da aula 1 vira em arquivo.

### 5. Geometria: opcional

Um resultado surpreendente: a geometria **não é obrigatória**. Um membro da comunidade OSArch (o fórum aberto dos usuários de Bonsai e IFC) escreve que o IFC não tem requisitos geométricos: pode ter objeto sem geometria, plano de espessura nula, sólido por malha ou por extrusão; só é preciso que a geometria seja adequada à sua visualização ou documentação (se não é sólido, o corte não mostra profundidade). Um vídeo de BIM mostra a diferença prática entre duas representações: a **extrusão de perfil** (`IfcExtrudedAreaSolid`), que continua editável em parâmetros (altura, perfil), e o **conjunto de faces poligonais** (`IfcPolygonalFaceSet`), que se comporta como uma malha comum. Uma parede em malha aparece igual no visualizador, mas não se edita como parede.

### 6. Versões (esquemas)

O assistente de projeto do Bonsai oferece três esquemas: **IFC2X3**, **IFC4** e **IFC4X3**. O Revit exporta em IFC4, IFC2x3 e IFC2x2, segundo a ajuda oficial. **Regra prática:** combine o esquema com quem vai receber o arquivo; na dúvida, use IFC4 (o mais usado nos exemplos consultados; não há norma que o imponha, é convenção).

## Como exportar e importar em cada programa

| Programa | Como | Nota |
|---|---|---|
| **Revit** | **Arquivo > Exportar > IFC** (ajuda oficial: aba File > Export > IFC); o arquivo IFC e um arquivo de registro da exportação vão para a pasta de destino | Há **nove configurações internas** correspondentes às versões de IFC; não podem ser alteradas, mas podem ser duplicadas para personalizar; a "configuração da sessão" é editável e não se guarda entre sessões. Opções relevantes: usar a vista ativa ao criar geometria, exportar só elementos visíveis na vista, exportar vínculos como IFCs separados |
| **Archicad** | Pelo menu de arquivo, procure IFC em salvar como ou nas opções de interoperabilidade | Não confirmado na documentação lida: confira o nome exato na sua versão. O Archicad tem tradutores de IFC configuráveis |
| **FreeCAD BIM** | Exportar para IFC; a ajuda do FreeCAD observa que defina a propriedade **Ifc Type** dos objetos para a exportação sair com a classe certa | Se não houver Site, o exportador cria um padrão. O modelo é IFC nativo desde a 1.0 |
| **Bonsai** | **File > Save IFC Project** (ou Ctrl+S): já é IFC | Abra com **File > Open IFC Project**, nunca abrindo o `.ifc` como se fosse malha comum |

## Como conferir um IFC (o "ritual de importação")

Ao receber ou gerar um IFC, **abra em um segundo programa** (Bonsai, FreeCAD ou um visualizador). A documentação do Bonsai cita três visualizadores abertos e gratuitos de navegador: **IfcPipeline**, **ThatOpenEditor** e **3DViewer**. Depois faça esta lista:

1. **Pavimentos:** quantos existem e em que cota? Para a casa de 96 m², deve haver 1 pavimento, na cota 0,00 (mais o nível de forro se você o modelou como nível).
2. **Contagem por classe:** para a casa, esperados 6 `IfcDoor`, 5 `IfcWindow`, 6 espaços fechados mais a varanda (7 `IfcSpace`), 1 ou 2 lajes, 1 cobertura. Paredes: depende de como foram divididas; o total de comprimento é que se confere (36 m de externas, 29 m de internas).
3. **Objetos genéricos:** procure objetos com a classe **proxy** (`IfcBuildingElementProxy`), que é a classe "não sei o que é": indica que a classificação se perdeu. O vídeo da aula (BIMvoice) inclui essa verificação ("building proxies") na conferência de um IFC vindo do Revit.
4. **Tipos e perfis duplicados:** o mesmo vídeo encontra tipos e perfis duplicados após o Revit exportar, e elementos que não se editam como no original.
5. **Materiais e camadas:** as paredes compostas chegaram com as camadas? O vídeo verifica as camadas da parede no Bonsai.
6. **Áreas e alturas:** compare os números com a tabela de quantitativos do modelo original.

## O que esperar e o que não esperar

- **Esperar:** identidade, classe, tipo, nível, propriedades e relações que o esquema prevê; geometria fiel.
- **Não esperar:** que as **regras paramétricas** do programa de origem (as restrições de uma família, a lógica de um objeto GDL) viajem. O módulo 7 explicou por quê. O vídeo da BIMvoice, que exporta um modelo simples do Revit e o abre no Bonsai, mostra o problema na prática: elementos que chegam sem serem totalmente editáveis, tipos e perfis duplicados, geometrias mais difíceis de trabalhar. O autor não apresenta o fluxo como perfeito.
- **Não esperar** ida e volta sem perda: exporte do programa A e continue em B **consultando**, não como se fosse o arquivo original.
- **IFC não substitui o arquivo nativo.** Guarde o `.rvt` ou `.pln` como projeto e gere IFC como entrega e verificação.

## Para a sua casa

- Se você usar teste ou licença de estudante de Revit ou Archicad: **antes do fim do prazo**, exporte o modelo em IFC e em PDF. Assim, o trabalho de modelagem não se perde (mas releia as regras da licença educacional e do teste na aula 3).
- Se usar Bonsai: o próprio arquivo é o IFC; abra-o em FreeCAD ou em um visualizador aberto para conferir a portabilidade.
- Em qualquer caso, faça o **ritual de importação** acima uma vez, mesmo que ninguém vá receber o arquivo. É o melhor exercício de conferência de classes e níveis.

## Resumo

- Um IFC guarda **árvore espacial** (projeto, terreno, edifício, pavimento, espaço), **objetos com classe**, **tipos e ocorrências**, **relações** (contenção, vão, material) e **geometria opcional**.
- **Classe** é declaração humana: classe errada ou objeto "proxy" indica perda de significado.
- Esquemas: IFC2X3, IFC4, IFC4X3; combine com o receptor; IFC4 é a escolha mais comum nos exemplos.
- Exporte, **abra em outro programa** e confira pavimentos, contagem por classe, proxies, tipos duplicados, camadas e áreas.
- IFC serve para consulta e coordenação; não espere edição paramétrica idêntica. Guarde o nativo.

## Para aprofundar

- [ ] [Finding what Revit gets wrong to IFC using Bonsai BIM](https://www.youtube.com/watch?v=6Lxao6kYvRw) (BIMvoice): abre no Bonsai um IFC exportado do Revit e checa pavimentos, proxies, materiais, tipos e editabilidade; mostra os problemas em vez de esconder (inglês).
- [ ] [Understanding IFC](https://docs.bonsaibim.org/guides/authoring/understanding_ifc/index.html) (documentação oficial do Bonsai, inglês): guia da estrutura do IFC (partes ainda incompletas).
- [ ] [Creating an IFC model](https://docs.bonsaibim.org/quickstart/create_model.html) (documentação do Bonsai): como criar um objeto, atribuir classe e ver a árvore espacial; cita visualizadores abertos.
- [ ] [Export a Model to IFC](https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-14037C31-EBAD-41A8-9099-E6DD65BB626E) (Autodesk, ajuda oficial em inglês): exportação do Revit.
- [ ] [IFC Export Setup Options](https://help.autodesk.com/view/RVT/2024/ENU/?guid=GUID-E029E3AD-1639-4446-A935-C9796BC34C95) (Autodesk, inglês): configurações de exportação.
- [ ] [About Revit and IFC](https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-6708CFD6-0AD7-461F-ADE8-6527423EC895) (Autodesk, inglês): visão geral do suporte a IFC no Revit.

[Próxima aula: Exercício guiado, a casa de 96 m² em BIM](./08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2%20em%20BIM.md)
