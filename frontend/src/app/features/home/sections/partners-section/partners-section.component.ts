import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PartnerItem {
  id: string;
  name: string;
  logoUrl?: string;
}

@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-section.component.html',
  styleUrl: './partners-section.component.scss',
})
export class PartnersSectionComponent {
  readonly sectionTitle = 'Unsere Partner';
  readonly partners: PartnerItem[] = [
    { id: '1', name: 'Viessmann', logoUrl: 'assets/partners/logo-1.png' },
    { id: '2', name: 'Vaillant', logoUrl: 'assets/partners/logo-2.png' },
    { id: '3', name: 'Buderus', logoUrl: 'assets/partners/logo-3.png' },
    { id: '4', name: 'Grohe', logoUrl: 'assets/partners/logo-4.png' },
    { id: '5', name: 'Siemens', logoUrl: 'assets/partners/logo-5.png' },
    { id: '6', name: 'Bosch', logoUrl: 'assets/partners/logo-6.png' },
  ];
}
