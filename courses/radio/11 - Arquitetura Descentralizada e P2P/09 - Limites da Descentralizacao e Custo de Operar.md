# Aula 9: Limites reais da descentralização e custo de operar a própria rede

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que a descentralização não resolve (spam, descoberta, moderação, experiência de uso, escala, sustentabilidade), quanto custa operar a própria infraestrutura, e o que uma rede privada de família ou comunidade pode realisticamente ser?*

Até aqui o módulo defendeu o **porquê** de uma rede própria. Esta aula é o contrapeso: cada arquitetura resolve alguns problemas e cria outros, e o desenvolvedor que decide sem ver os custos vai abandonar a rede em seis meses. Nenhum ponto abaixo invalida a ideia; todos definem o que se deve **prometer** à família.

## Limite 1: spam e ataques de identidade falsa

Se a identidade é uma chave (Aula 5), **criar uma identidade custa zero**. Um atacante gera um milhão de pares de chaves em segundos e inunda a rede: é o **ataque Sybil** (muitas identidades falsas). Em um serviço centralizado, o operador impõe atrito (verificar telefone, captcha, cobrar, banir por IP). Sem operador, o atrito precisa vir de outro lugar:

| Mecanismo | Como funciona | Exemplo |
|---|---|---|
| **Convites / lista de permissão** | Só quem foi convidado ou é contato entra | SSB (convites para "pubs"); Briar (só contatos, adicionados em pessoa) |
| **Prova de trabalho** | Cada anúncio custa CPU | O Reticulum usa prova de trabalho no announce de descoberta (Módulo 10, Aula 8) |
| **Limites de taxa** | O nó recusa quem passa de um teto | Teto de 2% de banda para announces no Reticulum |
| **Chave de acesso à rede** | Só quem tem a senha da rede vê o tráfego | IFAC do Reticulum (Módulo 10, Aula 5) |
| **Grafo de confiança** | Aceita quem os seus contatos aceitam | Teia de confiança |
| **Dinheiro** | Custa pagar para participar | Alguns relays e serviços |

Em rádio, o spam de identidade é **spam de espectro**: cada pacote ocupa tempo de ar que é raro (Módulo 9, Aula 3). Uma rede aberta a desconhecidos em LoRa satura com poucas dezenas de nós ativos. **Para uma rede privada, a defesa mais forte é a mais simples: rede fechada**, com senha, e sem anunciar para o mundo.

## Limite 2: descoberta

**Como eu acho alguém sem um diretório central?** Sem DNS e sem servidor de contatos, a resposta é: você **troca o endereço por outro canal**. Em uma família, é fácil (entregar o hash em papel ou QR, Aula 10). Em uma comunidade de estranhos, é o problema em aberto: a busca global em redes descentralizadas é cara e incompleta (a DHT resolve isso na internet, mas mal no rádio, Aula 6). O próprio Reticulum lista "DNS distribuído" como **ainda não implementado** (Módulo 10, Aula 9). Redes sociais federadas resolvem com um servidor-lar e um endereço `@alguém@servidor`, o que reintroduz um pouco de centro.

Regra de projeto: **rede pequena não precisa de descoberta global.** Preciso de uma lista de 6 a 30 contatos que conheço.

## Limite 3: moderação e abuso

Sem operador, ninguém pode banir. As soluções vivem em camadas: **do usuário** (bloqueio e silenciamento local), **do servidor** (cada instância federada tem regras e administradores, como no Matrix e no Mastodon), e **de terceiros** (o AT Protocol tem "rotuladores" independentes; o texto oficial defende separar "fala" de "alcance": a camada base é permissiva, e a camada de indexação, competitiva, decide o que amplificar). O que nenhuma resolve bem é conteúdo ilegal em uma rede em que ninguém é responsável. **Numa rede privada e fechada, o problema quase desaparece**, porque o operador é você e os membros são conhecidos. A responsabilidade legal por o que você transmite (Módulo 5, Aula 6; Módulo 10, Aula 8) continua sendo sua.

## Limite 4: experiência de uso e chaves

A conveniência dos serviços centralizados vem de coisas que o operador faz por você. Em uma rede descentralizada, você as faz:

- **Recuperação de conta**: perdeu a chave, perdeu a identidade (Aula 5). É preciso backup cifrado da identidade.
- **Vários aparelhos**: sincronizar identidade e histórico entre celular e computador é difícil sem servidor. A documentação do Session lista "gerenciamento mais seguro de contas em vários dispositivos" entre os itens em desenvolvimento da versão 2 do protocolo, sinal de que o problema é real.
- **Notificações**: no celular, notificações imediatas costumam passar por infraestrutura do fabricante do sistema (do conhecimento geral; não conferi). Aplicativos sem essa dependência gastam mais bateria ou avisam com atraso.
- **Convidar pessoas**: cada pessoa nova precisa instalar, entender chaves e verificar contato.
- **Suporte**: não existe "central de ajuda". Você é o suporte.

