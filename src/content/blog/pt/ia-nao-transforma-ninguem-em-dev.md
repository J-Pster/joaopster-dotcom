---
title: 'A IA não transforma ninguém em desenvolvedor'
description: 'Vi no LinkedIn que uma criança de 15 anos com Claude Code faz o que um dev levava anos pra aprender, e eu discordo, porque a IA escreve o código mas só multiplica o que você já sabe'
pubDate: '2026-11-27T18:10:29-03:00'
tags: ['ai', 'career', 'opinion']
---

Eu usei IA pra escrever esse post, sim. E eu duvido que você ache aqui o texto genérico, cheio de "no cenário atual" e de frase de efeito, que sai quando alguém pede pro ChatGPT "escreve um artigo sobre IA e o futuro dos devs". Esse post saiu de uma [skill que eu mesmo escrevi](https://github.com/J-Pster/joaopster-dotcom/tree/master/.claude/skills/escrever-post-blog), que me entrevistou em duas rodadas antes de escrever uma linha, pesquisou as fontes, e depois passou o texto por uma checagem contra os vícios de escrita de IA. Tudo que tá aqui eu falei, a IA só organizou, e esse jeito de usar a ferramenta é justamente o assunto do post.

Esses dias eu vi um post no LinkedIn dizendo que hoje uma criança de 15 anos com Claude Code faz o que um desenvolvedor levava anos de experiência pra fazer. Não lembro de quem era, e nem importa, porque eu vejo essa frase em tudo que é lugar, com variações. E eu discordo dela, porque ela confunde escrever código com fazer o trabalho de um desenvolvedor.

Pra você saber de onde eu falo, eu programo faz seis anos. Fiz a [Trybe](https://www.tecmundo.com.br/mercado/236790-trybe-vale-pena-8-pontos-olho.htm), um bootcamp de mais de 1.500 horas, quase um ano inteiro de curso, e mesmo assim a maior parte do que eu sei eu aprendi sozinho, porque eu sou autodidata e obcecado por produtividade, e quando eu quero uma coisa eu não largo. Hoje eu tenho uma startup que eu ainda não posso dizer o nome, com 10 meses de vida e mais de 500 usuários, e eu escrevi uns 87% do código dela, perto de 2 milhões de linhas, sem contar teste, migration nem arquivo gerado (eu contei com script, não é chute). Toda a arquitetura e toda a infraestrutura, desde o dia zero, foram decisões minhas. E 100% desse código passa por IA, eu não escrevo mais uma linha de código na mão faz tempo.

Então não, eu não sou contra IA. Eu uso IA pra programar faz três anos, e a ficha caiu logo na primeira vez que eu usei.

## A porta de entrada da programação foi derrubada

Numa coisa o post do LinkedIn tá certo. Hoje qualquer um escreve código. A porta de entrada da programação não tá só aberta, ela foi derrubada, não existe mais porta. Você abre o Lovable, o Bolt ou o próprio Claude Code, descreve o que quer e sai uma tela funcionando.

O nome disso pegou em fevereiro de 2025, quando o Andrej Karpathy [chamou de "vibe coding"](https://simonwillison.net/2025/Feb/6/andrej-karpathy/) esse jeito de programar em que você "esquece que o código existe". Só que muita gente esqueceu da outra metade do tweet, em que ele mesmo diz que isso é "not too bad for throwaway weekend projects", projeto de fim de semana pra jogar fora, e tem gente usando isso pra guardar dado de cliente.

Escrever código nunca foi a parte difícil. O difícil é fazer um software que dura, que dá pra manter, que aguenta crescer, que escala, que tem uma infraestrutura que não cai e não te arruína no fim do mês. Isso a IA não te dá de graça, porque pra pedir a coisa certa você precisa saber o que é a coisa certa.

## Escrever código ficou fácil, o resto continua difícil

Pergunta pra quem virou "dev" em sete dias o que é um design pattern. O que muda entre um monólito e microsserviços, quando vale cada um. Como funciona uma arquitetura em camadas, ou uma separada por domínio. Na maioria das vezes a pessoa não sabe, e não sabe porque nunca estudou. Ela sabe pedir código pra IA, e quando o sistema cresce e começa a dar problema de arquitetura, ela não tem nem o vocabulário pra entender o que tá errado.

Com infraestrutura é pior ainda. Tem muita gente se apresentando como desenvolvedor que nunca abriu o console da AWS, nunca entrou num Azure e não sabe o que GCP quer dizer. No lugar disso usa Supabase e Firebase, e acha que tá fazendo infraestrutura.

Eu não tenho nada contra o Supabase em si. Por baixo ele é um Postgres, com autenticação, storage e uma API REST gerada em cima, ele é open source, [roda na AWS](https://supabase.com/docs/guides/platform/regions) no serviço gerenciado e dá pra hospedar você mesmo. O que me incomoda é quem usa e não tem ideia de nada disso. Não sabe que tem um Postgres embaixo, não sabe que a segurança depende de uma coisa chamada RLS (Row Level Security, as regras que dizem qual usuário pode ler qual linha do banco) e não sabe que, se não configurar isso, qualquer um com a chave pública do front lê o banco inteiro.

Em 2025 um pesquisador analisou 1.645 apps feitos no Lovable e achou 170 expondo dados por RLS mal configurada, com e-mail, telefone, dado de pagamento e chave de API vazando, e isso virou a [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757). Em fevereiro de 2026 a Wiz achou o [banco inteiro do Moltbook aberto](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) pelo mesmo motivo, com cerca de 1,5 milhão de tokens expostos, e o fundador tinha dito publicamente que não escreveu uma linha de código. Eu mesmo já achei chave exposta fazendo análise de SaaS por aí, e no YouTube tem um monte de vídeo de gente mostrando como é fácil explorar esses apps.

### Firebase não é "o banco de dados"

Eu já vi muita gente chamar Firebase de banco de dados, e pior, achar de verdade que ele é o banco certo pra um sistema grande em produção, guardando dado de usuário, porque "é mais rápido de começar". O Firebase é uma plataforma, e os bancos dentro dele são o [Firestore e o Realtime Database](https://firebase.google.com/docs/database/rtdb-vs-firestore). Quando um dev fala "banco de dados", quase todo mundo pensa num Postgres ou num MySQL, um banco relacional, com SQL. O Firestore é um banco de documentos, NoSQL. E é aqui que o júnior cai.

Banco NoSQL não é ruim, a Amazon guarda muita coisa no DynamoDB. O erro é pegar um dado relacional, que precisa de join, de transação e de integridade, e enfiar num banco de documentos sem modelar nada.

Eu sei a dor de cabeça porque eu já trabalhei num projeto assim, com algumas centenas de milhares de usuários, o banco no Firestore e o back-end num monte de Cloud Functions. O custo era muito alto. A gente precisava de relação entre os dados e não conseguia fazer direito, porque o banco não é relacional. Não tinha padrão de regra de segurança, então praticamente qualquer coisa podia mudar qualquer documento. Muito dado não tinha estrutura nenhuma, um documento era de um jeito e o do lado era de outro. E migrar aquilo era um sofrimento.

### Lovable não é ferramenta de dev

Pra fazer um protótipo e validar uma ideia, o Lovable é ótimo e eu não tenho nada contra. O que me revolta é gente tão convencida de que virou desenvolvedor que acha que o Lovable é a ferramenta de um dev, e que não tem ideia de como é o setup de IA de quem programa de verdade.

O meu, por exemplo, é o Claude Code com algumas dezenas de skills que eu escrevi, um monte de hooks e milhares de regras de lint e de Stylelint pra obrigar o código a sair no padrão que eu quero. Na startup a gente tem dezenas de milhares de testes unitários, hook que roda antes de cada push, hook na hora do deploy, uma esteira de CI/CD enorme e um sanity check que simula um usuário de verdade depois de cada deploy. No dia a dia eu tenho de seis a oito chats de IA abertos, cada um com dezenas de subagentes. Quem acha que dev com IA é escrever um prompt e apertar enter nunca ouviu falar de teste unitário nem de regra de lint, e se ouviu, não sabe usar.

E se você acha que eu tô exagerando a produtividade, o meu [WakaTime](https://wakatime.com/@JoaoPster) é público, e no topo do meu site tem o total de horas que eu programei.

## Quem tá vendendo o atalho

Pesquisa "curso de desenvolvedor" ou "crie seu SaaS sem saber programar" e você acha um monte de gente prometendo te transformar em dev em sete dias. Tá em tudo que é lugar, e todo mundo sabe que é assim. Eu nunca comprei um desses, e nem vou, porque pra mim isso é golpe.

Eles exploram uma coisa que todo ser humano tem, a vontade de conquistar as coisas rápido, e que hoje, com tanta dopamina barata, tá mais forte do que nunca. É o velho "dinheiro rápido e fácil", agora com cara de IA.

O que mais me irrita é que isso atrapalha os outros, e se tem uma coisa que eu detesto na vida é atrapalhar o próximo. Só que o golpista vai além de atrapalhar. Ele engana a pessoa, pega o dinheiro dela e ainda deixa ela pra trás, achando que aprendeu, com um app inseguro no ar e sem a base pra perceber o tamanho do problema. Eu fiz um curso de um ano e mais de 1.500 horas e sei o quanto ainda me faltava quando terminei. Sete dias é piada.

## A IA multiplica o que você já é

A IA é uma ferramenta, e como toda ferramenta ela aumenta a produtividade de quem usa, mas ela não deixa bom um código ruim e não transforma em desenvolvedor quem não é.

- Um dev bom com IA continua sendo um dev bom, só que entrega dez vezes mais.
- Um dev ruim com IA continua ruim, e entrega dez vezes mais código ruim.
- Quem não é dev continua não sendo, e entrega código quebrado e cheio de falha de segurança dez vezes mais rápido.

Eu já vi dev contratado entregando código bugado, aleatório, sem sentido nenhum, gerado por IA, em mais de uma empresa. E é a reclamação que eu mais vejo na internet. Na pesquisa de 2025 do Stack Overflow, a frustração número um de quem usa IA pra programar foi justamente código ["quase certo, mas não exatamente"](https://survey.stackoverflow.co/2025/ai), que 66% dos devs citaram. Quem não sabe programar não consegue nem ver onde tá o "quase".

### IA como muleta

Tem um outro tipo que me incomoda, a pessoa que usa a IA como muleta. Não tem paciência, nem perseverança, nem disciplina pra usar a IA pra aprender antes de usar ela pra fazer, e aí pede tudo pronto e segue em frente sem entender nada.

Eu sei como é porque eu já fiz isso. No começo, eu já sabia teste unitário mas não sabia fazer teste de integração, e fui soberbo o suficiente pra pedir pra IA fazer sem eu entender como funcionava. Deu errado. Fiquei preso num loop, a coisa quebrava, eu pedia pra IA consertar, quebrava de novo, e eu não fazia ideia do porquê, porque eu não sabia o que tava acontecendo ali. Quando caiu a ficha eu pensei que tinha sido muito idiota, era só ter aprendido primeiro e pedido depois.

Em janeiro de 2026 a própria Anthropic publicou um [estudo com 52 engenheiros aprendendo uma biblioteca nova](https://www.anthropic.com/research/AI-assistance-coding-skills). Quem aprendeu com a IA fazendo por ele tirou em média 17% a menos num teste de compreensão do que quem escreveu o código na mão, e a maior diferença foi em debugging. E quem usou a IA pra pedir explicação e tirar dúvida conceitual aprendeu mais. A IA ensina bem, se você pedir pra ela te ensinar.

## A IA vai acabar com o desenvolvedor?

Com o desenvolvedor do jeito que ele é hoje, eu acho que vai. O dev vai parar de escrever código e vai virar a pessoa que define a arquitetura, a infraestrutura, como as coisas têm que funcionar e qual estrutura usar. Eu já trabalho assim, a IA escreve e eu decido.

Em março de 2025 o Dario Amodei, CEO da Anthropic, [disse](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic) que em três a seis meses a IA ia escrever 90% do código. Na mesma fala ele disse que o programador ainda ia precisar definir o design e a segurança do sistema, e essa segunda parte quase ninguém repete. E a vaga de júnior tá mesmo mais difícil, um [estudo de Stanford](https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine) com dados de folha de pagamento mostra que a contratação de gente de 22 a 25 anos nas profissões mais expostas à IA caiu bem abaixo da tendência, mas os próprios autores dizem que não dá pra afirmar que a IA é a causa.

Pra mim a carreira de dev não acabou. O que mudou é o que a pessoa precisa estudar. O que antes você só aprendia quando virava sênior, hoje o júnior precisa aprender desde o começo, porque escrever código a IA já faz.

## O que eu estudaria se começasse hoje

Primeiro, aprender a aprender. Parece bobo, mas você precisa saber como você aprende, e o Fabio Akita tem [um vídeo de 2020 sobre isso](https://www.youtube.com/watch?v=oUPaJxk6TZ0) que eu recomendo, em que ele resume aprender a aprender como "se virar, de verdade". Eu mesmo uso IA pra montar os cursos com que eu estudo, e mostro o processo inteiro na página de [como eu crio meus cursos](/cursos/como-criar/).

Depois, a base. Os conceitos, como a internet funciona, o que acontece entre o navegador e o servidor. E escrever código, muito código. Júnior tem que escrever código, porque é escrevendo que você entende o que a IA tá te entregando.

E aí, bem mais cedo do que a gente aprendia antes, as coisas de sênior. Arquitetura, todos os tipos. Infraestrutura. Modelagem de software, que no [outro vídeo do Akita](https://www.youtube.com/watch?v=SmYQcaP1Jgw) é representar o mundo real no código, e pra isso você precisa entender o negócio e não só a linguagem. Design patterns. E até aprender a empreender.

Daqui a um tempo eu vou escrever outro post mostrando como eu controlo a qualidade do código com IA, com um throughput alto e sem ter que revisar cada PR na mão. Lá vai dar pra ver na prática a diferença entre pedir código pra IA e programar com ela.
