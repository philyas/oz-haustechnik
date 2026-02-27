import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '@app/core/directives/animate-on-scroll.directive';

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent {
  readonly sectionTitle = 'Das sagen unsere Kunden';
  readonly sectionSubtitle =
    'Vertrauen und Zufriedenheit stehen bei uns an erster Stelle.';

  readonly testimonials: TestimonialItem[] = [
    {
      id: '1',
      quote:
        'Sehr kompetente Beratung und schnelle Umsetzung. Die Heizung läuft wieder einwandfrei. Gerne wieder!',
      author: 'Familie M.',
      role: 'Michelstadt',
    },
    {
      id: '2',
      quote:
        'Notfall am Sonntag – innerhalb von zwei Stunden war jemand vor Ort. Professionell und fair im Preis.',
      author: 'Thomas K.',
      role: 'Odenwald',
    },
    {
      id: '3',
      quote:
        'Von der Planung bis zur Installation der neuen Wärmepumpe alles aus einer Hand. Wir sind rundum zufrieden.',
      author: 'Sabine und Peter L.',
      role: 'Erbach',
    },
  ];
}
