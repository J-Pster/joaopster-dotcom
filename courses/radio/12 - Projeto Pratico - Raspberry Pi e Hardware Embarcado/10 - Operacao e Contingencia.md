[Voltar ao módulo](./README.md)

# Aula 10: Operação, manutenção e contingência

*Pergunta que esta aula responde: depois que a rede funciona, o que eu faço, e com que frequência, para que ela continue funcionando (manutenção, atualização de firmware, energia, segurança), como diagnostico uma falha, e o que acontece, por escrito, quando algo importante quebra?*

> Esta aula é método de operação, não hardware novo. Onde cito comportamentos de software, valem as fontes das aulas anteriores (documentação do Meshtastic, manual do Reticulum, manuais do systemd); onde cito números (prazos, frequências de manutenção), são **sugestões minhas** a ajustar ao seu caso. **Perigos:** subir em mastro ou telhado para manutenção repete todos os riscos do [Módulo 4, Aula 6](../04%20-%20Antenas/06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md) (rede elétrica, altura, trovoada); baterias de lítio têm risco de fogo (Aula 2). **Esta rede não é um serviço de emergência:** não dependa dela para situações em que a vida esteja em jogo sem um plano B independente (última seção).

## Por que operação é a etapa mais longa do projeto

Montar leva semanas; operar leva anos. A maior parte das falhas de uma rede pequena de rádio não é "o protocolo falhou": é bateria envelhecida, conector que entrou água, cartão corrompido, atualização de um nó só (versões misturadas) ou uma pessoa que se esqueceu de como as coisas foram feitas. A operação é a disciplina que evita cada uma delas.

## Rotina de manutenção

Sugestão de calendário. Ajuste os intervalos ao que os seus dados de energia e falha (Aulas 8 e 9) mostrarem:

| Frequência | Tarefa | Onde está a base |
|---|---|---|
| **Diária, automática** | Verificador de saúde do gateway roda; alerta se serviço parado, disco cheio, temperatura alta | Aula 8 |
| **Semanal** | Olhar a tendência da tensão da bateria de cada nó remoto; nós sem aparecer há mais de X horas | Aulas 2 e 8 |
| **Mensal** | Conferir que todos os nós estão na **mesma versão** de firmware e software; conferir que o backup mais recente restaura (testar de verdade) | Aulas 3 e 6 |
| **Após tempestade ou vento forte** | Inspeção visual do mastro, das antenas e do aterramento, **de solo, com binóculo, antes de subir** | Módulo 4, Aula 6 |
| **Semestral** | Limpar painéis solares; conferir a vedação da caixa e trocar sílica-gel; conferir a integridade dos conectores e a fita de vedação | Aula 2 |
| **Antes do inverno** | Rever o dimensionamento de energia com os dados do pior mês; conferir baterias | Aula 2 (exemplos A e B) |
| **Anual** | Medir o SWR das antenas de novo; medir a campanha de alcance de novo em pelo menos 3 pontos e comparar com a planilha original; revisar a documentação | Aula 9, Módulo 4, Aula 7 |
| **A cada 2 a 5 anos** | Trocar baterias (o envelhecimento é gradual: a capacidade útil cai e a autonomia do exemplo A encolhe) | Aula 2 |

Anote cada tarefa no changelog (Aula 9). "Se não está escrito, não foi feito."

## Atualização de firmware e software

O risco é duplo: a atualização pode quebrar algo, e **versões misturadas** podem não interoperar (o Módulo 9 avisou que nós com firmware antigo não participam de recursos como next hop e mensagens diretas protegidas por chave pública).

Procedimento, em ordem:

1. **Leia as notas de versão** do projeto. Se a mudança de versão quebra compatibilidade, planeje a atualização de todos os nós de uma vez.
2. **Teste em bancada** com um nó de reserva e o mesmo hardware, e a configuração exportada. Só depois vá ao campo.
3. **Um nó de cada vez** (o "canário"), começando pelo menos crítico. Espere um dia. Monitore.
4. **Guarde o firmware anterior** (o arquivo) e a configuração anterior, para voltar.
5. **Anote** versões e datas no inventário.

O que muda por sistema, das aulas anteriores:

