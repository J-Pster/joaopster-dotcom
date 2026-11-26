[Voltar ao módulo](./README.md)

# Aula 1: Por que uma rede mesh existe

*Pergunta que esta aula responde: que problema uma rede em malha resolve que a rede em estrela (celular, Wi-Fi, LoRaWAN) não resolve, e o que se paga por isso?*

## O problema: a estrela depende de um centro

No Módulo 8 você viu o LoRaWAN: vários sensores falam direto com um **gateway**, e o gateway leva os dados à internet e ao servidor. Isso é uma **topologia em estrela**. A rede de celular, o roteador Wi-Fi da sua casa e a maior parte da internet de acesso funcionam assim: um ponto central e muitos pontos de borda ligados só a ele.

A estrela é simples e eficiente, mas carrega duas fraquezas estruturais:

1. **Ponto único de falha.** Se o gateway (ou a torre, ou o roteador) cai, todos os nós ligados a ele ficam isolados, mesmo que estejam a 50 m um do outro. Os nós não sabem falar entre si sem o centro.
2. **Alcance limitado ao raio do centro.** Um nó só participa da rede se seu sinal chegar ao gateway. O que está além do alcance de rádio do gateway não existe para a rede. Para cobrir mais área, é preciso instalar mais gateways, cada um com energia, backhaul (o link que leva os dados até a internet) e manutenção.

Para um desenvolvedor: é como um sistema em que todo tráfego passa por um único servidor. Cliente e cliente só conversam pelo servidor. Se o servidor cai, o sistema inteiro para.

## O vocabulário das topologias

**Topologia** é o desenho de quem se liga a quem. Os nomes que você vai encontrar:

| Topologia | Como é | Falha típica | Onde aparece |
|---|---|---|---|
| **Ponto a ponto** | Dois nós, um enlace | Perdeu o enlace, acabou | Dois rádios LoRa do Módulo 8 |
| **Estrela** | N nós, cada um ligado só ao centro | Centro cai, tudo cai | LoRaWAN, Wi-Fi, celular |
| **Árvore** | Estrelas ligadas em hierarquia (centro de centros) | Nó intermediário cai, o galho inteiro abaixo cai | Internet de acesso, redes corporativas |
| **Malha parcial (partial mesh)** | Cada nó liga-se a alguns vizinhos, formando vários caminhos | Precisa de vários cortes para isolar alguém | Internet núcleo, redes mesh de rádio |
| **Malha total (full mesh)** | Todo nó liga-se a todos | Muito resiliente, mas o número de enlaces cresce como `N x (N - 1) / 2` | Poucos nós críticos |

Em rádio, a malha total quase nunca é escolha: ela acontece "de graça" quando todos os nós estão perto o bastante para se ouvirem (um único **domínio de colisão**, termo que a Aula 3 explica). A malha parcial é o caso comum: cada nó ouve só quem está no seu alcance, e o desenho da rede é ditado pela geografia.

Exemplo do crescimento da malha total: 10 nós têm `10 x 9 / 2 = 45` enlaces; 100 nós têm `100 x 99 / 2 = 4.950`. Por isso, em redes cabeadas, ninguém liga tudo com tudo. Em rádio o problema é outro (o meio é compartilhado, não são cabos), e você verá que ouvir muitos vizinhos tem um custo real.

## A ideia da mesh: cada nó também repassa

Numa **rede mesh** (malha), todo nó, além de enviar e receber os próprios dados, **retransmite (repassa) os pacotes dos outros**. Cada nó é ao mesmo tempo usuário e infraestrutura.

Consequências diretas:

- **Alcance por saltos (multi-hop).** A mensagem de A chega a D mesmo que A não alcance D, passando por B e C. Cada passagem de um nó a outro é um **salto (hop)**. O alcance da rede deixa de ser o alcance de um rádio e vira o alcance de uma corrente de rádios.
- **Sem ponto único de falha.** Se B some, e existir outro nó B' que ouve A e C, a mensagem passa por B'. A rede se **autorrecupera (self-healing)**, sem administrador.
- **Sem infraestrutura obrigatória.** Sem torre, sem operadora, sem internet. Cada pessoa que liga um nó estende a rede para todos.
- **Cresce com o uso.** Mais nós, mais caminhos alternativos e mais cobertura (até um limite, que é o assunto da Aula 3).

