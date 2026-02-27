import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SITE } from '@app/core/constants/site.constants';
import { PreloadService } from '@app/core/services/preload.service';

const MIN_DISPLAY_MS = 3000;
const MAX_WAIT_MS = 6000;

@Component({
  selector: 'app-preload',
  standalone: true,
  templateUrl: './preload.component.html',
  styleUrl: './preload.component.scss',
})
export class PreloadComponent implements OnInit {
  private preload = inject(PreloadService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  hidden = false;
  readonly logoPath = SITE.logoPath;
  readonly tagline = SITE.tagline;

  ngOnInit(): void {
    const start = Date.now();
    const isHome =
      this.router.url === '' ||
      this.router.url === '/' ||
      this.router.url.startsWith('/?');

    const check = (): void => {
      if (this.hidden) return;
      const elapsed = Date.now() - start;
      const minElapsed = elapsed >= MIN_DISPLAY_MS;
      const videoReady = this.preload.videoReady;
      const maxElapsed = elapsed >= MAX_WAIT_MS;

      const shouldHide =
        minElapsed && (videoReady || !isHome || maxElapsed);

      if (shouldHide) {
        this.hidden = true;
        this.preload.setPreloadDone();
        this.cdr.detectChanges();
        return;
      }
      requestAnimationFrame(check);
    };

    setTimeout(() => check(), MIN_DISPLAY_MS);
  }
}
