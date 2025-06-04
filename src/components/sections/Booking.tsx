import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";


export default function Booking(){
  // const router= useRoutes();
    return (
        <section className="py-16 bg-[#5c4a3d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para disfrutar de la naturaleza?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserva ahora y disfruta de una experiencia única en nuestra cabaña rural. Proceso de reserva automatizado y sencillo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#e9b44c] hover:bg-[#e9a82c] text-black">
              <Link to= "/reserve">Reservar Ahora</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <a href="#contacto">Contactar</a>
            </Button>
          </div>
        </div>
      </section>
    )
}



      