/**
 * Site-wide constants for OZ Haustechnik
 */
/** Production URL – für Canonical, Open Graph, Sitemap (ohne trailing slash) */
export const SITE_BASE_URL = 'https://www.oz-haustechnik.de';

export const SITE = {
  name: 'OZ Haustechnik',
  baseUrl: SITE_BASE_URL,
  tagline: 'Ihr Partner für kompetente und zuverlässige Heizungs- und Sanitärarbeiten',
  /** Logo-Tagline: Sanitär • Heizung • Klima • Kundendienst • Regenerative Energie */
  servicesTagline: 'Sanitär • Heizung • Klima • Kundendienst • Regenerative Energie',
  logoPath: 'assets/logo.png',
  owner: 'Ömer Özcicek',
  legalName: 'OZ-Haustechnik',
  legalForm: 'Einzelunternehmen',
  street: 'Im Krähennest 3',
  address: 'Im Krähennest 3, 64720 Michelstadt',
  city: '64720 Michelstadt',
  country: 'Deutschland',
  vatId: 'DE332144095',
  phone: '0151 11519151',
  email: 'info@oz-haustechnik.de',
  hours: 'Mo – Sa: 08:00 - 22:00 Uhr',
  emergency: '24/7 Notfallreparaturen',
} as const;

export const ROUTES = {
  home: '',
  about: 'ueber-uns',
  contact: 'kontakt',
  angebot: 'angebot',
  imprint: 'impressum',
  privacy: 'datenschutz',
} as const;
