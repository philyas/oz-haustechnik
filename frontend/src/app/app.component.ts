import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { SITE_BASE_URL } from './core/constants/site.constants';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    const setSeo = (seo: { title: string; description: string } | null): void => {
      if (!seo) return;
      this.title.setTitle(seo.title);
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ property: 'og:title', content: seo.title });
      this.meta.updateTag({ property: 'og:description', content: seo.description });
      const canonicalUrl = SITE_BASE_URL + this.router.url.split('?')[0];
      this.meta.updateTag({ rel: 'canonical', href: canonicalUrl });
      this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    };

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map(() => this.getSeoFromRoute())
      )
      .subscribe(setSeo);

    setSeo(this.getSeoFromRoute());
  }

  private getSeoFromRoute(): { title: string; description: string } | null {
    let route = this.router.routerState.root;
    while (route.firstChild) route = route.firstChild;
    return route.snapshot.data['seo'] ?? null;
  }
}
