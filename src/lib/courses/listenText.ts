// Interface text of "listen to the lesson" (the button, the player and its messages), in each site
// language. Kept apart from i18n.ts so each feature owns its labels.
import type { Lang } from '../../i18n/ui';
import type { Cost } from './client/listen/pricing';

export type ListenProviderId = 'browser' | 'openai' | 'google' | 'elevenlabs';

export interface ListenText {
  readonly open: string;
  readonly player: string;
  readonly play: string;
  readonly pause: string;
  readonly previous: string;
  readonly next: string;
  readonly speed: (value: string) => string;
  readonly provider: string;
  readonly voice: string;
  readonly providerName: Readonly<Record<ListenProviderId, string>>;
  readonly settings: string;
  readonly close: string;
  readonly noVoices: string;

  readonly ready: (provider: string) => string;
  readonly loading: string;
  readonly reading: (position: number, total: number) => string;
  readonly paused: (position: number, total: number) => string;
  readonly finished: string;
  readonly nothingToRead: string;
  readonly soundBlocked: string;

  /** The price notice shown before the first paid request of a lesson. */
  readonly estimate: (provider: string, characters: number, cost: Cost) => string;
  readonly confirm: string;
  readonly cancel: string;

  readonly retry: string;
  readonly enterKey: string;
  readonly missingKey: (provider: string) => string;
  readonly keyRejected: (provider: string) => string;
  readonly quota: (provider: string) => string;
  readonly network: (provider: string) => string;
  readonly rejected: (provider: string, detail: string) => string;
  readonly server: (provider: string, status: number) => string;
  readonly undecodable: string;
  readonly noVoice: string;
  readonly unsupported: string;
  readonly speech: (detail: string) => string;

  readonly savedAudio: (size: string) => string;
  readonly noSavedAudio: string;
  readonly clearAudio: string;
  readonly audioCleared: string;
}

const NUMBER_LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };

function number(lang: Lang, value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat(NUMBER_LOCALE[lang], { maximumFractionDigits }).format(value);
}

/** "US$ 0,05", "$0.05" or "menos de US$ 0,01": a price for a person, so cents are enough. */
function dollars(lang: Lang, amount: number, under: string): string {
  const symbol = lang === 'en' ? '$' : 'US$ ';
  if (amount < 0.01) return `${under} ${symbol}${number(lang, 0.01, 2)}`;
  return `${symbol}${number(lang, amount, 2)}`;
}

