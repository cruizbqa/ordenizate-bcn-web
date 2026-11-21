import type { Metadata } from 'next';
import { Fragment } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import NextImage from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ServicesSlider } from '@/components/ui/ServicesSlider';
import { Check, Home, Sparkles, Clock, Truck, Shirt, ChefHat, ToyBrick, Monitor } from 'lucide-react';
import { getContent } from '@/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const home = getContent(locale).home;
  return {
    title: home.meta.title,
    description: home.meta.description,
    alternates: { canonical: home.meta.canonical },
    openGraph: {
      title: home.meta.ogTitle,
      description: home.meta.ogDescription,
      url: 'https://ordenizate.es',
      siteName: 'Ordenízate',
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: '/images/hero-home-2.jpg',
          width: 1200,
          height: 1800,
          alt: home.meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: home.meta.twitterTitle,
      description: home.meta.ogDescription,
      images: ['/images/hero-home-2.jpg'],
    },
  };
}

const serviceVisuals = {
  '/servicios/mudanzas': { icon: Truck, border: 'border-brand-yellow', iconColor: 'text-brand-yellow', variant: 'outline' },
  '/servicios/armarios': { icon: Shirt, border: 'border-brand-purple', iconColor: 'text-brand-purple', variant: 'primary' },
  '/servicios/infantil': { icon: ToyBrick, border: 'border-brand-pink', iconColor: 'text-brand-pink', variant: 'outline' },
  '/servicios/cocinas': { icon: ChefHat, border: 'border-sage-500', iconColor: 'text-sage-600', variant: 'primary' },
  '/servicios/estancias': { icon: Home, border: 'border-brand-yellow', iconColor: 'text-brand-yellow', variant: 'outline' },
  '/servicios/online': { icon: Monitor, border: 'border-sage-400', iconColor: 'text-sage-600', variant: 'primary' },
} as const;

const processIcons = [<Clock key="clock" />, <ShowcaseIcon key="showcase" />, <Sparkles key="sparkles" />, <Check key="check" />];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const home = getContent(locale).home;

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-sand-50">
        <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sage-600/10 ring-1 ring-sage-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
        <Container className="pt-24 pb-16 sm:pb-32 lg:pb-40 lg:pt-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="mb-8 flex sm:mb-10">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-sage-500/20">
                {home.hero.badge} {' '}
                <Link href="/sobre-mi" className="whitespace-nowrap font-semibold text-sage-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {home.hero.badgeCta} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-6xl font-serif">
              {home.hero.h1.text} <span className="text-sage-600">{home.hero.h1.accent}</span>
            </h1>
            <h2 className="mt-6 text-xl font-medium text-charcoal-800 font-serif">
              {home.hero.h2}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {home.hero.intro.map((part, idx) => (
                <Fragment key={idx}>
                  {'br' in part ? (
                    <br className={part.br === 'sm' ? 'hidden sm:block' : undefined} />
                  ) : 'link' in part ? (
                    <Link href={part.link} className="text-sage-600 hover:text-sage-700 underline underline-offset-2 font-medium">
                      {part.label}
                    </Link>
                  ) : (
                    part.text
                  )}
                </Fragment>
              ))}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Button href="/contacto" size="lg" variant="primary">
                {home.hero.ctaPrimary}
              </Button>
              <Button href={SITE_CONFIG.contact.whatsapp.getLink()} variant="outline" size="lg">
                {home.hero.ctaWhatsapp}
              </Button>
            </div>
          </div>
          {/* Hero Image Placeholder */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full lg:opacity-90">
            <div className="relative w-full h-[500px] lg:h-full bg-sand-200 overflow-hidden">
              <NextImage
                src={`${SITE_CONFIG.basePath}/images/hero-home-2.jpg`}
                alt={home.hero.imageAlt}
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Trust Indicators */}
      <Section className="bg-white border-y border-sand-100" spacing="sm">
        <Container>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              {home.trust.before} <span className="text-sage-600 font-bold">{home.trust.place}</span> {home.trust.after}
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl font-serif">{home.services.heading}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {home.services.intro}
            </p>
          </div>
          <ServicesSlider>
            {home.services.items.map((service) => {
              const visual = serviceVisuals[service.href];
              const Icon = visual.icon;
              return (
                <div key={service.href} className={`flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 ${visual.border}`}>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">{service.title}</h3>
                    <Icon className={`h-6 w-6 ${visual.iconColor}`} />
                  </div>
                  <p className="mt-4 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{service.keyword}</span>
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> {bullet}</li>
                    ))}
                  </ul>
                  <Button href={service.href} variant={visual.variant} className="mt-8 w-full">
                    {service.cta ?? home.services.cta}
                  </Button>
                </div>
              );
            })}
          </ServicesSlider>
        </Container>
      </Section >

      {/* How it Works */}
      <Section className="bg-sand-50/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl font-serif">{home.process.heading}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">{home.process.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {home.process.steps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50">
                <div className={`mb-4 p-3 bg-sand-50 rounded-full ${idx === 0 ? 'text-sage-600' : idx === 1 ? 'text-brand-yellow' : idx === 2 ? 'text-brand-purple' : 'text-brand-pink'}`}>
                  {processIcons[idx]}
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-charcoal-900 text-white text-center" spacing="lg">
        <Container className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">{home.finalCta.heading}</h2>
          <p className="text-gray-600 text-lg mb-10">
            {home.finalCta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="secondary" size="lg">{home.finalCta.primary}</Button>
            <Button href={SITE_CONFIG.contact.whatsapp.getLink()} variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white" size="lg">{home.finalCta.whatsapp}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ShowcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