- **Meshtastic:** web flasher para ESP32 e arquivo UF2 para nRF52 e RP2040 (Módulo 9, Aula 5). Os nós nRF52 no morro obrigam a **subir lá** para atualizar; planeje o custo. Conserve a chave do canal e a configuração exportada (a atualização não deve apagá-las, mas confira na documentação da sua versão).
- **RNode (firmware):** `rnodeconf -u` atualiza para o firmware mais recente (opção do Módulo 10, Aula 6); a linha base é o RNode Firmware e a Community Edition tem numeração própria: siga a que você instalou.
- **Reticulum (`rns`):** por ser projeto de mantenedor único e de mudança rápida ([Módulo 10, Aula 9](../10%20-%20Reticulum/09%20-%20Comparacao%20Maturidade%20e%20Riscos.md)), **fixe a versão** no nó remoto e atualize com teste prévio. As notas de versão documentam que os artefatos de release trazem manifesto e assinaturas verificáveis (com `rnid -V`, Módulo 10, Aula 6); use-os.
- **Raspberry Pi OS:** Aula 3. Atualizações automáticas de segurança são opção para nós sem visita; teste antes em um Pi de bancada.

**Procedência.** Baixe firmware e software só das fontes oficiais (site e repositório do projeto) e confira os hashes ou assinaturas que eles publicam. Uma placa LoRa com firmware de origem duvidosa é uma porta na sua rede.

## Segurança operacional

Um resumo do que o Módulo 9 (Aula 9) e o Módulo 10 (Aula 8) definiram como modelo de ameaça, agora em rotina:

- **Chaves de canal (Meshtastic).** Quem tem o QR ou a URL do canal tem a chave. Quando alguém sai do grupo, perde o celular ou uma cópia vaza, **troque a chave** (gere uma nova, aleatória, e redistribua a todos os membros) e registre a data.
- **Identidades (Reticulum).** Uma identidade comprometida não se "revoga globalmente": o `blackhole` bloqueia só nas instâncias que o aplicam, e o manual diz que não existe forma de censurar globalmente uma identidade (Módulo 10, Aula 6). A resposta é criar uma identidade nova (endereço novo) e avisar os pares por um canal confiável.
- **Acesso físico.** Um nó no poste pode ser levado. **Assuma que quem tem o aparelho tem as chaves que estavam nele**, e planeje a troca de chaves se um nó sumir. Não guarde no nó nada que abra o resto (senha de Wi-Fi da sua casa, chave SSH).
- **SSH e contas:** só por chave; chaves individuais por pessoa e revogadas quando ela sai (Aula 3).
- **Gestão remota do Reticulum** (`remote_management_allowed`): liste só as identidades que realmente precisam.
- **Logs:** retenha o mínimo necessário (Aula 8).

## Energia: sazonalidade e envelhecimento

Os dois assuntos que derrubam nós solares depois do primeiro ano:

1. **Sazonalidade.** O dimensionamento foi feito para o pior mês (Aula 2). Se você dimensionou com dados médios anuais, o primeiro inverno mostra o erro. Acompanhe a tensão da bateria em cada estação e refaça a conta com o consumo real medido.
2. **Envelhecimento e frio.** A capacidade cai com os ciclos e com a idade; no frio, a capacidade útil cai mais e a carga abaixo de 0 graus C exige proteção (Aula 2). Um nó que "sobrevivia" com 5 dias de autonomia no primeiro ano pode ficar com muito menos no terceiro.

Medidas de projeto de operação: um valor de **tensão de corte** (abaixo dela o nó é configurado ou projetado para desligar de forma limpa e voltar quando o sol voltar, em vez de oscilar); redução de tráfego automático quando a bateria estiver baixa (telemetria e posição menos frequentes, Módulo 9, Aula 3), o que é configuração, então confira as opções da sua versão; e um **nó de reserva** pré-gravado.

## Diagnóstico de falhas (tabela de sintomas)

Guia mínimo, cruzado com os erros de campo já vistos ([Módulo 8, Aula 8](../08%20-%20LoRa%20e%20LoRaWAN/08%20-%20Alcance%20Antena%20e%20Erros%20Comuns.md), [Módulo 9, Aula 5](../09%20-%20Redes%20Mesh/05%20-%20Meshtastic%20na%20Pratica.md)):

