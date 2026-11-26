[Voltar ao módulo](./README.md)

# Aula 6: Rede privada legal: Rádio do Cidadão (PX) e radiação restrita (LoRa/ISM)

*Pergunta que esta aula responde: se radioamador é público e aberto, em que regime legal eu posso ter uma comunicação de rádio que não seja o serviço amador, incluindo LoRa em 915 MHz, e onde está o limite entre eles?*

> Verificado em setembro de 2026 nas páginas da Anatel (Rádio do Cidadão, Homologação), no Ato nº 3445/2026 e no Regulamento sobre Equipamentos de Radiocomunicação de Radiação Restrita (Res. 680/2017). **Para qualquer projeto com transmissão, confirme os requisitos técnicos vigentes na Anatel e use equipamento homologado.** Onde só consegui fonte secundária, aviso no texto.

## Três regimes para falar por rádio sem ser rádio-taxi ou operadora

Do Módulo 1 ao 4 você aprendeu a física, comum a todos. A lei separa o uso em regimes com contratos diferentes:

| Regime | Quem pode | Conteúdo | Equipamento | Exemplo |
|---|---|---|---|---|
| **Serviço de Radioamador** | Quem tem COER e estação licenciada | Público e aberto, sem cripto, sem comércio | Livre para construir/modificar, com limites de banda, modo e potência | Rádio HT em 2 m, HF |
| **Rádio do Cidadão (PX)** | Pessoas físicas cadastradas (jurídicas: só entidades de segurança e sem fins lucrativos, segundo o portal gov.br) | Linguagem clara, uso geral e emergência | Equipamento homologado, 27 MHz | Rádio de caminhoneiro e de fazenda |
| **Radiação restrita** | Qualquer pessoa, **sem licença** | Não regula conteúdo como o amador (ver ressalva) | **Produto certificado pela Anatel** | Wi-Fi, Bluetooth, controle de portão, LoRa a 915 MHz |

Para uma **rede privada** (sua ideia final), os regimes candidatos são o de radiação restrita e, em parte, o PX. O de radioamador, como você viu na Aula 5, é incompatível.

## Rádio do Cidadão (PX)

### O que é

O Serviço de Rádio do Cidadão é um serviço de telecomunicações de interesse restrito, de uso compartilhado, para comunicações entre estações fixas e móveis na **banda de 27 MHz**, com três objetivos (Ato 3445/2026, item 4.2):

1. comunicações de interesse geral ou particular (radiotelefonia, em linguagem clara);
2. atendimento a situações de emergência (catástrofes, incêndios, enchentes, acidentes);
3. telecomando de dispositivos elétricos.

É classificado como **Serviço de Radiação Restrita**, regido pela Res. 777/2025 (RGST) e pela Res. 680/2017. A canalização está na Res. 772/2025 (PDFF).

### Como se obtém

- **Sem prova e sem taxa.** Faz-se um **cadastro simples** no sistema Mosaico da Anatel e obtém-se a **Dispensa de Autorização**, que emite um comprovante e um **indicativo de chamada** com prefixo **PX**, região e complemento alfanumérico (exemplos do Ato: PX1A0000 a PX1A9999 para o Espírito Santo, PX2A0000 a PX2Z9999 para São Paulo).
- Desde 10 de agosto de 2020 **não há mais licenciamento tradicional** para novos usuários. Quem tinha licença antiga pode continuar até o fim da validade, mas depois precisa migrar para a Dispensa.
- Pode-se ter **várias estações** por titular, sem limite de quantidade (Ato 3445, 5.3.4).
- O equipamento precisa ser **homologado** (a Anatel oferece a mesma declaração de conformidade gratuita para uso próprio do radioamador).
- A Dispensa de Autorização do PX **não** dá direito à outorga de radioamador: é preciso nova outorga (Aula 2).

### Regras de operação (Ato 3445/2026)

- Verificar se o canal está livre; chamar no máximo três vezes; citar o indicativo de ambas as estações; transmissões de no máximo **10 minutos**, exceto emergência.
- Prioridade absoluta a estações em **comunicação de emergência**, em todos os canais.
- Código Q só das séries **QRA a QUZ** e alfabeto fonético.
- O operador responde por sua estação, mesmo se usada por terceiros.
- **Comunicação entre empresa de logística e motoristas para o trabalho não é PX**: deve usar outro serviço (5.1.2). Ou seja, PX é pessoal e comunitário, não profissional.

### Potência

O regulamento antigo de canalização (Res. 444/2006, hoje revogada) limitava a potência a 10 W (portadora AM) e 25 W PEP em SSB. O texto atual está na Res. 772/2025 (PDFF) e nas regras de radiação restrita e **não confirmei os números vigentes**. Consulte a norma e o certificado do rádio.

