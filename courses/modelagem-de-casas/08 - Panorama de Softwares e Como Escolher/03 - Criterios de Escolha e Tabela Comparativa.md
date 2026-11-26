# Aula 3: Critérios de escolha e tabela comparativa

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: com que régua comparar os programas para que a escolha dependa do seu caso e não da fama do software?*

## Por que definir critérios antes de olhar a tabela

Sem critério, a decisão cai no "o que todo mundo usa". Mas o melhor programa para um escritório de 20 pessoas (que precisa de colaboração, normas e prazos) é diferente do melhor para uma pessoa modelando a própria casa nos fins de semana (que precisa de custo zero, curva curta e resultado visível). Esta aula lista oito critérios, explica o que cada um mede e por que importa para você, e só então cruza com os programas.

## Os oito critérios

### 1. Curva de aprendizado

**Mede:** quantas horas até produzir algo útil e quantos conceitos novos aparecem no caminho. Depende de quão "inteligente" é o programa: quanto mais ele sabe sobre construção (BIM), mais conceitos você precisa aprender antes (níveis, famílias, parâmetros). Quanto mais direta a ferramenta (push/pull, planta 2D), mais rápido você começa, mas mais trabalho manual depois.

### 2. Custo e licença para hobby

**Mede:** se você pode usar legalmente, sem pagar, para um projeto pessoal de casa. Não basta o programa ter "versão grátis": é preciso ler a licença. Há quatro situações que aparecem ao longo do módulo: gratuito para qualquer uso (código aberto), gratuito para uso pessoal não comercial, gratuito só para estudante, e pago com teste temporário. A aula 4 traz os fatos verificados.

### 3. Hardware exigido

**Mede:** processador, memória RAM e placa de vídeo. Importa porque um modelo de casa com muita vegetação, móveis detalhados e texturas pode passar de 1 GB de memória, e um programa exigente numa máquina fraca trava e desanima. Placa de vídeo é essencial nos motores de render em tempo real.

### 4. Plataformas

**Mede:** Windows, macOS, Linux ou navegador. Alguns programas de BIM profissionais rodam só em Windows. Se você usa Mac ou Linux, esse critério elimina candidatos de imediato.

### 5. Ecossistema e material em português

**Mede:** quantidade de tutoriais, cursos, fóruns e bibliotecas de objetos (móveis, esquadrias) na sua língua. Como você aprende sozinho, é o critério que mais pesa no dia a dia: um programa modesto com muita ajuda vence um excelente sem ajuda. A nota da tabela abaixo é avaliação editorial deste curso baseada no volume de conteúdo que encontrei, não uma medição.

### 6. Saída de plantas e cortes

**Mede:** capacidade de gerar desenhos técnicos (planta baixa, corte, fachada, com cotas e escala, como no módulo 3) a partir do modelo. É o que separa "vejo a casa em 3D" de "tenho projeto que posso mostrar a um arquiteto ou usar para conversar com a obra". BIM faz isso nativamente; SketchUp usa o aplicativo LayOut; planejadores simples entregam plantas mais básicas.

### 7. Qualidade de render

**Mede:** o realismo da imagem final. Ela depende do motor de render e da sua habilidade em materiais e luz (módulo 13). O Blender é a referência em qualidade; os motores em tempo real dão ótimo resultado com pouco esforço; os planejadores simples entregam imagens mais "de catálogo".

### 8. Interoperabilidade

**Mede:** quão bem o programa troca arquivos com os outros (importar de um, exportar para outro sem perder informação). Importa porque você provavelmente vai usar mais de um programa no mesmo projeto. A aula 5 desenvolve.

## Tabela comparativa

Legenda das notas (1 a 5, avaliação editorial deste curso; 5 é o melhor para um hobbista): a coluna de custo reflete a facilidade de usar legalmente sem pagar.

| Programa | Curva (5 = mais fácil) | Custo para hobby (5 = gratuito sem condição) | Hardware (5 = mais leve) | Plataformas | Material em português | Plantas e cortes | Render | Interoperabilidade |
|---|---|---|---|---|---|---|---|---|
| Sweet Home 3D | 5 | 5 | 5 | Win, Mac, Linux, iOS, Android, navegador | 4 | 2 | 2 | 2 |
| SketchUp (Free) | 4 | 4 | 4 | Navegador | 5 | 1 | 2 | 2 |
| SketchUp (Pro) | 4 | 2 | 4 | Win, Mac, web, iPad | 5 | 4 (com LayOut) | 3 (com motor externo) | 4 |
| Blender | 2 | 5 | 3 | Win, Mac, Linux | 4 | 1 | 5 | 4 |
| FreeCAD (BIM) | 2 | 5 | 4 | Win, Mac, Linux | 2 | 3 | 1 | 4 |
| Bonsai | 1 | 5 | 3 | Win, Mac, Linux | 1 | 3 | 3 (herda o Blender) | 5 (IFC nativo) |
| Revit | 2 | 1 (só estudante) | 1 | Windows | 4 | 5 | 3 | 4 |
| Archicad | 3 | 1 (só estudante) | 2 | Win, Mac | 3 | 5 | 4 | 4 |
| Twinmotion | 4 | 4 | 2 | não confirmadas | 3 | 0 (não gera) | 4 | 3 |
| D5 Render | 4 | 4 | 2 (exige GPU com ray tracing) | Windows | 3 | 0 (não gera) | 5 | 3 |

