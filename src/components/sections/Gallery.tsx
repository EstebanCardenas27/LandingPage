"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = ['/assets/cabana1.jpg', '/assets/cabana2.jpg', '/assets/cabana3.jpg', '/assets/cabana4.webp'];

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <section id="galeria" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Galería</h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="flex justify-center ">
                <Card className="shadow-md w-full h-[40rem]">
                  <CardContent className="p-0">
                    <img
                      src={src}
                      alt={`Cabaña ${index + 1}`}
                      className="w-full h-[40rem] object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}




