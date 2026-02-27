import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE, ROUTES } from '@app/core/constants/site.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly siteName = SITE.name;
  readonly logoPath = SITE.logoPath;
  readonly navLinks = [
    { path: ROUTES.home, label: 'Start' },
    { path: ROUTES.about, label: 'Über uns' },
    { path: ROUTES.angebot, label: 'Angebot' },
    { path: ROUTES.contact, label: 'Kontakt' },
  ] as const;

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
