# Aula 4: O terreno: documentos, topografia e restrições

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que existe de fato no terreno (juridicamente, fisicamente e ambientalmente) que limita o que posso construir?*

> **Aviso obrigatório:** modelo de hobby não é projeto legal. Construir exige projeto aprovado e responsável técnico. Isto não é aconselhamento jurídico e as regras variam por município. Documentos e restrições devem ser verificados com cartório, prefeitura e profissional habilitado.

## Por que o terreno tem três "camadas"

A Aula 3 calculou o volume máximo supondo um lote perfeito: plano, retangular, com medidas corretas e sem restrições. O terreno real é diferente. Ele tem três camadas de informação, cada uma respondida por um documento ou levantamento diferente:

| Camada | Pergunta | Documento ou fonte |
|---|---|---|
| **Jurídica** | De quem é, com que medidas e ônus? | Matrícula, escritura, certidões |
| **Física** | Que forma, inclinação e cotas o terreno tem? | Levantamento topográfico, curvas de nível |
| **Restritiva** | O que impede ou limita construir? | Legislação ambiental, servidões, restrições de loteamento/condomínio |

Nas duas primeiras camadas, o problema é que **as medidas do papel e as do chão podem divergir**. Recuos são medidos a partir da divisa; se a divisa está errada, todo o resto está.

## Camada jurídica

**Matrícula.** É o documento do **Registro de Imóveis** que identifica o imóvel: descrição das divisas e medidas, área, e todo o histórico de transferências e ônus. Cada imóvel tem uma matrícula própria e as alterações são feitas em "averbações" e "registros" nessa ficha. Serve para saber com segurança **quem é o dono, quais são as medidas legais e se há hipoteca, penhora, usufruto ou outras restrições**. A matrícula é o documento que prova a propriedade no Brasil.

**Escritura pública.** Documento do **Tabelionato de Notas** que formaliza o negócio (compra e venda, doação). A escritura sozinha não transfere a propriedade: é preciso **registrá-la** na matrícula. Uma escritura sem registro deixa o comprador exposto (por exemplo, o vendedor pode vender a outra pessoa). Como regra de prudência, só considere seu o que está na matrícula.

**Descrição na matrícula.** Costuma trazer a área, as confrontações (quem são os vizinhos) e medidas por lado. Em imóveis antigos, a descrição pode ser imprecisa ("mais ou menos"), o que dá margem a divergência com o real.

**Cadastro municipal (IPTU).** A prefeitura tem um cadastro próprio, com área do terreno e da construção, que serve à cobrança de imposto. Nem sempre coincide com a matrícula, e o cadastro **não prova propriedade**. Serve, porém, como ponto de partida para achar a zona e a inscrição do lote.

**Certidão de ônus reais.** Documento emitido pelo cartório que mostra se há dívidas ou gravames sobre o imóvel. Útil antes de comprar.

**Regra prática:** para o curso, leia a matrícula do seu terreno (você a pede no cartório de registro de imóveis competente, mediante taxa) e anote: área, medidas por lado, confrontações e averbações. O vídeo abaixo, apesar de não ser de arquitetura, ensina a ler o documento.

## Camada física: topografia

**Levantamento topográfico.** É a medição do terreno feita por profissional habilitado (agrimensor, técnico ou engenheiro, com respectiva responsabilidade técnica) que gera uma planta com: forma e medidas reais das divisas, área real, construções existentes, árvores relevantes, postes, bocas de lobo, redes visíveis, ruas e calçadas, e **altimetria** (as alturas do terreno). Serve para projetar sobre a realidade e não sobre a suposição.

O levantamento é tipicamente **planialtimétrico**: planimetria (plano horizontal: onde está cada coisa) mais altimetria (relevo: quão alto está cada ponto). A planta usa pontos cotados, referências de nível (RN) e curvas de nível.

**Curvas de nível.** Linhas que ligam pontos de **mesma altitude** (cota). Servem para representar o relevo em papel plano. Como ler:

- Cada curva tem um valor de cota; a diferença de cota entre duas curvas vizinhas é a **equidistância** (por exemplo 1 m).
- **Curvas próximas** entre si indicam terreno **íngreme**; **curvas espaçadas**, terreno **suave**.
- Curvas nunca se cruzam (exceto em penhascos negativos, muito raro) e formam anéis fechados em morros e depressões.
- O sentido da descida é sempre perpendicular às curvas, no sentido da menor cota.

**Declividade.** Mede a inclinação do terreno, em porcentagem:

`declividade (%) = diferença de cota / distância horizontal x 100`

Exemplo: um terreno cuja cota cai 2,50 m ao longo de 25 m de distância horizontal tem `2,50 / 25 x 100 = 10%`. Para comparar com ângulo: 10% equivale a cerca de 5,7 graus (`arctan 0,10`). Uma rampa de acessibilidade (NBR 9050) tem no máximo 8,33% para uso geral, para efeito de comparação (Aula 7); um terreno de 10% já é mais inclinado que essa rampa.

**Cortes e aterros.** Terraplenagem é a movimentação de terra para criar uma plataforma plana. **Corte** remove terra da parte alta; **aterro** acrescenta terra na parte baixa. Servem para acomodar a casa, mas têm custo, riscos (solo mal compactado assenta, encostas cortadas precisam de contenção) e regras (muitas prefeituras exigem projeto e responsável técnico para movimentações acima de certo volume ou altura, valores que variam). Alternativas incluem casa em desnível (meios-níveis), pilotis ou embasamento, que aproveitam a inclinação em vez de eliminá-la. Módulo 4 já explicou a fundação; aqui interessa o efeito no volume e nas cotas.

