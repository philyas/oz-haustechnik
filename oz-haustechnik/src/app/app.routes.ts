import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'ueber-uns',
    loadComponent: () =>
      import('./features/pages/about-page/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./features/pages/contact-page/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: 'angebot',
    loadComponent: () =>
      import('./features/pages/quote-page/quote-page.component').then(
        (m) => m.QuotePageComponent
      ),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./features/pages/imprint-page/imprint-page.component').then(
        (m) => m.ImprintPageComponent
      ),
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./features/pages/privacy-page/privacy-page.component').then(
        (m) => m.PrivacyPageComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
