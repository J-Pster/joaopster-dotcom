# Skill criar-curso

Uma skill para o Claude montar um curso autodidata completo, do jeito dos cursos de
joaopster.com/cursos: um vault do Obsidian com módulos, aulas em texto, glossário com hover,
questionários com gabarito e painel de progresso.

## O que tem aqui

- `SKILL.md`: o processo em 5 fases (currículo, escrita, consolidação, verificação, entrega).
- `referencias/guia-de-escrita.md`: estilo do texto, formato Obsidian e autoverificação.
- `modelo/`: a estrutura de pastas pronta (nota de início, módulo, aula, termo do glossário,
  `Progresso.base` e `.obsidian/`).

## Instalar

- **Claude Code:** copie a pasta `criar-curso` para `~/.claude/skills/` (ou para `.claude/skills/`
  dentro do projeto onde os cursos vão ficar).
- **Claude.ai ou app do Claude:** em Configurações, Capacidades, Skills, envie o arquivo zip desta
  skill.

## Usar

Peça algo como: "Aprendendo Fotografia, quero chegar em fotografar um casamento sozinho". O Claude
desenha o currículo, mostra para você aprovar, escreve os módulos e verifica tudo no fim. Depois abra
a pasta `Aprendendo <Tema>` como vault no Obsidian e leia no modo de leitura.

Criou um curso bom? Mande para o e-mail indicado em joaopster.com/cursos/como-criar: ele pode entrar
no site para outras pessoas estudarem.