## Limite 5: escala e capacidade

Cada arquitetura tem um teto próprio:

| Arquitetura | O que limita a escala |
|---|---|
| Inundação (mesh simples) | Cada mensagem é repetida por todos: o custo cresce com a rede (Módulo 9, Aulas 2 e 3) |
| DHT | Escala bem (logarítmica), mas exige internet, UDP e muitos pares estáveis |
| Rádio LoRa | Banda de poucos kbit/s e regras de uso do espectro: satura com dezenas de nós ativos |
| Federação | Servidores grandes concentram usuários (Aula 2) |

O que muda para o seu caso: **uma rede pessoal não precisa de escala**. Uma rede de 6 pessoas com 240 mensagens por dia usa uma fração minúscula de qualquer enlace (a Aula 10 calcula). O limite que importa é a **banda por mensagem**: LoRa serve para texto curto, localização e arquivos pequenos, não para voz nem vídeo.

## Limite 6: segurança sem quem cuide dela

Software P2P e descentralizado tem, tipicamente, menos revisão e menos pessoas por trás. Os casos deste módulo mostram:

- **Reticulum**: mantenedor essencialmente único, política de "espelho" sem suporte público, sem auditoria externa (Módulo 10, Aula 9).
- **Yggdrasil**: o projeto se descreve como experimental, "de nível alfa" (Aula 7).
- **Session**: a fundação **pausou o desenvolvimento** por restrições financeiras em 2026, e retomou após uma campanha de doações, "de alguma forma" (comunicado do projeto, 15 de junho de 2026). O comunicado afirma que a rede descentralizada pode continuar sem a fundação, mas que, sem os fundos, o suporte ao Session acabaria: sem atualizações, aplicativos removidos das lojas e parte da infraestrutura desligada.
- **Delta Chat**: uma análise acadêmica de 2024 achou cinco ataques novos (corrigidos pelo projeto) e apontou que o aplicativo não oferece sigilo futuro.

A lição não é "evite"; é **avalie a sustentabilidade** como você avaliaria uma dependência de software: quantos mantenedores, quem financia, quão fácil é migrar, se o protocolo é aberto o bastante para haver outra implementação (o protocolo do Reticulum está em domínio público, o que permite reimplementações; Módulo 10, Aula 9).

## O custo de operar a própria infraestrutura

Quando você opera a rede, os custos que o operador centralizado absorve vêm para você. Os itens, com ordens de grandeza que **são estimativas do autor para a discussão, não pesquisa**; refaça as contas para o seu caso:

| Categoria | O que é | Ordem de grandeza (estimativa) |
|---|---|---|
| **Hardware** | Rádios, computadores pequenos, antenas, mastro, cabos, baterias | Um nó completo do Reticulum: o manual estima cerca de US$ 100 (Módulo 10, Aula 6); placas LoRa de US$ 16 a 35 (Módulo 8, Aula 3, setembro de 2026). Sem frete, impostos nem homologação |
| **Energia** | Consumo contínuo e autonomia em queda de energia | Poucos watts por nó; bateria de 12 V para dezenas de horas (Aula 10) |
| **Regulamentação** | Homologação de equipamento; licença se for radioamador | Confira Anatel (Módulo 5) |
| **Tempo de instalação** | Antena, mastro, ajustes, testes | Uma ou duas tardes por ponto |
| **Manutenção recorrente** | Atualizar software, testar, trocar peças, verificar antena depois de tempestade | Minutos por mês, se automatizado e documentado; horas quando algo quebra |
| **Segurança física** | Trabalho em altura, descarga atmosférica, eletricidade | Risco real (Módulo 4, Aula 6). Não faça sozinho |
| **Risco de pessoa única** | Só você sabe operar | Documente: "fator ônibus" igual a 1 |

Uma regra de bolso: **o custo dominante é o seu tempo, não o hardware**. Um serviço gerenciado de mensagens custa zero e tem dezenas de engenheiros. A sua rede tem 1 pessoa, 1 hora por mês e uma família que espera que funcione na emergência. Se você não vai testar a rede uma vez por mês, ela não funcionará quando precisar. Essa é a decisão honesta: **valor de soberania e continuidade versus tempo de manutenção**.

## Quando centralizado é a resposta certa

Rede própria não é para tudo. A tabela ajuda a repartir:

