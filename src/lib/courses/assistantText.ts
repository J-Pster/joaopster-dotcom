// Interface text of the AI assistant of the course notes and of the API keys window, in each site
// language. The assistant runs in client/assistant/, the keys window in client/keysDialog.ts.
import type { Lang } from '../../i18n/ui';
import type { ModelChoice } from './client/assistant/models';
import type { ProviderId } from './client/keys';

export interface ProviderText {
  readonly name: string;
  /** What the key is used for on this site. */
  readonly usedFor: string;
  /** Where to create a key, in the provider's own console. */
  readonly keysUrl: string;
  readonly tip: string;
}

export interface SafetyText {
  readonly title: string;
  readonly sections: readonly { readonly heading: string; readonly body: string }[];
  readonly allowedTitle: string;
  readonly sourceLink: string;
  readonly privacyLink: string;
}

export interface AssistantText {
  readonly open: string;
  readonly title: string;
  readonly close: string;
  readonly newChat: string;
  readonly keysButton: string;
  readonly model: string;
  readonly models: Record<ModelChoice, string>;
  readonly introTitle: string;
  readonly intro: string;
  /** Shown when the picked model's provider has no key yet. */
  readonly needKey: (provider: string) => string;
  readonly addKey: string;
  readonly isItSafe: string;
  readonly suggestions: readonly string[];
  readonly placeholder: string;
  readonly send: string;
  readonly stop: string;
  readonly sendHint: string;
  readonly snippet: string;
  readonly removeSnippet: string;
  /** The question sent when the reader adds passages and writes nothing. */
  readonly explainPassages: string;
  readonly saveFailed: string;
  readonly addToChat: string;
  readonly snippetAdded: string;
  readonly thinking: string;
  readonly you: string;
  readonly assistant: string;
  readonly cost: (dollars: string) => string;
  readonly stopped: string;
  readonly errors: {
    readonly key: (provider: string) => string;
    readonly permission: string;
    readonly rateLimit: (provider: string) => string;
    readonly overloaded: (provider: string) => string;
    readonly network: (provider: string) => string;
    readonly load: string;
    readonly refusal: string;
    readonly truncated: string;
    readonly other: (provider: string, detail: string) => string;
  };
  readonly retry: string;
  readonly openKeys: string;
  readonly confirmNewChat: string;
  readonly copy: string;
  readonly copied: string;
  readonly copyFailed: string;

  readonly keys: {
    readonly title: string;
    readonly intro: string;
    readonly saved: (masked: string) => string;
    readonly notSaved: string;
    readonly placeholder: string;
    readonly save: string;
    readonly delete: string;
    readonly deleteAll: string;
    readonly getKey: string;
    readonly close: string;
    readonly savedToast: string;
    readonly deletedToast: string;
  };
  readonly providers: Record<ProviderId, ProviderText>;
  readonly safety: SafetyText;
}

const REPO = 'https://github.com/J-Pster/joaopster-dotcom';

const KEYS_URL: Record<ProviderId, string> = {
  anthropic: 'https://platform.claude.com/settings/keys',
  openai: 'https://platform.openai.com/api-keys',
  google: 'https://console.cloud.google.com/apis/credentials',
  gemini: 'https://aistudio.google.com/apikey',
  elevenlabs: 'https://elevenlabs.io/app/settings/api-keys',
};

