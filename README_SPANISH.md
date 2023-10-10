# easydineouts

## Acerca de
"easydineouts" - Una solución rápida para reservar mesas
¿Buscas planificar una experiencia gastronómica encantadora? EasyDineout, nuestra aplicación web de Telegram fácil de usar, simplifica las reservas en restaurantes con una interfaz fluida. Esto es lo que puedes hacer en easydineouts:

- Explorar Restaurantes Populares: Navega por una lista seleccionada de restaurantes populares cercanos, mostrando sus calificaciones generales y rangos de precios para obtener una visión rápida.

- Perfiles Detallados de Restaurantes: Sumérgete en perfiles de restaurantes completos que presentan detalles completos del menú, fácilmente expandibles para una mejor visualización. Descubre horarios de apertura y cierre, categorías de cocina y facilidades adicionales como estacionamiento y pagos con tarjeta.

- Crea tu Perfil: Ingresa los detalles de tu perfil, incluida tu dirección y número de teléfono, en la sección de perfil designada. Esta información agiliza el proceso de reserva para una experiencia sin complicaciones.

- Búsqueda de Restaurantes sin Esfuerzo: Utiliza la barra de búsqueda para encontrar rápidamente tus restaurantes favoritos, facilitando el proceso de toma de decisiones.

- Efectivas Opciones de Filtrado: Reduce tus opciones de restaurantes filtrando según tus preferencias de cocina y ofertas de descuentos en varios elementos del menú.

- Reservaciones de Mesa Simplificadas: Reserva una mesa en el restaurante que elijas de manera sencilla especificando la fecha, el número de invitados y los horarios disponibles. Disfruta de una deliciosa comida con tus seres queridos.

