import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '@app/core/directives/animate-on-scroll.directive';
import { WorkGalleryComponent } from '@app/features/gallery/work-gallery.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, WorkGalleryComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {}
