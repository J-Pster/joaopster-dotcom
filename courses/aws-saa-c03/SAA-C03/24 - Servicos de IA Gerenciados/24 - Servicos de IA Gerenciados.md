---
aliases:
  - Módulo 24
modulo: 24
parte: "VII Dados, migração e IA"
dominios:
  - 1
  - 2
  - 3
  - 4
lida: false
tags:
  - modulo
  - saa-c03
  - modulo-24
---

# Módulo 24: Serviços de IA gerenciados

Este módulo responde a uma pergunta de arquitetura: quando uma tarefa de inteligência artificial é comum (ler um documento, transcrever uma ligação, traduzir, moderar uma imagem), por que a resposta certa é **chamar uma API pronta** em vez de treinar um modelo, e como saber qual serviço usar? O módulo apresenta os sete serviços prontos da lista oficial ([[Comprehend]], [[Translate]], [[Transcribe]], [[Polly]], [[Lex]], [[Rekognition]], [[Textract]]) e o [[SageMaker AI]], que entra quando o modelo é só seu. É um módulo curto porque a prova cobra os serviços como "serviços de propósito específico": você precisa reconhecer o verbo do requisito, o modo de chamada (síncrono, assíncrono, [[Streaming de Dados|streaming]]) e os pontos de integração com o que já viu.

> [!info] O que este módulo assume
> Você já viu eventos e filas ([[15 - Desacoplamento Filas Eventos e Workflows|Módulo 15]]), [[16 - Serverless Lambda e API Gateway|Lambda e API Gateway]], [[11 - Amazon S3 a Fundo|S3]] e os [[VPC Endpoint|endpoints de VPC]] ([[06 - VPC a Fundo|Módulo 6]]). Os dados que alimentam e saem desses serviços costumam ir para o pipeline de analytics do [[22 - Dados Analytics e Ingestao|Módulo 22]]. A comparação de custo entre os modos de inferência e os serviços prontos é aprofundada no [[25 - Otimizacao de Custos|Módulo 25]].

## Aulas

1. [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1 Por que serviços de IA prontos e como escolher pelo verbo]]: as três camadas, o mapa verbo para serviço, modos síncrono, assíncrono e [[Streaming de Dados|streaming]], segurança e quotas.
2. [[24.02 - Texto com Comprehend e Translate|24.2 Texto com Comprehend e Translate]]: insights, modelos personalizados, [[PII]], limites de idioma, tradução em [[Processamento em Lote|lote]] e [[Custom Terminology|custom terminology]].
3. [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3 Transcribe, Polly e Lex: voz, texto e conversa]]: batch e [[Streaming de Dados|streaming]], [[Call Analytics]], [[SSML]], lexicons, intents e slots.
4. [[24.04 - Visao e Documentos com Rekognition e Textract|24.4 Visão e documentos com Rekognition e Textract]]: moderação, rostos, [[Rekognition Custom Labels|Custom Labels]], formulários, tabelas, faturas e queries.
5. [[24.05 - SageMaker AI e Modelo Proprio|24.5 SageMaker AI e o modelo próprio]]: Canvas, Autopilot, JumpStart, [[Ground Truth]], [[Model Monitor]] e as quatro opções de inferência; nota sobre Bedrock.
6. [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6 Padrões de arquitetura e a escolha pelo verbo]]: documentos, contact center, moderação, multilíngue e modelo próprio, com resiliência, segurança e custo, e a tabela de [[Distrator|distratores]] fora da lista ([[Kendra]], Personalize, Forecast, Fraud Detector).

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| **2.2** Projetar arquiteturas altamente disponíveis e tolerantes a falhas (serviços gerenciados com casos de uso, como [[Comprehend]] e Polly; quotas e [[Throttling\|throttling]]; serviços de propósito específico) | [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo\|24.1]], [[24.02 - Texto com Comprehend e Translate\|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa\|24.3]], [[24.04 - Visao e Documentos com Rekognition e Textract\|24.4]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo\|24.6]] |
| **3.5** Projetar soluções de ingestão e transformação de dados de alta performance (pipelines que enriquecem dados com IA, transformação de formatos) | [[24.04 - Visao e Documentos com Rekognition e Textract\|24.4]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo\|24.6]] |
| **2.1** Projetar arquiteturas escaláveis e fracamente acopladas (event-driven e [[Serverless\|serverless]] com serviços de IA) | [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo\|24.6]] |
| **3.2** e **3.3** Escolher computação e tecnologia pelo padrão de carga (modos de inferência do [[SageMaker AI]]) | [[24.05 - SageMaker AI e Modelo Proprio\|24.5]] |
| **1.2** e **1.3** Proteger cargas de trabalho e dados (endpoints de interface, redação de [[PII]], criptografia, opt-out) | [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo\|24.1]], [[24.02 - Texto com Comprehend e Translate\|24.2]], [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa\|24.3]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo\|24.6]] |
| **4.2** e **4.3** Custo de computação e de bancos (escolha entre serviço pronto e modelo próprio, [[Serverless\|serverless]] contra instância ligada) | [[24.05 - SageMaker AI e Modelo Proprio\|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo\|24.6]] |

