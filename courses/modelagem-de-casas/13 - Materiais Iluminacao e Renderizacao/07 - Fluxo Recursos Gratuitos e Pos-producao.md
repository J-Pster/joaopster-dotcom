# Aula 7: Fluxo de trabalho, recursos gratuitos e pós-produção

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: em que ordem fazer as coisas para não perder horas de render, onde conseguir texturas e HDRIs gratuitos sem violar licença, e como finalizar a imagem depois de renderizada?*

## Por que existe um fluxo

Um render final pode levar de minutos a horas (aula 5). Se você descobre, depois de esperar, que a câmera estava torta, que o piso está na escala errada ou que a luz está queimada, perdeu o tempo. Um fluxo bem ordenado separa os problemas, para você corrigir cada um no ponto mais barato. A lógica: **resolver primeiro o que é mais caro de mudar depois e mais barato de testar antes.**

## O fluxo em sete etapas

### 1. Preparar o modelo

O modelo vem dos módulos 7 a 12. Antes de renderizar, revise:

- **Escala e unidades** confirmadas (uma parede de 2,70 m tem de medir 2,70 m: as texturas e as luzes dependem disso).
- **Faces com a frente para fora** (módulo 10): faces invertidas viram superfícies escuras ou somem no render.
- **Sem geometria duplicada ou sobreposta:** duas faces no mesmo plano brigam entre si e piscam ("z-fighting"), e a luz vaza nas frestas.
- **Paredes com espessura e vãos de verdade** nas janelas e portas: a luz precisa de um buraco para entrar; um "vidro" desenhado sobre parede fechada não ilumina nada.
- **Organização:** nomes, coleções ou tags (módulo 7), para esconder o teto numa vista de cima sem afetar a luz.

### 2. Testar a luz com material neutro ("clay render")

Aplique a **todos** os objetos um material cinza fosco (rugosidade alta, cor base média, por exemplo 0,5) e renderize. Sem cor nem textura, você vê **só a luz**: onde bate, onde falta, se a sombra é suave, se a sala está escura no fundo. É prática comum de estúdios. Vantagem: se a imagem fica ruim, o problema é luz ou câmera, não material. Ajuste luz e exposição aqui (aulas 1 e 4).

### 3. Aplicar os materiais

Só depois da luz. Comece pelos que ocupam mais área (piso, parede, teto), com cor base na faixa realista (aula 2), rugosidade e escala corretas. Materiais de pouca área (maçaneta, rodapé) por último. Renderize de novo a cada grupo para ver o efeito: mudar a cor do piso muda a luz refletida na sala inteira.

### 4. Definir a câmera

Focal, altura, verticais corrigidas, composição (aula 3). Pode ser feita antes dos materiais, mas costuma-se fechá-la depois de conhecer o modelo iluminado. Salve **uma câmera por ângulo**.

### 5. Testar com baixa qualidade

Rodadas curtas, para decidir:

| Ajuste | Para que serve | Onde (Blender) |
|---|---|---|
| Resolução em porcentagem (25 a 50%) | Manter a proporção do quadro com fração dos pixels | Output Properties, Format, Percentage |
| Poucas amostras (por exemplo, 32 a 64), denoising ligado | Ver a luz sem esperar | Render Properties, Sampling |
| Render Region | Renderizar só um pedaço (uma sombra, um material) | Manual: Render Region |
| Vista renderizada no viewport | Ajuste ao vivo | Viewport Shading, modo Rendered |

Regra do módulo 9 mantida: **ajuste com render pequeno, entregue com render grande.** Para valores de amostras e resolução, o cálculo da aula 5 mostra o custo.

### 6. Render final

Só depois de tudo aprovado. Aumente resolução (100%), amostras, use noise threshold e denoising com passes de albedo e normal (aula 5). **Salve o arquivo do projeto antes de começar.** Deixe rodando à noite se preciso; se o computador travar a meio, um render longo sem salvar é perdido. Salvar em formato de imagem no fim:

- **PNG** (8 bits por canal) para uso direto na tela e pastas.
- **OpenEXR** (32 bits, sem conversão de tone mapping) se você vai retocar em outro programa com controle total de exposição (um dos vídeos de apoio da aula 1 recomenda esse caminho; o manual do Blender avisa que, ao abrir um EXR de render, é preciso indicar que se trata de um render para aplicar o View Transform corretamente). Se em dúvida, salve os dois.

### 7. Pós-produção

Última etapa, descrita mais abaixo.

## Recursos gratuitos: texturas, HDRIs e modelos

### Poly Haven

