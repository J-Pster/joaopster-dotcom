# Aula 5: Como analisar um terreno e seus limites antes de modelar

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: em que ordem eu junto documentos, medidas e regras para descobrir o que posso modelar num terreno específico?*

> **Aviso obrigatório:** modelo de hobby não é projeto legal. Construir exige projeto aprovado e responsável técnico. Isto não é aconselhamento jurídico e as regras variam por município. O exemplo abaixo usa números fictícios.

## Por que existe um método

As Aulas 3 e 4 deram peças separadas: parâmetros e camadas do terreno. Sem uma ordem, é fácil modelar uma casa lindíssima num lote que não existe, com recuos que não valem ou sobre uma faixa proibida. O método a seguir vai do mais seguro (documento legal) ao mais específico (o envelope 3D), de modo que cada passo só usa o que o passo anterior confirmou.

## O método em 8 passos

1. **Identificar o imóvel.** Reúna matrícula (atualizada, pedida no cartório), inscrição do IPTU e endereço.
2. **Conferir medidas e ônus na matrícula.** Anote área, medidas por lado, confrontações, servidões, hipotecas e averbações.
3. **Conseguir (ou contratar) o levantamento topográfico.** Ele traz as medidas reais, o relevo e o que existe no lote.
4. **Comparar matrícula e levantamento.** Diferenças pequenas são comuns; grandes exigem regularização (retificação de registro), tarefa para profissional e cartório.
5. **Descobrir a zona e os parâmetros na prefeitura.** Pela consulta online ou certidão de uso do solo.
6. **Mapear restrições:** APP, faixas não edificáveis, servidões, regras de condomínio, patrimônio.
7. **Calcular o envelope** (área e altura máxima construível) e a área permeável mínima.
8. **Só então modelar**, começando pelo terreno e pelo envelope, nunca pela casa.

## Exemplo resolvido completo

**Situação (fictícia).** Terreno interno de rua com córrego canalizado a certa distância, zona residencial com os parâmetros da Aula 3 (TO 60%, CA 1,2, 2 pavimentos, recuos frontal 4 m, laterais 1,5 m, fundos 3 m, TP 20%).

### Passos 1 e 2: matrícula

A matrícula descreve: frente 10,00 m, fundos 10,00 m, laterais 25,00 m. Área: 250,00 m2. Sem servidões; sem hipoteca. Isso é o **dado jurídico**.

### Passos 3 e 4: levantamento e comparação

O levantamento mediu:

| Lado | Matrícula | Levantamento | Diferença |
|---|---|---|---|
| Frente | 10,00 m | 9,90 m | -0,10 m |
| Fundos | 10,00 m | 10,00 m | 0 |
| Lateral direita | 25,00 m | 25,20 m | +0,20 m |
| Lateral esquerda | 25,00 m | 25,00 m | 0 |

Área medida (aproximando por trapézio pouco distorcido, com frente 9,90 e fundos 10,00, e profundidade média 25,10 m): `((9,90 + 10,00) / 2) x 25,10 = 9,95 x 25,10 = 249,75 m2`. É **0,25 m2** abaixo da matrícula (cerca de 0,1%), diferença pequena e típica. Mas atenção: o valor que vale para a aprovação é o da matrícula, e é o levantamento que diz onde as divisas de fato estão. Se a diferença passasse de alguns por cento, você não modelaria antes de resolver o assunto com o profissional (retificação de área é procedimento formal).

**Regra prática do exemplo:** para calcular índices (TO, CA, TP) usa-se a área **registrada** (250 m2), e para desenhar o envelope usam-se as **medidas do levantamento**, nas dimensões conservadoras (as menores). Assim: frente 9,90 m, profundidade 25,00 m.

### Passo 5: parâmetros

Os da tabela acima, obtidos na certidão de uso do solo (aqui fictícios).

### Passo 6: restrições

- Córrego canalizado a 60 m dos fundos do lote, dentro de outra quadra: fora do lote e da faixa de 30 m; nada a fazer aqui.
- Sem servidões na matrícula.
- Não é condomínio.

*Variação para pensar:* se o córrego estivesse na divisa dos fundos, com 5 m de largura, uma APP de 30 m (regra geral do Código Florestal) ocuparia o lote inteiro (profundidade de 25 m). Em área urbana consolidada, a lei municipal pode ter definido faixa menor (Lei 14.285/2021, Aula 4), mas isso se descobre na prefeitura e no órgão ambiental, antes de qualquer modelagem.

