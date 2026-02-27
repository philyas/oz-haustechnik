import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE } from '../../../core/constants/site.constants';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  readonly site = SITE;
}
