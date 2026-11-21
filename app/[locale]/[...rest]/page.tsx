import { notFound } from 'next/navigation';

// Unknown paths inside a locale must call notFound() so Next renders
// app/[locale]/not-found.tsx with the locale layout, styles and metadata.
export default function CatchAllPage() {
  notFound();
}
