[Voltar ao módulo](./README.md)

# Aula 11: Legalidade e boas práticas finais

*Pergunta que esta aula responde: com a rede montada, qual é o roteiro curto, em ordem, para conferir se cada nó e cada serviço está no regime legal certo e em uso responsável do espectro, sem reaprender os módulos anteriores?*

> **Aviso.** Esta aula é um roteiro de conferência que aponta para o que o curso já ensinou; não é parecer jurídico, e as regras mudam. Tudo o que segue foi verificado nas aulas indicadas (setembro de 2026) e, quando uma regra dependia de texto que não consegui confirmar, o texto original diz "não confirmado", e aqui também. **Antes de ligar um transmissor**, confira o ato vigente no site da Anatel e o certificado do seu equipamento. Nada aqui orienta contornar regra. Se a sua rede atende terceiros, cobra por serviço, ou passa dos limites de um projeto pequeno de uso próprio, consulte a Anatel e um profissional habilitado.

## Por que uma aula só de conferência

Erro legal em rádio é ao mesmo tempo técnico e humano: quem transmite fora das regras prejudica outras pessoas (interferência), não só a si. E a lei não é uniforme: depende do **regime** em que cada nó opera. Um mesmo Raspberry Pi pode hospedar um serviço amador (FT8 com PTT, Aula 4) e um nó de rede privada cifrada (Reticulum, Aula 7), **e os dois regimes são incompatíveis no mesmo transmissor**. A conferência faz você decidir o regime **por nó**, não por projeto.

## Os quatro regimes que o curso ensinou

| Regime | Quem pode | Conteúdo | Equipamento | Onde no curso |
|---|---|---|---|---|
| **Radioamador** | Quem tem COER, classe A, B ou C e indicativo | **Aberto, identificado, sem criptografia e sem fim comercial**; sem privacidade | O operador responde pela estação; o produto é homologado por declaração de conformidade (Módulo 8, Aula 4); potência mínima necessária dentro dos limites da classe | [M5, Aulas 2, 3 e 5](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md) |
| **Radiação restrita** (LoRa, Wi-Fi, ISM) | Qualquer pessoa, **sem licença de usuário** | Pode ser cifrado; **caráter secundário**: sem proteção contra interferência e sem poder causar | **Produto certificado e homologado pela Anatel**; antena e potência fixadas pela certificação | [M5, Aula 6](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md), [M8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md) |
| **Rádio do Cidadão (PX)** | Cadastro simples, sem prova | Linguagem clara, compartilhado; **não é privado** | Equipamento com a certificação exigida | [M5, Aula 6](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md) |
| **Serviço de telecomunicações a terceiros** | Prestadora autorizada | Fora do escopo do curso | Fora do escopo | Consulte a Anatel |

A faixa de **915 a 928 MHz é ao mesmo tempo** faixa de radiação restrita e faixa amadora (33 cm). **O que decide o regime não é a faixa: é quem opera, com que equipamento e com que conteúdo.** Um nó LoRa cifrado com equipamento certificado é radiação restrita; o mesmo nó operado sob o seu indicativo, com conteúdo cifrado, seria irregular no serviço amador.

## As cinco perguntas, por nó

Para cada transmissor da sua rede, responda por escrito, na ordem:

**1. Em que regime este nó opera?** Escolha um só e registre. Se for **radioamador**, você precisa do indicativo, da classe e da faixa; se for **radiação restrita**, do produto certificado. Se a resposta é "os dois", separe em dois nós.

**2. O equipamento é homologado?** Para radiação restrita, sim, é exigência (Resolução 680/2017 e a homologação prévia da Resolução 715/2019, segundo o Módulo 8). **Placas de desenvolvimento importadas normalmente não têm certificação Anatel** (Módulo 8, Aula 3: não confirmei a de nenhum modelo). A via de **declaração de conformidade para uso próprio** existe para a unidade importada sem fim comercial, com limitações (Módulo 8, Aula 4): confira o manual vigente da Anatel. O Raspberry Pi e outros dispositivos de uso geral têm os certificados de conformidade que o fabricante publica; a homologação específica da Anatel de cada modelo eu não confirmei.

**3. O conteúdo é cifrado?** Se sim, **não é serviço amador** (Ato 926, 6.11, Módulo 5, Aula 3). O Meshtastic cifra por canal (e o canal padrão tem chave pública, o que não é privacidade) e o Reticulum cifra por desenho: só com radiação restrita (Módulo 9, Aula 9; Módulo 10, Aula 8).

