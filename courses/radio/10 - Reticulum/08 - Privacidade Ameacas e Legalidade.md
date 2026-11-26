[Voltar ao módulo](./README.md)

# Aula 8: Modelo de ameaça, privacidade e legalidade

*Pergunta que esta aula responde: contra quem o Reticulum protege, contra quem não protege, e em que regime legal brasileiro uma rede Reticulum sobre rádio pode existir sem entrar em conflito com a regra de conteúdo do radioamador?*

> **Aviso.** Esta aula ensina a entender e respeitar limites. **Não é assessoria jurídica** e não orienta a contornar regras. Transmitir em radiofrequência no Brasil exige respeitar a regulamentação da Anatel conforme a faixa e o regime, equipamento certificado quando aplicável, e há riscos de RF e de eletricidade (Módulo 1, Aula 8; Módulo 4, Aula 6). A parte legal apoia-se no **Módulo 5 (Aulas 5 e 6)**, que cita os atos da Anatel verificados em setembro de 2026; **não reverifiquei os atos aqui**. Confira as fontes oficiais antes de qualquer transmissão.

## Modelo de ameaça: uma tabela em vez de um slogan

"Seguro" e "privado" não significam nada sem dizer **contra quem** e **contra o quê**. Um modelo de ameaça lista adversários e capacidades. Para o Reticulum (Aulas 2 a 5 e manual):

| Ameaça | O Reticulum protege? | Como, e o limite |
|---|---|---|
| **Ler o conteúdo** de mensagens e dados | **Sim** em destinos Single e links | X25519 + HKDF + AES-256-CBC + HMAC; chave efêmera por pacote e por link. **Não** em destinos Plain (sem cifra) e Group protege só contra quem não tem a chave compartilhada |
| **Adulterar** ou forjar conteúdo | **Sim** | HMAC no token; assinaturas Ed25519 em announces, provas e links |
| **Personificar** um destino | **Sim, matematicamente** | Só quem tem a chave privada responde por aquele hash. **Você precisa verificar o hash por fora** (outro canal): o Reticulum não diz quem é a pessoa no mundo real |
| **Gravar hoje e decifrar depois** (roubo posterior de chave) | **Sim** em links; em pacotes avulsos só com **ratchets** | Sigilo futuro (Aula 2) |
| **Saber quem enviou** um pacote | **Em boa parte** | Pacotes não têm endereço de origem. O LXMF, porém, põe a origem dentro da mensagem (Aula 7) |
| **Saber para quem** o pacote vai | **Não**, salvo com IFAC | O hash do destino está no cabeçalho. Com IFAC, um observador de fora não obtém nada legível (manual); quem tem a senha da rede vê |
| **Saber que a identidade X existe e quando anunciou** | **Não** | Announces são públicos: hash, chave pública e valor aleatório com carimbo de tempo, propagados por toda a rede |
| **Análise de tráfego** (tamanho, horário, frequência) | **Não** | Nada no protocolo esconde padrões. O manual reconhece que o adversário pode registrar tamanho e horário de pacotes TCP |
| **Ver seu IP** (em TCP) | **Não** | O manual: TCP revela o IP das duas pontas. **I2P** oculta |
| **Localizar o transmissor de rádio** | **Não** | Fato físico dos Módulos 1 e 2: qualquer emissor de RF é localizável por radiogoniometria. A cifra não muda isso |
| **Nó de transporte malicioso** | **Parcial** | O manual: pode descartar ou atrasar tráfego, **não** pode decifrar, modificar ou se passar por outro. Redundância de caminhos mitiga. Ele vê os hashes de destino e horários do que passa |
| **Spam e inundação** de announces e pedidos de caminho | **Em parte** | Teto de announces (2%), controle de ingresso, prova de trabalho no announce de descoberta, blackhole local. Interferência de rádio (*jamming*) não é problema que protocolo resolva |
| **Comprometimento do seu aparelho** | **Não** | Quem tem o arquivo de identidade, tem o seu endereço e lê o que chegar. Cifra de disco e senha do sistema são responsabilidade sua |
| **Anonimato forte** (esconder quem você é de tudo) | **Não é a promessa** | É anonimato do iniciador no pacote, não um Tor. Para ocultar IPs use I2P |

### O que "anonimato do iniciador" quer dizer

Leia a tabela de novo: o Reticulum tira do pacote o **endereço de origem**, e no link o iniciador só se identifica se quiser. Isso torna impossível filtrar ou discriminar tráfego **pela origem** dentro da rede, o que o manual apresenta como neutralidade. **Não** apaga o rastro físico (rádio, IP) nem o rastro social (a identidade que você anuncia).

