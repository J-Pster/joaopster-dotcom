# Aula 8: Radiação ionizante, não ionizante e segurança de RF

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que raios X são perigosos e rádio, em geral, não é do mesmo jeito, e quais riscos reais existem ao operar transmissores?*

## Por que separar as duas categorias

A Aula 6 mostrou que a energia de um fóton cresce com a frequência (`E = h x f`). Essa energia é o que decide **o que a onda consegue fazer com a matéria**, e portanto se ela é perigosa por um mecanismo ou por outro. O medo comum de "radiação" mistura fenômenos muito diferentes; esta aula separa.

## Radiação ionizante

**Ionizar** um átomo ou molécula é arrancar um elétron dele, deixando um íon. Isso exige que um único fóton entregue energia de mais ou menos 10 eV ou mais (o hidrogênio precisa de 13,6 eV; para moléculas de água e de outros compostos orgânicos, valores da mesma ordem). Em termos práticos, a fronteira convencional fica no ultravioleta extremo:

- `E = 10 eV` corresponde a `lambda = 1240 / 10 = 124 nm`, frequência de cerca de 2,4 PHz.
- **Ionizantes:** ultravioleta extremo, raios X, raios gama. (Partículas de radioatividade, como alfa e beta, também ionizam, mas não são ondas EM.)
- **Não ionizantes:** de UV mais baixo, luz visível, infravermelho, micro-ondas e rádio.

Ionização pode quebrar ligações químicas e danificar DNA de forma direta. Por isso raios X e gama exigem blindagem e controle de dose, e tomografia e radiografia são reguladas.

**Ponto essencial:** a ionização depende da energia **por fóton**, não da potência total. Um único fóton de raio X ioniza; bilhões de fótons de rádio, cada um com energia de 10^-7 eV (FM) a 10^-5 eV (2,4 GHz), somados em um feixe muito potente, continuam sem energia suficiente para arrancar um elétron. Analogia: uma chuva de bolinhas de pingue-pongue não quebra uma vidraça, por mais bolinhas que caiam; uma única bala pode. O rádio, a 100 MHz, tem fótons mais de 10 milhões de vezes menos energéticos que o limite de ionização.

## Radiação não ionizante não é sinônimo de inofensiva

Não ionizar não quer dizer que nada aconteça. Os efeitos mudam de mecanismo:

- **Aquecimento (efeito térmico):** o campo oscilante move cargas e moléculas polares (a água, especialmente) e a energia se dissipa como calor no tecido. É como funciona o forno de micro-ondas (cerca de 2,45 GHz, com potências da ordem de 1 kW numa cavidade blindada). Segundo a OMS, o aquecimento é o principal efeito biológico de campos de radiofrequência, e os níveis a que as pessoas normalmente estão expostas são muito menores que os necessários para produzir aquecimento significativo (OMS, página de perguntas e respostas sobre campos eletromagnéticos, consultada em setembro de 2026).
- **Estimulação de nervos e músculos por correntes induzidas:** predomina em frequências baixas (abaixo de dezenas de kHz a alguns MHz), como perto de linhas de energia.
- **Fora do rádio:** UV não ionizante ainda causa queimadura e danos por reações fotoquímicas; laser intenso danifica a retina por concentração de energia.

Para rádio (RF), na faixa que o curso cobre, o efeito **comprovado** é o térmico: as diretrizes de exposição são desenhadas para impedir aquecimento nocivo de tecidos.

### E os efeitos de longo prazo em níveis baixos?

Há pesquisa em andamento e debate público, sobretudo sobre celulares e redes 5G. A posição da OMS consultada para este texto: "apesar de extensa pesquisa, até hoje não há evidência para concluir que a exposição a campos eletromagnéticos de baixo nível seja nociva à saúde humana", reconhecendo pesquisa em curso sobre efeitos a longo prazo. A agência de pesquisa em câncer da OMS (IARC) classificou em 2011 os campos de RF como "possivelmente cancerígenos para humanos" (grupo 2B), categoria que significa evidência limitada, não prova (informação de conhecimento geral, não confirmada nas páginas consultadas nesta sessão; confira na fonte da IARC). Esta aula não se posiciona além disso: entenda o mecanismo, siga os limites oficiais, e consulte fontes primárias para o tema.

## Como se medem os limites

Duas grandezas:

- **Densidade de potência** `S` (W/m2) ou o campo `E` (V/m): usada quando o corpo está longe da antena (campo distante, Aula 2). Por exemplo, para uma antena com potência efetiva `EIRP` (Aula 5) na direção de interesse: `S = EIRP / (4 x pi x r^2)`.
- **Taxa de absorção específica (SAR, specific absorption rate)**, em W/kg: quanta potência o tecido absorve por quilo. Usada quando a fonte está perto do corpo, como celular junto à cabeça.

As diretrizes internacionais mais usadas são as da **ICNIRP** (Comissão Internacional de Proteção contra Radiação Não Ionizante). As diretrizes de 2020 cobrem de 100 kHz a 300 GHz e abrangem aplicações como 5G, Wi-Fi, Bluetooth, celulares e estações-base (página oficial da ICNIRP, consultada em setembro de 2026). Os valores numéricos dos limites estão no documento completo; não os reproduzo aqui porque não os confirmei nesta sessão, e valores de norma devem ser lidos na fonte vigente.

### Exemplo de estimativa de exposição

