# Taller React TDD

## Introducción

Hola 👋 Somos el equipo de Frontend de Mercadona Tech. Nuestra intención con este taller es mostrar nuestra forma de trabajar para compartir conocimiento con la comunidad y poner nuestro granito de arena para mejorar la diversidad en nuestro sector.
​

### ¿Qué aprenderás?

​Nuestra forma de trabajar se basa principalmente en los principios de [Test Driven Development](https://www.agilealliance.org/glossary/tdd) (TDD) y [Xtreme Programming](https://www.agilealliance.org/glossary/xp) (XP). En este taller aprenderás:

- Cómo escribir tests que te den confianza de que tu código funciona.
- Cómo iterar un producto añadiendo funcionalidad de forma progresiva.
- Cómo desarrollar un producto desde el punto de viste del usuario.
- Cómo colaborar de forma efectiva haciendo _pair programming_.
​
Aunque todos estos principios se puede aplicar a cualquier tecnología, nos centraremos en las tecnologías que utilizamos para desarrollar la web de Mercadona Online:
  ​
- HTML + CSS
- JavaScript
- React
- Jest + Testing Library

### Conocimiento previo

Este taller asume un conocimiento básico de HTML, CSS y JavaScript. También sería recomendable familiarizarse con React y algunos de sus conceptos básicos como [la rederización de listas](https://es.reactjs.org/docs/lists-and-keys.html), [el manejo de eventos](https://es.reactjs.org/docs/lists-and-keys.html) y [el uso de _hooks_ de estado](https://es.reactjs.org/docs/hooks-state.html). La [documentación oficial de React](https://es.reactjs.org/docs/hello-world.html) es un muy buen punto de partida.
​

## ¿Cómo empezar?

​El ejercicio se puede hacer tanto en el navegador como en tu entorno local. Para empezar rápido y no perder tiempo instalando cosas en tu ordenador, recomendamos utilizar CodeSandbox. Si ya tienes el entorno de tu ordenador preparado para desarrollar una aplicación de React, puedes hacer un _fork_ de este repositorio.
​

### Opción A (recomendada): CodeSandbox

​CodeSandbox es un editor de código online que nos permite trabajar desde nuestro navegador en un entorno con todas las tecnologías necesarias para nuestro proyecto ya instaladas. Para empezar, sigue estos pasos:

1. Regístrate o accede a tu cuenta en [CodeSandbox](https://codesandbox.io)
2. Accede al proyecto de este taller 👉 [Proyecto en CodeSandbox](https://codesandbox.io/s/scale-slicing-workshop-8y6co)
   ​

### Opción B: Local

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

## Cómo contribuir

Si encuentras algún error o quieres sugerir una mejora, siéntete libre de crear una Pull Request o abrir un Issue en este mismo repositorio.
