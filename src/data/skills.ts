import type { Lang } from '../i18n/ui';

type Localized = Readonly<Record<Lang, string>>;

/** A tool or product name reads the same in every language; a concept is translated. */
export type Skill = string | Localized;

export interface SkillArea {
  readonly label: Localized;
  readonly skills: readonly Skill[];
}

export interface SkillGroup {
  readonly id: string;
  readonly title: Localized;
  readonly summary: Localized;
  readonly areas: readonly SkillArea[];
}

const l = (pt: string, en: string, es: string): Localized => ({ pt, en, es });

export function skillName(skill: Skill, lang: Lang): string {
  return typeof skill === 'string' ? skill : skill[lang];
}

/** A skill listed under two groups (Cognito, AWS WAF) counts once. */
export function countUniqueSkills(lang: Lang): number {
  return new Set(
    skillGroups.flatMap((group) => group.areas.flatMap((area) => area.skills.map((skill) => skillName(skill, lang)))),
  ).size;
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'aws',
    title: l('Infraestrutura em nuvem (AWS)', 'Cloud infrastructure (AWS)', 'Infraestructura en la nube (AWS)'),
    summary: l(
      'Arquitetura na AWS que eu projetei e opero em produção, toda definida como código.',
      'AWS architecture I designed and run in production, all defined as code.',
      'Arquitectura en AWS que diseñé y opero en producción, toda definida como código.',
    ),
    areas: [
      {
        label: l('Computação e containers', 'Compute and containers', 'Cómputo y contenedores'),
        skills: ['ECS Fargate', 'AWS Lambda', 'Auto Scaling', 'ECR', 'Docker', 'Serverless'],
      },
      {
        label: l('Rede e entrega', 'Networking and delivery', 'Red y entrega'),
        skills: ['VPC', 'Subnets', 'Security Groups', 'NAT', 'VPC Endpoints', 'API Gateway', 'CloudFront', 'Route 53'],
      },
      {
        label: l('Mensageria e eventos', 'Messaging and events', 'Mensajería y eventos'),
        skills: ['SQS', 'SNS', 'EventBridge', 'EventBridge Scheduler', 'Step Functions'],
      },
      {
        label: l('Dados e armazenamento', 'Data and storage', 'Datos y almacenamiento'),
        skills: ['RDS PostgreSQL', 'S3', 'ElastiCache (Redis)'],
      },
      {
        label: l('Identidade, criptografia e segredos', 'Identity, encryption and secrets', 'Identidad, cifrado y secretos'),
        skills: [l('IAM com menor privilégio', 'IAM least privilege', 'IAM con mínimo privilegio'), 'Cognito', 'KMS', 'Secrets Manager', 'AWS WAF'],
      },
      {
        label: l('Infraestrutura como código e CI/CD', 'Infrastructure as code and CI/CD', 'Infraestructura como código y CI/CD'),
        skills: ['OpenTofu', 'AWS CDK (TypeScript)', 'CodePipeline', 'CodeBuild'],
      },
      {
        label: l('Observabilidade e operação', 'Observability and operations', 'Observabilidad y operación'),
        skills: ['CloudWatch', 'X-Ray', 'Sentry', l('Controle de custo de nuvem', 'Cloud cost control', 'Control de costos de nube')],
      },
      {
        label: l('Outras nuvens e plataformas', 'Other clouds and platforms', 'Otras nubes y plataformas'),
        skills: ['Google Cloud', 'Firebase', 'Azure', 'DigitalOcean', 'Cloudflare'],
      },
    ],
  },
  {
    id: 'architecture',
    title: l('Engenharia e arquitetura de software', 'Software engineering and architecture', 'Ingeniería y arquitectura de software'),
    summary: l(
      'Arquitetura escolhida pelos trade-offs de cada produto, com backend tipado e testes automatizados.',
      'Architecture chosen by the trade-offs of each product, with typed backends and automated tests.',
      'Arquitectura elegida por los trade-offs de cada producto, con backends tipados y pruebas automatizadas.',
    ),
    areas: [
      {
        label: l('Estilos de arquitetura', 'Architecture styles', 'Estilos de arquitectura'),
        skills: [
          l('Monólito modular', 'Modular monolith', 'Monolito modular'),
          l('Microsserviços', 'Microservices', 'Microservicios'),
          l('Arquitetura orientada a eventos', 'Event-driven architecture', 'Arquitectura orientada a eventos'),
          'Serverless',
        ],
      },
      {
        label: l('Design e padrões', 'Design and patterns', 'Diseño y patrones'),
        skills: [
          'Domain-Driven Design',
          'Clean Architecture',
          l('Arquitetura hexagonal (ports and adapters)', 'Hexagonal architecture (ports and adapters)', 'Arquitectura hexagonal (ports and adapters)'),
          'SOLID',
          'GRASP',
          'GoF Design Patterns',
          'Enterprise Integration Patterns',
        ],
      },
      {
        label: l('Backend', 'Backend', 'Backend'),
        skills: ['Node.js', 'NestJS', 'Express', 'TypeORM', 'Django'],
      },
      {
        label: l('APIs e comunicação', 'APIs and communication', 'APIs y comunicación'),
        skills: [
          'REST',
          'WebSocket',
          l('Mensageria assíncrona', 'Async messaging', 'Mensajería asíncrona'),
          l('Idempotência', 'Idempotency', 'Idempotencia'),
          'Webhooks',
        ],
      },
      {
        label: l('Dados', 'Data', 'Datos'),
        skills: [
          'PostgreSQL',
          'Redis',
          'SQL',
          l('Modelagem de dados relacional', 'Relational data modeling', 'Modelado de datos relacional'),
          l('Migrations seguras', 'Safe migrations', 'Migraciones seguras'),
        ],
      },
      {
        label: l('Testes e qualidade', 'Testing and quality', 'Pruebas y calidad'),
        skills: [
          'Jest',
          'Playwright',
          l('Testes unitários, de integração e end-to-end', 'Unit, integration and end-to-end tests', 'Pruebas unitarias, de integración y end-to-end'),
          'Code review',
          l('Segurança de tipos', 'Type safety', 'Seguridad de tipos'),
        ],
      },
    ],
  },
  {
    id: 'languages',
    title: l('Linguagens de programação', 'Programming languages', 'Lenguajes de programación'),
    summary: l(
      'TypeScript é a principal, de ponta a ponta. As outras entram quando o projeto pede.',
      'TypeScript is the main one, end to end. The others come in when a project needs them.',
      'TypeScript es el principal, de punta a punta. Los otros entran cuando el proyecto lo pide.',
    ),
    areas: [
      {
        label: l('Principais', 'Main', 'Principales'),
        skills: ['TypeScript', 'JavaScript', 'SQL'],
      },
      {
        label: l('Também uso', 'Also used', 'También uso'),
        skills: ['Python', 'C# (.NET)', 'PHP', 'Kotlin', 'HTML', 'CSS', 'SCSS'],
      },
    ],
  },
  {
    id: 'frontend',
    title: l('Frontend, mobile e desktop', 'Frontend, mobile and desktop', 'Frontend, mobile y desktop'),
    summary: l(
      'Apps web, iOS, Android, TV e desktop, incluindo modernização de frontends legados.',
      'Web, iOS, Android, TV and desktop apps, including modernization of legacy frontends.',
      'Apps web, iOS, Android, TV y desktop, incluida la modernización de frontends legacy.',
    ),
    areas: [
      {
        label: l('Web', 'Web', 'Web'),
        skills: ['Angular', 'React', 'Next.js', 'Vue', 'Astro', 'Vanilla JavaScript'],
      },
      {
        label: l('Mobile', 'Mobile', 'Mobile'),
        skills: [
          'React Native',
          'Expo',
          l('Atualizações over-the-air', 'Over-the-air updates', 'Actualizaciones over-the-air'),
          'iOS',
          'Android',
          'Flutter',
        ],
      },
      {
        label: l('Desktop', 'Desktop', 'Desktop'),
        skills: ['Electron'],
      },
      {
        label: l('Interface e design', 'Interface and design', 'Interfaz y diseño'),
        skills: [
          'Design systems',
          'Atomic Design',
          'Figma',
          l('Modernização de frontends legados', 'Legacy frontend modernization', 'Modernización de frontends legacy'),
        ],
      },
      {
        label: l('Performance e SEO', 'Performance and SEO', 'Rendimiento y SEO'),
        skills: [l('SEO técnico', 'Technical SEO', 'SEO técnico'), 'Core Web Vitals'],
      },
    ],
  },
  {
    id: 'ai',
    title: l('IA em produção', 'AI in production', 'IA en producción'),
    summary: l(
      'Funcionalidades de IA rodando com usuários reais: voz, documentos, busca e classificação.',
      'AI features running with real users: voice, documents, search and classification.',
      'Funcionalidades de IA funcionando con usuarios reales: voz, documentos, búsqueda y clasificación.',
    ),
    areas: [
      {
        label: l('Voz e áudio', 'Voice and audio', 'Voz y audio'),
        skills: [
          l('Agentes de voz em tempo real', 'Real-time voice agents', 'Agentes de voz en tiempo real'),
          'Gemini Live API',
          'Twilio Voice',
          'ElevenLabs',
          l('Transcrição de áudio', 'Audio transcription', 'Transcripción de audio'),
          l('Atas de reunião automáticas', 'Automatic meeting minutes', 'Actas de reunión automáticas'),
        ],
      },
      {
        label: l('Documentos, imagem e vídeo', 'Documents, image and video', 'Documentos, imagen y video'),
        skills: [
          'Gemini multimodal',
          'Google Cloud Vision OCR',
          l('Processamento de documentos', 'Document processing', 'Procesamiento de documentos'),
          'FFmpeg',
          l('Detecção de rosto e de quem fala', 'Face and active speaker detection', 'Detección de rostro y de quien habla'),
        ],
      },
      {
        label: l('Modelos e APIs', 'Models and APIs', 'Modelos y APIs'),
        skills: ['Anthropic Claude API', 'Google Gemini', 'LangChain'],
      },
      {
        label: l('Busca e recuperação', 'Search and retrieval', 'Búsqueda y recuperación'),
        skills: [
          'RAG',
          'Embeddings',
          l('Busca semântica', 'Semantic search', 'Búsqueda semántica'),
          'Grounding',
        ],
      },
      {
        label: l('LLMs no fluxo do produto', 'LLMs in the product flow', 'LLMs en el flujo del producto'),
        skills: [
          l('Classificação e roteamento com LLM', 'LLM classification and routing', 'Clasificación y enrutamiento con LLM'),
          l('Matching de entidades', 'Entity matching', 'Matching de entidades'),
          'Prompt engineering',
          l('Pipelines de várias etapas', 'Multi-step pipelines', 'Pipelines de varias etapas'),
          'Tool use',
          l('Saída estruturada em JSON tipado', 'Structured output as typed JSON', 'Salida estructurada en JSON tipado'),
          l('Confiança por campo', 'Per-field confidence', 'Confianza por campo'),
        ],
      },
      {
        label: l('Confiabilidade e custo', 'Reliability and cost', 'Confiabilidad y costo'),
        skills: [
          'Guardrails',
          l('Determinismo', 'Determinism', 'Determinismo'),
          l('Controle de custo de modelos', 'Model cost control', 'Control de costo de modelos'),
        ],
      },
    ],
  },
  {
    id: 'ai-engineering',
    title: l('Engenharia com IA', 'AI engineering workflow', 'Ingeniería con IA'),
    summary: l(
      'Como eu trabalho com agentes no dia a dia: especificação primeiro, contexto documentado e revisão de tudo.',
      'How I work with agents day to day: spec first, documented context and review of everything.',
      'Cómo trabajo con agentes en el día a día: especificación primero, contexto documentado y revisión de todo.',
    ),
    areas: [
      {
        label: l('Método', 'Method', 'Método'),
        skills: [
          'Spec-driven development',
          l('Workflows agênticos', 'Agentic workflows', 'Workflows agénticos'),
          l('Skills, rules e hooks', 'Skills, rules and hooks', 'Skills, rules y hooks'),
          l('Servidores MCP', 'MCP servers', 'Servidores MCP'),
        ],
      },
      {
        label: l('Ferramentas', 'Tools', 'Herramientas'),
        skills: ['Claude Code', 'Serena', 'Context7', 'Exa', 'ai-memory'],
      },
    ],
  },
  {
    id: 'integrations',
    title: l('Integração de sistemas e automação', 'Systems integration and automation', 'Integración de sistemas y automatización'),
    summary: l(
      'Integrações com plataformas de terceiros e jobs que precisam rodar certo mesmo quando algo falha.',
      'Integrations with third-party platforms and jobs that have to run correctly even when something fails.',
      'Integraciones con plataformas de terceros y jobs que tienen que funcionar bien incluso cuando algo falla.',
    ),
    areas: [
      {
        label: l('Pagamentos e finanças', 'Payments and finance', 'Pagos y finanzas'),
        skills: ['Stripe', 'Stripe Connect', 'ACH', 'QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'Open Finance (Pluggy)', 'Wise'],
      },
      {
        label: l('Comunicação', 'Communication', 'Comunicación'),
        skills: [
          'Twilio (voice, SMS)',
          l('E-mail', 'Email', 'Email'),
          l('Notificações push', 'Push notifications', 'Notificaciones push'),
          l('Processamento de e-mails recebidos', 'Inbound email processing', 'Procesamiento de emails entrantes'),
        ],
      },
      {
        label: l('Hardware e outras APIs', 'Hardware and other APIs', 'Hardware y otras APIs'),
        skills: [
          l('Integrações de hardware', 'Hardware integrations', 'Integraciones de hardware'),
          l('APIs de terceiros', 'Third-party APIs', 'APIs de terceros'),
        ],
      },
      {
        label: l('Confiabilidade', 'Reliability', 'Confiabilidad'),
        skills: [
          l('Webhooks com validação de assinatura', 'Webhooks with signature validation', 'Webhooks con validación de firma'),
          l('Jobs agendados', 'Scheduled jobs', 'Jobs programados'),
          l('Orquestração serverless', 'Serverless orchestration', 'Orquestación serverless'),
          l('Retries e dead-letter queues', 'Retries and dead-letter queues', 'Retries y dead-letter queues'),
          l('Sincronização idempotente', 'Idempotent sync', 'Sincronización idempotente'),
          l('Replay seguro', 'Replay safety', 'Replay seguro'),
          l('Reconciliação de dados', 'Data reconciliation', 'Conciliación de datos'),
        ],
      },
    ],
  },
  {
    id: 'security',
    title: l('Segurança', 'Security', 'Seguridad'),
    summary: l(
      'Autenticação, autorização e proteção de dados pensadas desde o desenho do sistema.',
      'Authentication, authorization and data protection planned from the system design onward.',
      'Autenticación, autorización y protección de datos pensadas desde el diseño del sistema.',
    ),
    areas: [
      {
        label: l('Autenticação', 'Authentication', 'Autenticación'),
        skills: [
          'Cognito',
          'JWT',
          l('Revogação de tokens', 'Token revocation', 'Revocación de tokens'),
          l('Autenticação assinada entre serviços (IAM)', 'Signed service-to-service auth (IAM)', 'Autenticación firmada entre servicios (IAM)'),
        ],
      },
      {
        label: l('Autorização', 'Authorization', 'Autorización'),
        skills: [
          l('Controle de acesso por perfil (RBAC)', 'Role-based access control (RBAC)', 'Control de acceso por rol (RBAC)'),
          l('Prevenção de escalada de privilégio', 'Privilege escalation prevention', 'Prevención de escalada de privilegios'),
          l('Prevenção de IDOR', 'IDOR prevention', 'Prevención de IDOR'),
        ],
      },
      {
        label: l('Revisão e proteção de APIs', 'Reviews and API protection', 'Revisión y protección de APIs'),
        skills: [
          'Threat modeling',
          'OWASP',
          'AWS WAF',
          'Rate limiting',
          l('Defesa contra força bruta', 'Brute-force defense', 'Defensa contra fuerza bruta'),
        ],
      },
      {
        label: l('Dados', 'Data', 'Datos'),
        skills: [
          l('Criptografia por campo com KMS', 'Field-level encryption with KMS', 'Cifrado por campo con KMS'),
          l('Gestão de segredos', 'Secrets management', 'Gestión de secretos'),
          l('Mascaramento de dados', 'Data masking', 'Enmascaramiento de datos'),
          l('Trilhas de auditoria', 'Audit trails', 'Registros de auditoría'),
          l('Integridade sob concorrência', 'Data integrity under concurrency', 'Integridad bajo concurrencia'),
        ],
      },
    ],
  },
  {
    id: 'leadership',
    title: l('Liderança técnica e entrega', 'Technical leadership and delivery', 'Liderazgo técnico y entrega'),
    summary: l(
      'Do MVP à produção, com responsabilidade pela arquitetura, pela infraestrutura e pelo código.',
      'From MVP to production, owning the architecture, the infrastructure and the code.',
      'Del MVP a producción, con responsabilidad por la arquitectura, la infraestructura y el código.',
    ),
    areas: [
      {
        label: l('Produto e decisões', 'Product and decisions', 'Producto y decisiones'),
        skills: [
          l('Responsabilidade ponta a ponta', 'End-to-end ownership', 'Responsabilidad de punta a punta'),
          l('Do MVP à produção', 'MVP to production', 'Del MVP a producción'),
          l('Necessidade de negócio em decisão técnica', 'Business needs into technical decisions', 'Necesidades de negocio en decisiones técnicas'),
          l('Gestão de dívida técnica', 'Technical debt management', 'Gestión de deuda técnica'),
        ],
      },
      {
        label: l('Operação', 'Operations', 'Operación'),
        skills: [
          l('Monitoramento', 'Monitoring', 'Monitoreo'),
          l('Resposta a incidentes', 'Incident response', 'Respuesta a incidentes'),
          l('Confiabilidade', 'Reliability', 'Confiabilidad'),
        ],
      },
      {
        label: l('Pessoas', 'People', 'Personas'),
        skills: [
          l('Contratação de desenvolvedores', 'Hiring developers', 'Contratación de desarrolladores'),
          l('Liderança de times de até 8 pessoas', 'Leading teams of up to 8 people', 'Liderazgo de equipos de hasta 8 personas'),
          l('Ensino e mentoria (mais de 100 alunos)', 'Teaching and mentoring (100+ students)', 'Enseñanza y mentoría (más de 100 alumnos)'),
        ],
      },
      {
        label: l('Processo e ferramentas', 'Process and tools', 'Proceso y herramientas'),
        skills: ['Scrum', 'Kanban', 'Git', 'Git Flow', 'GitHub', 'Bitbucket', 'Jira', 'Linear'],
      },
    ],
  },
  {
    id: 'spoken-languages',
    title: l('Idiomas', 'Languages', 'Idiomas'),
    summary: l('Trabalho em inglês com empresas dos Estados Unidos.', 'I work in English with US companies.', 'Trabajo en inglés con empresas de Estados Unidos.'),
    areas: [
      {
        label: l('Fluência', 'Proficiency', 'Nivel'),
        skills: [
          l('Português (nativo)', 'Portuguese (native)', 'Portugués (nativo)'),
          l('Inglês (fluente)', 'English (fluent)', 'Inglés (fluido)'),
          l('Espanhol (básico)', 'Spanish (basic)', 'Español (básico)'),
        ],
      },
    ],
  },
];