**4. A antena e a potência são as do certificado?** Em radiação restrita, o produto é certificado como conjunto: a antena comercializada com ele, e potência dentro do certificado (Resolução 680/2017, arts. 4 a 6, no Módulo 8). Trocar por antena de mais ganho ou por amplificador **tira você da conformidade**, e o que vale é o certificado. No texto do Ato 14448 (item 10), o teto de 1 W é de **potência de pico na saída do transmissor**, não de EIRP, e antena com ganho direcional acima de 6 dBi obriga a reduzir a potência do transmissor dB a dB pelo excesso ([Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). Um gateway montado por conta própria (por exemplo, com Raspberry Pi e um concentrador) **não herda** a homologação do módulo LoRa. Não improvise: confira o certificado.

**5. Há gateway ou serviço a terceiros?** Um gateway em radiação restrita é uma escolha técnica permitida pelo regime, dentro dos requisitos do equipamento. **Sob licença de radioamador, a ponte de tráfego entre redes é vedada** (Res. 777, Módulo 10, Aula 5), e o serviço amador não pode ter fim comercial. Servir tráfego de terceiros ou cobrar pelo acesso muda a natureza do que você faz.

## Aplicando aos componentes do projeto

| Componente | Regime provável | O que conferir |
|---|---|---|
| Nó LoRa Meshtastic com canal privado cifrado | Radiação restrita | Homologação, região `ANZ` (não `US`), antena do certificado, MQTT sem publicar a posição |
| RNode com Reticulum em rede privada | Radiação restrita | Homologação, parâmetros de rádio dentro da faixa, transporte e gateway |
| FT8, packet, APRS com Raspberry Pi e PTT | Radioamador | Licença, faixa e modo da classe, identificação, **sem cifra**, dummy load nos testes (Aula 4) |
| LoRa sob o seu indicativo, aberto | Radioamador | Conteúdo em claro, identificação, sem fins comerciais (Módulo 5, Aula 5) |
| Wi-Fi e Bluetooth do Pi, Ethernet | Radiação restrita (Wi-Fi) e cabeamento | Uso normal do produto certificado |
| Receber sinais com RTL-SDR no Pi (Aula 5) | Recepção | Receba sinais abertos; **não decodifique celular ou cifrado nem divulgue o conteúdo alheio** ([M6, Aula 6](../06%20-%20SDR%20-%20Software%20Defined%20Radio/06%20-%20RX%20e%20TX%20e%20a%20Lei.md)) |

## O que continua incerto (do que o curso não conseguiu confirmar)

Para ser honesto com você mesmo, três pontos que o curso deixou abertos e que **você deve resolver com a fonte oficial antes de depender**:

1. **O enquadramento de LoRa de canal único fixo de 125 kHz** no item 10 do Ato 14448, depois da revogação do subitem 10.3.4.4 em 1º de outubro de 2025: nem o caminho de salto nem o de 500 kHz parecem cobri-lo de forma clara (Módulo 8, Aula 4). É leitura minha, não posição da Anatel.
2. **Como o tempo médio de ocupação por frequência de salto (0,4 s em 14 s) se aplica a cada pacote** de LoRa em SF11 e SF12. Já está confirmado, pelo texto do Ato, que **não há limite de duty cycle no item 10** (o "2 s por hora" vem do item 6.2, só para sinais de controle); o que não se confirmou é a aplicação daquela ocupação média ao LoRaWAN.
3. **A região `BR_902`** (902 a 907,5 MHz) do Meshtastic vem de fonte secundária (um pull request do firmware). Os valores de potência e a ausência de limite de duty cycle coincidem com o que o Ato traz no item 10 (Módulo 8, Aula 4), mas a escolha de região continua apoiada em documentação do projeto (Módulo 9, Aula 9).

## Boas práticas finais (o espectro é de todos)

Não são exigências legais separadas; são o que mantém a sua rede uma boa vizinha e reduz a chance de um problema:

- **Menos potência e menos tempo no ar.** Use a mínima necessária. Altura e visada valem mais que potência (Módulo 2). Tráfego automático (posição, telemetria) só onde importa.
- **Não use papéis de infraestrutura onde não há necessidade** (`ROUTER` no telhado de casa, Módulo 9, Aula 4). Um nó a mais deve resolver uma falha medida.
- **Não publique a mesh na internet sem querer:** MQTT público publica a posição de todos os nós (Aula 6).
- **Cessar diante de interferência.** Se o seu sistema causar ou receber reclamação, desligue e investigue. Em radiação restrita você não tem proteção nem pode causar interferência.
- **Registre e mantenha a documentação** (Aula 9): homologação, versão, configuração, quem opera. É a sua defesa se for questionado.
- **Atualize seu conhecimento das regras**: elas mudaram em 2025 (por exemplo, o Ato 14158 revogou um subitem) e vão mudar de novo. Reveja a conformidade a cada mudança de equipamento ou de configuração.
- **Comunidade.** Redes compartilhadas funcionam por consenso: siga as configurações locais para não criar uma ilha (Módulo 9). Clubes e a LABRE são fonte de orientação (Módulo 5, Aula 9).

## Segurança física: o recapitulativo curto

Erros perigosos que o curso repetiu e que vale reler antes de cada instalação:

- **Rede elétrica e mastro** (Módulo 4, Aula 6): distância, aterramento, trovoada, duas pessoas, profissional para estrutura alta.
- **Transmissão sem antena ou carga** (Módulo 4, Aula 7 e Aula 4 deste módulo): destrói o estágio de saída e emite lixo. Teste com carga fictícia.
- **Tensão nos pinos** (Aula 2): 3,3 V, nunca 5 V direto; nunca acionar carga pelo GPIO.
- **Bateria de lítio** (Aula 2): BMS, fusível, sem carga abaixo de 0 graus C sem proteção, sem calor excessivo.
- **Exposição a RF** (Módulo 1, Aula 8): baixa com estes módulos, mas não deixe a ponta da antena colada em pessoas de forma contínua.

## Limite entre o que você faz e o que é profissional

Você pode, com este curso: projetar, montar e operar uma rede pequena de uso próprio, com equipamento certificado de baixa potência, em radiação restrita ou sob licença amadora se for radioamador, com instalações de baixo risco. **Precisa de profissional ou de autorização específica:** torre ou mastro alto perto de rede elétrica, SPDA e aterramento de edificação (NBR 5419), instalação elétrica de potência (inversores, 127 ou 220 V), amplificadores e antenas acima do certificado, serviço prestado a terceiros ou cobrado, e comunicação de missão crítica.

## Entregável: ficha de conformidade

Uma tabela (uma linha por nó e por transmissor), com colunas: identificador, modelo, **regime**, número do certificado ou declaração de conformidade, banda e frequência, potência e antena (as do certificado), cifra (sim ou não), indicativo (se amador), data da conferência e a **fonte oficial consultada** (com a data). Anexe as três perguntas em aberto acima com a sua resolução, se você as resolveu.

## Checklist da etapa

- [ ] Cada nó tem um regime escrito e coerente com o conteúdo (cifra só em radiação restrita).
- [ ] Cada equipamento tem o número do certificado ou o registro da declaração de conformidade, ou está fora de operação.
- [ ] A antena e a potência são as do certificado.
- [ ] Sei o que é permitido e o que não é para gateway, MQTT e serviço a terceiros.
- [ ] Conferi os três pontos incertos com a fonte oficial ou decidi não depender deles.
- [ ] Sei o meu limite entre hobby e profissional.

## Resumo

- O regime se decide por nó: quem opera, com que equipamento e com que conteúdo, não pela faixa. Radioamador é aberto e sem cifra; radiação restrita aceita cifra mas exige produto certificado e é secundária.
- Cinco perguntas: regime, homologação, cifra, antena e potência do certificado, gateway ou serviço a terceiros.
- Pontos que o curso não confirmou: LoRa de canal fixo depois do Ato 14158, a aplicação da ocupação média por frequência de salto ao LoRaWAN (não há limite de duty cycle no item 10), e a região `BR_902` (fonte secundária).
- Boas práticas: menos potência e tempo no ar, sem MQTT público, cessar diante de interferência, documentar e reconferir a cada mudança de regra ou de equipamento.
- Torre, energia de potência, amplificadores e serviço a terceiros saem do escopo de hobby.

## Para aprofundar

- [ ] [Por que o espectro é regulado (Módulo 5, Aula 1)](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/01%20-%20Por%20que%20o%20Espectro%20e%20Regulado.md): a base legal e quem regula.
- [ ] [Frequências, regulamentação e duty cycle (Módulo 8, Aula 4)](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md): os textos da Anatel lidos, a homologação para uso próprio e o que não foi confirmado.
- [ ] [Segurança, privacidade e legalidade (Módulo 9, Aula 9)](../09%20-%20Redes%20Mesh/09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md): regiões do Meshtastic e o que é cifrado.
- [ ] [Modelo de ameaça, privacidade e legalidade (Módulo 10, Aula 8)](../10%20-%20Reticulum/08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md): o conflito do Reticulum com a regra do radioamador.

[Próxima aula: Fechamento do curso](./12%20-%20Fechamento%20do%20Curso.md)
