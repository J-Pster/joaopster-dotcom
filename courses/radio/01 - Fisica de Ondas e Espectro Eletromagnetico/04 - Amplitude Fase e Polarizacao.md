# Aula 4: Amplitude, fase e polarização

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: além da frequência, que outras propriedades uma onda tem, e por que a orientação do campo elétrico decide se a antena receptora consegue captar o sinal?*

## Por que estas três propriedades

Uma onda senoidal pura é descrita por poucos parâmetros. Já vimos frequência (Aula 3). Faltam **amplitude**, **fase** e **polarização**. Existem três razões para entendê-las agora:

1. Toda informação enviada por rádio é colocada na onda alterando **um ou mais destes parâmetros**: amplitude (AM), frequência (FM) ou fase (PSK). Esse é o tema do módulo 3 (Modulação). Uma onda com amplitude, frequência e fase constantes não carrega informação nenhuma.
2. A fase explica por que dois caminhos diferentes entre transmissor e receptor podem se somar ou se cancelar (multipercurso, desvanecimento).
3. A polarização decide se uma antena receptora casa com a transmissora.

## Amplitude

**Amplitude** é o valor máximo que o campo (ou a tensão, na antena) atinge em um ciclo, medido a partir do zero. Notação: `A`, ou `Vp` (tensão de pico).

Medidas relacionadas para uma senoide:

- **Pico a pico** (`Vpp`): do ponto mais baixo ao mais alto, `Vpp = 2 x Vp`.
- **RMS** (root mean square, valor eficaz): o valor de uma tensão contínua que entregaria a mesma potência numa resistência. Para senoide, `Vrms = Vp / raiz(2) = 0,707 x Vp`.

Para potência numa carga de resistência `R`: `P = Vrms^2 / R`. Isso mostra o fato importante: a **potência é proporcional ao quadrado da amplitude**.

Exemplo resolvido: um transmissor entrega 1 W numa antena de 50 ohms (a impedância padrão de sistemas de rádio, módulo 4).
- `Vrms = raiz(P x R) = raiz(1 x 50) = 7,07 V`
- `Vp = 7,07 x 1,414 = 10 V` de pico (20 V pico a pico).

Se a amplitude do sinal cai à metade, a potência cai a um quarto (6 dB, Aula 5). Se cai a 1/10, a potência cai a 1/100 (20 dB).

Em rádio, a amplitude recebida (e, portanto, a potência) vai de níveis enormes perto do transmissor a valores minúsculos longe (nanovolts). É por essa faixa gigantesca que existe a escala em decibéis (Aula 5).

## Fase

**Fase** diz em que ponto do ciclo a onda está num dado instante. Medimos em **graus** (0 a 360 por ciclo) ou **radianos** (0 a 2 x pi). Uma senoide `sen(2 x pi x f x t + fase)`: a fase desloca a onda no tempo.

Fase só tem sentido de forma **relativa**: fase de A em relação a B. Não existe "fase absoluta" sem uma referência.

Relações úteis:

- Um deslocamento no tempo `dt` corresponde a `fase = 360 x f x dt` graus.
- Um deslocamento em distância `d` (caminho mais longo) corresponde a `fase = 360 x d / lambda` graus. Um caminho `lambda` mais longo produz 360 graus, que equivalem a nenhum deslocamento; meio comprimento de onda produz 180 graus, ou seja, a onda invertida.

### Interferência: o que acontece quando duas ondas se somam

Ondas EM se **superpõem**: no ponto onde se encontram, o campo total é a soma dos campos. Duas ondas de mesma frequência e amplitude `A`, com diferença de fase `phi`, resultam em amplitude `2 x A x |cos(phi / 2)|`:

| Diferença de fase | Amplitude resultante | Potência relativa a uma onda só |
|---|---|---|
| 0 graus (em fase) | 2A | 4 vezes (+6 dB), **interferência construtiva** |
| 120 graus | A | 1 vez |
| 180 graus (oposição) | 0 | 0 (cancelamento), **interferência destrutiva** |

### Exemplo: multipercurso a 2,4 GHz

O sinal chega ao receptor por dois caminhos: direto e refletido numa parede. Se o caminho refletido é mais longo em `d`, a diferença de fase é `360 x d / lambda`.

- A 2,4 GHz, `lambda = 12,5 cm`. Para `d = 6,25 cm` (meio comprimento de onda), a fase é 180 graus: as ondas se cancelam e o sinal desaparece.
- Se você move a antena 6 cm, `d` muda o suficiente para passar de cancelamento a reforço. É por isso que às vezes um Wi-Fi ou um rastreador com sinal fraco melhora ao mover o aparelho alguns centímetros: você saiu de um **nulo** (fading) de interferência. Por ser tão sensível ao centímetro, o efeito é forte em micro-ondas e muito menos perceptível em 7 MHz, onde `lambda` é 43 m.

O desvanecimento por multipercurso volta no módulo 2, com números de ambientes reais.

### Fase e frequência: a ligação

Frequência é a **taxa de variação da fase**: 1 Hz de diferença entre duas ondas faz a fase relativa dar uma volta completa (360 graus) por segundo. Por isso dois rádios com relógios ligeiramente diferentes "derivam" em fase. Receptores precisam reconstruir a fase do sinal (recuperação de portadora, módulos 3 e 6).

## Polarização

### Definição e por que existe

