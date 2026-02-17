import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check, Star, Home, Sparkles, Clock, Truck } from "lucide-react";

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
                Llevamos calma a tu hogar.{" "}
                <Link href="/sobre-mi" className="whitespace-nowrap font-semibold text-sage-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Conócenos <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-6xl font-serif">
              Transforma tu espacio, <span className="text-sage-600">transforma tu vida.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Servicio de organización profesional en Barcelona. Creamos sistemas de orden sostenibles que te devuelven tiempo y paz mental.
              Especialistas en mudanzas y organización del hogar.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/contacto" size="lg">Contacto</Button>
              <Button href={SITE_CONFIG.contact.whatsapp.getLink()} variant="ghost" size="lg" className="group">
                WhatsApp <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
          {/* Hero Image Placeholder */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full lg:opacity-90">
            <div className="relative w-full h-[500px] lg:h-full bg-sand-200 overflow-hidden">
              <NextImage
                src="/images/hero-home-2.jpg"
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Espacios organizados en</span>
              <span className="text-4xl font-serif font-bold text-sage-500">Barcelona</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">y Alrededores</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl font-serif">Nuestros Servicios</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ofrecemos soluciones personalizadas para cada etapa de tu vida. Desde una mudanza sin estrés hasta la optimización de tu armario.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Service 1 */}
            <div className="flex flex-col rounded-3xl bg-sand-50 p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif">MUDANZAS (PRE + POST)</h3>
                <Truck className="h-6 w-6 text-brand-yellow" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">Sin Caos</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Gestionamos tu mudanza de principio a fin. Clasificamos, embalamos y organizamos tu nuevo hogar para que te sientas en casa desde el primer día.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Planificación logística</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Descarte consciente</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Colocación estratégica en destino</li>
              </ul>
              <Button href="/servicios#mudanzas" variant="outline" className="mt-8 w-full">Más información</Button>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-charcoal-900 font-serif">ORGANIZACIÓN DE HOGAR</h3>
                <Home className="h-6 w-6 text-brand-purple" />
              </div>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">Armonía</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Optimizamos cualquier estancia: cocinas, armarios, trasteros o baños. Creamos sistemas que se adaptan a tu rutina.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10 mb-auto">
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Cambio de armario de temporada</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Orden en cocinas y despensas</li>
                <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-sage-600" /> Habitaciones infantiles</li>
              </ul>
              <Button href="/servicios#hogar" variant="primary" className="mt-8 w-full">Ver detalles</Button>
            </div>
          </div>
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
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl font-serif">Cómo Trabajamos</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Un proceso sencillo y transparente en 4 pasos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "1. Llamada Gratuita", desc: "Hablamos 15 minutos para entender tus necesidades.", icon: <Clock /> },
              { title: "2. Plan Personalizado", desc: "Recibes una propuesta a medida sin compromiso.", icon: <ShowcaseIcon /> },
              { title: "3. Sesión de Orden", desc: "Trabajamos mano a mano (o lo hago por ti).", icon: <Sparkles /> },
              { title: "4. Mantenimiento", desc: "Sistemas fáciles de mantener en el tiempo.", icon: <Check /> }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-sand-50 rounded-2xl">
                <div className={`mb-4 p-3 bg-white rounded-full shadow-sm ${idx === 0 ? 'text-sage-600' : idx === 1 ? 'text-brand-yellow' : idx === 2 ? 'text-brand-purple' : 'text-brand-pink'}`}>
                  {step.icon}
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-sage-50/50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 font-serif text-charcoal-900">Lo que dicen mis clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-sand-100">
                <div className="flex gap-1 text-amber-400 mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;Contratar a Ordenízate Bcn fue la mejor inversión. Mi mudanza fue increíblemente tranquila y ahora mi casa respira paz.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-sm">María G.</p>
                    <p className="text-xs text-gray-500">Sant Cugat del Vallès</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
      <Section className="bg-sage-600 text-white text-center">
        <Container className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">¿Listo para recuperar tu espacio?</h2>
          <p className="text-sage-100 text-lg mb-10">
            No dejes que el desorden controle tu vida. Da el primer paso hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="secondary" size="lg">Reservar Sesión</Button>
            <Button href={SITE_CONFIG.contact.whatsapp.getLink()} variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white" size="lg">Contactar por WhatsApp</Button>
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