| Sintoma | Causas prováveis, da mais para a menos comum | O que verificar |
|---|---|---|
| Um nó sumiu da rede | Bateria descarregou; água na caixa; antena ou conector solto; o nó reiniciou em laço | Tensão registrada até o desaparecimento; ir ao local; SWR |
| Todos os nós ouvem menos que antes | Antena desafinada ou danificada; conector oxidado; nova fonte de ruído ou interferência; vegetação cresceu na linha de visada | SWR das antenas; medição de referência versus a planilha original (Aula 9) |
| Dois nós não se falam de jeito nenhum | Região, preset, canal ou frequência diferentes; firmware ou versão diferentes | Comparar configurações exportadas |
| Pi reinicia em horários aleatórios | Fonte fraca; cabo fino; cartão corrompido | Tensão de alimentação (Aula 2); `journalctl -b -1` do boot anterior (com journal persistente); `dmesg` |
| Placa LoRa por USB some do Pi | Fonte fraca; cabo ruim; queda de USB (um guia da RAKwireless trata do problema com Raspberry Pi e LoRa) | `dmesg`; usar `/dev/serial/by-id/`; hub com alimentação |
| Serviço não sobe depois do reboot | Ordem das dependências; porta serial ainda não pronta; permissão | `systemctl status`, `journalctl -u`; `After=` e `Restart=` (Aula 3) |
| Rede lenta ou perdendo mensagens | Ocupação do ar alta; um nó ruidoso; um laço de MQTT | `ChUtil` e `AirUtilTX`; desligar tráfego automático; verificar duplicação |
| Erros estranhos de tempo (logs fora de hora, mensagens rejeitadas) | Relógio sem sincronismo | `timedatectl` (Aula 3) |

O método é o do desenvolvedor: **reproduza, isole uma variável, mude uma coisa por vez, registre**. E lembre a regra de ouro do Módulo 4: teste com **carga fictícia** antes de suspeitar de transmissor.

## Plano de contingência

Escreva, para cada cenário, **o que acontece, quanto tempo você aceita ficar assim (RTO), o que se perde (RPO) e o que fazer**. Exemplos, com metas sugeridas por mim:

| Cenário | Efeito na rede | RTO aceito (exemplo) | Ação |
|---|---|---|---|
| **Gateway (Pi) para de funcionar** | A parte LoRa local continua; a ponte com a internet e os serviços caem | 2 horas | Trocar o cartão pela **imagem de reserva** (Aula 3); restaurar o backup de identidades |
| **Nó de morro para de funcionar** | Perde-se a cobertura dele; o resto segue | 1 semana | Nó de reserva pré-gravado com a mesma configuração; visita com plano de segurança |
| **Internet cai** | Ponte entre os sítios cai; cada lado segue local | Sem meta (é externo) | Nada a fazer; o teste de resiliência da Aula 8 já mostrou o que sobra |
| **Chave de canal ou identidade comprometida** | Terceiros podem ler ou se passar por membro | 24 horas | Trocar chave, redistribuir, registrar (seção de segurança) |
| **Raio ou sobretensão** | Placa, cabo e conversores queimados; possível dano ao Pi e ao roteador | 1 a 2 semanas | Estoque de reserva; **protetor de linha e aterramento** (Módulo 4, Aula 6) e desconectar em tempestade evitam a maioria |
| **Interferência que você causa a terceiros, ou notificação de órgão regulador** | Obrigação legal de cessar | Imediato | **Desligar a transmissão**, conferir conformidade (Aula 11). Em radiação restrita não há proteção contra interferência prejudicial e você não pode causar interferência (Módulo 8, Aula 4) |
| **Fogo ou inchaço de bateria** | Perigo físico | Imediato | Desligar e afastar com segurança; não usar água em bateria de lítio grande sem orientação; substituir |
| **Só você sabe operar (fator ônibus igual a 1)** | Rede parada se você estiver ausente | Defina | Documentação (Aula 9), um segundo responsável com acesso às chaves em local seguro |

**Kit de reserva** (guarde pronto, etiquetado e testado): uma placa LoRa idêntica pré-gravada e configurada, antena e pigtails, cabo USB de dados, cartão SD com a imagem base, fusíveis, sílica-gel, fita de vedação, conectores e um medidor.

**Ensaio (*game day*).** Uma vez por ano, **simule** uma falha: "o Pi da sala queimou". Cronometre a restauração pela documentação, com outra pessoa lendo os passos. O que travar é o buraco da sua documentação.

