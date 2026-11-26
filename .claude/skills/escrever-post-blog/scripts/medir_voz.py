# Mede primeira pessoa, ritmo e pontuacao de um post em markdown.
# Uso: python3 .claude/skills/escrever-post-blog/scripts/medir_voz.py caminho/do/post.md
# Como ler o resultado esta em references/padroes-ia.md, item 11 da checagem.
import re
import statistics
import sys

t = open(sys.argv[1], encoding="utf-8").read()
t = re.sub(r"^---\n.*?\n---\n", "", t, flags=re.S)  # frontmatter
t = re.sub(r"```.*?```", "", t, flags=re.S)  # blocos de codigo
t = re.sub(r"^\|.*\|$", "", t, flags=re.M)  # tabelas
words = re.findall(r"\b\w+\b", t.lower())
frases = [f for f in re.split(r"(?<=[.!?])\s+", t) if f.strip()]
tam = [len(re.findall(r"\b\w+\b", f)) for f in frases]
primeira = {"eu", "meu", "minha", "meus", "minhas", "me", "comigo", "i", "my", "mine", "me", "yo", "mi", "mis", "conmigo"}
eu = sum(w in primeira for w in words)
print("palavras", len(words))
print("primeira pessoa por mil", round(1000 * eu / len(words), 1))
print("frases", len(frases), "media", round(statistics.mean(tam), 1), "desvio", round(statistics.pstdev(tam), 1))
print("frases com 6 palavras ou menos", sum(n <= 6 for n in tam), "frases com 35 ou mais", sum(n >= 35 for n in tam))
print("pontos por mil", round(1000 * t.count(".") / len(words), 1), "virgulas por mil", round(1000 * t.count(",") / len(words), 1))
print("interrogacoes", t.count("?"), "exclamacoes", t.count("!"), "parenteses", t.count("("))
