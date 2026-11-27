// Text of the "how I make the courses" page in each language. Fields ending in Html carry inline
// markup (strong, code, links) and are rendered with set:html; they are written here, never user input.
import type { Lang } from '../../i18n/ui';

export interface HowToCopy {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly current: string;
  readonly eyebrow: string;
  readonly lead: string;
  readonly readingTitle: string;
  readonly readingSiteTitle: string;
  readonly readingSiteText: string;
  readonly readingDownloadTitle: string;
  readonly readingDownloadText: string;
  readonly ruleTitle: string;
  readonly ruleIntroHtml: string;
  readonly ruleItems: readonly string[];
  readonly processTitle: string;
  readonly processItemsHtml: readonly string[];
  readonly folderTitle: string;
  readonly folderIntro: string;
  readonly tree: string;
  readonly downloadsTitle: string;
  readonly downloadsText: string;
  /** Pages in other languages say that the skill files are in Portuguese. */
  readonly skillLanguageNote: string | undefined;
  readonly skillTitle: string;
  readonly skillTextHtml: string;
  readonly skillButton: string;
  readonly mdTitle: string;
  readonly mdText: string;
  readonly installTitle: string;
  readonly installItemsHtml: readonly string[];
  readonly requestTitle: string;
  readonly requestIntro: string;
  readonly requestExample: string;
  readonly requestAfterHtml: string;
  readonly sendTitle: string;
  readonly sendText: string;
  readonly sendButton: string;
  readonly mailSubject: string;
  readonly mailBody: string;
}

