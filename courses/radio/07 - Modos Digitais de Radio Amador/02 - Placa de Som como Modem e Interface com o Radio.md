[Voltar ao módulo](./README.md)

# Aula 2: A placa de som como modem e a interface com o rádio

*Pergunta que esta aula responde: como um computador e um rádio SSB comum viram um modem digital, o que significam AFSK, CAT, PTT e ALC, e por que o nível de áudio decide se o seu sinal é limpo ou uma sujeira que ninguém decodifica?*

> Nomes de menu, versões e valores de configuração desta aula vêm da documentação oficial do WSJT-X 2.7.0 e do Direwolf, consultadas em setembro de 2026. Menus de rádios variam por modelo: use o manual do seu transceptor. Testes de transmissão só com antena adequada ou carga fantasma (Módulo 4, Aula 7) e a estação segura (Módulo 5, Aula 9).

## Por que o áudio é a camada de encaixe

Um transceptor SSB já contém um modulador e um demodulador (Módulo 3, Aula 3): ele pega um sinal de **áudio** de cerca de 300 a 2700 Hz, translada para a radiofrequência e vice-versa. Para o rádio, não importa se aquele áudio é uma voz, um assobio ou uma sequência de tons. Qualquer sinal que caiba nessa banda de áudio passa pelo rádio.

Logo, para transmitir dados digitais por um rádio SSB basta o computador gerar **áudio que representa a modulação digital**, e para receber basta ouvir o áudio do rádio e demodular em software. A camada de encaixe é o áudio; a placa de som é o conversor digital-analógico (DAC) no envio e analógico-digital (ADC) na recepção:

```
TX: bits -> [modem em software] -> áudio -> [placa de som/DAC] -> cabo -> [rádio SSB] -> RF
RX: RF -> [rádio SSB] -> áudio -> cabo -> [placa de som/ADC] -> [modem em software] -> bits
```

Essa é a mesma ideia do SDR do Módulo 6, só que dividida em dois pedaços: o rádio faz RF e SSB (analógico), o computador faz DSP. O WSJT-X pede áudio a **48.000 Hz, 16 bits**. Pelo teorema de Nyquist (Módulo 3, Aula 5), 48 kHz de amostragem representa tudo até 24 kHz, muito além dos 3 kHz do SSB, com folga para filtros digitais.

## AFSK versus FSK direto

**FSK** (Frequency Shift Keying) muda a frequência de um sinal conforme os bits (Módulo 3, Aula 6). Há duas formas de fazer isso no rádio:

- **FSK direto**: o transmissor desloca a própria frequência de RF. É a forma clássica do RTTY em equipamento dedicado.
- **AFSK** (Audio FSK): os tons FSK são gerados **em áudio** e entram no modulador do rádio (SSB ou FM). É o que a placa de som faz.

Em SSB com banda lateral superior (USB), a frequência de RF de um tom é a soma do dial com o tom de áudio: `f_RF = f_dial + f_áudio`. Exemplo com o FT8 em 20 m, do material de um operador (W1DYJ): dial 14.074,00 kHz e tom de 1.120 Hz dão `14.074,00 + 1,120 = 14.075,12 kHz`. Por isso a "frequência do FT8" que você ajusta no rádio (14,074 MHz) é o dial, e cada sinal ocupa uma posição diferente dentro dos cerca de 3 kHz seguintes.

Duas consequências práticas:

1. **Sempre USB** nos modos do WSJT-X: o guia diz que o programa usa USB para transmitir e receber, ou o modo "Data/Pkt" do rádio quando ele existir (esse modo costuma ligar a entrada de áudio traseira e às vezes dá filtro mais largo e plano).
2. Em RTTY com AFSK, trocar USB por LSB **inverte marca e espaço** (marca é o tom mais alto no RF); é uma armadilha conhecida de quem opera RTTY (apresentação do contest W0YK, consultada em setembro de 2026).

Em **FM** (VHF/UHF), a AFSK entra no microfone ou na porta de dados do rádio. O pacote de 1200 baud do APRS usa os tons de 1200 Hz e 2200 Hz (padrão Bell 202, Aula 7), e o rádio os transmite como FM comum. A Anatel classifica isso como emissão de dados em FM com subportadora (classe F2D, Ato 926, Tabela XLII). Já os modos de dados em SSB com subportadora são J2D (Tabela XLIII), e os de voz digital, F7E, G7E e J2E (Tabela XL).

