# Aula 5: Luz Natural, Umidade, Chuva e Ruído

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: além do calor, que outras forças do ambiente (luz, água, som) a casa precisa administrar, e por que elas brigam entre si?*

Sol e vento (aulas 1 a 4) não são os únicos agentes. A casa também lida com luz do dia, água (chuva, umidade do ar e do solo) e ruído. Cada um pede uma decisão de projeto, e várias decisões conflitam: uma janela grande dá luz, mas dá calor e deixa entrar barulho. Projetar é escolher a prioridade.

---

## Parte A: Luz natural

### Por que iluminar com luz do dia

Luz natural reduz o uso de luz elétrica, dá boa reprodução de cores e influencia o ritmo do corpo (ciclo dia e noite). Mas ela **vem junto com calor**, então o problema é obter luz sem excesso de calor e sem ofuscamento.

### Grandezas

- **Fluxo luminoso** (lúmen, lm): quantidade de luz emitida por uma fonte.
- **Iluminância** (lux, lx = lm/m2): quantidade de luz que chega a uma superfície. É o que se mede na mesa ou no piso.
- **Fator de luz do dia** (FLD): proporção entre a iluminância em um ponto interno e a iluminância externa em um plano horizontal sob céu aberto, em céu encoberto, em porcentagem. `FLD = (E_interna / E_externa) x 100`.

Ordens de grandeza (típicas da literatura de iluminação, não conferidas em uma fonte única aqui): sol direto ao meio-dia dá algo como 100.000 lux; um céu encoberto, cerca de 10.000 a 20.000 lux; dentro de uma sala com boa luz do dia, algumas centenas de lux.

**Exemplo resolvido**: se o céu encoberto dá 10.000 lux e um ponto no meio de um quarto recebe 100 lux, o FLD é `100 / 10.000 = 1%`. Um FLD de 0,6% já entrega 60 lux nesse céu.

A **norma de desempenho NBR 15575-1** define um nível mínimo de iluminação natural nos ambientes de longa permanência (sala, dormitório, cozinha e área de serviço), medido no centro do ambiente a 0,75 m do piso, em torno de 60 lux (fontes secundárias citam 48 lux para o pavimento térreo; não confirmei o texto da norma; a norma foi revisada, confira a versão vigente). Para uma casa, isso quer dizer que a luz do dia deve bastar para atividades comuns durante o dia sem acender lâmpada.

### Como a luz entra: geometria

**Iluminação lateral** (janelas nas paredes) é a mais comum. A luz cai rapidamente com a distância da janela. Uma **regra prática** muito usada: a luz do dia útil penetra cerca de 2 a 2,5 vezes a altura da verga (topo da janela) acima do plano de trabalho (regra de manuais, não confirmada nesta pesquisa). Consequências:

- Janela **alta** ilumina mais fundo que janela baixa de mesma área. Verga alta (janela subindo até perto do teto) é a decisão mais barata para luz.
- Ambiente muito profundo com janela só de um lado fica escuro no fundo. Prefira iluminar por duas faces ou reduzir a profundidade.
- Cores **claras** em teto e paredes (mais refletidas, "rebatem" a luz para o fundo) aumentam a luz sem aumentar a janela.

Outros recursos:

- **Iluminação zenital** (por claraboia ou abertura no teto): recebe muito mais luz que a janela lateral (o céu é mais brilhante no alto), por isso resolve corredores, banheiros e áreas internas. Cuidado: traz muito calor no verão (sol alto, aula 1) e precisa de sombreamento ou vidro adequado.
- **Prateleira de luz** (light shelf): aba horizontal no meio da janela que bloqueia o sol na parte inferior e reflete luz para o teto, levando-a mais para o fundo.
- **Pátios e poços de luz**: levam luz a ambientes que não dão para a rua.

### Luz e orientação

Já vimos o que cada fachada recebe de sol (aula 2). Para luz:

- **Sul**: luz difusa, estável, sem ofuscamento por sol direto (no inverno sem sol; no verão sol rasante cedo e tarde). Muito bom para atividades que pedem luz constante.
- **Norte**: luz abundante e fácil de controlar com beiral (aula 2).
- **Leste e oeste**: sol direto baixo, ofuscamento e calor. Proteção precisa de brise vertical ou vegetação.

