import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE, ROUTES } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  readonly site = SITE;
  readonly routes = ROUTES;
}