Nem toda taxa cabe pelo caminho de microfone. O arquivo de configuração de exemplo do Direwolf diz, na linha do modem de 9600 baud, que ele "não pode usar conexões de microfone e alto-falante": o arquivo não detalha o motivo, mas a explicação geral é que o caminho de microfone de um rádio FM tem filtros e pré-ênfase (Módulo 3, Aula 4) que deformam a onda de 9600 baud. Para 9600 baud, use a porta de dados do rádio.

## O caminho do sinal e o que pode dar errado

Cada bloco da cadeia tem um erro típico:

| Bloco | Função | Erro típico |
|---|---|---|
| Programa (modem) | Gera e decodifica o áudio | Relógio errado (Aula 3), dispositivo de áudio errado |
| Placa de som | DAC/ADC | Taxa de 44,1 kHz em vez de 48 kHz, efeitos de áudio do sistema ligados |
| Cabo e interface | Liga, isola e atenua o áudio; comanda PTT | Nível alto demais, laço de terra, ruído de RF |
| Rádio | SSB, filtros, amplificador | Compressor de voz ligado, ALC atuando, filtro estreito demais |
| Antena | Irradia | SWR alto (Módulo 4, Aula 2) reduz a potência e pode danificar o rádio |

## ALC: por que o volume do áudio é um controle de qualidade

O **ALC** (Automatic Level Control) é um circuito do transmissor que reduz o ganho quando o sinal de entrada é forte demais para o estágio de saída. Na voz, isso protege contra excesso de modulação. Nos modos digitais, o ALC atuando significa **áudio saturado**: o sinal é achatado, gera harmônicos e produtos de intermodulação e espalha energia fora da largura nominal. Um sinal FT8 de 50 Hz que espirra ruído por 500 Hz atrapalha vizinhos e é decodificado pior por todos.

O guia do WSJT-X e o guia do JS8Call concordam no procedimento:

- O guia do WSJT-X manda usar o botão **Tune** (que transmite um tom contínuo), ouvir o tom no monitor do rádio (deve ser "perfeitamente liso, sem cliques ou falhas", mesmo enquanto o computador faz outras tarefas) e **reduzir o controle "Pwr" a partir do máximo até a potência de RF cair ligeiramente**. Esse é, segundo o guia, geralmente um bom nível de áudio. O "Pwr" do WSJT-X não é potência real: é o nível do áudio que sai da placa de som.
- O guia do JS8Call diz: ajuste o áudio de saída "só alto o bastante para acionar o transmissor sem engajar o ALC"; áudio alto demais distorce os tons e "muitas estações não conseguirão decodificar".

Cuidado com a regra decorada "ALC zero". Um guia de um clube de rádio (SARC, consultado em setembro de 2026), que remete aos recursos oficiais de cada fabricante, lembra que o alvo do ALC varia por modelo: siga o manual do seu transceptor. O que vale em todos: a saída de RF deve subir proporcionalmente ao volume até um ponto, e passar desse ponto só piora o sinal.

**Potência baixa e limpa.** Modos digitais de sinal fraco têm ciclo de trabalho alto: o FT8 transmite 84% do tempo (Aula 5). O manual do fldigi recomenda manter a potência abaixo de cerca de 30% do máximo do rádio nos modos que exigem linearidade, e um tutorial em vídeo (David Casler, "Ask Dave") sugere 25 a 35 W num rádio de 100 W, para preservar a linearidade e evitar aquecimento. Além do bom senso, o Ato 926, item 5.1, exige potência mínima necessária ao serviço.

**Recepção:** desligue o que "melhora" a voz. Redução de ruído, notch automático e AGC forte atrapalham o modem. Uma apresentação de operador cita o autor do WSJT-X, K1JT, dizendo que não se deve usar redução de ruído nem filtro de recepção mais estreito que cerca de 2,5 kHz, porque o próprio WSJT-X faz toda a filtragem estreita em software. O guia do WSJT-X orienta ajustar o ganho de recepção para que o ruído de fundo, sem sinais, fique em torno de **30 dB** na escala do programa.

## PTT: como o computador liga o transmissor

**PTT** (push-to-talk) é o controle que coloca o rádio em transmissão. O WSJT-X oferece quatro métodos: **VOX, CAT, DTR e RTS**.