const pt: AssistantText = {
  open: 'Assistente de IA',
  title: 'Assistente de IA',
  close: 'Fechar o assistente',
  newChat: 'Nova conversa',
  keysButton: 'Chaves de API',
  model: 'Modelo',
  models: {
    'anthropic-fast': 'Claude Haiku 5.5 (rápido e barato)',
    'anthropic-smart': 'Claude Sonnet 5.5 (mais capaz)',
    'openai-fast': 'GPT-6 Luna (rápido e barato)',
    'openai-smart': 'GPT-6.1 Terra (mais capaz)',
    'gemini-fast': 'Gemini 3.5 Flash-Lite (rápido e barato)',
    'gemini-smart': 'Gemini 3.8 Flash (mais capaz)',
  },
  introTitle: 'Pergunte sobre esta nota',
  intro:
    'O assistente lê a nota que você tem aberta e responde com base nela. Selecione um trecho do texto e use "Adicionar ao chat" pra perguntar sobre ele.',
  needKey: (provider) => `Pra usar este modelo você precisa de uma chave de API (${provider}). Ela fica salva só neste navegador. Você também pode escolher outro modelo lá embaixo.`,
  addKey: 'Colar minha chave',
  isItSafe: 'É seguro?',
  suggestions: ['Resuma esta nota em 5 pontos', 'Explique a parte onde eu estou com um exemplo', 'Me faça 3 perguntas pra eu testar o que aprendi'],
  placeholder: 'Pergunte sobre esta nota',
  send: 'Enviar',
  stop: 'Parar',
  sendHint: 'Enter envia, Shift + Enter pula linha',
  snippet: 'Trecho',
  removeSnippet: 'Tirar o trecho',
  explainPassages: 'Me explique esse trecho.',
  saveFailed: 'O navegador não deixou salvar a conversa (armazenamento cheio ou bloqueado).',
  addToChat: 'Adicionar ao chat',
  snippetAdded: 'Trecho adicionado ao chat',
  thinking: 'Pensando',
  you: 'Você',
  assistant: 'Assistente',
  cost: (dollars) => `cerca de US$ ${dollars}`,
  stopped: 'Resposta interrompida.',
  errors: {
    key: (provider) => `A chave foi recusada (${provider}). Confira se ela foi copiada inteira e se ainda está ativa.`,
    permission: 'Essa chave não tem permissão pra usar este modelo.',
    rateLimit: (provider) => `Sua conta chegou no limite de uso (${provider}). Espere um pouco ou confira o limite no painel.`,
    overloaded: (provider) => `Os servidores estão sobrecarregados agora (${provider}). Tente de novo daqui a pouco.`,
    network: (provider) => `Não consegui falar com ${provider}. Confira sua conexão e se a chave está certa.`,
    load: 'Não consegui carregar o assistente. Recarregue a página e tente de novo.',
    refusal: 'O modelo preferiu não responder a esse pedido.',
    truncated: 'A resposta ficou longa demais e foi cortada.',
    other: (provider, detail) => `${provider} devolveu um erro: ${detail}`,
  },
  retry: 'Tentar de novo',
  openKeys: 'Abrir chaves',
  confirmNewChat: 'Apagar esta conversa e começar outra?',
  copy: 'Copiar',
  copied: 'Copiado',
  copyFailed: 'O navegador não deixou copiar. Selecione o texto e copie à mão.',
  keys: {
    title: 'Chaves de API',
    intro:
      'O assistente e as vozes pagas usam a sua conta em cada provedor. A chave fica só neste navegador e vai direto daqui pro provedor, sem passar por nenhum servidor deste site.',
    saved: (masked) => `Salva: ${masked}`,
    notSaved: 'Nenhuma chave salva',
    placeholder: 'Cole a chave aqui',
    save: 'Salvar',
    delete: 'Apagar',
    deleteAll: 'Apagar todas as chaves deste navegador',
    getKey: 'Criar uma chave',
    close: 'Fechar',
    savedToast: 'Chave salva neste navegador',
    deletedToast: 'Chave apagada deste navegador',
  },
  providers: {
    anthropic: {
      name: 'Anthropic',
      usedFor: 'Assistente de IA',
      keysUrl: KEYS_URL.anthropic,
      tip: 'Crie uma chave só pra este site e defina um limite de gasto no painel da Anthropic.',
    },
    openai: {
      name: 'OpenAI',
      usedFor: 'Assistente de IA e vozes do "Ouvir"',
      keysUrl: KEYS_URL.openai,
      tip: 'Uma chave de projeto com limite de gasto baixo é o suficiente.',
    },
    google: {
      name: 'Google Cloud',
      usedFor: 'Vozes do "Ouvir" (Text-to-Speech)',
      keysUrl: KEYS_URL.google,
      tip: 'No console, restrinja a chave à API Cloud Text-to-Speech e ao site joaopster.com. Assim ela não serve pra mais nada.',
    },
    gemini: {
      name: 'Google Gemini',
      usedFor: 'Assistente de IA',
      keysUrl: KEYS_URL.gemini,
      tip: 'Crie a chave no Google AI Studio, de preferência num projeto só pra este site. No nível gratuito o Google pode usar o que você envia pra melhorar os produtos dele.',
    },
    elevenlabs: {
      name: 'ElevenLabs',
      usedFor: 'Vozes do "Ouvir"',
      keysUrl: KEYS_URL.elevenlabs,
      tip: 'Dá pra criar uma chave com acesso só a texto pra fala e um limite de créditos.',
    },
  },
  safety: {
    title: 'É seguro colar minha chave aqui?',
    sections: [
      {
        heading: 'A chave fica no seu navegador',
        body:
          'Ela é salva no localStorage deste aparelho e vai direto da página pro provedor (Anthropic, OpenAI, Google ou ElevenLabs). Este site não tem servidor que receba sua chave, suas perguntas ou as respostas. Eu não tenho acesso a nada disso e não quero ter.',
      },
      {
        heading: 'O código é aberto',
        body:
          'Você pode conferir no GitHub tudo o que esta página faz. A chave só é lida pelo código do assistente e do áudio, na hora de chamar o provedor, e não é mandada pra nenhum outro lugar.',
      },
      {
        heading: 'A página só fala com endereços liberados',
        body:
          'O site manda pro navegador uma Content Security Policy (CSP), uma regra que bloqueia conexões, imagens e scripts de endereços fora da lista abaixo. Se algum script da página tentasse mandar sua chave pra outro servidor por esses caminhos, o navegador barraria. A CSP ajuda, mas não cobre tudo. A proteção principal é o código não mandar a chave pra lugar nenhum, e isso você confere no código aberto.',
      },
      {
        heading: 'O que vale pra qualquer site',
        body:
          'Qualquer script que roda numa página consegue ler o localStorage dela. Isso inclui o script de estatísticas da Cloudflare (Cloudflare Web Analytics) que este site carrega, e nada nele lê sua chave. Também inclui as extensões que você instalou no navegador, que leem a página inteira e não obedecem à CSP. Isso vale pra qualquer site em que você cole uma chave, não só pra este.',
      },
      {
        heading: 'Como se proteger',
        body:
          'Crie uma chave só pra este site, com um limite de gasto baixo no painel do provedor, e apague quando não for usar. Apagar aqui tira a chave deste navegador. Revogar no painel do provedor invalida a chave em qualquer lugar.',
      },
    ],
    allowedTitle: 'Endereços que a página pode chamar',
    sourceLink: 'Ver o código no GitHub',
    privacyLink: 'Política de privacidade',
  },
};

