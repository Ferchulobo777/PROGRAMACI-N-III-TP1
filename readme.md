# Trabajo Práctico N° 1: JavaScript - Programación III

[cite_start]Este proyecto consiste en una aplicación de consola desarrollada en **Node.js** que interactúa con la API de *Game of Thrones* para realizar operaciones de recuperación, creación y persistencia de datos en archivos locales JSON[cite: 9, 11].

## 🏫 Institución
* [cite_start]**Universidad:** Universidad Nacional de Entre Ríos (UNER) [cite: 1]
* [cite_start]**Facultad:** Facultad de Ciencias de la Administración [cite: 2]
* [cite_start]**Carrera:** Tecnicatura Universitaria en Desarrollo Web [cite: 4]
* [cite_start]**Materia:** Programación III – 2026 [cite: 4, 5]

## 👥 Integrantes - Grupo N° [Insertar Número]
* [cite_start]Fernando Rodriguez [cite: 18]
* [cite_start]Natalia Ailén Gonzalez [cite: 18]
* [cite_start]Martin Andres Conti [cite: 18]
* [cite_start]Maria Pamela Conti [cite: 18]
* [cite_start]Benavente Geronimo Leyes [cite: 18]

## 📝 Consignas del Proyecto

[cite_start]El objetivo principal es aplicar conceptos avanzados de JavaScript, incluyendo el manejo de asincronía y manipulación del sistema de archivos[cite: 7, 10].

### Parte 1: API Fetch & File System
1. [cite_start]**getAllCharacters**: Recupera todos los personajes mediante una consulta GET a la API[cite: 39].
2. [cite_start]**addNewCharacter**: Simula la creación de un nuevo personaje mediante un método POST[cite: 40].
3. [cite_start]**searchById**: Busca un personaje específico utilizando su ID[cite: 41].
4. [cite_start]**saveDataJson**: Persiste los datos recuperados inicialmente en un archivo local llamado `personajes.json`[cite: 42].

### Parte 2: Métodos de Arrays & File System
[cite_start]Utilizando el archivo persistido anteriormente, se realizan las siguientes acciones[cite: 44]:
* [cite_start]**addToEnd**: Agrega un personaje al final del archivo (`push`)[cite: 45].
* [cite_start]**addToBegin**: Agrega dos personajes al inicio del archivo (`unshift`)[cite: 46].
* [cite_start]**deleteFirst**: Elimina el primer elemento del array e informa cuál fue (`shift`)[cite: 47].
* [cite_start]**createFileId**: Genera un nuevo archivo (`personajes_id.json`) que solo contiene los campos `id` y `nombre` (`map`)[cite: 48].
* [cite_start]**sortByNameDescendent**: Ordena los personajes del nuevo archivo por nombre de forma decreciente (`sort` y `localeCompare`)[cite: 49].

## 🛠️ Tecnologías Utilizadas
* [cite_start]**JavaScript (ES6+)** [cite: 3]
* [cite_start]**Node.js** (Módulo `fs/promises`) [cite: 10, 52]
* [cite_start]**API Externa:** [ThronesAPI](https://thronesapi.com/) [cite: 9, 38]
* [cite_start]**Sintaxis:** Async/Await y bloques Try...Catch para el manejo de errores[cite: 52, 53].

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio o descargar los archivos.**
2. **Asegurarse de tener Node.js instalado.**
3. **Ejecutar el script principal:**

   ```bash
   node app.js
   ```