| Método | Como funciona | Quando usar |
|---|---|---|
| **VOX** | O rádio ou a interface detecta áudio e transmite | Sem cabo de controle. O primeiro trecho do áudio pode se perder até o VOX acionar, e ruído do computador pode disparar transmissão |
| **CAT** | O comando de PTT vai pelo cabo de controle serial do rádio | Rádios com USB (um único cabo) |
| **RTS/DTR** | Uma linha de controle da porta serial fecha o PTT | Interfaces com circuito de acionamento |
| **GPIO de placa CM108** | Um pino do chip de áudio USB comanda o PTT (linha `PTT CM108` no exemplo do Direwolf) | Interfaces que usam o chip C-Media, num só cabo USB |

Em modos com relógio estrito, um PTT explícito é preferível: o áudio só começa depois de o rádio já estar em transmissão. O JS8Call oferece até um "Tx delay" (atraso entre PTT e áudio), cujo valor sugerido em um guia de instalação é 0,2 s.

## CAT: o computador controla o rádio

**CAT** (Computer Aided Transceiver) é o protocolo serial pelo qual o computador lê e altera frequência, modo e PTT do rádio. Cada fabricante tem o seu; o **Hamlib** é a biblioteca aberta que dá uma interface única para mais de 200 rádios (o site do Pat cita "200+ rádios"; a versão estável do Hamlib na página oficial, em setembro de 2026, é a 4.7.2). O WSJT-X usa o Hamlib por dentro e aceita também Flrig, Omni-Rig, DX Lab Suite Commander e Ham Radio Deluxe como intermediários.

Sem CAT dá para operar, mas você perde a troca automática de frequência e o PTT vira VOX. Uma prática comum em Linux é rodar o daemon `rigctld` do Hamlib, que oferece o rádio por TCP para vários programas ao mesmo tempo; o JS8Call e o Pat aceitam isso.

Passos do guia do WSJT-X (File > Settings > Radio):

1. Selecione o modelo do rádio (Rig) ou o intermediário.
2. Escolha a porta serial (em Windows, o COM virtual do USB; consulte o Gerenciador de Dispositivos) e os parâmetros (baud, bits de dados, stop bits, handshake) que o **manual do rádio** manda.
3. Poll interval de 1 a 3 s.
4. Método de PTT e modo (USB ou Data/Pkt).
5. Split: "Rig" (usa o split do rádio) ou "Fake It" (o programa desloca o dial durante a transmissão). Isso mantém o áudio de TX entre 1500 e 2000 Hz, de modo que os harmônicos do áudio (a partir de 3000 Hz) caem fora da passagem do filtro de SSB. O sinal fica mais limpo.
6. Clique em **Test CAT** (o botão fica verde se comunicou) e depois em **Test PTT** (fica vermelho quando o rádio entrou em transmissão). Só teste PTT com carga fantasma ou antena adequada conectada.

## As três formas de ligar computador e rádio

1. **Rádio com placa de som USB integrada** (o material do clube K6MEP cita IC-7300 e FT-710): um único cabo USB leva áudio e CAT. Instale os drivers do fabricante e configure a "porta de dados" do rádio conforme o manual. É o caminho mais simples.
2. **Interface externa** (Digirig, SignaLink, DRA e similares): uma placa de som USB com isolação e circuito de PTT. O site do Digirig descreve o Digirig Lite como uma interface de modos digitais "baseada em placa de som USB, com codec de áudio padrão e várias opções de PTT", compatível com desktops e celulares. A SignaLink traz VOX embutido, segundo tutoriais.
3. **Placa de som do próprio computador + cabos**: funciona, mas exige atenuar o áudio (um divisor resistivo reduz o nível da saída de linha para o nível de microfone), isolar (transformadores) e resolver PTT à parte.

**Por que isolar.** Rádio e computador ligados por dois caminhos de terra (o cabo de áudio e a alimentação) formam um laço por onde circula corrente, gerando zumbido. Transformadores de isolamento nas linhas de áudio quebram o laço; a Wikipedia registra que as interfaces de PSK31 costumam usar transformadores de isolamento nos dois caminhos por esse motivo. Há também **RF em retorno**: a energia do próprio transmissor entra na interface e distorce o áudio. Ferrites nos cabos ajudam (recomendação do material do clube SARC).

**Onde ligar no rádio.** Rádios com porta traseira "DATA/ACC" entregam áudio plano, sem processamento de microfone, e são preferíveis; se usar o soquete de microfone, desligue compressor de voz, equalizador e qualquer processamento (o material do clube K6MEP também manda deixar AGC e redução de ruído desligados).

