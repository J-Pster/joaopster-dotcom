[Voltar ao módulo](./README.md)

# Aula 5: Decodificadores em Rust, e como ler, compilar e implantar um

*Pergunta que esta aula responde: por que projetos de rádio em tempo real (decodificadores de sinal, pilhas de rede) aparecem cada vez mais escritos em Rust, o que isso realmente prova, e como eu, desenvolvedor, leio, compilo para ARM e instalo um deles como serviço no Raspberry Pi?*

> Verificado em setembro de 2026 em blogs oficiais do Google e nos repositórios e documentações citados. **Sobre a palavra "migram":** não encontrei uma fonte que meça uma migração geral de decodificadores de rádio para Rust. O que existe são projetos reais em Rust, uma evidência forte sobre segurança de memória (do Android, não de rádio) e razões técnicas. A aula separa as três coisas.

## O problema: o decodificador é um programa de tempo real que lê dados não confiáveis

No [Módulo 6, Aula 2](../06%20-%20SDR%20-%20Software%20Defined%20Radio/02%20-%20Amostras%20IQ%20Amostragem%20e%20ADC.md) você viu que um SDR entrega um fluxo de amostras I/Q. Um RTL-SDR a 2,4 milhões de amostras por segundo, com 8 bits por componente (dois bytes por amostra), gera `2.400.000 x 2 = 4,8 MB/s`, sem parar. O decodificador precisa consumi-los tão rápido quanto chegam, senão o buffer estoura e amostras se perdem.

**Orçamento de tempo.** Em um núcleo de 1,5 GHz, cada amostra tem `1.500.000.000 / 2.400.000 = 625` ciclos de processador para tudo: converter, filtrar, demodular, sincronizar, decodificar. Em um Pi Zero 2 W (1 GHz), `1.000.000.000 / 2.400.000 = 417` ciclos por amostra. Um laço em Python puro por amostra não cabe nessa conta. O NumPy resolve o que se vetoriza (FFT, filtros, [Módulo 6, Aula 3](../06%20-%20SDR%20-%20Software%20Defined%20Radio/03%20-%20FFT%20Waterfall%20Decimacao%20e%20Demodulacao.md)); o que tem **estado por amostra** (recuperação de relógio de símbolo, máquinas de estado de protocolo) é difícil de vetorizar.

Além do tempo, há a **natureza da entrada**: o decodificador transforma bytes vindos do ar, de um transmissor que você não controla, em estruturas em memória. Esse é o desenho clássico de vulnerabilidade: um comprimento errado no quadro, um índice fora do vetor.

## Os argumentos para Rust, um por um

| Argumento | O que é | Evidência |
|---|---|---|
| **Segurança de memória** | O compilador impede acesso fora dos limites, uso após liberação e corrida de dados em código seguro (`safe`) | Dados do Android, abaixo |
| **Desempenho previsível** | Compila para código de máquina, sem coletor de lixo: sem pausas inesperadas no meio de um fluxo de amostras | Propriedade da linguagem; não medi nenhum benchmark nem confirmei um em fonte confiável |
| **Binário único** | `cargo build --release` gera um executável, fácil de copiar e de rodar como serviço | Aula, seção de implantação |
| **Embarcado** | Pode ser compilado sem biblioteca padrão (`no_std`) para microcontroladores | O crate `mfsk-core` declara suporte a `no_std` em MCUs |
| **Cross-compilação** | Um alvo (`target`) e um linker geram binário ARM a partir do seu PC | Seção abaixo |

**Evidência sobre segurança de memória (fonte: Google).** A equipe do Android publicou em setembro de 2024 que as vulnerabilidades por segurança de memória caíram de **76% em 2019 para 24% em 2024** enquanto o código novo passou a ser escrito em linguagens seguras (Rust entre elas); a média da indústria, segundo o mesmo texto, é de cerca de 70%. Em novembro de 2025, o Google informou que em 2025 elas ficaram abaixo de 20% do total, estimou uma densidade de cerca de **0,2 vulnerabilidade por milhão de linhas de Rust contra cerca de 1.000 por milhão em C e C++** ("redução de mais de 1000 vezes"), e que mudanças em Rust tiveram uma taxa de reversão quatro vezes menor e gastaram 25% menos tempo em revisão. **Ressalva importante:** são dados do sistema Android, uma base grande e específica, e a estimativa de densidade em Rust vem de poucos casos (uma vulnerabilidade potencial encontrada e corrigida antes do lançamento, em cerca de 5 milhões de linhas). Não são medições de decodificadores de rádio. O argumento por analogia é razoável (um decodificador também lida com entrada hostil), mas é analogia.

