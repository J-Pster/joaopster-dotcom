# Aula 2: Os candidatos, um a um

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que cada programa realmente é, para quem foi feito e onde ele costuma falhar para quem modela a própria casa por hobby?*

Cada ficha segue a mesma ordem: origem e lógica do programa, o que ele faz bem, onde trava e o que confirmei nas páginas oficiais. Preços e licenças detalhados ficam na aula 4. O que não consegui confirmar aparece marcado como "não confirmado".

## Candidatos principais (módulos 9 a 12)

### Sweet Home 3D

- **Categoria:** planejador de plantas e interiores.
- **Lógica:** você desenha a planta 2D (paredes, cômodos, portas, janelas), posiciona móveis do catálogo, e o programa exibe uma vista 3D em tempo real e gera imagens e vídeos com iluminação.
- **Faz bem:** curva de aprendizado muito curta, roda em máquina modesta, projeto pronto em poucas horas. A página oficial declara que é código aberto, licença GPL, com versões para Windows, macOS, Linux, iOS, Android e uma versão que roda no navegador.
- **Trava:** pouco controle sobre formas livres; a FAQ oficial cita a falta de ferramenta dedicada de telhado (contornada com modelos 3D ou plugins; confirme no módulo 9 se isso mudou na versão atual). Importa modelos OBJ, DAE, 3DS e KMZ (FAQ oficial). A geração de planta técnica com cotas e corte para prancha não aparece na FAQ: não confirmado.
- **Papel no curso:** primeira ferramenta, porta de entrada.

### SketchUp

- **Categoria:** modelagem 3D direta (com um pé no BIM via classes IFC).
- **Lógica:** desenhar contorno e extrudar (push/pull). O modelo é feito de faces e arestas agrupadas em **componentes** (objetos reutilizáveis). Planta e cortes saem de "planos de seção" aplicados ao modelo.
- **Faz bem:** é o programa mais citado como fácil de aprender para arquitetura, com o maior acervo de tutoriais em português e o **3D Warehouse** (repositório gratuito de modelos de móveis, esquadrias e objetos).
- **Trava:** sem noção de parede e laje, o modelo não se "auto-atualiza". Para gerar pranchas técnicas de qualidade é preciso o **LayOut** (aplicativo de documentação que acompanha o Pro no desktop; confirme o que cada plano inclui na página de planos). A versão gratuita roda só no navegador.
- **Versões (confirmadas na página oficial de planos, setembro de 2026):** Free (navegador), Go (iPad e web), Pro (desktop, web e iPad), Studio (só Windows, com foco em visualização e BIM), além do plano para escolas.
- **Papel no curso:** módulo 10.

### Revit

- **Categoria:** BIM autoral, da Autodesk.
- **Lógica:** modelo com níveis, paredes, lajes, telhados e **famílias** (objetos paramétricos como portas, janelas e móveis). Planta, corte, fachada, tabelas e quantitativos são vistas do mesmo modelo.
- **Faz bem:** é padrão de mercado em escritórios de arquitetura e engenharia. A documentação oficial e o volume de cursos em português são grandes.
- **Trava:** é o mais exigente em hardware entre os candidatos (16 GB de RAM como mínimo, conforme resumo da página de requisitos de 2026, e 32 GB na prática), a licença comercial é cara e não há licença gratuita para hobby (aula 4). Roda em Windows; suporte nativo a Mac não confirmado.
- **Papel no curso:** módulo 11, para quem quer entender BIM profissional e tem acesso legítimo à licença (por exemplo, como estudante).

### Archicad

- **Categoria:** BIM autoral, da Graphisoft (Hungria).
- **Lógica:** parecida com a do Revit, com uma metáfora mais "arquitetônica": você modela com ferramentas de parede, laje, telhado, pilar, e o software organiza a documentação. Traz o motor de render próprio.
- **Faz bem:** é considerado mais amigável à arquitetura que o Revit por parte dos comparativos consultados (opinião de artigos, não medida) e roda tanto em Windows quanto em macOS. Requisitos oficiais (Archicad 29): mínimo de 8 GB de RAM, recomendado de 16 GB para projetos pequenos.
- **Trava:** licença por assinatura; sem licença de hobby; a versão educacional só vale para estudantes e professores (aula 4).
- **Papel no curso:** módulo 11.

### Blender

- **Categoria:** malha/DCC com render (e BIM via Bonsai).
- **Lógica:** modelagem poligonal, esculpir, materiais e luz baseados em física. O render integrado (Cycles, por traçado de raios, e Eevee, em tempo real) dá qualidade de cinema. Sem noção construtiva nativa.
- **Faz bem:** é gratuito para qualquer uso, pessoal ou comercial (página oficial de licença). Cobre modelagem, texturização, iluminação, render e animação em um só programa.
- **Trava:** a interface tem muitas ferramentas, e precisão métrica para arquitetura exige disciplina (unidades, medidas digitadas). Requisitos oficiais: 4 núcleos, 8 GB de RAM e placa de vídeo com 2 GB de VRAM no mínimo; recomendado 32 GB de RAM e 8 GB de VRAM para trabalhos pesados.
- **Papel no curso:** módulo 12 (modelagem e render de arquitetura).

### FreeCAD (ambiente BIM)

