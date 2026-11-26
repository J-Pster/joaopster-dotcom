# Aula 10: Desenhando a sua rede privada

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: dado um caso real (quem precisa falar com quem, onde, contra que ameaças, com que dinheiro), qual é a sequência de decisões que leva de requisitos a uma rede que dá para montar e manter, e como fica isso em números para uma família em dois pontos a 8 km com cobertura em uma cidade?*

O erro típico de quem sai deste curso empolgado é comprar rádios e só depois perguntar o que queria. Um projeto de rede começa pelas **perguntas**, não pelo hardware. Esta aula dá o método em oito passos, cada um ligado ao módulo que o ensina, e termina em um exemplo resolvido com contas.

**Aviso.** Este método é de **planejamento**. Transmitir em radiofrequência no Brasil exige respeitar a regulamentação da Anatel conforme a faixa e o regime, usar equipamento homologado quando aplicável, e há riscos de RF e de eletricidade em antenas e mastros (Módulo 5, Aulas 5, 6 e 9; Módulo 4, Aula 6). Instalações em altura devem ser feitas com profissional habilitado. Nada aqui é assessoria jurídica; os números de potência e de antena do exemplo são **ilustrativos**, e o que vale é o que o certificado do seu produto e o Ato vigente da Anatel dizem (Módulo 8, Aula 4).

## Os oito passos

### Passo 1: Requisitos (o que a rede precisa fazer)

Escreva, em frases curtas:

- **Quem** fala com quem (número de pessoas e de pontos fixos; quem se move).
- **O quê** trafega e em que volume: texto curto (dezenas de bytes), localização, arquivos pequenos, voz, vídeo. Anote **mensagens por dia** e **tamanho**.
- **Onde**: mapa dos pontos, distâncias, obstáculos.
- **Quando**: uso diário, só em emergência, ou ambos. **Quanto tempo de autonomia** sem energia da rede (por exemplo, 48 horas).
- **Latência tolerável**: segundos, minutos ou horas (Aula 8).
- **Manutenção aceitável**: quantas horas por mês você realmente dedica.

Sem números não há projeto: a taxa de LoRa é de kbit/s, e um requisito de "mandar fotos" muda tudo.

### Passo 2: Modelo de ameaça (Aula 5; Módulo 9, Aula 9; Módulo 10, Aula 8)

Liste ativos (o que proteger), adversários (curioso, provedor, plataforma, estado), capacidades e o que aceita deixar visível (metadados de rádio, por exemplo). Decida se precisa **cifrar** (sim, quase sempre, o que define o regime legal do passo 7) e **como verificar identidades** (em pessoa, Aula 5).

### Passo 3: Meios físicos disponíveis

| Meio | Alcance típico | Banda | Depende de terceiros? | Onde aprender |
|---|---|---|---|---|
| **LoRa 915 MHz** | Quilômetros por salto | kbit/s | Não (só você e a lei do espectro) | Módulo 8 |
| **Wi-Fi/Ethernet local** | Dentro de casa e vizinhança próxima | Mbit/s | Não (rede local) | Módulo 12 |
| **Internet (fibra, 4G)** | Global | Mbit/s | Sim: provedor, energia, retorno | Aulas 2 e 4 |
| **Bluetooth** | Metros | Centenas de kbit/s | Não | Aula 7 (Briar) |
| **HF/VHF/UHF de radioamador** | De quilômetros a continentes | Baixa | Não, mas conteúdo aberto e sem cifra | Módulos 5 e 7 |
| **Sneakernet** | Onde o carro chegar | Muito alta, com latência | Não | Aula 8 |

Escolha **meios com modos de falha independentes** (Aula 4): fibra e 4G da mesma operadora não são redundantes entre si; fibra e LoRa com bateria são.

### Passo 4: Orçamento de enlace (Módulo 2, Aula 8; Módulo 8, Aula 8)

Para cada enlace: potência de transmissão, ganhos das antenas, perdas de cabo e conectores, perda de percurso (que depende do ambiente), sensibilidade do SF escolhido, e **margem de desvanecimento** (o curso recomendou 15 dB). Confira a **linha de visada e a zona de Fresnel** (Módulo 2, Aula 3) e o horizonte.

### Passo 5: Topologia

Decida quantos nós, onde, e quais papéis (Módulo 9, Aula 8):

