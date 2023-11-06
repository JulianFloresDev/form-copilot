# Form Creation and Validation with Next.js and Zod

This project involves creating a registration form with fields for email, phone, company, lastname, firstname, and idUser. The form makes a POST request to the `https://api.hubapi.com/crm/v3/objects/contacts` API. However, this action is handled from a `route.ts` file using Next.js API Routes.

## Steps

1. **Prompt: Crea un formulario de registro "sin estilos" con campos de inputs dedicados a cada uno de los siguientes campos: "email", "phone", "company", "lastname", "firstname", "idUser".A su vez el formulario debe tener una accion que efectúe la llamada a la API "https://api.hubapi.com/crm/v3/objects/contacts", con un método POST, pero esta acción la deseo manejar desde un archivo de "route.ts" para manejar la consulta desde el propio servicio de Next API Routes:** The form fields include email, phone, company, lastname, firstname, and idUser. The form action makes a POST request to the HubSpot API.

2. **Usa el nuevo estado general de user para obtener y administrar los inputs, sin cambiar su estado, desde el objeto FormData nativo de js:** The form inputs are managed using the `useState` hook from React. The state is updated using the native FormData object from JavaScript.

3. **"/fix types un selected code" --> Para arreglar los tipos de datos que no se han podido inferir:** Any type issues that could not be inferred were fixed.

4. **Refactor to use POST method based on Next 13 docs:**

5. **Define la funcion createUser que recibe un objeto de tipo Contact y efectúe una llamada al endpoint local provisto por Next API Routes:** This function takes a Contact object and makes a call to the local endpoint provided by Next.js API Routes.

7. En este punto añadí un formulario extraído de https://uiverse.io/themrsami/smart-wasp-13. Y le solicité que los convierta en uno sólo a través del siguiente prompt:
    **Unifica los dos formularios para que los campos sea los del primer formulario, pero los estilos sean los del segundo. Manten la ejecución de la acción de OnSubmit del primero. Me gustaría mantener el diseño de cajas donde existe una seccion inicial en el formulario donde se destina a manejar un evento de cierre del formulario con un boton y un borde bottom rosado** The fields from the first form were combined with the styles from the second form. The onSubmit action from the first form was maintained. The design includes a section at the top of the form for handling a form close event with a button and a pink bottom border.

8. **Make the form more accessible:** Labels were added for each input field to improve accessibility. A gap was also added between form elements for better visual separation.

9. **Add form validations:** The Zod library was used to add validations before the form is submitted. This prevents sending invalid information and manages possible errors with a text box.

10. **Display error messages conditionally:** If an error occurs during form submission, the error message is displayed in a text box. The error message is displayed conditionally using React state.

## Time Invested

![image](https://github.com/JulianFloresDev/form-copilot/assets/96196361/e7c6d583-0cc4-4891-b101-6841e56a544f)


The final result is a styled and accessible form that validates input data before submission and displays error messages conditionally.
