import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Home } from "lucide-react"

export default function Navbar() {

  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Rutas donde NO quieres mostrar el navbar
    const hiddenPaths = ["/LandingPage/reserve"]

    if (hiddenPaths.includes(location.pathname)) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [location.pathname])

  if (!isVisible) return null

  return (
    <header className="bg-[#5c4a3d] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />            
            <h1 className="text-xl font-bold">Mi Cabaña </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="hover:underline">
              Inicio
            </a>
            <a href="#galeria" className="hover:underline">
              Fotos
            </a>
            <a href="#servicios" className="hover:underline">
              Servicios
            </a>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </nav>
          <Button asChild size="lg" className="bg-[#e9b44c] hover:bg-[#e9a82c] text-black">
            <Link to= "/LandingPage/reserve">Reservar Ahora</Link>
          </Button>
        </div>
      </header>
  );
}