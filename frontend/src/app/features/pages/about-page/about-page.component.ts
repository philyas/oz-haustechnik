import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface WorkImage {
  src: string;
  alt: string;
  caption?: string;
  /** Was vor Ort gemacht wird – wird in der Lightbox angezeigt. */
  description?: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  lightboxImage: WorkImage | null = null;

  openLightbox(img: WorkImage): void {
    this.lightboxImage = img;
  }

  closeLightbox(): void {
    this.lightboxImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeLightbox();
  }
  /**
   * Galerie: thematisch zu Handwerk, Sanierung, Hausbau.
   * Aktuell Platzhalter von Unsplash (lizenzfrei). Ersetzen durch eigene Fotos unter assets/about-work/.
   */
  readonly workImages: WorkImage[] = [
    {
      src: 'https://images.pexels.com/photos/6474346/pexels-photo-6474346.jpeg?auto=compress&w=800',
      alt: 'Sanierungsarbeiten im Innenausbau',
      caption: 'Sanierung',
      description:
        'Vor Ort: Rückbau alter Anlagen, Neuverlegung von Leitungen, Anschlüsse und Dämmung. Wir koordinieren uns mit dem Baufortschritt und übernehmen die fachgerechte Einbindung in die bestehende Bausubstanz.',
    },
    {
      src: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&w=800',
      alt: 'Handwerker bei Rohrleitungs- und Installationsarbeiten',
      caption: 'Installation',
      description:
        'Vor Ort: Verlegung von Rohrleitungen für Heizung und Sanitär, Anschluss von Heizkörpern und Armaturen, Dichtheitsprüfungen und Inbetriebnahme. Alles aus einer Hand bis zur Abnahme.',
    },
    {
      src: 'https://images.pexels.com/photos/14367421/pexels-photo-14367421.jpeg?auto=compress&w=800',
      alt: 'Handwerker auf der Baustelle',
      caption: 'Handwerk',
      description:
        'Vor Ort: Montage und Anschluss vor Ort – von der Heizungszentrale bis zum letzten Heizkörper, inkl. Einstellung und Abgleich. Regelmäßige Abstimmung mit Bauleitung und anderen Gewerken.',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'Neubau Wohnhaus',
      caption: 'Neubau',
      description:
        'Vor Ort: Komplette Haustechnik im Neubau – Heizung, Sanitär, ggf. Fußbodenheizung und Solartechnik. Von der Rohinstallation über den Ausbau bis zur Endabnahme und Einweisung.',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Hausbau und Haustechnik',
      caption: 'Hausbau',
      description:
        'Vor Ort: Einbau und Anschluss im laufenden Bau – koordiniert mit Ihrem Baufortschritt. Wir kümmern uns um alle Gewerke Heizung und Sanitär und sorgen für termingerechte Fertigstellung.',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      alt: 'Heizung und Technik',
      caption: 'Heizung & Technik',
      description:
        'Vor Ort: Wartung, Einstellung und Reparatur Ihrer Heizungsanlage direkt bei Ihnen. Wir prüfen Brenner, Umwälzpumpen und Hydraulik und dokumentieren die Arbeiten vor Ort.',
    },
  ];
}
