---
slug: como-uso-la-ia-para-crear-cursos
title: 'Cómo uso la IA para crear cursos a mi manera de aprender'
description: 'Dejé de depender de cómo explica el profesor y le pido a Claude cursos en texto hechos para mí, desde la base hasta lo avanzado, con glosario, cuestionarios y repaso espaciado, aquí cuento cómo los armo y cómo los estudio'
pubDate: '2026-11-26T18:11:31-03:00'
updatedDate: '2026-11-27T15:52:39-03:00'
tags: ['ai', 'claude-code', 'courses', 'opinion']
---

A principios de noviembre la Defensa Civil de Brasil sacó esa recomendación de que cada familia tenga un kit para arreglárselas sola durante 72 horas, con agua, comida y medicamentos, y eso cayó justo cuando todo el mundo estaba hablando de El Niño. Lo leí y pensé, uf, yo debería saber primeros auxilios. Fui a buscar y el contenido estaba disperso, difícil de encontrar en un solo lugar, y nada me llevaba de principio a fin. Entonces le pedí a la IA que me armara un curso.

Salió un curso de 27 módulos y 293 clases, con un glosario de 2.486 términos, basado en el PHTLS, el TCCC y el TECC, que son las referencias de atención al trauma. Fue el primer curso grande y estructurado de verdad que hice, porque era un tema del que no sabía básicamente nada. En este post cuento cómo le pido a la IA un curso a mi manera de aprender, la skill que escribí para eso y cómo estudio lo que sale de ella.

## Lo que me cansaba de los cursos hechos

Antes de la IA yo buscaba cursos en Udemy y videos en YouTube. Nunca fui muy de leer libros, y el contenido escrito bueno y ordenado era difícil de encontrar. Lo que más me molestaba era depender de cómo explicaba el profesor, y muchas veces no era mi manera. O era más o menos, o el video tenía mal audio, mala imagen, y eso me estresaba.

Hoy prefiero el texto, y mucho. La IA es muy buena generando texto y no generando video, así que es en el texto donde consigo un contenido hecho a mi manera. Y el texto lo leo a mi ritmo, vuelvo atrás, marco un fragmento. En el video tengo que escuchar al tipo decir lo mismo de nuevo, y en el texto le echo un vistazo y lo encuentro, es mucho más rápido.

## Cómo le digo a la IA la manera en que aprendo

Yo solo aprendo empezando por la base. Aunque ya tenga algo de conocimiento del tema me gusta empezar por lo básico, porque si no entiendo el porqué de algo no acepto esa información. Así que lo primero que hice fue dejarlo escrito como reglas:

- El primer módulo es siempre el fundamento más profundo del tema.
- Cada clase responde "¿por qué es así?" antes de "¿cómo se hace?".
- Ningún módulo usa algo que todavía no se enseñó.
- El curso termina en un proyecto ligado a un objetivo concreto mío.

Se ve en el orden de los cursos. El de primeros auxilios abre con "Cómo el cuerpo mantiene la vida", y el torniquete solo aparece en el módulo 5, después de cuatro módulos de base. El de AWS abre con "Por qué existe la nube".

Lo otro que hago es contarle a la IA en qué situación estoy, para que se enfoque todavía más en mí. Por eso en una clase de AWS el texto dice "João ya eligió `us-east-1` al crear recursos". El curso me habla por mi nombre y usa mi caso como ejemplo, cosa que ningún curso grabado hace.

Eso no quiere decir que el curso solo me sirva a mí. Como parte de cero, cualquier persona con casi ningún conocimiento puede llegar y leerlo. Y cuando el objetivo es una certificación, pido el curso para el examen específico que quiero, porque así también enseña cómo funciona el examen. La nota de inicio del curso de AWS ya explica que son 65 preguntas, que apruebas con 720 de 1.000 y cuánto pesa cada dominio, y la materia va en proporción a ese peso.

## La skill que arma el curso

Uso Claude Code con Opus 5.5 y una skill que escribí, la `criar-curso` ("crear curso"). Una skill es un archivo de instrucciones que Claude carga cuando el pedido coincide con su descripción, y la mía tiene el proceso entero:

1. Entender el tema y adónde quiero llegar.
2. Diseñar el plan de estudios, con los módulos en orden de dependencia, y mostrármelo para que lo apruebe antes de investigar nada.
3. Investigar y escribir, con un agente por módulo, hasta 5 en paralelo, todos leyendo la misma guía de escritura.
4. Juntar todo, revisar que los datos coincidan entre módulos y enlazar cada término al glosario.
5. Verificar con scripts, sin enlaces rotos, sin términos sin enlace y con respuestas sin sesgo (la respuesta correcta no puede ser siempre la más larga, que es un vicio del texto generado por IA).

