import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '@app/core/directives/animate-on-scroll.directive';
import {
  GALLERY_IMAGES,
  GALLERY_PREVIEW_LIMIT,
  GOOGLE_MAPS_PHOTOS_URL,
  GalleryImage,
} from '@app/core/constants/gallery.constants';

@Component({
  selector: 'app-work-gallery',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './work-gallery.component.html',
  styleUrl: './work-gallery.component.scss',
})
export class WorkGalleryComponent implements OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() variant: 'page' | 'section' = 'section';
  @Input() title = 'Einblick in unsere Arbeit';
  @Input() description =
    'Fotos aus unserem Google-Unternehmensprofil – tippen zum Vergrößern.';

  readonly images: GalleryImage[] = GALLERY_IMAGES;
  readonly mapsUrl = GOOGLE_MAPS_PHOTOS_URL;
  readonly previewLimit = GALLERY_PREVIEW_LIMIT;

  albumOpen = false;
  lightboxIndex: number | null = null;
  streetViewUrl: SafeResourceUrl | null = null;

  private touchStartX = 0;

  get previewImages(): GalleryImage[] {
    return this.images.slice(0, this.previewLimit);
  }

  get hiddenCount(): number {
    return Math.max(0, this.images.length - this.previewLimit);
  }

  get hasMore(): boolean {
    return this.hiddenCount > 0;
  }

  get current(): GalleryImage | null {
    return this.lightboxIndex === null ? null : this.images[this.lightboxIndex];
  }

  get lightboxCounter(): string {
    if (this.lightboxIndex === null) return '';
    return `${this.lightboxIndex + 1} / ${this.images.length}`;
  }

  onPreviewClick(index: number): void {
    if (this.hasMore && index === this.previewLimit - 1) {
      this.openAlbum();
      return;
    }
    this.open(index);
  }

  openAlbum(): void {
    this.albumOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeAlbum(): void {
    if (this.lightboxIndex !== null) return;
    this.albumOpen = false;
    document.body.style.overflow = '';
  }

  open(index: number): void {
    this.lightboxIndex = index;
    this.updateStreetView();
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxIndex = null;
    this.streetViewUrl = null;
    if (!this.albumOpen) {
      document.body.style.overflow = '';
    }
  }

  close(): void {
    this.lightboxIndex = null;
    this.streetViewUrl = null;
    this.albumOpen = false;
    document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    this.close();
  }

  prev(): void {
    if (this.lightboxIndex === null) return;
    this.lightboxIndex =
      (this.lightboxIndex - 1 + this.images.length) % this.images.length;
    this.updateStreetView();
  }

  next(): void {
    if (this.lightboxIndex === null) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.images.length;
    this.updateStreetView();
  }

  onLightboxTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onLightboxTouchEnd(event: TouchEvent): void {
    const dx = event.changedTouches[0].screenX - this.touchStartX;
    if (dx > 48) this.prev();
    if (dx < -48) this.next();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightboxIndex !== null) {
      this.closeLightbox();
      return;
    }
    if (this.albumOpen) this.closeAlbum();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.lightboxIndex !== null) this.prev();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.lightboxIndex !== null) this.next();
  }

  private updateStreetView(): void {
    const img = this.current;
    this.streetViewUrl =
      img?.kind === 'streetview' && img.embedUrl
        ? this.sanitizer.bypassSecurityTrustResourceUrl(img.embedUrl)
        : null;
  }
}
