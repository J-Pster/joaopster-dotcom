import { CONTACT_EMAIL, POLICIES, TERMS, ext, mail } from './links';
import type { LegalLanguage } from './types';

export const es: LegalLanguage = {
  lang: 'es',
  updatedLabel: 'Última actualización: 27 de noviembre de 2026',
  onThisPage: 'En esta página',
  privacy: {
    metaTitle: 'Política de Privacidad | João Pster',
    metaDescription:
      'Qué datos recoge joaopster.com, dónde se guardan, qué terceros intervienen y cómo ejercer tus derechos según la LGPD de Brasil y el RGPD.',
    title: 'Política de Privacidad',
    lead: 'Este es el sitio personal de João Pster. Aquí ves qué pasa con tus datos cuando lees el blog, te suscribes a la newsletter o estudias en los cursos. Los datos se tratan según la Ley General de Protección de Datos de Brasil (LGPD, Ley 13.709/2018), y el texto también está pensado para lectores de la Unión Europea (RGPD).',
    sections: [
      {
        id: 'quien',
        title: 'Quién es el responsable',
        blocks: [
          {
            kind: 'p',
            html: `El responsable de los datos es João Pster, persona física, dueño de joaopster.com. No hay una empresa detrás del sitio. Para cualquier solicitud sobre tus datos, escribe a ${mail()}.`,
          },
        ],
      },
      {
        id: 'resumen',
        title: 'Resumen corto',
        blocks: [
          {
            kind: 'ul',
            items: [
              'El sitio no vende datos y no tiene anuncios.',
              'Las estadísticas de visitas vienen de Cloudflare Web Analytics, que funciona sin cookies, y de Google Analytics, que solo guarda cookies si aceptas el aviso. Puedes cambiar esa elección cuando quieras en "Preferencias de cookies", en el pie de página.',
              'El progreso, los destacados y las notas de los cursos se quedan en tu navegador. Solo llegan a un servidor si creas un código de sincronización.',
              'Las claves de IA y de voz que añades se quedan en tu navegador y van directo de tu página al proveedor. Este sitio no tiene un servidor que las reciba.',
              'La newsletter guarda tu email en Buttondown y puedes darte de baja cuando quieras.',
            ],
          },
        ],
      },
      {
        id: 'visita',
        title: 'Cuando solo visitas el sitio',
        blocks: [
          {
            kind: 'p',
            html: `El sitio funciona sobre Cloudflare (alojamiento y red de entrega). Como en cualquier sitio, Cloudflare recibe tu dirección IP y datos técnicos del navegador para entregar las páginas y protegerse del abuso. También uso Cloudflare Web Analytics, que genera estadísticas agregadas de acceso (páginas vistas, país, tipo de navegador). Según Cloudflare, no usa cookies. Más detalles en la ${ext(POLICIES.cloudflare, 'política de Cloudflare')}.`,
          },
          {
            kind: 'p',
            html: 'Las direcciones de la API del sitio (/api) tienen un límite de solicitudes por IP para frenar el abuso. Lo aplica Cloudflare y sirve solo para seguridad.',
          },
          {
            kind: 'p',
            html: 'Contador de visualizaciones del blog: cada artículo muestra cuántas veces se leyó. Una lectura cuenta cuando el artículo queda visible en el navegador unos segundos, una vez al día por persona. Para no contar a la misma persona dos veces en el día, el servidor guarda solo un código (hash SHA-256 con una clave secreta) hecho con el día, tu IP y el artículo. Tu IP no se guarda y el código no permite llegar a ella. De cada artículo queda solo el total de visualizaciones.',
          },
          {
            kind: 'p',
            html: 'También uso Google Analytics 4 para entender qué páginas se leen y de dónde vienen las visitas. Se carga en todas las páginas en el modo de consentimiento de Google: hasta que aceptes, no guarda cookies y solo envía a Google señales sin cookies ni identificadores (por ejemplo, que se abrió una página). Si aceptas, guarda las cookies _ga para reconocer las visitas siguientes del mismo navegador. Las señales de Google y la personalización de anuncios quedan siempre desactivadas, y el sitio no tiene anuncios. Si rechazas después de haber aceptado, las cookies _ga se borran.',
          },
        ],
      },
      {
        id: 'newsletter',
        title: 'Newsletter',
        blocks: [
          {
            kind: 'p',
            html: `Cuando te suscribes, el formulario envía a Buttondown (el servicio de newsletter) tu email, el idioma de la página (pt, en o es), la página de la que vienes y tu dirección IP. Buttondown manda un email de confirmación y solo entras en la lista después de hacer clic. Este sitio no guarda tu email en una base de datos propia: lo pasa a Buttondown, que lo almacena según su ${ext(POLICIES.buttondown, 'política de privacidad')}.`,
          },
          {
            kind: 'p',
            html: `Para salir, usa el enlace de baja de los emails o pídelo a ${mail()}. Tu email permanece en la lista hasta que te des de baja.`,
          },
        ],
      },
      {
        id: 'comentarios',
        title: 'Comentarios en los posts',
        blocks: [
          {
            kind: 'p',
            html: `Los posts del blog tienen comentarios con ${ext(POLICIES.giscus, 'Giscus')}, que usa las Discussions de GitHub del repositorio del sitio. La caja de comentarios carga scripts de giscus.app y de GitHub, y solo comenta quien entra con una cuenta de GitHub. El comentario queda público en GitHub, según la ${ext(POLICIES.github, 'política de GitHub')}. Para borrar un comentario tuyo, elimínalo allí o pídelo por email.`,
          },
        ],
      },
      {
        id: 'cursos',
        title: 'Cursos: qué se queda en tu navegador',
        blocks: [
          {
            kind: 'p',
            html: 'Las páginas de cursos (/cursos/, /en/courses/ y /es/cursos/) guardan en el localStorage de tu navegador, en claves que empiezan por jp-courses:, lo siguiente: lecciones marcadas como leídas, tareas marcadas, datos de quiz y repaso, fragmentos que destacaste, la última lección abierta y preferencias de lectura. Nada de eso sale de tu dispositivo salvo que actives la sincronización.',
          },
          {
            kind: 'p',
            html: 'El modo sin conexión usa un service worker que guarda páginas y archivos de los cursos en el Cache Storage del navegador. Solo guarda archivos del propio sitio y nunca interviene en las llamadas a la API.',
          },
          {
            kind: 'p',
            html: 'Para borrar todo esto, limpia los datos del sitio (joaopster.com) en la configuración del navegador. Eso elimina el localStorage, el Cache Storage y el service worker.',
          },
        ],
      },
      {
        id: 'sync',
        title: 'Cursos: sincronización opcional entre dispositivos',
        blocks: [
          {
            kind: 'p',
            html: 'Si creas un código de sincronización, tu progreso se envía al servidor del sitio y se guarda en una base de datos Cloudflare D1. El servidor guarda solo el hash SHA-256 del código, nunca el código en sí. El registro contiene: lecciones leídas, posiciones de las tareas marcadas, el texto de los fragmentos destacados, la última lección abierta y las fechas de creación y actualización. No hay nombre, email ni ningún otro dato que te identifique, y cada registro tiene un límite de 512 KB. Los datos de quiz y repaso no se sincronizan.',
          },
          {
            kind: 'p',
            html: '<strong>Trata el código como una contraseña.</strong> Quien tenga el código puede leer y cambiar el progreso guardado con él. Si lo pierdes, no hay forma de recuperarlo.',
          },
          {
            kind: 'p',
            html: `Desvincular un dispositivo quita el código solo de ese navegador. El registro del servidor sigue hasta que pidas su eliminación: escribe a ${mail()} con el código y lo borro. Hoy no hay caducidad automática.`,
          },
        ],
      },
      {
        id: 'claves',
        title: 'Asistente de IA y voz de la lección (tus propias claves)',
        blocks: [
          {
            kind: 'p',
            html: 'Las páginas de curso tienen funciones opcionales que activas con tu propia clave de API: un asistente de IA y "escuchar la lección". Así funcionan:',
          },
          {
            kind: 'ul',
            items: [
              `Asistente de IA: usa la API del proveedor del modelo que elijas, con tu clave: Anthropic (api.anthropic.com, ${ext(POLICIES.anthropic, 'política')}), OpenAI (api.openai.com, ${ext(POLICIES.openai, 'política')}) o Google Gemini (generativelanguage.googleapis.com, ${ext(POLICIES.gemini, 'términos')}). Según los términos de la API de Gemini, en el nivel gratuito Google puede usar lo que envías para mejorar sus productos.`,
              `Voces del navegador (Web Speech API): gratuitas. En algunos sistemas, como las voces en línea de Chrome y Edge, el navegador puede enviar el texto a los servidores de su fabricante. Depende del navegador y de la voz elegida.`,
              `Voces de pago, solo si añades la clave: OpenAI (api.openai.com, ${ext(POLICIES.openai, 'política')}), Google Cloud Text-to-Speech (texttospeech.googleapis.com, ${ext(POLICIES.google, 'política')}) y ElevenLabs (api.elevenlabs.io, ${ext(POLICIES.elevenlabs, 'política')}).`,
            ],
          },
          {
            kind: 'p',
            html: 'Las claves se guardan solo en el localStorage de tu navegador y se envían de la página directo al proveedor. Este sitio no tiene un servidor que reciba las claves, el texto de la lección enviado ni el chat. Las conversaciones con el asistente se guardan solo en tu dispositivo.',
          },
          {
            kind: 'p',
            html: 'Cuando usas una de estas funciones, el texto de la lección, los fragmentos seleccionados y tus preguntas van al proveedor elegido, que los trata según sus propios términos y política de privacidad. El proveedor te cobra el uso.',
          },
          {
            kind: 'p',
            html: 'Cuida tu clave: cualquier cosa que pueda ejecutar scripts en la página, como una extensión de navegador que instalaste, puede leer el localStorage de cualquier sitio. Usa una clave exclusiva con límite de gasto y bórrala cuando no la uses. Puedes quitar una clave en el diálogo de claves o limpiando los datos del sitio.',
          },
        ],
      },
      {
        id: 'terceros',
        title: 'Servicios de terceros que carga el sitio',
        blocks: [
          {
            kind: 'ul',
            items: [
              `Cloudflare: alojamiento, entrega de páginas y Web Analytics (static.cloudflareinsights.com). ${ext(POLICIES.cloudflare, 'Política')}.`,
              `Google Analytics: estadísticas de visitas, como se describió arriba (www.googletagmanager.com y google-analytics.com). ${ext(POLICIES.googleAnalytics, 'Cómo usa Google estos datos')}.`,
              `jsDelivr: algunos cursos cargan la biblioteca Mermaid, que dibuja diagramas, desde cdn.jsdelivr.net. ${ext(POLICIES.jsdelivr, 'Política')}.`,
              'Giscus y GitHub: comentarios en los posts, como se describió arriba.',
              'WakaTime: las estadísticas de código que muestra el sitio son las mías, obtenidas por /api/wakatime. No se envía ningún dato de visitantes a WakaTime.',
              'Buttondown, Anthropic, OpenAI, Google (Gemini y Cloud) y ElevenLabs: solo en los usos descritos en las secciones de newsletter y claves.',
            ],
          },
          {
            kind: 'p',
            html: 'Los enlaces a LinkedIn, GitHub, X, Bluesky, dev.to, TabNews, Reddit, Hacker News y WhatsApp solo te llevan a otro sitio. Ese sitio trata tus datos cuando haces clic.',
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          {
            kind: 'p',
            html: 'El sitio solo guarda cookies de Google Analytics (_ga y _ga_ seguido de un código), y solo después de que aceptas el aviso. Duran hasta 2 años, salvo que las borres o rechaces después. Puedes revisar tu elección en "Preferencias de cookies", en el pie de cualquier página. Tu navegador también guarda en localStorage esa elección, las preferencias y el progreso de los cursos, como se explicó arriba. Los servicios incrustados (sobre todo Giscus y GitHub en los posts) pueden usar almacenamiento propio, que yo no controlo.',
          },
        ],
      },
      {
        id: 'bases',
        title: 'Bases legales y finalidades',
        blocks: [
          {
            kind: 'ul',
            items: [
              'Consentimiento (LGPD art. 7, I; RGPD art. 6(1)(a)): cookies de Google Analytics, newsletter, código de sincronización, uso del asistente de IA y de las voces con tu clave. Puedes retirar el consentimiento en cualquier momento.',
              'Interés legítimo (LGPD art. 7, IX; RGPD art. 6(1)(f)): mantener el sitio seguro y en línea, limitar el abuso de la API y medir el uso de forma agregada para mejorar el contenido (Cloudflare Web Analytics, el contador de visualizaciones y las señales sin cookies de Google Analytics).',
            ],
          },
          {
            kind: 'p',
            html: 'No uso tus datos para publicidad, no hago perfiles de comportamiento y no vendo ni alquilo datos a nadie.',
          },
        ],
      },
      {
        id: 'derechos',
        title: 'Tus derechos',
        blocks: [
          {
            kind: 'p',
            html: 'Según la LGPD (art. 18) puedes pedir en cualquier momento: confirmación de que tratamos tus datos, acceso, corrección, anonimización, bloqueo o eliminación, portabilidad, información sobre con quién se compartieron los datos, información sobre la posibilidad de no dar el consentimiento y la revocación del consentimiento. Si estás en la Unión Europea, el RGPD te da derechos equivalentes, incluido el de oponerte al tratamiento.',
          },
          {
            kind: 'p',
            html: `Para ejercer cualquiera de ellos, escribe a ${mail()}. Para localizar un registro de sincronización necesito el código. Respondo en un máximo de 15 días. Si crees que tus datos se trataron de forma indebida, también puedes reclamar ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD) o ante la autoridad de tu país.`,
          },
        ],
      },
      {
        id: 'transferencias',
        title: 'Transferencias internacionales',
        blocks: [
          {
            kind: 'p',
            html: 'Cloudflare, Buttondown, GitHub, Google, jsDelivr y los proveedores de IA y voz tienen sede en Estados Unidos o usan servidores en varios países. Al usar el sitio, estos servicios pueden tratar tus datos fuera de Brasil, con las reglas y garantías de cada uno (LGPD art. 33).',
          },
        ],
      },
      {
        id: 'retencion',
        title: 'Cuánto tiempo se guardan los datos',
        blocks: [
          {
            kind: 'ul',
            items: [
              'Newsletter: hasta que te des de baja.',
              'Progreso sincronizado: hasta que pidas su eliminación. Hoy no hay caducidad automática.',
              'Comentarios: hasta que se borren en GitHub.',
              'Datos en tu navegador: hasta que los limpies.',
              'Google Analytics: hasta 14 meses. Después, Google borra los datos de cada visita.',
              'Códigos del contador de visualizaciones: solo el día en que se crearon. Se borran en la primera lectura contada del día siguiente.',
              'Registros de acceso y estadísticas: durante el plazo que define Cloudflare.',
            ],
          },
        ],
      },
      {
        id: 'menores',
        title: 'Niños y adolescentes',
        blocks: [
          {
            kind: 'p',
            html: 'El sitio no está dirigido a niños. Quien tenga menos de 18 años debe usar la newsletter, la sincronización y las funciones con clave de API con un padre, madre o tutor. Si me entero de que guardo datos de un niño sin el consentimiento de un tutor, los borro.',
          },
        ],
      },
      {
        id: 'cambios',
        title: 'Cambios en esta política',
        blocks: [
          {
            kind: 'p',
            html: `Cuando el sitio cambie la forma de tratar datos, actualizo esta página y la fecha de arriba. Dudas: ${CONTACT_EMAIL}.`,
          },
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Términos de Uso | João Pster',
    metaDescription:
      'Reglas de uso de joaopster.com: blog, cursos gratuitos, funciones de IA y voz, propiedad intelectual y límites de responsabilidad.',
    title: 'Términos de Uso',
    lead: 'Al usar joaopster.com aceptas estos términos. Son cortos a propósito. Si no estás de acuerdo, no uses el sitio.',
    sections: [
      {
        id: 'que-es',
        title: 'Qué ofrece el sitio',
        blocks: [
          {
            kind: 'p',
            html: 'joaopster.com es el sitio personal de João Pster. Tiene un blog en portugués, inglés y español, cursos gratuitos (hoy: AWS Solutions Architect Associate, Primeros Auxilios, Radio, LoRa y Redes Mesh, y Modelado de Casas) y funciones opcionales de lectura, como progreso, destacados, modo sin conexión, asistente de IA y voz de la lección. Todo es gratuito y puede cambiar o dejar de estar disponible sin aviso.',
          },
        ],
      },
      {
        id: 'educativo',
        title: 'Contenido educativo, no asesoramiento',
        blocks: [
          {
            kind: 'p',
            html: 'El contenido es informativo y educativo. No sustituye la formación presencial, la orientación de un profesional habilitado ni la legislación aplicable a tu caso.',
          },
          {
            kind: 'p',
            html: '<strong>Primeros auxilios y salud:</strong> el curso de Primeros Auxilios no sustituye un curso práctico con un instructor certificado. En una emergencia real, llama a los servicios de emergencia: 192 (SAMU) o 193 (Bomberos) en Brasil, 112 o 911 en otros países.',
          },
          {
            kind: 'p',
            html: 'Lo mismo vale para los demás cursos. Construir una casa exige un arquitecto o ingeniero responsable, instalar equipos de radio y redes exige respetar las normas de tu país, y certificaciones como la de AWS tienen material oficial que prevalece sobre el mío.',
          },
        ],
      },
      {
        id: 'ia-voz',
        title: 'IA y voz: bajo tu propio riesgo',
        blocks: [
          {
            kind: 'p',
            html: 'El asistente de IA y las voces de pago usan tu clave de API y funcionan a través de terceros. Al usarlos aceptas que:',
          },
          {
            kind: 'ul',
            items: [
              `Se aplican los términos y la política de cada proveedor: ${ext(TERMS.anthropic, 'Anthropic')}, ${ext(TERMS.openai, 'OpenAI')}, ${ext(TERMS.gemini, 'Google Gemini')}, ${ext(TERMS.google, 'Google Cloud')} y ${ext(TERMS.elevenlabs, 'ElevenLabs')}.`,
              'El costo es tuyo. Yo no recibo nada y no controlo lo que cobra el proveedor. Define un límite de gasto en tu cuenta.',
              'Las respuestas de IA pueden ser incorrectas, incompletas o estar desactualizadas. No sustituyen a un profesor, al material oficial ni a un profesional.',
              'Tú cuidas tu clave. Sobre los riesgos de guardarla en el navegador, mira la Política de Privacidad.',
            ],
          },
        ],
      },
      {
        id: 'uso',
        title: 'Uso aceptable',
        blocks: [
          {
            kind: 'p',
            html: 'Usa el sitio de forma normal y respetuosa. No está permitido:',
          },
          {
            kind: 'ul',
            items: [
              'sobrecargar o atacar el sitio o las direcciones /api, ni automatizar solicitudes en volumen;',
              'intentar adivinar códigos de sincronización o acceder al progreso de otras personas;',
              'enviar datos falsos, emails de terceros sin permiso o spam por cualquier formulario;',
              'usar el sitio para algo ilegal o para intentar burlar su seguridad.',
            ],
          },
          {
            kind: 'p',
            html: 'Puedo limitar o bloquear accesos que incumplan estas reglas.',
          },
        ],
      },
      {
        id: 'propiedad',
        title: 'Propiedad intelectual',
        blocks: [
          {
            kind: 'p',
            html: 'El código fuente del sitio es abierto, con licencia MIT, en el repositorio de GitHub. Los textos del blog y de los cursos, las imágenes y el resto del contenido son míos, con todos los derechos reservados, salvo que la página diga otra cosa. Puedes leer, estudiar, imprimir para uso personal y citar fragmentos cortos con crédito y enlace a la fuente. Para copiar, republicar o usar en un curso o producto propio, pide autorización.',
          },
          {
            kind: 'p',
            html: 'Las marcas, los nombres y los materiales de terceros mencionados en el sitio pertenecen a sus dueños.',
          },
        ],
      },
      {
        id: 'enlaces',
        title: 'Enlaces y servicios de terceros',
        blocks: [
          {
            kind: 'p',
            html: 'El sitio enlaza a otros sitios y carga servicios de terceros. No controlo ni respondo por su contenido, disponibilidad o prácticas.',
          },
        ],
      },
      {
        id: 'garantia',
        title: 'Sin garantía y límite de responsabilidad',
        blocks: [
          {
            kind: 'p',
            html: 'El sitio y todo su contenido se ofrecen "tal cual", sin garantía de que sean correctos, completos, actuales o estén siempre disponibles. Hago lo posible por acertar, pero los errores ocurren.',
          },
          {
            kind: 'p',
            html: 'En la medida en que la ley lo permita, no respondo por daños derivados del uso del sitio o de confiar en su contenido, incluida la pérdida de datos guardados en el navegador o del código de sincronización, los gastos con proveedores de IA y voz y las decisiones tomadas a partir de los cursos. Esto no excluye las responsabilidades que la ley no permite excluir, como las de protección al consumidor cuando correspondan.',
          },
        ],
      },
      {
        id: 'ley',
        title: 'Ley aplicable y jurisdicción',
        blocks: [
          {
            kind: 'p',
            html: 'Estos términos se rigen por las leyes de Brasil. Los conflictos se resuelven ante los tribunales del domicilio del responsable del sitio, sin perjuicio del derecho del consumidor a acudir a los tribunales de su propio domicilio cuando la ley se lo garantice.',
          },
        ],
      },
      {
        id: 'cambios-contacto',
        title: 'Cambios en los términos y contacto',
        blocks: [
          {
            kind: 'p',
            html: `Puedo modificar estos términos. La versión vigente es la publicada en esta página, con la fecha de arriba. Seguir usando el sitio después de un cambio significa aceptar la nueva versión. Dudas o solicitudes: ${mail()}.`,
          },
        ],
      },
    ],
  },
};