- O que tem: **HDRIs, texturas e modelos 3D**.
- **Licença (página oficial de licenças, consultada em setembro de 2026):** todos os ativos são **CC0**, "efetivamente domínio público". Pode usar para qualquer fim, inclusive comercial; **não precisa dar crédito** (é apreciado); pode redistribuir; pode incluir em produto que você vende. O site tem apoio por Patreon, e mantém termos de serviço do site para evitar mau uso do próprio site.
- Endereço: [polyhaven.com](https://polyhaven.com/) (HDRIs em [polyhaven.com/hdris](https://polyhaven.com/hdris), texturas em [polyhaven.com/textures](https://polyhaven.com/textures)).
- Como baixar (pelos vídeos de apoio): escolher o ativo, escolher a **resolução** (por exemplo 1K para teste, mais alta para a final) e o formato (HDR para HDRIs); texturas vêm em um pacote com os mapas (cor, normal, rugosidade, deslocamento etc., conforme o material; confira o que cada uma inclui).

### ambientCG

- O que tem: **texturas PBR, HDRIs e modelos**.
- **Licença (documentação oficial):** todos os ativos sob **Creative Commons CC0 1.0**, inclusive as imagens de prévia. Uso comercial permitido, sem pedir permissão. Crédito opcional; o site sugere o texto "Created using <nome> from ambientCG.com, licensed under the Creative Commons CC0 1.0 Universal License". Página: [ambientcg.com](https://ambientcg.com/).

### IES (fotometria de luminárias)

- [ieslibrary.com](https://ieslibrary.com/) é um site que reúne mais de 1,4 milhão de arquivos IES (informação da página inicial). **Os termos de uso dos arquivos não foram confirmados**: os arquivos são dados de fabricantes. Leia a licença do site antes de redistribuir. Para uso pessoal em render, o risco é pequeno, mas não confirmei.
- Fabricantes de luminárias costumam oferecer o IES no catálogo técnico do produto.

### Outros sites

Existem outros sites de texturas e modelos gratuitos, além do catálogo do SketchUp (3D Warehouse, módulo 10) e das bibliotecas dos programas de render. Cada um tem sua licença. **Não os listei porque não verifiquei os termos.** Antes de usar um recurso de terceiros, faça o teste abaixo.

### Como ler uma licença (Creative Commons)

Creative Commons são licenças-padrão. Interpretações resumidas (conferir o texto da licença no site da Creative Commons em caso de dúvida):

| Licença | Pode usar em render pessoal? | Pode vender/uso comercial? | Precisa dar crédito? |
|---|---|---|---|
| **CC0** | Sim | Sim | Não |
| **CC BY** | Sim | Sim | **Sim** |
| **CC BY-NC** | Sim | **Não** | Sim |
| Licença própria do site | Leia | Leia | Leia |

Se você só vai renderizar a sua casa para uso pessoal, quase todas servem. Se algum dia publicar ou vender a imagem, o crédito e a restrição comercial passam a importar. **Guarde o link e a licença de cada ativo** numa planilha: é o que salva você depois.

### Boas práticas com recursos

- **Resolução proporcional:** HDRI de 1K ou 2K basta para iluminar; textura de 1K a 2K para objetos pequenos e de 4K para pisos e paredes grandes vistos de perto. Arquivos muito grandes enchem a memória de vídeo e podem fazer o render falhar (aula 5).
- **Escala:** confira o tamanho real de cada textura (aula 2).
- **Não misture mapas de texturas diferentes** (o normal de uma com a cor de outra).
- **Convenção de normal map:** OpenGL versus DirectX (aula 2); se o relevo parecer invertido, esse é o motivo.

## Pós-produção: o ajuste final

**Pós-produção** é o tratamento da imagem já renderizada, como um fotógrafo faz com uma foto. Por que fazer: (1) corrige exposição e cor sem re-renderizar (barato: segundos em vez de horas); (2) recupera detalhes de sombras e luzes (a janela queimada da aula 4); (3) adiciona efeitos sutis de câmera; (4) integra elementos (pessoas, vegetação, céu de fundo).

### O que ajustar (ordem prática)

1. **Enquadramento e verticais:** recorte, alinhe o horizonte, corrija perspectiva se necessário (aula 3).
2. **Exposição e contraste:** a imagem sai, muitas vezes, achatada (principalmente com AgX, que preserva faixa dinâmica em vez de dar contraste pronto; o vídeo da CG Cookie na aula 1 fala disso). Use **curvas** ou "níveis" para dar contraste. Vigie o histograma: nada de pretos e brancos cortados.
3. **Cor:** balanço de branco (a sala não deve ficar verde nem excessivamente laranja), saturação (materiais PBR baixados às vezes vêm saturados demais, o que "entrega" o render; uma leve dessaturação ajuda, segundo Francesco Milanese).
4. **Detalhe:** nitidez leve (mais que isso cria halos).
5. **Efeitos sutis:** brilho suave em luzes intensas (*glow*, chamado no Blender de Glare), leve vinheta nas bordas, grão fino. **Sutileza é o princípio**: efeito visível denuncia render.
6. **Elementos:** pessoas, plantas ao fundo, céu; só quando fazem sentido. Os vídeos de Photoshop abaixo mostram isso.

Um caso de estudo em texto: [Francesco Milanese, dicas para melhorar um render no Blender](https://www.francescomilanese.com/pt/tutorials-br-all/tut-152-br-b3d-classroom-rendering-breakdown.html) descreve, em português, os ajustes que ele fez para ir do primeiro render ao segundo: mais variação nos materiais (ruído multiplicado à cor das paredes), escurecimento das áreas ocluídas usando o passe de oclusão de ambiente, leve dessaturação, nitidez, Glare (brilho), aumento de contraste, distorção de lente muito sutil e correção gama. Tudo feito no **Compositor do Blender**, sem sair do programa.

### Ferramentas gratuitas

| Ferramenta | O que é | Licença | Observação |
|---|---|---|---|
| **GIMP** | Editor de imagens (o nome quer dizer GNU Image Manipulation Program) | Software livre (página oficial: "distribuído livremente") | Curvas, níveis, camadas, máscaras. Há curso gratuito de GIMP para arquitetura do Solare (autor: Allan Brito) |
| **Krita** | Programa de pintura digital | Livre e de código aberto, GPL (página oficial) | Mais voltado a desenho; serve para camadas e ajustes |
| **Photopea** | Editor no navegador, sem instalação, abre e salva arquivos PSD | Gratuito, segundo a própria página; roda no seu dispositivo, sem envio de arquivos (a página afirma) | Interface parecida com a do Photoshop; planos pagos e anúncios: não verifiquei |
| **Blender Compositor** | Nós de pós-produção dentro do Blender | Parte do Blender | Ótimo para automatizar ajustes que se repetem entre várias imagens |
| **darktable** | Editor de fotos RAW (site oficial) | Não verifiquei a licença | O manual do darktable descreve um módulo de "rotação e perspectiva" que corrige linhas convergentes |

**Photoshop é pago**, mas os vídeos de Photoshop abaixo mostram conceitos (curvas, camadas de ajuste, máscaras, pessoas e vegetação) que se aplicam ao GIMP e ao Photopea com nomes de menu diferentes.

### Compositor do Blender (uma nota)

Se você ligar o **Denoising Data** (passe de dados), poderá remover o ruído no compositor com o nó **Denoise** (manual do Cycles). Vantagens e cuidados aparecem no vídeo da Kaizen citado na aula 5. Para começar, o denoising integrado às configurações de render é mais simples.

## Resumo

- Fluxo: preparar o modelo, testar a luz com material neutro (*clay*), aplicar materiais, fechar a câmera, testar em baixa qualidade, render final, pós-produção.
- Erros baratos de corrigir cedo (escala, faces, vãos, luz) custam horas se descobertos no render final.
- **Poly Haven e ambientCG** têm HDRIs, texturas e modelos sob **CC0**: uso livre, inclusive comercial, sem crédito obrigatório. Outros sites: leia a licença (CC BY exige crédito; NC proíbe uso comercial) e guarde o registro.
- Pós-produção é barata e recupera exposição, contraste e cor; o princípio é a sutileza. Salve EXR de 32 bits se for retocar com controle.
- Ferramentas gratuitas confirmadas: GIMP, Krita, Photopea e o compositor do Blender (o darktable também aparece como opção, sem licença verificada).

## Para aprofundar

- [ ] [Tratamento de Imagens - Photopea (playlist)](https://www.youtube.com/playlist?list=PLZtlc76aI4q2dpG913gZmeWuufRIuVXRF) (Mauricio Alcantara, PT-BR): playlist de Photopea.
- [ ] [Pós-produção de um render interno | Photoshop para arquitetura](https://www.youtube.com/watch?v=D4j1WQTfWd4) (Croqui Cursos, PT-BR): o caso mais próximo da sua casa.
- [ ] [PÓS-PRODUÇÃO DE RENDER NO PHOTOSHOP: DESTACANDO A ARQUITETURA](https://www.youtube.com/watch?v=6i962u1O1nQ) (Blue Rhino Academy, PT-BR).
- [ ] [CURSO COMPLETO: Pós produção RENDER de Arquitetura no Photoshop (playlist)](https://www.youtube.com/playlist?list=PLZMRG3Ql1oCK0yQoN_6HRLXZm6j09egl-) (Blue Rhino Academy, PT-BR): curso em Photoshop; os conceitos valem para GIMP.
- [ ] [Pós-produção de maquete eletrônica passo a passo | Photoshop para arquitetura](https://www.youtube.com/watch?v=rW6kIpDeqH4) (Croqui Cursos, PT-BR).
- [ ] [Curso de GIMP para arquitetura](https://solare.org.br/2022/08/19/curso-de-gimp-para-arquitetura/) (Solare, português): curso gratuito com aulas no canal do Solare no YouTube.
- [ ] [Algumas dicas para melhorar um render no Blender](https://www.francescomilanese.com/pt/tutorials-br-all/tut-152-br-b3d-classroom-rendering-breakdown.html) (Francesco Milanese, português): compositing no Blender, descrito acima.
- [ ] [How to Light your Scenes with HDRIs in Blender](https://www.youtube.com/watch?v=QNr7lwhW0h4) (Ryan King Art): inclui o download de HDRI do Poly Haven, como visto na aula 4.
- [ ] Licenças: [Poly Haven](https://polyhaven.com/license), [ambientCG](https://docs.ambientcg.com/license/).

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido.

[Próxima aula: Exercício prático, uma sala com luz de janela no Blender](./08%20-%20Exercicio%20Sala%20com%20Luz%20de%20Janela%20no%20Blender.md)
