import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE, ROUTES } from '@app/core/constants/site.constants';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideoRef?: ElementRef<HTMLVideoElement>;

  readonly tagline = SITE.tagline;
  readonly routes = ROUTES;
  readonly heroVideoUrl = 'assets/hero-video.mp4';

  ngAfterViewInit(): void {
    const video = this.heroVideoRef?.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }
}
