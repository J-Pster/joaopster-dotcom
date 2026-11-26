[Voltar ao módulo](./README.md)

# Aula 8: Iluminação, câmeras e render

*Pergunta que esta aula responde: como definir o que precisa ser mostrado, configurar sol, luz e câmeras para isso e produzir um conjunto de imagens que também sirva de teste do projeto?*

## Por que o render também é ferramenta de verificação

Uma imagem final serve para apresentar, mas a mesma cena, com sol na data e hora certas, **testa** o que a aula 2 decidiu: a sala recebe sol de inverno? O beiral barra o sol de verão? O quarto fica escuro à tarde? Por isso esta aula tem duas passadas: **imagens de teste** (baixa qualidade, rápidas, com foco em luz e sombra) e **imagens finais** (alta qualidade, para mostrar). A física da luz e do material, os motores e a pós-produção estão no [módulo 13](../13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md); aqui você aplica ao seu projeto.

## Etapa 1: lista de vistas (shot list)

Defina antes de renderizar quais imagens precisa. Uma lista enxuta e útil, que serve também ao profissional na aula 11:

| # | Vista | Câmera | Serve para |
|---|---|---|---|
| 1 | Fachada principal, da rua | altura do olho (cerca de 1,60 m), lente normal | apresentar e conferir relação com a rua e o vizinho |
| 2 | Aérea de 3/4 | alta, mostrando lote e recuos | ver implantação, telhado, quintal |
| 3 | Fundos e quintal | altura do olho | conferir vegetação e área permeável |
| 4 | Sala de estar | altura do olho, do canto oposto à entrada | luz natural, circulação, móveis |
| 5 | Cozinha | idem | bancada, ventilação, ligação com a área de serviço |
| 6 | Quarto principal | idem | sombra de tarde, ventilação |
| 7 | Vista noturna (opcional) | fachada | luz artificial |

A altura de câmera de 1,60 m é convenção de prática (não é norma); o ponto é a câmera simular o que uma pessoa vê. Evite lentes muito abertas: elas esticam os cômodos e enganam sobre o tamanho (um perigo real para quem projeta o próprio espaço).

## Etapa 2: sol e céu como teste de projeto

Configure o sol pela **localização, data e hora** (o Sweet Home 3D e o SketchUp têm essa opção; no SketchUp, as sombras reais dependem da geolocalização, conforme o [módulo 10, aula 7](../10%20-%20Pratica%20com%20SketchUp/07%20-%20Materiais%20Warehouse%20Cenas%20e%20Cortes.md); no Sweet Home 3D veja a [aula 6 do módulo 9](../09%20-%20Pratica%20com%20Sweet%20Home%203D/06%20-%20Vista%203D%20Iluminacao%20e%20Render.md)). O **norte do modelo** deve estar correto (aula 5).

Faça a tabela de testes:

| Data | Hora | O que conferir |
|---|---|---|
| 21 de dezembro (solstício de verão, hemisfério sul) | 9 h, 12 h, 15 h | o beiral e os brises barram o sol alto nas janelas norte? |
| 21 de junho (solstício de inverno) | 9 h, 12 h, 15 h | o sol baixo entra na sala e nos dormitórios que devem aquecer? |
| Equinócio (ou uma data qualquer intermediária) | 15 h | a fachada oeste está protegida? |

Registre por escrito **onde o sol bate** em cada ambiente. Onde o resultado contradiz a aula 2, decida entre ajustar o beiral, mover uma janela ou aceitar o conflito.

Depois, teste a **luz natural interna** em um dia nublado (céu difuso): se o fundo da sala fica escuro, a janela é pequena ou o ambiente é profundo demais.

## Etapa 3: luz artificial e ambiente

