[Voltar ao módulo](./README.md)

# Aula 9: Testes, medições e documentação da rede

*Pergunta que esta aula responde: como transformo "parece funcionar" em números (alcance real, taxa de entrega, perda além da teórica), como comparo o que medi com o orçamento de enlace que calculei, e o que documento para que a rede sobreviva a mim e a meu esquecimento?*

> Os números da tabela e das contas são **dados de exemplo inventados por mim para ensinar o método**, e estão rotulados assim; os seus serão outros. As fórmulas vêm do [Módulo 2, Aulas 2 e 8](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md) e as ferramentas de teste dos Módulos 8, 9 e 10. Em campo, aplique a instalação segura do [Módulo 4, Aula 6](../04%20-%20Antenas/06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md).

## Por que medir

O orçamento de enlace do Módulo 2 dá o **teto**: quanta perda o enlace aguenta e, com um modelo de ambiente, que distância cabe. Mas o modelo usa um expoente de perda `n` "ilustrativo" (2, 3, 3,5 ou 4). O ambiente **seu** tem um `n` só dele. A campanha de medição faz duas coisas: descobre esse `n` e a perda extra do seu local, e valida (ou derruba) o critério de sucesso da Aula 1.

Como desenvolvedor: teoria é a especificação; a campanha é o teste de integração contra o mundo real.

## O que medir

| Grandeza | O que é | Como obter |
|---|---|---|
| **RSSI** (dBm) | Potência recebida | Meshtastic: aparece no app, na CLI e nos pacotes da biblioteca; Reticulum: `rnprobe` mostra RSSI e SNR quando a interface reporta |
| **SNR** (dB) | Relação sinal-ruído no receptor (em LoRa pode ser negativa, Módulo 8) | Mesmas fontes |
| **PDR** (*packet delivery ratio*) | Pacotes recebidos divididos pelos enviados, em % | Contagem: envie N, conte |
| **Latência** | Tempo entre enviar e receber | Relógio em dois pontos, ou o tempo de ida e volta do `rnprobe` |
| **Ocupação do ar** | `ChUtil` e `AirUtilTX` (Meshtastic), limites de `airtime` (Reticulum) | Telemetria e `rnstatus` |
| **Tensão da bateria e corrente** | Energia real do nó | Medidor que acumula watt-hora (Aula 2) |
| **Distância** | Entre transmissor e receptor | GPS: fórmula de Haversine sobre as coordenadas |

O módulo Range Test do Meshtastic ([Módulo 9, Aula 5](../09%20-%20Redes%20Mesh/05%20-%20Meshtastic%20na%20Pratica.md)) grava em CSV a posição de cada pacote recebido, e o `rnprobe` do Reticulum dá RSSI, SNR e saltos: são as duas ferramentas de coleta já apresentadas.

## Método da campanha de alcance

Regras para que os dados valham:

1. **Uma variável por vez.** Mesma antena, mesma altura, mesmos parâmetros de rádio (SF, banda, CR, potência, região) em todos os pontos; mude uma coisa e repita.
2. **Registre as condições:** altura de cada antena, tipo de antena, cabo, orientação, clima, hora. Uma foto do ponto vale mais que uma descrição.
3. **Vários pacotes por ponto** (pelo menos 10). Um pacote não mede taxa de entrega.
4. **Pontos em várias distâncias e direções**, incluindo pontos "ruins" (atrás de prédios, vegetação): o que você quer conhecer é a distribuição.
5. **Repetir em outro dia ou hora**, para separar variação natural de efeito real.
6. **Antes de sair**, meça o SWR das antenas (Módulo 4, Aula 7). Uma antena desafinada estraga todos os números sem avisar.
7. **Desligue o módulo de teste no fim** (Meshtastic: ele gasta tempo de ar e desliga sozinho após 8 horas, mas não dependa disso).

## A planilha: teórico contra medido

Colunas (a planilha é o entregável):

| Coluna | Conteúdo |
|---|---|
| A | Ponto (nome) |
| B, C | Latitude e longitude |
| D | Distância `d` (km), pelo GPS |
| E | Altura da antena TX e RX (m) |
| F | Pacotes enviados e recebidos, e PDR (%) |
| G | RSSI médio (dBm) e SNR médio (dB) |
| H | **Perda medida** `PL_med` (dB) |
| I | **Perda teórica em espaço livre** `PL_fs` (dB) |
| J | **Perda excedente** `H - I` (dB) |
| K | Obstáculo e observação (Fresnel, árvores, prédio) |

Fórmulas (notação de LibreOffice e Excel; `f` é a frequência em MHz, `d` em km):