- **Categoria:** modelador paramétrico de código aberto, com ambiente BIM.
- **Lógica:** você desenha esboços com restrições e cria objetos paramétricos. O ambiente BIM (que incorpora e substitui o antigo Arch) organiza a hierarquia Terreno, Edifício, Nível, Espaço, cria paredes, lajes, telhados e importa e exporta IFC. A página oficial lista suporte a STEP, IGES, STL, SVG, DXF, OBJ, IFC e DAE.
- **Faz bem:** é gratuito, sem licença por trás, funciona em Windows, Mac e Linux e deixa você aprender BIM sem pagar.
- **Trava:** menos polido e com menos material didático em português que os comerciais. A interface de arquitetura é mais técnica.
- **Papel no curso:** alternativa gratuita ao BIM comercial no módulo 11 (ver aula 6).

### Bonsai (antigo BlenderBIM)

- **Categoria:** BIM nativo em IFC dentro do Blender.
- **Lógica:** em vez de criar geometria e depois exportar para IFC, o modelo já é IFC o tempo todo (construído sobre a biblioteca IfcOpenShell). Você cria paredes, lajes, portas e janelas como entidades IFC e gera desenhos e documentos.
- **Faz bem:** gratuito e de código aberto, com versão para Windows, Mac e Linux (página oficial de download), instalação em cerca de 5 minutos segundo a documentação.
- **Trava:** a página oficial de download o identifica como software em fase alfa, mantido por voluntários (versão 0.8.5 quando consultei). Isso significa mudanças de comportamento e menos material em português.
- **Papel no curso:** opcional, depois do Blender básico.

## Menções breves

| Programa | O que é | Por que aparece na lista |
|---|---|---|
| AutoCAD / AutoCAD LT | CAD 2D e 3D da Autodesk | Padrão histórico de plantas em DWG; assinatura paga (LT desde cerca de US$ 500/ano, resumo de busca) |
| Vectorworks Architect | CAD e BIM | Assinatura profissional (cerca de US$ 1.530/ano, resumo de busca); licença educacional gratuita para estudantes em alguns mercados |
| Chief Architect / Home Designer | Software residencial (Home Designer é a versão para leigos) | Voltado à casa unifamiliar americana; assinatura de US$ 495/ano ou US$ 79/mês no site oficial |
| Fusion (Autodesk) | Modelagem paramétrica de produto | Licença gratuita para uso pessoal existe, mas o foco é mecânica, não arquitetura |
| Live Home 3D | Planejador de interiores | Alternativa comercial ao Sweet Home 3D, com versão gratuita limitada |
| Planner 5D, HomeByMe | Planejadores online | Rápidos e visuais, com catálogo de marcas; bom para ideias, fraco para projeto |

## Motores de render (categoria 6)

| Programa | Observação |
|---|---|
| Twinmotion (Epic Games) | Gratuito para estudantes, educadores e hobbistas segundo resumos de busca do site oficial (aula 4); plataformas não confirmadas |
| Enscape | Plugin de render em tempo real para Revit, SketchUp, Rhino, Archicad e Vectorworks; assinatura paga com teste de 14 dias (página oficial) |
| D5 Render | Plano gratuito "Community" para fins não comerciais, aprendizado e projetos pessoais (página oficial); exige placa de vídeo com suporte a ray tracing, Windows |
| Lumion | Assinatura paga, teste de 14 dias; licença gratuita só para estudantes; não tem suporte oficial a Mac (página oficial do teste) |

## Resumo

- Sweet Home 3D e SketchUp são as entradas mais rápidas; Blender é a mais completa em visual; Revit e Archicad são BIM profissional; FreeCAD e Bonsai são BIM gratuito e mais técnico.
- Cada programa herda uma limitação da sua categoria: SketchUp não sabe o que é parede, Blender não sabe cotar projeto, planejadores simples não dominam forma livre.
- Só Sweet Home 3D, Blender, FreeCAD e Bonsai são gratuitos para qualquer uso sem condição; SketchUp Free e Twinmotion são gratuitos com restrições de uso (aula 4).
- Motores de render dependem de um modelo vindo de outro programa.

## Para aprofundar

- [ ] [Sweet Home 3D (site oficial)](https://www.sweethome3d.com/) (Sweet Home 3D): página de origem para baixar, ver a licença e as versões.
- [ ] [SketchUp, Revit e Archicad: qual software de modelagem 3D escolher?](https://blog.casoca.com.br/sketchup-revit-archicad/) (Blog Casoca): compara curva de aprendizado, hardware e quando usar cada um. Cobre só esses três.
- [ ] [Sweet Home 3D vs. Pro Design Software (Revit) | Arch Professional Reacts](https://www.youtube.com/watch?v=GMZWLp2ypOQ) (Angorabuilds, inglês): pelo título, contrasta um planejador simples e gratuito com um BIM profissional.
- [ ] [Revit vs ArchiCAD (2025): Which BIM Software is Better for Your Project?](https://www.youtube.com/watch?v=AXT7miVHJ9E) (Interscale, inglês): comparativo entre os dois principais BIM.

[Próxima aula: Critérios de escolha e tabela comparativa](./03%20-%20Criterios%20de%20Escolha%20e%20Tabela%20Comparativa.md)
