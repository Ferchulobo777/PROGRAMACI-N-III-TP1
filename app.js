
/* -------------------------------------------------------------------------- */
/*    FACULTAD DE CIENCIAS DE LA ADMINISTRACIÓN - UNIVERSIDAD DE ENTRE RIOS   */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                 TECNICATURA UNIVERSITARIA EN DESARROLLO WEB                */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                  Trabajo Practico N° 1 - Programación III                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                  AÑO 2026                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                INTEGRANTES:       
/* Fernando Rodriguez, Natalia Ailén Gonzalez, MARTIN ANDRES CONTI, 
/* Maria Pamela Conti, Benavente Geronimo Leyes */
/* -------------------------------------------------------------------------- */

 


const fs = require("fs").promises;

const API_URL = "https://thronesapi.com/api/v2/Characters";
const FILE = "personajes.json";
const FILE_IDS = "personajes_id.json"; 
async function getAllCharacters() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("Personajes Obtenidos: ", data.length);
    return data;
  } catch (error) {
    console.error("Error al obtener los personajes", error);
  }
}

/* -------------------------------------------------------------------------- */
/*                    1-b Agregar un nuevo personaje (POST)                   */
/* -------------------------------------------------------------------------- */

async function addNewCharacter() {
  try {
    const newCharacter = {
      firstName: "Fernando",
      lastName: "Stark",
      title: "Developer of Winterfell",
      family: "Stark",
    };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCharacter),
    });
    const data = await res.json();
    console.log("POST(simulado):", data);
  } catch (error) {
    console.error("Error al Agregar un nuevo personaje: ", error);
  }
}

/* -------------------------------------------------------------------------- */
/*                        1.c - Buscar Personaje por id                       */
/* -------------------------------------------------------------------------- */

async function searchById(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    console.log("Personaje Encontrado: ", data.fullName);
  } catch (error) {
    console.error("No se pudo encontrar el personaje", error);
  }
}

/* -------------------------------------------------------------------------- */
/*                        1.d guardar y persistir datos                       */
/* -------------------------------------------------------------------------- */

async function saveDataJson(data, filename = FILE) {
  try {
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
    console.log(`Archivo ${filename} guardado`);
  } catch (error) {
    console.error("Error al guardar: ", error);
  }
}

/* -------------------------------------------------------------------------- */
/*                            2.a Agregar al final                            */
/* -------------------------------------------------------------------------- */

async function addToEnd() {
  try {
    let data = JSON.parse(await fs.readFile(FILE, "utf-8"));
    data.push({ id: 999, fullName: "Ultimo Personaje" });
    await saveDataJson(data);
    console.log("Personaje Agregado al final");
  } catch (error) {
    console.error("No se puede agregar el elemento: ", error);
  }
}

/* -------------------------------------------------------------------------- */
/*                           2.b - Agregar al inicio                          */
/* -------------------------------------------------------------------------- */

async function addToBegin() {
  try {
    let data = JSON.parse(await fs.readFile(FILE, "utf-8"));
    data.unshift(
      { id: 1000, fullName: "Inicio 1" },
      { id: 1001, fullName: "Inicio 2" }
    );
    await saveDataJson(data);
    console.log("Agregado al inicio");
  } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                           2.c - Eliminar primero                           */
/* -------------------------------------------------------------------------- */
async function deleteFirst() {
  try {
    let data = JSON.parse(await fs.readFile(FILE, "utf-8"));
    const eliminado = data.shift();
    console.log("Eliminado:", eliminado);
    await saveDataJson(data);
  } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                  2.d - Crear archivo solo con id y nombre                  */
/* -------------------------------------------------------------------------- */

async function createFileId() {
  try {
    let data = JSON.parse(await fs.readFile(FILE, "utf-8"));
    const reducido = data.map((p) => ({
      id: p.id,
      nombre: p.fullName,
    }));
    await saveDataJson(reducido, FILE_IDS);
    return reducido;
  } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                        2.e - Ordenar por nombre DESC                       */
/* -------------------------------------------------------------------------- */

async function sortByNameDescendent() {
  try {
    let data = JSON.parse(await fs.readFile(FILE_IDS, "utf-8"));
    data.sort((a, b) => b.nombre.localeCompare(a.nombre));
    console.log("Ordenado DESC:");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                                  MAIN - 5.                                 */
/* -------------------------------------------------------------------------- */
async function main() {
  const personajes = await getAllCharacters();
  if (personajes) {
    await saveDataJson(personajes); 
    await addNewCharacter();
    await searchById(1);

    await addToEnd();
    await addToBegin();
    await deleteFirst();
    await createFileId();
    await sortByNameDescendent();
  }
}

main();