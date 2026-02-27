import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  readonly routes = ROUTES;
  readonly aboutImageUrl = 'assets/about-image.jpg';
}
