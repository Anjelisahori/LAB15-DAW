# Gestión de Empleados

Este proyecto es una aplicación web para la gestión de empleados, donde se pueden realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los empleados. La aplicación está construida con **React** para el frontend y **Spring Boot** para el backend.

## Características

- **Lista de Empleados**: Visualiza todos los empleados registrados.
- **Agregar Nuevo Empleado**: Permite crear un nuevo empleado con nombre, apellido y email.
- **Actualizar Empleado**: Permite editar la información de un empleado existente.
- **Eliminar Empleado**: Elimina un empleado de la base de datos.
- **Responsive**: La interfaz es completamente adaptable a dispositivos móviles y pantallas grandes.

## Tecnologías utilizadas

### Frontend
- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Bootstrap**: Framework CSS para facilitar el diseño y hacerlo responsivo.
- **Axios**: Librería para hacer peticiones HTTP al backend.

### Backend
- **Spring Boot**: Framework para construir aplicaciones Java basadas en Spring.
- **JPA (Java Persistence API)**: Para la gestión de la persistencia de datos.
- **MySQL**: Base de datos relacional para almacenar la información de los empleados.

## Requisitos

- **Node.js** (v16.0 o superior)
- **npm** (v7.0 o superior)
- **Java 11 o superior**
- **MySQL** (o cualquier base de datos compatible con JPA)

## Instalación

### Backend (Spring Boot)

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/gestion-empleados.git
````

2. Navega al directorio del backend:

   ```bash
   cd gestion-empleados/backend
   ```

3. Compila e inicia la aplicación Spring Boot:

   ```bash
   ./mvnw spring-boot:run
   ```

   Esto iniciará el servidor en `http://localhost:8080`.

4. Asegúrate de tener MySQL instalado y crea una base de datos llamada `gestion_empleados`.

### Frontend (React)

1. Navega al directorio del frontend:

   ```bash
   cd gestion-empleados/frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm start
   ```

   Esto abrirá la aplicación en `http://localhost:5173`.

## Uso

1. Abre el navegador y visita `http://localhost:5173` para ver la aplicación.
2. Puedes ver la lista de empleados, agregar nuevos empleados, actualizar los existentes y eliminarlos.
3. Asegúrate de que el backend y el frontend estén corriendo al mismo tiempo.