- **Estrela** (um nó central com os outros ao redor): simples; o nó central é ponto único de falha.
- **Malha** (vários caminhos): mais resiliente; custa mais e satura mais rápido (Módulo 9, Aula 3).
- **Multi-salto com repetidores**: alcança mais; cada salto custa tempo no ar.
- **Nós portáteis** entram e saem; **nós fixos** com energia garantida formam a espinha.

Regra: comece com **o menor número de nós que atende os requisitos**, e adicione redundância só onde uma falha custaria caro.

### Passo 6: Pilha de software (Módulo 10, Aula 9)

Compare pelas perguntas: preciso de **endereço estável e vários meios** (LoRa mais Wi-Fi mais internet)? Reticulum. Preciso de **falar com quem está por perto com o mínimo de configuração**? Meshtastic ou MeshCore. Cada pilha define hardware e aplicativos. Registre a versão exata usada (Módulo 10, Aula 9).

### Passo 7: Legalidade e segurança

- Regime: rede privada cifrada = **radiação restrita** com **equipamento certificado**; radioamador = conteúdo aberto, sem cifra, com licença (Módulo 5, Aula 6; Módulo 10, Aula 8). **Não misture no mesmo nó.**
- Confira potência e ganho pelo certificado e pelo Ato: 1 W de pico no transmissor, com redução dB a dB para antena acima de 6 dBi, e sem limite de duty cycle no item 10 ([Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)).
- Segurança física: mastro, aterramento, distância de rede elétrica, exposição a RF.

### Passo 8: Energia, manutenção e teste

- **Energia**: consumo dos nós, autonomia desejada e recarga. Meça o consumo real com um wattímetro (Módulo 12).
- **Documentação**: uma página com mapa, parâmetros de rádio, versões, hashes e procedimento de recuperação.
- **Teste periódico** (mensal) de mensagem ponta a ponta, e **ensaio** de emergência (Aula 4).
- **Peças sobressalentes** e **backup cifrado** das identidades e das configurações.
- **Plano de fim de vida**: como migrar se o projeto de software parar (Módulo 10, Aula 9).

## Exemplo resolvido: família em dois pontos a 8 km, com cobertura em uma cidade

### O cenário

Uma família: **Casa C**, na cidade (quatro pessoas), e **Sítio S**, a **8 km** em linha reta (dois avós). Fibra em C; 4G fraco e instável em S. Todos têm celular.

**Requisitos (Passo 1).**

- R1: texto, localização e arquivos pequenos entre C e S, sem depender de operadora.
- R2: funcionar por **48 horas** sem internet e sem energia da rede.
- R3: quem está na cidade alcança a casa C por texto.
- R4: sem mensalidade.
- R5: manutenção de, no máximo, **1 hora por mês**.

**Ameaças (Passo 2).** Curiosos (vizinhos) e plataforma (não querem que uma empresa leia ou registre o que trocam). Não há adversário estatal. Aceitam que a existência de um transmissor seja visível. Identidades verificadas **em pessoa**.

**Meios (Passo 3).** LoRa 915 MHz entre C e S; Wi-Fi em cada casa; internet quando existir (independente do LoRa: falha por causas diferentes).

**Legal (Passo 7).** Radiação restrita, produtos certificados; **conteúdo cifrado** (o regime permite; o radioamador não, Módulo 10, Aula 8). Os dados de potência abaixo são ilustrativos.

### Passo 4: orçamento de enlace C para S (8 km)

Parâmetros: 915 MHz, BW 125 kHz. Transmissor de **+14 dBm**, antenas de **3 dBi** nas duas pontas, **0,5 dB** de perda por ponta (cabo curto e conectores). Perda em espaço livre a 1 km: `PL(1 km) = 20 x log10(915) + 32,44 = 91,7 dB` (Módulo 8, Aula 8). O modelo log-distância: `PL(d) = 91,7 + 10 x n x log10(d em km)`. Como o terreno entre C e S é desconhecido, calculo três hipóteses para `n` (3,0 caminho mais aberto; 3,5 e 4,0 mais obstruídos; são os valores usados no Módulo 8, Aula 8). `log10(8) = 0,903`.