const TEXT: Record<Lang, ListenText> = {
  pt: {
    open: 'Ouvir a aula',
    player: 'Ouvir a aula',
    play: 'Tocar',
    pause: 'Pausar',
    previous: 'Trecho anterior',
    next: 'Próximo trecho',
    speed: (value) => `Velocidade: ${value}`,
    provider: 'Fonte da voz',
    voice: 'Voz',
    providerName: { browser: 'Navegador (grátis)', openai: 'OpenAI', google: 'Google Cloud', elevenlabs: 'ElevenLabs' },
    settings: 'Ajustes do áudio',
    close: 'Fechar o player',
    noVoices: 'Nenhuma voz disponível',

    ready: (provider) => `Pronto para ouvir (${provider})`,
    loading: 'Preparando o áudio…',
    reading: (position, total) => `Trecho ${position} de ${total}`,
    paused: (position, total) => `Pausado no trecho ${position} de ${total}`,
    finished: 'Fim da aula',
    nothingToRead: 'Esta página não tem texto para ouvir.',
    soundBlocked: 'O navegador bloqueou o som. Toque em Tocar.',

    estimate: (provider, characters, cost) => {
      const price =
        cost.kind === 'usd'
          ? `cerca de ${dollars('pt', cost.amount, 'menos de')}${cost.freeCharacters > 0 ? `; há ${number('pt', cost.freeCharacters)} caracteres grátis por mês` : ''}`
          : `cerca de ${number('pt', cost.credits)} créditos (o plano grátis dá ${number('pt', cost.freeCredits)} por mês)`;
      return `${provider}: o áudio do que falta tem ${number('pt', characters)} caracteres e custa ${price}. Você paga só pelo que ouvir, mais um trecho à frente. Preços de novembro de 2026, confira no site do provedor.`;
    },
    confirm: 'Gerar e ouvir',
    cancel: 'Cancelar',

    retry: 'Tentar de novo',
    enterKey: 'Informar a chave',
    missingKey: (provider) => `Falta a chave de ${provider}.`,
    keyRejected: (provider) => `Chave recusada por ${provider}.`,
    quota: (provider) => `${provider} recusou por limite ou falta de créditos. Veja o saldo no site do provedor.`,
    network: (provider) => `Não consegui falar com ${provider}. Confira sua conexão e se a chave está certa.`,
    rejected: (provider, detail) => `${provider} recusou o pedido: ${detail}`,
    server: (provider, status) => `${provider} está com problema (erro ${status}).`,
    undecodable: 'Não deu para tocar o áudio recebido.',
    noVoice: 'Este navegador não tem voz em português. Escolha outra fonte.',
    unsupported: 'Este navegador não lê texto em voz alta. Escolha outra fonte.',
    speech: (detail) => `O navegador não conseguiu falar o texto (${detail}).`,

    savedAudio: (size) => `Áudios salvos neste aparelho: ${size}`,
    noSavedAudio: 'Nenhum áudio salvo neste aparelho',
    clearAudio: 'Apagar áudios salvos',
    audioCleared: 'Áudios salvos apagados',
  },
  en: {
    open: 'Listen to the lesson',
    player: 'Listen to the lesson',
    play: 'Play',
    pause: 'Pause',
    previous: 'Previous passage',
    next: 'Next passage',
    speed: (value) => `Speed: ${value}`,
    provider: 'Voice source',
    voice: 'Voice',
    providerName: { browser: 'Browser (free)', openai: 'OpenAI', google: 'Google Cloud', elevenlabs: 'ElevenLabs' },
    settings: 'Audio settings',
    close: 'Close the player',
    noVoices: 'No voice available',

    ready: (provider) => `Ready to listen (${provider})`,
    loading: 'Preparing the audio…',
    reading: (position, total) => `Passage ${position} of ${total}`,
    paused: (position, total) => `Paused at passage ${position} of ${total}`,
    finished: 'End of the lesson',
    nothingToRead: 'This page has no text to listen to.',
    soundBlocked: 'The browser blocked the sound. Press Play.',

    estimate: (provider, characters, cost) => {
      const price =
        cost.kind === 'usd'
          ? `about ${dollars('en', cost.amount, 'under')}${cost.freeCharacters > 0 ? `; ${number('en', cost.freeCharacters)} characters a month are free` : ''}`
          : `about ${number('en', cost.credits)} credits (the free plan gives ${number('en', cost.freeCredits)} a month)`;
      return `${provider} will generate the audio for what is left: ${number('en', characters)} characters, ${price}. You only pay for what you hear, plus one passage ahead. Prices as of November 2026, check the provider's site.`;
    },
    confirm: 'Generate and listen',
    cancel: 'Cancel',

    retry: 'Try again',
    enterKey: 'Enter the key',
    missingKey: (provider) => `The ${provider} key is missing.`,
    keyRejected: (provider) => `${provider} rejected the key.`,
    quota: (provider) => `${provider} refused because of a limit or missing credits. Check the balance on the provider's site.`,
    network: (provider) => `Could not reach ${provider}. Check your connection and that the key is right.`,
    rejected: (provider, detail) => `${provider} refused the request: ${detail}`,
    server: (provider, status) => `${provider} is having trouble (error ${status}).`,
    undecodable: 'The audio received could not be played.',
    noVoice: 'This browser has no English voice. Pick another source.',
    unsupported: 'This browser cannot read text aloud. Pick another source.',
    speech: (detail) => `The browser could not speak the text (${detail}).`,

    savedAudio: (size) => `Audio saved on this device: ${size}`,
    noSavedAudio: 'No audio saved on this device',
    clearAudio: 'Delete saved audio',
    audioCleared: 'Saved audio deleted',
  },
  es: {
    open: 'Escuchar la clase',
    player: 'Escuchar la clase',
    play: 'Reproducir',
    pause: 'Pausar',
    previous: 'Fragmento anterior',
    next: 'Fragmento siguiente',
    speed: (value) => `Velocidad: ${value}`,
    provider: 'Fuente de la voz',
    voice: 'Voz',
    providerName: { browser: 'Navegador (gratis)', openai: 'OpenAI', google: 'Google Cloud', elevenlabs: 'ElevenLabs' },
    settings: 'Ajustes del audio',
    close: 'Cerrar el reproductor',
    noVoices: 'Ninguna voz disponible',

    ready: (provider) => `Listo para escuchar (${provider})`,
    loading: 'Preparando el audio…',
    reading: (position, total) => `Fragmento ${position} de ${total}`,
    paused: (position, total) => `En pausa en el fragmento ${position} de ${total}`,
    finished: 'Fin de la clase',
    nothingToRead: 'Esta página no tiene texto para escuchar.',
    soundBlocked: 'El navegador bloqueó el sonido. Pulsa Reproducir.',

    estimate: (provider, characters, cost) => {
      const price =
        cost.kind === 'usd'
          ? `unos ${dollars('es', cost.amount, 'menos de')}${cost.freeCharacters > 0 ? `; hay ${number('es', cost.freeCharacters)} caracteres gratis al mes` : ''}`
          : `unos ${number('es', cost.credits)} créditos (el plan gratis da ${number('es', cost.freeCredits)} al mes)`;
      return `${provider} generará el audio de lo que falta: ${number('es', characters)} caracteres, ${price}. Solo pagas lo que escuches, más un fragmento por delante. Precios de noviembre de 2026, consulta el sitio del proveedor.`;
    },
    confirm: 'Generar y escuchar',
    cancel: 'Cancelar',

    retry: 'Reintentar',
    enterKey: 'Poner la clave',
    missingKey: (provider) => `Falta la clave de ${provider}.`,
    keyRejected: (provider) => `${provider} rechazó la clave.`,
    quota: (provider) => `${provider} rechazó por un límite o falta de créditos. Mira el saldo en el sitio del proveedor.`,
    network: (provider) => `No pude conectar con ${provider}. Revisa tu conexión y que la clave sea correcta.`,
    rejected: (provider, detail) => `${provider} rechazó la petición: ${detail}`,
    server: (provider, status) => `${provider} tiene un problema (error ${status}).`,
    undecodable: 'No se pudo reproducir el audio recibido.',
    noVoice: 'Este navegador no tiene voz en español. Elige otra fuente.',
    unsupported: 'Este navegador no lee texto en voz alta. Elige otra fuente.',
    speech: (detail) => `El navegador no pudo leer el texto (${detail}).`,

    savedAudio: (size) => `Audios guardados en este dispositivo: ${size}`,
    noSavedAudio: 'Ningún audio guardado en este dispositivo',
    clearAudio: 'Borrar los audios guardados',
    audioCleared: 'Audios guardados borrados',
  },
};

export const listenText = (lang: Lang): ListenText => TEXT[lang];
