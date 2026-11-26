# Aula 6: Por que receber é mais simples que transmitir, e o que a lei brasileira diz

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que transmitir exige muito mais hardware e regras do que receber, e quais limites legais existem no Brasil para o que você recebe e faz com o que recebe?*

> **Aviso.** Esta aula explica princípios técnicos e resume textos legais lidos nas fontes oficiais (Planalto, Anatel) em setembro de 2026. **Não é aconselhamento jurídico.** Transmitir em radiofrequência no Brasil exige licença, cadastro ou equipamento homologado conforme a faixa (Módulo 5). Onde a interpretação da lei é incerta, digo que é incerta. Em dúvida, consulte a Anatel ou um advogado antes de agir.

## A assimetria física: um erro do receptor prejudica você, um erro do transmissor prejudica todos

Na Aula 1 você viu que o receptor é uma cadeia passiva: capta o que já está no ar. Se o filtro de entrada é ruim, o mixer gera uma imagem ou o ADC satura, o único prejudicado é **quem escuta**: ouve pior. Nenhum sinal extra sai da antena.

No transmissor a energia **sai** pela antena e alcança quem estiver no caminho. Se o transmissor emite um sinal impuro, o problema é dos **outros usuários do espectro**: interferência em serviços de segurança, aviação, celular. Como você viu no Módulo 5 (Aula 1), é por isso que o espectro é regulado e a autorização é exigida de **quem emite**. Toda a complexidade de hardware de um transmissor existe para **limitar o dano que ele causa aos vizinhos**.

## O que um transmissor precisa a mais

**Cadeia de transmissão de um SDR:**

```
amostras I/Q (software) -> DAC -> mixer (sobe para RF) -> filtro
    -> amplificador de potência (PA) -> filtro de harmônicos -> antena
```

**1. Amplificador de potência (PA).** Um receptor trabalha com milésimos de bilionésimo de watt: um sinal de `-100 dBm` é `10^-13 W`. Um transmissor precisa de mW a centenas de W, ou seja, de 10 a 15 ordens de grandeza a mais. Isso significa amplificação de potência real, com consumo, calor e fonte robusta. Exemplo: um PA que entrega 10 W de RF com 40% de eficiência consome 25 W da fonte e dissipa 15 W em calor. Receber não precisa de nada disso.

**2. Linearidade.** Modulações que variam de amplitude (SSB, AM, QAM, OFDM, Módulo 3) exigem que o amplificador reproduza **fielmente** a forma do sinal. Um PA não linear (que "comprime" os picos) espalha energia para fora da banda do canal, causando **regeneração espectral** ("splatter"): interferência nos canais vizinhos. Amplificadores lineares são menos eficientes (mais calor); amplificadores muito eficientes (classe C) só servem para modulações de amplitude constante, como FM. Receber não exige nada disso: o LNA lida com sinais fracos.

**3. Filtro de harmônicos.** Qualquer não linearidade cria **harmônicos**, múltiplos inteiros da frequência transmitida. Um transmissor em 146 MHz cria energia em 292 MHz e 438 MHz; em 27 MHz (PX), em 54 MHz e 81 MHz; em 915 MHz (LoRa, Módulo 5, Aula 6), em 1830 MHz e 2745 MHz. Cada harmônico cai na faixa de outro serviço. Um **filtro passa-baixas** na saída barra os harmônicos. As normas fixam limites de emissão fora de faixa e de harmônicos; os valores exatos você deve conferir nos regulamentos (não os confirmei aqui).

**4. Pureza espectral do SDR em si.** O DAC (conversor digital-analógico) gera réplicas ("imagens") do sinal; o oscilador tem "vazamento" na frequência do LO; desequilíbrio IQ (Aula 2) cria uma cópia espelhada do sinal do lado oposto. Tudo isso **sai pelo ar** se não for filtrado. Por isso SDRs baratos que transmitem (como HackRF, Aula 5) não são "prontos para usar no ar": exigem filtros externos e conhecimento.

