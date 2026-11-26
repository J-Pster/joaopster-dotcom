[Voltar ao módulo](./README.md)

# Aula 9: Segurança e exposição a RF, emergência, comunidade e estudo para a prova

*Pergunta que esta aula responde: como operar sem se machucar nem expor os outros a RF, qual o papel do radioamador em emergências, onde encontrar comunidade e como estudar para a prova?*

> **Aviso de segurança.** Trabalho com antenas, torres, alimentação elétrica e transmissores envolve risco de choque, queda e incêndio. O texto abaixo ensina a entender os riscos e os limites regulatórios; **não substitui** normas técnicas, instalador qualificado nem projeto para estruturas altas. Regras: Res. 700/2018 e Ato 17865/2023 (exposição a RF), Ato 3448/2026 (restrições de localização), verificadas em setembro de 2026.

## Parte 1: Exposição a RF e segurança da instalação

### Por que a RF exige cuidado

A energia de rádio de baixa frequência e potência alta pode **aquecer tecido** (o mecanismo é o mesmo do micro-ondas, muito mais fraco). Não é radiação ionizante (não quebra ligações químicas como raios X): o efeito estabelecido é o **aquecimento**. Por isso os limites de exposição se baseiam em quanto calor o corpo absorve.

### O que a lei diz

- A **Lei 11.934/2009** estabelece limites de exposição da população a campos eletromagnéticos, com base em recomendações da OMS. A Anatel aplica, pela **Resolução 700/2018**, os limites da **ICNIRP** (Comissão Internacional de Proteção Contra Radiação Não Ionizante), detalhados no **Ato 17865/2023**.
- O Ato 3448/2026 (item 6.2) exige que, na instalação de estação transmissora do serviço de radioamador, se observe a regulamentação de exposição.
- A Res. 700 (art. 13) **isenta** estações de radioamador e de Rádio do Cidadão da **avaliação de conformidade**, **desde que** a distância entre as antenas e os locais de livre acesso à população seja maior que as definidas no Ato (Subanexo IV do Ato 17865). A isenção **não exime** de cumprir os limites (art. 15).

Ou seja: você não faz um laudo, mas **é responsável por manter a antena longe de onde pessoas circulam**.

### Limites de exposição (população em geral, Ato 17865, Tabela A.II)

Valores eficazes, para média em 30 minutos:

| Faixa | Campo elétrico E (V/m) | Densidade de potência S (W/m²) |
|---|---|---|
| 0,1 a 30 MHz | 300 / f^0,7 (f em MHz) | (não tabelada) |
| 30 a 400 MHz | 27,7 | 2 |
| 400 a 2.000 MHz | 1,375 x f^0,5 | f / 200 |
| 2 a 300 GHz | (não tabelada) | 10 |

Os limites **ocupacionais** (para quem trabalha exposto) são mais altos: por exemplo 10 W/m² entre 30 e 400 MHz. Você e sua família em casa são "população em geral": use a tabela acima.

### Exemplo resolvido: distância segura em VHF

No campo distante (longe da antena), a densidade de potência é `S = P x G / (4 x pi x d^2)`, onde `P x G` é a e.i.r.p. e `d` a distância. Isolando `d`: `d = raiz( e.i.r.p. / (4 x pi x S) )`.

Estação móvel com **50 W** em 146 MHz e antena de ganho 1 (e.i.r.p. = 50 W). Limite da população: 2 W/m².

`d = raiz( 50 / (4 x 3,1416 x 2) ) = raiz( 50 / 25,13 ) = raiz(1,99) = 1,41 m`

Ou seja, a cerca de **1,4 m da antena** o limite é atingido no pior caso de transmissão contínua. Com transmissão intermitente (média em 30 min), a distância efetiva é menor, mas não conte com isso.

### Exemplo resolvido: HF

**100 W** em 7 MHz, antena sem ganho. Limite de campo elétrico: `E = 300 / 7^0,7`. Como `7^0,7` é aproximadamente 3,9, temos `E` de cerca de 77 V/m. Equivalente em densidade de potência em onda plana: `S = E^2 / 377`, que dá cerca de 15,7 W/m². Então `d = raiz( 100 / (4 x 3,1416 x 15,7) )` é aproximadamente 0,71 m.

**Ressalva importante:** essas contas assumem campo distante. Perto da antena (campo próximo), o campo pode ser maior ou menor, especialmente em HF com antenas curtas e em torno de partes metálicas. Serve como **ordem de grandeza**. O método oficial está no Ato 17865.

### Regras práticas para o HT

O HT no rosto é o caso mais comum de exposição alta:

