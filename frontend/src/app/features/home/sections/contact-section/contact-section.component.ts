import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SITE, ROUTES } from '@app/core/constants/site.constants';
import { AnimateOnScrollDirective } from '@app/core/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, AnimateOnScrollDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);

  readonly site = SITE;
  readonly routes = ROUTES;

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: [''],
  });

  submitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const v = this.contactForm.getRawValue();
    const subject = encodeURIComponent('Kontaktanfrage – OZ Haustechnik');
    const body = encodeURIComponent(
      [
        '--- Kontaktformular Hauptseite ---',
        '',
        'Name: ' + (v.name ?? ''),
        'E-Mail: ' + (v.email ?? ''),
        'Telefon: ' + (v.phone ?? ''),
        '',
        'Nachricht:',
        v.message ?? '',
      ].join('\n')
    );
    window.location.href = `mailto:${this.site.email}?subject=${subject}&body=${body}`;
  }
}