As notas de hardware, plataformas e custo se apoiam nos fatos das aulas 4 e desta aula; as de curva, português, render e interoperabilidade são julgamento do curso, baseado nos comparativos consultados, e devem ser tratadas como orientação, não como fato.

## Requisitos de hardware verificados

Números de páginas oficiais, consultadas em setembro de 2026. As versões mudam a cada ano, então confira a página antes de comprar máquina.

| Programa | Mínimo | Recomendado | Fonte |
|---|---|---|---|
| Blender | 4 núcleos com SSE4.2, 8 GB de RAM, GPU com 2 GB de VRAM (OpenGL 4.3 ou Vulkan 1.3); Windows 8.1, macOS 13 (só Apple Silicon nas versões novas), Linux | 32 GB de RAM, 8 GB de VRAM, tela Full HD | blender.org (oficial) |
| SketchUp 2026 | 8 GB de RAM, placa de vídeo dedicada, 6 GB de disco, OpenGL 3.1; Windows 11 (o suporte ao Windows 10 foi retirado a partir da versão 2026.1, segundo a ajuda oficial) | 16 GB de RAM; para materiais PBR (fotorrealistas) a página cita GPU de alto desempenho, valor de VRAM que difere entre as fontes consultadas: não confirmado | help.sketchup.com (oficial) |
| Archicad 29 | Windows 11, 8 GB de RAM, placa compatível com DirectX 11, 5 GB de disco (NVMe recomendado); macOS 14 ou mais novo, Apple M1 ou Intel | Projetos pequenos: i5 ou Ryzen 5, 16 GB, 4 GB de VRAM. Médios: i7 ou Ryzen 7, 32 GB, 6 GB de VRAM | graphisoft.com (oficial) |
| Revit 2026 | 16 GB de RAM, 30 GB de disco, Windows 10 (v1809) ou 11 | 32 GB de RAM, GPU com 6 a 8 GB de VRAM | Resumo de busca da página da Autodesk (a página oficial bloqueou o acesso); não confirmado diretamente |
| D5 Render | GPU com ray tracing (NVIDIA GTX 1060, Intel Arc 3 ou AMD RX 6400 no mínimo), Windows 10 v1809 | RTX 3060 (Ti), 32 GB de RAM DDR4 | d5render.com (oficial) |
| Lumion | Windows 10 de 64 bits ou mais novo, 105 GB livres em disco, sem suporte oficial a Mac | placa de vídeo potente | lumion.com (oficial) |
| Sweet Home 3D | A FAQ lista 400 MHz e 256 MB, valor claramente desatualizado; qualquer computador atual serve | Java já vem embutido nos instaladores | sweethome3d.com (oficial) |
| FreeCAD | Não confirmado nesta verificação | | |

Regra prática: **16 GB de RAM e uma placa de vídeo dedicada atual** cobrem Sweet Home 3D, SketchUp, Blender e Archicad em casas residenciais. Revit e render em tempo real pedem 32 GB e GPU melhor.

## Resumo

- Escolha por oito critérios: curva de aprendizado, licença para hobby, hardware, plataformas, material em português, saída de plantas e cortes, qualidade de render, interoperabilidade.
- Nenhum programa vence em todos: quem é fácil (Sweet Home 3D, SketchUp) entrega menos documentação técnica; quem é completo (Revit, Archicad) exige mais máquina, mais estudo e licença.
- Licença para hobby elimina rapidamente muitos candidatos: gratuitos sem condição são Sweet Home 3D, Blender, FreeCAD e Bonsai.
- Com 16 GB de RAM e uma placa de vídeo dedicada você cobre a maior parte dos programas deste curso.

## Para aprofundar

- [ ] [Blender: requisitos de sistema](https://www.blender.org/download/requirements/) (blender.org): página oficial com mínimos e recomendados por sistema operacional.
- [ ] [Requisitos de hardware e software do SketchUp](https://help.sketchup.com/en/sketchup/system-requirements) (SketchUp Help): tabela oficial por versão.
- [ ] [Requisitos de sistema do Archicad e outros produtos Graphisoft](https://www.graphisoft.com/en-us/plans-and-products/system-requirements/) (Graphisoft): valores por porte de projeto.
- [ ] [Requisitos de sistema do D5 Render](https://www.d5render.com/system-requirements) (D5): GPU, CPU e RAM por nível.

[Próxima aula: Licenças e preços, fatos verificados](./04%20-%20Licencas%20e%20Precos%20Fatos%20Verificados.md)