Lo corro con el `/workflow` de Claude Code, que lanza varios subagentes (otras instancias de Claude, cada una con su tarea) y junta lo que devuelven. Hablé más de eso en el [post sobre el harness de Claude Code](/es/blog/harness-claude-code-workflow-obsoleto/). Solo el curso de AWS usó unos 483 agentes, repartidos en varios workflows.

Un curso tarda de 2 a 3 horas en estar listo, depende del tamaño, y es básicamente one shot. Los propios workflows investigan, escriben y revisan, así que las idas y vueltas la IA las hace sola, sin que yo toque nada. Uso el plan Ultra, y cada curso se come más o menos del 1 al 2% de mi uso semanal.

El curso sale como una carpeta en el formato que entiende [Obsidian](https://obsidian.md/), con una nota por clase, una nota por término del glosario y enlaces entre ellas. El área de cursos de mi sitio lee ese mismo formato y le agrega encima lo que Obsidian no tiene, así que escribo el curso una vez y funciona en los dos.

La skill no nació así. Los dos primeros cursos, Modelado de Casas y después Radio, en septiembre, salieron de una versión muy temprana, que solo investigaba y escribía el curso. No tenía glosario, no enlazaba una clase con otra y no seguía la estructura de Obsidian. Los cursos no quedaron mal, pero quedaron más básicos, y la skill fue creciendo desde ahí hasta el de primeros auxilios.

## Cómo estudio el curso

Todos los días abro el curso en cualquiera de mis dispositivos, y el progreso ya está guardado. Leo la clase hasta el final y, cuando termino el módulo, hago su cuestionario, que me ayuda a fijar lo que leí, y paso al siguiente.

Unos dos días después vuelvo a las preguntas que fallé. Y el repaso espaciado lo hago prácticamente todos los días, con tarjetas de los términos del glosario de las clases que ya leí y de las preguntas que fallé, y cada tarjeta vuelve el día en que estaría por olvidarla.

Cuando no entiendo algo, le pregunto al asistente de IA que tiene la plataforma de cursos. Pones tu propia clave de Anthropic, OpenAI o Google, y él lee la clase que tienes abierta y responde en base a ella, hasta puedes seleccionar un fragmento y preguntar solo sobre eso. Es buenísimo. Y cuando encuentro un error en el curso, lo corrijo y actualizo el curso en el sitio. Todo lo demás que hace la plataforma lo mostré en el [post sobre la plataforma de estudio](/es/blog/plataforma-de-estudio-gratis-repaso-espaciado-simulacros-ia/).

El de AWS es el que más estoy estudiando. Estudio una o dos horas por día y pienso rendir el examen en los próximos meses, tal vez semanas.

## ¿La IA se equivoca?

Sí, seguro, y no hay mucha forma de escaparle. Lo que se puede hacer es obligarla a investigar y analizar bastante en internet antes de escribir cualquier cosa, que es lo que hace la skill, y revisar tú mismo los puntos críticos.

Lo que más veo es la IA yéndose a lo genérico. Una vez pedí unas tarjetas de referencia rápida de primeros auxilios y me devolvió unas explicaciones enormes y desordenadas, que para una tarjeta que tienes que leer en dos segundos en una emergencia era horrible. Tuve que afinar el pedido hasta que salió lo que quería, y la skill en el fondo es eso, un prompt que ya afiné para que no caiga en lo genérico.

Ahora, a quien dice que la IA enseña mal y que por eso no sirve para aprender, le recuerdo que los libros se equivocan, los profesores se equivocan y los videos de YouTube se equivocan, y nadie dejó de leer libros por eso.

## Cómo crear tu propio curso

La skill está abierta en la página [Cómo creo los cursos](/es/cursos/como-los-creo/) (los archivos de la skill están en portugués, pero puedes pedir el curso en cualquier idioma). Para usarla:

1. Descarga el .zip de la skill.
2. En Claude Code, descomprímela y copia la carpeta `criar-curso` a `~/.claude/skills/`. En claude.ai o en la app, sube el .zip en Configuración, Capacidades, Skills. En otra IA, pega el contenido de `SKILL.md` y de `guia-de-escrita.md` como instrucciones.
3. Pide diciendo el tema, adónde quieres llegar y, si quieres, tu situación, así:

```text
Aprendiendo fotografía, quiero llegar a fotografiar una boda yo solo. Escribe el curso en español.
```

Te muestra el plan de estudios para que lo apruebes, escribe los módulos y verifica todo al final. Los cursos que ya hice así están abiertos en el [área de cursos del sitio](/cursos/) (en portugués), y si creas uno, mándamelo a joao@joaopster.com que lo leo y, si está bueno, lo publico ahí con los créditos para ti.