Transmissor com `EIRP = 100 W` em ganho máximo de antena, a `r = 10 m` de distância (bem no campo distante para as frequências de VHF e acima):

- `S = 100 / (4 x pi x 10^2) = 100 / 1256,6 = 0,0796 W/m2 = 79,6 mW/m2`
- `E = raiz(S x 377) = raiz(30,0) = 5,5 V/m`

A 2 m: `S = 100 / (4 x pi x 4) = 1,99 W/m2` e `E = 27,4 V/m`. A distância importa muito: o quadrado faz um fator 5 em distância ser um fator 25 em potência. Compare com os limites da norma vigente. O cálculo só vale no campo distante: bem perto da antena (campo próximo) as fórmulas simples falham e é preciso uma análise específica.

Dispositivos comuns de baixa potência (Wi-Fi na ordem de 100 mW, sensores LoRa na ordem de dezenas de mW, celulares dentro da regulamentação) geram, a distâncias normais de uso, densidades de potência muito baixas (faça a conta acima com a potência do aparelho e compare com a norma); o ponto de atenção real está em transmissores de potência maior e antenas de ganho alto.

## Regras práticas de segurança com transmissores

**Exposição a RF:**
- Não fique diante de antenas de alto ganho ou de radar em operação, no eixo do feixe e a curta distância.
- Não segure nem toque uma antena enquanto transmite. Nas pontas de antenas de HF ligadas a potências altas há tensões suficientes para causar **queimaduras por RF**, mesmo sem choque perceptível.
- Prefira instalar antenas de potência mais alta afastadas de áreas de convivência e acima da altura das pessoas.
- Tecidos que dissipam calor mal, como os olhos, costumam ser citados como os mais vulneráveis ao aquecimento (não confirmado nas fontes consultadas); por precaução, não olhe de perto para guias de onda ou antenas de micro-ondas de potência em operação.
- Se a potência é baixa (mW), o risco de RF é desprezível na prática; o cuidado cresce com watts e com ganho.

**Riscos que costumam ser maiores que a RF em si:**
- **Eletricidade:** amplificadores de válvula e fontes de alta potência têm tensões letais. Desligue e descarregue antes de abrir.
- **Antenas e mastros perto de rede elétrica:** contato com fios de alta tensão é um dos acidentes mais graves e evitáveis da atividade. A distância entre a estrutura e a rede deve ser maior que a altura total da estrutura, de modo que uma queda não a alcance. Não monte antenas sozinho nem sob chuva.
- **Queda de altura:** trabalho em telhado ou torre é risco de vida; use equipamento de proteção apropriado.
- **Raios:** antena externa é caminho para descargas; aterramento e desconexão do cabo em tempestade são práticas padrão.

Antes de qualquer instalação de maior porte (torre, antena de alta potência, perto de edificações e vizinhos), consulte as normas técnicas (ABNT, NR-10 e NR-35 para trabalho com eletricidade e em altura, entre outras aplicáveis) e um profissional habilitado. Esta aula ajuda a entender o porquê dos riscos; não substitui projeto e execução por responsável técnico.

## O lado legal: limites de exposição no Brasil

A regulamentação brasileira trata da limitação da exposição humana a campos eletromagnéticos de estações de radiocomunicação. Pelo meu conhecimento (não confirmado nesta sessão), a Lei nº 11.934/2009 e um regulamento da Anatel (Resolução nº 700, de 2018) tratam do tema, alinhados às recomendações da ICNIRP e da OMS. **Confirme os números e as obrigações atuais na Anatel** antes de qualquer projeto que envolva estações de potência relevante. O uso de equipamentos homologados, com a potência e a faixa permitidas, é parte da conformidade (Aula 9).

## Resumo

- Ionizar exige energia por fóton de cerca de 10 eV ou mais (UV extremo, raios X, gama); a ionização depende da energia de cada fóton, não da potência total do feixe.
- Rádio tem fótons milhões de vezes menos energéticos: é não ionizante e não quebra ligações químicas, mas pode aquecer tecido em níveis altos.
- Não ionizante não significa inofensivo: o limite prático é térmico, e as diretrizes (ICNIRP, 100 kHz a 300 GHz) são desenhadas para evitá-lo.
- A exposição cai com o quadrado da distância (`S = EIRP / (4 x pi x r^2)`); baixa potência (mW) é desprezível, watts com antena de alto ganho pedem cuidado.
- Os riscos mais graves da prática costumam ser elétricos e de altura (mastros perto de rede, quedas), não a RF.
- Verifique limites e obrigações vigentes na Anatel (verificado em setembro de 2026 apenas em nível geral).

## Para aprofundar

- [ ] [Radiation: Electromagnetic fields (OMS, perguntas e respostas)](https://www.who.int/news-room/questions-and-answers/item/radiation-electromagnetic-fields) (Organização Mundial da Saúde): resume fontes de campos, o efeito principal de aquecimento em RF e a posição oficial sobre saúde; em inglês.
- [ ] [ICNIRP: Guidelines for Limiting Exposure to Electromagnetic Fields (100 kHz to 300 GHz), 2020](https://www.icnirp.org/en/publications/article/rf-guidelines-2020.html) (ICNIRP): página oficial das diretrizes usadas como base de limites de exposição; os valores numéricos estão no PDF completo, ligado na página.

[Próxima aula: O espectro como recurso regulado](./09%20-%20Espectro%20Regulado.md)
