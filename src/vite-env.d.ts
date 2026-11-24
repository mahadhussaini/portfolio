/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional JSON endpoint for the contact form (e.g. https://formspree.io/f/xxxx). */
  readonly VITE_CONTACT_ENDPOINT?: string;
}
