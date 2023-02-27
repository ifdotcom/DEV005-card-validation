# Tarjeta de crédito válida

  

## Índice

  

- [Tarjeta de crédito válida](#tarjeta-de-crédito-válida)
  - [Índice](#índice)
    - [Objetivo](#objetivo)
    - [Funcionalidad:](#funcionalidad)
    - [Interacción:](#interacción)
    - [Vista](#vista)
    - [Link](#link)
  - [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
    - [HTML](#html)
    - [CSS](#css)
    - [Web APIs](#web-apis)
    - [JavaScript](#javascript)
    - [Control de Versiones (Git y GitHub)](#control-de-versiones-git-y-github)
    - [Centrado en el usuario](#centrado-en-el-usuario)
    - [Diseño de producto](#diseño-de-producto)
  - [Criterios](#criterios)

  

***

### Objetivo
Desarrollo de un validador de tarjetas de crédito para BanCode.
### Funcionalidad:
Permite validar una tarjeta de crédito mediante el algoritmo de Luhn.
### Interacción:

 - Permite al usuario ingresar un número de tarjeta.
 -  El campo se mostrará
   de color rojo si es un número inválido o se esté enviando el campo
   vacío.
   - El campo se mostrará de color verde en caso que se un número
   válido, además, se mostrará el formulario donde el usuario podrá
   ingresar datos complementarios de la tarjeta (nombre, fecha de
   vencimiento y CVV).

   
### Vista

![](./src/bancode.jpg)

### Link
URL: [Card Validation | BanCode](https://ifdotcom.github.io/DEV005-card-validation/)
  

## Objetivos de aprendizaje

  

### HTML

  

- [X] **Uso de HTML semántico**
  

### CSS

  

- [X] **Uso de selectores de CSS**

- [X] **Modelo de caja (box model): borde, margen, padding**


  

### Web APIs

  

- [X] **Uso de selectores del DOM**

  



  

- [X] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  


  

- [X] **Manipulación dinámica del DOM**



  

### JavaScript

  

- [X] **Tipos de datos primitivos**

  
- [X] **Strings (cadenas de caracteres)**

  
  

- [X] **Variables (declaración, asignación, ámbito)**


- [X] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  

- [x] **Uso de bucles/ciclos (while, for, for..of)**

  

  

- [X] **Funciones (params, args, return)**

  

  

- [x] **Pruebas unitarias (unit tests)**

  

  

- [X] **Módulos de ECMAScript (ES Modules)**

  


  

- [x] **Uso de linter (ESLINT)**

  

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

  

### Control de Versiones (Git y GitHub)

  

- [X] **Git: Instalación y configuración**

  

- [X] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

  

- [X] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  

- [X] **GitHub: Despliegue con GitHub Pages**

  


  

### Centrado en el usuario

  

- [X] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

  

### Diseño de producto

  

- [X] **Crear prototipos de alta fidelidad que incluyan interacciones**

  

- [X] **Seguir los principios básicos de diseño visual**

  
  
  

## Criterios

  

Criterios de aceptación:

  

* [x] Tiene una interfaz que permite a la usuaria saber si la tarjeta es valido

y ocultar el numero hasta las 4 ultimos digitos.

* [x] El proyecto será entregado incluyendo pruebas unitarios de los métodos de

`validator` (`isValid` y `maskify`).

* [x] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).

* [x] El proyecto será entregado subiendo tu código a GitHub.

* [x] La interfaz será "desplegada" usando GitHub Pages.

* [x] El README contiene una definición del producto.