## Checklist de saída do módulo

- [ ] Sei explicar por que, para tarefas comuns, uma API pronta tem menos [[Overhead Operacional|overhead operacional]] que treinar um modelo, e quando isso deixa de valer.
- [ ] Sei explicar por que o verbo e a entrada do requisito (texto, áudio, imagem, documento) bastam para escolher o serviço.
- [ ] Sei explicar por que existem os modos síncrono, assíncrono e [[Streaming de Dados|streaming]] e como o limite de tamanho decide entre eles.
- [ ] Sei explicar por que [[Textract]] e [[Rekognition]] não são intercambiáveis, mesmo que ambos leiam texto.
- [ ] Sei explicar por que a detecção de [[PII]] do [[Comprehend]] e o sentimento direcionado têm restrição de idioma e o que isso muda no desenho.
- [ ] Sei explicar por que o [[Call Analytics]] é a resposta quando o enunciado descreve sentimento por locutor, categorias e resumo de chamadas, e por que o [[Contact Lens]] é a resposta quando a central já roda no [[Amazon Connect]].
- [ ] Sei explicar por que um modelo do [[Rekognition Custom Labels|Custom Labels]] deve ser parado quando ocioso e como o [[SageMaker AI]] evita o custo ocioso ([[Serverless|serverless]] e assíncrona).
- [ ] Sei explicar por que um pipeline com IA precisa de fila, retentativa com backoff, [[Dead-Letter Queue|DLQ]] e [[Idempotencia|idempotência]].

## Teste-se

**1.** Uma empresa recebe contratos em inglês, em PDF de 200 páginas, no [[S3]]. Precisa extrair o texto e entregar ao time de analytics uma cópia com [[PII|dados pessoais]] mascarados, com solução [[Serverless|serverless]] e o MENOR [[Overhead Operacional|overhead operacional]]. Qual arquitetura atende?

- [ ] a) Lambda chamando DetectDocumentText síncrono com o PDF inteiro, e DetectPiiEntities em tempo real sobre todo o texto
- [ ] b) Evento do S3, Lambda com Textract assíncrono, aviso por SNS e job assíncrono de redação de PII do Comprehend
- [ ] c) Rekognition DetectText em cada página convertida em imagem, e o Macie para mascarar os dados nos objetos
- [ ] d) Uma instância EC2 com OCR de código aberto e uma biblioteca de expressões regulares para os dados pessoais

**2.** Uma central de atendimento já roda no [[Amazon Connect]] e precisa do sentimento de cliente e atendente em cada conversa, visível dentro do próprio Connect, sem montar nenhum pipeline. Qual solução atende?

- [ ] a) Exportar as gravações para o S3 e processá-las com o Transcribe Call Analytics
- [ ] b) Um bot do Lex que ouve a conversa e registra o sentimento de cada falante
- [ ] c) Uma Lambda que transcreve cada ligação e chama o Comprehend DetectSentiment
- [ ] d) O Contact Lens, a análise de conversas nativa do Amazon Connect

**3.** Uma equipe hospeda um modelo próprio no [[SageMaker AI]]. O modelo é chamado de forma esporádica, cada requisição envia um arquivo de 6 MB, a resposta pode levar até 5 minutos e a empresa não quer pagar por instâncias ociosas. Qual opção de inferência usar?

- [ ] a) Asynchronous Inference, com fila de requisições e escala a zero sem pedidos
- [ ] b) Serverless Inference, que paga só pelo uso e aceita qualquer tamanho de carga
- [ ] c) Real-time inference com uma instância mínima ligada o tempo todo
- [ ] d) Batch Transform iniciado manualmente a cada nova requisição

