import { CONTACT_EMAIL, POLICIES, TERMS, ext, mail } from './links';
import type { LegalLanguage } from './types';

export const pt: LegalLanguage = {
  lang: 'pt',
  updatedLabel: 'Última atualização: 26 de novembro de 2026',
  onThisPage: 'Nesta página',
  privacy: {
    metaTitle: 'Política de Privacidade | João Pster',
    metaDescription:
      'Quais dados o joaopster.com coleta, onde ficam guardados, com quem passam por terceiros e como exercer seus direitos pela LGPD.',
    title: 'Política de Privacidade',
    lead: 'Este é o site pessoal de João Pster. Aqui você vê, de forma direta, o que acontece com seus dados quando lê o blog, assina a newsletter ou estuda nos cursos. Tratamos os dados conforme a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018), e o texto também serve a quem vem de países da União Europeia (GDPR).',
    sections: [
      {
        id: 'quem',
        title: 'Quem é o responsável',
        blocks: [
          {
            kind: 'p',
            html: `O responsável pelos dados (controlador) é João Pster, pessoa física, dono do site joaopster.com. Não há empresa por trás do site. Para qualquer pedido sobre dados, escreva para ${mail()}.`,
          },
        ],
      },
      {
        id: 'resumo',
        title: 'Resumo em poucas linhas',
        blocks: [
          {
            kind: 'ul',
            items: [
              'O site não vende dados e não tem anúncios.',
              'O site não cria cookies próprios. A medição de visitas usa o Cloudflare Web Analytics, que, segundo a Cloudflare, funciona sem cookies.',
              'Progresso, marcações e anotações dos cursos ficam no seu navegador. Só vão para um servidor se você criar um código de sincronização.',
              'As chaves de IA e de voz que você cadastra ficam só no seu navegador e vão direto da sua página para o provedor. Este site não tem servidor que as receba.',
              'A newsletter guarda seu e-mail no Buttondown, e você cancela quando quiser.',
            ],
          },
        ],
      },
      {
        id: 'visita',
        title: 'Quando você só visita o site',
        blocks: [
          {
            kind: 'p',
            html: `O site roda na Cloudflare (hospedagem e rede de entrega). Como em qualquer site, a Cloudflare recebe seu endereço IP e dados técnicos do navegador para entregar as páginas e se proteger de abuso. Também uso o Cloudflare Web Analytics, que gera estatísticas agregadas de acesso (páginas vistas, país, tipo de navegador). Segundo a Cloudflare, esse serviço não usa cookies. Mais detalhes na ${ext(POLICIES.cloudflare, 'política da Cloudflare')}.`,
          },
          {
            kind: 'p',
            html: 'Os endereços da API do site (/api) têm limite de requisições por IP para conter abuso. Esse controle é feito pela Cloudflare e serve só para segurança.',
          },
        ],
      },
      {
        id: 'newsletter',
        title: 'Newsletter',
        blocks: [
          {
            kind: 'p',
            html: `Quando você assina, o formulário envia ao Buttondown (serviço de newsletter) estes dados: seu e-mail, o idioma da página (pt, en ou es), a página de onde você veio e o seu endereço IP. O Buttondown manda um e-mail de confirmação, e você só entra na lista depois de clicar nele. Este site não guarda o e-mail em banco próprio: ele só repassa ao Buttondown, que o armazena sob a ${ext(POLICIES.buttondown, 'política de privacidade dele')}.`,
          },
          {
            kind: 'p',
            html: `Para sair, use o link de cancelamento que vem nos e-mails ou peça para ${mail()}. Seu e-mail fica na lista até você cancelar.`,
          },
        ],
      },
      {
        id: 'comentarios',
        title: 'Comentários nos posts',
        blocks: [
          {
            kind: 'p',
            html: `Os posts do blog têm comentários feitos com o ${ext(POLICIES.giscus, 'Giscus')}, que usa as Discussions do GitHub do repositório do site. A caixa de comentários carrega scripts do giscus.app e do GitHub, e só comenta quem entra com a conta do GitHub. O comentário fica público no GitHub, sob a ${ext(POLICIES.github, 'política do GitHub')}. Para apagar um comentário seu, exclua-o lá ou peça por e-mail.`,
          },
        ],
      },
      {
        id: 'cursos',
        title: 'Cursos: o que fica no seu navegador',
        blocks: [
          {
            kind: 'p',
            html: 'As páginas de cursos (/cursos/, /en/courses/ e /es/cursos/) guardam no localStorage do seu navegador, em chaves que começam com jp-courses:, o seguinte: aulas marcadas como lidas, tarefas marcadas, dados de quiz e revisão, trechos que você destacou, a última aula aberta e preferências de leitura. Nada disso sai do seu aparelho, a menos que você ative a sincronização.',
          },
          {
            kind: 'p',
            html: 'O modo offline usa um service worker que salva páginas e arquivos dos cursos no Cache Storage do navegador. Ele só guarda arquivos do próprio site e nunca interfere nas chamadas à API.',
          },
          {
            kind: 'p',
            html: 'Para apagar tudo isso, limpe os dados do site (joaopster.com) nas configurações do navegador. Isso remove o localStorage, o Cache Storage e o service worker.',
          },
        ],
      },
      {
        id: 'sync',
        title: 'Cursos: sincronização opcional entre aparelhos',
        blocks: [
          {
            kind: 'p',
            html: 'Se você criar um código de sincronização, seu progresso é enviado ao servidor do site e guardado em um banco Cloudflare D1. O servidor guarda só o SHA-256 do código, nunca o código em si. O registro tem: aulas lidas, posições das tarefas marcadas, o texto dos trechos que você destacou, a última aula aberta e as datas de criação e atualização. Não há nome, e-mail nem qualquer outro dado que identifique você, e cada registro tem limite de 512 KB. Os dados de quiz e revisão não são sincronizados.',
          },
          {
            kind: 'p',
            html: '<strong>Trate o código como uma senha.</strong> Quem tiver o código consegue ler e alterar o progresso guardado nele. Se perder o código, não há como recuperá-lo.',
          },
          {
            kind: 'p',
            html: `Desvincular um aparelho remove o código só daquele navegador. O registro no servidor continua até você pedir a exclusão: escreva para ${mail()} informando o código, e eu apago o registro. Hoje não há prazo automático de expiração.`,
          },
        ],
      },
      {
        id: 'chaves',
        title: 'Assistente de IA e voz da aula (suas próprias chaves)',
        blocks: [
          {
            kind: 'p',
            html: 'As páginas de curso têm recursos opcionais que você liga com a sua própria chave de API: um assistente de IA e o recurso "ouvir a aula". Funciona assim:',
          },
          {
            kind: 'ul',
            items: [
              `Assistente de IA: usa a API da Anthropic (api.anthropic.com). ${ext(POLICIES.anthropic, 'Política de privacidade')}.`,
              `Voz do navegador (Web Speech API): gratuita. Em alguns sistemas, como as vozes online do Chrome e do Edge, o navegador pode enviar o texto aos servidores do fabricante dele. Depende do navegador e da voz escolhida.`,
              `Vozes pagas, só se você cadastrar a chave: OpenAI (api.openai.com, ${ext(POLICIES.openai, 'política')}), Google Cloud Text-to-Speech (texttospeech.googleapis.com, ${ext(POLICIES.google, 'política')}) e ElevenLabs (api.elevenlabs.io, ${ext(POLICIES.elevenlabs, 'política')}).`,
            ],
          },
          {
            kind: 'p',
            html: 'As chaves ficam só no localStorage do seu navegador e são enviadas da página direto ao provedor. Este site não tem servidor que receba as chaves, o texto da aula enviado ou o chat. As conversas com o assistente ficam salvas apenas no seu aparelho.',
          },
          {
            kind: 'p',
            html: 'Quando você usa um desses recursos, o texto da aula, os trechos selecionados e as suas perguntas vão para o provedor escolhido, que os trata pelos termos e pela política de privacidade dele. O custo do uso é cobrado de você pelo provedor.',
          },
          {
            kind: 'p',
            html: 'Cuidado com a chave: qualquer coisa que consiga rodar scripts na página, como uma extensão de navegador instalada por você, consegue ler o localStorage de qualquer site. Prefira uma chave exclusiva para este uso, com limite de gasto, e apague-a quando não estiver usando. Você remove a chave no próprio diálogo de chaves ou limpando os dados do site.',
          },
        ],
      },
      {
        id: 'terceiros',
        title: 'Serviços de terceiros que o site carrega',
        blocks: [
          {
            kind: 'ul',
            items: [
              `Cloudflare: hospedagem, entrega das páginas e Web Analytics (static.cloudflareinsights.com). ${ext(POLICIES.cloudflare, 'Política')}.`,
              `Google Fonts: as fontes Inter e JetBrains Mono vêm de fonts.googleapis.com e fonts.gstatic.com, então seu IP chega ao Google ao abrir uma página. ${ext(POLICIES.googleFonts, 'Política')}.`,
              `jsDelivr: alguns cursos carregam a biblioteca Mermaid, que desenha diagramas, de cdn.jsdelivr.net. ${ext(POLICIES.jsdelivr, 'Política')}.`,
              `Giscus e GitHub: comentários nos posts, como descrito acima.`,
              'WakaTime: as estatísticas de código mostradas no site são as minhas, buscadas pelo endereço /api/wakatime. Nenhum dado de visitante é enviado ao WakaTime.',
              'Buttondown, Anthropic, OpenAI, Google Cloud e ElevenLabs: só nos usos descritos nas seções da newsletter e das chaves.',
            ],
          },
          {
            kind: 'p',
            html: 'Os links para LinkedIn, GitHub, X, Bluesky, dev.to, TabNews, Reddit, Hacker News e WhatsApp apenas levam você a outro site. Só depois de clicar, esse site passa a tratar seus dados.',
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          {
            kind: 'p',
            html: 'O site não define cookies próprios, e por isso não mostra aviso de cookies. Seu navegador guarda preferências e progresso dos cursos no localStorage, como explicado acima. Os serviços embutidos (principalmente o Giscus e o GitHub nos posts) podem usar armazenamento próprio, que eu não controlo.',
          },
        ],
      },
      {
        id: 'bases',
        title: 'Bases legais e finalidades',
        blocks: [
          {
            kind: 'ul',
            items: [
              'Consentimento (LGPD, art. 7, I; GDPR, art. 6(1)(a)): newsletter, código de sincronização, uso do assistente de IA e das vozes com sua chave. Você pode retirar o consentimento a qualquer momento.',
              'Legítimo interesse (LGPD, art. 7, IX; GDPR, art. 6(1)(f)): manter o site seguro e no ar, limitar abuso da API e medir o uso de forma agregada para melhorar o conteúdo.',
            ],
          },
          {
            kind: 'p',
            html: 'Não uso seus dados para publicidade, não faço perfil de comportamento e não vendo nem alugo dados a ninguém.',
          },
        ],
      },
      {
        id: 'direitos',
        title: 'Seus direitos',
        blocks: [
          {
            kind: 'p',
            html: `Pela LGPD (art. 18), você pode pedir a qualquer momento: confirmação de que tratamos seus dados, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre com quem os dados foram compartilhados, informação sobre a possibilidade de não consentir e a revogação do consentimento. Quem está na União Europeia tem direitos equivalentes pelo GDPR, incluindo o de se opor ao tratamento.`,
          },
          {
            kind: 'p',
            html: `Para exercer qualquer um deles, escreva para ${mail()}. Para localizar um registro de sincronização, eu preciso do código. Respondo em até 15 dias. Se você achar que seus dados foram tratados de forma indevida, também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD) ou à autoridade do seu país.`,
          },
        ],
      },
      {
        id: 'transferencia',
        title: 'Transferência internacional',
        blocks: [
          {
            kind: 'p',
            html: 'Cloudflare, Buttondown, GitHub, Google, jsDelivr e os provedores de IA e voz estão sediados nos Estados Unidos ou operam servidores em vários países. Ao usar o site, seus dados podem ser processados fora do Brasil por esses serviços, sob as regras e salvaguardas de cada um (LGPD, art. 33).',
          },
        ],
      },
      {
        id: 'retencao',
        title: 'Por quanto tempo guardamos',
        blocks: [
          {
            kind: 'ul',
            items: [
              'Newsletter: até você cancelar a assinatura.',
              'Progresso sincronizado: até você pedir a exclusão. Não há expiração automática hoje.',
              'Comentários: até serem apagados no GitHub.',
              'Dados no seu navegador: até você limpá-los.',
              'Logs de acesso e estatísticas: pelo prazo que a Cloudflare define.',
            ],
          },
        ],
      },
      {
        id: 'menores',
        title: 'Crianças e adolescentes',
        blocks: [
          {
            kind: 'p',
            html: 'O site não é voltado a crianças. Quem tem menos de 18 anos deve usar a newsletter, a sincronização e os recursos com chave de API com o acompanhamento de um responsável. Se eu souber que guardo dados de uma criança sem o consentimento de um responsável, apago.',
          },
        ],
      },
      {
        id: 'mudancas',
        title: 'Mudanças nesta política',
        blocks: [
          {
            kind: 'p',
            html: `Quando o site mudar a forma de tratar dados, atualizo esta página e a data no topo. Dúvidas: ${CONTACT_EMAIL}.`,
          },
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Termos de Uso | João Pster',
    metaDescription:
      'Regras de uso do joaopster.com: blog, cursos gratuitos, recursos de IA e voz, propriedade intelectual e limites de responsabilidade.',
    title: 'Termos de Uso',
    lead: 'Ao usar o joaopster.com, você concorda com estes termos. Eles são curtos de propósito. Se não concordar, não use o site.',
    sections: [
      {
        id: 'o-que-e',
        title: 'O que o site oferece',
        blocks: [
          {
            kind: 'p',
            html: 'O joaopster.com é o site pessoal de João Pster. Tem um blog em português, inglês e espanhol, cursos gratuitos (hoje: AWS Solutions Architect Associate, Primeiros Socorros, Rádio, LoRa e Redes Mesh, e Modelagem de Casas) e recursos opcionais de leitura, como progresso, destaques, modo offline, assistente de IA e voz da aula. Tudo é oferecido de graça e pode mudar ou sair do ar sem aviso.',
          },
        ],
      },
      {
        id: 'educacional',
        title: 'Conteúdo educacional, não aconselhamento',
        blocks: [
          {
            kind: 'p',
            html: 'O conteúdo é informativo e educacional. Ele não substitui treinamento presencial, nem a orientação de um profissional habilitado, nem a legislação aplicável ao seu caso.',
          },
          {
            kind: 'p',
            html: '<strong>Primeiros socorros e saúde:</strong> o curso de Primeiros Socorros não substitui um curso prático com instrutor certificado. Em uma emergência real, ligue para os serviços de emergência: 192 (SAMU) ou 193 (Bombeiros) no Brasil, 112 ou 911 em outros países.',
          },
          {
            kind: 'p',
            html: 'O mesmo vale para os outros cursos. Obra e projeto de casas exigem arquiteto ou engenheiro responsável, instalação de rádio e redes exige respeitar as regras do seu país, e certificações como a da AWS têm material oficial que prevalece sobre o meu.',
          },
        ],
      },
      {
        id: 'ia-voz',
        title: 'IA e voz: por sua conta e risco',
        blocks: [
          {
            kind: 'p',
            html: 'O assistente de IA e as vozes pagas usam a sua chave de API e funcionam por meio de terceiros. Ao usá-los, você aceita que:',
          },
          {
            kind: 'ul',
            items: [
              `Os termos e a política de cada provedor valem: ${ext(TERMS.anthropic, 'Anthropic')}, ${ext(TERMS.openai, 'OpenAI')}, ${ext(TERMS.google, 'Google Cloud')} e ${ext(TERMS.elevenlabs, 'ElevenLabs')}.`,
              'O custo é seu. Eu não recebo nada e não controlo o que o provedor cobra. Defina um limite de gasto na sua conta.',
              'Respostas de IA podem estar erradas, incompletas ou desatualizadas. Elas não substituem professor, material oficial nem profissional.',
              'Você cuida da sua chave. Sobre os riscos de guardá-la no navegador, veja a Política de Privacidade.',
            ],
          },
        ],
      },
      {
        id: 'uso',
        title: 'Uso aceitável',
        blocks: [
          {
            kind: 'p',
            html: 'Use o site de forma normal e respeitosa. Não é permitido:',
          },
          {
            kind: 'ul',
            items: [
              'sobrecarregar ou atacar o site ou os endereços /api, nem automatizar requisições em volume;',
              'tentar adivinhar códigos de sincronização ou acessar o progresso de outras pessoas;',
              'enviar dados falsos, e-mails de terceiros sem autorização ou spam por qualquer formulário;',
              'usar o site para algo ilegal ou para tentar burlar a segurança dele.',
            ],
          },
          {
            kind: 'p',
            html: 'Posso limitar ou bloquear acessos que violem estas regras.',
          },
        ],
      },
      {
        id: 'propriedade',
        title: 'Propriedade intelectual',
        blocks: [
          {
            kind: 'p',
            html: 'O código-fonte do site é aberto, sob licença MIT, no repositório do GitHub. Os textos do blog e dos cursos, as imagens e o restante do conteúdo são meus, com todos os direitos reservados, exceto quando a página disser outra coisa. Você pode ler, estudar, imprimir para uso pessoal e citar trechos curtos com crédito e link para a fonte. Para copiar, republicar ou usar em curso ou produto próprio, peça autorização.',
          },
          {
            kind: 'p',
            html: 'Marcas, nomes e materiais de terceiros citados no site pertencem aos seus donos.',
          },
        ],
      },
      {
        id: 'links',
        title: 'Links e serviços de terceiros',
        blocks: [
          {
            kind: 'p',
            html: 'O site tem links para outros sites e carrega serviços de terceiros. Não controlo nem respondo pelo conteúdo, pela disponibilidade ou pelas práticas deles.',
          },
        ],
      },
      {
        id: 'garantia',
        title: 'Sem garantia e limite de responsabilidade',
        blocks: [
          {
            kind: 'p',
            html: 'O site e todo o conteúdo são oferecidos "como estão", sem garantia de que estejam corretos, completos, atualizados ou sempre disponíveis. Faço o possível para acertar, mas erro acontece.',
          },
          {
            kind: 'p',
            html: 'Na extensão permitida pela lei, não respondo por danos decorrentes do uso do site ou da confiança no seu conteúdo, incluindo perda de dados salvos no navegador ou no código de sincronização, gastos com provedores de IA e voz, e decisões tomadas com base nos cursos. Isso não afasta responsabilidades que a lei não permite excluir, como as previstas no Código de Defesa do Consumidor, quando aplicável.',
          },
        ],
      },
      {
        id: 'lei',
        title: 'Lei aplicável e foro',
        blocks: [
          {
            kind: 'p',
            html: 'Estes termos seguem as leis do Brasil. Fica eleito o foro do domicílio do responsável pelo site para resolver conflitos, ressalvado o direito de o consumidor acionar o foro do próprio domicílio quando a lei assim garantir.',
          },
        ],
      },
      {
        id: 'mudancas-termos',
        title: 'Mudanças nos termos e contato',
        blocks: [
          {
            kind: 'p',
            html: `Posso alterar estes termos. A versão em vigor é a publicada nesta página, com a data no topo. Continuar usando o site depois de uma mudança significa aceitar a nova versão. Dúvidas ou pedidos: ${mail()}.`,
          },
        ],
      },
    ],
  },
};
