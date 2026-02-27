import { Routes } from '@angular/router';

/** SEO-Daten pro Route – Titel & Beschreibung für Suchmaschinen */
export const routeSeo = {
  home: {
    title: 'OZ Haustechnik – Heizung & Sanitär | Michelstadt',
    description:
      'Ihr Partner für Heizungs- und Sanitärarbeiten: Reparaturen, Wartung, Modernisierung. 24/7 Notfallservice. OZ Haustechnik in Michelstadt.',
  },
  about: {
    title: 'Über uns | OZ Haustechnik Michelstadt',
    description:
      'Lernen Sie OZ Haustechnik kennen: Ihr zuverlässiger Partner für Heizung und Sanitär in Michelstadt und Umgebung.',
  },
  contact: {
    title: 'Kontakt | OZ Haustechnik – Heizung & Sanitär',
    description:
      'Kontaktieren Sie OZ Haustechnik in Michelstadt. Heizung, Sanitär, Notdienst – wir sind für Sie da.',
  },
  quote: {
    title: 'Angebot anfragen | OZ Haustechnik',
    description:
      'Unverbindliches Angebot für Heizungs- und Sanitärarbeiten in Michelstadt. Jetzt anfragen.',
  },
  imprint: {
    title: 'Impressum | OZ Haustechnik',
    description: 'Impressum und rechtliche Angaben zu OZ Haustechnik, Michelstadt.',
  },
  privacy: {
    title: 'Datenschutz | OZ Haustechnik',
    description: 'Datenschutzerklärung von OZ Haustechnik.',
  },
} as const;

export const routes: Routes = [
  {
    path: '',
    data: { seo: routeSeo.home },
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'ueber-uns',
    data: { seo: routeSeo.about },
    loadComponent: () =>
      import('./features/pages/about-page/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'kontakt',
    data: { seo: routeSeo.contact },
    loadComponent: () =>
      import('./features/pages/contact-page/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: 'angebot',
    data: { seo: routeSeo.quote },
    loadComponent: () =>
      import('./features/pages/quote-page/quote-page.component').then(
        (m) => m.QuotePageComponent
      ),
  },
  {
    path: 'impressum',
    data: { seo: routeSeo.imprint },
    loadComponent: () =>
      import('./features/pages/imprint-page/imprint-page.component').then(
        (m) => m.ImprintPageComponent
      ),
  },
  {
    path: 'datenschutz',
    data: { seo: routeSeo.privacy },
    loadComponent: () =>
      import('./features/pages/privacy-page/privacy-page.component').then(
        (m) => m.PrivacyPageComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