**Limite honesto sobre emergência.** Uma rede LoRa de baixa taxa, sem garantia de entrega, sem prioridade e sem proteção contra interferência não substitui telefone, serviço de emergência ou rádio profissional. O radioamador tem estrutura própria de comunicação de emergência ([Módulo 5, Aula 9](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/09%20-%20Seguranca%20Emergencia%20Comunidade%20e%20Prova.md)); se o seu objetivo inclui emergência, considere isso, com licença e regras próprias. **Tenha sempre um plano B independente** e teste-o.

## Desativação

Quando um nó sai de serviço: apague as chaves e identidades do aparelho (redefinição de fábrica pelo procedimento do fabricante), retire-o do inventário, troque as chaves da rede se ele ficou fora de sua guarda, e descarte a bateria de lítio em ponto de coleta adequado.

## Entregável

1. **Manual de operação** (*runbook*): a rotina de manutenção (tabela adaptada), o procedimento de atualização e o de restauração de cada nó, passo a passo.
2. **Plano de contingência** (tabela dos cenários com RTO, RPO e ação) e a lista do kit de reserva.
3. **Registro do ensaio** (*game day*) com os tempos e os buracos encontrados.
4. **Calendário** de manutenção (no seu calendário de verdade, com lembretes).

## Checklist da etapa

- [ ] Tenho rotina de manutenção com intervalos e responsáveis.
- [ ] O procedimento de atualização (bancada, canário, reversão) está escrito.
- [ ] Sei como trocar chaves e identidades, e quando.
- [ ] Refiz a conta de energia para o pior mês e com o consumo medido.
- [ ] O plano de contingência tem RTO, RPO e ação para cada cenário.
- [ ] Executei um ensaio e corrigi a documentação.
- [ ] Tenho um plano B independente para o que for importante.

## Resumo

- Operar é a etapa longa: manutenção por calendário, atualização em bancada e por canário, versões iguais em todos os nós, backups testados.
- Segurança em rotina: trocar a chave do canal quando alguém sai ou um aparelho some; identidade do Reticulum comprometida vira identidade nova; quem tem o aparelho tem as chaves dele.
- Energia: sazonalidade (pior mês) e envelhecimento da bateria derrubam nós no segundo ou terceiro ano; monitore a tendência.
- Diagnóstico: reproduzir, isolar, mudar uma variável por vez; comparar com as medições de referência.
- Contingência por escrito: RTO, RPO, ação, kit de reserva e ensaio. A rede não é serviço de emergência: mantenha plano B.

## Para aprofundar

- [ ] [Alcance real, antena e erros comuns (Módulo 8, Aula 8)](../08%20-%20LoRa%20e%20LoRaWAN/08%20-%20Alcance%20Antena%20e%20Erros%20Comuns.md): a lista de erros de campo, com o diagnóstico.
- [ ] [Segurança, privacidade e legalidade (Módulo 9, Aula 9)](../09%20-%20Redes%20Mesh/09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md): o que é e o que não é cifrado, e a higiene de segurança em uma linha cada.
- [ ] [Modelo de ameaça, privacidade e legalidade (Módulo 10, Aula 8)](../10%20-%20Reticulum/08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md): o que o Reticulum protege e o que não protege.
- [ ] [How To Measure Meshtastic Device Power Consumption](https://meshtastic.org/docs/hardware/solar-powered/measure-power-consumption/) (Meshtastic, documentação oficial): medir o consumo para refazer a conta de energia com dados reais.
- [ ] [Putting a Node Outside: Enclosures, Weatherproofing, and Not Destroying Your Hardware](https://nepamesh.com/putting-a-node-outside-enclosures-weatherproofing-and-not-destroying-your-hardware/) (NEPA Mesh, maio de 2026): manutenção de caixa, condensação, calor e serviço em campo.
- [ ] [Meshtastic Raspberry Pi Setup Guide | Fix USB Dropouts](https://news.rakwireless.com/how-to-build-a-cleaner-more-repeatable-meshtastic-raspberry-pi-setup/) (RAKwireless): problemas de estabilidade USB com Raspberry Pi e LoRa, citado no roteiro original do módulo.

[Próxima aula: Legalidade e boas práticas finais](./11%20-%20Legalidade%20e%20Boas%20Praticas%20Finais.md)