**Luz difusa do céu** traz, em geral, menos calor por unidade de luz que o **sol direto**. Por isso, em clima quente, a meta comum é **captar a luz do céu e barrar o sol direto**: janelas com brise, beirais e abertura voltada ao lado onde o sol direto é fácil de barrar.

**Compromisso luz e calor**: janela maior dá mais luz e mais ganho de calor. Vidro escuro barra calor, mas também luz (e pode forçar a acender lâmpada de dia). Vidro de fator solar baixo com transmissão de luz alta é o desejável.

**Ofuscamento** é o desconforto causado por contraste excessivo (uma janela muito brilhante contra uma parede escura, ou sol direto no plano de leitura ou na tela). Para evitar: não abra uma janela pequena e isolada numa parede escura (o contraste é forte) e controle o sol direto sobre o plano de leitura.

---

## Parte B: Umidade e chuva

### Por que a água é um problema de projeto

Água em excesso causa mofo, apodrecimento, manchas, corrosão, descolamento de pintura e problemas de saúde (mofo agrava alergias e asma). Ela chega por quatro caminhos:

1. **Chuva**: sobre o telhado, nas paredes (chuva dirigida pelo vento), em janelas e no terreno.
2. **Solo**: água do terreno sobe pelas paredes por **capilaridade** (o mesmo efeito de um pano molhado a partir da ponta), causando umidade ascendente.
3. **Uso da casa**: banho, cozinha, secar roupa dentro de casa, respiração produzem vapor.
4. **Condensação**: vapor do ar virando água em superfície fria.

### Umidade relativa e condensação

**Umidade relativa** (UR) é a porcentagem do máximo de vapor que o ar comporta na temperatura em que está. Ar quente comporta mais vapor que ar frio. **Ponto de orvalho** é a temperatura abaixo da qual o ar, resfriado, atinge 100% de UR e o vapor condensa.

**Exemplo resolvido** (aproximação de Magnus, fórmula meteorológica padrão): ar interno a 25 graus e 70% de UR tem ponto de orvalho de cerca de 19 graus. Qualquer superfície abaixo disso, como o vidro frio numa manhã de inverno, a parede da fachada mais fria ou o teto sem isolamento em noite fria, recebe condensação. Se a condensação se repete e a superfície não seca, o mofo aparece. Como ordem de grandeza da literatura, mofo se instala com UR de superfície persistentemente acima de cerca de 70 a 80% (não confirmado aqui).

Estratégias:

- **Ventilar** os ambientes de vapor (banheiro, cozinha, área de serviço), removendo o vapor antes de condensar. Janela ou exaustor.
- **Insolação** (sol direto que seca e higieniza): ambientes úmidos, quando possível, com alguma insolação; sol da manhã é mais gentil que o da tarde no calor.
- **Evitar superfícies frias**: em clima frio, isolamento térmico do envelope reduz a condensação.
- Em clima quente e **muito úmido**, a ventilação continua importante (ela seca e refresca), mas o ar externo úmido não desumidifica nada por si só. A NBR 15220-3 chama de estratégia F a desumidificação por renovação do ar por ventilação.

### Proteção contra a chuva

- **Beirais e platibandas**: o beiral protege a parede da chuva e das gotas que escorrem, e sombreia (dupla função). Beirais largos são a solução tradicional brasileira. **Platibanda** é a mureta que esconde o telhado e obriga a **calhas** internas e **rufos** (chapas de vedação em encontros), que exigem manutenção.
- **Pingadeiras** e peitoris com caimento: a pingadeira é uma ranhura ou aba na face inferior de peitoris e platibandas que faz a água pingar longe da parede, evitando escorrer e manchar.
- **Inclinação do telhado**: depende do tipo de telha e é definida pelo fabricante; cerâmica exige mais inclinação que telhas metálicas ou de fibrocimento (valores exatos por fabricante; não os cito).
- **Chuva dirigida**: em regiões de vento com chuva, a parede voltada para o lado do vento da chuva molha mais. Se você conhecer esse lado (moradores sabem), aumente beiral e proteção ali.
- **Solo e fundação**: impermeabilização do baldrame (a viga de fundação que fica rente ao chão) barra a subida de água; calçada perimetral com caimento afasta a água das paredes; o piso térreo costuma ficar acima do terreno (a altura vem do projeto estrutural; módulo 4).
- **Drenagem do lote**: a água que cai no lote tem de escoar para longe das paredes e do vizinho. Manter parte do terreno **permeável** (não pavimentado) ajuda a infiltrar; os municípios regulam uma taxa de permeabilidade (módulo 6).