**5. Exatidão de frequência.** Para não sair da faixa autorizada, a frequência transmitida precisa ser exata. Um cristal com 30 ppm em 146 MHz erra `146e6 x 30 / 1e6 = 4.380 Hz`. Numa faixa em que o plano de bandas separa modos por poucos kHz (Módulo 5, Aula 3), isso invade o vizinho.

**6. Proteção do próprio equipamento.** Um transmissor conectado a uma antena mal casada reflete potência de volta (Módulo 4, Aula 2), pode queimar o PA, e nunca se liga sem antena ou carga (Módulo 4, Aula 7). O receptor não tem esse risco.

## RTL-SDR como transmissor? Um hack, não um produto

O RTL-SDR foi projetado só para RX (Aula 4). O blog RTL-SDR.com relata um experimento (IK1XPV) em que se **modifica a placa**, removendo componentes e ligando a saída do mixer do R820T à porta de antena através de um capacitor de 100 pF, obtendo uma fonte de sinal CW "crua" em algumas faixas. O resultado é um gerador de portadora sem filtro e sem controle, não um transmissor de comunicação. Isso ilustra a assimetria: precisar **desfazer** o projeto e expor um nó interno do chip para que ele emita, e mesmo assim sem filtros, é a evidência de que receber e transmitir são projetos diferentes.

## O que a lei brasileira diz

### Transmitir (resumo do que você já viu no Módulo 5)

- **Equipamento**: a Lei Geral de Telecomunicações (LGT, Lei 9.472/1997), art. 162, §2º, veda a utilização de equipamento transmissor de radiofrequência **sem certificação expedida ou aceita pela Anatel**. A Anatel repete a citação nos atos de homologação (por exemplo, Ato nº 3114/2026 e Ato nº 18.086/2025) e o Regulamento de Avaliação da Conformidade (Res. 715/2019) trata o uso, a venda e a importação de produto não homologado como conduta sujeita a sanção.
- **Uso do espectro**: quem desenvolve **clandestinamente** atividade de telecomunicação (usa radiofrequência sem outorga ou autorização) comete crime da LGT, art. 183 (detenção de dois a quatro anos e multa, na redação citada pelo STF em julgamento; conferir o texto vigente). Há também o Código Penal, art. 151, §1º, IV (quem instala ou utiliza estação ou aparelho radioelétrico sem observância de disposição legal). Como consequência prática, há apreensão de equipamento e multas.
- **Consequência para SDR transmissor**: usar HackRF, PlutoSDR ou LimeSDR para **emitir no ar**, sem licença de radioamador (na faixa amadora e com modo permitido, Módulo 5) ou sem ser um produto certificado em radiação restrita (Módulo 5, Aula 6), é irregular. Experimentos com o sinal **confinado** (cabo, atenuador, carga fictícia, sem irradiar) são o padrão de bancada, mas **não confirmei** se a Anatel os trata expressamente; não os apresente como "permitidos". A Anatel prevê um serviço especial para fins científicos e experimentais (citado pela Receita Federal em seu manual de importação); não pesquisei como se obtém a autorização.

### Receber: o que a lei diz e o que não diz

**Ter e usar o receptor.** Não encontrei norma que proíba a simples recepção de radiofrequência com um SDR. Sobre o **produto**: a Anatel, em regra, exige homologação de produtos para telecomunicações e mantém uma "Lista de Referência de Produtos para Telecomunicações" (Ato nº 7280/2020, com atualizações); **não confirmei** se dongles receptores estão nela. Consulte a lista e a Anatel antes de importar ou revender, pois a importação de produto sujeito a homologação sem certificado pode ser retida. Para uso pessoal e dúvidas, a via é a Anatel.

**O que a lei protege: o sigilo do conteúdo de comunicações dirigidas a terceiros.** Textos lidos:

