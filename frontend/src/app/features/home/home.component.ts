import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { PartnersSectionComponent } from './sections/partners-section/partners-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    PartnersSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
