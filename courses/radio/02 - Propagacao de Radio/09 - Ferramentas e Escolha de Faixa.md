# Aula 9: Ferramentas de estimativa e escolha de faixa para uma rede privada

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como verificar um caminho real sobre o terreno antes de instalar, e qual faixa (HF, VHF, UHF, micro-ondas) atende a que tipo de rede, e por quê?*

## Por que isso existe

Fórmulas dão a ordem de grandeza; o terreno real decide. Duas ferramentas resolvem a parte que o cálculo manual não faz bem: (1) desenhar o **perfil do terreno** entre dois pontos e ver se a visada e a Fresnel estão livres; (2) prever HF, cujo comportamento depende do estado do Sol. Depois, com tudo que você aprendeu, a escolha de faixa vira um raciocínio de engenharia em vez de tentativa e erro.

## Perfil de terreno: o que a ferramenta faz

Uma ferramenta de perfil usa um **modelo digital de elevação** (DEM, por exemplo os dados de radar SRTM da NASA) para obter a altura do terreno ao longo da reta entre A e B. Ela então:

1. traça a linha de visada entre as antenas (altura do terreno mais altura do mastro);
2. calcula o raio da F1 em cada ponto (Aula 3) e mostra o elipsoide sobre o perfil;
3. marca obstruções na linha ou na zona de Fresnel;
4. incorpora a curvatura da Terra com k = 4/3 (ou outro);
5. em programas de propagação completos, soma a perda por difração e outras, e estima potência recebida e margem (Aula 8).

**Limite dos dados:** DEM não inclui prédios e árvores. Some 10 a 30 m de altura em mata densa manualmente; e a resolução de cerca de 30 a 90 m do DEM público pode "alisar" morros estreitos.

### Ferramentas

