# Trabajo Práctico N° 1: JavaScript - Programación III

Este proyecto es una aplicación de consola desarrollada en **Node.js** que consume la API de *Game of Thrones*. El objetivo es demostrar el manejo de asincronía, persistencia de datos en el sistema de archivos y manipulación avanzada de arrays.

## 🏫 Institución
* **Universidad:** Universidad Nacional de Entre Ríos (UNER)
* **Facultad:** Facultad de Ciencias de la Administración
* **Carrera:** Tecnicatura Universitaria en Desarrollo Web
* **Materia:** Programación III – 2026

## 👥 Integrantes - Grupo "Y"
* Fernando Rodriguez
* Natalia Ailén Gonzalez
* Martin Andres Conti
* Maria Pamela Conti
* Benavente Geronimo Leyes

## 📝 Consignas del Proyecto

### Parte 1: API Fetch & File System
1. **getAllCharacters**: Recupera todos los personajes mediante una consulta GET a la API.
2. **addNewCharacter**: Simula la creación de un nuevo personaje mediante el método POST.
3. **searchById**: Realiza la búsqueda de un personaje específico utilizando su ID como parámetro.
4. **saveDataJson**: Persiste los datos obtenidos en un archivo local llamado `personajes.json`.

### Parte 2: Métodos de Arrays & File System
A partir del archivo generado, se realizan las siguientes operaciones:
* **addToEnd**: Agrega un personaje al final del archivo (`push`).
* **addToBegin**: Agrega dos personajes al inicio del archivo (`unshift`).
* **deleteFirst**: Elimina el primer elemento e informa en consola cuál fue (`shift`).
* **createFileId**: Genera un archivo secundario (`personajes_id.json`) con estructura simplificada: solo `id` y `nombre` (`map`).
* **sortByNameDescendent**: Ordena los personajes de forma alfabética decreciente (`sort`).

## 🛠️ Tecnologías Utilizadas
* **JavaScript (ES6+)**
* **Node.js** (Módulo nativo `fs/promises`)
* **API Externa:** [ThronesAPI](https://thronesapi.com/)
* **Sintaxis:** Implementación de `Async/Await` y bloques `try...catch` para el manejo de excepciones.

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Ferchulobo777/PROGRAMACI-N-III-TP1.git
