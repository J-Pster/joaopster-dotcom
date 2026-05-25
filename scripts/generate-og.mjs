// Generates the social share image (public/og-image.png, 1200x630).
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const sans = "'Segoe UI', 'Inter', Arial, sans-serif";
const mono = "'JetBrains Mono', 'Cascadia Code', Consolas, monospace";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="sky" cx="50%" cy="0%" r="85%">
      <stop offset="0%" stop-color="#cfe7ff"/>
      <stop offset="38%" stop-color="#e4f1ff"/>
      <stop offset="70%" stop-color="#ffffff"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#sky)"/>

  <!-- Logo mark + wordmark -->
  <g transform="translate(90,70)">
    <rect width="58" height="58" rx="11" fill="#000000"/>
    <polyline points="18,16 40,29 18,42" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="76" y="40" font-family="${mono}" font-size="30" font-weight="700" fill="#171717" letter-spacing="-0.5">joaopster</text>
  </g>

  <!-- Name + role -->
  <text x="88" y="270" font-family="${sans}" font-size="96" font-weight="700" fill="#171717" letter-spacing="-3">João Pster</text>
  <text x="92" y="330" font-family="${sans}" font-size="33" font-weight="500" fill="#60646c" letter-spacing="-0.4">Software Engineer &amp; AI Engineer</text>

  <!-- Terminal window -->
  <g transform="translate(90,380)">
    <rect x="0" y="0" width="1020" height="200" rx="16" fill="#0d0d0d"/>
    <rect x="0" y="0" width="1020" height="48" rx="16" fill="#1a1a1a"/>
    <rect x="0" y="32" width="1020" height="16" fill="#1a1a1a"/>
    <circle cx="28" cy="24" r="7" fill="#ff5f57"/>
    <circle cx="52" cy="24" r="7" fill="#ffbd2e"/>
    <circle cx="76" cy="24" r="7" fill="#28c840"/>
    <text x="510" y="29" text-anchor="middle" font-family="${mono}" font-size="17" fill="#666666">~/joaopster · zsh</text>

    <text x="34" y="96" font-family="${mono}" font-size="22" fill="#e0e0e0"><tspan fill="#47c2ff">❯ </tspan>git clone <tspan fill="#cfe7ff">joaopster</tspan> --depth=<tspan fill="#cfe7ff">6y</tspan></text>
    <text x="34" y="135" font-family="${mono}" font-size="22" fill="#b0b4ba"><tspan fill="#28c840">✓ </tspan>frontend · backend · ai · rigor over vibes</text>
    <text x="34" y="174" font-family="${mono}" font-size="22" fill="#e0e0e0"><tspan fill="#47c2ff">❯ </tspan>uptime <tspan fill="#666666">→</tspan> up <tspan fill="#cfe7ff">11,000+ hrs</tspan> · <tspan fill="#28c840">shipping</tspan></text>
  </g>

  <text x="1110" y="612" text-anchor="end" font-family="${mono}" font-size="20" fill="#999999">joaopster.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Generated', out);
