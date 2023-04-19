<h1 align="center">
  Aprendiendo NestJS en 24 horas
</h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="75" alt="Nest Logo" /></a>
</p>
<p align="center">Un framework Node.js progresivo para crear aplicaciones de servidor (backend) eficientes y escalables.</p>
<p align="center">
</p>

## Descripción

En este proyecto estaré usando Nest durante 24 horas, para aprender a utilizarlo y poder crear una aplicación.

### Mis primeras impresiones
Para empezar, ¿Que es NestJs?
Según un video de [TikTok de FaztTech](https://www.tiktok.com/@fazttech/video/7128048643302526213) y ver un poco de la [documentación](https://docs.nestjs.com/) entiendo que:
- Es un Framework de NodeJs con [Express](https://expressjs.com/), pero con una estructura más ordenada y escalable.
- Su estructura se parece a [Angular](https://angular.io/)
- Usa TypeScript

Y seguro que hay muchas cosas mas que no he entendido, pero bueno, a lo que vamos.

Los recursos que usaré son:
- [Nestjs, Tu primer aplicacion Backend desde cero | YouTube Tutorial](https://youtu.be/7fOjuCGE_jk)
- [What Can I Do In NestJS in 30 Minutes? | Nest Tutorial App](https://youtu.be/EGpfmqrlA8c)
- [NestJS Docs](https://docs.nestjs.com/)
- [Curso de NestJs](https://platzi.com/cursos/nestjs/)



### Requisitos
Para empezar entiendo que 
- JavaScript, Node.js, TypeScript
- Bases de Programación Orientada a Objetos
- Conocimientos de Api Rest
- El protocolo HTTP
- Arquitectura de Software

No estoy seguro de si cumplo o no todo esto, pero ya estaré aprendiendo.

## Empezando
### Instalación

Para instalar NestJs debemos ejecutar los siguientes comandos:

```bash
$ node --version # comprobar que tenemos instalado NodeJs
$ npm i -g @nestjs/cli # instalar NestJs
$ nest --version # comprobar que se ha instalado correctamente
$ nest new project_name # crear un nuevo proyecto
$ cd project_name # entrar en el proyecto
$ npm run start # ejecutar el proyecto
```

### Running the app

```bash
$ npm run start # development
$ npm run start:dev # watch mode
$ npm run start:prod # production mode
```

## Modulos

Similar a Angular, la aplicación se organizar por módulos y siempre hay un componente que carga al resto, en este caso un siempre hay un módulo raiz.

En un archivo *name.module.ts* podemos definir un módulo, que puede tener:
- Controladores: Sirve para configurar las peticiones que se pueden hacer a la aplicación y configurar (GET, POST, DELETE, etc) .
- Proveedores: Aquí estan las funciones o servicios que podrían comunicarse con la base de datos.

![https://docs.nestjs.com/assets/Modules_1.png](https://docs.nestjs.com/assets/Modules_1.png)

Para crear un módulo, podemos usar el comando:

```bash
$ nest g module name
```

Para crear un controlador, podemos usar el comando:

```bash
$ nest g controller name
```

Para crear un Servicio podemos usar el comando:

```bash
$ nest g service name
```
Básicamente esto funciona así:
El **Controlador** se comunica con el **Servicio** y este con la **Base de Datos**.

## Entidades

Las entidades son las clases que se usan para definir los datos que se van a guardar en la base de datos.

Por ejemplo podemos crear algo así un archivo `task.entity.ts` donde estará la información de la tarea (task).

Estas entidades nos pueden ayudar si usamos un ORM (Object Relational Mapping) como [TypeORM](https://typeorm.io/#/).

## CRUD

Para hacer el crud simplemente es agregar metodos en el controlador y llamar a los servicios.
Para `tasks.services.ts` un método llamado `getAll` que devuelva todas las tareas, y en el controlador agregar un método llamado `getAll` que llame a ese servicio.

También para generar el `id` podemos usar la librería [uuid](https://www.npmjs.com/package/uuid).

Para probarlo podemos usar [Thunder Client](https://www.thunderclient.com/)

```ts


### Test

```bash
$ npm run test # unit tests
$ npm run test:e2e # e2e tests
$ npm run test:cov # test coverage
```
