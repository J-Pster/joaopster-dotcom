# Módulo 13: Materiais, iluminação e renderização

Nos módulos 9 a 12 você aprendeu a modelar a casa em Sweet Home 3D, SketchUp, BIM e Blender. Um modelo, porém, é só geometria: o que faz uma imagem 3D parecer uma foto ou um desenho de computador é **a luz e o material**. Este módulo responde **por que** e **como**, com a física por trás de qualquer render, valendo para qualquer programa: como a luz se comporta (direta, indireta, cor, sombra, exposição), como o material responde a ela (PBR, mapas, escala), como a câmera enquadra, como o computador calcula a imagem (rasterização e path tracing, amostras, denoising, CPU e GPU), quais motores são gratuitos para hobby, e como fechar a imagem em pós-produção. Vem agora porque você já sabe modelar e vai precisar dessas decisões no capstone (módulo 14). Retoma o módulo 2 (sol, luz natural, carta solar) para reproduzir a luz do seu lote no render.

O conteúdo principal é texto, com um exercício completo em **Blender (gratuito)**. Os vídeos são apoio: mostram a interface e o gesto.

## Aulas

1. [A luz e a imagem](./01%20-%20A%20Luz%20e%20a%20Imagem.md): o que a luz faz numa cena (direta, indireta, iluminação global), intensidade e exposição, temperatura de cor em kelvin, sombras duras e suaves, tone mapping.
2. [Como o material responde à luz](./02%20-%20Como%20o%20Material%20Responde%20a%20Luz.md): difuso, rugosidade, metálico, transparência, IOR, subsurface; PBR e mapas (albedo, roughness, normal, bump, displacement, AO); UV mapping e escala.
3. [Câmera e composição](./03%20-%20Camera%20e%20Composicao.md): distância focal e campo de visão, verticais em arquitetura (shift), composição, profundidade de campo.
4. [Luz de exterior e de interior](./04%20-%20Luz%20de%20Exterior%20e%20de%20Interior.md): sol e céu, horário, HDRI, luz que entra pelas janelas, lâmpadas e arquivos IES.
5. [Como o computador calcula a imagem](./05%20-%20Como%20o%20Computador%20Calcula%20a%20Imagem.md): rasterização versus path tracing, amostras, ruído, denoising, resolução, CPU versus GPU.
6. [Motores acessíveis e licenças](./06%20-%20Motores%20Acessiveis%20e%20Licencas.md): Cycles e EEVEE, Sweet Home 3D, D5, Twinmotion, Lumion, Enscape e V-Ray, com licenças verificadas em setembro de 2026.
7. [Fluxo de trabalho, recursos gratuitos e pós-produção](./07%20-%20Fluxo%20Recursos%20Gratuitos%20e%20Pos-producao.md): etapas do render, Poly Haven e ambientCG (CC0), como ler licenças, GIMP, Krita, Photopea.
8. [Exercício prático: uma sala com luz de janela no Blender](./08%20-%20Exercicio%20Sala%20com%20Luz%20de%20Janela%20no%20Blender.md): do zero ao arquivo final, validado por uma conta de insolação.

## Sobre a curadoria

Título e canal de todos os vídeos foram confirmados; **o conteúdo dos vídeos não foi assistido**. Muitos vídeos de Blender são de versões anteriores à atual (5.2 LTS), então nomes de botões podem diferir: o texto das aulas usa o manual oficial da 5.2 e diz "confira" onde o nome exato não foi confirmado. Vídeos de comparação de motores ("batalhas") mostram resultado visual, mais que o porquê. Licenças e preços têm a data (setembro de 2026) e o status: confirmado em página oficial ou só resumo de busca (é o caso do Twinmotion, cuja página oficial bloqueou o acesso automático). Materiais em português de boa qualidade sobre exposição e tone mapping, profundidade de campo e path tracing são escassos: nesses pontos os vídeos de apoio são em inglês.

## Checklist de saída do módulo

- [ ] Por que uma sala sem iluminação global tem sombras pretas e chapadas, e o que a luz indireta acrescenta?
- [ ] Por que a exposição e a potência das luzes se compensam, e o que importa mais entre elas?
- [ ] Por que a luz de uma janela ampla dá sombra suave e a de uma lâmpada nua dá sombra dura?
- [ ] Por que uma parede branca deve ter cor base perto de 0,8 e não 1,0, e por que o metálico é quase sempre 0 ou 1?
- [ ] Por que mapas de normal e rugosidade devem ser lidos como "não cor" (Non-Color)?
- [ ] Por que a escala da textura deve ser conferida contra uma medida real (a porta)?
- [ ] Por que, em arquitetura, se usa câmera nivelada com shift em vez de inclinar a câmera?
- [ ] Por que a rasterização é rápida e o path tracing é fiel, e o que é uma amostra?
- [ ] Por que dobrar a resolução em largura e altura quadruplica o tempo de render?
- [ ] Quais programas de render posso usar de graça para a minha casa, e o que "não comercial" significa?

Quando estiver confiante, siga para o módulo final, [Módulo 14: Projeto Completo, Modelando Sua Casa](../14%20-%20Projeto%20Completo%20Modelando%20Sua%20Casa/README.md).