- **Segure o HT com a antena afastada da cabeça** (alguns centímetros) enquanto transmite, ou use microfone de mão.
- **Use a menor potência** que dê comunicação (também é regra do Ato 926: a mínima necessária).
- **Não transmita com a antena encostada em outra pessoa.**
- **Não segure a antena com a mão** durante a transmissão.
- Antenas externas devem ficar em local onde ninguém passe perto do elemento irradiante.

### Segurança da instalação

1. **Linhas elétricas.** Nunca instale antena onde ela, ao cair ou ser manobrada, possa tocar em fio energizado. Mantenha, no mínimo, a **altura total da antena mais uma margem**, longe da rede. Contato de mastro com rede de média tensão é causa comum de acidentes fatais com antenas. Se houver dúvida, contrate profissional.
2. **Aterramento e proteção.** A matéria de eletrônica da prova cobra "função e utilização de fusíveis/disjuntores e aterramento". Aterre a estação e proteja contra descarga atmosférica; **desconecte a antena em tempestade**.
3. **Alimentação de 13,8 V e alta corrente.** Nos 14,5 A do exemplo da Aula 7, um fio fino aquece. Use bitola adequada, fusível próximo à fonte e conexões firmes.
4. **Trabalho em altura.** Torre e telhado exigem equipamento e treinamento. **Estruturas altas são projeto de engenharia**, não improviso.
5. **RF queima.** Não toque na antena ou no condutor vivo durante a transmissão; potência em HF pode causar queimadura.
6. **Localização.** O Ato 3448 (6.1) garante o direito de instalar seu sistema irradiante, **observadas** as zonas de proteção de aeródromos e heliportos, auxílios à navegação aérea ou costeira, e as normas de engenharia e **posturas federais, estaduais e municipais**. Regras de condomínio e leis municipais variam de cidade para cidade: consulte antes de instalar.
7. **Interferência em vizinhos.** Se sua estação atrapalha TV, som ou aparelhos, é seu dever tratar (filtros, ferrites, redução de potência). O Ato exige "não causar e não manter interferência" (a Cartilha da Anatel traz o tema).

## Parte 2: Emergência e comunicações em catástrofes

### Por que o serviço amador serve nisso

Quando enchentes, deslizamentos ou apagões derrubam a rede celular e a energia, os sistemas comerciais dependem de infraestrutura fixa (torres, fibra, data centers). Rádio amador **não depende de infraestrutura**: funciona com bateria, antena improvisada e pessoas treinadas. É a razão pela qual a emergência é uma das finalidades do serviço (Aula 1).

O regulamento reconhece isso com vários dispositivos:

- **Comunicações emergenciais são prioritárias** sobre as demais aplicações (Ato 926, 6.4).
- A **transmissão simultânea em mais de uma banda** é permitida para atender emergência ou calamidade pública (Ato 3448, 10.1 II).
- A **limitação de 10 minutos** por transmissão não se aplica a emergência (10.3 V), e repetidoras podem transmitir sem limite de tempo em comunicação de emergência (10.5.4).
- **Terceiros e mensagem internacional** de terceiros são admitidos em emergência ou desastre (4.3).
- A regra que veda a **fruição de tráfego entre redes** de outros serviços tem exceção para emergência (Res. 777).

### A RENER

A **Rede Nacional de Emergência de Radioamadores (RENER)** foi criada pela **Portaria MI 302/2001** do então Ministério da Integração Nacional, como parte do **Sistema Nacional de Defesa Civil**, com a finalidade de **prover ou suplementar comunicações** quando os meios usuais não puderem ser acionados em razão de desastre, emergência ou calamidade. Ela é formada por **radioamadores voluntários**, subordinada operacionalmente à Defesa Civil nacional e **supervisionada pela LABRE**. Uma norma de ativação e execução (Portaria 307/2009, na versão que consultei) prevê:

- Estações coordenadoras federal, estadual e municipal.
- Um radioamador cadastrado na RENER, presente no local do desastre, pode ativar a rede.
- Treinamento dos voluntários por órgãos de defesa civil, com **operação simulada** pelo menos uma vez por ano.
- Frequências de referência para chamada e ativação: trechos de HF (por exemplo 3.500 a 3.550 e 7.000 a 7.050 kHz, 14.000 a 14.350 kHz) e VHF (repetidoras e 146,390 a 146,600 MHz em FM simplex), **podendo ser designadas outras**. Esses números vêm do texto de 2009; **confirme na norma vigente**.