**4.** Uma empresa de contas a pagar recebe faturas em PDF de uma página, de 300 fornecedores com layouts diferentes, e precisa extrair fornecedor, data, itens e total com o MENOR esforço. Qual operação do [[Textract]] usar?

- [ ] a) AnalyzeDocument com FORMS e uma regra de mapeamento para cada layout de fornecedor
- [ ] b) AnalyzeDocument com Queries, uma pergunta para cada campo e cada item da fatura
- [ ] c) AnalyzeExpense, a operação feita para faturas e recibos, sem regras por layout
- [ ] d) DetectDocumentText seguido de expressões regulares mantidas para cada fornecedor

**5.** Uma empresa precisa descobrir quais dos seus 400 buckets do [[S3]] contêm números de cartão e outros [[PII|dados pessoais]], sem alterar nenhuma aplicação. Qual serviço usar?

- [ ] a) Uma Lambda que chama o Comprehend DetectPiiEntities em cada objeto de cada bucket
- [ ] b) O Macie, com jobs de descoberta de dados sensíveis nos buckets
- [ ] c) O Textract, lendo cada objeto para localizar os números de cartão
- [ ] d) O Kendra, indexando os buckets para buscar os dados pessoais

**6.** Uma aplicação em [[Sub-rede Privada|sub-rede privada]], sem [[NAT Gateway|NAT gateway]], chama o Translate e o Polly. A política de segurança exige que o tráfego não use a internet pública. Qual é a solução com o MENOR overhead?

- [ ] a) Um gateway endpoint para o Translate e outro para o Polly nas route tables
- [ ] b) Um NAT gateway com security group restrito aos endereços públicos dos serviços
- [ ] c) Uma conexão Site-to-Site VPN entre a VPC e a rede da conta que opera os serviços
- [ ] d) Um interface VPC endpoint (PrivateLink) para cada um dos dois serviços

**7.** Uma organização com 30 contas precisa garantir que o conteúdo processado por [[Comprehend]], [[Transcribe]] e [[Textract]] não seja armazenado para melhoria dos serviços, inclusive em outras [[Regiao AWS|Regiões]], com controle central. O que usar?

- [ ] a) Uma política de opt-out de serviços de IA aplicada pela management account
- [ ] b) Uma SCP que nega todas as ações desses três serviços em todas as contas
- [ ] c) Um pedido de opt-out ao suporte, conta a conta, em cada Região usada
- [ ] d) Uma chave do KMS por Região, para impedir que o serviço leia o conteúdo

**8.** Uma operadora quer um bot de voz que atenda o cliente ao vivo e, depois, analisar sentimento e categorias das gravações guardadas no [[S3]]. Quais serviços combinar?

- [ ] a) Transcribe em streaming para o bot ao vivo e Lex para analisar as gravações
- [ ] b) Polly para conduzir a conversa e Comprehend para classificar as gravações
- [ ] c) Lex para a conversa ao vivo e Transcribe Call Analytics para as gravações
- [ ] d) Lex para a conversa ao vivo e Lex também para analisar as gravações

**9.** Em horários de pico, milhares de fotos por minuto chamam DetectLabels do [[Rekognition]] e parte das chamadas volta com [[Throttling|ThrottlingException]]. O resultado pode atrasar alguns minutos. Qual é a solução com o MENOR esforço?

- [ ] a) Aumentar a memória da função Lambda que chama o Rekognition
- [ ] b) Fila SQS antes do consumo, com backoff, jitter e aumento de quota
- [ ] c) Habilitar Multi-AZ no Rekognition para dobrar a capacidade
- [ ] d) Treinar um modelo próprio de rótulos no SageMaker AI para fugir da quota

**10.** Uma [[Lambda|função Lambda]] chama TranslateDocument em tempo real com um arquivo .docx de 5 MB e a chamada é rejeitada. Qual é a explicação e a correção?

- [ ] a) O tempo real aceita até 20 MB; o erro vem da formalidade, que precisa ser desligada
- [ ] b) O .docx não é suportado em nenhum modo; converter o arquivo para PDF resolve
- [ ] c) O tempo real só aceita XLIFF; a tradução de .docx exige um endpoint dedicado
- [ ] d) O tempo real aceita 100.000 bytes; usar o job em lote, que aceita até 20 MB

**11.** Um portal de vídeos em português precisa de arquivos de legenda para cada vídeo gravado e quer que siglas técnicas da empresa sejam reconhecidas corretamente, sem treinar modelo. Qual solução atende?

