import { MapPin, MessageSquare, Phone, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Features(){
    return (
        <section className="py-16 bg-[#f8f5f0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestra cabaña?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#5c4a3d] p-3 rounded-full mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ubicación Privilegiada</h3>
                    <p className="text-muted-foreground">
                      Rodeada de naturaleza pero con fácil acceso a servicios esenciales.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#5c4a3d] p-3 rounded-full mb-4">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L2 22h20L12 2zm0 19L5 9h14L12 19zm-1-14l-5 8h10l-5-8zm1 4l2 2h-4l2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Comodidad Total</h3>
                    <p className="text-muted-foreground">Equipada con todo lo necesario para una estancia perfecta.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#5c4a3d] p-3 rounded-full mb-4">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Experiencia Única</h3>
                    <p className="text-muted-foreground">Desconexión, tranquilidad y contacto con la naturaleza.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    )
}