## O sistema operacional também é parte do circuito

O guia do WSJT-X traz avisos que evitam a maior parte dos problemas de novato:

- Configure o dispositivo de áudio a **48.000 Hz, 16 bits** e **desative os efeitos de áudio** (em Windows, no Painel de Som).
- **Não use o dispositivo de áudio padrão do sistema** para o rádio (ou desligue todos os sons do sistema): senão os sons do sistema (o alerta de um e-mail, por exemplo) saem no ar. O guia diz "para evitar transmitir inadvertidamente".
- Para dispositivos com o chip PCM2900 (comum em rádios com USB), o guia manda colocar o nível do microfone em 0 dB.
- Em Linux, o comando `arecord -l` lista as placas e seus números (o exemplo do Direwolf usa `plughw:1,0` para "placa 1, dispositivo 0").

## Modem em software: o exemplo do Direwolf

O **Direwolf** é o modem de software mais usado para packet e APRS (Aula 7). Ele entrega o mesmo modelo: lê áudio de um dispositivo (`ADEVICE`), decodifica AX.25 e o oferece a outros programas como se fosse um TNC, por dois protocolos: a interface AGW (porta 8000 por padrão) e KISS sobre TCP (porta 8001). O arquivo de exemplo do repositório também prevê áudio vindo de um SDR (`ADEVICE stdin`), e há notas técnicas do projeto para uma iGate com RTL-SDR, o que liga este módulo ao Módulo 6.

## Resumo

- O rádio SSB já tem modulador e demodulador; o computador gera e lê **áudio**, e a placa de som é o conversor: essa é a camada de encaixe entre rádio e software.
- **AFSK** gera os tons em áudio; em USB, `f_RF = f_dial + f_áudio`. Use USB nos modos WSJT-X (ou Data/Pkt); o FM de 9600 baud exige porta de dados, não microfone.
- **ALC atuando** significa áudio saturado e sinal sujo. Ajuste o nível com Tune até a RF cair um pouco, mantenha ALC no mínimo indicado pelo seu manual e use potência baixa (25 a 35% do máximo é uma prática comum, e o Ato 926 exige o mínimo necessário).
- **PTT** por CAT, RTS/DTR ou GPIO é mais confiável que VOX; **CAT** (via Hamlib) dá controle de frequência e modo. Split (Rig ou Fake It) mantém o áudio de TX entre 1500 e 2000 Hz.
- Isolação (transformadores) e ferrites combatem zumbido e RF em retorno; áudio a 48 kHz, 16 bits, sem efeitos do sistema, sem sons do sistema no dispositivo do rádio.

## Para aprofundar

- [ ] [WSJT-X 2.7.0 User Guide](https://wsjt.sourceforge.io/wsjtx-doc/wsjtx-main-2.7.0.html) (Joe Taylor, K1JT): requisitos do sistema, seções de Radio, Audio e ajuste de níveis; fonte dos passos acima.
- [ ] [FT8 & WSJT-X Setup - STEP by STEP](https://www.youtube.com/watch?v=C04RPz4PuVk) (Ham Radio DX): demonstração das telas General, Radio, Audio e do ajuste de níveis de RX e TX (título e canal confirmados; conteúdo não assistido).
- [ ] [Install & Setup of FT8 To Making Your First Contact](https://www.n9rjv.org/install-setup-ft8/) (SARC, clube de rádio): passo a passo escrito com CAT, PTT, áudio, ALC e tabela de sintomas; lembra que os alvos de ALC variam por rádio.
- [ ] [Digirig](https://digirig.net/) (Digirig): manuais de interfaces USB para modos digitais, com guias de solução de problemas e de opções de controle de rádio.
- [ ] [Direwolf: documentação e Radio Interface Guide](https://github.com/wb2osz/direwolf/tree/master/doc) (WB2OSZ): notas sobre interfaces de rádio, PTT e o modem de software.
- [ ] [Fldigi / Flrig Software Setup From A to Z](https://www.youtube.com/watch?v=aBzqACjQJDU) (Ham Radio Made Simple): configuração de placa de som e CAT no fldigi com Flrig (título e canal confirmados; conteúdo não assistido).

[Próxima aula: Sincronismo de tempo: por que o FT8 exige relógio certo](./03%20-%20Sincronismo%20de%20Tempo.md)
