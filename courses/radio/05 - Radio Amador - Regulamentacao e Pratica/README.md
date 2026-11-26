# Módulo 5: Rádio Amador: Regulamentação e Prática

Você já sabe como uma onda de rádio nasce, se propaga, carrega informação e é captada por uma antena (Módulos 1 a 4). Este módulo responde à pergunta que vem em seguida: **quem pode usar o espectro, sob quais regras e como se participa de fato?** Ele vem agora porque, antes de transmitir qualquer coisa nos módulos seguintes (SDR, modos digitais, LoRa, mesh, Reticulum), você precisa saber onde termina o que é permitido e onde começa a infração, e por que o Serviço de Radioamador **é público e aberto, não um canal privado**. A resposta a "como monto uma rede privada legalmente" passa pela Aula 6.

> **Aviso.** Este módulo não substitui a leitura da norma vigente. As regras da Anatel mudaram bastante entre 2024 e 2026 (Resolução 777/2025, Atos 926/2024, 3445/2026 e 3448/2026). Os dados regulatórios e valores foram conferidos em setembro de 2026 em fontes oficiais; **confirme na Anatel antes de transmitir, pagar taxas ou montar uma estação.** Transmitir em radiofrequência no Brasil exige licença, homologação ou cadastro conforme a faixa, e há riscos de RF e eletricidade (Aula 9).

## Aulas

1. [Por que o espectro é regulado e o que é o Serviço de Radioamador](./01%20-%20Por%20que%20o%20Espectro%20e%20Regulado.md): por que transmitir exige autorização, quem são Anatel, UIT, IARU, LABRE e ARRL, e o que a definição legal do serviço permite.
2. [Do zero ao indicativo](./02%20-%20Do%20Zero%20ao%20Indicativo.md): COER, classes A, B e C, prova, outorga, licença, tipos de estação, validade e custos oficiais de setembro de 2026.
3. [Bandas, classes, potência e modos](./03%20-%20Bandas%20Classes%20e%20Potencia.md): quem opera em qual frequência, limites de potência, plano de faixas e as regras técnicas sobre criptografia e espalhamento espectral.
4. [Indicativos, alfabeto fonético e código Q](./04%20-%20Indicativos%20Alfabeto%20Fonetico%20e%20Codigo%20Q.md): como um indicativo é formado (PY, PU, PP...), regras de identificação, fonética da UIT, código Q e RST.
5. [Radioamador é público e aberto](./05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md): o que se pode e o que não se pode transmitir, criptografia, uso comercial, redes fechadas e o que isso significa para modos digitais e para a ideia de rede privada.
6. [Rede privada legal: Rádio do Cidadão (PX) e radiação restrita (LoRa/ISM)](./06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md): em que regime legal está cada tipo de uso, inclusive LoRa em 915 MHz, e onde termina o serviço amador.
7. [Equipamentos e repetidoras](./07%20-%20Equipamentos%20e%20Repetidoras.md): peças da estação, cuidados com rádios baratos, offset, subtom e como usar uma repetidora passo a passo.
8. [Operação: CQ, QSO, logs, QSL e concursos](./08%20-%20Operacao%20QSO%20Logs%20QSL%20e%20Contests.md): procedimento de um contato, log em UTC, cartões QSL, LoTW, eQSL, contests e DX.
9. [Segurança, emergência, comunidade e estudo para a prova](./09%20-%20Seguranca%20Emergencia%20Comunidade%20e%20Prova.md): exposição a RF, instalação segura, RENER, LABRE e clubes, e plano de estudo com a ementa oficial.

## Checklist de saída do módulo

- [ ] Por que transmitir exige autorização, mas escutar é passivo, e por que o espectro precisa de regras de acesso?
- [ ] Qual a diferença entre COER, licença de estação e indicativo, e por que o indicativo pertence à estação e não ao operador?
- [ ] Por que existem classes A, B e C, e o que muda em faixas e potência (1.500 W, 1.000 W e 100 W)?
- [ ] Por que o serviço amador é público e aberto, e por que criptografia em modos digitais e acesso codificado a repetidoras são proibidos?
- [ ] Por que uma rede privada com conteúdo cifrado não pode rodar sob licença de radioamador, e em que regime legal LoRa em 915 MHz pode operar sem licença de usuário?
- [ ] Por que a estação precisa se identificar, e o que dizem as regras de chamada (3 chamadas, 10 minutos, indicativos completos)?
- [ ] Por que uma repetidora usa duas frequências, o que é offset e por que o subtom não é privacidade?
- [ ] Por que a exposição a RF exige distância da antena, e como estimar a distância com `d = raiz(e.i.r.p. / (4 x pi x S))`?
- [ ] Por que o serviço amador é útil em emergência e quais regras têm exceção nesse caso?

Quando estiver confiante, siga para o [Módulo 6: SDR, Software Defined Radio](../06%20-%20SDR%20-%20Software%20Defined%20Radio/README.md).