**Situação atual (com a fonte disponível):** em 2021, a LABRE publicou carta aberta descrevendo uma **reformulação** da RENER: a estrutura de cima para baixo, através da LABRE, tinha pouca ligação com as defesas civis locais; a proposta era a RENER congregar **Redes Estaduais de Emergência de Radioamadores (REER)** vinculadas às defesas civis estaduais, como as do Paraná, de São Paulo e de Mato Grosso, mantendo autonomia local. **Não consegui confirmar como está a RENER em setembro de 2026.** Se você quer atuar em emergência, o caminho prático é procurar a **Defesa Civil do seu município ou estado** e a LABRE ou o grupo de emergência local.

### Como se comportar numa emergência real

- **Não se auto-nomeie coordenador.** Coordenação é da Defesa Civil e das redes formais.
- **Libere a frequência.** Se uma rede de emergência estiver ativa, não use para conversa. Só transmita se tiver **informação útil** para o momento (a norma da RENER admite outros radioamadores fazerem isso em caráter excepcional).
- **Mensagem curta, clara, sem opinião**: quem, o quê, onde, quando, quantos, o que falta.
- **Fale em linguagem clara** e use a fonética para nomes e locais.
- **Não substitui serviços de resposta**: o rádio amador complementa, não substitui, bombeiros, SAMU e Defesa Civil.
- **Treine**: participar de simulados e de "rodadas" (nets) é o único jeito de estar pronto.

A ementa da prova inclui o item **"Emergências: procedimentos operacionais em situações de emergência"**.

## Parte 3: Comunidade e clubes

O radioamadorismo é um hobby social e de aprendizado. Onde procurar:

- **LABRE** nacional e as **LABRE estaduais**: o FAQ da própria LABRE sugere procurar a LABRE do seu estado e conversar pessoalmente com radioamadores mais antigos para decidir se quer mesmo ser radioamador. A LABRE oferece bureau de QSL, diplomas (WAB) e concursos, e representa o Brasil na IARU. A filiação é voluntária (o FAQ explica que após a Constituição de 1988 ela deixou de ser obrigatória).
- **Clubes e associações locais** (por exemplo, o CRAM publica artigos técnicos em português). Clubes são ótimos para conhecer repetidoras e antenas da região.
- **Rodadas (nets)** em repetidoras: a melhor porta de entrada para praticar.
- **Concursos e expedições.**
- **Escolas e universidades e defesa civil** também podem ter estação (o regulamento permite que sejam autorizadas).

Um **mentor** (radioamador experiente que ajude com antena e rádio) encurta muito o caminho.

## Parte 4: Como estudar para a prova

### O que é cobrado

O Ato 3448 (item 11.4) fixa a ementa das matérias. Resumo:

**Técnica e Ética Operacional:** diagrama de blocos de receptor, transmissor, transceptor e repetidora; antenas direcionais, uso de antena artificial, relação sinal/ruído e onda estacionária; frequência e comprimento de onda, faixas e batimento; propagação (ondas terrestres, espaciais, camadas atmosféricas, de VLF a SHF); interferências; comunicados (fonética da UIT e código Q); ética; emergências.

**Legislação de Telecomunicações:** Regulamento de Rádio da UIT; Recomendação ITU-R M.1544-1 (qualificações mínimas); plano de faixas da IARU Região 2; Lei Geral das Telecomunicações; RGST; Requisitos Técnicos e Operacionais (Ato 926); PDFF; regulamento de avaliação da conformidade e homologação.

**Eletrônica e eletricidade:** cresce com a classe.

- **Classe C (básico):** Lei de Ohm, funções de componentes, resistência, tensão, corrente e potência; espectro eletromagnético, frequência e comprimento de onda; fusíveis, disjuntores e aterramento; multímetro, wattímetro e medidor de ROE; blocos de estação; noções de modulação e propagação.
- **Classe B (acrescenta):** cálculo de circuitos, Leis de Joule e Kirchhoff, código de cores de resistores, associação série e paralelo, campos elétricos e magnéticos, impedância, reatância, capacitância e indutância, ondulatória senoidal, condutores e semicondutores, teoria de antenas, polarização, interferência e ressonância, modulações ASK, FSK e PSK.
- **Classe A (acrescenta):** análise de circuitos CA série e paralelo, eletrônica de RF e semicondutores em transmissores, ondas estacionárias e fenômenos de propagação em nível técnico.

**Nota:** um aluno que passou pelos Módulos 1 a 4 deste curso já viu boa parte da técnica (ondas, propagação, modulação, antenas, ROE). Falta **legislação** (Aulas 1 a 6) e **eletrônica básica**.

### Exemplo do tipo de cálculo cobrado

Dois resistores de 100 ohms e 220 ohms.