1. **Constituição Federal, art. 5º, XII:** é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas (as telefônicas, só por ordem judicial para fins penais).
2. **Código Brasileiro de Telecomunicações (Lei 4.117/1962), arts. 55 a 58**, lidos no Planalto. O art. 55 diz que é inviolável a telecomunicação. O **art. 56** define o crime de **violação de telecomunicação**: quem, "transgredindo lei ou regulamento", divulgue ou comunique, informe ou capte, transmita a outrem ou utilize o conteúdo, resumo, significado, interpretação, indicação ou efeito de qualquer comunicação dirigida a terceiro; e o §1º inclui quem "ilegalmente receber, divulgar ou utilizar telecomunicação interceptada". O **art. 57, parágrafo único**, diz que **não estão compreendidas nessas proibições** "as radiocomunicações destinadas a ser livremente recebidas, as de amadores, as relativas a navios e aeronaves em perigo, ou as transmitidas nos casos de calamidade pública". O art. 58 prevê para as pessoas 1 a 2 anos de detenção. **Vigência:** a LGT (art. 215, I) revogou essa lei, "salvo quanto à matéria penal não tratada nesta Lei e quanto aos preceitos relativos à radiodifusão". Tribunais aplicam essa ressalva ao art. 70 (transmissão clandestina, ver acima); se o art. 56 continua plenamente aplicável a quem escuta e divulga é uma questão que **não pude confirmar** em jurisprudência recente.
3. **Código Penal, art. 151, §1º, II:** quem "indevidamente divulga, transmite a outrem ou utiliza abusivamente comunicação telegráfica ou radioelétrica dirigida a terceiro, ou conversação telefônica entre outras pessoas" comete violação de comunicação telegráfica, radioelétrica ou telefônica.
4. **Lei 9.296/1996, art. 10** (com a redação da Lei 13.869/2019): constitui crime realizar **interceptação** de comunicações telefônicas, de informática ou telemática, ou promover escuta ambiental, **sem autorização judicial** ou com objetivos não autorizados em lei (reclusão de 2 a 4 anos e multa). A lei foi escrita para telefonia e telemática; se e quando ela alcança a captação por rádio de comunicações de terceiros **não confirmei** (não li doutrina nem jurisprudência).

**O que essas normas permitem concluir com segurança razoável:**

| Sinal | Situação (com a leitura acima) |
|---|---|
| Radiodifusão (FM, AM, TV), radioamador, ADS-B, AIS, satélites meteorológicos, sinais de sensores de uso livre | Radiocomunicações destinadas a serem livremente recebidas, e as de amadores, estão expressamente ressalvadas no art. 57 do CBT. Receber é o uso normal. |
| Comunicações de socorro (navios e aeronaves em perigo, calamidade pública) | Também ressalvadas no art. 57; no dia a dia, o que importa é não interferir (nunca transmita). |
| Voz de aviação civil em AM (torre, aproximação) | É comunicação de serviço público de tráfego aéreo, em frequência aberta e amplamente escutada; **não confirmei** enquadramento específico. Trate como escuta para aprendizado, sem divulgar o conteúdo. |
| Comunicações de polícia, bombeiros, empresas, táxi, rádio privado | **Zona cinzenta.** São comunicações dirigidas a terceiros. O crime do art. 56 exige "transgredir lei ou regulamento" e "divulgar/utilizar"; o risco cresce muito se você **divulgar, gravar e publicar ou usar** o conteúdo. Muitos sistemas usam criptografia. Não confirmei jurisprudência; evite. |
| Celular (voz, SMS), Wi-Fi e dados de terceiros, mensagens privadas | **Não decodifique.** Enquadra-se nas proteções de sigilo de comunicação (CF, CP, Lei 9.296). O próprio RTL-SDR.com lista "Sniffing GSM" entre os usos e avisa que "nem todas as aplicações listadas podem ser legais no seu país". |
| Qualquer comunicação **cifrada** | Não tente quebrar. Recuperar conteúdo protegido é o ato que essas leis punem. |

### Regras práticas seguras (derivadas do texto acima, não substituem um advogado)

