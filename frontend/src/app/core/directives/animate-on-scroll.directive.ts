import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';

/**
 * Fügt die Klasse 'animate-in-visible' hinzu, wenn das Element in den Viewport scrollt.
 * Kombiniert mit .animate-on-scroll in animations.scss für Fade-in/Slide-up.
 */
@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer: IntersectionObserver | null = null;

  /** Anteil (0–1) des Elements, der sichtbar sein muss, um zu triggern. Default 0.1 */
  threshold = input<number>(0.1);

  /** rootMargin z. B. "0px 0px -50px 0px" um früher zu triggern */
  rootMargin = input<string>('0px 0px -40px 0px');

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('animate-on-scroll');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      {
        threshold: this.threshold(),
        rootMargin: this.rootMargin(),
      }
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
