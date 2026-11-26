[Voltar ao módulo](./README.md)

# Aula 5: Radioamador é público e aberto (o que pode e o que não pode transmitir)

*Pergunta que esta aula responde: por que o serviço de radioamador não pode ser usado como canal privado, criptografado ou comercial, e quais limites de conteúdo isso impõe, inclusive aos modos digitais?*

> Verificado em setembro de 2026 em: Resolução Anatel nº 777/2025 (RGST), Ato nº 3448/2026 e Ato nº 926/2024. Onde não consegui confirmar o texto vigente de uma proibição, digo explicitamente. **Esta aula não substitui a leitura dos atos; confirme antes de montar qualquer sistema que transmita.**

## O princípio: o serviço amador é autopoliciado e transparente

Na Aula 1 você viu que o serviço amador recebe faixas e liberdade técnica em troca de responsabilidade. Como a Anatel não pode escutar todas as frequências o tempo todo, o sistema depende de uma condição: **qualquer pessoa, inclusive outros radioamadores e o fiscal, precisa poder ouvir e entender o que está sendo transmitido**. Se o conteúdo puder ser escondido, o serviço deixa de ser fiscalizável pelos próprios pares.

Traduzindo para o seu mundo: o serviço amador é uma **rede pública, aberta e auditável por qualquer participante**, e não uma VPN. Toda emissão é, por desenho, um broadcast que qualquer receptor no alcance ouve. **Não existe expectativa de privacidade em radioamador**, e isso é uma característica do serviço, não uma falha.

## O que o texto oficial proíbe ou limita

Reunião dos dispositivos que li, com a origem de cada um:

| Regra | Onde está | Tradução prática |
|---|---|---|
| Sem objetivo **pecuniário ou comercial**, só a título pessoal | RGST (Res. 777/2025), art. 26 | Nada de vender, prestar serviço remunerado, operar para uma empresa |
| **Vedado desvirtuar a natureza do serviço** e usar palavras **obscenas e ofensivas** | Ato 3448, item 4.1 | Linguagem ofensiva ou uso do serviço para fim estranho às suas finalidades |
| **Não é permitida a criptografia** nas aplicações de **Modos Digitais e Voz Digital** | Ato 926, item 6.11 | Nenhum payload cifrado em digital ou voz digital |
| Repetidoras devem ser **abertas a todos os radioamadores** e o acesso **não pode ser codificado com a finalidade de restringir** a comunicação (exceção: telecomando de satélite) | Ato 3448, item 10.5.5 | Nada de "repetidora privada só para o meu grupo" nem de rede fechada |
| Estação com conexões a outras redes de telecomunicações: **vedado usá-la para fruição de tráfego entre redes desses serviços**, exceto emergência | Res. 777/2025, art. 10-B, § 2º do Regulamento de Licenciamento | Um gateway amador não pode ser ponte comercial entre redes; internet, telefone e rede privada não podem usar a estação como trânsito |
| **Comunicado internacional de terceira parte** (mensagem de terceiros para outro país) proibido, exceto emergência, desastre ou acordo de reciprocidade | Ato 3448, item 4.3 | Não repasse mensagens de terceiros ao exterior |
| Uso por terceiro sem COER só sob **supervisão** do responsável com COER | Ato 3448, item 4.2 | Um amigo sem licença só fala pelo seu rádio com você ao lado, sob seu controle |
| **Vedada a operação sem identificação** | Ato 3448, item 10.2 | Indicativo obrigatório (Aula 4) |
| **Espalhamento espectral e salto em frequência** proibidos abaixo de 440 MHz | Ato 926, item 6.12 | Ver Aula 6 e Módulo 8 |
| Transmissão simultânea em mais de uma banda só em casos listados (boletim de associação, emergência, complemento de transmissão inclusive repetidoras e experimentos, competições internacionais) | Ato 3448, item 10.1 | Nada de espelhar a mesma emissão em várias bandas por conveniência |

### Música, política e entretenimento: o que eu consegui confirmar

Um regulamento antigo do serviço (Decreto 74.810/1974, cujo status atual de vigência **não confirmei**) vedava ao radioamador comentar assunto de natureza comercial, política, religiosa ou racial; usar códigos ou linguagem cifrada (ressalvado o código Q); manter comunicação de interesse de terceiros; e **transmitir discurso, música ou qualquer outra forma de diversão para o público**. Nos atos que li em setembro de 2026 as proibições explícitas são as da tabela acima. Duas conclusões honestas:

