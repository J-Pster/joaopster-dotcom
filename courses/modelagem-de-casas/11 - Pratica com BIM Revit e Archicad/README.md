# Módulo 11: Prática com BIM (Revit, Archicad e alternativas gratuitas)

Nos módulos 7 e 8 você aprendeu o que é BIM (objetos com dados, níveis, tipos, IFC) e viu quais programas existem e quanto custam. Nos módulos 9 e 10 você modelou a casa de 96 m² como forma (Sweet Home 3D e SketchUp). Este módulo responde: **o que muda quando a mesma casa é modelada como objetos com dados, e como fazer isso na prática, inclusive sem pagar?** Ele vem agora porque BIM só faz sentido depois de você saber o que é uma planta, um corte, uma parede em camadas (módulos 3 e 4) e uma casa modelada em forma pura (módulos 9 e 10): só assim se vê o que o BIM acrescenta.

A ordem é: por quê (aula 1), como cada programa pensa (aula 2), o que se pode usar legalmente (aula 3), fluxo de modelagem (aula 4), saídas do modelo (aula 5), alternativas gratuitas (aula 6), IFC (aula 7), exercício (aula 8) e erros (aula 9).

**Sobre a curadoria e os menus.** Os vídeos indicados tiveram título e canal confirmados, mas **ninguém os assistiu**; as descrições seguem título e resumo. Nomes de menu e atalhos só aparecem quando confirmados na documentação oficial (Autodesk, Graphisoft, FreeCAD, Bonsai); nos demais casos, o texto diz "confira o nome exato na sua versão". Preços, licenças e versões estão datados: **verificado em setembro de 2026**.

**Aviso:** modelar sua casa por hobby não substitui projeto arquitetônico, estrutural e de instalações assinado por profissional habilitado, exigido para aprovação e obra (módulo 6).

## Aulas

1. [Por que o BIM existe e o que muda ao modelar](./01%20-%20Por%20que%20o%20BIM%20Existe%20e%20o%20que%20Muda.md): que problema resolve, o que significa "a parede é uma parede", níveis, tipos, vistas geradas, quantitativos e coordenação.
2. [Como o Revit e o Archicad pensam](./02%20-%20Como%20Revit%20e%20Archicad%20Pensam.md): famílias, tipos e instâncias no Revit; objetos GDL e Navigator no Archicad; tabela de equivalência de termos.
3. [Licenças para hobby e caminhos legais](./03%20-%20Licencas%20para%20Hobby%20e%20Caminhos%20Legais.md): teste, licença educacional, o que é pago e o que é realmente gratuito (verificado em setembro de 2026).
4. [O fluxo de modelagem de uma casa em BIM](./04%20-%20O%20Fluxo%20de%20Modelagem%20de%20uma%20Casa%20em%20BIM.md): níveis, eixos, paredes com camadas, pisos, esquadrias, telhado, forro, cômodos e áreas.
5. [Vistas, pranchas, quantitativos e coordenação](./05%20-%20Vistas%20Pranchas%20Quantitativos%20e%20Coordenacao.md): como o modelo vira planta, corte, fachada, folha e tabela, e o teste que prova que é BIM.
6. [Alternativas abertas: FreeCAD BIM e Bonsai](./06%20-%20Alternativas%20Abertas%20FreeCAD%20BIM%20e%20Bonsai.md): fluxo básico, limites e qual escolher.
7. [IFC, a ponte entre programas](./07%20-%20IFC%20a%20Ponte%20Entre%20Programas.md): o que há dentro do arquivo, como exportar, como conferir e o que esperar.
8. [Exercício guiado: a casa de 96 m² em BIM](./08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2%20em%20BIM.md): roteiro no Bonsai, com tabelas de conferência e mapa para Revit e Archicad.
9. [Erros comuns e boas práticas](./09%20-%20Erros%20Comuns%20e%20Boas%20Praticas.md): os erros que fazem um modelo BIM mentir e como evitá-los.

## Checklist de saída do módulo

- [ ] Por que, no BIM, cortes, fachadas e tabelas se atualizam quando você muda o modelo, e o que isso exige dos objetos?
- [ ] Qual a diferença entre **tipo** e **instância**, e por que a mesma porta de 0,80 m deve ser um tipo com várias instâncias?
- [ ] Por que a altura de uma parede é uma relação entre níveis e não um número digitado?
- [ ] Como Revit e Archicad se traduzem (família e objeto GDL, nível e pavimento, ambiente e zona, folha e layout)?
- [ ] Por que a área livre dos cômodos da casa (73,62 m² fechados) é menor que a nominal, e como o programa decide o limite do cômodo?
- [ ] O que posso usar de graça e sem prazo para modelar minha casa em BIM, e o que só existe por teste ou para estudante?
- [ ] O que há dentro de um arquivo IFC (árvore espacial, classes, tipos, relações), e por que ele não substitui o arquivo nativo?
- [ ] Como confiro um IFC exportado (pavimentos, contagem por classe, objetos proxy, tipos duplicados)?
- [ ] Qual é o teste que prova que meu modelo é BIM de verdade (mudar um tipo e ver planta, tabela e etiqueta seguirem)?

Quando estiver confiante, siga para o [Módulo 12: Prática com Blender para Arquitetura](../12%20-%20Pratica%20com%20Blender%20para%20Arquitetura/README.md).
