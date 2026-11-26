[Voltar ao módulo](./README.md)

# Aula 4: Estrutura, sistema construtivo e instalações na planta

*Pergunta que esta aula responde: que decisões de sistema construtivo, estrutura e instalações precisam estar tomadas na planta para que o modelo 3D seja coerente e não peça o impossível?*

> **Aviso obrigatório.** Tudo o que esta aula produz é **compatibilização para o modelo ficar plausível**, não projeto. Projeto estrutural e de fundação é de **engenheiro habilitado, com ART**. Projetos elétrico, hidráulico e de gás exigem **profissional habilitado** (há risco real de choque, incêndio e explosão). Os números aqui são ordens de grandeza; a sua obra real pode ser diferente. O modelo com pilares e tubos desenhados **não é projeto estrutural, elétrico nem hidráulico**.

## Por que agora, antes de modelar

A planta da aula 3 mostra o que você quer. A estrutura e as redes decidem **o que é possível** (módulos 4 e 5). Se você modelar antes, vai descobrir com paredes já levantadas que há uma laje de 6 m sem viga ou um banheiro longe de qualquer prumada. Esta aula é uma **passada de compatibilização** sobre a planta 2D: ajusta o desenho até que ele seja "estruturalmente razoável" e "instalável", e registra os parâmetros que o software vai receber.

## Etapa 1: escolher o sistema construtivo

Compare as opções pelo que decide no seu caso (quem carrega a carga, prazo, flexibilidade de reforma), como na [aula 5 do módulo 4](../04%20-%20Sistemas%20Construtivos%20e%20Estrutura/05%20-%20Sistemas%20Construtivos%20Residenciais.md). Para um estudo de hobby, o critério é dar **espessuras e regras coerentes** ao modelo.

| Sistema | Espessura de parede acabada (ordem de grandeza, módulo 4) | Consequência para a planta |
|---|---|---|
| Alvenaria convencional com estrutura de concreto | interna 12 a 14 cm (bloco 9) ou 17 a 19 cm (bloco 14); externa 18 a 20 cm | malha de pilares e vigas; paredes de vedação removíveis |
| Alvenaria estrutural | 16 a 21 cm | paredes portantes marcadas e não removíveis; ambientes entre paredes; modulação do bloco |
| Steel frame | 12 a 17 cm | montantes definem a espessura; planta livre de pilares |
| Wood frame | 14 a 20 cm | idem |
| Paredes de concreto | 10 a 12 cm | planta pouco flexível a reforma |

Escolha **um** e escreva o porquê. A escolha vale como hipótese do modelo; o profissional pode discordar (aula 11).

## Etapa 2: passar a planta pela lista estrutural

Aplique a [aula 7 do módulo 4](../04%20-%20Sistemas%20Construtivos%20e%20Estrutura/07%20-%20Estrutura%20na%20Planta%20e%20Decisoes%20de%20Modelagem.md) à sua planta:

1. **Malha de pilares** (se concreto armado): marque pilares nos cantos, cruzamentos e extremidades de paredes longas, dentro das paredes, alinhados nas duas direções. Pilar no meio da sala é sinal de vão excessivo.
2. **Vãos**: entre pilares, 3 a 5 m é a faixa econômica; acima de 6 m o custo sobe rápido (o momento fletor cresce com o quadrado do vão). Se um ambiente pedir 6 m, decida: aceitar viga alta, colocar pilar, ou mudar a planta.
3. **Alinhamento vertical** (se sobrado): pilares e paredes do pavimento superior caem sobre os do inferior; paredes de alvenaria no andar de cima sem parede embaixo pedem viga; escada com furo de laje e apoios coerentes.
4. **Áreas molhadas**: banheiro e área de serviço têm rebaixo de laje; combine com a etapa 4.

Registre a lista dos problemas achados e a correção feita na planta. Isso costuma mexer poucos centímetros, mas evita pilar dentro de porta.

## Etapa 3: fixar os parâmetros construtivos

Estes números vão para o software na aula 5. Preencha a tabela; o exemplo usa os valores do módulo 4.

| Parâmetro | Regra | Exemplo | Seu valor |
|---|---|---|---|
| Parede externa acabada | bloco + revestimento nas duas faces | 14 + 2 + 2 = 18 cm | |
| Parede interna acabada | idem | 9 + 2 + 2 = 13 cm (ou 14 cm) | |
| Pé-direito | 2,60 a 3,00 m; mínimo local (módulo 6) | 2,70 m | |
| Espessura de laje | maciça 10 a 12 cm; treliçada 16 a 20 cm | 20 cm (treliçada) | |
| Contrapiso e piso | alguns cm | 5 cm | |
| **Piso a piso** | `pé-direito + laje + contrapiso/piso + forro` | 2,70 + 0,20 + 0,05 = 2,95 m | |
| Viga | altura de vão/10 a vão/12 | vão 4 m: 33 a 40 cm | |
| Pilar | menor lado, em geral 19 cm (exceção 14 cm, com área mínima) | 14 x 30 cm; com revestimento 18 x 34 cm | |
| Beiral | 50 a 100 cm | 60 cm | |
| Inclinação do telhado | definida pela telha (cerâmica cerca de 30%) | 30% (16,7 graus) | |
| Altura da cumeeira | `meia largura x inclinação` | largura 8 m: `4 x 0,30 = 1,20 m` acima do plano do beiral | |
| Cota do piso interno | 15 a 30 cm acima do terreno externo | 20 cm | |

