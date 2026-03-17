import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServicesSlider } from "@/components/ui/ServicesSlider";
import { Check, Home, Sparkles, Clock, Truck, Shirt, ChefHat, ToyBrick, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: 'Organizadora Profesional | Ordenízate',
  description: 'Servicio de organización profesional. Mudanzas, armarios, cocinas, hogar y consultoría online. Sistemas de orden que te devuelven tiempo y paz mental.',
  openGraph: {
    title: 'Ordenízate | Organización Profesional',
    description: 'Transforma tu espacio, transforma tu vida.',
    url: 'https://ordenizate.es',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordenízate Bcn | Organización Profesional en Barcelona',
    description: 'Transforma tu espacio, transforma tu vida.',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-sand-50">
        <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sage-600/10 ring-1 ring-sage-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
        <Container className="pt-24 pb-16 sm:pb-32 lg:pb-40 lg:pt-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="hidden sm:mb-10 sm:flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-sage-500/20">
                Organización profesional · Servicio presencial y online {" "}
                <Link href="/sobre-mi" className="whitespace-nowrap font-semibold text-sage-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Conóceme <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-6xl font-serif">
              Orden real para casas reales.
            </h1>
            <p className="mt-6 text-xl font-medium text-charcoal-800 font-serif">
              Un buen sistema no se nota, funciona.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Creamos sistemas de organización prácticos, adaptados a la realidad de cada espacio y diseñados para mantenerse en el tiempo.<br className="hidden sm:block" />
              Trabajamos de forma presencial y también online.<br /><br />
              Con base en Barcelona y disponible para proyectos en toda España según disponibilidad.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Button href="/contacto" size="lg" variant="primary">
                Contacto
              </Button>
              <Button href={SITE_CONFIG.contact.whatsapp.getLink()} variant="outline" size="lg">
                WhatsApp
              </Button>
            </div>
          </div>
          {/* Hero Image Placeholder */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full lg:opacity-90">
            <div className="relative w-full h-[500px] lg:h-full bg-sand-200 overflow-hidden">
              <NextImage
                src={`${SITE_CONFIG.basePath}/images/hero-home-2.jpg`}
                alt="Espacio Luminoso y Ordenado"
                fill
                className="object-cover"
                priority
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
              Espacios organizados en <span className="text-sage-600 font-bold">Barcelona</span> y alrededores
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl font-serif">Nuestros Servicios</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubre el servicio que mejor se adapta a tu necesidad actual.
            </p>
          </div>
          <ServicesSlider>
            {/* Service 1: MUDANZAS */}
            <div className="flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-sand-50 p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 border-brand-yellow">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">MUDANZAS (PRE + POST)</h3>
                <Truck className="h-6 w-6 text-brand-yellow" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">CONTROL</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                La mudanza implica decisiones, tiempos y desgaste. Estructuramos cada etapa para que el proceso sea claro, acompañado y sostenible.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Planificación y coordinación del traslado</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Embalaje cuidado y preparación</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Organización y puesta a punto del hogar</li>
              </ul>
              <Button href="/servicios#mudanzas" variant="outline" className="mt-8 w-full">Más información</Button>
            </div>

            {/* Service 2: ARMARIOS */}
            <div className="flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 border-brand-purple">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">ARMARIOS Y VESTIDORES</h3>
                <Shirt className="h-6 w-6 text-brand-purple" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">FUNCIONALIDAD</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Diseñamos sistemas de organización personalizados que optimizan el espacio, aportan claridad visual y hacen que cada prenda esté accesible.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Descarte consciente acompañado</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Optimización del espacio</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Sistemas funcionales adaptados</li>
              </ul>
              <Button href="/servicios#armarios" variant="primary" className="mt-8 w-full">Más información</Button>
            </div>

            {/* Service 3: INFANTIL */}
            <div className="flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-sand-50 p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 border-brand-pink">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">INFANTIL</h3>
                <ToyBrick className="h-6 w-6 text-brand-pink" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">CUIDADO</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Preparación y adaptación de espacios infantiles para acompañar cada etapa, reduciendo la carga mental familiar y facilitando la rutina diaria.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Preparación del espacio para la llegada del bebé</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Organización evolutiva según el crecimiento</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Sistemas que fomentan autonomía y orden</li>
              </ul>
              <Button href="/servicios#infantil" variant="outline" className="mt-8 w-full">Más información</Button>
            </div>

            {/* Service 4: COCINAS */}
            <div className="flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-sand-50 p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 border-sage-500">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">COCINAS Y DESPENSAS</h3>
                <ChefHat className="h-6 w-6 text-sage-600" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">CRITERIO</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Organizamos cocina y despensa con criterio y coherencia, creando una estructura clara que facilita el día a día y aporta sensación de orden.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Categorización clara de alimentos</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Unificación de formatos adecuados</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Distribución funcional según uso</li>
              </ul>
              <Button href="/servicios#cocinas" variant="outline" className="mt-8 w-full">Más información</Button>
            </div>

            {/* Service 5: ESTANCIAS */}
            <div className="flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 border-brand-yellow">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">ESTANCIAS</h3>
                <Home className="h-6 w-6 text-brand-yellow" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">ARMONÍA</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Organización de espacios que generan ruido visual, creando estructuras claras que devuelven equilibrio y funcionalidad al hogar.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Baños y zonas de lavado</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Despachos</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Trasteros y almacenaje profundo</li>
              </ul>
              <Button href="/servicios#hogar" variant="primary" className="mt-8 w-full">Más información</Button>
            </div>

            {/* Service 6: ASESORÍA ONLINE */}
            <div className="flex-none w-[85vw] sm:w-[400px] snap-center flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg border-t-4 border-sage-400">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif uppercase">ASESORÍA ONLINE</h3>
                <Monitor className="h-6 w-6 text-sage-600" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">A TU RITMO</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Organización profesional a distancia, clara y estructurada, para quienes desean avanzar con autonomía pero con dirección experta.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Videollamada de diagnóstico</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Plan personalizado</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Seguimiento del proceso</li>
              </ul>
              <Button href="/servicios#online" variant="primary" className="mt-8 w-full">Reservar Asesoría</Button>
            </div>
          </ServicesSlider>
        </Container>
      </Section >

      {/* Before / After Placeholder */}
      {/*
      < Section className="bg-charcoal-900 text-sand-50" spacing="lg" >
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">Resultados Reales</h2>
            <p className="mt-4 text-gray-400">Desliza para ver la transformación.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                <span className="text-gray-500">[Antes: Armario Desordenado]</span>
              </div>
              <p className="text-center font-medium text-gray-400">Antes</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-sage-900/30 rounded-lg flex items-center justify-center border border-sage-800">
                <span className="text-sage-200">[Después: Armario Organizado]</span>
              </div>
              <p className="text-center font-medium text-sage-300">Después</p>
            </div>
          </div>
        </Container>
      </Section >
      */}

      {/* How it Works */}
      <Section className="bg-sand-50/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl font-serif">Cómo trabajamos</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Cada proyecto es diferente, por eso trabajamos con un proceso flexible, estructurado y 100% personalizado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "1. Contacto", desc: "Hablamos para entender tus necesidades.", icon: <Clock /> },
              { title: "2. Plan personalizado", desc: "Recibes una propuesta a medida sin compromiso.", icon: <ShowcaseIcon /> },
              { title: "3. Sesión de organización", desc: "Aplicamos el sistema definido y organizamos el espacio", icon: <Sparkles /> },
              { title: "4. Seguimiento", desc: "Resolvemos posibles dudas y te acompañamos en la aplicación del sistema.", icon: <Check /> }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50">
                <div className={`mb-4 p-3 bg-sand-50 rounded-full ${idx === 0 ? 'text-sage-600' : idx === 1 ? 'text-brand-yellow' : idx === 2 ? 'text-brand-purple' : 'text-brand-pink'}`}>
                  {step.icon}
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials — pending real client quotes */}
      {/*
      <Section className="bg-sage-50/50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 font-serif text-charcoal-900">Lo que dicen mis clientes</h2>
          Add real testimonials here when available.
        </Container>
      </Section>
      */}

      {/* FAQ *
      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif text-charcoal-900">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto cuesta el servicio?", a: "Cada proyecto es único. Ofrecemos presupuestos personalizados tras la primera llamada gratuita." },
              { q: "¿Tengo que estar presente?", a: "Depende de ti. En la fase de descarte es recomendable, pero en la organización puedo trabajar sola." },
              { q: "¿Trabajas los fines de semana?", a: "Sí, previa reserva y con un pequeño suplemento." },
              { q: "¿Qué pasa con lo que ya no quiero?", a: "Te ayudo a gestionarlo: donación, reciclaje o venta. Tú decides." },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-sand-200 pb-4">
                <h3 className="font-semibold text-lg text-charcoal-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      */}

      {/* Final CTA */}
      <Section className="bg-charcoal-900 text-white text-center" spacing="lg">
        <Container className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">¿Hablamos?</h2>
          <p className="text-sand-300 text-lg mb-10">
            Ordenízate: orden profesional adaptado a la realidad de cada hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="secondary" size="lg">Reservar Sesión</Button>
            <Button href={SITE_CONFIG.contact.whatsapp.getLink()} variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white" size="lg">Contactar por WhatsApp</Button>
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
