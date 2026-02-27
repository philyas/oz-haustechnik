/**
 * Site-wide constants for OZ Haustechnik
 */
export const SITE = {
  name: 'OZ Haustechnik',
  tagline: 'Ihr Partner für kompetente und zuverlässige Heizungs- und Sanitärarbeiten',
  /** Logo-Tagline: Sanitär • Heizung • Kundendienst • Photovoltaik • Regenerative */
  servicesTagline: 'Sanitär • Heizung • Kundendienst • Photovoltaik • Regenerative',
  logoPath: 'assets/logo.png',
  address: '64720 Michelstadt',
  phone: '0151-11519151',
  email: 'info@oz-haustechnik.de',
  hours: 'Mo – Sa: 08:00 - 22:00 Uhr',
  emergency: '24/7 Notfallreparaturen',
} as const;

export const ROUTES = {
  home: '',
  about: 'ueber-uns',
  contact: 'kontakt',
  imprint: 'impressum',
  privacy: 'datenschutz',
} as const;