Se houver escada, dimensione: número de espelhos `n = H / e` com espelho entre 16 e 19 cm, e piso `p` por Blondel (`2e + p` entre 63 e 64 cm, regra de conforto, não norma; [módulo 9, aula 4](../09%20-%20Pratica%20com%20Sweet%20Home%203D/04%20-%20Niveis%20Escadas%20e%20Cobertura.md)). Exemplo com H = 2,95 m: 17 espelhos de 17,35 cm, piso `0,64 - 2 x 0,1735 = 0,293 m`, comprimento reto `(17 - 1) x 0,293 = 4,69 m`. O código de obras e as normas mandam nos limites permitidos.

## Etapa 4: passar a planta pela lista de instalações

Aplique a [aula 7 do módulo 5](../05%20-%20Instalacoes%20Prediais%20Basicas/07%20-%20Da%20Rede%20a%20Planta.md):

| Item | Regra de compatibilização | Marque na planta |
|---|---|---|
| Áreas molhadas | banheiro, cozinha e área de serviço encostados, com parede hidráulica; em sobrado, empilhados | a parede hidráulica e o shaft |
| Ruído | quarto não encosta em parede com vaso e descarga sem tratamento | conflitos e solução |
| Shaft ou parede técnica | esgoto DN 100 tem cerca de 11 cm externos: parede de 14 cm não o embute | espessura da parede hidráulica e porta de inspeção |
| Quadro elétrico | central, acessível, longe de água e de atrás de porta, perto do padrão de entrada | posição |
| Caixa d'água | ponto mais alto, sobre estrutura prevista, com acesso, perto da parede hidráulica | posição e apoio |
| Hidrômetro e padrão de energia | limite frontal, acessíveis | posição |
| Esgoto | declividade viável até a rede; caixa de gordura e de inspeção fora da casa | caminho do coletor e cotas |
| Gás | fogão e aquecedor em parede externa ou com ventilação permanente; aquecedor fora de dormitório e banheiro | central ou botijão e aberturas |
| Solar | água do telhado voltada para o norte, sem sombra | inclinação e orientação do telhado |
| Dados | eletrodutos vazios e quadro central | posição |

**Conferência elétrica de ordem de grandeza** (módulo 5, aula 5): tomadas mínimas de 1 a cada 5 m de perímetro na sala e no quarto e 1 a cada 3,5 m na cozinha e área de serviço; iluminação de 100 VA até 6 m². Para uma casa de 2 quartos, o exemplo do módulo chegou a 7 circuitos e cerca de 12,9 kVA. Isso serve para você perceber o tamanho do quadro, **não** para dimensionar nada.

## Etapa 5: compatibilizar em uma única planta

Sobreponha, na planta 2D (papel vegetal, camadas de editor 2D, ou cópias coloridas), quatro camadas: **arquitetura**, **estrutura** (pilares, vigas indicadas, paredes portantes), **áreas molhadas e shafts**, **quadro, caixa d'água e medidores**. Procure colisões:

- tubo de esgoto cruzando viga ou pilar;
- shaft coincidindo com pilar;
- caixa d'água sem apoio estrutural;
- quadro atrás de porta;
- janela onde a viga desce.

Cada colisão vira uma decisão registrada: mudar de lugar, aumentar parede, ou "perguntar ao engenheiro" (que entra na lista de dúvidas da aula 11).

## Entregável da aula 4

- Justificativa do sistema construtivo escolhido.
- Tabela de parâmetros construtivos preenchida (paredes, pé-direito, piso a piso, laje, beiral, inclinação, cota do piso, escada).
- Planta compatibilizada com pilares (se houver), paredes portantes marcadas, paredes hidráulicas, shaft, quadro, caixa d'água e medidores.
- Lista de colisões encontradas, com a decisão de cada uma, e lista de perguntas para o profissional.

## Checklist da aula 4

- [ ] Escolhi um sistema construtivo e sei que espessura de parede acabada ele exige.
- [ ] Pilares estão em malha, dentro das paredes, sem pilar solto no meio de ambiente.
- [ ] Nenhum vão ultrapassa 6 m sem decisão consciente.
- [ ] Em sobrado, pilares e paredes se empilham; escada tem apoio coerente.
- [ ] Calculei o piso a piso e, se há escada, o número de espelhos.
- [ ] Áreas molhadas agrupadas, com parede hidráulica espessa o bastante ou shaft com acesso.
- [ ] Quadro, caixa d'água, medidores e central de gás têm posição acessível.
- [ ] As colisões foram listadas e resolvidas ou encaminhadas.

## Resumo

- Esta aula é compatibilização para o modelo ficar plausível; não é projeto estrutural nem de instalações.
- O sistema construtivo dá a espessura de parede acabada, e o piso a piso soma pé-direito, laje, contrapiso e forro.
- Estrutura razoável: pilares alinhados, vãos de 3 a 5 m, empilhamento vertical, viga sob parede pesada.
- Instalável: áreas molhadas agrupadas, shaft com acesso, quadro e caixa d'água em posição correta, água do telhado ao norte se houver solar.
- Colisões viram decisões ou perguntas para o engenheiro e o arquiteto.

[Próxima aula: Escolher o software e configurar o modelo](./05%20-%20Escolher%20o%20Software%20e%20Configurar%20o%20Modelo.md)
