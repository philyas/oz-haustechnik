import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {
  Pricelist,
  PricelistService,
  PricelistParameter,
  PricelistParameterSelect,
  PricelistParameterRange,
  ParameterValues,
} from '@app/core/models/pricelist.model';
import { SITE } from '@app/core/constants/site.constants';

@Component({
  selector: 'app-quote-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quote-page.component.html',
  styleUrl: './quote-page.component.scss',
})
export class QuotePageComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);

  pricelist: Pricelist | null = null;
  step = 1;
  /** Bei Schritt 2: Index des aktuellen Parameters (0 = 2.1, 1 = 2.2, …) */
  configSubStep = 0;
  selectedService: PricelistService | null = null;
  parameterValues: ParameterValues = {};
  estimatedPrice = 0;

  readonly site = SITE;

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: [''],
  });

  ngOnInit(): void {
    this.http
      .get<Pricelist>('assets/data/pricelist.json')
      .subscribe((data) => {
        this.pricelist = data;
      });
  }

  selectService(service: PricelistService): void {
    this.selectedService = service;
    this.parameterValues = {};
    this.configSubStep = 0;
    for (const p of service.parameters) {
      if (p.type === 'range' && 'default' in p) {
        this.parameterValues[p.id] = p.default;
      }
      // Select-Parameter: keine Vorauswahl – Nutzer wählt bewusst per Kachel
    }
    if (service.parameters.length === 0) {
      this.recalcPrice();
      this.step = 3;
    } else {
      this.step = 2;
    }
  }

  /** Aktueller Parameter im Konfigurationsschritt (Schritt 2) */
  get currentParam(): PricelistParameter | null {
    if (!this.selectedService || this.step !== 2) return null;
    const params = this.selectedService.parameters;
    return params[this.configSubStep] ?? null;
  }

  /** Alle Schritte für die Anzeige: 1, 2.1, 2.2, …, 3 */
  get stepIndicatorLabels(): string[] {
    const labels: string[] = ['1'];
    if (this.selectedService) {
      const n = this.selectedService.parameters.length;
      for (let i = 0; i < n; i++) labels.push(`2.${i + 1}`);
    }
    labels.push('3');
    return labels;
  }

  /** Index des aktuellen Schritts für die Anzeige (0-basiert) */
  get currentStepIndex(): number {
    if (this.step === 1) return 0;
    if (this.step === 2) return 1 + this.configSubStep;
    return this.stepIndicatorLabels.length - 1;
  }

  /** Option für Select-Parameter per Klick wählen und direkt zum nächsten Schritt */
  selectOption(param: PricelistParameterSelect, optionValue: string): void {
    this.parameterValues[param.id] = optionValue;
    this.nextParam();
  }

  /** Zum nächsten Konfigurations-Unterschritt oder zur Übersicht */
  nextParam(): void {
    if (!this.selectedService) return;
    const params = this.selectedService.parameters;
    if (this.configSubStep < params.length - 1) {
      this.configSubStep++;
    } else {
      this.recalcPrice();
      this.step = 3;
    }
  }

  /** Zum vorherigen Konfigurations-Unterschritt oder zurück zur Leistungsauswahl */
  prevParam(): void {
    if (this.configSubStep > 0) {
      this.configSubStep--;
    } else {
      this.backToService();
    }
  }

  /** Ist für den aktuellen Select-Parameter diese Option ausgewählt? */
  isOptionSelected(param: PricelistParameterSelect, optionValue: string): boolean {
    return this.parameterValues[param.id] === optionValue;
  }

  backToService(): void {
    this.selectedService = null;
    this.parameterValues = {};
    this.step = 1;
  }

  isSelectParam(p: PricelistParameter): p is PricelistParameterSelect {
    return p.type === 'select';
  }

  isRangeParam(p: PricelistParameter): p is PricelistParameterRange {
    return p.type === 'range';
  }

  getOptionLabel(param: PricelistParameterSelect, value: string): string {
    return param.options.find((o) => o.value === value)?.label ?? value;
  }

  recalcPrice(): void {
    if (!this.selectedService) return;
    let total = this.selectedService.basePrice;
    for (const p of this.selectedService.parameters) {
      const v = this.parameterValues[p.id];
      if (p.type === 'select' && typeof v === 'string') {
        const opt = (p as PricelistParameterSelect).options.find((o) => o.value === v);
        if (opt) total += opt.priceModifier;
      } else if (p.type === 'range' && typeof v === 'number') {
        total += (p as PricelistParameterRange).pricePerUnit * v;
      }
    }
    this.estimatedPrice = Math.round(total);
  }

  goToSummary(): void {
    this.recalcPrice();
    this.step = 3;
  }

  backToParams(): void {
    this.step = 2;
    if (this.selectedService) {
      this.configSubStep = Math.max(0, this.selectedService.parameters.length - 1);
    }
  }

  getSummaryLines(): string[] {
    if (!this.selectedService) return [];
    const lines: string[] = [
      `Angebotsanfrage: ${this.selectedService.label}`,
      '',
    ];
    for (const p of this.selectedService.parameters) {
      const v = this.parameterValues[p.id];
      if (p.type === 'select' && typeof v === 'string') {
        lines.push(`${p.label}: ${this.getOptionLabel(p as PricelistParameterSelect, v)}`);
      } else if (p.type === 'range' && typeof v === 'number') {
        const pr = p as PricelistParameterRange;
        lines.push(`${p.label}: ${v} ${pr.unit ?? ''}`.trim());
      }
    }
    lines.push('', `Geschätzter Richtwert: ca. ${this.estimatedPrice} € (unverbindlich)`);
    if (this.selectedService.note) {
      lines.push('', this.selectedService.note);
    }
    return lines;
  }

  submitQuote(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const v = this.contactForm.getRawValue();
    const subject = encodeURIComponent(`Angebotsanfrage: ${this.selectedService?.label ?? 'Angebot'}`);
    const body = encodeURIComponent(
      [
        '--- Anfrage über Angebots-Konfigurator ---',
        '',
        'Kontakt:',
        `Name: ${v.name ?? ''}`,
        `E-Mail: ${v.email ?? ''}`,
        `Telefon: ${v.phone ?? ''}`,
        '',
        'Nachricht:',
        v.message ?? '',
        '',
        '--- Konfiguration ---',
        ...this.getSummaryLines(),
      ].join('\n')
    );
    window.location.href = `mailto:${this.site.email}?subject=${subject}&body=${body}`;
  }
}