Uma onda EM é transversal (Aula 2): o campo elétrico `E` oscila perpendicularmente à direção de propagação. Mas "perpendicular" ainda deixa infinitas direções (num plano). **Polarização** é a orientação do vetor `E` no plano perpendicular à propagação, e como ela varia no tempo. Por convenção, a polarização de uma onda é definida pela orientação de `E` (o campo `B` fica 90 graus girado).

Ela é determinada pela **antena transmissora**: elétrons balançando na vertical criam `E` vertical; balançando na horizontal, `E` horizontal.

### Tipos

- **Linear:** `E` oscila sempre ao longo da mesma reta. Vertical (antena vertical, como a maioria das portáteis e antenas de carro) ou horizontal (dipolo de fio esticado na horizontal, comum em HF e antenas Yagi de TV, dependendo da instalação).
- **Circular:** `E` gira, dando uma volta por ciclo, mantendo a amplitude. Ocorre quando há duas componentes lineares perpendiculares com a mesma amplitude e defasadas 90 graus. Pode girar no sentido horário (**RHCP**, right-hand circular) ou anti-horário (**LHCP**), visto de quem recebe a onda; o sentido correto de "mão direita" varia entre convenções de engenharia e óptica, então confira a convenção nos datasheets.
- **Elíptica:** caso geral; circular e linear são extremos.

Uma analogia visual: a onda na corda oscilando só na vertical (linear vertical), ou balançando em círculo com a mão (circular).

### Por que a polarização casa ou não com a antena

Uma antena receptora só responde à componente do campo alinhada com sua própria orientação. Antena linear vertical recebendo onda linear na horizontal "vê" a projeção do campo sobre a vertical.

Se o ângulo entre as polarizações é `theta`, a amplitude captada é proporcional a `cos(theta)` e a potência a `cos^2(theta)`. Essa fração é o **fator de perda de polarização**:

| Ângulo entre polarizações | Potência captada | Perda |
|---|---|---|
| 0 graus | 100% | 0 dB |
| 30 graus | 75% | cerca de 1,25 dB |
| 45 graus | 50% | 3 dB |
| 60 graus | 25% | 6 dB |
| 90 graus | 0 na teoria | na prática, 20 a 30 dB ou mais (imperfeições e reflexões deixam passar algo) |

(Cálculo: `10 x log10(cos^2(theta))`; para 30 graus, `cos^2 = 0,75`, `-1,25 dB`. A escala em dB está na Aula 5.)

Entre uma antena **linear e uma circular**, a perda é de 3 dB independentemente do ângulo (metade da potência circular se projeta na reta). Circular contra circular de sentidos opostos (RHCP contra LHCP) é o análogo do 90 graus: em teoria não capta nada.

### Por que isso importa na prática

- **Enlaces fixos:** transmissor e receptor com a **mesma** polarização. Nó vertical falando com gateway vertical funciona bem; um lado deitado (90 graus) pode custar dezenas de dB de sinal, que num enlace de longo alcance é o que separa comunicar de não comunicar.
- **Dispositivos móveis:** o celular na sua mão gira para todo lado, então o sinal chega com polarização aleatória em relação à antena; sistemas móveis toleram e usam **diversidade de polarização**.
- **Satélites:** frequentemente circulares, porque a orientação relativa entre satélite e antena terrestre varia, e um satélite girando ou rolando trocaria o ângulo de uma polarização linear.
- **Reutilização de frequência:** dois sinais na mesma frequência, com polarizações ortogonais (vertical e horizontal, ou RHCP e LHCP), quase não interferem entre si; dobra a capacidade sem gastar mais faixa. É usado em satélites de TV.
- **Reflexões:** em geral, uma reflexão inverte o sentido de uma onda circular (RHCP vira LHCP); por isso antenas circulares como as de GPS rejeitam parte das reflexões. Ao refletir em superfícies, polarizações lineares também podem mudar de forma, dependendo do ângulo (módulo 2).
- **Ionosfera:** a propagação por reflexão ionosférica (HF) e a passagem por ela em frequências mais baixas giram a polarização (rotação de Faraday), então em HF a polarização inicial pouco importa no destino; ver módulo 2.

Regra geral que o curso vai reforçar no módulo 4: **casar polarização** é o primeiro item de checklist de antena.

## Resumo

- Amplitude é o valor de pico do campo; potência é proporcional a amplitude ao quadrado (dobrar a amplitude quadruplica a potência).
- Fase é o ponto do ciclo e só faz sentido relativa; `fase = 360 x d / lambda` para diferença de caminho `d`.
- Ondas se somam: em fase reforçam (+6 dB), em oposição (180 graus) cancelam; a 2,4 GHz meio comprimento de onda são 6,25 cm.
- Amplitude, frequência e fase são os três "botões" que a modulação (módulo 3) usa para colocar informação na onda.
- Polarização é a orientação do campo elétrico; antenas devem ser casadas: perda `cos^2(theta)` (45 graus = 3 dB, 90 graus = quase nada); linear com circular perde 3 dB.

## Para aprofundar

- [ ] [Wave on a String (PhET)](https://phet.colorado.edu/en/simulations/wave-on-a-string) (PhET, Universidade do Colorado): já indicado na Aula 1; aqui serve para variar a amplitude e a frequência e ver o efeito no formato da onda. Não incluí link específico para interferência e polarização porque não consegui confirmar uma URL exata.

[Próxima aula: Decibéis e potência](./05%20-%20Decibeis%20e%20Potencia.md)