const pt: HowToCopy = {
  metaTitle: 'Como eu crio os cursos com IA | João Pster',
  metaDescription: 'O método, a skill do Claude para baixar e o passo a passo para criar o seu próprio curso autodidata.',
  current: 'Como eu crio os cursos',
  eyebrow: 'Método',
  lead:
    'Eu escolho um tema e aonde quero chegar ("Aprendendo rádio, quero montar uma rede mesh própria"). O Claude desenha o currículo, eu aprovo, e ele pesquisa e escreve cada módulo seguindo um guia de escrita único. No fim, tudo é verificado por script: links, termos do glossário, gabaritos.',
  readingTitle: 'Duas formas de ler',
  readingSiteTitle: 'Aqui no site',
  readingSiteText:
    'Passe o mouse sobre um termo para ver a definição sem sair da aula, marque as aulas lidas e as respostas dos questionários. O progresso fica salvo só neste navegador, sem conta e sem cadastro.',
  readingDownloadTitle: 'Baixado',
  readingDownloadText:
    'Baixe o curso inteiro no catálogo: uma pasta de notas em Markdown com todas as aulas, o glossário e os questionários, para ler offline.',
  ruleTitle: 'A regra que decide tudo',
  ruleIntroHtml:
    'Eu só aceito um conhecimento novo depois de entender de onde ele vem. Por isso todo curso segue a mesma ordem: <strong>fundamento</strong> (por que é assim), <strong>mecanismo</strong> (como funciona por dentro), <strong>ferramenta</strong> (como se faz) e <strong>projeto</strong> (aplicar tudo num caso real).',
  ruleItems: [
    'O primeiro módulo é sempre o fundamento mais profundo do assunto.',
    'Cada aula responde "por que isso existe?" antes de "como se faz?".',
    'Nenhum módulo assume algo que ainda não foi ensinado.',
    'O texto é o material principal, direto e com todo o contexto. Vídeos e artigos são apoio.',
    'Toda aula termina com resumo, erros comuns e um questionário com gabarito comentado.',
  ],
  processTitle: 'O processo, em 5 fases',
  processItemsHtml: [
    '<strong>Entender o pedido:</strong> tema e objetivo final. Se o objetivo for ambíguo, uma pergunta só.',
    '<strong>Desenhar o currículo:</strong> módulos em ordem de dependência, cada subtópico escrito como uma pergunta. Eu aprovo antes de qualquer pesquisa.',
    '<strong>Pesquisar e escrever:</strong> um agente por módulo, até 5 em paralelo, todos lendo o mesmo guia de escrita. Cada módulo vira de 4 a 10 aulas.',
    '<strong>Consolidar:</strong> reconciliar fatos entre módulos, montar a nota de início, os mapas das partes e ligar cada termo ao glossário.',
    '<strong>Verificar:</strong> nenhum link quebrado, nenhum termo sem link, gabaritos sem viés (a resposta certa não pode ser sempre a mais longa) e URLs conferidas.',
  ],
  folderTitle: 'Como fica a pasta',
  folderIntro: 'Cada curso é uma pasta de notas em Markdown. Esta é a estrutura que a skill monta:',
  tree: `Aprendendo <Tema>/
├── <Tema> - Inicio.md        objetivo, ordem dos módulos e painel de progresso
├── Progresso.base            painel com as aulas lidas e as próximas
├── Parte N - <Nome>.md       mapa de cada parte (cursos grandes)
├── Glossario/                uma nota por termo: definição, exemplo, onde aparece
├── 01 - <Módulo>/
│   ├── 01 - <Módulo>.md      nota do módulo: aulas, checklist de saída, questionário
│   ├── 01.01 - <Aula>.md     aula: por quê, mecanismo, método, resumo, questionário
│   └── 01.02 - <Aula>.md
└── NN - Projeto Pratico/     o projeto final que junta tudo`,
  downloadsTitle: 'Baixe a skill e crie o seu',
  downloadsText:
    'Juntei o processo numa skill para o Claude. Ela traz o passo a passo, o guia de escrita completo e um modelo da pasta com nota de início, módulo, aula, termo do glossário e painel de progresso.',
  skillLanguageNote: undefined,
  skillTitle: 'Skill completa',
  skillTextHtml: 'A pasta <code>criar-curso</code> com tudo dentro, pronta para instalar.',
  skillButton: 'Baixar a skill (.zip)',
  mdTitle: 'Só os arquivos .md',
  mdText: 'Para ler antes, adaptar ou colar como instrução em qualquer IA.',
  installTitle: 'Instalar',
  installItemsHtml: [
    '<strong>Claude Code:</strong> descompacte e copie a pasta <code>criar-curso</code> para <code>~/.claude/skills/</code>.',
    '<strong>Claude.ai ou app do Claude:</strong> em Configurações, Capacidades, Skills, envie o .zip da skill.',
    '<strong>Outra IA:</strong> cole o conteúdo do <code>SKILL.md</code> e do <code>guia-de-escrita.md</code> como instrução.',
  ],
  requestTitle: 'Pedir o curso',
  requestIntro: 'Diga o tema e aonde você quer chegar, assim:',
  requestExample: 'Aprendendo fotografia, quero chegar em fotografar um casamento sozinho.',
  requestAfterHtml:
    'O Claude mostra o currículo para você aprovar, escreve os módulos e verifica tudo no fim. Depois é só abrir a pasta <code>Aprendendo &lt;Tema&gt;</code> e estudar.',
  sendTitle: 'Mande o seu curso',
  sendText:
    'Criou um curso com a skill? Mande a pasta zipada (ou um link para baixar, se passar de 20 MB). Eu leio, reviso e, se estiver bom, publico aqui com os créditos para você.',
  sendButton: 'Enviar por e-mail',
  mailSubject: 'Curso para o site: <tema>',
  mailBody:
    'Tema do curso:\nIdioma do curso:\nObjetivo final:\nNúmero de módulos:\nLink para baixar a pasta (ou o .zip em anexo):\n\nPosso publicar com o meu nome? Sim / Não\nNome para os créditos:\n',
};

