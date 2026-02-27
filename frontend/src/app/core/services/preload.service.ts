import { Injectable, signal } from '@angular/core';

/** Wird von der Hero-Section gesetzt, sobald das Video spielbereit ist. */
@Injectable({ providedIn: 'root' })
export class PreloadService {
  private _videoReady = false;

  /** true, sobald der Preload ausgeblendet ist – App darf angezeigt werden. */
  readonly preloadDone = signal(false);

  get videoReady(): boolean {
    return this._videoReady;
  }

  setVideoReady(): void {
    this._videoReady = true;
  }

  setPreloadDone(): void {
    this.preloadDone.set(true);
  }
}
