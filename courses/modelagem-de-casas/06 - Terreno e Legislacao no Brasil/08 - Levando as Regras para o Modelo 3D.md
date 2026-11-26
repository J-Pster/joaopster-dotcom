# Aula 8: Levando as regras para o modelo 3D

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como transformar leis, números e restrições em geometria e informação dentro de um modelo, de modo que o modelo me avise quando eu violar uma regra?*

> **Aviso obrigatório:** modelo de hobby não é projeto legal. Construir exige projeto aprovado e responsável técnico. Isto não é aconselhamento jurídico e as regras variam por município. Um modelo que "cabe" no envelope que você desenhou não prova conformidade legal: apenas a análise da prefeitura e do profissional responsável faz isso.

## Por que fazer isso

Regras que ficam só em texto são esquecidas: você desenha ao sabor da inspiração e, no fim, descobre que o segundo pavimento invade o recuo. Se as regras viram **geometria** (volumes e linhas no modelo) e **dados** (números conferidos em tabela), o erro aparece enquanto você modela, não depois. Este é o elo entre este módulo e o Módulo 7, que ensina como os programas de modelagem (CAD, BIM e outros) funcionam; aqui o foco é o que você deve colocar neles, não o clique.

## Conceitos mínimos que os softwares compartilham

Como os softwares ainda não foram ensinados, um resumo suficiente para esta aula (o Módulo 7 aprofunda):

- **Camadas, grupos ou layers:** maneira de separar conjuntos de objetos para mostrar ou esconder (por exemplo, a camada "recuos").
- **Cotas ou dimensões:** medidas exibidas no desenho.
- **Elevação ou nível:** altura vertical de um piso ou de um ponto.
- **Modelo paramétrico (BIM):** os objetos carregam dados (área, altura, material), que permitem gerar tabelas e conferir índices automaticamente.

## As camadas de regra no modelo

Organize o modelo como sobreposição de camadas, do que é fixo ao que é seu projeto:

| Camada | Conteúdo | Origem |
|---|---|---|
| 1. **Terreno** | Polígono das divisas com medidas reais; relevo (curvas de nível e cotas) | Levantamento topográfico (Aula 4) |
| 2. **Entorno** | Rua, calçada, postes, árvores relevantes, vizinhos (volume simples) | Levantamento, observação, fotos |
| 3. **Restrições** | Faixas não edificáveis, APP, servidões, recuos viários | Legislação, matrícula (Aulas 4 e 5) |
| 4. **Recuos** | Linhas paralelas às divisas na distância exigida | Zoneamento (Aula 3) |
| 5. **Envelope** | Volume máximo (área do envelope x gabarito) | Cálculo (Aula 5) |
| 6. **Casa** | Projeto propriamente dito, dentro do envelope | Você |
| 7. **Verificações** | Áreas permeáveis, visadas para janelas, sombras, rampa | Aulas 3 e 7 |

Trabalhe de baixo para cima: terreno, restrições, recuos, envelope, e **só então a casa**.

## Passo a passo conceitual

**1. Importar ou desenhar o terreno.** Use as medidas do levantamento. Se possuir arquivo digital do topógrafo (por exemplo DWG ou DXF, formatos de desenho CAD; o profissional geralmente entrega além do PDF), importe. Caso contrário, desenhe o polígono com as cotas.

**2. Colocar o relevo.** Cada curva de nível fica na sua cota vertical; o software gera uma superfície ("terreno") que passa por elas. Em modelagem mais simples, você pode aproximar o terreno com um plano inclinado (no exemplo da Aula 5: cota 100,00 na frente e 102,50 nos fundos).

**3. Marcar as restrições** como faixas com cor própria. Se houver APP ou faixa não edificável, o envelope não pode invadi-la.

**4. Desenhar as linhas de recuo** a partir das divisas reais: no exemplo, 4 m da frente, 1,5 m de cada lateral, 3 m dos fundos.

**5. Extrudar o envelope.** Extrudar significa dar altura a uma forma plana. O retângulo do envelope (6,90 x 18,00 m no exemplo) sobe até o gabarito (8 m no exemplo). Onde a lei aumentar o recuo com a altura, o envelope tem degraus ou chanfros. Em terreno inclinado, verifique como a lei mede a altura (a partir do terreno natural ou da rua).

**6. Criar volumes de teste dentro do envelope** (blocos simples com pavimento e pé-direito), verificando área de projeção e área construída total.

**7. Calcular índices e conferi-los.** Planilha simples, com a fórmula de cada índice:

| Índice | Fórmula | Limite | Projeto |
|---|---|---|---|
| Projeção | soma da área em planta | 124,2 m2 (envelope) | anote |
| TO | projeção / 250 | 60% | anote |
| CA | área construída total / 250 | 1,2 | anote |
| Permeabilidade | área permeável / 250 | 20% | anote |

Em programas BIM, os "ambientes" (rooms ou zones) somam áreas automaticamente. Em programas mais simples, você mede as faces a mão ou por ferramenta de área.

**8. Testar as regras de vizinhança.** Desenhe um círculo ou linha a 1,5 m das divisas e confira que nenhuma janela ou varanda aberta para o vizinho cai dentro dele (Aula 7). Verifique que a água do telhado pode ser conduzida ao seu lote.

**9. Testar a acessibilidade.** Verifique a largura das portas e o círculo de manobra de 1,50 m nos cômodos essenciais e a rampa de acesso.

## Erros comuns na tradução

- **Modelar o terreno plano** por preguiça e descobrir depois que existe 1,8 m de desnível.
- **Usar as medidas do muro** em vez do levantamento.
- **Misturar áreas:** confundir área de projeção com área construída, ou incluir/excluir garagem sem verificar a regra.
- **Trocar de unidade:** softwares aceitam metros, centímetros ou milímetros; um erro de unidade multiplica tudo por 10 ou 100. Ajuste a unidade antes de começar (vale para todos os programas dos Módulos 9 a 12).
- **Achar que o modelo "aprovou":** só a prefeitura aprova.

## Valor e limites do modelo de hobby

O modelo é excelente para **decidir e comunicar**: volumetria, insolação (Módulo 2), fluxos, proporção, alternativas. Não é documento: não substitui projeto de estrutura, instalações, memorial, cálculo e aprovação assinada (Aula 6). No Módulo 14 (projeto completo) você aplicará este método à sua casa; o que sair de lá é o ponto de partida da conversa com o profissional habilitado.

## Resumo

- Regras viram geometria (recuos, envelope, faixas) e dados (índices em tabela) para o erro aparecer durante a modelagem.
- Ordem: terreno, entorno, restrições, recuos, envelope, casa, verificações. Nunca comece pela casa.
- Use as medidas do levantamento e as áreas oficiais para índices; extrude o envelope até o gabarito, atenção à forma como o município mede a altura.
- Confira também vizinhança (janelas a 1,5 m da divisa) e acessibilidade (portas 0,80 m, manobra 1,50 m, rampa até 8,33%).
- O modelo de hobby serve para decidir e comunicar; só o projeto legal aprovado, com responsável técnico, autoriza a obra.

## Para aprofundar

Nenhum vídeo confirmado especificamente sobre este passo (levar restrições legais para o modelo). Os tutoriais de cada software ficam nos Módulos 9 a 12.

[Voltar ao módulo](./README.md)