```
Pr = Pt - Lt + Gt - PL + Gr - Lr = 14 - 0,5 + 3 - PL + 3 - 0,5 = 19 - PL

n = 3,0: PL = 91,7 + 30 x 0,903 = 118,8 dB -> Pr =  -99,8 dBm
n = 3,5: PL = 91,7 + 35 x 0,903 = 123,3 dB -> Pr = -104,3 dBm
n = 4,0: PL = 91,7 + 40 x 0,903 = 127,8 dB -> Pr = -108,8 dBm
```

Sensibilidades (Módulo 8, Aula 8): SF7 = -124,5 dBm; SF8 = -127,0 dBm. Margem = `Pr - sensibilidade`:

| `n` | Margem SF7 | Margem SF8 |
|---|---|---|
| 3,0 | 24,7 dB | 27,2 dB |
| 3,5 | 20,2 dB | 22,7 dB |
| 4,0 | 15,7 dB | 18,2 dB |

**Decisão.** O curso recomenda 15 dB de margem. SF7 já fecha até no pior caso (15,7 dB), mas com pouca folga; **SF8** dá 18 a 27 dB, ao custo de dobrar o tempo no ar (20 bytes: 103 ms em SF8 contra 57 ms em SF7, Módulo 8, Aula 2). Como o tráfego é pequeno (calculado abaixo), **SF8, BW 125 kHz, CR 4/5**, em **uma configuração única** para toda a rede.

**Verificações antes de comprar (Módulo 2, Aula 3).**

- **Horizonte:** antenas a 8 m em C e 6 m em S: `4,12 x (raiz de 8 + raiz de 6) = 4,12 x (2,83 + 2,45) = 21,7 km`. Em terreno plano, 8 km cabem. Se houver **morro** no caminho, o cálculo de horizonte não vale: pegue o perfil de elevação (uma ferramenta de mapa) e confira.
- **Fresnel:** raio da primeira zona no ponto médio, `r = 17,3 x raiz(d1 x d2 / (f x D))`, com distâncias em km e `f` em GHz: `17,3 x raiz(4 x 4 / (0,915 x 8)) = 17,3 x raiz(2,19) = 25,6 m`. Com 60% livre, **cerca de 15 m de folga** sobre qualquer obstáculo no meio do caminho. Copa de árvore e prédio contam.
- **EIRP do exemplo:** `14 - 0,5 + 3 = 16,5 dBm`, abaixo dos 22 dBm que o Módulo 8, Aula 8, registrou nos certificados consultados, mas o que vale é o **seu certificado**.

### Cobertura na cidade (Requisito R3)

Do telhado de C (antena de 3 dBi) até um aparelho portátil (antena de 0 dBi, na mão ou no bolso). Suposições: SF8, `n = 4` (hipótese pessimista para cidade), margem de 15 dB, e **15 dB extras de perda** por corpo e paredes.

```
PL_max = Pt - L + Gt + Gr - L + |sensibilidade| - margem - perdas extras
       = 14 - 0,5 + 3 + 0 - 0,5 + 127 - 15 - 15 = 113 dB
log10(d) = (113 - 91,7) / 40 = 0,5325  ->  d = 3,4 km
```

Raio de cerca de **3,4 km** em cidade densa, no modelo. É estimativa: **meça em campo** (Módulo 8, Aula 8, método de teste). Um portátil na cidade alcança **C** e, por C (segundo salto), o sítio (Reticulum encaminha; Módulo 10, Aula 3).

### Passo 5: topologia

```
        LoRa 8 km (SF8)                      internet (quando existir)
   [Sítio S] ============== [Casa C] ----------- fibra ----------- (mundo)
   Pi + RNode + Wi-Fi         Pi + RNode + Wi-Fi
       |                          |         \
   celulares (Wi-Fi)        celulares      portáteis LoRa na cidade (raio ~3,4 km)
```

- **Dois nós fixos** (C e S), cada um com **Raspberry Pi** (Módulo 12) rodando o Reticulum como nó de transporte, mais uma **placa LoRa compatível com RNode** (Módulo 10, Aula 6), mais um ponto de acesso Wi-Fi para os celulares em casa.
- **Um nó de propagação LXMF** em C (armazenar e encaminhar, Aula 8), para mensagens a quem está offline.
- **Três portáteis** (placas LoRa com Bluetooth) para quem sai de casa.
- **Segundo meio entre C e S**: quando houver internet nas duas pontas, uma interface TCP com senha de rede (IFAC) une os dois lados; o LoRa segue como meio independente. Detalhes de interfaces e do modo `boundary`: Módulo 10, Aula 5; confira a documentação da sua versão.
- **Ponto único de falha do desenho**: o enlace LoRa C a S. Se uma árvore crescer no meio do caminho, o vão fecha. Mitigação: verificação anual da visada; e, se necessário, um **terceiro nó repetidor** em um ponto alto (aumenta a complexidade: só se a medição pedir).