const en: AssistantText = {
  open: 'AI assistant',
  title: 'AI assistant',
  close: 'Close the assistant',
  newChat: 'New chat',
  keysButton: 'API keys',
  model: 'Model',
  models: {
    'anthropic-fast': 'Claude Haiku 5.5 (fast and cheap)',
    'anthropic-smart': 'Claude Sonnet 5.5 (more capable)',
    'openai-fast': 'GPT-6 Luna (fast and cheap)',
    'openai-smart': 'GPT-6.1 Terra (more capable)',
    'gemini-fast': 'Gemini 3.5 Flash-Lite (fast and cheap)',
    'gemini-smart': 'Gemini 3.8 Flash (more capable)',
  },
  introTitle: 'Ask about this note',
  intro:
    'The assistant reads the note you have open and answers from it. Select a passage of the text and tap "Add to chat" to ask about it.',
  needKey: (provider) => `To use this model you need an API key (${provider}). It is saved only in this browser. You can also pick another model below.`,
  addKey: 'Paste my key',
  isItSafe: 'Is it safe?',
  suggestions: ['Summarize this note in 5 points', 'Explain the part I am reading with an example', 'Ask me 3 questions to test what I learned'],
  placeholder: 'Ask about this note',
  send: 'Send',
  stop: 'Stop',
  sendHint: 'Enter sends, Shift + Enter adds a line',
  snippet: 'Passage',
  removeSnippet: 'Remove the passage',
  explainPassages: 'Explain this passage to me.',
  saveFailed: 'The browser did not let the chat be saved (storage full or blocked).',
  addToChat: 'Add to chat',
  snippetAdded: 'Passage added to the chat',
  thinking: 'Thinking',
  you: 'You',
  assistant: 'Assistant',
  cost: (dollars) => `about US$ ${dollars}`,
  stopped: 'Answer stopped.',
  errors: {
    key: (provider) => `The key was refused (${provider}). Check that it was copied whole and that it is still active.`,
    permission: 'This key is not allowed to use this model.',
    rateLimit: (provider) => `Your account reached its usage limit (${provider}). Wait a little or check the limit in the console.`,
    overloaded: (provider) => `The servers are overloaded right now (${provider}). Try again in a moment.`,
    network: (provider) => `Could not reach ${provider}. Check your connection and that the key is right.`,
    load: 'Could not load the assistant. Reload the page and try again.',
    refusal: 'The model chose not to answer this request.',
    truncated: 'The answer got too long and was cut off.',
    other: (provider, detail) => `${provider} returned an error: ${detail}`,
  },
  retry: 'Try again',
  openKeys: 'Open keys',
  confirmNewChat: 'Delete this chat and start a new one?',
  copy: 'Copy',
  copied: 'Copied',
  copyFailed: 'The browser did not allow copying. Select the text and copy it by hand.',
  keys: {
    title: 'API keys',
    intro:
      'The assistant and the paid voices use your own account with each provider. The key stays in this browser and goes straight from here to the provider, without passing through any server of this site.',
    saved: (masked) => `Saved: ${masked}`,
    notSaved: 'No key saved',
    placeholder: 'Paste the key here',
    save: 'Save',
    delete: 'Delete',
    deleteAll: 'Delete every key from this browser',
    getKey: 'Create a key',
    close: 'Close',
    savedToast: 'Key saved in this browser',
    deletedToast: 'Key deleted from this browser',
  },
  providers: {
    anthropic: {
      name: 'Anthropic',
      usedFor: 'AI assistant',
      keysUrl: KEYS_URL.anthropic,
      tip: 'Create a key just for this site and set a spending limit in the Anthropic console.',
    },
    openai: {
      name: 'OpenAI',
      usedFor: 'AI assistant and "Listen" voices',
      keysUrl: KEYS_URL.openai,
      tip: 'A project key with a low spending limit is enough.',
    },
    google: {
      name: 'Google Cloud',
      usedFor: '"Listen" voices (Text-to-Speech)',
      keysUrl: KEYS_URL.google,
      tip: 'In the console, restrict the key to the Cloud Text-to-Speech API and to joaopster.com, so it is useless anywhere else.',
    },
    gemini: {
      name: 'Google Gemini',
      usedFor: 'AI assistant',
      keysUrl: KEYS_URL.gemini,
      tip: 'Create the key in Google AI Studio, ideally in a project just for this site. On the free tier Google may use what you send to improve its products.',
    },
    elevenlabs: {
      name: 'ElevenLabs',
      usedFor: '"Listen" voices',
      keysUrl: KEYS_URL.elevenlabs,
      tip: 'You can create a key limited to text to speech and to a credit quota.',
    },
  },
  safety: {
    title: 'Is it safe to paste my key here?',
    sections: [
      {
        heading: 'The key stays in your browser',
        body:
          'It is saved in the localStorage of this device and goes straight from the page to the provider (Anthropic, OpenAI, Google or ElevenLabs). This site has no server that receives your key, your questions or the answers. I have no access to any of it and I do not want any.',
      },
      {
        heading: 'The code is open source',
        body:
          'You can check on GitHub everything this page does. The key is read only by the code of the assistant and of the audio, when it calls the provider, and it is not sent anywhere else.',
      },
      {
        heading: 'The page only talks to allowed addresses',
        body:
          'The site sends the browser a Content Security Policy (CSP), a rule that blocks connections, images and scripts from addresses outside the list below. If a script on the page tried to send your key to another server that way, the browser would block it. The CSP helps, but it does not cover everything. The main protection is that the code never sends the key anywhere else, and you can check that in the open source code.',
      },
      {
        heading: 'What is true on any website',
        body:
          'Any script running on a page can read its localStorage. That includes the Cloudflare statistics script (Cloudflare Web Analytics) this site loads, and nothing in it reads your key. It also includes the extensions installed in your browser, which read the whole page and do not follow the CSP. This is true of any site where you paste a key, not only this one.',
      },
      {
        heading: 'How to protect yourself',
        body:
          'Create a key just for this site, with a low spending limit in the provider console, and delete it when you are not using it. Deleting it here removes it from this browser. Revoking it in the provider console makes it invalid everywhere.',
      },
    ],
    allowedTitle: 'Addresses the page can call',
    sourceLink: 'See the code on GitHub',
    privacyLink: 'Privacy policy',
  },
};

