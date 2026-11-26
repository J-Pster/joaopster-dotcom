# Módulo 12: Projeto Prático: Raspberry Pi e Hardware Embarcado (capstone)

Este é o módulo final e prático. Você já sabe como uma onda leva informação (Módulos 1 a 4), o que a lei permite em cada regime (Módulo 5), como o SDR e os modos digitais funcionam (Módulos 6 e 7), como o LoRa alcança longe (Módulo 8), como uma malha se organiza (Módulo 9), como o Reticulum a torna um sistema com endereço por chave e sem servidor (Módulo 10) e por que e como se desenha uma rede descentralizada ([Módulo 11](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md)). Este módulo responde à pergunta final do curso: **como eu projeto, monto, meço, opero e confiro do ponto de vista legal a minha própria rede privada de comunicação, com Raspberry Pi e hardware embarcado?** Ele vem por último porque cada aula aplica, sem repetir, o que os módulos anteriores ensinaram.

Cada aula tem **etapa, entregável e checklist**. Ao final, você tem uma rede real (ou um projeto completo e conferido no papel, se ainda não quer transmitir) e a documentação para mantê-la.

## Aviso de regulamentação e segurança

Transmitir em radiofrequência no Brasil exige respeitar a Anatel: em **radiação restrita** (LoRa em 915 a 928 MHz, sem licença de usuário) o **produto precisa ser homologado** e a antena e a potência são as do certificado; sob **licença de radioamador** o conteúdo é **aberto, sem criptografia**, e os dois regimes **não se misturam no mesmo nó** (Módulo 5, Aulas 5 e 6). Riscos reais: **rede elétrica e descarga atmosférica** em mastros e antenas, **transmitir sem antena ou carga fictícia**, **tensão nos pinos do Raspberry Pi (3,3 V, nunca 5 V direto)** e **baterias de lítio**. Cada aula traz o aviso onde o risco aparece. O módulo ensina uma rede pequena, de uso próprio e baixa potência; torres, energia de potência, amplificadores e serviço a terceiros exigem profissional e a Anatel.

## Aulas

1. [Definir o projeto e desenhar a rede](./01%20-%20Definir%20o%20Projeto%20e%20Desenhar%20a%20Rede.md): requisitos, escolha do meio, desenho em três papéis, orçamento (com a alta de preço dos Raspberry Pi em 2026) e o regime legal desde o início.
2. [Hardware embarcado e energia](./02%20-%20Hardware%20Embarcado%20e%20Energia.md): Raspberry Pi contra microcontrolador, alimentação, SD contra SSD, GPIO de 3,3 V, placas LoRa, dimensionamento solar com contas, caixa estanque, antena e mastro.
3. [Preparar o Raspberry Pi](./03%20-%20Preparar%20o%20Raspberry%20Pi.md): imagem, SSH por chave, atualização, serviços systemd, logs, backup e watchdog de hardware.
4. [GPIO e PTT com segurança](./04%20-%20GPIO%20e%20PTT%20com%20Seguranca.md): por que existe o PTT, circuito com transistor ou optoacoplador, código com libgpiod e gpiozero, timeout e estado seguro; CAT, GPIO ou VOX.
5. [Decodificadores em Rust](./05%20-%20Decodificadores%20em%20Rust.md): o orçamento de ciclos por amostra, a evidência (e o que ela não prova), projetos reais em Rust, e como ler, cross-compilar e implantar um decodificador como serviço.
6. [Primeiro nó Meshtastic](./06%20-%20Primeiro%20No%20Meshtastic.md): firmware, configuração privada, teste de campo e a ligação com o Raspberry Pi por USB, TCP, MQTT ou `meshtasticd`.
7. [Primeiro nó Reticulum](./07%20-%20Primeiro%20No%20Reticulum.md): `rnsd` no Pi, RNode, interface LoRa, transport node como serviço, testes com Sideband e NomadNet.
8. [Gateway e integração](./08%20-%20Gateway%20e%20Integracao.md): LoRa para TCP e MQTT como fronteira, serviços locais, monitoramento e o teste de resiliência.
9. [Testes, medições e documentação da rede](./09%20-%20Testes%20Medicoes%20e%20Documentacao.md): campanha de alcance, planilha de perda medida contra teórica, ajuste do expoente do ambiente e documentação.
10. [Operação, manutenção e contingência](./10%20-%20Operacao%20e%20Contingencia.md): rotina, atualização de firmware, segurança operacional, energia no tempo, diagnóstico e plano de contingência.
11. [Legalidade e boas práticas finais](./11%20-%20Legalidade%20e%20Boas%20Praticas%20Finais.md): as cinco perguntas por nó, ficha de conformidade e o limite entre hobby e profissional.
12. [Fechamento do curso](./12%20-%20Fechamento%20do%20Curso.md): checklist do curso inteiro por módulo, doze perguntas integradoras, diagnóstico de lacunas e próximos passos.

## Sobre a curadoria

O conteúdo principal é o texto das aulas, apoiado em documentação oficial (Raspberry Pi, libgpiod, gpiozero, systemd, Meshtastic, Reticulum, Rust e Cargo, `cross`) e nos repositórios citados; preços, versões e regras foram verificados em **setembro de 2026** e envelhecem. Os vídeos indicados tiveram **título e canal confirmados** por oEmbed do YouTube, mas **não foram assistidos**; onde os descrevo, é pelo que o título ou o resumo indica. Contas de energia e de medição usam **valores de exemplo** rotulados como tais, e o circuito de PTT usa valores ilustrativos: confira o manual do seu rádio e as folhas de dados. Não testei em hardware real os trechos de código, escritos a partir da documentação; onde a versão importa, o texto manda conferir a documentação da sua versão. Pontos que não consegui confirmar (por exemplo, o enquadramento regulatório do LoRa de canal fixo e o comportamento do estado de um pino depois de solto pelo libgpiod) estão marcados no texto.

## Checklist de saída do módulo

- [ ] Por que o Raspberry Pi vai onde há energia e o microcontrolador vai ao morro, e qual é a conta que mostra isso?
- [ ] Por que um pino de GPIO não pode receber 5 V nem acionar o rádio diretamente, e qual é o estado seguro de um circuito de PTT?
- [ ] Por que um serviço em `systemd` com `Restart=on-failure` e um watchdog de hardware resolvem problemas diferentes?
- [ ] Por que a evidência de segurança de memória do Android não prova que decodificadores de rádio "migram" para Rust, e o que ela sugere?
- [ ] Por que a perda medida em campo é maior que a de espaço livre, e como se ajusta o expoente do seu ambiente?
- [ ] Por que um gateway é uma fronteira (tempo de ar, metadados, ponto único de falha) e não um cano?
- [ ] Por que o regime legal se decide por nó, e por que cifra e serviço amador são incompatíveis?
- [ ] Por que uma rede pequena de rádio não é um serviço de emergência, e o que você faz enquanto isso?

## Fim do curso

Este é o último módulo. Passe para o [Fechamento do curso](./12%20-%20Fechamento%20do%20Curso.md), que tem o checklist do curso inteiro, e depois, o mais importante: a sua rede funcionando.