- **Radio Mobile** (Roger Coudé, VE2DBE): software gratuito para Windows (e uma versão online) de simulação de enlaces sobre terreno, com perfil, Fresnel, cobertura e uso de modelos de propagação como o Longley-Rice (ITM). É muito usado por radioamadores e por quem monta redes de LoRa/mesh. Não abri a página oficial nesta sessão (a busca falhou), então confira o site do autor e a versão vigente antes de instalar. O uso costuma exigir cadastrar alturas de antena, potência, ganhos, sensibilidade e o local no mapa; a interface e os menus mudam entre versões, por isso não os detalho aqui.
- **HeyWhatsThat** ([heywhatsthat.com](https://www.heywhatsthat.com/faq.html)): site gratuito. Segundo sua FAQ (verificado em setembro de 2026), oferece o **Path Profiler**, que gera o perfil de elevação de uma rota traçada no mapa, e a **visibility cloak**, um mapa de tudo que se vê a partir de um ponto, útil para "line of sight communications"; é possível definir a altura da torre. É uma ferramenta de visada geométrica, sem modelo completo de perda.
- **Ferramentas de planejamento de mesh**, em site e aplicativo, que embutem esse cálculo (por exemplo, mapas de cobertura de projetos de rede mesh; verifique em cada projeto, Módulo 9).
- **Google Earth** ou mapas com perfil de elevação: para uma checagem rápida do perfil.

### Como usar (método)

1. Defina os dois pontos e as alturas das antenas acima do solo.
2. Gere o perfil. Se a linha toca o terreno, não fecha: eleve a antena ou mude o ponto.
3. Confira a F1: mantenha 60% livre (Aula 3).
4. Se houver obstáculo de difração, estime a perda (`J(v)`, Aula 3) e leve ao orçamento de enlace.
5. Compare `PL` total com a MAPL da Aula 8.
6. **Meça em campo.** Sempre. Modelos erram em decibéis, sobretudo em cidades e mata.

## Previsão de HF

Para HF, a ferramenta é diferente (Aula 6): o **VOACAP** ([voacap.com](https://www.voacap.com/)) e afins consomem SSN/SFI e retornam MUF, LUF e SNR por hora. Combine com dados em tempo real (K, balizas). Confira sempre a data e a origem da previsão.

## Escolha de faixa: o que cada uma permite e por quê

Resumo integrando as aulas:

| Faixa | Frequência | O que domina a propagação | Alcance e uso típicos | Antena |
|---|---|---|---|---|
| **HF** | 3 a 30 MHz | Ionosfera (Aula 5), onda de superfície em baixas frequências; sujeito a sol e hora | Regional (NVIS) a mundial, sem infraestrutura | Grande (`lambda` de 10 a 100 m), fios, dipolos |
| **VHF** | 30 a 300 MHz | Visada com boa difração e penetração; modos especiais (Es, meteoros, dutos) | Dezenas de km com altura; comunicações móveis, repetidoras, FM | Média (`lambda` de 1 a 10 m) |
| **UHF** | 300 MHz a 3 GHz | Visada; menos difração que VHF, boa penetração urbana até cerca de 1 GHz | Poucos a dezenas de km em terreno; celular, LoRa sub-GHz, TV | Pequena (`lambda` de 10 cm a 1 m) |
| **Micro-ondas** | acima de 3 GHz (Wi-Fi 2,4 e 5 GHz, enlaces 10 GHz+) | Visada estrita; Fresnel fina; chuva acima de 10 GHz | Enlaces ponto a ponto com antenas diretivas, alta capacidade | Muito pequena, prato de alto ganho |

### Por que essa distribuição

Recapitulando o mecanismo em uma linha para cada, ligando aos números do módulo:

- **HF** vai longe porque a ionosfera reflete `f < MUF` (Aula 5), custa em antena grande e em previsibilidade (sol, hora) e em largura de banda pequena disponível.
- **VHF** contorna melhor (difração alta, Aula 1) e penetra bem, mas o horizonte de rádio (Aula 3) limita, e o ruído artificial é considerável; antenas moderadas.
- **UHF** encolhe antenas e ganha capacidade, perde um pouco de difração; ainda penetra edifícios (abaixo de 1 GHz, melhor).
- **Micro-ondas** dão enorme capacidade e antenas direcionais pequenas (ganho alto com prato pequeno, Módulo 4), mas exigem visada e Fresnel limpas, e a chuva pesa acima de 10 GHz.

## Ligando à rede privada (adianta os módulos 8 a 10)

Os requisitos de uma rede de comunicação privada, descentralizada, guiam a escolha:

| Objetivo | Faixa provável | Motivo |
|---|---|---|
| Malha urbana/suburbana de dados baixos (mensagens, sensores) | Sub-GHz (433, 868/915 MHz), com LoRa | Penetração, difração e sensibilidade (Aula 8: -137 dBm); antenas compactas; alcance de km a dezenas de km com altura |
| Ligar ilhas de rede distantes por visada | UHF ou micro-ondas ponto a ponto com antenas diretivas | Ganho de antena e Fresnel controlada (Aula 3); mais capacidade |
| Comunicação sem infraestrutura, regional ou continental | HF (NVIS ou salto) | Ionosfera; exige licença de radioamador ou autorização (Módulo 5), modos digitais robustos (Módulo 7) |
| Alta taxa dentro de um prédio ou campus | Wi-Fi (2,4/5 GHz) | Capacidade; alcance curto é aceito |

Dois pontos que valem para todos:

1. **Altura da antena e visada** compram mais alcance que qualquer amplificador.
2. **A regulamentação restringe frequências e potência.** Transmitir exige atender às regras da Anatel para cada faixa (equipamento homologado, potência/EIRP máxima e finalidade); radioamadorismo tem sua própria regulamentação (Módulo 5), inclusive limites de conteúdo. Não confirmei os limites vigentes nesta sessão; os módulos 5 e 8 tratam disso com fonte oficial. Trate o que este módulo diz como base técnica de entendimento, não como autorização para operar. Em antenas em torres ou perto de rede elétrica, há risco de morte por contato com cabos energizados; a instalação em altura deve seguir normas de segurança e, quando exigido, profissional habilitado.

## Resumo

- Ferramentas de perfil (Radio Mobile, HeyWhatsThat) usam modelos de elevação para checar visada e Fresnel; DEM não vê prédios e árvores; sempre medir em campo.
- HF pede previsão (VOACAP) e dados solares em tempo real; VHF+ pede perfil de terreno.
- HF: longo alcance, antena grande, dependente do Sol. VHF: contorna bem, limita pelo horizonte. UHF: compacto, ainda penetra. Micro-ondas: capacidade e antenas diretivas, exigem visada limpa e sofrem chuva acima de 10 GHz.
- Redes mesh urbanas privadas costumam usar sub-GHz/LoRa; HF entra onde não há infraestrutura; licenciamento e segurança vêm antes da instalação.

## Para aprofundar

- [ ] [HeyWhatsThat FAQ](https://www.heywhatsthat.com/faq.html) (HeyWhatsThat): descrição oficial do Path Profiler e da "visibility cloak".
- [ ] [VOACAP Online](https://www.voacap.com/) (VOACAP): previsão de HF gratuita da NTIA/ITS; note a restrição a acesso automatizado.
- [ ] [HF Propagation for Ham Radio Explained (playlist)](https://www.youtube.com/playlist?list=PLm8ROkpFeqoqCyQaPtVwbXZeWOop8j5RL) (Ham Radio Crash Course, conforme a curadoria anterior): sequência didática sobre HF; não assisti.

Fim do módulo. Siga para o [README do módulo](./README.md) e o checklist de saída.