¡Reserva tu mesa ahora y disfruta de una experiencia gastronómica encantadora con easydineouts!
[@easydineouts](http://t.me/easydineouts_bot)

## Para ejecutar easydineouts
- Instala node: [Descargar Node.js](https://nodejs.org/en/download)

- Verifica si node está instalado
```sh
node --version
npm --version

Instala yarn
npm install --global yarn

Verifica si yarn está instalado

yarn --version

Instala git: Descargar Git
Verifica si git está instalado
git --version

Clona este proyecto
git clone https://github.com/hatim-the-dark-knight/pufflequack.git

Cambia al directorio donde se encuentran las carpetas public y src

cd pufflequack

Instala las dependencias

yarn

Ahora, para ejecutar el proyecto
yarn run dev

Puedes acceder al sitio desde el enlace proporcionado al ejecutar el comando anterior.
Servidor
Para lanzar el bot, llama a esto localmente
node server\main.js

Este comando configura un servidor para escuchar comandos entrantes de un usuario a través de un bot. Cuando se recibe un comando, el servidor lo procesa y responde en consecuencia.
Ahora abre Telegram, ve a http://t.me/easydineouts_bot y comienza el bot usando el comando /start, inicia la aplicación web desde el botón en línea "Reservar Mesa".

Para crear un nuevo proyecto similar a este
Crea un nuevo proyecto
yarn create vite

¿Está bien continuar? y
Nombre del proyecto -> nombre-de-tu-proyecto
Selecciona un marco -> React
Selecciona javascript
El proyecto nombre-de-tu-proyecto está creado
Cambia al directorio donde se encuentran las carpetas public y src
cd pufflequack

Instala las dependencias
yarn

Ejecuta el proyecto
yarn run dev

## Componentes utilizados en este proyecto

easydineouts tiene los componentes App, Cover, Home, Profile, Cuisines, TopOffers y SearchPage, y también hay componentes para cada Restaurante. También hay componentes Card, Modal y Content que se reutilizan en todo el código. Otros componentes incluyen Header, SearchBar, CategoryMenu y Category de Cuisines.

## Archivo de índice

Este archivo es el punto de entrada de la aplicación.

### Componentes Utilizados

- `App`: El componente principal que representa la aplicación.
- `BrowserRouter`: Proporciona a `App` capacidades de enrutamiento.
  
### Renderizado

Renderiza el componente `App` dentro de un `BrowserRouter`.

### Dependencias Externas

- Utiliza React para la creación y gestión de componentes.
- Utiliza ReactDOM para renderizar el componente raíz en el DOM.
- Requiere `App.jsx` para el componente principal.
- Requiere `index.css` para el estilo.

## Componente App

Este componente es el principal de la aplicación.

### Componentes Utilizados

- `Cover`: Muestra una página de portada al principio.
- `Home`: Representa la página de inicio con restaurantes populares.
- `Cuisines`: Representa la página de cocinas con categorías.
- `Restaurant`: Representa una página de restaurante individual.
- `TopOffers`: Representa la página de ofertas principales.
- `SearchPage`: Representa la página de resultados de búsqueda.
- `Profile`: Representa la página de perfil de usuario.

### Manejo de Eventos

- `goBack`: Navega hacia atrás a la página anterior.

### Inicialización e Integración

Configura el bot de Telegram, define el comportamiento del botón de retroceso y habilita la confirmación de cierre.
Utiliza React Router (`Routes` y `Route`) para definir el enrutamiento para diferentes componentes.

### Dependencias Externas

- Utiliza React para la creación y renderizado de componentes.
- Requiere Bootstrap CSS para el estilo (`bootstrap/dist/css/bootstrap.min.css`).
- Requiere CSS personalizado para estilos adicionales (`App.css`).
- Requiere los varios componentes mencionados anteriormente para el renderizado.

## Componente Home

Este componente representa la página de inicio de la aplicación.

### Componentes Utilizados

- `Header`: Muestra la sección de encabezado con ubicación y perfil.
- `CategoryMenu`: Muestra el menú de categorías para la navegación.
- `SearchBar`: Proporciona una barra de búsqueda para buscar restaurantes.
- `Content`: Muestra el contenido según la categoría seleccionada.

### Renderizado

Renderiza los componentes `Header`, `SearchBar`, `CategoryMenu` y `Content`.
Establece la categoría para `Content` como una cadena vacía para mostrar restaurantes populares.

### Dependencias Externas

- Utiliza React para la creación y renderizado de componentes.
- Requiere un archivo CSS (`App.css`) para el estilo del componente.
- Utiliza los componentes `Header`, `CategoryMenu`, `SearchBar` y `Content` para el renderizado.

## Componente Cover

Este componente representa la página de portada que se muestra durante la carga inicial de la aplicación.

### Renderizado

Renderiza una página de portada con el título "easydineouts".

### Lógica

Utiliza `useEffect` para desencadenar la navegación a la página de inicio (`/pufflequack/easydineouts`) después de un retraso de 2000 milisegundos.
El retraso simula una pantalla de carga antes de redirigir a la página de inicio.

### Dependencias Externas

- Utiliza React para la creación y renderizado de componentes.
- Utiliza `react-router-dom` para la navegación.
- Requiere un archivo CSS (`Cover.css`) para el estilo del componente.

## Componente Profile

Este componente representa la página de perfil donde los usuarios pueden ingresar y guardar su información de perfil.

### Gestión de Estado

Utiliza ganchos de React para gestionar el estado:
- `state`: Almacena la información del perfil del usuario.
- `showModal`: Controla la visibilidad del modal de éxito.

### Manejo de Eventos

- `handleInputChange`: Maneja los cambios de entrada en el formulario de perfil y actualiza el estado en consecuencia.
- `handleSubmit`: Maneja la presentación del formulario y muestra un modal de éxito con los detalles del perfil.
- `goBack`: Navega de regreso a la página de inicio.

### Renderizado

Renderiza un formulario de perfil con campos de entrada para que el usuario ingrese sus detalles.
Proporciona un botón para guardar la información del perfil.
Muestra un modal de éxito al guardar el perfil de manera exitosa.

### Almacenamiento Local

Almacena y recupera el estado del perfil del usuario desde el almacenamiento local.

### Dependencias Externas

- Utiliza React para la creación y renderizado de componentes.
- Utiliza un componente Modal para mostrar mensajes de éxito.
- Requiere un archivo CSS (`Profile.css`) para el estilo del componente.

## Componente Cuisines

El componente `Cuisines` es un componente funcional de React responsable de representar una lista de cocinas según una categoría especificada. También incluye un botón para volver a la página principal (`easydineouts`). El componente utiliza los componentes `Category` y `Content`.

### Importaciones

Se importan los módulos y componentes necesarios:
- `React` para crear componentes de React.
- `useNavigate` de `react-router-dom` para la navegación.
- Los componentes `Header`, `Content` y `Category`.

### Variable de Categoría

Se declara una variable `category` en la parte superior del archivo para almacenar el valor de la categoría en función de las props o un valor predeterminado.

### Componente Cuisines

Se define el componente funcional `Cuisines`:
- Toma `props` como parámetro, que incluye una prop `category`.
- Si `props.category` no está definida, el valor predeterminado para `category` se establece en "Americana" (puedes modificar esta lógica según tu caso de uso).
- Se obtiene la función `navigate` utilizando `useNavigate`, que se utilizará para navegar de regreso a la página principal.
- El componente renderiza un botón de retroceso, un título de contenido ("Cocinas"), un componente `Category` y un componente `Content` según la categoría especificada.

### Exportación

El componente `Cuisines` se exporta como exportación predeterminada.

## Componente TopOffers

Este componente representa la página de ofertas principales de la aplicación.

### Componentes Utilizados

- `Content`: Muestra el contenido según la categoría seleccionada.

### Manejo de Eventos

- `goBack`: Navega hacia atrás a la página anterior.

### Renderizado

Renderiza el componente `Content` para mostrar las mejores ofertas según una categoría vacía.

### Dependencias Externas

- Utiliza React para la creación y renderizado de componentes.
- Requiere el componente `Content` para el renderizado.

## Componente SearchPage

Este componente representa la página que muestra los resultados de búsqueda.

### Gestión de Estado

El componente utiliza ganchos de React para gestionar el estado y la ubicación:
- `location`: Recupera la información de ubicación actual (estado y ruta).
- `item`: Extrae la consulta de búsqueda de la ubicación para filtrar.
- `navigate`: Utiliza el gancho `useNavigate` para navegar a la página anterior.
- `goBack`: Maneja la navegación a la página anterior cuando se hace clic en el botón de retroceso.

### Renderizado

Renderiza un botón para volver a la página anterior.
Muestra una cuadrícula de tarjetas basadas en los resultados de búsqueda filtrados.
Cada tarjeta es un enlace clicleable para navegar a la página de detalles de un restaurante específico.

## Componente Restaurant

Este componente representa una página que muestra los detalles de un restaurante y permite la reserva de una mesa.

### Gestión de Estado

El componente utiliza ganchos de React para gestionar el estado:
- `state`: Gestiona los detalles de la reserva, como la fecha, los asientos y la franja horaria.
- `showModal`: Controla la visibilidad del modal de reserva.
- `showMenu`: Alterna la visibilidad del menú del restaurante.

### Manejo de Eventos

- `handleInputChange`: Maneja los cambios de entrada en el formulario de reserva.
- `handleSubmit`: Maneja la presentación del formulario para la reserva de mesa.
- `goBack`: Navega hacia atrás a la página anterior.
- `onClickMenu`: Maneja los eventos de clic para mostrar u ocultar el menú del restaurante.

### Renderizado

Renderiza los detalles del restaurante utilizando un componente `Card`.
Renderiza un formulario para la reserva de mesa, incluidos la fecha, los asientos y la selección de franja horaria.
Muestra un modal para confirmar la reserva.
Muestra información adicional sobre el restaurante, incluido el menú y las características.

### Dependencias Externas

- Utiliza `react-router-dom` para la navegación.
- Utiliza un componente Modal para mostrar los detalles de la reserva.
- Utiliza un componente Card para mostrar los detalles del restaurante.

## Componente Card

Este componente representa una tarjeta que muestra los detalles de un restaurante.

### Props

El componente recibe las siguientes props:
- `card`: Un objeto que contiene detalles como nombre, lugar, categoría, calificación, precio, imagen, ofertas y menú.

### Renderizado

Muestra un diseño de tarjeta con los detalles del restaurante:
- Imagen
- Oferta si está disponible
- Nombre del restaurante
- Ubicación
- Calificación
- Categoría de cocina
- Rango de precios

### Renderizado Condicional

Si hay ofertas disponibles, muestra el porcentaje de la oferta.

### Estilo

Utiliza un archivo CSS (`Card.css`) para dar estilo al componente.

### Dependencias Externas

- Requiere React para la creación y el renderizado de componentes.

## Componente Modal

Este componente representa un modal simple para mostrar mensajes.

### Props

El componente recibe las siguientes props:
- `showModal`: Un booleano que indica si se debe mostrar o no el modal.
- `message`: El mensaje que se mostrará en el modal.
- `onClose`: Una función para cerrar el modal.

### Renderizado

Renderiza un modal que contiene:
- Un encabezado con un título ("Éxito" en este caso).
- Un cuerpo que muestra el mensaje pasado a través de las props.
- Un pie de página con un botón de cierre.

### Lógica

Verifica si se debe mostrar el modal en función de la prop `showModal`.
Proporciona una función `onClose` para cerrar el modal cuando se hace clic en el botón de cierre.

### Dependencias Externas

- Utiliza React para la creación y el renderizado de componentes.
- Requiere un archivo CSS (`Modal.css`) para el estilo del componente.

## Componente Content

Este componente representa la sección de contenido para mostrar tarjetas de restaurantes según la categoría seleccionada.

### Props

El componente recibe las siguientes props:
- `category`: La categoría seleccionada para filtrar el contenido.

### Filtrado de Datos

Filtra los datos del restaurante según la categoría seleccionada o muestra todos los restaurantes si no se ha seleccionado ninguna categoría.

### Renderizado

Renderiza una cuadrícula de tarjetas de restaurante en función de los datos filtrados.
Cada tarjeta es un enlace clicleable para navegar a la página de detalles de un restaurante específico.

### Dependencias Externas

- Utiliza React para la creación y el renderizado de componentes.
- Utiliza `react-router-dom` para la navegación.
- Utiliza un componente Card para mostrar los detalles del restaurante.
- Requiere un archivo CSS (`Content.css`) para el estilo del componente.

### Lógica

Filtra las tarjetas de restaurante mostradas en función de la categoría seleccionada.

## Componente Header

Este componente representa la sección de encabezado de la aplicación.

### Renderizado

Renderiza un encabezado con una barra superior que contiene:
- Una etiqueta de ubicación que muestra una ubicación de muestra (Kochi, Kerala).
- Un ícono para navegar de regreso a la página de perfil (`/pufflequack/easydineouts/profile`).

### Lógica

Utiliza `useNavigate` de `react-router-dom` para la navegación.
Proporciona una función `goBack` para navegar de regreso a la página de perfil.

### Dependencias Externas

- Utiliza React para la creación y el renderizado de componentes.
- Requiere un archivo CSS (`Header.css`) para el estilo del componente.

## Componente SearchBar

Este componente representa una barra de búsqueda utilizada para buscar restaurantes.

### Gestión de Estado

El componente utiliza ganchos de React para gestionar el estado:
- `query`: Almacena la consulta de búsqueda.
- `filteredItems`: Filtra la búsqueda según la consulta ingresada utilizando datos de `categories.json`.

### Manejo de Eventos

- `onSearchEnterPressed`: Realiza una búsqueda cuando se presiona la tecla Enter.
- `onSearchBarClicked`: Maneja el evento de clic en la barra de búsqueda, revelando opciones desplegables.
- `handleChange`: Actualiza el estado de la consulta en función de la entrada del usuario.

### Renderizado

Renderiza un input estilizado para búsqueda con manejadores de eventos para clics y pulsaciones de teclas.
Muestra los resultados de búsqueda filtrados en un formato desplegable utilizando una clase CSS oculta.
Cada resultado es un enlace clicleable para navegar a la página de búsqueda con la respectiva consulta de búsqueda como estado.

## Componente CategoryMenu

Este componente representa un menú de categorías para la navegación.

### Renderizado

Renderiza un menú que consta de botones que enlazan a páginas de categorías específicas.

### Dependencias Externas

- Utiliza React para la creación y el renderizado de componentes.
- Utiliza componentes de Bootstrap para el estilo y la disposición.
- Utiliza `react-router-dom` para la navegación.
- Requiere un archivo CSS (`CategoryMenu.css`) para el estilo adicional.

### Navegación

Contiene botones que enlazan a diferentes categorías como "Ofertas principales" y "Cocinas".

### Lógica

Utiliza `Link` de `react-router-dom` para crear enlaces para la navegación a rutas específicas.

## Componente Category

Este componente representa una lista de categorías únicas de restaurantes.

### Filtrado de Datos

Utiliza datos de `categories.json` para filtrar y extraer categorías únicas de restaurantes.

### Renderizado

Renderiza una lista de categorías como botones, cada uno enlazando a una página de categoría específica.

### Dependencias Externas

- Utiliza React para la creación y el renderizado de componentes.
- Utiliza `react-router-dom` para la navegación.
- Requiere un archivo CSS (`Category.css`) para el estilo del componente.

### Lógica

Filtra categorías únicas a partir de los datos de restaurantes proporcionados y las asigna a botones para la navegación.

## Aplicación Web Easy Dineout - Posibles Errores y Excepciones

- Errores del servidor
- Errores de navegación
- Errores al obtener datos
- Errores de gestión de estado
- Errores al enviar formularios
- Errores de carga de componentes
- Problemas de compatibilidad
- Errores de funcionalidad de búsqueda
- Inconsistencias de interfaz de usuario
- Conflictos de versiones de dependencias

## Implementación

La implementación se realizó utilizando GitHub Actions.

1. Primero, es necesario configurar un flujo de trabajo similar al que se encuentra en `.github/workflows/deploy.yml`.
2. Segundo, debes ir a Configuración, dentro de Código y Automatización, hacer clic en Páginas. Bajo Build y Deployment, selecciona GitHub Actions.
3. Ahora, cada vez que hagas un commit, el sitio web se actualizará.

```markdown