**O que o Rust não faz.** Ele não corrige erro de lógica de DSP: um filtro errado continua errado, com segurança. Código `unsafe` (necessário em FFI com bibliotecas C, como drivers de SDR) volta a ser responsabilidade sua. E o custo é real: a curva de aprendizado do compilador e, em alguns projetos, exigência de versão instável (o FutureSDR, abaixo, exige o Rust *nightly*, segundo a documentação de instalação dele).

## Projetos reais em Rust (todos confirmados nos repositórios)

| Projeto | O que é | Observações honestas |
|---|---|---|
| [`rsadsb/dump1090_rs`](https://github.com/rsadsb/dump1090_rs) e `adsb_deku` | "Tradução para Rust" do popular `dump1090` (demodulação de ADS-B a 1090 MHz), com suporte a vários SDR via SoapySDR (RTL-SDR, HackRF, USRP, BladeRF) | Versão mínima do Rust 1.74.0 no README. O original é em C; este é um projeto de terceiros |
| [FutureSDR](https://www.futuresdr.org) | Runtime assíncrono de SDR em Rust (fluxogramas de blocos, como o GNU Radio), com portabilidade Linux, Windows, macOS, WASM, Android e embarcado | O README o chama de **experimental** e de "estado inicial de desenvolvimento"; exige Rust nightly |
| Seify (Bastian Bloessl, DF1BBL) | Biblioteca de abstração de hardware SDR em Rust, apresentada na SDR Academy 2023 | Vídeo abaixo; a palestra confirma que o projeto existe |
| [`jl1nie/mfsk-core`](https://github.com/jl1nie/mfsk-core) | Biblioteca em Rust dos modos da família WSJT: FT8, FT4, FST4, WSPR, JT9, JT65, Q65; roda em desktop, WASM, Android/iOS e MCUs `no_std` | O README diz que é reimplementação dos algoritmos do WSJT-X, que **continua a implementação de referência** |
| [`ibelinp/ft8`](https://github.com/ibelinp/ft8) | Decodificador FT8/FT4 em Rust puro, "porte" do `ft8_lib` (C, licença MIT), com uma dependência | Um porte |
| [`HagaleTechnologies/pancetta`](https://github.com/HagaleTechnologies/pancetta) | Estação FT8 autônoma em Rust, com TUI e controle CAT | Usa o `ft8_lib` em C **por FFI ao lado** de um decodificador Rust próprio; o README afirma 11,6% mais decodificações que o `ft8_lib` em um corpus de 1.201 arquivos, **medição do próprio autor**, não independente |
| [`ReticulaLabs/reticulum-sdk`](https://github.com/ReticulaLabs/reticulum-sdk) e `reticulum-router` | SDK e roteador do Reticulum em Rust, com `RNodeInterface` por serial e uma `LoRaInterface` **experimental** por SPI (SX127x, SX126x, LR1121) | Ver Aula 7; projeto de terceiros do protocolo do Módulo 10 |
| [`jrl290/Reticulum-rust`](https://github.com/jrl290/Reticulum-rust) | Porte do Reticulum Python (versão 1.1.3) para Rust, com interfaces TCP, UDP, serial e RNode | Interopera com nós Python e com o Sideband, segundo o README |

A leitura honesta desta tabela: há **muita atividade** de reimplementação em Rust, sobretudo de portes de código C e Python existente. Nenhuma das referências que li trata a versão em Rust como substituta do programa de referência (WSJT-X, Reticulum em Python). Se isso é uma "migração" ou "várias pessoas experimentando" eu não consigo provar com essas fontes.

Veja: [SDRA'23, Bastian Bloessl (DF1BBL): Seify, A Rusty SDR Hardware Abstraction Library](https://www.youtube.com/watch?v=NytXsgbv-PE) (Software Defined Radio Academy).

## Como ler um decodificador (roteiro para um desenvolvedor)

Use um projeto pequeno e de fluxo claro. O `dump1090_rs` serve: o protocolo ADS-B ([Módulo 6, Aula 9](../06%20-%20SDR%20-%20Software%20Defined%20Radio/09%20-%20Sinais%20Legais%20e%20Laboratorio.md)) é curto.

1. **Clone e leia o README.** Ele lista dependências (o `dump1090_rs` pede bibliotecas e drivers do SoapySDR e o `libclang-dev`) e as opções de linha de comando (`--host`, `--port`, `--driver`, valores padrão no README: `127.0.0.1` e `30002`).
2. **Leia `Cargo.toml`.** Lista as dependências (*crates*), a versão do Rust e o perfil de compilação. É o `package.json` do Rust.
3. **Ache o ponto de entrada:** `src/main.rs`. Siga a cadeia: entrada de amostras, conversão, detecção de preâmbulo, demodulação, verificação de CRC, saída em TCP.
4. **Procure `unsafe`.** `grep -rn "unsafe" src/` mostra onde a segurança de memória é garantida por você, não pelo compilador. Em um decodificador, isso costuma estar na FFI com o driver.
5. **Rode os testes** com `cargo test`, se existirem. Testes com capturas reais de sinal são o melhor documento de comportamento.
6. **Compare com o Módulo 6:** onde está o que você fez em Python (FFT, decimação, demodulação)? Onde o laço por amostra virou código compilado?

Comandos que qualquer projeto Rust aceita (ferramenta `cargo`): `cargo build --release` (compila otimizado), `cargo run --release -- <opções>`, `cargo test`.

## Compilar para o Raspberry Pi

Três caminhos:

**1) Compilar no próprio Pi.** Simples e sem problema de bibliotecas C. Lento em um Zero 2 W e pesado em memória para projetos grandes; ótimo para o Pi 4 ou 5.

**2) Cross-compilação com `rustup` e um linker.** No seu PC Linux:

```
rustup target add aarch64-unknown-linux-gnu
sudo apt install gcc-aarch64-linux-gnu
```

e no arquivo `.cargo/config.toml` do projeto:

```
[target.aarch64-unknown-linux-gnu]
linker = "aarch64-linux-gnu-gcc"
```

depois `cargo build --release --target aarch64-unknown-linux-gnu`. O binário fica em `target/aarch64-unknown-linux-gnu/release/`. Ele serve para **Raspberry Pi 3, 4, 5 e Zero 2 W com o sistema de 64 bits** (segundo um guia técnico de 2025 sobre cross-compilação para o Pi); para sistema de **32 bits**, o alvo é `armv7-unknown-linux-gnueabihf` com o linker `arm-linux-gnueabihf-gcc` (segundo o material de engenharia Rust da Microsoft). O manual do `rustup` explica: `rustup target add` instala só a biblioteca padrão do alvo, e é preciso um linker à parte. Os comandos de `apt` são do Debian e Ubuntu; em outras distribuições, o pacote tem outro nome.

**Cuidado com bibliotecas C.** Se o projeto depende de uma biblioteca em C (o SoapySDR do `dump1090_rs`, por exemplo), o seu PC precisa das versões dessa biblioteca **compiladas para ARM**, e o `bindgen` pode exigir um `libclang` compatível. Relatos técnicos dizem que essa configuração manual é frágil. Não testei o `dump1090_rs` em cross-compilação; se falhar, compile no Pi.

**3) `cross` (contêineres).** A ferramenta `cross` (repositório `cross-rs/cross`) tem a mesma interface do `cargo` e roda a compilação dentro de um contêiner Docker ou Podman com toda a cadeia de ferramentas: `cargo install cross --git https://github.com/cross-rs/cross` e depois `cross build --release --target aarch64-unknown-linux-gnu`. Exige Docker (versão 20.10 ou superior) ou Podman (3.4.0 ou superior), segundo o README.

**Instalar o binário no Pi:**

```
scp target/aarch64-unknown-linux-gnu/release/nome_do_programa usuario@gw-sala:/tmp/
```

e no Pi, mover para `/usr/local/bin/` com `sudo`, e `chmod +x`. Confira com `file` (no PC) que o binário é "ELF 64-bit ... ARM aarch64".

**Perfil de release enxuto** (opções do `Cargo.toml` citadas pelo material da Microsoft: `lto = true`, `codegen-units = 1`, `panic = "abort"`, `strip = true`): binário menor e mais rápido, ao custo de compilar mais devagar.

## Rodar como serviço systemd

Com o modelo da [Aula 3](./03%20-%20Preparar%20o%20Raspberry%20Pi.md), para o `dump1090_rs` (opções confirmadas no README):

```
[Unit]
Description=ADS-B demodulator (dump1090_rs)
After=network-online.target

[Service]
User=adsb
ExecStart=/usr/local/bin/dump1090_rs --host 127.0.0.1 --port 30002 --driver rtlsdr
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Ajustes que o systemd oferece para reduzir o dano de uma falha do decodificador (nomes de opções do manual `systemd.exec`; **confira a lista e o significado na sua versão**): `NoNewPrivileges=`, `ProtectSystem=`, `ProtectHome=`, `PrivateTmp=`. O RTL-SDR precisa de permissão de USB para o usuário do serviço (regras `udev`; confira a documentação do seu driver). O serviço só **escuta** (recepção, [Módulo 6, Aula 6](../06%20-%20SDR%20-%20Software%20Defined%20Radio/06%20-%20RX%20e%20TX%20e%20a%20Lei.md)); nenhum transmissor está envolvido.

## Entregável: relatório de leitura e binário implantado

1. **Relatório de leitura** (uma página) de um projeto Rust de rádio que você escolheu: dependências, ponto de entrada, fluxo das amostras até a saída, número de blocos `unsafe` e por quê.
2. **Binário ARM** compilado (no Pi ou por cross-compilação), com o comando exato e a versão do Rust (`rustc --version`).
3. **Unidade systemd** do binário, ativa e reiniciando sozinha.
4. **Uma frase** com a sua conclusão, em números, sobre Python versus Rust para o seu caso (orçamento de ciclos por amostra, do início da aula).

## Checklist da etapa

- [ ] Sei calcular o orçamento de ciclos por amostra e por que Python puro por amostra não cabe.
- [ ] Sei separar o que a evidência do Android prova (segurança de memória) do que não prova (migração do rádio).
- [ ] Compilei um projeto Rust no Pi ou por cross-compilação.
- [ ] Sei onde o `unsafe` aparece e por que importa.
- [ ] O binário roda como serviço com `Restart=on-failure`.

## Resumo

- Um decodificador precisa vencer um orçamento de ciclos por amostra (417 a 625 ciclos por amostra a 2,4 MS/s) e lê entrada hostil vinda do ar.
- Evidência forte, do Android: memória segura derrubou vulnerabilidades de 76% (2019) para menos de 20% (2025); densidade estimada de cerca de 1000 vezes menor em Rust. Não é medição de rádio.
- Projetos reais em Rust: dump1090_rs, FutureSDR (experimental), mfsk-core, ft8, pancetta, reticulum-sdk e Reticulum-rust. Quase todos portes; a referência continua sendo WSJT-X e Reticulum em Python.
- Cross-compilar: `rustup target add aarch64-unknown-linux-gnu`, linker `aarch64-linux-gnu-gcc` e `cargo build --release --target ...`, ou a ferramenta `cross` com contêiner; bibliotecas C complicam.
- Implantar: `scp` do binário e unidade systemd com `Restart=on-failure`.

## Para aprofundar

- [ ] [Rust in Android: move fast and fix things](https://blog.google/security/rust-in-android-move-fast-fix-things/) (Google, novembro de 2025): os números de 2025 e as ressalvas sobre a estimativa.
- [ ] [Eliminating Memory Safety Vulnerabilities at the Source](https://security.googleblog.com/2024/09/eliminating-memory-safety-vulnerabilities-Android.html) (Google Security Blog, setembro de 2024): a queda de 76% para 24% e o argumento do "Safe Coding".
- [ ] [rsadsb/dump1090_rs](https://github.com/rsadsb/dump1090_rs) (rsadsb): o projeto usado no roteiro de leitura, com as opções de linha de comando.
- [ ] [Cross-compilation (The rustup book)](https://rust-lang.github.io/rustup/cross-compilation.html) (rustup): `rustup target add` e por que o linker é separado.
- [ ] [cross-rs/cross](https://github.com/cross-rs/cross) (cross-rs): cross-compilação com contêiner e a tabela de alvos suportados.
- [ ] [SDRA'23: Seify, A Rusty SDR Hardware Abstraction Library](https://www.youtube.com/watch?v=NytXsgbv-PE) (Software Defined Radio Academy): palestra sobre abstração de hardware SDR em Rust (título e canal confirmados; conteúdo não assistido).

[Próxima aula: Primeiro nó Meshtastic](./06%20-%20Primeiro%20No%20Meshtastic.md)
