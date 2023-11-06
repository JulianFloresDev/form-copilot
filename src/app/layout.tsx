import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create ADI Contacts',
  // Prompt: Crea una descripcion para la página que será un mockup de un chatbot, más bien el formulario de creacion de nuevos usuarios para poder usar el chat bot con los siguientes requerimientos:
  // Este ”Adi”, debe ser capaz de orientar al usuario a que se realice la contratación de dicha tarjeta, brindar asesoramiento del producto y recopilar la información necesaria para realizar la contratación del producto. Adi debe ser capaz de responder las preguntas y/o dudas que pueda tener el usuario, sin perder el objetivo de llevar al usuario a realizar la contratación de la tarjeta.
  // Result:
  description: 'Bienvenido a Adi, tu asistente virtual. Estoy aquí para ayudarte a contratar tu nueva tarjeta. Te proporcionaré asesoramiento sobre el producto y recopilaré la información necesaria para realizar la contratación. Estoy aquí para responder a todas tus preguntas y dudas, guiándote a través del proceso de contratación de la tarjeta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