- Espaço livre: `PL_fs = 20*LOG10(d) + 20*LOG10(f) + 32,44` (Módulo 2, Aula 2). A 915 MHz e 1 km dá `91,7 dB`.
- Perda medida: `PL_med = Pt + Gt + Gr - Lt - Lr - RSSI`, com `Pt` a potência de transmissão (dBm), `Gt` e `Gr` os ganhos das antenas (dBi) e `Lt` e `Lr` as perdas de cabo e conector (dB). Repare no sinal: RSSI é negativo, então a perda medida é positiva.
- Taxa de entrega: `PDR = recebidos / enviados`.
- Expoente do ambiente: `n = (PL_med - PL_ref) / (10*LOG10(d))`, ou melhor, a **inclinação** da reta que melhor ajusta `PL_med` contra `10*LOG10(d)` (função `SLOPE` em ambas as planilhas).

## Exemplo resolvido (dados de exemplo)

Configuração: 915 MHz, `Pt = 14 dBm`, `Gt = Gr = 2 dBi`, perdas de cabo `Lt = Lr = 0,5 dB` (total 1 dB), SF12 e banda de 125 kHz (sensibilidade de cerca de -137 dBm, do Módulo 2). O termo `Pt + Gt + Gr - Lt - Lr = 14 + 2 + 2 - 1 = 17 dB`.

| Ponto | `d` (km) | RSSI medido (dBm) | `PL_med = 17 - RSSI` (dB) | `PL_fs = 91,7 + 20 log10(d)` (dB) | Perda excedente (dB) |
|---|---|---|---|---|---|
| P1 | 0,5 | -78 | 95 | 85,7 | 9,3 |
| P2 | 1 | -86 | 103 | 91,7 | 11,3 |
| P3 | 2 | -97 | 114 | 97,7 | 16,3 |
| P4 | 3 | -104 | 121 | 101,2 | 19,8 |
| P5 | 5 | -113 | 130 | 105,7 | 24,3 |
| P6 | 8 | -122 | 139 | 109,8 | 29,2 |

**Leitura.** A perda extra **cresce com a distância** (de 9 dB a 0,5 km para 29 dB a 8 km): não é um erro fixo de cabo, é o ambiente. Ajuste de `n`: entre P2 (1 km, 103 dB) e P6 (8 km, 139 dB), a inclinação é `(139 - 103) / (10 x log10(8)) = 36 / 9,03 = 3,99`, ou seja, **`n` de cerca de 4** e `PL_ref` de 103 dB a 1 km (11 dB acima do espaço livre). Confere com os outros pontos: 3 km prevê `103 + 3,99 x 10 x log10(3) = 103 + 19 = 122` (medido 121), e 5 km prevê `103 + 27,9 = 130,9` (medido 130). É o caso "urbano com obstruções fortes" da tabela do Módulo 2.

**Alcance útil prometido pelo modelo local.** Com sensibilidade de -137 dBm e uma margem de fading de 10 dB (escolha sua, Módulo 2, Aula 8), o RSSI mínimo aceitável é `-137 + 10 = -127 dBm`. A perda máxima é `PL_max = 17 - (-127) = 144 dB`. Com o modelo ajustado, `103 + 39,9 x log10(d) = 144`, então `log10(d) = 41 / 39,9 = 1,03` e `d = 10,7 km`. O espaço livre "prometeria" `91,7 + 20 log10(d) = 144`, `d` de 412 km, uma fantasia. **A diferença entre 412 e 10,7 km é a razão de a campanha existir.**

**O que o resultado decide:** o critério de sucesso da Aula 1 ("mensagem entre a sala e o morro X") só é atendido se `d` até o morro for menor que cerca de 10 km **nas condições medidas**. Se o morro está a 14 km, o projeto precisa de mais altura, um nó intermediário, uma antena melhor, ou um SF mais alto (mais alcance, menos taxa, Módulo 8), e **nunca** de mais potência sem checar a conformidade legal (Aula 11).

**Cuidado com o que a conta esconde:** o RSSI que o nó reporta é uma leitura do chip, com erro de alguns dB; a linha de visada pode falhar em um ponto e não em outro (Fresnel, Módulo 2, Aula 3); e medir a 2 m do chão dá números piores que medir na altura de instalação. O exemplo acima tem seis pontos: para uma decisão, use dezenas.

## Testes além do alcance

Cada teste precisa de um **critério de aprovação** escrito antes:

