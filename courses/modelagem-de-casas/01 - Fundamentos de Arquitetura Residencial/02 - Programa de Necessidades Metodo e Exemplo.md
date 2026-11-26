[Voltar ao módulo](./README.md)

# Aula 2: Programa de necessidades, o método e um exemplo resolvido

*Pergunta que esta aula responde: como transformar uma lista de atividades em uma lista de ambientes com área calculada, antes de desenhar qualquer parede?*

## Por que existe um programa de necessidades

Sem ele, o projeto começa pela forma (a fachada, o telhado) e depois tenta encaixar a vida dentro. O resultado típico é falta de espaço num cômodo e sobra em outro, descoberta só quando a parede já foi levantada. O **programa de necessidades** é o documento que diz **o que precisa existir na casa, com que tamanho e com que condições**, antes de haver qualquer desenho. Ele é o contrato entre o que a família precisa e o que o projeto vai entregar. Todo o desenho posterior é conferido contra ele: "cabe o que o programa pede?".

Ele aparece na NBR 16636-2 (projeto arquitetônico) como uma etapa própria, logo depois do levantamento de dados e antes do estudo preliminar.

## Briefing e programa: qual a diferença

- **Briefing**: o que o morador quer e conta (desejos, hábitos, restrições), em linguagem comum. Vem da conversa. É a matéria-prima da aula 1.
- **Programa de necessidades**: o briefing traduzido em ambientes, atividades, mobiliário, quantidades e áreas. É técnico e mensurável.

O programa é uma **tabela**, não um texto, porque a tabela obriga a pensar em cada ambiente pelas mesmas colunas e permite somar a área total.

## A tabela do aluno, coluna por coluna

O material de apoio desta pasta traz a tabela que você usa neste curso:

- Imagem: [Programa de Necessidades.png](./Programa%20de%20Necessidades.png)
- Explicação do método: [Sobre Programa de Necessidades.txt](./Sobre%20Programa%20de%20Necessidades.txt)
- Planilha com as fórmulas prontas: [TABELA PROGRAMA DE NECESSIDADES.xlsx](./TABELA%20PROGRAMA%20DE%20NECESSIDADES.xlsx)

A tabela tem o cabeçalho "Nome do projeto" e "Setor" (por exemplo, íntimo), e as colunas abaixo. Cada linha é um ambiente.

| Coluna | O que se escreve | Por que existe |
|---|---|---|
| **Sub-setores / seções / departamentos / ambientes** | O nome do ambiente ("quarto de casal", "cozinha") | Identifica a linha. |
| **Atividades** | O que se faz nesse ambiente ("dormir, guardar roupa, vestir-se") | Justifica o ambiente e é a fonte do mobiliário. |
| **Comandos de dimensões, mobiliários, equipamentos** | Lista de móveis e equipamentos com suas medidas ("cama de casal 1,40 x 1,90") | O tamanho do ambiente nasce do que precisa caber. |
| **Nº de ambientes / cômodos** | Quantos ambientes iguais existem (ex.: 2 banheiros iguais) | Evita repetir linhas e permite multiplicar a área. |
| **Área unitária mínima** | A área de um ambiente, tirada do módulo mínimo | Vira o tamanho de referência do cômodo. |
| **Área total** | `área unitária mínima x nº de ambientes` | Soma o que aquele tipo de ambiente ocupa. |
| **Características ambientais e de relacionamento** | Condições específicas: ventilação, insolação, ligação com outros ambientes, normas | Guarda as exigências que a área não expressa. |
| **Módulo mínimo** | O desenho do ambiente com os móveis e as circulações | É de onde saem as medidas. |

Na parte de baixo da tabela há os totais: **Total** (soma das áreas totais do setor), **Total + 30%** (acrescenta a margem para paredes e circulações) e **Total geral**. A planilha em Excel ainda tem uma linha **Total final**, que soma todos os setores, e calcula a área total de cada linha pela fórmula `área unitária x nº de ambientes`.

## O módulo mínimo: de onde vêm as medidas

O **módulo mínimo** é um desenho esquemático, em planta, do menor retângulo que comporta as atividades do ambiente. Método:

1. Liste os móveis e equipamentos que a atividade exige (a coluna "comandos de dimensões").
2. Desenhe cada um em escala, como retângulos, dentro de um contorno.
3. Coloque as **áreas de uso e circulação** necessárias: onde a pessoa fica de pé, onde abre a porta do armário, onde passa. Usa-se a medida mínima de circulação de cada situação (a aula 6 traz a tabela).
4. Feche o menor retângulo que contém tudo. Meça largura e comprimento.
5. A **área unitária mínima** é `largura x comprimento`.

