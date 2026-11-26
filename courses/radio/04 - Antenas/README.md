# Módulo 4: Antenas

Nos Módulos 1 a 3 você viu a onda (frequência, comprimento de onda, dB, polarização), como ela viaja e se enfraquece (propagação, link budget) e como a informação é gravada nela (modulação). Este módulo responde à pergunta que fecha o circuito: **como a energia elétrica de um transmissor vira essa onda, e o que decide quanto dela chega ao outro lado?** A antena é a peça física onde a teoria vira algo que se segura, e o tamanho dela é ditado pelo comprimento de onda do Módulo 1. Vem agora porque o próximo módulo (radioamadorismo) põe transmissor, cabo e antena em operação real e todas as escolhas dele dependem do que está aqui.

Aviso: instalar antena tem riscos de queda, choque elétrico, descarga atmosférica e exposição à RF, e transmitir exige licença ou equipamento homologado. O módulo explica os princípios; execução em altura e sistemas de aterramento são trabalho para profissional habilitado, e as regras vigentes são da Anatel e das normas ABNT.

## Aulas

1. [Por que a antena irradia e por que o tamanho importa](./01%20-%20Por%20que%20a%20Antena%20Irradia%20e%20Ressonancia.md): cargas aceleradas, ressonância e o cálculo do comprimento de dipolo e monopolo em 7 MHz, 146 MHz, 433 MHz, 868/915 MHz e 2,4 GHz.
2. [Impedância, casamento e SWR](./02%20-%20Impedancia%20Casamento%20e%20SWR.md): por que a energia reflete, as fórmulas de SWR, perda de retorno e perda por descasamento, o que um SWR alto significa e não significa, e por que 50 ohms.
3. [Linhas de transmissão, conectores e balun](./03%20-%20Linhas%20de%20Transmissao%20Conectores%20e%20Balun.md): coaxial contra linha paralela, perda por metro e frequência, SMA/N/UHF/BNC, adaptadores, pigtails, balun e choke.
4. [Diagrama de radiação, ganho e polarização](./04%20-%20Diagrama%20de%20Radiacao%20Ganho%20e%20Polarizacao.md): dBi contra dBd, diretividade, largura de feixe, ganho contra cobertura, casamento de polarização e EIRP.
5. [Tipos de antenas](./05%20-%20Tipos%20de%20Antenas.md): dipolo, ground plane, vertical, Yagi, colinear, borracha, patch, helicoidal, loop e EFHW, e quando usar cada uma.
6. [Solo, altura e instalação segura](./06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md): efeito do solo, contrapeso, altura, mastro, aterramento, para-raios e distância de redes elétricas.
7. [Medição, dummy load e erros comuns](./07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md): SWR meter, analisador, NanoVNA, ajuste de antena, carga fictícia e a lista de erros clássicos.

## Checklist de saída do módulo

- [ ] Por que uma antena irradia e um cabo coaxial não, se os dois conduzem corrente alternada?
- [ ] Por que o comprimento ideal de uma antena é uma fração do comprimento de onda, e como calculo o de um dipolo em 146 MHz e o de um monopolo em 915 MHz?
- [ ] O que é impedância e por que um descasamento reflete energia? Quanto da potência reflete com SWR 2:1 e qual a perda por descasamento?
- [ ] Por que um SWR baixo não prova que a antena é boa, e por que a medição no rádio esconde o SWR real quando o cabo tem perda?
- [ ] Por que a perda do cabo cresce com a frequência, e quando o cabo passa a importar mais que a antena?
- [ ] O que uma corrente de modo comum faz e para que serve um balun ou choke?
- [ ] Qual a diferença entre dBi e dBd, e por que uma omni de ganho alto pode cobrir pior um alvo abaixo da altura da antena?
- [ ] Como calculo o EIRP de um sistema e por que uma antena de ganho maior pode exigir reduzir a potência do transmissor?
- [ ] Por que altura vale mais que ganho em VHF/UHF/LoRa, e por que uma antena de borracha é fraca?
- [ ] Para que serve uma dummy load e por que nunca se liga um transmissor sem antena ou carga?

Quando estiver confiante, siga para o [Módulo 5: Radio Amador, Regulamentação e Prática](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/README.md).
