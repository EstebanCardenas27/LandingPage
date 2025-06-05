import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'

export default function Hero(){
    return (
        <section id="hero" className="relative h-[500px] bg-[length:100%_100%] bg-no-repeat"
        style={{ backgroundImage: "url('/LandingPage/assets/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Escapa a la naturaleza</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">
            Disfruta de la tranquilidad y belleza del campo en nuestra acogedora cabaña.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-[#e9b44c] hover:bg-[#e9a82c] text-black">
              <Link to= "/LandingPage/reserve">Reservar Ahora</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <a href="#galeria">Ver Fotos</a>
            </Button>
          </div>
        </div>
      </section>

    )
}