"use client"; //Añadido a mano para que Next compile correctamente
/* Prompt: Crea un formulario de registro "sin estilos" con campos de inputs dedicados a cada uno de los siguientes campos:
  "email", "phone", "company", "lastname", "firstname", "idUser"
  A su vez el formulario debe tener una accion que efectúe la llamada a la API "https://api.hubapi.com/crm/v3/objects/contacts", con un método POST, pero esta acción la deseo manejar desde un archivo de "route.ts" para manejar la consulta desde el propio servicio de Next API Routes
*/
import { FormEvent, useState } from 'react';
import { Contact } from '@/interfaces/interfaces';
import { z, ZodError } from 'zod';

// Define the schema
const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  company: z.string(),
  lastname: z.string(),
  firstname: z.string(),
  idUser: z.string(),
});

/**
 * Prompt 6: Define la funcion createUser que recibe un objeto de tipo Contact y efectúe una llamada al endpoint local provisto por Next API Routes
 */
const createUser = async (data: Contact) => {
  const response = await fetch('/api/new-user', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export default function Home() {
  /**
 * Prompt 2:
 * Usa el nuevo estado general de user para obtener y administrar los inputs, sin cambiar su estado, desde el objeto FormData nativo de js

 * Prompt 3: "/fix types un selected code" --> Para arreglar los tipos de datos que no se han podido inferir
 */

  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null); // Reset the error state
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data: Contact = {
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      lastname: formData.get('lastname') as string,
      firstname: formData.get('firstname') as string,
      idUser: formData.get('idUser') as string,
    };
    /**
     * En este punto le pedí que valide los datos del formulario con el siguiente prompt:
     * Prompt 9: Add validations before handleSubmit to prevent send invalid information and manage posible errors with a text box. Implement zod library
     */
    try {
      ContactSchema.parse(data);
      const response: Contact = await createUser(data);
      console.log(response);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map(err => err.message);
        setError(errorMessages.join(', '));
      } else {
        throw error;
      }
    };
  };

  return (
    // En este punto añadí un formulario extraído de https://uiverse.io/themrsami/smart-wasp-13
    // Y le solicité que los convierta en uno sólo a través del siguiente prompt:
    /**
     * Prompt 7: Unifica los dos formularios para que los campos sea los del primer formulario, pero los estilos sean los del segundo. Manten la ejecución de la acción de OnSubmit del primero.
     * Me gustaría mantener el diseño de cajas donde existe una seccion inicial en el formulario donde se destina a manejar un evento de cierre del formulario con un boton y un borde bottom rosado
     */
    <>
      <div className="w-full max-w-[500px] mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-end items-center w-full pb-6 border-b-4 border-pink-500">
          <button className="text-gray-800 font-bold rounded-lg w-8 h-8 flex justify-center items-center hover:bg-pink-600 hover:text-white transition ease-in-out duration-150">
            X
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Datos de tu empresa</h2>

        {/* En este punto le pedí que extienda el formulario y lo haga m,ás accesible: 
        Prompt 8: Make this form more accesible, adding labels for each input, add gap too */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col text-gray-800">
            <label>Email</label>
            <input name="email" type="email" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
          </div>
          <div className="flex flex-col text-gray-800">
            <label>Número celular</label>
            <input name="phone" type="tel" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone" />
          </div>
          <div className="flex flex-col text-gray-800">
            <label>Companía</label>
            <input name="company" type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Company" />
          </div>
          <div className="flex flex-col text-gray-800">
            <label>Nombre</label>
            <input name="firstname" type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="First Name" />
          </div>
          <div className="flex flex-col text-gray-800">
            <label>Apellido</label>
            <input name="lastname" type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Last Name" />
          </div>
          <div className="flex flex-col text-gray-800">
            <label>User ID</label>
            <input name="idUser" type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="User ID" />
          </div>
          <button type="submit" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-pink-600 hover:to-rose-600 transition ease-in-out duration-150">Continuar</button>
          {error && (
            <ul className="text-red-600 text-sm font-bold">
              {error.split(', ').map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          )}
        </form>
      </div>

    </>
  );
}