1. **Não afirmo que "música" ou "política" estejam hoje literalmente proibidas nos atos vigentes**, porque não as encontrei lá. O que encontrei é a regra de **não desvirtuar a natureza do serviço**, que tem cláusula geral suficiente para enquadrar retransmitir música, fazer propaganda ou operar como estação de entretenimento.
2. **Na prática e na cultura do serviço**, não se transmite música ou programas para o público, não se faz política partidária nem propaganda. O serviço existe para comunicação entre amadores.

Se você planeja algo que possa ser lido como entretenimento (por exemplo, retransmitir uma web-rádio), confirme com a Anatel antes.

## Criptografia: o que exatamente está proibido

O Ato 926, item 6.11, diz que **não é permitida a criptografia nas aplicações de Modos Digitais e Voz Digital**. O texto literal não traz a condição "com a finalidade de obscurecer o significado", o que torna a leitura mais rigorosa que a de outros países. O item 10.5.5 sobre repetidoras usa a redação "acesso codificado com a finalidade de restringir a comunicação". Em termos de projeto, pense assim:

**Criptografia (proibida em digital e voz digital):** transformar o conteúdo de modo que só quem tem a chave o entenda (AES, ChaCha20, RSA etc.). Isso serve para segredo, e segredo é exatamente o que o serviço não admite.

**O que não é o mesmo que criptografia (mas confirme caso a caso):**

- **Compressão** de dados ou de áudio (por exemplo, codecs de voz), desde que o algoritmo seja **público e qualquer pessoa possa decodificar**. Não oculta o significado: quem tem o software decodifica.
- **Correção de erro** (FEC) e **codificação de canal**: aumenta a robustez, não esconde o conteúdo.
- **Cabeçalhos e protocolos** documentados publicamente.
- **Assinatura digital** que apenas comprova a origem sem cifrar o conteúdo (o texto continua legível): conceitualmente não é criptografia do conteúdo, mas **não encontrei nos atos uma frase que a autorize ou proíba**. Se a sua arquitetura usa assinaturas ou hashes de autenticação, confirme com a Anatel.
- **Autenticação de acesso a um repetidor por código DTMF**: o Ato 3448 (10.5.5) veda acesso codificado para restringir, então essa é exatamente a fronteira. Repetidoras "fechadas" por senha contrariam o texto.

**Uma exceção prevista no próprio Ato:** o telecomando (uplink) entre a estação terrestre e uma estação espacial pode ser codificado (10.5.5), porque a UIT permite proteger o comando de satélite contra apropriação. É a única exceção que li.

**Voz digital e codec proprietário.** Modos DV como DMR, D-STAR e Fusion usam vocoders proprietários (a família AMBE). O Ato 926 define "Voz Digital" como um modo de emissão (Tabela XL) e o autoriza em segmentos indicados; o debate sobre o codec ser fechado existe na comunidade, mas eu **não encontrei nos atos uma proibição de DV por causa do codec**. O que o texto proíbe é a **criptografia** na voz digital, por exemplo as opções de "privacy" ou "encryption" que os rádios DMR trazem de fábrica. Deixe desligadas.

**Regra prática de desenho:** se um terceiro com um receptor comum, uma cópia gratuita do software e o indicativo do transmissor **não conseguir ler o conteúdo**, você está fora do serviço amador.

## "Mas subtom (CTCSS) não dá privacidade?"

Não. O CTCSS (subtom, Aula 7) é um tom de baixíssima frequência que abre o silenciador do receptor. Não embaralha nada: qualquer rádio sem o filtro de tom ouve tudo. Uma boa referência em português (CRAM) o resume assim: **"subtom não é scrambler"**. É filtro de recepção e de acesso à repetidora, não segurança.

## O que PODE, com clareza

Dentro das faixas e modos da sua classe e identificando-se:

- Conversar com outros radioamadores sobre **assunto pessoal, técnico, social e de treinamento**, em linguagem clara e educada.
- **Experimentar**: construir e modificar equipamentos e antenas, testar modos digitais, redes de pacotes, enlaces ponto a ponto, mesh e afins, **desde que abertos, identificados e sem criptografia**.
- Participar de **concursos (contests)**, procurar DX, trocar cartões QSL.
- Usar **repetidoras** e satélites nas regras deles.
- **Emergência**: em emergência e calamidade, as regras de tempo, banda simultânea, terceira parte e tráfego entre redes têm exceções e a comunicação de emergência é prioritária (Aula 9).
- **Rede de estações interligadas de radioamadores**, abertas a todos os radioamadores (respeitadas as classes), identificadas e sem criptografia.