const es: AssistantText = {
  open: 'Asistente de IA',
  title: 'Asistente de IA',
  close: 'Cerrar el asistente',
  newChat: 'Nueva conversación',
  keysButton: 'Claves de API',
  model: 'Modelo',
  models: {
    'anthropic-fast': 'Claude Haiku 5.5 (rápido y barato)',
    'anthropic-smart': 'Claude Sonnet 5.5 (más capaz)',
    'openai-fast': 'GPT-6 Luna (rápido y barato)',
    'openai-smart': 'GPT-6.1 Terra (más capaz)',
    'gemini-fast': 'Gemini 3.5 Flash-Lite (rápido y barato)',
    'gemini-smart': 'Gemini 3.8 Flash (más capaz)',
  },
  introTitle: 'Pregunta sobre esta nota',
  intro:
    'El asistente lee la nota que tienes abierta y responde a partir de ella. Selecciona un fragmento del texto y toca "Añadir al chat" para preguntar sobre él.',
  needKey: (provider) => `Para usar este modelo necesitas una clave de API (${provider}). Se guarda solo en este navegador. También puedes elegir otro modelo abajo.`,
  addKey: 'Pegar mi clave',
  isItSafe: '¿Es seguro?',
  suggestions: ['Resume esta nota en 5 puntos', 'Explica la parte que estoy leyendo con un ejemplo', 'Hazme 3 preguntas para comprobar lo que aprendí'],
  placeholder: 'Pregunta sobre esta nota',
  send: 'Enviar',
  stop: 'Parar',
  sendHint: 'Enter envía, Shift + Enter añade una línea',
  snippet: 'Fragmento',
  removeSnippet: 'Quitar el fragmento',
  explainPassages: 'Explícame este fragmento.',
  saveFailed: 'El navegador no dejó guardar la conversación (almacenamiento lleno o bloqueado).',
  addToChat: 'Añadir al chat',
  snippetAdded: 'Fragmento añadido al chat',
  thinking: 'Pensando',
  you: 'Tú',
  assistant: 'Asistente',
  cost: (dollars) => `unos US$ ${dollars}`,
  stopped: 'Respuesta interrumpida.',
  errors: {
    key: (provider) => `La clave fue rechazada (${provider}). Comprueba que se copió entera y que sigue activa.`,
    permission: 'Esta clave no tiene permiso para usar este modelo.',
    rateLimit: (provider) => `Tu cuenta llegó a su límite de uso (${provider}). Espera un poco o revisa el límite en la consola.`,
    overloaded: (provider) => `Los servidores están sobrecargados ahora (${provider}). Inténtalo de nuevo en un momento.`,
    network: (provider) => `No pude conectar con ${provider}. Revisa tu conexión y que la clave esté bien.`,
    load: 'No pude cargar el asistente. Recarga la página y vuelve a intentarlo.',
    refusal: 'El modelo prefirió no responder a esta petición.',
    truncated: 'La respuesta se hizo demasiado larga y se cortó.',
    other: (provider, detail) => `${provider} devolvió un error: ${detail}`,
  },
  retry: 'Intentar de nuevo',
  openKeys: 'Abrir claves',
  confirmNewChat: '¿Borrar esta conversación y empezar otra?',
  copy: 'Copiar',
  copied: 'Copiado',
  copyFailed: 'El navegador no permitió copiar. Selecciona el texto y cópialo a mano.',
  keys: {
    title: 'Claves de API',
    intro:
      'El asistente y las voces de pago usan tu propia cuenta en cada proveedor. La clave se queda en este navegador y va directo de aquí al proveedor, sin pasar por ningún servidor de este sitio.',
    saved: (masked) => `Guardada: ${masked}`,
    notSaved: 'Ninguna clave guardada',
    placeholder: 'Pega la clave aquí',
    save: 'Guardar',
    delete: 'Borrar',
    deleteAll: 'Borrar todas las claves de este navegador',
    getKey: 'Crear una clave',
    close: 'Cerrar',
    savedToast: 'Clave guardada en este navegador',
    deletedToast: 'Clave borrada de este navegador',
  },
  providers: {
    anthropic: {
      name: 'Anthropic',
      usedFor: 'Asistente de IA',
      keysUrl: KEYS_URL.anthropic,
      tip: 'Crea una clave solo para este sitio y pon un límite de gasto en la consola de Anthropic.',
    },
    openai: {
      name: 'OpenAI',
      usedFor: 'Asistente de IA y voces de "Escuchar"',
      keysUrl: KEYS_URL.openai,
      tip: 'Basta con una clave de proyecto con un límite de gasto bajo.',
    },
    google: {
      name: 'Google Cloud',
      usedFor: 'Voces de "Escuchar" (Text-to-Speech)',
      keysUrl: KEYS_URL.google,
      tip: 'En la consola, limita la clave a la API Cloud Text-to-Speech y a joaopster.com, así no sirve para nada más.',
    },
    gemini: {
      name: 'Google Gemini',
      usedFor: 'Asistente de IA',
      keysUrl: KEYS_URL.gemini,
      tip: 'Crea la clave en Google AI Studio, mejor en un proyecto solo para este sitio. En el nivel gratuito Google puede usar lo que envías para mejorar sus productos.',
    },
    elevenlabs: {
      name: 'ElevenLabs',
      usedFor: 'Voces de "Escuchar"',
      keysUrl: KEYS_URL.elevenlabs,
      tip: 'Puedes crear una clave limitada a texto a voz y a una cuota de créditos.',
    },
  },
  safety: {
    title: '¿Es seguro pegar mi clave aquí?',
    sections: [
      {
        heading: 'La clave se queda en tu navegador',
        body:
          'Se guarda en el localStorage de este dispositivo y va directo de la página al proveedor (Anthropic, OpenAI, Google o ElevenLabs). Este sitio no tiene ningún servidor que reciba tu clave, tus preguntas o las respuestas. No tengo acceso a nada de eso y no quiero tenerlo.',
      },
      {
        heading: 'El código es abierto',
        body:
          'Puedes revisar en GitHub todo lo que hace esta página. La clave solo la lee el código del asistente y del audio, al llamar al proveedor, y no se envía a ningún otro sitio.',
      },
      {
        heading: 'La página solo habla con direcciones permitidas',
        body:
          'El sitio envía al navegador una Content Security Policy (CSP), una regla que bloquea conexiones, imágenes y scripts de direcciones fuera de la lista de abajo. Si un script de la página intentara mandar tu clave a otro servidor por esas vías, el navegador lo bloquearía. La CSP ayuda, pero no lo cubre todo. La protección principal es que el código nunca envía la clave a otro sitio, y eso lo puedes comprobar en el código abierto.',
      },
      {
        heading: 'Lo que pasa en cualquier sitio web',
        body:
          'Cualquier script que se ejecuta en una página puede leer su localStorage. Eso incluye el script de estadísticas de Cloudflare (Cloudflare Web Analytics) que carga este sitio, y nada en él lee tu clave. También incluye las extensiones instaladas en tu navegador, que leen la página entera y no obedecen la CSP. Esto pasa en cualquier sitio donde pegues una clave, no solo en este.',
      },
      {
        heading: 'Cómo protegerte',
        body:
          'Crea una clave solo para este sitio, con un límite de gasto bajo en la consola del proveedor, y bórrala cuando no la uses. Borrarla aquí la quita de este navegador. Revocarla en la consola del proveedor la invalida en todas partes.',
      },
    ],
    allowedTitle: 'Direcciones a las que la página puede llamar',
    sourceLink: 'Ver el código en GitHub',
    privacyLink: 'Política de privacidad',
  },
};

const TEXT: Record<Lang, AssistantText> = { pt, en, es };

export function assistantText(lang: Lang): AssistantText {
  return TEXT[lang];
}

export const SOURCE_URL = REPO;

/** Every address the page may connect to, as the CSP in public/_headers allows. Shown in the safety window. */
export const ALLOWED_CONNECTIONS = [
  'joaopster.com',
  'api.anthropic.com',
  'api.openai.com',
  'generativelanguage.googleapis.com',
  'texttospeech.googleapis.com',
  'api.elevenlabs.io',
  'cloudflareinsights.com',
  '*.google-analytics.com',
  '*.analytics.google.com',
  'analytics.google.com',
  '*.googletagmanager.com',
] as const;
