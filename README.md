# BeerApiTechTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Recommended version of **Node.js -> 18.16.1.**
Run `npx npm install` to install dependencies. 
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---------------------------------------------------------------

# Propósito
Realizar un pequeño buscador de cervezas usando el API PunkApi:
[https://punkapi.com/documentation/v2](https://punkapi.com/documentation/v2)

## Requerimientos
El usuario debe ser capaz de buscar una cerveza insertando en un campo de texto el nombre de algún elemento que contenga la cerveza, como por ejemplo alimentos, nombre de la propia cerveza etc. 
El resultado debe mostrarse en un listado de cervezas.
Cada vez que el usuario introduzca o borre un carácter de la búsqueda, la lista debe ser actualizada.
El ejercicio se debe de ver bien tanto en pantallas móviles como en pantallas de ordenador. 

## Criterios de revisión
Calidad de código.
Utilización del api.
Simplicidad y escalabilidad de la solución.
Diseño responsive.

### Otros
Te recomendamos que reserves dos horas para realizar la prueba.
Nos gustaría que la prueba la realizarás en Angular pero puedes usar librerías, patrones de diseño o cualquier cosa que decidas. Siéntete cómodo usando las herramientas con las que estás acostumbrado a trabajar.
Envíanos el resultado de la prueba a través de tu repositorio personal (Github, Gitlab, Bitbucket...).

---------------------------------------------------------------

# DOCUMENTATION
https://punkapi.com/documentation/v2

### Authentication
NONE

### Parameters: 
All parameters are optional as a query string and can be chained together. 
Without a value it will return a 400 error.

### Pagination
Multiple items results will be limited to 25 by default.
?page paramater to access the rest of pages.
?per_page changes limit

### Get Beers endpoint
URL: https://api.punkapi.com/v2/beers

Just using string params. Not counting Ids filtering.

|PARAM|TYPE|DETAILS|
|:---:|:--:|:-----:|
|beer_name|string|All beers by name|
|yeast|string|All beers by yeast|
|hops|string|All beers by hops|
|malt|string|All beers by malt|
|food|string|All beers by food|
