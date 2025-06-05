"use client"

import { useState } from "react"
import { ArrowLeft, CalendarDays, Check, Users } from "lucide-react"
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom";

export default function ReservarPage() {  

  const [date, setDate] = useState<any>(new Date())
  const [step, setStep] = useState(1)
  const [guests, setGuests] = useState(2)  
  
  // Fechas ya reservadas (ejemplo)
  const bookedDates = [
    new Date(2025, 5, 10),
    new Date(2025, 5, 11),
    new Date(2025, 5, 12),
    new Date(2025, 5, 20),
    new Date(2025, 5, 21),
    new Date(2025, 5, 22),
  ]

  // Función para deshabilitar fechas ya reservadas
  const disabledDates = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getDate() === date?.getDate() &&
        bookedDate.getMonth() === date?.getMonth() &&
        bookedDate.getFullYear() === date?.getFullYear(),
    )
  }

  // Calcular precio total
  const calculateTotal = () => {
    if (!date?.from || !date?.to) return 0

    const diffTime = Math.abs(date?.to.getTime() - date?.from.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    const basePrice = 40000 // Precio por noche
    const cleaningFee = 0 // Tarifa de limpieza

    return basePrice * diffDays + cleaningFee
  }
  
  // Calcular noches totales
  const getNightCount = () =>
  date?.from && date?.to ? Math.ceil(Math.abs(date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24)) : 0;  

  // Formato de valor monetario
  const formatCLP= (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(value)
  }
  
  // Funcion de paso a paso (Seleccion de fecha - Información - Pago)
  const handleNextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#5c4a3d] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon  icon="mdi:calendar-check" className="h-6 w-6" color="currentColor" aria-hidden="true"/>
            <h1 className="text-xl font-bold">Mi Cabaña Rural</h1>
          </div>
          <Button asChild variant="ghost" className="text-white hover:bg-white/20">
            <Link to="/LandingPage/">Volver al inicio</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">            
            <h1 className="text-3xl font-bold">Reserva tu estancia</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Paso 1: Selecciona las fechas</CardTitle>
                    <CardDescription>Elige las fechas de llegada y salida para tu estancia</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-[#f8f5f0] rounded-lg">
                      <CalendarDays className="h-10 w-10 text-[#5c4a3d]" />
                      <div>
                        <h3 className="font-medium">Disponibilidad actualizada</h3>
                        <p className="text-sm text-muted-foreground">Las fechas en gris ya están reservadas</p>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <Calendar
                        mode="range"       
                        selected={date}                 
                        onSelect={setDate}  
                        numberOfMonths={2}
                        disabled={disabledDates}
                        className="[&>div]:grid [&>div]:grid-cols-1 md:[&>div]:grid-cols-2 [&>div]:gap-4"
                      />
                    </div>

                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="checkin">Fecha de llegada</Label>
                          <Input id="checkin" value={date?.from ? date?.from.toLocaleDateString() : ""} readOnly />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="checkout">Fecha de salida</Label>
                          <Input id="checkout" value={date?.to ? date?.to.toLocaleDateString() : ""} readOnly />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Número de huéspedes</Label>
                        <Select defaultValue="2" onValueChange={(value) => setGuests(Number.parseInt(value))}>
                          <SelectTrigger id="guests">
                            <SelectValue placeholder="Selecciona el número de huéspedes" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 huésped</SelectItem>
                            <SelectItem value="2">2 huéspedes</SelectItem>
                            <SelectItem value="3">3 huéspedes</SelectItem>
                            <SelectItem value="4">4 huéspedes</SelectItem>
                            <SelectItem value="5">5 huéspedes</SelectItem>
                            <SelectItem value="6">6 huéspedes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={handleNextStep}
                      disabled={!date?.from || !date?.to}
                      className="bg-[#5c4a3d] hover:bg-[#4a3b31]"
                    >
                      Continuar
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Paso 2: Datos personales</CardTitle>
                    <CardDescription>Completa tus datos para la reserva</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input id="apellido" placeholder="Tu apellido" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="+34 600 000 000" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comentarios">Comentarios adicionales (opcional)</Label>
                      <textarea
                        id="comentarios"
                        className="w-full min-h-[100px] p-3 border rounded-md"
                        placeholder="Información adicional para tu estancia..."
                      ></textarea>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Volver
                    </Button>
                    <Button onClick={handleNextStep} className="bg-[#5c4a3d] hover:bg-[#4a3b31]">
                      Continuar
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Paso 3: Pago</CardTitle>
                    <CardDescription>Completa el pago para confirmar tu reserva</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Tabs defaultValue="tarjeta">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="tarjeta">Tarjeta</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                        <TabsTrigger value="transferencia">Transferencia</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tarjeta" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Número de tarjeta</Label>
                          <Input id="card-number" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Fecha de expiración</Label>
                            <Input id="expiry" placeholder="MM/AA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre en la tarjeta</Label>
                          <Input id="name" placeholder="Nombre completo" />
                        </div>
                      </TabsContent>
                      <TabsContent value="paypal" className="pt-4">
                        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-4">PayPal</div>
                          <p className="text-center text-muted-foreground mb-4">
                            Serás redirigido a PayPal para completar el pago de forma segura.
                          </p>
                          <Button className="bg-blue-600 hover:bg-blue-700">Pagar con PayPal</Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="transferencia" className="pt-4">
                        <div className="p-4 border rounded-lg space-y-4">
                          <div className="space-y-1">
                            <p className="font-medium">Datos bancarios:</p>
                            <p className="text-sm">IBAN: ES00 0000 0000 0000 0000 0000</p>
                            <p className="text-sm">Beneficiario: Mi Cabaña Rural</p>
                            <p className="text-sm">Concepto: Reserva + tu nombre</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-md text-sm text-yellow-800">
                            <p>
                              Importante: La reserva no se confirmará hasta recibir el pago. Por favor, envía el
                              comprobante de transferencia a info@micabanarural.com
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Volver
                    </Button>
                    <Button onClick={() => setStep(4)} className="bg-[#5c4a3d] hover:bg-[#4a3b31]">
                      Confirmar y pagar
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">¡Reserva confirmada!</CardTitle>
                    <CardDescription>Gracias por reservar con nosotros</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-[#f8f5f0] p-4 rounded-lg space-y-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Número de reserva</p>
                        <p className="font-medium">RES-{Math.floor(Math.random() * 10000)}</p>
                      </div>
                      <Separator />
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Fechas</p>
                        <p className="font-medium">
                          {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Huéspedes</p>
                        <p className="font-medium">
                          {guests} {guests === 1 ? "huésped" : "huéspedes"}
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Total pagado</p>
                        <p className="font-medium">{calculateTotal()}€</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-medium text-blue-800 mb-2">Información importante</h3>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Hemos enviado los detalles de tu reserva a tu email.</li>
                        <li>• El check-in es a partir de las 15:00h.</li>
                        <li>• El check-out es hasta las 12:00h.</li>
                        <li>• Te contactaremos unos días antes de tu llegada con instrucciones detalladas.</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild className="bg-[#5c4a3d] hover:bg-[#4a3b31]">
                      <a href="/">Volver al inicio</a>
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>

            <div>
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Resumen de reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/LandingPage/assets/cabana1.jpg"
                      alt="Cabaña Rural"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Cabaña Rural en plena naturaleza</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Users className="h-4 w-4" />
                      <span>Hasta 6 huéspedes</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Fechas</span>
                      <span className="font-medium">
                        {date?.from ? date?.from.toLocaleDateString() : "LLegada"} - {" "}
                        {date?.to ? date?.to.toLocaleDateString() : "Salida"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Huéspedes</span>
                      <span className="font-medium">
                        {guests} {guests === 1 ? "huésped" : "huéspedes"}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Precio por noche</span>
                      <span>$40.000</span>
                    </div>
                    {date?.from && date?.to && (
                      <div className="flex justify-between">
                        <span>
                          x {getNightCount()}{getNightCount() === 1 ? ' Noche' : ' Noches'}{""}                          
                        </span>
                        <span>
                          {formatCLP(calculateTotal())}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Tarifa de limpieza</span>
                      <span>$0</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatCLP(calculateTotal())}</span>
                  </div>

                  <div className="bg-[#f8f5f0] p-3 rounded-md text-sm">
                    <p>No se te cobrará nada todavía. El pago se realizará en el último paso.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#3d3229] text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Mi Cabaña . Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}