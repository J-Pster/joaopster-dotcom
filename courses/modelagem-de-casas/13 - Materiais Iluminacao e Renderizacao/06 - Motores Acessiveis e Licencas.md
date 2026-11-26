# Aula 6: Motores acessíveis e licenças

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: quais programas de render posso usar de graça para a minha casa, com que condições, e como escolher entre um motor "fiel" e um "rápido"?*

Preços e regras de licença mudam com frequência. Tudo abaixo foi consultado em **setembro de 2026**; cada item diz se foi **confirmado em página oficial** ou se veio **só de resumo de busca** (quando o site oficial bloqueou o acesso). Confira de novo antes de instalar ou pagar. A aula 4 do módulo 8 já trouxe um quadro geral de licenças; aqui o foco é o render, e este quadro **atualiza e corrige** o do módulo 8 onde há diferença (indicado no texto).

## Duas famílias de motor (o que você viu na aula 5)

- **Path tracers "fiéis":** calculam a luz por caminhos e entregam luz e reflexo mais precisos, com tempo de render maior e denoising. Exemplos: **Cycles** (Blender), **V-Ray**, o **SunFlow** do Sweet Home 3D (mais simples).
- **Motores em tempo real (ou quase):** mostram a imagem quase ao vivo enquanto você mexe, com luz aproximada ou traçado de raios em tempo real: **EEVEE** (Blender), **D5 Render**, **Twinmotion**, **Enscape**, **Lumion**. Ótimos para apresentar, passear e iterar; a precisão da luz é menor do que em path tracing puro, mas costuma bastar para um hobby.

Para um projeto de casa, os dois servem. A escolha é entre **fidelidade e controle** (path tracing) e **rapidez e facilidade** (tempo real).

## Os candidatos, um a um

### Blender: Cycles e EEVEE

