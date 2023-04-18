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

### Requisitos
Para empezar entiendo que 
- JavaScript, Node.js, TypeScript
- Conocimientos de Api Rest
- El protocolo HTTP
- Arquitectura de Software

No estoy seguro de si cumplo o no todo esto, pero ya estaré aprendiendo.

## Get started
### Instalación

Según la documentación de NestJs, para instalar NestJs en nuestro proyecto, debemos ejecutar los siguientes comandos:

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

### Test

```bash
$ npm run test # unit tests
$ npm run test:e2e # e2e tests
$ npm run test:cov # test coverage
```
