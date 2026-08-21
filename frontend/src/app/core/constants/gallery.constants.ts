/** Einziges Foto aus dem Google-Unternehmensprofil von OZ Haustechnik. */
const GOOGLE_COVER_BASE =
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnSBDeAgzCUzPrSgS3IKmyGdEeesUh5HX8LLdc3JlQt9kbPksCuuwrbvkfBaDDXdaoiVWIIzk_UKP51-Mb_W4Vd_bZypcw_hqHjVJgp-D_bwXz64caUyt79dZJd7SpHI4NG9UiM';

export interface GalleryImage {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  caption: string;
  description: string;
  kind?: 'photo' | 'streetview';
  embedUrl?: string;
}

export const GOOGLE_MAPS_PHOTOS_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJ679SM4yht0kRxmjFrtSAGMI';

/** Wie viele Kacheln im kompakten Überblick sichtbar sind. */
export const GALLERY_PREVIEW_LIMIT = 4;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'google-heizung',
    src: `${GOOGLE_COVER_BASE}=w800-h600-c-k-no`,
    fullSrc: `${GOOGLE_COVER_BASE}=s1600-k-no`,
    alt: 'Heizungsanlage – Foto aus dem Google-Profil von OZ Haustechnik',
    caption: 'Heizungstechnik',
    description:
      'Einblick in unsere Arbeit – Foto aus unserem Google-Unternehmensprofil.',
  },
];
