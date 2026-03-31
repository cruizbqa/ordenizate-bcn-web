import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-sand-50 py-20">
      <Container className="text-center flex flex-col items-center">
        <h1 className="text-9xl font-bold text-sage-600 font-serif mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-charcoal-900 font-serif mb-6">Página no encontrada</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe, ha sido movida o la URL no es correcta.
        </p>
        <Button href="/" variant="primary" size="lg">
          Volver al inicio
        </Button>
      </Container>
    </div>
  );
}
