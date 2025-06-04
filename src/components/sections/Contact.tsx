import { MapPin, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (         
      <section id="contacto" className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#5c4a3d]">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Información + mapa */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6 space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-[#5c4a3d]" />
                  <p>Camino Rural s/n, Región Campestre</p>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-5 w-5 text-[#5c4a3d]" />
                  <p>info@micabanarural.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#5c4a3d]" />
                  <p>+56 9 1234 5678</p>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-[#e2ddd5] flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192.50559237436246!2d-73.10604582430103!3d-39.4673072430165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96159f5144f3d023%3A0x1aa4f1038126eda4!2sLos%20Venados%2C%20Mariquina%2C%20Los%20R%C3%ADos!5e0!3m2!1ses-419!2scl!4v1748984094742!5m2!1ses-419!2scl&zoom=20" 
                width="740"                 
                height="420"    
                loading="lazy"  
                ></iframe>    
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#5c4a3d]">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="block text-sm font-medium text-[#5c4a3d]">Nombre</label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[#5c4a3d]">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="block text-sm font-medium text-[#5c4a3d]">Asunto</label>
                  <input
                    id="asunto"
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-[#5c4a3d]">Mensaje</label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#5c4a3d] hover:bg-[#4a3b31]">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>    
  );
}