### PX é privado?

**Não.** O PX é compartilhado, em "linguagem clara", com prioridade a emergência: qualquer pessoa na banda ouve. Tem a mesma limitação de transparência do radioamador, e sem prova de conhecimento. Não serve como canal privado.

## Radiação restrita: o regime das redes que você quer projetar

### A ideia

Alguns equipamentos emitem tão pouca potência, ou têm características tão controladas, que o risco de interferência é pequeno. A Anatel os trata como equipamentos de **radiação restrita** (Res. 680/2017): **o usuário não precisa de licença**, mas o **produto precisa de certificação (homologação) da Anatel**. Wi-Fi, Bluetooth, controles remotos, cartões RFID, rastreadores e **LoRa/LoRaWAN** estão nesse regime.

Trecho do regulamento que sintetiza a lógica (Res. 680, Art. 4º e 6º): os equipamentos de radiação restrita "devem possuir certificação emitida ou aceita pela Anatel" e cada equipamento deve ser projetado para usar **apenas a antena comercializada com ele**, salvo condições específicas dos requisitos técnicos.

Consequência de projeto: em radiação restrita, **você não troca a antena por qualquer uma nem sobe a potência**. O produto foi certificado como um todo (transmissor mais antena).

### A faixa de 915 MHz: onde o radioamador e o ISM se cruzam

- Na tabela do Ato 926, **902 a 907,5 MHz e 915 a 928 MHz são faixa amadora (33 cm)**, para todas as classes.
- As **mesmas frequências** (902 a 907,5 MHz e 915 a 928 MHz) são faixa de uso de equipamentos de radiação restrita com tecnologia de espalhamento espectral e outras modulações digitais, e são onde opera LoRa com o plano de canais adotado para o Brasil.

Ou seja, o **mesmo rádio LoRa físico** pode estar sob **dois regimes**, dependendo de quem o opera e como. Não são compatíveis ao mesmo tempo:

| Aspecto | Sob **radioamador** (com COER e licença) | Sob **radiação restrita** (produto certificado) |
|---|---|---|
| Licença do usuário | COER e licença de estação com indicativo | Nenhuma |
| Equipamento | Homologado (declaração gratuita para uso próprio); pode ser modificado e construído | **Produto certificado**; antena fixada pela certificação; não modificar |
| Potência | Limite da classe (por exemplo até 100 W na Classe C), sempre a mínima necessária | Limites do certificado (baixa potência). No Ato 14448, item 10, o teto de pico do transmissor é 1 W em 915 a 928 MHz, com redução dB a dB para antena acima de 6 dBi ([Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)) |
| Identificação | **Obrigatória** no sinal | Não exigida pelo regime |
| Conteúdo | Aberto, **sem criptografia**, sem fim comercial | O regime regula emissão e certificação; **não encontrei nos textos que li uma vedação à criptografia** (confirme) |
| Interferência | Serviço amador | **Caráter secundário**: sem proteção contra interferência e sem poder interferir em serviços primários (declaração clássica das etiquetas, lida em versão anterior do regulamento; confirme no texto vigente) |
| Uso comercial | Proibido | Permitido (é como se faz IoT comercial) |

**Por isso, para a ideia de rede privada:** LoRa em 915 MHz é **alternativa legal** desde que você use **produto certificado e homologado** e respeite os requisitos técnicos do regime de radiação restrita. Aquilo que você **não pode** fazer é usar a rede na faixa amadora **como se fosse** privada: sob licença de radioamador ela precisa ser aberta e identificada.

### O que sei e o que não pude confirmar sobre LoRa em radiação restrita

Confirmado em fonte oficial:

- LoRa e LoRaWAN se enquadram como radiação restrita nas faixas 902 a 907,5 MHz e 915 a 928 MHz (Res. 680/2017, requisitos técnicos no Ato nº 14.448/2017 e atualizações).
- É preciso **homologação** do produto (Res. 715/2019, de avaliação da conformidade).

Confirmado depois, na leitura do texto do Ato 14448 (atualizado em 14/10/2025) feita na [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md):

- Para 915 a 928 MHz, o item 10 tem dois caminhos: **salto em frequência** (pico de **1 W de potência de saída do transmissor**, com pelo menos 35 canais, e tempo médio de ocupação de qualquer frequência de no máximo 0,4 s em 14 s) e **modulação digital** (largura de faixa a 6 dB de no mínimo 500 kHz). Atenção: o 1 W é **potência de pico na saída do transmissor**, não e.i.r.p.
- Antena com ganho direcional acima de **6 dBi** obriga a reduzir a potência de pico do transmissor, dB a dB, pelo excesso.
- **Não há limite de duty cycle no item 10.** O "2 s por hora" que aparece em resumos vem do item 6.2, que é só para sinais de controle e proíbe transmissão de dados. O que existe no item 10.2 é a ocupação média por frequência de salto.
- O Ato 14.158, de 1º de outubro de 2025, revogou o item 10.3.4.4 (a dispensa do requisito de 500 kHz para quem mede potência pela média).
- Um gateway montado por conta própria **não herda** a homologação do módulo LoRa que usa: certificados de módulos "não acabados" exigem nova avaliação quando integrados em outro equipamento.