O ponto central: **a área não é um palpite, é o resultado de um desenho**. Quem diz "quarto tem 12 m²" chutou. Quem desenha a cama, o guarda-roupa e as circulações e mede o retângulo tem um número justificável e sabe exatamente quais móveis o número comporta. Se depois o cômodo precisar encolher, o módulo mostra o que sai de dentro.

### Exemplo de módulo mínimo: quarto de casal

Medidas de referência (da tabela informativa da NBR 15575-1, ver aula 6): cama de casal 1,40 x 1,90 m; criado-mudo 0,50 x 0,50 m; guarda-roupa 1,60 x 0,50 m; circulação mínima de 0,50 m entre móveis e paredes.

- Largura: 0,50 (circulação) + 1,40 (cama) + 0,50 (circulação) = **2,40 m**. Os criados-mudos ficam na cabeceira, ocupando parte dessas faixas.
- Comprimento: 1,90 (cama) + 0,50 (circulação no pé da cama) + 0,50 (guarda-roupa na parede do pé) = **2,90 m**. O guarda-roupa de 1,60 m cabe na largura de 2,40 m.
- Área unitária mínima: 2,40 x 2,90 = **6,96 m²**.

Esse é o mínimo que comporta os móveis com circulação mínima, e não uma sugestão de conforto. Na prática o projetista adota um valor maior (poltrona, penteadeira, guarda-roupa de 2,00 m). O programa registra as duas coisas: o mínimo calculado e a área adotada, com a justificativa.

## A regra dos 30%

Somando as áreas dos ambientes, o resultado ainda **não é a área construída**. Faltam as paredes (a espessura de uma parede de tijolo com reboco fica em torno de 15 a 25 cm, e há dezenas de metros lineares) e as **circulações** (corredores, halls, escadas) que não são ambiente da tabela. A tabela do aluno acrescenta **30%** (linha "Total + 30%") como estimativa. Esse percentual é uma regra prática de pré-dimensionamento, não uma norma; casas compactas e sem corredor podem ficar abaixo, e casas com muitos corredores ou escada, acima. Depois do desenho, você mede a área real e compara.

## Exemplo resolvido: casa para uma família de quatro

**Briefing resumido.** Casal e dois filhos (um menino, uma menina), casa térrea, uma pessoa trabalha em casa uns três dias por semana, recebem parentes aos domingos, um carro.

**Decisões.** Suíte para o casal, dois quartos para os filhos, um banheiro social (para os filhos e visitas), um lavabo, sala de estar e de jantar, cozinha, área de serviço e uma vaga de garagem coberta. Um pequeno escritório fica no setor íntimo.

Os números abaixo usam as medidas mínimas de mobiliário da aula 6 e uma **área adotada** com folga, indicada no texto. As áreas são exemplos de método, não receita.

### Setor íntimo

| Ambiente | Atividades | Mobiliário (módulo) | Nº | Área unit. | Área total | Características |
|---|---|---|---|---|---|---|
| Suíte do casal | dormir, vestir-se, guardar roupa | cama 1,40 x 1,90; 2 criados 0,50 x 0,50; guarda-roupa 2,00 x 0,60; poltrona (mínimo calculado: 6,96 m²) | 1 | 11,5 (3,20 x 3,60) | 11,5 | ventilação e luz naturais; silêncio; ligado a banheiro próprio |
| Quarto dos filhos | dormir, estudar, guardar | cama 0,80 x 1,90; criado 0,50 x 0,50; guarda-roupa 1,50 x 0,50; mesa 0,80 x 0,60 (mínimo sem mesa: 5,22 m²) | 2 | 9,0 (2,80 x 3,20) | 18,0 | ventilação e luz naturais; afastado do setor social |
| Banheiro (suíte e social) | higiene, banho | vaso, lavatório com bancada, box 0,90 x 0,95 | 2 | 3,3 (1,50 x 2,20) | 6,6 | ventilação natural; paredes hidráulicas agrupadas |
| Escritório | trabalhar em computador, arquivar | mesa 1,40 x 0,70; cadeira; armário 0,80 x 0,45; recuo da cadeira 0,80 | 1 | 5,8 (2,40 x 2,40) | 5,8 | luz natural sem reflexo na tela; afastado do barulho da sala |
| **Total íntimo** | | | | | **41,9** | |

### Setor social