| Necessidade | Melhor escolha | Por quê |
|---|---|---|
| Falar todo dia com a família estendida e amigos | **Mensageiro convencional** (por exemplo, Signal, cifrado de ponta a ponta) | Todos já usam; banda alta; voz e vídeo; sem manutenção |
| Videochamada, fotos grandes, streaming | **Internet comum** | LoRa não suporta |
| Continuar comunicando quando internet e celular caem | **Rede própria** (LoRa, mesh, Reticulum) | É exatamente o caso de uso (Aula 4) |
| Comunicação local que não passa por empresa | **Rede própria** | Soberania e privacidade de metadados |
| Comunicar com estranhos e o público | Internet, plataformas ou federação | Efeito de rede, descoberta |
| Emergência coordenada com Defesa Civil | **Radioamador** (aberto) e canais oficiais | Integração institucional (Aula 4) |

## O que uma rede privada de família ou comunidade pode ser, realisticamente

Com o que os módulos 8 a 10 ensinaram, dá para descrever um sistema **honesto e alcançável**:

**O que ele é.** Uma rede local com **LoRa como enlace de longo alcance** entre os pontos (casa, sítio, vizinhos), **Reticulum** como pilha de rede (endereço por chave, cifra embutida, roteamento sem servidor, armazenar e encaminhar), com **Wi-Fi ou Ethernet dentro de cada casa** para o tráfego rápido, e **serviços locais** rodando em um computador pequeno: mensagens (LXMF via Sideband ou MeshChat), páginas de aviso e checklists (NomadNet), envio de arquivos (`rncp`), talvez posição e telemetria (Módulo 10, Aulas 6 e 7). Um **gateway** para a internet, se você quiser, entre a rede local e a rede de fora, com a regra do Módulo 10, Aula 5.

**O que ele entrega.** Texto curto, localização, arquivos pequenos e páginas simples, entre pessoas conhecidas, a uma distância de alguns quilômetros por salto, **sem operadora, sem energia da rede** (com bateria) e **sem depender de empresa**, com conteúdo cifrado (sob o regime legal correto: radiação restrita, não a faixa de radioamador; Módulo 10, Aula 8).

**O que ele não entrega.** Voz e vídeo em tempo real sobre LoRa; navegar na internet; abrigar dezenas de pessoas; anonimato forte; suporte técnico de terceiros; e a certeza de uma rede que o mercado testou. Dependência de um projeto de mantenedor único: mitigada por versões fixadas, cópias do software e conhecimento do protocolo (Módulo 10, Aula 9).

**Como se comporta com o resto do mundo.** Convive com o mensageiro convencional. O desenho da Aula 10 usa **camadas**: o dia a dia continua na internet; a rede privada é o "plano B" e o canal soberano.

## Resumo

- **Spam e Sybil**: identidade por chave custa zero; defesas são convite, prova de trabalho, limites de taxa, chave de rede e rede fechada. Em LoRa, spam é spam de espectro; uma rede privada fechada é a defesa mais simples.
- **Descoberta**: sem diretório central, troca-se o endereço fora de banda; rede pequena não precisa de busca global. **Moderação**: em rede fechada, é sua; em rede aberta, é camada do usuário, do servidor e de terceiros.
- **Uso**: recuperação de conta, vários aparelhos, notificações, convites e suporte viram tarefas suas.
- **Escala**: o teto muda por arquitetura (inundação, DHT, LoRa); uma rede de família não precisa de escala, mas de banda por mensagem (texto sim, voz e vídeo não sobre LoRa).
- **Sustentabilidade**: avalie mantenedores e financiamento (Reticulum de mantenedor único, Yggdrasil alfa, Session em pausa por falta de fundos em 2026).
- **Custo dominante é o seu tempo**. Rede própria é para continuidade e soberania, e convive com o mensageiro convencional para o cotidiano.

## Para aprofundar

- [ ] [The Future of Session](https://getsession.org/the-future-of-session) (Session Technology Foundation, 15 de junho de 2026): comunicado sobre a pausa por restrições financeiras e a retomada; leitura objetiva sobre risco de sustentabilidade em projetos descentralizados.
- [ ] [Bluesky and the AT Protocol: Usable Decentralized Social Media](https://arxiv.org/abs/2402.03239) (arXiv, 2024): descreve a tensão entre descentralizar e oferecer uma experiência de uso comparável à dos serviços centralizados, e como moderação e escolha de provedores foram desenhadas.
- [ ] [Módulo 10, Aula 9: Comparação, maturidade e riscos](../10%20-%20Reticulum/09%20-%20Comparacao%20Maturidade%20e%20Riscos.md): a análise de sustentabilidade do Reticulum em setembro de 2026, com os números.

[Próxima aula: Desenhando a sua rede privada](./10%20-%20Desenhando%20a%20Sua%20Rede%20Privada.md)