## O que NÃO PODE, com clareza

- **Criptografar** ou cifrar conteúdo em modo digital ou voz digital.
- **Transmitir sem identificação** ou com identificação incompleta.
- **Fins comerciais ou pecuniários**: vender produtos, cobrar por comunicação, dar suporte a empresa, servir de canal de trabalho.
- **Linguagem obscena ou ofensiva.**
- **Rede privada/fechada de acesso restrito**: repetidora ou rede com acesso codificado para excluir outros radioamadores.
- **Usar a estação como ponte de tráfego entre redes de outros serviços** (exceto emergência).
- **Comunicado internacional de terceiros**, salvo emergência ou acordo de reciprocidade.
- **Operar fora da sua classe, banda, modo ou potência** (Aula 3).
- **Espalhamento espectral ou salto em frequência abaixo de 440 MHz.**

## O que isso significa para a ideia de rede privada

Seu objetivo final é montar uma rede de comunicação privada. **Radioamador não é esse serviço.** Uma rede de radioamador é, por definição legal e por desenho, pública: qualquer radioamador pode participar, o tráfego não pode ser cifrado e não pode ser comercial. Isso não impede você de aprender a tecnologia sob licença de radioamador (Módulos 6 a 10 têm muito a ensinar e você pode praticar os protocolos em modo aberto), mas **a rede privada, com conteúdo secreto, precisa rodar em outro regime legal**.

A Aula 6 mostra qual: o regime de **radiação restrita** (equipamentos certificados em faixas de uso livre, como 915 MHz, onde LoRa opera), e o **Rádio do Cidadão** (27 MHz). Cada um tem seu conjunto de limites.

## Resumo

- Radioamador é serviço **público, aberto e autopoliciado**: o conteúdo precisa ser legível por qualquer receptor. Não existe privacidade no ar amador, e não é para haver.
- Proibições que li nos atos vigentes: fim pecuniário ou comercial (RGST art. 26), linguagem obscena e desvirtuar a natureza do serviço (Ato 3448 4.1), **criptografia em digital e voz digital (Ato 926 6.11)**, **acesso codificado a repetidoras e redes para restringir (Ato 3448 10.5.5)**, tráfego entre redes via estação amadora (Res. 777), comunicado internacional de terceiros, spread spectrum abaixo de 440 MHz.
- Música, política e propaganda: proibições antigas existem (decreto de 1974, vigência não confirmada) e a cláusula "não desvirtuar o serviço" as cobre de forma geral; evite.
- Compressão, correção de erro e protocolos documentados **não escondem o significado**; cifrar, sim. Assinaturas de autenticação: confirmar com a Anatel.
- **Rede privada não é radioamador.** Alternativas legais: radiação restrita (ISM) e Rádio do Cidadão, na próxima aula.

## Para aprofundar

- [ ] [Ato nº 926/2024, itens 6.11 e 6.12](https://informacoes.anatel.gov.br/legislacao/component/content/article/165-atos-de-requisitos-tecnicos-de-gestao-do-espectro/2024/1919-ato-926) (Anatel): o texto sobre criptografia e espalhamento espectral.
- [ ] [Ato nº 3448/2026, itens 4 e 10](https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-operacionais-de-outorga-e-licenciamento/2148-ato-3448-26) (Anatel): regras gerais de operação, terceiros e repetidoras.
- [ ] [Encryption and Amateur Radio](https://rsaxvc.net/blog/2014/2/1/Encryption_and_Amateur_Radio.html) (rsaxvc, artigo do README anterior deste módulo): explica o princípio, embora baseado na regra dos EUA (FCC Parte 97), que **não é a regra brasileira**. Útil pelo raciocínio, não como fonte normativa.
- [ ] [Como funciona o CTCSS ou Subtom](https://www.cram.org.br/wordpress/?p=1538) (CRAM, PY2JF): explica em português por que o subtom não é privacidade.

[Próxima aula: Rede privada legal: PX e radiação restrita (LoRa/ISM)](./06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md)