| Teste | Como | Critério (exemplo, defina o seu) |
|---|---|---|
| **Taxa de entrega** | 100 mensagens em um enlace fixo, em horas diferentes | PDR de pelo menos 90% |
| **Latência** | Tempo de entrega de mensagens curtas | Compatível com o SF usado (o tempo no ar do Módulo 8 é o piso) |
| **Recuperação** | Reiniciar o gateway, cortar a internet, cortar a energia de um nó | Tudo volta sem intervenção em N minutos |
| **Energia** | Uma semana, registrando a tensão | A bateria nunca abaixo do mínimo, inclusive na semana pior de sol |
| **Ocupação do ar** | `ChUtil` e `AirUtilTX` com a rede em uso normal | Abaixo dos limiares que você definiu (Módulo 9, Aula 3) |
| **Estresse** | Todos os nós enviando ao mesmo tempo | A rede degrada com elegância, sem colapsar |

## Documentar a rede

Uma rede sem documentação é uma rede que só você entende, e que você mesmo esquece em seis meses. O que escrever (um repositório Git, como você já faz com código, é a forma natural):

1. **README da rede:** objetivo, regime legal, homologação de cada equipamento (com o número do certificado), contatos.
2. **Inventário de nós:** identificador, localização, altura, antena, versão de firmware, versão de software, data de instalação, onde está o backup da chave, foto.
3. **Configuração versionada:** arquivos de configuração (Meshtastic exportado, `config` do Reticulum, unidades systemd, scripts). **Nunca commite chaves, senhas nem identidades**; guarde-as à parte e cifradas.
4. **Diagrama** da topologia e do fluxo pela fronteira do gateway (Aula 8).
5. **Registro de medições:** a planilha desta aula, o mapa e as condições.
6. **Procedimentos:** instalar um nó, trocar um firmware, restaurar um nó a partir do backup, o que fazer em cada falha (Aula 10).
7. **Registro de mudanças** (*changelog*): data, o quê, quem, por quê. Ele responde "o que mudou desde que funcionava".

## Entregável

1. **Planilha de campanha** com pelo menos 10 pontos reais, `PL_med`, `PL_fs`, perda excedente e o `n` ajustado.
2. **Relatório de uma página:** alcance útil calculado com o `n` do seu ambiente, comparado com o orçamento teórico do Módulo 2 e com o critério de sucesso da Aula 1.
3. **Plano de testes** com critérios e os resultados de cada teste.
4. **Repositório de documentação** com os sete itens acima.

## Checklist da etapa

- [ ] Medi o SWR das antenas antes da campanha.
- [ ] Mudei uma variável por vez e registrei as condições de cada ponto.
- [ ] Calculei perda medida, perda em espaço livre e perda excedente para cada ponto.
- [ ] Ajustei o `n` do meu ambiente e calculei o alcance útil com margem.
- [ ] Rodei os testes de recuperação, energia e ocupação do ar.
- [ ] Nenhuma chave está no repositório.

## Resumo

- O orçamento de enlace é o teto; a campanha mede a perda extra e o expoente `n` do seu ambiente. No exemplo, `n` de cerca de 4 e 11 dB extra a 1 km levam o alcance de 412 km (espaço livre) para cerca de 10,7 km.
- Método: uma variável por vez, várias amostras por ponto, condições registradas, SWR das antenas conferido antes.
- Planilha: perda medida `Pt + Gt + Gr - Lt - Lr - RSSI`, perda em espaço livre `20 log10(d) + 20 log10(f) + 32,44`, excedente e inclinação (`SLOPE`) contra `10 log10(d)`.
- Testes além do alcance: entrega, latência, recuperação, energia, ocupação do ar e estresse, cada um com critério escrito antes.
- Documentação: README, inventário, configuração versionada (sem segredos), diagrama, medições, procedimentos e changelog.

## Para aprofundar

- [ ] [Orçamento de enlace (Módulo 2, Aula 8)](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md): a conta completa e a sensibilidade de cada SF.
- [ ] [Alcance real, antena e erros comuns (Módulo 8, Aula 8)](../08%20-%20LoRa%20e%20LoRaWAN/08%20-%20Alcance%20Antena%20e%20Erros%20Comuns.md): método de teste de alcance e a lista de erros de campo.
- [ ] [Range Test Module (Meshtastic, documentação oficial)](https://meshtastic.org/docs/configuration/module/range-test/) (Meshtastic): o módulo de teste, o CSV com posição e os intervalos recomendados, como citado no Módulo 9.
- [ ] [Meshtastic Site Planner](https://meshtastic.org/docs/software/site-planner/) (Meshtastic): previsão de cobertura a partir de terreno, para comparar com as suas medições (a documentação manda validar com teste real).
- [ ] [Using Reticulum on Your System (manual oficial)](https://reticulum.network/manual/using.html) (Reticulum): `rnprobe` e `rnstatus` como ferramentas de medição.

[Próxima aula: Operação, manutenção e contingência](./10%20-%20Operacao%20e%20Contingencia.md)
