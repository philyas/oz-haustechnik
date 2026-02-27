import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE } from '../../../../core/constants/site.constants';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly tagline = SITE.tagline;
  readonly heroVideoUrl = 'assets/hero-video.mp4';
}
