import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE } from '@app/core/constants/site.constants';

@Component({
  selector: 'app-imprint-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint-page.component.html',
  styleUrl: './imprint-page.component.scss',
})
export class ImprintPageComponent {
  readonly site = SITE;
}
