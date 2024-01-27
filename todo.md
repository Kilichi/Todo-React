Página principal:
    Mostrar una lista de tareas pendientes. ✅
    Permitir agregar nuevas tareas. ✅
    Permitir marcar tareas como completadas.✅
    Permitir eliminar tareas. ✅

Componentes React necesarios:
    TaskList: Muestra la lista de tareas. ✅
    TaskItem: Representa una tarea individual. ✅
    TaskForm: Formulario para agregar nuevas tareas. ✅
    

Backend (Node.js con Express y MongoDB)

API para el backend:
    /api/tasks:
    GET: Obtener la lista de tareas.
    POST: Agregar una nueva tarea.
    /api/tasks/:id:
    PUT: Marcar una tarea como completada.
    DELETE: Eliminar una tarea.

Base de datos:
    Usa MongoDB para almacenar las tareas.
    Crea un modelo Task con al menos los campos title y completed.
    Conexión Frontend-Backend
    Conexión API en el frontend:
    Usa axios u otra librería para realizar peticiones HTTP desde el frontend al backend.

Manejo de estados:
    Utiliza el estado local de React para manejar las tareas y su estado (completadas o no).
    Actualiza la interfaz en respuesta a las respuestas de la API.
    Extras (Opcionales para aprender más)

Autenticación de usuarios:
    Agrega autenticación de usuarios para que cada usuario tenga su propia lista de tareas.
    Puedes usar JWT para la autenticación.

Persistencia de datos:
    Implementa la persistencia de datos en el frontend utilizando localStorage o sessionStorage.

Estilo y diseño:
    Utiliza CSS o alguna librería de estilos para mejorar la apariencia de tu aplicación. ✅
    
Despliegue:
    Despliega tu aplicación en algún servicio en la nube como Heroku o Netlify para que puedas compartirla con otros o simplemente acceder a ella desde cualquier lugar.