### Passo 7: cálculo do envelope

Com as medidas conservadoras:
- Largura útil: `9,90 - 1,5 - 1,5 = 6,90 m`
- Profundidade útil: `25,00 - 4,0 - 3,0 = 18,00 m`
- Envelope em planta: `6,90 x 18,00 = 124,2 m2`
- TO máxima: `0,60 x 250 = 150 m2`, maior que o envelope. **Vale o envelope: 124,2 m2.**
- CA: `1,2 x 250 = 300 m2`; dois pavimentos de 124,2 m2 dão 248,4 m2 (abaixo do CA). Teto prático: 248,4 m2.
- Permeabilidade mínima: `0,20 x 250 = 50 m2`.

### Relevo (curvas de nível)

O levantamento altimétrico mostra cota 100,00 m na frente (calçada) e cota 102,50 m nos fundos, a 25 m de distância.

`declividade = 2,50 / 25 x 100 = 10% (aclive da frente para os fundos)`

O envelope tem 18 m de profundidade, então a diferença de cota dentro dele é `10% x 18 = 1,80 m`.

**Três estratégias:**

| Estratégia | Ideia | Efeito |
|---|---|---|
| Plataforma única, terraplenagem | Piso térreo na cota média do envelope | Corte de até 0,90 m no fundo, aterro de até 0,90 m na frente |
| Meios-níveis (desnível interno) | Dois patamares na casa | Menos terra movimentada; escada interna |
| Casa sobre o terreno natural com embasamento | Piso acompanha a rampa | Complexidade estrutural |

**Volume de terra na plataforma única (estimativa):** cada cunha é um prisma triangular com base de 9 m (metade da profundidade), altura máxima 0,90 m e largura 6,90 m:
`0,5 x 9 x 0,90 x 6,90 = 27,9 m3` de corte e outro tanto de aterro (balanceado, ignorando empolamento e contenção). Isso é a ordem de grandeza que o projeto profissional refinará. Como o solo cortado aumenta de volume ao ser escavado, e o aterro exige compactação, na prática o balanço nunca é perfeito.

### Passo 8: o que modelar primeiro

Na ordem: (1) polígono do terreno com as medidas do levantamento; (2) curvas de nível e cotas; (3) linhas de recuo (4 m, 1,5 m, 1,5 m, 3 m); (4) volume-envelope de 6,90 x 18,00 m com altura máxima de 8 m; (5) só depois a casa dentro do envelope. Os detalhes de como fazer isso nos softwares vêm nos Módulos 9 a 12; a Aula 8 mostra a lógica.

## Erros que este método evita

- Modelar sobre a medida da matrícula quando a divisa real é diferente.
- Esquecer de olhar o relevo e descobrir na obra que o térreo ficou 1,8 m acima da rua.
- Calcular parâmetros sem saber a zona.
- Descobrir depois de pronto o modelo que 30 m do lote é APP.

## Resumo

- O método vai do documento legal (matrícula) ao levantamento (medidas reais), aos parâmetros (zona), às restrições, ao envelope e só então ao modelo.
- Índices (TO, CA, TP) usam a área registrada; o desenho do envelope usa as medidas reais, com atitude conservadora.
- No exemplo, os recuos e as medidas reais reduziram a projeção máxima de 150 para 124,2 m2 e a área construída máxima de 300 para 248,4 m2.
- Declividade = desnível / distância x 100; no exemplo, 10%, com 1,80 m de diferença de cota dentro do envelope de 18 m.
- Antes da modelagem 3D, o terreno e o envelope devem estar no modelo.

## Para aprofundar

- [ ] [COMO INTERPRETAR CURVAS DE NÍVEL](https://www.youtube.com/watch?v=LkEEV8787q8) (Izabele Colusso): alternativa para praticar leitura de curvas (conteúdo não assistido).
- [ ] [Águas correntes e dormentes: Faixa não edificável](https://prefeitura.sp.gov.br/web/licenciamento/w/servicos/266149) (Prefeitura de São Paulo): exemplo de como um município orienta o assunto; regra de São Paulo, não nacional.

[Próxima aula: Aprovação, regularização e responsabilidade técnica](./06%20-%20Aprovacao%20Regularizacao%20e%20Responsabilidade%20Tecnica.md)