- [ ] a) Transcribe em lote com geração de legendas e um custom vocabulary com as siglas
- [ ] b) Transcribe com um modelo de linguagem treinado no SageMaker AI com as siglas
- [ ] c) Translate com custom terminology aplicada ao áudio de cada vídeo
- [ ] d) Comprehend com entidades personalizadas treinadas sobre o áudio dos vídeos

**12.** Uma fábrica usa um modelo do [[Rekognition Custom Labels]] para inspecionar peças apenas durante um turno de 8 horas por dia. Qual prática reduz mais o custo?

- [ ] a) Deixar o modelo iniciado o dia todo, porque a cobrança ocorre só nas chamadas
- [ ] b) Ajustar as inference units para zero fora do turno, sem parar o modelo
- [ ] c) Iniciar o modelo no começo do turno e pará-lo ao final (StopProjectVersion)
- [ ] d) Trocar por DetectLabels padrão, que reconhece qualquer peça da fábrica

**13.** Um fluxo precisa extrair texto de PDFs longos com o [[Textract]], depois extrair entidades com o [[Comprehend]], mandar para aprovação humana os itens com confiança baixa e tentar de novo as chamadas que falharem, com o MENOR código. Qual [[Orquestracao|orquestração]] usar?

- [ ] a) Funções Lambda encadeadas apenas por eventos do S3, sem estado nem retentativa
- [ ] b) Uma única Lambda com um laço que espera cada etapa terminar e repete as falhas
- [ ] c) Uma instância EC2 com cron que executa cada etapa em sequência
- [ ] d) Step Functions com Retry e Catch, integrações e etapa de revisão humana

**14.** Uma conta nova, criada em 2026, quer analisar vídeo ao vivo de câmeras com o [[Rekognition]]. A AWS informa que [[Streaming de Dados|Streaming]] Video não está mais disponível para novos clientes. Qual é a alternativa documentada?

- [ ] a) Criar mesmo assim um stream processor e pedir exceção ao suporte
- [ ] b) Extrair quadros do fluxo e chamar a API de imagem do Rekognition por quadro
- [ ] c) Enviar os quadros ao Textract, que detecta objetos em fluxos de vídeo
- [ ] d) Chamar StartContentModeration diretamente sobre o fluxo ao vivo

**15.** (Escolha DUAS.) Quais cenários são resolvidos com um serviço de IA gerenciado pronto, sem treinar modelo?

- [ ] a) Prever o cancelamento de clientes com 40 colunas de dados próprios
- [ ] b) Mascarar dados pessoais em um acervo de texto em inglês guardado no S3
- [ ] c) Executar um algoritmo próprio de otimização de rotas de entrega
- [ ] d) Treinar do zero um modelo de linguagem com documentos internos
- [ ] e) Extrair fornecedor e total de recibos fotografados por funcionários

**16.** (Escolha DUAS.) Quais afirmações sobre limites dos serviços estão corretas?

- [ ] a) O Textract assíncrono aceita PDFs de até 3.000 páginas
- [ ] b) O Textract síncrono aceita PDFs de até 500 MB
- [ ] c) No job assíncrono do Comprehend, o sentimento continua limitado a 5 KB por documento
- [ ] d) O Polly SynthesizeSpeech síncrono aceita 100.000 caracteres cobrados
- [ ] e) A tradução em tempo real do Translate aceita documentos de até 20 MB