- **Série:** `R = 100 + 220 = 320 ohms`. Com 12 V: `I = V / R = 12 / 320 = 0,0375 A = 37,5 mA`.
- **Paralelo:** `R = (100 x 220) / (100 + 220) = 22000 / 320 = 68,75 ohms`.
- **Potência** no circuito série: `P = V x I = 12 x 0,0375 = 0,45 W`.

### Autoteste: certo ou errado

Julgue e confira nas aulas.

1. "O COER de Classe C dá acesso a todas as faixas amadoras." (Errado: Aula 3.)
2. "Para ser radioamador basta ter o COER; a estação própria é opcional." (Certo: Aula 2.)
3. "Uma transmissão de radioamador pode durar mais de 10 minutos em qualquer situação." (Errado: exceto emergência, Aula 8.)
4. "O subtom CTCSS torna a conversa privada." (Errado: Aulas 5 e 7.)
5. "Em modos digitais no serviço amador é permitida a criptografia." (Errado: Ato 926, 6.11.)
6. "O indicativo pertence ao operador, não à estação." (Errado: pertence à estação, Aula 2 e 4.)

### Materiais oficiais e de apoio

- **Cartilha do Serviço Radioamador** (Anatel): guia rápido do caminho, das regras e da prova, com anexos por matéria (Técnica e Ética Operacional, Legislação, Eletrônica).
- **Manual de Instruções do Candidato** (prova online).
- Os **atos** citados: Res. 777/2025, Ato 3448/2026, Ato 926/2024.
- **Material em vídeo** de radioamadores brasileiros (com cautela; consulte sempre a norma).

### Plano sugerido

1. Leia esta seção do módulo e a Cartilha.
2. Estude legislação em cima das Aulas 1 a 6 e dos atos.
3. Revise eletrônica básica (Ohm, potência, série e paralelo, código de cores).
4. Faça o autoteste acima e os exemplos.
5. Configure e teste o computador para a prova online **antes** (Teams, câmera, microfone).
6. Inscreva-se e faça a prova.

## Resumo

- Exposição a RF: limites da ICNIRP via Res. 700/Ato 17865; radioamador é isento de laudo se a antena estiver longe de locais de acesso público, mas deve cumprir os limites. Exemplo: 50 W em 146 MHz atingem 2 W/m² a cerca de 1,4 m em campo distante. No HT, afaste a antena da cabeça e use a menor potência.
- Segurança da instalação: distância de linhas elétricas, aterramento, fusível, proteção contra raio, trabalho em altura e normas locais e aeronáuticas (Ato 3448, 6.1).
- Emergência: comunicações emergenciais são prioritárias e há exceções às regras de tempo, banda simultânea, terceiros e tráfego entre redes. A RENER (Portaria MI 302/2001) é vinculada à Defesa Civil e à LABRE; sua situação atual não foi confirmada.
- Comunidade: LABRE, clubes locais, rodadas em repetidoras e concursos.
- Prova: três matérias, ementa oficial no Ato 3448; a Cartilha e o Manual do Candidato são os materiais oficiais.

## Para aprofundar

- [ ] [Cartilha do Serviço Radioamador](https://sistemas.anatel.gov.br/anexar-api/publico/anexos/download/6067372ab14ee1c9702eb7ff93f11323) (Anatel): guia oficial com anexos de estudo por matéria.
- [ ] [Prova online: Manual de Instruções do Candidato](https://sistemas.anatel.gov.br/anexar-api/publico/anexos/download/0a5f21136202dc8e4135caab170cfb45) (Anatel): como preparar e realizar a prova.
- [ ] [Ato nº 17865, de 30 de dezembro de 2023 (limites de exposição)](https://informacoes.anatel.gov.br/legislacao/component/content/article/161-atos-de-requisitos-tecnicos-de-gestao-do-espectro/2023/1914-ato-17865) (Anatel): limites e regras de isenção para radioamador.
- [ ] [Carta aberta aos Radioamadores brasileiros: Novas diretrizes da RENER](https://www.labre.org.br/rener/) (LABRE, PR7GA, 2021): descreve a reformulação da RENER e o papel das REER.
- [ ] [Portaria MI 302/2001 (criação da RENER)](https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil/informacoes-uteis/portaria_302_cria_a_rener_24102001.pdf) (Ministério da Integração Nacional): o ato que criou a rede.

## Próximo módulo

Você agora entende o quadro legal e a prática do serviço amador. Próximo passo: usar computador e rádio definido por software para ver e ouvir o espectro que estudou.

[Módulo 6: SDR, Software Defined Radio](../06%20-%20SDR%20-%20Software%20Defined%20Radio/README.md)
