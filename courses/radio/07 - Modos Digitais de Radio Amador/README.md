# Módulo 7: Modos Digitais de Rádio Amador

Você já sabe como uma onda carrega bits e o que a codificação de canal e o limite de Shannon impõem (Módulo 3), quais são as regras do serviço de radioamador e por que ele é público e aberto (Módulo 5) e como o SDR trata rádio como amostras processadas por software (Módulo 6). Este módulo responde: **como essas ideias viram sistemas que radioamadores usam de verdade para trocar dados por rádio, o que cada um custa em taxa, tempo, relógio e infraestrutura, e o que a lei brasileira permite fazer com eles?** Ele vem agora porque os modos digitais são o laboratório aberto e legal onde você pode estudar, com protocolos documentados, exatamente as técnicas que o LoRa (Módulo 8), as redes mesh (Módulo 9) e o Reticulum (Módulo 10) usam: FEC, ARQ, store-and-forward, beacons de descoberta, relé e sincronismo.

> **Aviso.** Este módulo descreve tecnologia; não substitui a legislação. Transmitir em radiofrequência exige licença (COER e indicativo, Módulo 5); receber é passivo. As regras da Anatel (Atos 926/2024 e 3448/2026, Resolução 777/2025) foram lidas em setembro de 2026; onde a aplicação a um caso específico (iGate, gateway do Winlink, resposta automática do JS8Call) não ficou clara em fonte oficial, o texto diz isso. Confirme com a LABRE ou a Anatel antes de operar estações automáticas ou pontes com a internet. Teste transmissão só com carga fantasma ou antena adequada, com a estação segura (Módulo 5, Aula 9).

## Aulas

1. [Por que modos digitais existem](./01%20-%20Por%20que%20Modos%20Digitais%20Existem.md): a vantagem de cerca de 30 dB sobre a voz, o que "abaixo do ruído" quer dizer, as quatro ferramentas (banda estreita, símbolos longos, FEC, sincronismo), o efeito penhasco e o mapa dos modos.
2. [A placa de som como modem e a interface com o rádio](./02%20-%20Placa%20de%20Som%20como%20Modem%20e%20Interface%20com%20o%20Radio.md): por que o áudio é a camada de encaixe, AFSK versus FSK, ALC, PTT, CAT, isolação e o ajuste de níveis.
3. [Sincronismo de tempo](./03%20-%20Sincronismo%20de%20Tempo.md): por que o FT8 e o WSPR exigem relógio certo, janelas de 15 s, NTP, GPS e o que isso significa sem internet.
4. [FT8 e FT4 por dentro](./04%20-%20FT8%20e%20FT4%20por%20Dentro.md): mensagem de 77 bits, CRC, LDPC, 8-GFSK, arranjos de Costas, decodificação, limiar de -21 dB e conferência com Shannon.
5. [Operando FT8 com WSJT-X](./05%20-%20Operando%20FT8%20com%20WSJT-X.md): configuração, frequências e subfaixas brasileiras, níveis, contato, PSK Reporter e solução de problemas.
6. [WSPR, JS8Call e os modos de teclado](./06%20-%20WSPR%20JS8Call%20e%20Modos%20de%20Teclado.md): baliza de propagação, mensagens com relé e store-and-forward, PSK31, RTTY e Olivia.
7. [Packet radio, AX.25 e APRS](./07%20-%20Packet%20AX25%20e%20APRS.md): AFSK 1200, quadro UI, digipeaters, iGates, 145,570 MHz e o Direwolf.
8. [Winlink, e-mail sobre rádio](./08%20-%20Winlink%20Email%20sobre%20Radio.md): CMS, gateways, P2P, ARQ, Pactor, ARDOP e VARA, Pat, e por que o VARA ser proprietário importa.
9. [Voz digital e a rede sem internet](./09%20-%20Voz%20Digital%20e%20Rede%20sem%20Internet.md): D-STAR, DMR, Fusion, FreeDV e M17, o codec AMBE, a comparação de todos os modos e o que a lei brasileira permite.

## Sobre a curadoria

- Os vídeos indicados tiveram **título e canal confirmados** pelo serviço oEmbed do YouTube, mas **o conteúdo não foi assistido**; cada um é descrito só pelo que o título indica. A documentação oficial (WSJT-X, artigo dos criadores do FT8, guia do JS8Call, Direwolf, Winlink, Pat, especificações do APRS e do M17, Atos da Anatel) foi aberta e lida.
- Não encontrei vídeos em português de qualidade para todos os pontos; para o Winlink há uma série de cinco artigos da LABRE-DF (abril de 2026) e para o APRS, um artigo da LABRE-CE.
- Dados que mudam (versões, preços, frequências): WSJT-X 2.7.0, Direwolf 1.8.1 (novembro de 2025), VARA HF 4.9.0 com licença de US$ 75, Hamlib 4.7.2, todos consultados em setembro de 2026; confira antes de comprar ou instalar.
- Os testes de desempenho do Winlink citados (2020) foram feitos por membros da própria equipe do Winlink em simulador e antecedem o ardopcf.
- Não encontrei declaração do autor do VARA sobre o motivo de o protocolo ser fechado.

## Checklist de saída do módulo

- [ ] Por que o FT8 decodifica com SNR de -21 dB em 2500 Hz, e por que dentro da largura de um único tom (6,25 Hz) o sinal está acima do ruído?
- [ ] Como 77 bits, CRC de 14 bits e LDPC(174,91) viram 79 símbolos de 8 tons, e por que isso troca taxa (cerca de 6 bit/s) por sensibilidade?
- [ ] Por que o áudio é a camada de encaixe entre rádio SSB e software, e como `f_RF = f_dial + f_áudio` determina onde o sinal cai no espectro?
- [ ] O que é ALC, por que saturar o áudio de transmissão gera um sinal sujo que ninguém decodifica, e como se ajusta o nível (Tune, Pwr)?
- [ ] Por que o FT8 exige o relógio dentro de cerca de 1 s e "suave", como NTP e GPS entregam a hora, e quais modos não dependem de relógio?
- [ ] Por que o APRS é um sistema de posição e mensagem de área (UI, broadcast, repetição decrescente), como digipeaters com `WIDEn-N` e iGates funcionam e qual é a frequência no Brasil?
- [ ] Por que o Winlink precisa de ARQ e de uma sessão de duas vias, qual o papel de cliente, RMS, CMS e P2P, e por que um modem proprietário como o VARA importa para quem quer entender e replicar o sistema?
- [ ] Como o JS8Call constrói uma rede com heartbeat, relé e guardar-e-recuperar, e por que um relé recria a mensagem em vez de repetir o sinal?
- [ ] O que significa o codec AMBE ser proprietário e quais são as alternativas abertas (Codec 2, M17, FreeDV)?
- [ ] Quais modos servem para mensagens sem internet, o que o serviço amador proíbe (criptografia, redes fechadas, fins comerciais) e por que uma rede privada cifrada precisa de outro regime legal?

Quando estiver confiante, siga para o [Módulo 8: LoRa e LoRaWAN](../08%20-%20LoRa%20e%20LoRaWAN/README.md), onde a mesma troca entre taxa e sensibilidade reaparece com outra técnica de modulação, fora do serviço amador.
