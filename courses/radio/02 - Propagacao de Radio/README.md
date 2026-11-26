# Módulo 2: Propagação de Rádio

No Módulo 1 você aprendeu o que é uma onda eletromagnética, o que são frequência e comprimento de onda, como funcionam dB e dBm, o que é polarização e como o espectro se divide em faixas. Este módulo responde: dado um transmissor e um receptor, por que o sinal chega (ou não) e com que intensidade? Ele vem agora porque toda decisão seguinte depende dele: a modulação (Módulo 3) precisa saber a que SNR o sinal chega, a antena (Módulo 4) precisa saber para onde apontar e quanto ganho compensa a perda, e LoRa, mesh e Reticulum (Módulos 8 a 10) são, no fundo, projetos de enlace.

Os números de referência deste módulo foram checados em fontes oficiais quando possível (ITU-R, NOAA/SWPC, Semtech, VOACAP), com a data "verificado em setembro de 2026" nos trechos. Onde não deu para confirmar, o texto diz.

## Aulas

1. [Modos de propagação e mecanismos físicos](./01%20-%20Modos%20de%20Propagacao%20e%20Mecanismos.md): quais caminhos a onda pode seguir (superfície, espacial, ionosférica) e quais fenômenos (reflexão, refração, difração, espalhamento, absorção) a governam.
2. [Perda no espaço livre e a fórmula de Friis](./02%20-%20Perda%20no%20Espaco%20Livre%20e%20Friis.md): quanto sinal se perde só pela distância, com cálculo em 433 MHz, 915 MHz e 2,4 GHz.
3. [Linha de visada, horizonte, altura da antena e Fresnel](./03%20-%20Linha%20de%20Visada%20Horizonte%20e%20Fresnel.md): até onde a visada alcança e por que obstruir só um pouco derruba o sinal.
4. [Multipercurso, fading e absorção](./04%20-%20Multipercurso%20Fading%20e%20Absorcao.md): por que o sinal oscila e por que a perda real passa da teórica; chuva, vegetação, paredes.
5. [A ionosfera e a propagação em HF](./05%20-%20Ionosfera%20e%20Propagacao%20HF.md): por que HF reflete e VHF passa; camadas, MUF, LUF, zona de silêncio, salto, dia e noite.
6. [Ciclo solar, índices e previsão de propagação em HF](./06%20-%20Clima%20Espacial%20e%20Previsao%20HF.md): SFI, K, A, apagões e como ler uma previsão.
7. [Troposfera, modos especiais e onda de terreno](./07%20-%20Troposfera%20e%20Modos%20Especiais.md): dutos, esporádica E, meteoros, espalhamento troposférico, onda de superfície em LF/MF.
8. [Orçamento de enlace (link budget)](./08%20-%20Orcamento%20de%20Enlace.md): a conta completa, com exemplo numérico de LoRa e de HF.
9. [Ferramentas de estimativa e escolha de faixa](./09%20-%20Ferramentas%20e%20Escolha%20de%20Faixa.md): simuladores de terreno, previsão de HF e o que cada faixa permite, ligado ao projeto da sua rede privada.

## Aviso de regulamentação e segurança

Este módulo é sobre entender a física. Transmitir em radiofrequência no Brasil exige seguir a regulamentação da Anatel (equipamentos homologados, faixas e potências permitidas) e, para o radioamadorismo, as regras próprias da atividade (Módulo 5). Não use este material para operar fora das regras. Instalação de antenas em altura ou perto da rede elétrica oferece risco de morte; siga normas de segurança e, quando exigido, profissional habilitado.

## Checklist de saída do módulo

- [ ] Por que a perda no espaço livre cresce com a frequência, se o vácuo não absorve energia?
- [ ] Por que o alcance por visada é limitado pelo horizonte de rádio e por que aumentar a altura da antena ajuda mais que aumentar a potência?
- [ ] O que é a zona de Fresnel e por que uma obstrução que não toca a linha reta já reduz o sinal?
- [ ] Por que a frequência baixa difrata melhor, mas a antena para ela fica maior?
- [ ] Por que a ionosfera reflete HF e deixa VHF passar, e o que são MUF e LUF?
- [ ] Por que HF de longa distância abre em bandas altas de dia e em bandas baixas à noite?
- [ ] O que SFI, K e A medem, e como afetam o HF?
- [ ] Como montar um orçamento de enlace e por que a margem de fading existe?
- [ ] Por que o alcance de LoRa varia tanto entre cidade e topo de morro com a mesma potência?
- [ ] Que faixa você escolheria para uma rede mesh urbana e por quê?

Quando estiver confiante, siga para o [Módulo 3: Modulação](../03%20-%20Modulacao/README.md).
