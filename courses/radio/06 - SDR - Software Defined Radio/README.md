# Módulo 6: SDR (Software Defined Radio)

Você já sabe o que é uma onda, como ela viaja e perde potência (Módulos 1 e 2), como a informação é gravada nela (Módulo 3), como uma antena a capta (Módulo 4) e quem pode transmitir e sob quais regras (Módulo 5). Este módulo responde: **e se toda a parte flexível do rádio (filtro, demodulação, decodificação) virasse software, e o hardware só captasse, amplificasse e digitalizasse?** É o ponto de virada do curso: daqui em diante o rádio é um fluxo de números que você processa, grava e programa, o território mais próximo do que um desenvolvedor já conhece. Vem agora porque o SDR é o laboratório dos módulos anteriores (você vê AM, FM, SSB, QPSK, chirps de LoRa e a propagação com os próprios olhos) e a ferramenta de observação dos módulos seguintes (modos digitais, LoRa, mesh).

> **Aviso.** Este módulo é sobre **receber**. Receber é passivo e não exige licença, mas a lei brasileira protege o **sigilo do conteúdo** de comunicações de terceiros (Aula 6), e **transmitir** com qualquer SDR exige licença, homologação ou regime de radiação restrita conforme a faixa (Módulo 5). Onde a legislação é incerta o texto diz que é incerta; **não é aconselhamento jurídico**. Preços, versões e status de satélites foram conferidos em setembro de 2026 e mudam rápido. Os vídeos citados tiveram título e canal confirmados, mas seu conteúdo não foi assistido; o que se descreve deles vem do título e da descrição.

## Aulas

1. [Por que o SDR existe e como é um receptor](./01%20-%20Por%20que%20SDR%20Existe%20e%20Arquitetura%20do%20Receptor.md): o que muda do rádio analógico para o de software, a cadeia antena, LNA, mixer, filtro, ADC, e as arquiteturas (superheteródino, conversão direta, FI baixa, amostragem direta).
2. [Amostras IQ, taxa de amostragem e ADC](./02%20-%20Amostras%20IQ%20Amostragem%20e%20ADC.md): por que são dois canais (I e Q), frequências negativas, Nyquist, largura de banda instantânea, bits do ADC e faixa dinâmica.
3. [FFT, waterfall, decimação e demodulação em software](./03%20-%20FFT%20Waterfall%20Decimacao%20e%20Demodulacao.md): do fluxo de amostras ao espectro e ao áudio, com AM, FM e SSB em código Python.
4. [RTL-SDR por dentro](./04%20-%20RTL-SDR%20por%20Dentro.md): RTL2832U, R820T2/R828D, faixa, 8 bits, ppm e deriva, bias tee, HF, kits, preços e o que dá e não dá para fazer.
5. [Outros SDRs](./05%20-%20Outros%20SDRs.md): Airspy, SDRplay, HackRF, PlutoSDR, LimeSDR, half e full duplex, preços e o papel de cada um.
6. [Por que receber é mais simples que transmitir, e a lei brasileira](./06%20-%20RX%20e%20TX%20e%20a%20Lei.md): a assimetria física entre RX e TX e o que a legislação diz sobre transmitir, receber e o sigilo das comunicações.
7. [Software, drivers e a primeira recepção](./07%20-%20Software%20e%20Primeira%20Recepcao.md): Zadig e WinUSB, SDR#, SDR++, GQRX, GNU Radio, passo a passo no Windows e sua primeira estação de FM.
8. [Ganho, overload, ruído local e calibração de ppm](./08%20-%20Ganho%20Overload%20Ruido%20e%20Calibracao.md): como reconhecer e curar saturação, reduzir o ruído do seu ambiente e corrigir o erro de frequência.
9. [Sinais legais para receber e o SDR como laboratório](./09%20-%20Sinais%20Legais%20e%20Laboratorio.md): ADS-B, AIS, aviação, o fim do NOAA APT e o Meteor LRPT, `rtl_433`, LoRa no waterfall e experimentos ligados aos Módulos 2 e 3.

## Nota sobre a curadoria

Os links são de documentação oficial, repositórios de projetos, guias do RTL-SDR Blog e vídeos de demonstração. Vídeos: título e canal confirmados por oEmbed; ninguém os assistiu. Algumas fontes de vídeo são antigas (por exemplo, o de ADS-B com Virtual Radar Server é de 2019), e a interface pode ter mudado. As lacunas honestas: não pude confirmar preço e disponibilidade atuais do LimeSDR Mini 2.0 e do Airspy R2; não confirmei se a 2G (GSM) segue ativa no Brasil para calibrar com `kal`; e não confirmei se dongles receptores estão na lista de produtos sujeitos a homologação da Anatel.

## Checklist de saída do módulo

- [ ] Por que mover a demodulação para software torna o rádio flexível, e qual bloco de hardware é a fronteira entre o analógico e o software?
- [ ] Por que uma amostra real do ADC não basta, o que I e Q resolvem e o que significa uma frequência "negativa" no espectro do SDR?
- [ ] Como a taxa de amostragem define a largura de banda instantânea, e o que é aliasing e por que há um filtro antes do ADC?
- [ ] O que os bits do ADC decidem (`6,02 N + 1,76 dB`), e por que um dongle de 8 bits não comporta um sinal muito forte e um muito fraco ao mesmo tempo?
- [ ] Como a FFT e o waterfall mostram o sinal, e como se demodula AM, FM e SSB a partir de I/Q?
- [ ] O que significa 1 ppm a 100 MHz, por que o erro do cristal importa para canais estreitos e por que V3 e V4 dispensam calibração?
- [ ] Por que receber é muito mais simples e menos regulado que transmitir (amplificador de potência, linearidade, harmônicos), e o que a lei brasileira protege ao tratar de quem escuta?
- [ ] Como reconhecer overload (imagens de FM, piso subindo), por que o teste de baixar o ganho distingue sinal real de falso e por que o filtro vai antes do LNA?
- [ ] Por que o NOAA APT deixou de existir e o que o substitui em 137 MHz?
- [ ] Como um chirp de LoRa aparece no waterfall e por que precisa de FFT pequena e SF alto para ser visto?

Quando estiver confiante, siga para o [Módulo 7: Modos Digitais de Rádio Amador](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/README.md).