| Ambiente | Atividades | Mobiliário (módulo) | Nº | Área unit. | Área total | Características |
|---|---|---|---|---|---|---|
| Hall de entrada | receber, tirar sapato, deixar chaves | banco, aparador; 1,20 m livre em frente à porta | 1 | 1,8 (1,20 x 1,50) | 1,8 | ligado à rua e à sala |
| Sala de estar | conviver, assistir TV | sofá de 3 lugares 1,70 x 0,70; poltrona 0,80 x 0,70; rack 1,60 x 0,45; largura mínima 2,40 | 1 | 13,0 (3,40 x 3,80) | 13,0 | luz e ventilação; ligada à sala de jantar e à varanda |
| Sala de jantar | comer, receber | mesa 1,50 x 0,80 (6 lugares); 0,75 m de circulação a partir da borda | 1 | 6,9 (3,00 x 2,30) | 6,9 | ligada à cozinha |
| Lavabo | higiene rápida de visitas | vaso 0,60 x 0,70; lavatório | 1 | 1,9 (1,20 x 1,60) | 1,9 | perto da sala, sem abrir direto para ela |
| **Total social** | | | | | **23,6** | |

### Setor de serviço

| Ambiente | Atividades | Mobiliário (módulo) | Nº | Área unit. | Área total | Características |
|---|---|---|---|---|---|---|
| Cozinha | guardar, preparar, cozinhar, lavar louça | pia 1,20 x 0,50; fogão 0,55 x 0,60; geladeira 0,70 x 0,70; armários; 0,85 m de circulação em frente (mínimo calculado: 3,00 x 2,05 = 6,15 m²) | 1 | 7,2 (3,00 x 2,40) | 7,2 | ventilação forte; acesso direto ao serviço e à sala de jantar |
| Área de serviço | lavar, secar, passar roupa | tanque 0,52 x 0,53; máquina 0,60 x 0,65; bancada; varal | 1 | 4,8 (2,00 x 2,40) | 4,8 | ventilada, com ponto de água e esgoto; perto da cozinha |
| **Total serviço** | | | | | **12,0** | |

### Garagem

| Ambiente | Atividades | Mobiliário | Nº | Área unit. | Área total | Características |
|---|---|---|---|---|---|---|
| Vaga coberta | guardar um carro | 1 carro; espaço para abrir a porta | 1 | 12,0 (2,40 x 5,00, valor usual, confirmar no código de obras) | 12,0 | acesso direto da rua; sem fechamento |

### Fechamento dos totais

- Soma dos setores internos: `41,9 + 23,6 + 12,0 = 77,5 m²`.
- Total + 30% (paredes e circulações): `77,5 x 1,30 = 100,75 m²`.
- Garagem coberta, tratada à parte (não recebe os 30%, porque não tem parede interna nem corredor): `12,0 m²`.
- Total final aproximado: `100,75 + 12,0 = 112,75 m²` de área construída (arredonde para 113 m²).

Essa é a **meta de área**. Ao desenhar, se a planta estourar muito acima disso, algum ambiente cresceu sem justificativa. Se ficar abaixo, algum móvel do módulo está apertado. O Módulo 6 compara essa área com o terreno e a legislação.

## Erros comuns

- **Listar cômodos sem atividades**: "escritório" sem dizer o que se faz nele. Depois ninguém sabe se cabem duas mesas.
- **Copiar áreas de plantas prontas** em vez de derivar do módulo: o número vem de outra família.
- **Esquecer os 30%** e descobrir que a casa "crescida" não cabe no terreno.
- **Ignorar as características ambientais**: um banheiro sem ventilação natural, um quarto sobre o barulho da garagem.
- **Programa fixo demais**: ele é revisado no estudo preliminar; se o desenho mostrar que o programa não fecha, muda-se o programa, conscientemente.

## Resumo

- O programa de necessidades diz o que precisa existir, com que tamanho e sob que condições, antes do desenho.
- A tabela liga atividade, mobiliário, quantidade, área e condições do ambiente; a área total de uma linha é `área unitária x nº de ambientes`.
- O módulo mínimo é um desenho em planta com os móveis e as circulações; a área unitária mínima é o retângulo que os contém.
- O total precisa de cerca de 30% de acréscimo para paredes e circulações (regra prática, não norma).
- O resultado é uma meta de área para conferir o desenho, não um desenho pronto.

## Para aprofundar

- [ ] [PROGRAMA DE NECESSIDADES DE UMA CASA | PASSO 4](https://www.youtube.com/watch?v=Oty-kyvbb9Q) (Daniel Carvalho Arquiteto): pelo título, aplica o programa a uma casa; útil para comparar com o método da tabela.
- [ ] [PROGRAMA DE NECESSIDADES NA ARQUITETURA](https://www.youtube.com/watch?v=FUVot9N3Ncw) (João Pessutto): pelo título, apresenta o conceito de programa de necessidades e seu papel no projeto.

[Próxima aula: Preenchendo sua própria tabela](./03%20-%20Preenchendo%20Sua%20Propria%20Tabela.md)
