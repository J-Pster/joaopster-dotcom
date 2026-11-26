# Módulo 1: Física de Ondas e Espectro Eletromagnético

Este é o primeiro módulo do curso e não assume nenhum conhecimento prévio de física ou eletrônica. Ele responde à pergunta que sustenta todo o resto: **o que é, fisicamente, um sinal de rádio, e por que ele se comporta como se comporta?** Sem isso, propagação (módulo 2), modulação (3), antenas (4), rádio amador (5), SDR (6), LoRa (8) e redes mesh (9) viram receitas decoradas. Aqui se planta o hábito de perguntar "por quê" antes de aceitar um fato.

O caminho: primeiro a ideia de onda e por que a onda eletromagnética dispensa meio material (Maxwell, em nível conceitual); depois as grandezas que a descrevem (frequência, comprimento de onda, amplitude, fase, polarização); depois a linguagem de engenharia (decibéis) e o mapa completo do espectro com suas faixas; por fim ruído, segurança e a regulação que organiza o uso do espectro.

## Aulas

1. [O que é uma onda](./01%20-%20O%20Que%20e%20uma%20Onda.md): o que viaja numa onda, e por que som precisa de ar e a luz não.
2. [Campos elétricos e magnéticos e a teoria de Maxwell](./02%20-%20Campos%20e%20Maxwell.md): como campos se sustentam mutuamente, por que a onda EM viaja no vácuo e por que sua velocidade é c.
3. [Frequência, período e comprimento de onda](./03%20-%20Frequencia%20e%20Comprimento%20de%20Onda.md): a relação `c = f x lambda` com exemplos em 100 MHz, 2,4 GHz, 433 MHz, 915 MHz e 7 MHz, e por que o tamanho da onda importa.
4. [Amplitude, fase e polarização](./04%20-%20Amplitude%20Fase%20e%20Polarizacao.md): as outras propriedades da onda, interferência e por que a polarização decide se a antena capta o sinal.
5. [Decibéis e potência](./05%20-%20Decibeis%20e%20Potencia.md): dB, dBm e dBi, por que a escala é logarítmica e como somar ganhos e perdas.
6. [O espectro eletromagnético e as faixas de rádio](./06%20-%20Espectro%20e%20Faixas%20de%20Radio.md): do rádio aos raios gama, ELF a EHF, e por que cada faixa se comporta de um jeito.
7. [Ruído e relação sinal-ruído](./07%20-%20Ruido%20e%20Relacao%20Sinal%20Ruido.md): por que o ruído, e não a potência absoluta, limita a comunicação.
8. [Radiação ionizante, não ionizante e segurança de RF](./08%20-%20Radiacao%20e%20Seguranca%20de%20RF.md): por que rádio não ioniza, e os riscos reais de operar transmissores.
9. [O espectro como recurso regulado](./09%20-%20Espectro%20Regulado.md): por que se regula o uso do espectro e quem faz isso (ITU e Anatel).

## Sobre a curadoria

Os links de apoio são poucos, de propósito: só simuladores, páginas oficiais e alguns vídeos que acrescentam algo que texto não mostra. Os vídeos do YouTube tiveram título e canal confirmados, mas **ninguém assistiu ao conteúdo**; foram descritos só pelo que o título indica. Os simuladores do PhET (Wave on a String e Radio Waves & Electromagnetic Fields) são o melhor complemento visual das Aulas 1 a 4. Informações regulatórias e de segurança foram checadas em nível geral em páginas oficiais (Anatel, ITU, OMS, ICNIRP) em setembro de 2026; onde não foi possível confirmar (por exemplo, valores numéricos de limites de exposição e o texto exato da regulamentação brasileira), o texto diz isso.

## Aviso: regulamentação e segurança

Transmitir em radiofrequência no Brasil exige licença ou equipamento homologado pela Anatel, conforme a faixa e a potência. Há também riscos reais de eletricidade, de altura e (com potência alta) de exposição a RF. O módulo ensina a entender, não a burlar regras nem a substituir projeto por responsável técnico. Veja as Aulas 8 e 9.

## Checklist de saída do módulo

Ao final, você deve conseguir responder sem consultar:

- [ ] O que se propaga numa onda, e por que uma onda mecânica precisa de meio material e uma onda eletromagnética não?
- [ ] Como um campo elétrico variável e um campo magnético variável se sustentam mutuamente, e como Maxwell chegou à velocidade `c`?
- [ ] Por que `c = f x lambda`, e qual é o comprimento de onda de 100 MHz, 433 MHz, 915 MHz, 2,4 GHz e 7 MHz?
- [ ] Por que o tamanho da antena e o efeito de obstáculos dependem do comprimento de onda?
- [ ] Por que uma diferença de meio comprimento de onda entre dois caminhos cancela o sinal, e por que polarizações desalinhadas em 90 graus perdem quase tudo?
- [ ] Por que se usa escala logarítmica (dB), e o que significam dBm e dBi? Quanto dão 20 dBm + 20 dBm?
- [ ] Por que o espectro é dividido em faixas (ELF a EHF), e por que HF reflete na ionosfera enquanto VHF e UHF vão em linha de visada?
- [ ] Por que a perda no espaço livre cresce com a frequência, e o que é o compromisso entre alcance, tamanho de antena e largura de banda?
- [ ] Por que a SNR, e não a potência recebida sozinha, decide se dá para decodificar um sinal, e o que é o piso de ruído térmico?
- [ ] Por que rádio é não ionizante mesmo em potência alta, e por que o espectro precisa ser regulado?

Quando estiver confiante nesses pontos, siga para o [Módulo 2: Propagação de Rádio](../02%20-%20Propagacao%20de%20Radio/README.md).
