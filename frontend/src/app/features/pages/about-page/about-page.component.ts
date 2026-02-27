import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface WorkImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  /**
   * Galerie: thematisch zu Handwerk, Sanierung, Hausbau.
   * Aktuell Platzhalter von Unsplash (lizenzfrei). Ersetzen durch eigene Fotos unter assets/about-work/.
   */
  readonly workImages: WorkImage[] = [
    {
      src: 'https://images.pexels.com/photos/6474346/pexels-photo-6474346.jpeg?auto=compress&w=800',
      alt: 'Sanierungsarbeiten im Innenausbau',
      caption: 'Sanierung',
    },
    {
      src: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&w=800',
      alt: 'Handwerker bei Rohrleitungs- und Installationsarbeiten',
      caption: 'Installation',
    },
    {
      src: 'https://images.pexels.com/photos/14367421/pexels-photo-14367421.jpeg?auto=compress&w=800',
      alt: 'Handwerker auf der Baustelle',
      caption: 'Handwerk',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'Neubau Wohnhaus',
      caption: 'Neubau',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Hausbau und Haustechnik',
      caption: 'Hausbau',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      alt: 'Heizung und Technik',
      caption: 'Heizung & Technik',
    },
  ];
}