- **Licença:** gratuito para qualquer uso, inclusive comercial, sem registro. O texto oficial diz que a licença (GPL) dá a liberdade de usar o Blender "para qualquer fim". Confirmado em [blender.org/about/license](https://www.blender.org/about/license/). Consistente com o que o módulo 8 registrou (o que você cria, imagens e arquivos, é seu).
- **Versão atual:** a página oficial de download listava, em setembro de 2026, o **Blender 5.2.2 LTS** (15 de setembro de 2026).
- **O que traz:** Cycles (path tracing) e EEVEE (tempo real), materiais PBR (aula 2), luzes IES, sol e céu procedurais, denoising, compositor.
- **Custo real:** curva de aprendizado maior; é um programa geral de 3D, não de arquitetura. Você já o conheceu no módulo 12.
- **Uso na casa:** importe o modelo de outro programa (OBJ, FBX, glTF; módulos 8 e 10 mostram o que cada plano de programa exporta) ou modele nele. Materiais quase sempre precisam ser **reaplicados**.

### Sweet Home 3D: foto e vídeo com SunFlow ou YafaRay

- **Licença:** gratuito e de código aberto (GPL), segundo o módulo 8.
- **Render:** o módulo 9 explica que a foto e o vídeo usam o motor **SunFlow** (padrão) e, conforme o guia oficial, **YafaRay**, ambos por **CPU**, com quatro níveis de qualidade dos quais só os dois melhores usam o motor de render. Tem menos controle de material e de luz que os motores abaixo, mas **não custa nada** e já vem pronto. Para conferir uma casa simples, resolve.
- **Uso na casa:** use quando o modelo já está no Sweet Home 3D e você quer só uma imagem bonita, sem exportar.

### D5 Render

- **Licença (confirmado no [post oficial de planos e preços do D5](https://www.d5render.com/posts/render-pricing-d5-plans), atualizado em julho de 2026):**
  - **D5 Community:** gratuito, **uso não comercial** (aprendizado, projetos pessoais, avaliação), com projetos ilimitados, plugins de sincronização e **sem marca d'água** segundo o post. Limites: imagem e panorama até **16K**, vídeo até **4K**, **1 tour** de panorama, **1 projeto** de showreel, biblioteca oficial de **2.100+** assets, IA limitada (50 créditos de teste).
  - **D5 Pro:** US$ 38 por mês ou US$ 360 por ano, uso comercial.
  - **Educação:** licença gratuita para estudantes e docentes verificados (o post diz 180 dias, renovável, sem uso comercial).
  - Correção ao módulo 8: o módulo 8 registrou que blogs de terceiros discordavam sobre marca d'água e resolução; a página oficial atual afirma **sem marca d'água e até 16K** no Community. Ainda vale conferir no instalador.
- **Requisitos:** o post informa mínimo de **NVIDIA GTX 1060 6 GB, AMD RX 6400 ou Intel Arc A3** e recomenda **RTX 3060** ou melhor; exige GPU dedicada e Windows 10 (versão 1809 ou mais nova).
- **Perfil:** tempo real com traçado de raios, fácil, ligação direta com SketchUp e outros programas (o post cita plugins de sincronização), boa biblioteca de vegetação e pessoas.

### Twinmotion

- **Licença (só resumo de busca, página oficial bloqueou o acesso direto):** segundo resultados de busca e blogs de revendedores, o Twinmotion é **gratuito para estudantes, educadores, hobbistas e para indivíduos e empresas com receita bruta anual abaixo de US$ 1 milhão**; acima disso, cerca de **US$ 445 por assento por ano**. **Não confirmado em página oficial:** confira em [twinmotion.com/license](https://www.twinmotion.com/license) (no navegador, o acesso automático retornou erro 403).
- **Perfil:** tempo real com opção de *path tracer* (um dos vídeos citados mostra o ajuste de amostras no modo path tracer), integração com Archicad, Revit e SketchUp; interface amigável.
- Um artigo do site A Curva (Mateus Leoni) e vídeos abaixo mostram o fluxo do zero ao render, usando Archicad como origem.

### Lumion

- **Licença (confirmado em páginas oficiais):** **sem plano gratuito para hobby**. Há **teste gratuito de 14 dias** do Lumion Pro, sem cartão. A licença **Lumion Student** é gratuita por um ano, renovável, para **estudantes verificados** (verificação por serviço externo, SheerID) e **só para uso educacional**. Requer PC com Windows, GPU potente e **105 GB livres em disco**.
- Consequência: para um autodidata que não é estudante de instituição de ensino, o Lumion fica no teste de 14 dias. Isso confirma o que o módulo 8 registrou.
- Detalhe de compatibilidade (de resumo de busca de central de ajuda da Lumion): projetos do teste não abrem na versão Student, e vice-versa.

### Enscape

- **Licença (confirmado no site oficial da Chaos):** **sem versão gratuita**; **teste de 14 dias** com cobrança automática após o período, a menos que você cancele. Enscape Solo listado por **US$ 47,90 por mês com cobrança anual (US$ 574,80 por ano)**. Há também cobrança mensal mais cara (resumos de busca falam de US$ 87,30 por mês, **não confirmado**). Desconto educacional existe (o módulo 8 citou até 80%).
- **Perfil:** a página da Chaos o descreve como 100% integrado às suas ferramentas de projeto, com render em tempo real ao lado do modelo (quais programas exatamente: confira na página).

### V-Ray (Chaos)

- **Licença:** teste gratuito de **30 dias** que depois vira assinatura paga se não cancelar (página oficial da Chaos, [chaos.com/vray/free-trial](https://www.chaos.com/vray/free-trial)). Preço da assinatura **não confirmado** aqui. Não encontrei plano gratuito pessoal.
- **Perfil:** path tracer de nível profissional, com versão para SketchUp (a página da Chaos oferece o teste) e para outros programas; os vídeos brasileiros de V-Ray citados na aula 4 e nesta aula mostram princípios de luz e material que valem para qualquer motor.

### Recap dos gratuitos de fato para hobby

| Programa | Gratuito para hobby? | Condição | Status |
|---|---|---|---|
| Blender (Cycles, EEVEE) | Sim, sem condição | GPL | Confirmado (oficial) |
| Sweet Home 3D (SunFlow) | Sim, sem condição | GPL | Confirmado (módulo 8) |
| D5 Community | Sim | Não comercial | Confirmado (post oficial) |
| Twinmotion | Sim, segundo busca | Hobbistas e receita abaixo de US$ 1 milhão | **Só resumo de busca** |
| Lumion | Só teste de 14 dias | Student exige matrícula | Confirmado (oficial) |
| Enscape | Só teste de 14 dias | Cobra depois | Confirmado (oficial) |
| V-Ray | Só teste de 30 dias | Cobra depois | Confirmado (oficial) |

**"Não comercial" significa:** você não pode cobrar por projetos ou renders feitos com essa licença. Modelar e renderizar a **sua** casa para você não é uso comercial. Se algum dia você fizer um render para vender, mude de licença. Não use licenças educacionais sem ser estudante, e nunca use software pirata: ilegal, risco de malware e desnecessário diante das opções acima (o módulo 8 detalha).

## Como escolher

| Se você... | Comece por |
|---|---|
| Modelou no Sweet Home 3D e quer só uma imagem | SunFlow do próprio programa (aula 6 do módulo 9) |
| Quer aprender a física do render e ter controle total, sem gastar | **Blender** (Cycles para final, EEVEE para testes) |
| Modelou no SketchUp ou Revit e quer imagens e passeio rápido | **D5 Community** ou **Twinmotion** (confirme a licença) |
| Precisa de qualidade profissional e vai vender imagens | V-Ray ou Enscape, com licença paga |

Uma regra prática: **aprenda os conceitos das aulas 1 a 5 no Blender** (gratuito, sem restrição, mostra tudo); depois, se quiser, migre para uma ferramenta de tempo real por conveniência. Os conceitos (exposição, IOR, rugosidade, HDRI) aparecem com nomes parecidos em todas. Nos motores de tempo real, procure e desative a **exposição automática** para ter controle (um dos vídeos de D5 recomenda o mesmo).

## Ponte entre modelagem e render

O módulo 10 (aula 8) e o módulo 8 explicaram formatos de troca e a perda de dados. Para render, o resumo é:

- **Ligação direta** (plugin de sincronização): D5 (plugins de sincronização citados no post oficial), Lumion (o plugin LiveSync é descrito na página oficial de teste), Enscape (integrado ao programa hospedeiro). Você mexe no modelo e o render atualiza.
- **Exportação de arquivo** (OBJ, FBX, glTF/GLB): serve para Blender e outros. Antes: faces com a frente para fora, escala confirmada, limpeza (módulo 10, aula 8). Depois: reaplicar materiais PBR.

## Resumo

- Dois tipos de motor: **path tracing** (Cycles, V-Ray, SunFlow) mais fiel e lento; **tempo real** (EEVEE, D5, Twinmotion, Enscape, Lumion) mais rápido, com luz aproximada ou traçado de raios em tempo real.
- Gratuitos de verdade para hobby: **Blender** (qualquer uso), **Sweet Home 3D** e **D5 Community** (não comercial). **Twinmotion** é gratuito para hobbistas segundo resumos de busca (não confirmado no site oficial).
- **Lumion, Enscape e V-Ray** só têm teste (14, 14 e 30 dias); Lumion Student exige matrícula.
- D5 e Lumion exigem GPU dedicada; o D5 informa mínimo de GTX 1060 6 GB.
- Todos os dados desta aula são de setembro de 2026 e mudam; reconfira antes de baixar.

## Para aprofundar

- [ ] [Enscape VS Twinmotion VS D5 | Which one is better?](https://www.youtube.com/watch?v=dzkALSoYgEU) (HOWS archi, inglês): panorama dos três.
- [ ] [D5 vs Twinmotion vs Lumion, a Render Battle!](https://www.youtube.com/watch?v=Jj64tu5TFE8) e [an Interior Render Battle!](https://www.youtube.com/watch?v=ofrgb30Krt8) (Upstairs, inglês): a mesma cena em três motores; são "batalhas" de resultado visual, e as versões podem estar defasadas.
- [ ] [Twinmotion Tutorial for Beginners in Under 15 Minutes](https://www.youtube.com/watch?v=YkgTNua5sRY) (David Tomic, inglês).
- [ ] [D5 Render Full Beginner Tutorial!](https://www.youtube.com/watch?v=5PAg1lGgD5M) (Show It Better, inglês, 37 minutos) e [D5 Render Tutorial for Beginners / Real Time Archviz](https://www.youtube.com/watch?v=bF7CaNebs2g) (Surviving Architecture, inglês).
- [ ] [O Método mais RÁPIDO E FÁCIL de Criar CENAS EXTERNAS REALISTAS com o D5 Render](https://www.youtube.com/watch?v=iDGUuhiKqCU) (OF3D Academy, Ander Alencar, PT-BR): D5 em português, exteriores.
- [ ] [Twinmotion 2023 para iniciantes: do zero ao render](https://acurva.arq.br/twinmotion-2023-para-iniciantes-do-zero-ao-render/) (A Curva, Mateus Leoni, português): fluxo a partir do Archicad.
- [ ] [Curso Sweet Home 3D: Renderização, cenas e vídeos (Aula 8/16)](https://www.youtube.com/watch?v=R0lTyS4jHb8) (Bruno Toniolo, PT-BR): o render do Sweet Home 3D.
- [ ] [Como Usar Corretamente Materiais PBR](https://www.youtube.com/watch?v=l9_I3MiG-U0) (MasterTuts, PT-BR): PBR aplicado no V-Ray, princípios válidos em qualquer motor.
- [ ] Páginas oficiais: [D5 (planos e preços)](https://www.d5render.com/posts/render-pricing-d5-plans), [Lumion (teste)](https://lumion.com/product/free-trial), [Lumion Student](https://lumion.com/product/students), [Enscape (compra)](https://www.chaos.com/enscape/buy-online), [V-Ray (teste)](https://www.chaos.com/vray/free-trial), [Twinmotion (licença)](https://www.twinmotion.com/license).

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido. Vídeos de "batalha" enfatizam resultado visual mais que o porquê.

[Próxima aula: Fluxo de trabalho, recursos gratuitos e pós-produção](./07%20-%20Fluxo%20Recursos%20Gratuitos%20e%20Pos-producao.md)