### Carga e tempo no ar

Suposições: 6 pessoas, 40 mensagens por pessoa por dia, cerca de **200 bytes** por mensagem no ar (LXMF: 111 bytes de sobrecarga mais cerca de 60 de texto, mais cabeçalhos; Módulo 10, Aula 7). Bit rate SF8, BW 125 kHz, CR 4/5: `Rb = 8 x (125.000 / 256) x 0,8 = 3.125 bit/s`.

```
mensagens por dia:      6 x 40 = 240
tempo no ar de 200 B:   1600 bits / 3125 bit/s = 0,51 s (a fórmula exata do Módulo 8 dá cerca de 0,56 s)
pior caso (todas cruzam o enlace): 240 x 0,56 s = 135 s por dia = 0,16% do dia
```

**Conclusão:** o texto ocupa uma fração minúscula do canal, mesmo se anúncios, confirmações e retransmissões multiplicarem isso por algumas vezes (o item 10 do Ato 14448 não traz limite de duty cycle, mas mantenha o tempo no ar baixo e confira o certificado do seu hardware, [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). Arquivos: **uma foto de 20 KB** são `160.000 bits / 3.125 = 51 s` (mais sobrecarga; estimo 1 a 2 minutos); **uma foto de 2 MB** são `16.000.000 / 3.125 = 5.120 s`, mais de 1 hora e 20 minutos de canal ocupado: **não**. Regra para a família: fotos grandes esperam o Wi-Fi ou o cartão (Aula 8).

### Passo 8: energia

Estimativa de consumo por nó fixo (hipóteses do autor, **meça** com wattímetro): Raspberry Pi cerca de 5 W, placa LoRa cerca de 1 W, ponto de acesso Wi-Fi cerca de 3 W: **9 W**. Para 48 horas: `9 W x 48 h = 432 Wh`. Com 80% de descarga utilizável: `432 / 0,8 = 540 Wh`. Uma bateria de **12,8 V e 50 Ah** guarda `12,8 x 50 = 640 Wh`, suficiente, com carregador e, se possível, um painel solar (Módulo 12). Faça o mesmo para o sítio, onde o painel pode ser a fonte principal.

### Custo (ordem de grandeza)

Hardware, sem frete, impostos ou homologação e sem preços conferidos no Brasil: **dois nós fixos** (Raspberry Pi, placa LoRa, antenas, cabos, mastro, bateria e carregador) e **três portáteis** (placas de US$ 16 a 35 nas lojas consultadas no Módulo 8, com antena e caixa à parte). O manual do Reticulum estima cerca de US$ 100 para um nó completo (Módulo 10, Aula 6). Some o que não é hardware: as **tardes de instalação** e a **certificação** dos produtos (verifique se as placas que você escolher têm homologação da Anatel; hardware sem ela pode inviabilizar o uso legal).

### Manutenção (Requisito R5)

| Tarefa | Frequência | Tempo |
|---|---|---|
| Mensagem de teste C a S e portáteis a C; conferir versão e registro | Mensal | 15 minutos |
| Trocar/atualizar software só depois de testar, mantendo a versão fixada e uma cópia do pacote | Sob demanda | 1 hora |
| Backup cifrado das identidades e da configuração | Após qualquer mudança | 10 minutos |
| Inspecionar antenas, conectores e vedação; conferir a visada | Anual e depois de tempestades | 1 a 2 horas (com segurança em altura) |
| Ensaio de emergência (internet desligada, nós na bateria) | Semestral | 1 hora |

### Verificação de identidades (Aula 5)

No primeiro encontro de família com todos, cada pessoa mostra o **hash do seu destino** (ou QR) e os outros conferem **em pessoa**. Cada um imprime a lista de hashes com o nome de quem os usa. Não há PKI, TOFU ou servidor: é a verificação fora de banda.

### Modos de falha e resposta

| Falha | Efeito | Resposta |
|---|---|---|
| Internet cai em C | Nenhum efeito entre C, S e portáteis | A rede local segue |
| Energia cai em C | O nó vai para a bateria por cerca de 48 horas | Recarga quando a energia voltar; conferir a autonomia no ensaio |
| Enlace C a S bloqueado (árvore, obra) | S e C ficam separados | Meio alternativo (internet, se houver); verificação de Fresnel; terceiro nó |
| Um nó queima | Perda daquele ponto | Placa sobressalente com a mesma configuração e cópia da identidade |
| Aparelho perdido ou roubado | Alguém pode personificar a pessoa | Gerar nova identidade, avisar os demais em pessoa, retirar o hash antigo da lista (não há revogação central; Aula 5) |
| O projeto do Reticulum para de publicar versões | Sem atualizações | Versão fixada continua; protocolo aberto; plano B em outra pilha (Módulo 10, Aula 9) |
| Interferência de outros dispositivos na faixa | Perda de pacotes | Diagnóstico com o teste de campo (Módulo 8, Aula 8; Módulo 9, Aula 3) |

### O que o desenho **não** faz, e como a família convive

Sem voz nem vídeo entre C e S pelo LoRa. Sem internet para os avós no sítio (o 4G fraco continua sendo o que é). Mensagens da família estendida continuam no mensageiro convencional. A rede privada é o **canal de continuidade e o canal soberano**; a Aula 9 explica por que isso é o uso honesto.

## O documento de uma página

Ao terminar o projeto, escreva em uma folha:

1. Requisitos (com números) e modelo de ameaça (em três linhas).
2. Mapa: pontos, distâncias, alturas de antena.
3. Parâmetros de rádio (frequência, SF, BW, CR, potência) e o número do certificado de cada produto.
4. Versões de software fixadas e onde está a cópia dos pacotes.
5. Lista de hashes e de quem os usa.
6. Contatos e procedimento de emergência (quem liga o quê, em que ordem).
7. Procedimento de teste mensal e de recuperação.

Esse papel é a sua redução do "fator ônibus" (Aula 9): outra pessoa, lendo, consegue reativar a rede.

## Resumo

- Projete pelas perguntas: **requisitos com números**, **modelo de ameaça**, **meios com modos de falha independentes**, **orçamento de enlace**, **topologia mínima**, **pilha de software**, **legalidade** e **energia e manutenção**.
- No exemplo: enlace de 8 km com +14 dBm, antenas de 3 dBi e SF8 dá margens de 18 a 27 dB nas três hipóteses de ambiente, com Fresnel de cerca de 15 m livres e horizonte de cerca de 22 km com antenas a 8 e 6 m; cobertura urbana de cerca de 3,4 km em SF8 com `n = 4` e 15 dB extras de perda.
- Carga: 240 mensagens por dia de 200 bytes ocupam cerca de 135 s de ar (0,16% do dia); foto de 20 KB, cerca de um minuto; foto de 2 MB, mais de uma hora, portanto fica para o Wi-Fi ou o cartão.
- Energia: 9 W por nó por 48 horas pedem cerca de 540 Wh, atendidos por uma bateria de 12,8 V e 50 Ah.
- Identidades se verificam **em pessoa**; manutenção mensal e ensaio semestral; documentação em uma folha.
- A rede privada **convive** com o mensageiro convencional: continuidade e soberania, não substituição.

## Para aprofundar

- [ ] [Building Networks: Trustless Networking](https://reticulum.network/manual/networks.html) (manual oficial do Reticulum): o capítulo de projeto de redes, com topologias e o modelo de confiança do projeto; confira a versão do manual correspondente à sua instalação.
- [ ] [Módulo 9, Aula 8: Planejamento de rede](../09%20-%20Redes%20Mesh/08%20-%20Planejamento%20de%20Rede.md): sítios, altura, orçamento, papéis, energia e teste, aplicado a Meshtastic e MeshCore.
- [ ] [Módulo 8, Aula 8: Alcance real, antena e erros comuns](../08%20-%20LoRa%20e%20LoRaWAN/08%20-%20Alcance%20Antena%20e%20Erros%20Comuns.md): o método de teste de alcance e a tabela de erros de campo, base do passo 4.

[Próximo módulo: Módulo 12, Projeto Prático: Raspberry Pi e hardware embarcado](../12%20-%20Projeto%20Pratico%20-%20Raspberry%20Pi%20e%20Hardware%20Embarcado/README.md)