const en: HowToCopy = {
  metaTitle: 'How I make the courses with AI | João Pster',
  metaDescription: 'The method, the Claude skill to download and the steps to create your own self-study course.',
  current: 'How I make the courses',
  eyebrow: 'Method',
  lead:
    'I pick a topic and where I want to get to ("Learning radio, I want to build my own mesh network"). Claude designs the curriculum, I approve it, and it researches and writes each module following a single writing guide. At the end, a script checks everything: links, glossary terms, answer keys.',
  readingTitle: 'Two ways to read',
  readingSiteTitle: 'Here on the site',
  readingSiteText:
    'Hover over a term to see its definition without leaving the lesson, and tick the lessons you read and your quiz answers. Progress is saved only in this browser, with no account and no sign-up.',
  readingDownloadTitle: 'Downloaded',
  readingDownloadText:
    'Download the whole course from the catalog: a folder of Markdown notes with every lesson, the glossary and the quizzes, to read offline.',
  ruleTitle: 'The rule behind everything',
  ruleIntroHtml:
    'I only accept new knowledge after I understand where it comes from. That is why every course follows the same order: <strong>foundation</strong> (why it is like this), <strong>mechanism</strong> (how it works inside), <strong>tool</strong> (how it is done) and <strong>project</strong> (applying everything to a real case).',
  ruleItems: [
    'The first module is always the deepest foundation of the subject.',
    'Each lesson answers "why does this exist?" before "how is it done?".',
    'No module assumes something that has not been taught yet.',
    'The text is the main material, direct and with full context. Videos and articles are support.',
    'Every lesson ends with a summary, common mistakes and a quiz with a commented answer key.',
  ],
  processTitle: 'The process, in 5 phases',
  processItemsHtml: [
    '<strong>Understand the request:</strong> topic and final goal. If the goal is ambiguous, one question only.',
    '<strong>Design the curriculum:</strong> modules in dependency order, each subtopic written as a question. I approve it before any research.',
    '<strong>Research and write:</strong> one agent per module, up to 5 in parallel, all reading the same writing guide. Each module becomes 4 to 10 lessons.',
    '<strong>Consolidate:</strong> reconcile facts across modules, build the start note and the part maps, and link every term to the glossary.',
    '<strong>Verify:</strong> no broken link, no unlinked term, unbiased answer keys (the right answer cannot always be the longest one) and checked URLs.',
  ],
  folderTitle: 'What the folder looks like',
  folderIntro: 'Each course is a folder of Markdown notes. This is the structure the skill builds:',
  tree: `Aprendendo <Topic>/
├── <Topic> - Inicio.md       goal, module order and progress dashboard
├── Progresso.base            dashboard with the lessons read and the next ones
├── Parte N - <Name>.md       map of each part (large courses)
├── Glossario/                one note per term: definition, example, where it appears
├── 01 - <Module>/
│   ├── 01 - <Module>.md      module note: lessons, exit checklist, quiz
│   ├── 01.01 - <Lesson>.md   lesson: why, mechanism, method, summary, quiz
│   └── 01.02 - <Lesson>.md
└── NN - Projeto Pratico/     the final project that ties everything together`,
  downloadsTitle: 'Download the skill and make your own',
  downloadsText:
    'I packed the process into a skill for Claude. It has the step by step, the complete writing guide and a folder template with a start note, module, lesson, glossary term and progress dashboard.',
  skillLanguageNote:
    'The skill files are written in Portuguese. Claude follows them in any language: ask for the course in English and it writes the course in English.',
  skillTitle: 'Full skill',
  skillTextHtml: 'The <code>criar-curso</code> folder with everything inside, ready to install.',
  skillButton: 'Download the skill (.zip)',
  mdTitle: 'Just the .md files',
  mdText: 'To read first, adapt or paste as instructions into any AI.',
  installTitle: 'Install',
  installItemsHtml: [
    '<strong>Claude Code:</strong> unzip it and copy the <code>criar-curso</code> folder to <code>~/.claude/skills/</code>.',
    '<strong>Claude.ai or the Claude app:</strong> in Settings, Capabilities, Skills, upload the skill .zip.',
    '<strong>Another AI:</strong> paste the content of <code>SKILL.md</code> and <code>guia-de-escrita.md</code> as instructions.',
  ],
  requestTitle: 'Ask for the course',
  requestIntro: 'Say the topic and where you want to get to, like this:',
  requestExample: 'Learning photography, I want to be able to shoot a wedding on my own. Write the course in English.',
  requestAfterHtml:
    'Claude shows you the curriculum to approve, writes the modules and checks everything at the end. Then open the <code>Aprendendo &lt;Topic&gt;</code> folder and start studying.',
  sendTitle: 'Send me your course',
  sendText:
    'Made a course with the skill? Send the zipped folder (or a download link, if it is over 20 MB). I read it, review it and, if it is good, publish it here with credit to you, in the section of its language.',
  sendButton: 'Send by e-mail',
  mailSubject: 'Course for the site: <topic>',
  mailBody:
    'Course topic:\nCourse language:\nFinal goal:\nNumber of modules:\nLink to download the folder (or the .zip attached):\n\nCan I publish it with your name? Yes / No\nName for the credits:\n',
};

