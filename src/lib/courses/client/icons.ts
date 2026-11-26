// Inline SVG icons of the study features (quiz, exam, mistakes, review). Stroke icons in currentColor.
const svg = (paths: string, size = 16, stroke = 2) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const ICON = {
  check: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 16, 2.4),
  cross: svg('<path d="M7 7l10 10M17 7L7 17"/>', 16, 2.4),
  retry: svg('<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>', 15),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', 18),
  grid: svg('<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>', 16),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', 15),
  trophy: svg('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>', 22),
  target: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', 22),
  inbox: svg('<path d="M4 13l2.5-7h11L20 13v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5z"/><path d="M4 13h5l1 2h4l1-2h5"/>', 22),
  cards: svg('<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>', 22),
} as const;
