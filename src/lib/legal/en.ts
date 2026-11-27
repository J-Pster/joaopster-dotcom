import { CONTACT_EMAIL, POLICIES, TERMS, ext, mail } from './links';
import type { LegalLanguage } from './types';

export const en: LegalLanguage = {
  lang: 'en',
  updatedLabel: 'Last updated: November 26, 2026',
  onThisPage: 'On this page',
  privacy: {
    metaTitle: 'Privacy Policy | João Pster',
    metaDescription:
      'What data joaopster.com collects, where it is stored, which third parties are involved and how to exercise your rights under Brazil\'s LGPD and the GDPR.',
    title: 'Privacy Policy',
    lead: 'This is the personal site of João Pster. Here is what happens to your data when you read the blog, join the newsletter or study in the courses. Data is handled under Brazil\'s General Data Protection Law (LGPD, Law 13,709/2018), and this text is also written for readers in the European Union (GDPR).',
    sections: [
      {
        id: 'who',
        title: 'Who is responsible',
        blocks: [
          {
            kind: 'p',
            html: `The data controller is João Pster, an individual, who owns joaopster.com. There is no company behind the site. For any request about your data, write to ${mail()}.`,
          },
        ],
      },
      {
        id: 'summary',
        title: 'Short version',
        blocks: [
          {
            kind: 'ul',
            items: [
              'The site does not sell data and has no ads.',
              'The site sets no cookies of its own. Visit statistics come from Cloudflare Web Analytics, which according to Cloudflare works without cookies.',
              'Your course progress, highlights and notes stay in your browser. They reach a server only if you create a sync code.',
              'AI and voice keys you add stay in your browser and go straight from your page to the provider. This site has no server that receives them.',
              'The newsletter stores your email at Buttondown, and you can unsubscribe at any time.',
            ],
          },
        ],
      },
      {
        id: 'visit',
        title: 'When you just visit',
        blocks: [
          {
            kind: 'p',
            html: `The site runs on Cloudflare (hosting and delivery network). Like any website, Cloudflare receives your IP address and technical browser data to deliver pages and protect against abuse. I also use Cloudflare Web Analytics, which produces aggregate traffic statistics (page views, country, browser type). According to Cloudflare, it does not use cookies. See the ${ext(POLICIES.cloudflare, 'Cloudflare privacy policy')}.`,
          },
          {
            kind: 'p',
            html: 'The site\'s API endpoints (/api) have per-IP request limits to curb abuse. Cloudflare applies them, and they exist for security only.',
          },
        ],
      },
      {
        id: 'newsletter',
        title: 'Newsletter',
        blocks: [
          {
            kind: 'p',
            html: `When you subscribe, the form sends Buttondown (the newsletter service) your email, the language of the page (pt, en or es), the page you came from and your IP address. Buttondown sends a confirmation email, and you join the list only after clicking it. This site does not keep your email in a database of its own: it passes it to Buttondown, which stores it under its ${ext(POLICIES.buttondown, 'privacy policy')}.`,
          },
          {
            kind: 'p',
            html: `To leave, use the unsubscribe link in the emails or ask ${mail()}. Your email stays on the list until you unsubscribe.`,
          },
        ],
      },
      {
        id: 'comments',
        title: 'Comments on posts',
        blocks: [
          {
            kind: 'p',
            html: `Blog posts have comments powered by ${ext(POLICIES.giscus, 'Giscus')}, which uses GitHub Discussions in the site's repository. The comment box loads scripts from giscus.app and GitHub, and only people signed in with a GitHub account can comment. A comment is public on GitHub under the ${ext(POLICIES.github, 'GitHub privacy statement')}. To remove a comment of yours, delete it there or ask by email.`,
          },
        ],
      },
      {
        id: 'courses',
        title: 'Courses: what stays in your browser',
        blocks: [
          {
            kind: 'p',
            html: 'Course pages (/cursos/, /en/courses/ and /es/cursos/) save the following in your browser\'s localStorage, under keys starting with jp-courses: lessons marked as read, ticked tasks, quiz and review data, passages you highlighted, the last lesson you opened and reading preferences. None of it leaves your device unless you turn on sync.',
          },
          {
            kind: 'p',
            html: 'Offline mode uses a service worker that saves course pages and files in the browser\'s Cache Storage. It stores only files from this site and never touches API calls.',
          },
          {
            kind: 'p',
            html: 'To delete all of it, clear site data for joaopster.com in your browser settings. That removes localStorage, Cache Storage and the service worker.',
          },
        ],
      },
      {
        id: 'sync',
        title: 'Courses: optional sync between devices',
        blocks: [
          {
            kind: 'p',
            html: 'If you create a sync code, your progress is sent to the site\'s server and stored in a Cloudflare D1 database. The server stores only the SHA-256 hash of the code, never the code itself. A record holds lessons read, positions of ticked tasks, the text of passages you highlighted, the last lesson opened and the creation and update times. There is no name, email or any other data that identifies you, and each record is limited to 512 KB. Quiz and review data are not synced.',
          },
          {
            kind: 'p',
            html: '<strong>Treat the code like a password.</strong> Anyone with the code can read and change the progress stored under it. If you lose the code, it cannot be recovered.',
          },
          {
            kind: 'p',
            html: `Unlinking a device removes the code from that browser only. The server record stays until you ask for deletion: write to ${mail()} with the code and I will delete it. There is no automatic expiry today.`,
          },
        ],
      },
      {
        id: 'keys',
        title: 'AI assistant and lesson voice (your own keys)',
        blocks: [
          {
            kind: 'p',
            html: 'Course pages have optional features that you turn on with your own API key: an AI assistant and "listen to the lesson". Here is how they work:',
          },
          {
            kind: 'ul',
            items: [
              `AI assistant: uses the API of the provider of the model you pick, with your key: Anthropic (api.anthropic.com, ${ext(POLICIES.anthropic, 'policy')}), OpenAI (api.openai.com, ${ext(POLICIES.openai, 'policy')}) or Google Gemini (generativelanguage.googleapis.com, ${ext(POLICIES.gemini, 'terms')}). Under the Gemini API terms, on the free tier Google may use what you send to improve its products.`,
              `Browser voices (Web Speech API): free. On some systems, such as the online voices in Chrome and Edge, the browser may send the text to its vendor's servers. It depends on the browser and the voice you pick.`,
              `Paid voices, only if you add the key: OpenAI (api.openai.com, ${ext(POLICIES.openai, 'policy')}), Google Cloud Text-to-Speech (texttospeech.googleapis.com, ${ext(POLICIES.google, 'policy')}) and ElevenLabs (api.elevenlabs.io, ${ext(POLICIES.elevenlabs, 'policy')}).`,
            ],
          },
          {
            kind: 'p',
            html: 'Keys are saved only in your browser\'s localStorage and are sent from the page straight to the provider. This site has no server that receives the keys, the lesson text you send or the chat. Conversations with the assistant are saved only on your device.',
          },
          {
            kind: 'p',
            html: 'When you use one of these features, the lesson text, the snippets you select and your questions go to the provider you chose, which handles them under its own terms and privacy policy. The provider bills you for the usage.',
          },
          {
            kind: 'p',
            html: 'Protect your key: anything that can run scripts on the page, such as a browser extension you installed, can read localStorage on any website. Use a dedicated key with a spending limit, and delete it when you are not using it. You can remove a key in the keys dialog or by clearing site data.',
          },
        ],
      },
      {
        id: 'third-parties',
        title: 'Third-party services the site loads',
        blocks: [
          {
            kind: 'ul',
            items: [
              `Cloudflare: hosting, page delivery and Web Analytics (static.cloudflareinsights.com). ${ext(POLICIES.cloudflare, 'Policy')}.`,
              `Google Fonts: the Inter and JetBrains Mono fonts come from fonts.googleapis.com and fonts.gstatic.com, so your IP reaches Google when a page opens. ${ext(POLICIES.googleFonts, 'Policy')}.`,
              `jsDelivr: some courses load the Mermaid library, which draws diagrams, from cdn.jsdelivr.net. ${ext(POLICIES.jsdelivr, 'Policy')}.`,
              'Giscus and GitHub: comments on posts, as described above.',
              'WakaTime: the coding statistics shown on the site are my own, fetched through /api/wakatime. No visitor data is sent to WakaTime.',
              'Buttondown, Anthropic, OpenAI, Google (Gemini and Cloud) and ElevenLabs: only in the uses described in the newsletter and keys sections.',
            ],
          },
          {
            kind: 'p',
            html: 'Links to LinkedIn, GitHub, X, Bluesky, dev.to, TabNews, Reddit, Hacker News and WhatsApp only take you to another site. That site handles your data once you click.',
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          {
            kind: 'p',
            html: 'The site sets no cookies of its own, so it shows no cookie banner. Your browser keeps course preferences and progress in localStorage, as explained above. Embedded services (mainly Giscus and GitHub on posts) may use storage of their own, which I do not control.',
          },
        ],
      },
      {
        id: 'bases',
        title: 'Legal bases and purposes',
        blocks: [
          {
            kind: 'ul',
            items: [
              'Consent (LGPD art. 7, I; GDPR art. 6(1)(a)): newsletter, sync code, and using the AI assistant and voices with your key. You can withdraw consent at any time.',
              'Legitimate interest (LGPD art. 7, IX; GDPR art. 6(1)(f)): keeping the site secure and online, limiting API abuse and measuring usage in aggregate to improve the content.',
            ],
          },
          {
            kind: 'p',
            html: 'I do not use your data for advertising, I do not build behavior profiles and I do not sell or rent data to anyone.',
          },
        ],
      },
      {
        id: 'rights',
        title: 'Your rights',
        blocks: [
          {
            kind: 'p',
            html: 'Under the LGPD (art. 18) you can ask at any time for: confirmation that your data is processed, access, correction, anonymization, blocking or deletion, portability, information about who the data was shared with, information about the option to refuse consent, and withdrawal of consent. If you are in the European Union, the GDPR gives you equivalent rights, including the right to object to processing.',
          },
          {
            kind: 'p',
            html: `To exercise any of them, write to ${mail()}. To find a sync record, I need the code. I answer within 15 days. If you believe your data was handled improperly, you can also complain to Brazil's National Data Protection Authority (ANPD) or to the authority in your country.`,
          },
        ],
      },
      {
        id: 'transfers',
        title: 'International transfers',
        blocks: [
          {
            kind: 'p',
            html: 'Cloudflare, Buttondown, GitHub, Google, jsDelivr and the AI and voice providers are based in the United States or run servers in several countries. When you use the site, these services may process your data outside Brazil, under their own rules and safeguards (LGPD art. 33).',
          },
        ],
      },
      {
        id: 'retention',
        title: 'How long data is kept',
        blocks: [
          {
            kind: 'ul',
            items: [
              'Newsletter: until you unsubscribe.',
              'Synced progress: until you ask for deletion. There is no automatic expiry today.',
              'Comments: until they are deleted on GitHub.',
              'Data in your browser: until you clear it.',
              'Access logs and statistics: for the period Cloudflare sets.',
            ],
          },
        ],
      },
      {
        id: 'minors',
        title: 'Children and teenagers',
        blocks: [
          {
            kind: 'p',
            html: 'The site is not aimed at children. Anyone under 18 should use the newsletter, sync and API key features with a parent or guardian. If I learn that I hold a child\'s data without a guardian\'s consent, I delete it.',
          },
        ],
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        blocks: [
          {
            kind: 'p',
            html: `When the site changes how it handles data, I update this page and the date at the top. Questions: ${CONTACT_EMAIL}.`,
          },
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Terms of Use | João Pster',
    metaDescription:
      'Rules for using joaopster.com: the blog, free courses, AI and voice features, intellectual property and limits of liability.',
    title: 'Terms of Use',
    lead: 'By using joaopster.com you agree to these terms. They are short on purpose. If you disagree, please do not use the site.',
    sections: [
      {
        id: 'what',
        title: 'What the site offers',
        blocks: [
          {
            kind: 'p',
            html: 'joaopster.com is the personal site of João Pster. It has a blog in Portuguese, English and Spanish, free courses (today: AWS Solutions Architect Associate, First Aid, Radio, LoRa and Mesh Networks, and House Modeling) and optional reading features such as progress, highlights, offline mode, an AI assistant and lesson voice. Everything is free and may change or go offline without notice.',
          },
        ],
      },
      {
        id: 'educational',
        title: 'Educational content, not advice',
        blocks: [
          {
            kind: 'p',
            html: 'The content is informational and educational. It does not replace in-person training, the guidance of a qualified professional or the law that applies to your case.',
          },
          {
            kind: 'p',
            html: '<strong>First aid and health:</strong> the First Aid course does not replace a hands-on course with a certified instructor. In a real emergency, call emergency services: 192 (SAMU) or 193 (fire department) in Brazil, 112 or 911 elsewhere.',
          },
          {
            kind: 'p',
            html: 'The same goes for the other courses. Building a house requires a responsible architect or engineer, installing radio and network gear requires following your country\'s rules, and certifications such as AWS have official material that overrides mine.',
          },
        ],
      },
      {
        id: 'ai-voice',
        title: 'AI and voice: at your own risk',
        blocks: [
          {
            kind: 'p',
            html: 'The AI assistant and paid voices use your API key and run through third parties. By using them you accept that:',
          },
          {
            kind: 'ul',
            items: [
              `Each provider's terms and policy apply: ${ext(TERMS.anthropic, 'Anthropic')}, ${ext(TERMS.openai, 'OpenAI')}, ${ext(TERMS.gemini, 'Google Gemini')}, ${ext(TERMS.google, 'Google Cloud')} and ${ext(TERMS.elevenlabs, 'ElevenLabs')}.`,
              'The cost is yours. I receive nothing and do not control what the provider charges. Set a spending limit on your account.',
              'AI answers can be wrong, incomplete or out of date. They do not replace a teacher, official material or a professional.',
              'You look after your key. For the risks of keeping it in the browser, see the Privacy Policy.',
            ],
          },
        ],
      },
      {
        id: 'use',
        title: 'Acceptable use',
        blocks: [
          {
            kind: 'p',
            html: 'Use the site in a normal, respectful way. You may not:',
          },
          {
            kind: 'ul',
            items: [
              'overload or attack the site or the /api endpoints, or send automated requests in volume;',
              'try to guess sync codes or access other people\'s progress;',
              'submit fake data, other people\'s emails without permission or spam through any form;',
              'use the site for anything illegal or to try to bypass its security.',
            ],
          },
          {
            kind: 'p',
            html: 'I may limit or block access that breaks these rules.',
          },
        ],
      },
      {
        id: 'ip',
        title: 'Intellectual property',
        blocks: [
          {
            kind: 'p',
            html: 'The site\'s source code is open under the MIT license in the GitHub repository. The blog and course texts, images and other content are mine, all rights reserved, unless a page says otherwise. You may read, study, print for personal use and quote short excerpts with credit and a link to the source. To copy, republish or use it in your own course or product, ask for permission.',
          },
          {
            kind: 'p',
            html: 'Trademarks, names and third-party material mentioned on the site belong to their owners.',
          },
        ],
      },
      {
        id: 'links',
        title: 'Links and third-party services',
        blocks: [
          {
            kind: 'p',
            html: 'The site links to other sites and loads third-party services. I do not control and am not responsible for their content, availability or practices.',
          },
        ],
      },
      {
        id: 'warranty',
        title: 'No warranty and limit of liability',
        blocks: [
          {
            kind: 'p',
            html: 'The site and all content are provided "as is", with no guarantee that they are correct, complete, current or always available. I try to get things right, but mistakes happen.',
          },
          {
            kind: 'p',
            html: 'To the extent the law allows, I am not liable for damages from using the site or relying on its content, including loss of data saved in the browser or of the sync code, spending with AI and voice providers, and decisions made based on the courses. This does not remove liability that the law does not allow to be excluded, such as consumer protection rights where they apply.',
          },
        ],
      },
      {
        id: 'law',
        title: 'Governing law and courts',
        blocks: [
          {
            kind: 'p',
            html: 'These terms are governed by the laws of Brazil. Disputes go to the courts of the site owner\'s domicile, without prejudice to a consumer\'s right to sue in their own domicile where the law guarantees it.',
          },
        ],
      },
      {
        id: 'changes-contact',
        title: 'Changes to the terms and contact',
        blocks: [
          {
            kind: 'p',
            html: `I may change these terms. The version in force is the one published on this page, with the date at the top. Using the site after a change means accepting the new version. Questions or requests: ${mail()}.`,
          },
        ],
      },
    ],
  },
};