- **Luz do dia**: sol (direcional) mais céu (difuso). Em motores de render, o céu ou uma imagem HDRI cuida do difuso.
- **Luz artificial**: posicione pontos de luz nos locais definidos pelo projeto elétrico simplificado (aula 4); o número de pontos por cômodo foi estimado pela regra da NBR 5410 no módulo 5.
- **Temperatura de cor** e intensidade: valores mais quentes em salas e quartos; mais neutros em cozinhas e áreas de trabalho. Para valores concretos e o efeito da exposição, consulte o módulo 13 (não confirmado ali um vídeo bom sobre exposição).
- **Não exagere**: luz demais "lava" a imagem e esconde defeitos, o contrário do que um teste precisa.

## Etapa 4: render em duas passadas

1. **Teste**: resolução baixa, qualidade baixa, poucas amostras. Objetivo: corrigir posição de câmera, luz, escala de material e objetos esquecidos. É o mesmo princípio do módulo 9: "ajuste com imagem pequena, entregue com imagem grande".
2. **Final**: resolução alta e qualidade alta, só depois de aprovar o teste. O tempo de render pode ir de minutos a horas, dependendo do motor, da cena e da máquina.

Escolha do motor pela licença e pela máquina (módulo 8 e módulo 13). Caminho gratuito de fato para hobby, segundo o módulo 13 (setembro de 2026): Blender (Cycles e Eevee), e D5 Community para uso não comercial; confirme os termos no dia da instalação. Se você modela em Sweet Home 3D ou SketchUp Free e quer render mais realista, exporte para o Blender (OBJ, no caso do Sweet Home 3D; no SketchUp Free a exportação de modelo tem restrições, veja o [módulo 10, aula 8](../10%20-%20Pratica%20com%20SketchUp/08%20-%20Terreno%20Extensoes%20Exportacao%20e%20Ponte%20para%20Render.md)). Antes de exportar: faces orientadas, escala confirmada, arquivo limpo.

Se o seu programa tem render embutido (o Sweet Home 3D tem foto e vídeo, módulo 9, aula 6), ele basta para o capstone; o render "de revista" é opcional.

## Etapa 5: pós-produção e apresentação (opcional)

Ajustes simples de brilho e contraste ajudam. Pós-produção pesada (Photoshop) é opcional e paga; o módulo 13 lista materiais. Monte um **álbum** com as imagens numeradas, cada uma com legenda: vista, data e hora do sol, câmera e o que ela prova.

## Entregável da aula 8

- Lista de vistas, com a câmera de cada uma.
- Tabela de testes de sol preenchida, com o que foi observado e as decisões.
- Imagens finais (pelo menos fachada, sala, cozinha, quarto e aérea) com legendas.
- Arquivo do modelo com as cenas ou câmeras salvas.

## Checklist da aula 8

- [ ] O norte do modelo está correto e a localização e a data do sol estão configuradas.
- [ ] Testei os dois solstícios em três horários e escrevi o resultado.
- [ ] As câmeras estão à altura do olho, com lente que não distorce o tamanho dos cômodos.
- [ ] Fiz render de teste antes do final.
- [ ] Sei qual motor usei e que licença ele exige para hobby.
- [ ] Cada imagem tem legenda com data, hora, câmera e o que ela demonstra.

## Resumo

- O render tem dois papéis: apresentar e testar (sol, sombra, luz natural).
- Defina a lista de vistas antes de renderizar; use altura de olho e lentes que não enganem o tamanho.
- Teste os solstícios de verão (21 de dezembro) e de inverno (21 de junho) em manhã, meio-dia e tarde.
- Renderize primeiro em baixa qualidade, corrija, e só então renderize em alta.
- Use o motor que a sua licença, a sua máquina e o seu programa permitem; o gratuito basta para o capstone.

## Para aprofundar

- Os materiais de apoio de luz, PBR, motores e pós-produção estão no [módulo 13](../13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md); não repito os links aqui.

[Próxima aula: Extrair plantas, cortes, fachadas, quantitativos e pranchas](./09%20-%20Extraindo%20Plantas%20Cortes%20Fachadas%20Quantitativos%20e%20Pranchas.md)