> [!success]- Gabarito
> **1. b)** é o padrão [[Serverless|serverless]] de documentos: o [[Textract]] assíncrono dá conta de 200 páginas e o [[Comprehend]] redige [[PII]] em inglês por job assíncrono; a) o síncrono aceita uma página e o PII em tempo real tem limite de 100 KB; c) o [[Rekognition]] não é para documentos e o [[Macie]] descobre dados, não os mascara; d) [[EC2]] com [[OCR]] e regex é o máximo de overhead.
> **2. d)** o [[Contact Lens]] é a análise nativa do Connect, sem pipeline; a) funciona, mas exige exportar e montar o processamento fora do Connect; b) o Lex conduz diálogos e não analisa conversas; c) obriga a montar e operar o que o Contact Lens já entrega.
> **3. a)** a assíncrona aceita até 1 GB e 1 hora, enfileira e escala a zero; b) o [[Serverless|serverless]] aceita só 4 MB, então 6 MB não cabe; c) a instância mínima ligada paga ociosidade; d) o Batch Transform é um job sem endpoint, não atende requisições esporádicas.
> **4. c)** o AnalyzeExpense é feito para faturas e recibos, independente de layout; a) o FORMS exigiria mapeamento por fornecedor; b) as Queries funcionam, mas dão mais trabalho que a operação nativa de faturas; d) texto bruto mais regex é o trabalho que se quer evitar.
> **5. b)** o [[Macie]] descobre dados sensíveis em objetos do [[S3]]; a) funciona em tese, mas obriga a construir e operar a varredura; c) o [[Textract]] lê documentos, não faz inventário de buckets; d) o [[Kendra]] é busca corporativa e está fora do escopo.
> **6. d)** o [[Interface Endpoint|interface endpoint]] mantém o tráfego na rede da Amazon, e ambos os serviços o oferecem; a) o [[Gateway Endpoint|gateway endpoint]] só existe para [[S3]] e [[DynamoDB]]; b) o [[NAT Gateway|NAT gateway]] envia o tráfego pela internet pública; c) não há VPN com a conta que opera o serviço.
> **7. a)** a política de opt-out do Organizations é central, vale em todas as [[Regiao AWS|Regiões]] e apaga o conteúdo histórico usado para melhoria; b) a [[SCP]] bloquearia o uso do serviço, não o uso do conteúdo; c) o opt-out não é feito por Região nem por suporte; d) o [[KMS]] cifra [[Criptografia em Repouso|dados em repouso]] e não controla essa política.
> **8. c)** o Lex conduz a conversa ao vivo e o [[Call Analytics]] analisa gravações; a) inverte os papéis dos serviços; b) o Polly só fala e não conduz diálogo; d) o Lex não analisa gravações.
> **9. b)** a fila suaviza o pico, o backoff trata o [[Throttling|throttling]] e a quota pode ser ampliada; a) mais memória não reduz as chamadas; c) o [[Rekognition]] já é regional e gerenciado, sem opção [[Multi-AZ]]; d) treinar modelo próprio é overhead desnecessário.
> **10. d)** o tempo real aceita 100.000 bytes por documento e o [[Processamento em Lote|lote]] aceita até 20 MB; a) os 20 MB são do lote, e a formalidade não causa a rejeição; b) o .docx é suportado em tempo real e em lote; c) o tempo real aceita .txt, .html e .docx, sem endpoint dedicado.
> **11. a)** o job em [[Processamento em Lote|lote]] do [[Transcribe]] gera legendas e o [[Custom Vocabulary|custom vocabulary]] corrige as siglas sem treino; b) o modelo de linguagem personalizado exige treino e cobrança adicional sem necessidade; c) o Translate trata texto, não áudio; d) o [[Comprehend]] não processa áudio.
> **12. c)** o modelo cobra por hora de execução e inference unit enquanto estiver iniciado, então parar fora do turno corta o custo; a) a cobrança continua com o modelo ocioso; b) as inference units mínimas continuam cobradas enquanto o modelo está iniciado; d) o DetectLabels padrão não reconhece peças próprias.
> **13. d)** o [[Step Functions]] dá Retry, Catch, integrações e etapas de aprovação com pouco código; a) eventos soltos não têm estado nem retentativa; b) o laço bloqueia a função e quebra no [[Timeout|timeout]]; c) o cron em [[EC2]] traz overhead e [[Ponto Unico de Falha|ponto único de falha]].
> **14. b)** a AWS documenta extrair quadros e chamar a API de imagem; a) o recurso está fechado a novos clientes; c) o [[Textract]] lê documentos, não detecta objetos em vídeo; d) StartContentModeration é para vídeo armazenado no [[S3]].
> **15. b) e e)** a redação de [[PII]] do [[Comprehend]] (inglês) e o AnalyzeExpense do [[Textract]] são serviços prontos; a) previsão com dados próprios, c) algoritmo próprio e d) treino do zero são [[SageMaker AI]].
> **16. a) e c)** o assíncrono do [[Textract]] chega a 3.000 páginas, e no [[Comprehend]] o sentimento segue em 5 KB por documento também nos jobs; b) 500 MB é o limite assíncrono, o síncrono é 1 página e 10 MB; d) o síncrono do Polly é 3.000 caracteres cobrados; e) o tempo real do Translate aceita 100.000 bytes, e 20 MB é do [[Processamento em Lote|lote]].

## Próximo módulo

[[25 - Otimizacao de Custos|Próximo módulo: Otimização de Custos]]