**Cotas e referência de nível.** O gabarito e a altura da soleira (piso do térreo em relação à rua) partem de uma cota de referência do terreno natural ou da rua; o levantamento fornece essas cotas.

## Camada restritiva

**Área não edificável.** Faixa ou área onde a lei proíbe construir. Origens comuns:
- Faixas ao longo de águas correntes e dormentes, ferrovias, rodovias e dutos, previstas na Lei do Parcelamento do Solo (Lei 6.766/1979, art. 4º), que fala de faixa **non aedificandi** mínima de **15 metros** de cada lado ao longo das águas correntes e dormentes e das faixas de domínio público das rodovias e ferrovias. Essas regras foram alteradas em 2019 (Lei 13.913) e 2021 (Lei 14.285): hoje, em partes, o município pode definir larguras diferentes para áreas urbanas consolidadas, com base em diagnóstico socioambiental. Confira como a sua cidade aplica.
- Recuos viários (alargamento futuro de ruas).
- Zonas de proteção do aeroporto (limites de altura).

**Área de Preservação Permanente (APP).** Área protegida pelo Código Florestal (Lei 12.651/2012), coberta ou não por vegetação, com função de proteger água, solo, biodiversidade e estabilidade geológica. Para cursos d'água naturais (perenes e intermitentes), a faixa marginal mínima de APP é de **30 metros** de cada lado para rios com menos de 10 metros de largura, aumentando para rios maiores (art. 4º, I, conforme resumos de busca; confirme no texto). O Código Florestal também prevê APP em outras situações (nascentes, topos de morro, encostas muito inclinadas); os critérios exatos não foram confirmados nesta pesquisa, consulte a lei. Em áreas urbanas consolidadas, a Lei 14.285/2021 permite que lei municipal defina a faixa (com diagnóstico), mas o tema é controvertido e sujeito a interpretações judiciais. A regra prática: **se há córrego, nascente ou encosta forte no seu lote, consulte o órgão ambiental e a prefeitura antes de qualquer projeto**; construir em APP pode gerar multa, embargo e obrigação de demolir e recompor.

**Parcelamento em declive.** A Lei 6.766/1979 (art. 3º, parágrafo único) impede o parcelamento (loteamento) de terrenos com declividade igual ou superior a **30%**, salvo se atendidas exigências específicas das autoridades competentes, e proíbe em terrenos alagadiços, aterrados com material nocivo, e onde as condições geológicas não aconselhem edificar. Isso trata de **loteamento**, não de casa em lote já existente, mas indica o quanto uma encosta forte é problemática.

**Servidões.** Direitos que uma propriedade tem sobre outra: passagem de tubulação, linha de energia, direito de passagem para um terreno encravado. Podem estar averbadas na matrícula. Uma casa não pode ser projetada sobre uma faixa de servidão ativa.

**Restrições de loteamento e condomínio.** Loteamentos e condomínios fechados costumam ter **regras próprias, muitas vezes mais restritivas que a lei municipal**: gabarito, cores, tipo de cobertura, recuos maiores, aprovação do projeto pela associação antes da prefeitura. Estão no memorial do loteamento, na convenção ou no regimento. São obrigações contratuais que se somam à lei.

**Outros:** tombamento, área de risco geológico ou de inundação mapeada pela defesa civil, zonas de proteção de manancial, lençol freático alto, solo contaminado.

## Como isso vira modelagem

Cada camada produz uma informação que o modelo 3D precisa incorporar (Aula 8): as divisas reais (jurídica e física), o relevo (física) e áreas em que não se pode construir (restritiva). A próxima aula mostra como cruzar tudo isso em um método passo a passo.

## Resumo

- O terreno tem três camadas: jurídica (matrícula, escritura), física (topografia, curvas de nível) e restritiva (áreas não edificáveis, APP, servidões, restrições de condomínio).
- A **matrícula** é o documento que prova propriedade e medidas legais; escritura sem registro na matrícula não transfere propriedade; o cadastro do IPTU não prova propriedade.
- O **levantamento topográfico** dá as medidas reais e o relevo; **curvas de nível** ligam pontos de mesma cota; **declividade** = desnível / distância x 100.
- Cortes e aterros custam e trazem risco; construir aproveitando o relevo costuma ser mais racional.
- APP e faixas não edificáveis existem por segurança e proteção ambiental; regras locais variam e mudaram recentemente. Consulte sempre prefeitura e órgão ambiental.

## Para aprofundar

- [ ] [Por que eu preciso ler a matrícula antes de fazer o projeto](https://www.youtube.com/watch?v=V-W2qu-v_jU) (Larissa Nascimento): a lógica de por que a matrícula vem antes do projeto (descrição pelo título; conteúdo não assistido).
- [ ] [PROJETO TOPOGRÁFICO: Como entender e o que analisar](https://www.youtube.com/watch?v=6TKWJYeOHz0) (Eng.ª Nathália Christensen, Projeto na Prática): como ler o levantamento e evitar erros no projeto (conteúdo não assistido).
- [ ] [Curvas de Nível (altimetria): Entenda o que são e como interpretar](https://www.youtube.com/watch?v=jWj9GtssBbs) (geo ilustrada): conceito de curvas de nível do zero, o tipo de assunto em que a imagem ajuda mais que texto (conteúdo não assistido).

[Próxima aula: Como analisar um terreno e seus limites antes de modelar](./05%20-%20Como%20Analisar%20um%20Terreno%20Antes%20de%20Modelar.md)