Um exemplo ilustrativo (os números são hipotéticos; o alcance real depende de terreno e antena, como o Módulo 2 mostrou). Se cada enlace confiável tem 2 km, uma corrente de 4 nós em linha cobre 6 km de ponta a ponta, sem que nenhum rádio tenha alcance maior que 2 km. O alcance do sistema é a soma dos saltos.

## O que se paga: os custos da mesh

Nada é de graça. As trocas:

| Ganho | Custo correspondente |
|---|---|
| Alcance por saltos | Cada salto **repete a transmissão**: o mesmo dado ocupa o ar N vezes |
| Redundância de caminhos | Nem todo caminho é bom: pacotes duplicados e ecos, exigindo controle de duplicata |
| Sem servidor central | Sem quem coordene: cada nó decide sozinho quando falar e a quem repassar |
| Autorrecuperação | Descobrir o caminho (roteamento) custa mensagens de controle |
| Cada nó é infraestrutura | Nó que só repassa gasta energia e tempo de ar, mesmo sem ter nada a dizer |
| Simplicidade de implantação | Latência e confiabilidade variam com o número de saltos |

O custo central em rádio é este: **o meio é compartilhado e escasso**. Na estrela, o gateway tem hardware sofisticado, muitos canais e recebe várias transmissões em paralelo. Na mesh, cada nó tem **um** rádio, **uma** frequência por vez, e todo salto extra consome o mesmo espectro que os vizinhos estão usando. Por isso uma mesh LoRa não escala como a internet. Esse é o tema das Aulas 2 e 3, e ele explica quase todas as decisões de projeto do Meshtastic e do MeshCore.

## Estrela ou mesh: como escolher

- **Você tem um ponto alto e confiável com energia e internet, e muitos sensores em volta?** Estrela (LoRaWAN) é mais eficiente, mais escalável e mais previsível.
- **Você não tem infraestrutura, os nós se movem, e o objetivo é pessoas conversando (ou trocando posição) sem depender de terceiros?** Mesh.
- **Você quer resiliência sem depender do centro, mas não quer o caos da inundação?** Uma **estrela de estrelas com repetidores fixos bem colocados** é um meio-termo, e é exatamente o que o MeshCore busca (Aula 6).

Em todo caso, a "mesh" real de rádio de baixa taxa costuma ser menos "todos repassam tudo" e mais "poucos nós bem posicionados fazem quase todo o trabalho", como você verá.

## Onde a mesh cabe no seu objetivo

O objetivo do curso é montar uma rede de comunicação privada, sem depender de operadora. A mesh é a resposta arquitetural: sem servidor central, sem assinatura, qualquer um pode acrescentar um nó. O preço, que este módulo ensina a medir, é taxa muito baixa (uma mensagem de texto por vez, ~1 kbps no preset padrão do Meshtastic), e limites de escala. Isso serve bem para texto curto, posição e telemetria. Não serve para voz, foto ou vídeo.

## Resumo

- **Estrela**: um centro liga todos. É eficiente, mas o centro é **ponto único de falha** e o alcance da rede é o alcance do centro.
- **Mesh**: cada nó também repassa. Alcance por **saltos**, sem centro, com **autorrecuperação**.
- Topologias: ponto a ponto, estrela, árvore, malha parcial, malha total. Em rádio, a malha parcial é o caso normal porque a geografia decide quem ouve quem.
- Custo da mesh: cada salto **repete a transmissão** e o meio é compartilhado, então tempo de ar vira o recurso escasso.
- Mesh serve para texto curto, posição e telemetria sem infraestrutura, não para voz ou vídeo.

## Para aprofundar

- [ ] [Mesh Network Topologies and Architectures Explained](https://mobilicom.com/insight/mesh-network-topologies/) (Mobilicom): artigo que explica por que cada nó atuar como transmissor e receptor elimina o ponto único de falha e permite autocura. É texto de fabricante, com viés comercial, mas a parte conceitual serve.
- [ ] [Client-Server and Peer-to-Peer Networks](https://www.youtube.com/watch?v=z98ECVn-w3Q) (MrBrownCS): vídeo de fundamentos de redes que mostra o modelo cliente-servidor e o ponto a ponto, útil como base de comparação. Não trata de rádio.

[Próxima aula: Roteamento em uma mesh](./02%20-%20Roteamento%20em%20Mesh.md)