1. **Receba o que é feito para ser recebido** (broadcast, ADS-B, AIS, satélites, radioamador, sensores de uso livre) e **aprenda com o resto sem gravar nem divulgar**.
2. **Nunca decodifique** comunicações celulares, cifradas ou dados pessoais.
3. **Não divulgue nem publique** o conteúdo de comunicações privadas de terceiros que você tenha captado por acaso.
4. Sensores de vizinhos (`rtl_433`, Aula 9) e pneus (TPMS) emitem **identificadores únicos**: aprenda com eles, mas não monte um registro que identifique pessoas ou rastreie seus carros. A Lei Geral de Proteção de Dados pode se aplicar a dados pessoais; não analisei esse ponto.
5. **Nunca transmita** com o SDR (nem acione TX por acidente): rode receptores como RTL-SDR, que fisicamente não transmitem, e configure o software de um transceptor no modo só receptor.
6. Ao **compartilhar um receptor na internet** (WebSDR, feeders de ADS-B e AIS), você publica o que receber: só sinais de uso livre.

## Resumo

- Transmitir exige PA (potência), linearidade, filtro de harmônicos, DAC limpo e exatidão de frequência, e a lei o regula, porque o erro do transmissor prejudica **terceiros**; o erro do receptor só prejudica você.
- O RTL-SDR só recebe; fazê-lo emitir exige um hack de placa que produz um gerador de portadora sujo, não um transmissor.
- No Brasil, transmitir sem licença ou com equipamento não certificado é irregular (LGT art. 162, §2º; art. 183; Código Penal art. 151, §1º, IV).
- A lei protege o **sigilo do conteúdo** de comunicações de terceiros (CF art. 5º XII; CBT arts. 56 e 57; Código Penal art. 151 §1º II; Lei 9.296 art. 10); o CBT exclui radiodifusão, radioamador, socorro e comunicações destinadas a ser livremente recebidas.
- Receba sinais abertos; não decodifique celular ou cifrado; não divulgue conteúdo alheio; não transmita. O que ficou incerto está marcado no texto.

## Para aprofundar

- [ ] [Lei nº 4.117/1962, Código Brasileiro de Telecomunicações (arts. 55 a 58)](https://www.planalto.gov.br/ccivil_03/leis/l4117.htm) (Planalto): texto sobre violação de telecomunicação e a exceção para radiocomunicações livremente recebidas.
- [ ] [Lei nº 9.296/1996, interceptação de comunicações](https://www.planalto.gov.br/ccivil_03/leis/l9296.htm) (Planalto): arts. 1º e 10, definição e crime de interceptação sem ordem judicial.
- [ ] [Lei nº 9.472/1997, Lei Geral de Telecomunicações](https://www.planalto.gov.br/ccivil_03/leis/l9472.htm) (Planalto): arts. 162, 183 e 215.
- [ ] [Resolução Anatel nº 680/2017, radiação restrita](https://informacoes.anatel.gov.br/legislacao/resolucoes/2017/936resolucao-680) (Anatel): o regime em que LoRa e outros dispositivos de baixa potência operam sem licença de usuário.
- [ ] [Anatel, certificação de produtos: dúvidas frequentes](https://www.gov.br/anatel/pt-br/regulado/certificacao-de-produtos/duvidas-frequentes) (Anatel): quais produtos exigem homologação e o que acontece na importação.
- [ ] [Using the RTL-SDR as a Transmitter](https://www.rtl-sdr.com/using-the-rtl-sdr-as-a-transmitter/) (rtl-sdr.com): o experimento de modificação de placa que mostra o quão forçado é fazer um dongle de RX emitir.
- Rever do curso: [Módulo 5, Aula 1: Por que o espectro é regulado](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/01%20-%20Por%20que%20o%20Espectro%20e%20Regulado.md), [Aula 5: Radioamador é público e aberto](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md) e [Aula 6: Rede privada legal](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md).

[Próxima aula: Software e a primeira recepção](./07%20-%20Software%20e%20Primeira%20Recepcao.md)
