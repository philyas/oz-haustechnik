import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '@app/core/models/service.model';
import { ROUTES } from '@app/core/constants/site.constants';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  readonly routes = ROUTES;
  readonly sectionTitle = 'Unsere Leistungen';
  readonly sectionSubtitle =
    'Von der Reparatur bis zur Modernisierung – wir sorgen für Ihre Heizungs- und Sanitäranlagen.';

  readonly services: ServiceItem[] = [
    {
      id: 'reparatur',
      title: 'Reparaturen & Notfall',
      description:
        'Unser Expertenteam behebt schnell und effizient alle Probleme. 24/7 Notfallreparaturen – Sie erhalten im Ernstfall schnelle Hilfe.',
      icon: 'wrench',
      imageUrl:
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
    },
    {
      id: 'wartung',
      title: 'Wartung',
      description:
        'Regelmäßige Wartung für einwandfreie Funktion. Wir prüfen Systemleistung und Effizienz Ihrer Heizungs- und Sanitärsysteme.',
      icon: 'clipboard-check',
      imageUrl: 'assets/services/wartung.jpg',
    },
    {
      id: 'modernisierung',
      title: 'Modernisierung',
      description:
        'Wärmepumpen, Gas- und Ölheizungen, Warmwasserbereiter – maßgeschneiderte Installationen für Zuhause oder Büro.',
      icon: 'home',
      imageUrl: 'assets/services/modernisierung.webp',
    },
    {
      id: 'beratung',
      title: 'Energieeffizienz & Beratung',
      description:
        'Umfassende Beratung: Energiekosten senken, Verbrauch reduzieren. Wir zeigen die besten Lösungen für Ihre Bedürfnisse.',
      icon: 'lightbulb',
      imageUrl:
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80',
    },
  ];
}
