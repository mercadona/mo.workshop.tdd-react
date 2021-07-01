# Taller React TDD

## Introducción

Hola 👋🏼 Somos el equipo de Frontend de Mercadona Tech. Nuestra intención con este taller es mostrar nuestra forma de trabajar para compartir conocimiento con la comunidad y poner nuestro granito de arena para mejorar la diversidad en nuestro sector.
​

### ¿Qué aprenderás?

​Nuestra forma de trabajar se basa principalmente en los principios de [Test Driven Development](https://www.agilealliance.org/glossary/tdd) (TDD) y [Xtreme Programming](https://www.agilealliance.org/glossary/xp) (XP). En este taller aprenderás:

- Cómo escribir tests que te den confianza de que tu código funciona
- Cómo iterar un producto añadiendo funcionalidad de forma progresiva
- Cómo desarrollar un producto desde el punto de viste del usuario
- Cómo colaborar de forma efectiva haciendo _pair programming_
  ​
  Aunque todos estos principios se puede aplicar a cualquier tecnología, nos centraremos en las tecnologías que utilizamos para desarrollar la web de Mercadona Online:
  ​
- HTML + CSS
- JavaScript
- React
- Jest + Testing Library
  ​

## ¿Cómo empezar?

​El ejercicio se puede hacer tanto en el navegador como en tu entorno local. Para empezar rápido y no perder tiempo instalando cosas en tu ordenador, recomendamos utilizar CodeSandbox. Si ya tienes el entorno de tu ordenador preparado para desarrollar una aplicación de React, puedes hacer un _fork_ de este repositorio.
​

## CodeSandbox

​CodeSandbox es un editor de código online que nos permite trabajar desde nuestro navegador en un entorno con todas las tecnologías necesarias para nuestro proyecto ya instaladas. Para empezar, sigue estos pasos:

1. Regístrate o accede a tu cuenta en [CodeSandbox](https://codesandbox.io)
2. Accede al proyecto de este taller �� [ENLACE AL PROYECTO]() // TODO: enlace
   ​

## Local

​Para este proyecto necesitarás [Git](https://git-scm.com/downloads), [Node y NPM](https://nodejs.org) instalados en tu entorno local y tu editor de código favorito. Nosotres utilizamos [Visual Studio Code](https://code.visualstudio.com/).
​
Una vez hayas hecho un _fork_ de este repositorio, puedes clonarlo a tu ordenador con el siguiente comando:
​

```bash
git clone URL git@github.com:mercadona/mo.workshop.tdd-react.git
```

​Para comenzar primero debemos instalar las dependencias del proyecto:
​

```bash
npm install
```

​Para iniciar el servidor de desarrollo, ejecuta el _script_ `start`:
​

```bash
npm start
```

## Ejercicio

El objetivo del ejercicio es implementar una versión web de una balanza de frutas como la que te encontrarías en tu supermercado favorito 😉 La única limitación es que el peso lo tenemos que introducir a mano en un _input_.

En `src/App.js` encontrarás el punto de partida. Aquí escribiremos todo el código de la aplicación (aunque si quieres puedes crear componentes y módulos).

En `src/App.test.js` encontrarás una _suite_ de tests con especificaciones para todas las funcionalidades de la aplicación. Cada bloque _test_ describe una funcionalidad específica.