### Recomendações que decorrem do modelo

1. **Verifique hashes por outro canal** antes de confiar em um destino.
2. Proteja o **arquivo de identidade** como se fosse uma chave SSH: backup cifrado, permissão restrita.
3. Não use `rnspure` (primitivas Python puras) em uso sério: o manual alerta que perdem escrutínio.
4. Em redes privadas, use **IFAC** e mantenha a lista de interfaces sob controle.
5. Para esconder IPs sobre a internet, prefira **I2P**; para esconder o fato de haver emissão, só o silêncio de rádio ajuda.
6. Não pressuponha auditoria: a página oficial de primitivas afirma que o Reticulum **não foi auditado externamente** (Aula 9).

## Legalidade no Brasil: o que o Módulo 5 ensinou e como isso se aplica

Recapitulação do Módulo 5, Aula 5 e Aula 6 (verificado lá em setembro de 2026, com os atos da Anatel citados):

- **Radioamador** é serviço **público, aberto e autopoliciado**: o conteúdo precisa ser legível por qualquer receptor. O Ato nº 926/2024, item 6.11, diz que **não é permitida a criptografia** nas aplicações de **Modos Digitais e Voz Digital**. O Ato nº 3448/2026, item 10.5.5, veda acesso codificado com a finalidade de restringir a comunicação em repetidoras e redes. Também vedados: fim pecuniário ou comercial (RGST, art. 26) e usar a estação para **trânsito de tráfego entre redes** (Res. 777/2025). Espalhamento espectral e salto em frequência são **proibidos abaixo de 440 MHz** (Ato 926, item 6.12).
- **Rádio do Cidadão (PX)**, 27 MHz, é compartilhado e em linguagem clara: **não é canal privado**.
- **Radiação restrita** (Res. 680/2017): **sem licença de usuário**, mas com **produto certificado pela Anatel**; é onde LoRa/LoRaWAN opera legalmente em 902 a 907,5 MHz e 915 a 928 MHz. Pelo texto do Ato 14448 (item 10), o teto é 1 W de **potência de pico na saída do transmissor** (não e.i.r.p.), com redução dB a dB para antena acima de 6 dBi, e **não há limite de duty cycle** ([Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). O enquadramento de LoRa de canal fixo continua **não confirmado**; confira o Ato vigente.
- A mesma faixa de 915 MHz é **também faixa de radioamador**. O **mesmo rádio LoRa** pode estar sob dois regimes, mas **não ao mesmo tempo**.

### Onde o Reticulum bate na regra

O Reticulum cifra o conteúdo por desenho (Aula 2). Os fatos que importam:

1. **Todo destino Single e todo link é cifrado.** Não existe "modo sem criptografia" para tráfego roteado. O Zen: pedir um Reticulum sem criptografia é pedir "outro universo físico", porque a criptografia é parte do roteamento.
2. **O destino Plain não é cifrado, mas só tem alcance direto**: o manual diz que pacotes Plain **nunca** são transportados em vários saltos, porque o roteamento depende de pacotes cifrados.
3. Os **announces** são assinados, mas **não cifrados** (contêm chave pública e dados de aplicação abertos). O Módulo 5 diz que sobre **assinatura** de autenticação "não encontrei nos atos uma frase que a autorize ou proíba" e recomenda confirmar com a Anatel.

Conclusão de projeto, **sem interpretar a lei por conta própria**: **uma rede Reticulum comum (tráfego de dados cifrado) não é compatível com a regra de conteúdo do radioamador brasileiro** (Ato 926, 6.11), porque o serviço amador exige conteúdo legível por qualquer receptor. Portanto:

- **Rede privada, com conteúdo cifrado:** rode sob **radiação restrita**, com **hardware certificado** e dentro dos requisitos técnicos do regime. É o caminho previsto para o seu objetivo final (Módulo 5, Aula 6).
- **Faixa de radioamador:** **não coloque tráfego Reticulum cifrado no ar amador.** Se quiser praticar radioamador com dados, use modos abertos (Módulo 7). Uma variante em que só se usem destinos Plain, sem cifra, teria alcance de um salto e muitas limitações; **não confirmei** que exista implementação pronta para isso nem que a Anatel a aceite: se pretende isso, **consulte a Anatel ou a LABRE**.
- **Não misture os regimes no mesmo nó.** Um nó "privado cifrado" e "amador aberto" ao mesmo tempo não existe (Módulo 5, Aula 6).

### O conflito é conhecido pela comunidade

A discussão nº 399 do repositório do Reticulum, "Publishing Private Keys for Ham Radio Use" (dezembro de 2023, hoje **trancada**), mostra usuários dos EUA debatendo o mesmo conflito com a regra da FCC. Uma ideia discutida foi publicar a chave privada para que o tráfego pudesse ser decifrado por qualquer um; participantes apontaram que isso **quebraria o roteamento** (só o último a anunciar receberia) e sugeriram alternativas, como uma ponte que transmita em claro por um modo amador e reconstrua o Reticulum nas pontas. **Trate isso como conversa de comunidade sobre a lei americana, não como orientação normativa nem para o Brasil.** Não adote nenhuma dessas ideias sem validar com a autoridade competente.

### Recursos do Reticulum relacionados a rádio amador

- `id_callsign` e `id_interval` (RNode e KISS): o nó transmite uma **identificação** periódica no canal. Isso resolve, no máximo, a exigência de **identificação** (Módulo 5, Aula 4), **não** a de conteúdo aberto.
- `AX25KISSInterface`: encapsula o tráfego em AX.25 e identifica com indicativo e SSID. O manual avisa que só se deve usar se realmente necessário e que a via KISS simples com beacon é mais eficiente.

### O manual e a sua responsabilidade

Cada interface de rádio no manual repete: "O espectro de radiofrequência é um recurso legalmente controlado e a legislação varia muito pelo mundo. É sua responsabilidade conhecer a regulamentação aplicável no seu local". Concordo, e o Módulo 5 mostra onde a sua fica.

### Gateway para a internet

Um gateway entre LoRa (ISM certificado) e TCP é uma escolha técnica legítima do regime de radiação restrita (Aula 5). Sob licença amadora, **não** faça ponte de tráfego entre o ar amador e outras redes (Res. 777/2025, conforme o Módulo 5).

## Segurança física (RF e eletricidade)

O RNode com antena externa é um transmissor. Valem as regras do Módulo 1 (exposição a RF) e do Módulo 4, Aula 6 (antena longe de rede elétrica; instalação em altura exige preparo). O manual não trata desses riscos; o projeto prático do Módulo 12 volta a isso.

## Resumo

- Modelo de ameaça: o Reticulum protege **conteúdo, integridade, autenticidade do destino e sigilo futuro** (em links), e remove o **endereço de origem** do pacote. **Não** protege: destino no cabeçalho, announces públicos, análise de tráfego, IP em TCP, localização do transmissor de rádio, aparelho comprometido.
- Verifique hashes por outro canal; guarde a identidade como chave privada; use IFAC em redes privadas; I2P para ocultar IP.
- No Brasil, **radioamador exige conteúdo aberto sem criptografia** em modos digitais (Ato 926, 6.11); o Reticulum cifra por desenho: **não use tráfego Reticulum cifrado na faixa amadora**.
- Rede privada com conteúdo cifrado: **radiação restrita**, com equipamento **certificado**, dentro dos requisitos técnicos. Os limites numéricos: confira no Ato vigente.
- Publicar a chave privada, ideia debatida em comunidade dos EUA, quebra o roteamento e não é orientação para o Brasil.
- Gateways: permitidos em ISM certificado; sob licença amadora, ponte de tráfego entre redes é vedada.

## Para aprofundar

- [ ] [Módulo 5, Aula 5: Radioamador é público e aberto](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md): a regra de conteúdo, com os atos da Anatel.
- [ ] [Módulo 5, Aula 6: Rede privada legal, PX e ISM](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md): radiação restrita, homologação e o que não foi confirmado.
- [ ] [Publishing Private Keys for Ham Radio Use (Discussion #399)](https://github.com/markqvist/Reticulum/discussions/399) (GitHub, Reticulum): o debate da comunidade sobre cifra e radioamador, em contexto de lei americana.
- [ ] [Building Networks: Trustless Networking](https://reticulum.network/manual/networks.html) (manual oficial): as propriedades e limites do modelo de confiança do projeto.
- [ ] [Getting Started Fast: Connecting Instances Over the Internet](https://reticulum.network/manual/gettingstartedfast.html) (manual oficial): TCP versus I2P e o que cada um revela.
- [ ] [Ato nº 926/2024 (Anatel)](https://informacoes.anatel.gov.br/legislacao/component/content/article/165-atos-de-requisitos-tecnicos-de-gestao-do-espectro/2024/1919-ato-926) (Anatel): texto dos itens 6.11 e 6.12, também linkado no Módulo 5.

[Próxima aula: Comparação, maturidade e riscos](./09%20-%20Comparacao%20Maturidade%20e%20Riscos.md)