Continua **não confirmado**: como a Anatel enquadra um LoRa de canal fixo em 125 kHz (nem salto, nem 500 kHz). A Aula 4 do Módulo 8 trata isso como leitura do texto, não como posição da Anatel. Leia o Ato vigente antes de projetar.

### E os módulos importados sem homologação?

O RGST (art. 39) exige certificação para equipamentos de telecomunicações. Placas de desenvolvimento e módulos LoRa comprados no exterior **sem** homologação **não devem ser transmitidos** livremente. Duas saídas legais: usar módulos e produtos com **homologação brasileira** (um gateway montado por você não herda a homologação do módulo, ver [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)) ou, se você for radioamador, operar sob o regime amador (com homologação por declaração de conformidade para uso próprio), **aberto e identificado**. Isso conecta com a Aula 2.

## Mesh e Reticulum: o mesmo raciocínio

Os sistemas dos Módulos 9 e 10 (Meshtastic, Reticulum e afins) rodam em rádios LoRa. Você vai aplicar o seguinte mapa:

- **Rede privada com conteúdo cifrado:** rode sob **radiação restrita**, com hardware certificado. Não use faixa amadora.
- **Rede aberta para experimentação e comunicação entre radioamadores:** rode sob **licença de radioamador**, sem criptografia, com indicativo dentro do sinal e sem tráfego comercial.
- **Não misture:** o mesmo nó não pode ser "privado cifrado" e "amador" ao mesmo tempo.

## E se eu quiser um rádio privado profissional?

Empresas que precisam de uma rede de rádio privada em frequência licenciada (fora da radiação restrita) usam o **Serviço Limitado Privado**, que exige outorga e licença da Anatel, com pagamento e frequência própria. O RGST o lista entre os serviços de interesse restrito (art. 22). Não pesquisei a fundo esse serviço; é o caminho quando radiação restrita não basta em alcance ou robustez.

## Resumo

- Três regimes: **radioamador** (aberto, sem cripto, sem comércio), **Rádio do Cidadão** (27 MHz, cadastro gratuito, linguagem clara, compartilhado) e **radiação restrita** (sem licença de usuário, mas produto certificado).
- PX: cadastro simples (Dispensa de Autorização), sem prova, indicativo PX, regras de operação parecidas com radioamador, uso pessoal e comunitário, **não** para comunicação de trabalho de empresas de logística. Não é privado.
- Radiação restrita: equipamento **homologado**, antena e potência fixadas pela certificação, **caráter secundário**. É onde **LoRa/LoRaWAN** legalmente opera em 915 MHz sem licença de usuário.
- A faixa de 915 a 928 MHz é **também** faixa amadora: sob COER, o LoRa deve ser aberto, identificado e sem criptografia; sob radiação restrita, o equipamento deve ser certificado.
- Para uma rede privada, use radiação restrita com hardware certificado. Os limites numéricos (1 W de pico, ocupação média por frequência, sem limite de duty cycle no item 10) estão na [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md); confirme sempre no Ato vigente.

## Para aprofundar

- [ ] [Rádio do Cidadão (Anatel)](https://www.gov.br/anatel/pt-br/regulado/outorga/radioamador-e-radio-cidadao/radio-do-cidadao) (Anatel): o que é, como cadastrar e regras do serviço.
- [ ] [Ato nº 3445, de 11 de março de 2026 (Requisitos Operacionais do Rádio do Cidadão)](https://informacoes.anatel.gov.br/legislacao/component/content/article/177-atos-de-requisitos-operacionais-de-outorga-e-licenciamento/2149-ato-3445) (Anatel): regras de operação do PX.
- [ ] [Resolução nº 680, de 27 de junho de 2017 (Equipamentos de Radiação Restrita)](https://informacoes.anatel.gov.br/legislacao/resolucoes/2017/936resolucao-680) (Anatel): o regulamento base do regime de radiação restrita.
- [ ] [Homologação para Equipamentos de Radioamador e Rádio do Cidadão](https://www.gov.br/anatel/pt-br/regulado/outorga/radioamador-e-radio-cidadao/homologacao-para-radioamador-px) (Anatel): como funciona a declaração de conformidade para uso próprio.

[Próxima aula: Equipamentos e repetidoras](./07%20-%20Equipamentos%20e%20Repetidoras.md)
