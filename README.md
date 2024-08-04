# Módulo de Introducción a Backend
Bienvenido al repositorio del curso de Introducción a Backend. Este curso está diseñado para proporcionarte una comprensión fundamental de cómo se diseñan y funcionan las bases de datos, así cómo interactuar con ellas usando SQL y PostgreSQL, para finalmente introducirte en el desarrollo de APIs RESTful usando Express JS y Knex JS.

## Contenido del Curso
### 1. Introducción a Base de Datos y SQL
Aprenderás qué es una base de datos, qué es SQL, como se conceptualiza una base de datos a través del modelo relacional, el modelo entidad-relación y la cardinalidad. Estos conceptos son la base para entender cómo se estructuran y gestionan los datos en un sistema de gestión de bases de datos relacional.

#### Herramientas:
- [FlowChart Maker Online](https://app.diagrams.net/): Creación de Diagramas de manera visual.
- [DBDiagram.io](https://dbdiagram.io/): Creación de Diagramas a través de pseudo código.

### 2. Introducción a PostgreSQL
PostgreSQL es una potente base de datos relacional de código abierto que es ampliamente utilizada en la industria.
Conocerás por qué usar PostgreSQL, sus ventajas, cómo instalar la herramienta, cómo conectarte a la base de datos utilizando el sistema gestor de base de datos pgAdmin4, así como crear tablas y realizar consultas para añadir (INSERT INTO), borrar (DELETE) y actualizar (UPDATE) información en la base de datos.

#### Recursos
- [Descarga de PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Tipos de Datos en PostgreSQL](https://www.postgresql.org/docs/current/datatype.html)

### 3. Consultas SELECT
Las consultas SELECT son esenciales para extraer información específica de una base de datos, por lo que existen multiples formas de realizar estas consultas.
Aprenderás a realizar consultas SELECT en una sola tabla utilizando instrucciones como FROM, WHERE, IN, LIMIT, OFFSET, ORDER, AVERAGE, GROUP BY y COUNT. 

#### Recursos
- [PostgreSQL Sample Database - DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/): Aquí se puede ver el diagrama ER de una base de datos de ejemplo de renta de peliculas en DVD. Así mismo se puede descargar la base de datos de ejemplo.
- [Cargar Base de Datos de Ejemplo en PostgreSQL](https://www.postgresqltutorial.com/load-postgresql-sample-database/): Se explica como restaurar un respaldo de base de datos (en este caso DVD Rental), tanto desde la consola como usando PGAdmin.

> [!WARNING]
> Si al cargar el respaldo, te marca un error acerca de que no encuentra el "Binary Path", tienes que establecerlo en **"Preferences -> Paths -> Binary Path"**, ir a la parte de abajo en el apartado **"PostgreSQL Binary Path"** y en donde dice la versión que tienes instalada (supongamos la 16), colocar la ruta correcta del binario, por defecto son:
> 
> **Windows:** C:\Program Files\PostgreSQL\16\bin\
> **MacOS:** /Library/PostgreSQL/16/bin

### 4. Subqueries & Joins
Conocerás cómo hacer consultas a más de una tabla mediante subqueries y joins. Estas técnicas son indispensables para combinar datos de múltiples tablas y obtener resultados complejos en una base de datos relacional.

### 5. RestFul APIs
Estudiarás la teoría general de una API REST, sus buenas prácticas, seguido de un ejemplo práctico usando Express JS. Las APIs RESTful son un estándar en la industria para la creación de servicios web que permiten la comunicación entre diferentes sistemas.

### 6. Introducción a Knex
Explorarás las diferencias entre SQL Driver, Query Builder y ORM, además de recibir una introducción a la librería Knex JS. También aprenderás cómo conectarte a una base de datos en Express con Knex JS para realizar migraciones y poblar la base de datos. Knex JS es una herramienta flexible y potente para gestionar bases de datos en aplicaciones Node.js.

### 7. API con MVC
Aprenderás la teoría general de MVC (Model-View-Controller) y cómo implementar una API con estos principios, enfocándote en la creación de un CRUD (Create, Read, Update, Delete). El patrón MVC es una metodología ampliamente adoptada para estructurar aplicaciones de manera modular y mantenible.

## Recursos Complementarios
- [Documentación de Postgres](https://www.postgresql.org/docs/)
- [Documentación de Knex](https://knexjs.org/guide/)
- [Configuración de ESLint con Standard JS](https://www.cesarguerra.mx/configuracion-rapida-de-eslint-con-standard-js-para-proyectos-de-javascript-y-de-react-con-vite-js/)

## Autor
Este repositorio y contenidos son realizados por César Guerra. 
Puedes usarlos libremente, solo recuerda dar los créditos correspondientes =P.

www.cesarguerra.mx