const es: HowToCopy = {
  metaTitle: 'Cómo creo los cursos con IA | João Pster',
  metaDescription: 'El método, la skill de Claude para descargar y el paso a paso para crear tu propio curso autodidacta.',
  current: 'Cómo creo los cursos',
  eyebrow: 'Método',
  lead:
    'Elijo un tema y adónde quiero llegar ("Aprendiendo radio, quiero montar mi propia red mesh"). Claude diseña el currículo, yo lo apruebo, y él investiga y escribe cada módulo siguiendo una única guía de escritura. Al final, un script lo verifica todo: enlaces, términos del glosario, respuestas.',
  readingTitle: 'Dos formas de leer',
  readingSiteTitle: 'Aquí en el sitio',
  readingSiteText:
    'Pasa el mouse sobre un término para ver la definición sin salir de la clase, y marca las clases leídas y las respuestas de los cuestionarios. El progreso se guarda solo en este navegador, sin cuenta y sin registro.',
  readingDownloadTitle: 'Descargado',
  readingDownloadText:
    'Descarga el curso completo en el catálogo: una carpeta de notas en Markdown con todas las clases, el glosario y los cuestionarios, para leer sin conexión.',
  ruleTitle: 'La regla que lo decide todo',
  ruleIntroHtml:
    'Solo acepto un conocimiento nuevo después de entender de dónde viene. Por eso todo curso sigue el mismo orden: <strong>fundamento</strong> (por qué es así), <strong>mecanismo</strong> (cómo funciona por dentro), <strong>herramienta</strong> (cómo se hace) y <strong>proyecto</strong> (aplicarlo todo en un caso real).',
  ruleItems: [
    'El primer módulo es siempre el fundamento más profundo del tema.',
    'Cada clase responde "¿por qué existe esto?" antes de "¿cómo se hace?".',
    'Ningún módulo da por sabido algo que todavía no se enseñó.',
    'El texto es el material principal, directo y con todo el contexto. Los videos y artículos son apoyo.',
    'Toda clase termina con un resumen, errores comunes y un cuestionario con respuestas comentadas.',
  ],
  processTitle: 'El proceso, en 5 fases',
  processItemsHtml: [
    '<strong>Entender el pedido:</strong> tema y objetivo final. Si el objetivo es ambiguo, una sola pregunta.',
    '<strong>Diseñar el currículo:</strong> módulos en orden de dependencia, cada subtema escrito como una pregunta. Lo apruebo antes de cualquier investigación.',
    '<strong>Investigar y escribir:</strong> un agente por módulo, hasta 5 en paralelo, todos leyendo la misma guía de escritura. Cada módulo se convierte en 4 a 10 clases.',
    '<strong>Consolidar:</strong> reconciliar datos entre módulos, armar la nota de inicio y los mapas de las partes, y enlazar cada término al glosario.',
    '<strong>Verificar:</strong> ningún enlace roto, ningún término sin enlace, respuestas sin sesgo (la correcta no puede ser siempre la más larga) y URLs revisadas.',
  ],
  folderTitle: 'Cómo queda la carpeta',
  folderIntro: 'Cada curso es una carpeta de notas en Markdown. Esta es la estructura que arma la skill:',
  tree: `Aprendendo <Tema>/
├── <Tema> - Inicio.md        objetivo, orden de los módulos y panel de progreso
├── Progresso.base            panel con las clases leídas y las siguientes
├── Parte N - <Nombre>.md     mapa de cada parte (cursos grandes)
├── Glossario/                una nota por término: definición, ejemplo, dónde aparece
├── 01 - <Módulo>/
│   ├── 01 - <Módulo>.md      nota del módulo: clases, checklist de salida, cuestionario
│   ├── 01.01 - <Clase>.md    clase: por qué, mecanismo, método, resumen, cuestionario
│   └── 01.02 - <Clase>.md
└── NN - Projeto Pratico/     el proyecto final que lo une todo`,
  downloadsTitle: 'Descarga la skill y crea el tuyo',
  downloadsText:
    'Reuní el proceso en una skill para Claude. Trae el paso a paso, la guía de escritura completa y una plantilla de la carpeta con nota de inicio, módulo, clase, término del glosario y panel de progreso.',
  skillLanguageNote:
    'Los archivos de la skill están escritos en portugués. Claude los sigue en cualquier idioma: pídele el curso en español y lo escribe en español.',
  skillTitle: 'Skill completa',
  skillTextHtml: 'La carpeta <code>criar-curso</code> con todo adentro, lista para instalar.',
  skillButton: 'Descargar la skill (.zip)',
  mdTitle: 'Solo los archivos .md',
  mdText: 'Para leer antes, adaptar o pegar como instrucciones en cualquier IA.',
  installTitle: 'Instalar',
  installItemsHtml: [
    '<strong>Claude Code:</strong> descomprímela y copia la carpeta <code>criar-curso</code> a <code>~/.claude/skills/</code>.',
    '<strong>Claude.ai o la app de Claude:</strong> en Configuración, Capacidades, Skills, sube el .zip de la skill.',
    '<strong>Otra IA:</strong> pega el contenido de <code>SKILL.md</code> y de <code>guia-de-escrita.md</code> como instrucciones.',
  ],
  requestTitle: 'Pedir el curso',
  requestIntro: 'Di el tema y adónde quieres llegar, así:',
  requestExample: 'Aprendiendo fotografía, quiero llegar a fotografiar una boda yo solo. Escribe el curso en español.',
  requestAfterHtml:
    'Claude te muestra el currículo para que lo apruebes, escribe los módulos y lo verifica todo al final. Después abre la carpeta <code>Aprendendo &lt;Tema&gt;</code> y a estudiar.',
  sendTitle: 'Envíame tu curso',
  sendText:
    '¿Creaste un curso con la skill? Envía la carpeta comprimida (o un enlace para descargarla, si pasa de 20 MB). La leo, la reviso y, si está bien, la publico aquí con los créditos para ti, en la sección de su idioma.',
  sendButton: 'Enviar por e-mail',
  mailSubject: 'Curso para el sitio: <tema>',
  mailBody:
    'Tema del curso:\nIdioma del curso:\nObjetivo final:\nNúmero de módulos:\nEnlace para descargar la carpeta (o el .zip adjunto):\n\n¿Puedo publicarlo con tu nombre? Sí / No\nNombre para los créditos:\n',
};

const COPY: Record<Lang, HowToCopy> = { pt, en, es };

export const howToCopy = (lang: Lang): HowToCopy => COPY[lang];
