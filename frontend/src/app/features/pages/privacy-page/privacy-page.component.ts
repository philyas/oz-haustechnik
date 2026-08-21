import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE } from '@app/core/constants/site.constants';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.scss',
})
export class PrivacyPageComponent {
  readonly site = SITE;
}
