import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE } from '@app/core/constants/site.constants';
import { AnimateOnScrollDirective } from '@app/core/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  readonly site = SITE;
}