**Limite entre hobby e projeto**: impermeabilização, drenagem e cálculo de fundação são projetos técnicos. Aqui você entende o motivo e o desenho; a execução exige profissional.

---

## Parte C: Ruído e acústica

### Por que ruído importa na casa

O ruído tira o sono e a concentração, e é um dos motivos mais comuns de insatisfação com a vizinhança. Sua fonte pode ser rua, vizinho, ou a própria casa (quarto perto de cozinha).

### Conceitos

- **Decibel** (dB): unidade logarítmica de nível sonoro. **dB(A)** aplica um filtro que imita a sensibilidade do ouvido humano. A escala é logarítmica: **duas fontes iguais somam apenas +3 dB**, não o dobro do número.
- **Distância**: para uma fonte pontual (uma máquina), o nível cai cerca de 6 dB a cada vez que a distância dobra; para uma fonte linear como uma avenida de tráfego contínuo, cai cerca de 3 dB por duplicação (idealizações da acústica; a realidade tem obstáculos e reflexões).
- **Lei da massa**: paredes mais pesadas isolam mais o som (dobrar a massa por metro quadrado dá ganho da ordem de 5 a 6 dB em teoria). A massa ajuda tanto no isolamento térmico quanto no acústico, mas para o som a vedação de frestas é decisiva.
- **Elo mais fraco**: em uma fachada, janela e frestas de porta pesam muito mais que a parede. Uma janela aberta para ventilar praticamente anula o isolamento da fachada.

Normas: a **NBR 10152** trata de níveis de pressão sonora em ambientes internos (para dormitório, fontes secundárias citam 35 dB(A), e para sala de estar 40 dB(A), valores que dependem da versão, atualizada em 2017 com errata em 2020; confira o texto), e a **NBR 10151** trata de ruído em áreas habitadas. A **NBR 15575** também define requisitos de isolamento acústico de fachadas e entre unidades. Não confirmei os valores nas normas originais; conferir antes de usar em projeto.

### O que o projeto pode fazer

- **Zonear**: dormitórios longe da rua e de fontes barulhentas; garagem, escada, cozinha, lavanderia e banheiros como zona-tampão entre a rua e os quartos (essa é a setorização do módulo 1 usada a favor do silêncio).
- **Afastar**: recuo e jardim entre a rua e a casa ajudam pela distância.
- **Barreiras**: muro alto e sólido perto da fonte funciona melhor que vegetação, cujo efeito acústico é pequeno (um cinturão espesso e largo ajuda um pouco, mas o efeito é em boa parte psicológico).
- **Aberturas**: janelas voltadas para a rua com vedação boa; ventilação puxada de lados mais quietos.
- **Vizinhos**: parede em divisa com áreas úmidas ou de serviço, não com quartos do vizinho, quando possível.

**Conflito clássico**: ventilar exige abertura e abertura deixa passar ruído. A saída de projeto é ventilar pelos lados quietos (pátio, fundos) e não pela fachada barulhenta.

## Resumo

- Luz natural: medida em lux e em FLD; janelas altas iluminam mais fundo; cor clara interna ajuda; zenital rende muito e aquece muito; luz do céu vale mais que sol direto em clima quente.
- Água chega por chuva, solo, uso e condensação. Condensa quando a superfície está abaixo do ponto de orvalho (com ar a 25 graus e 70% de UR, cerca de 19 graus).
- Proteja da chuva com beirais, pingadeiras, calçada com caimento, impermeabilização e drenagem; mantenha permeabilidade no lote.
- Ruído: dB é logarítmico; a janela é o elo fraco; zoneie os quartos longe da rua e use serviços e garagem como tampão.
- Luz, calor, ruído e ventilação conflitam: a solução é priorizar por ambiente e por orientação (aula 8).

## Para aprofundar

- [ ] [Conforto Ambiental Arquitetura: Luz Natural](https://www.youtube.com/watch?v=stw_HJEyVxs) (Consultoria com Marcelo Nudel): título indica explicação da luz natural. Não foi assistido.

[Próxima aula: Clima e Zoneamento Bioclimático Brasileiro](./06%20-%20Clima%20e%20Zoneamento%20Bioclimatico.md)
