/*1. ESTUDIANTE-A
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado. */



let estudiantesSemestre = (estudiantes, semestre) => {
    let estudiantesFiltrados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].semestre === semestre) {
            estudiantesFiltrados.push(estudiantes[i]);
        }
    }
    return estudiantesFiltrados;
};

let estudiantes = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Ana', semestre: 3, nota: 18 },
    { nombre: 'Carlos', semestre: 5, nota: 10 },
    { nombre: 'María', semestre: 2, nota: 12 },
    { nombre: 'Juan', semestre: 3, nota: 9 }

];

let salida = document.getElementById("salida");

let semestreAFiltrar = 5;

let estudiantesDelSemestre = estudiantesSemestre(estudiantes, semestreAFiltrar);
salida.innerHTML = `Estudiantes del semestre ${semestreAFiltrar}:<br>`;
estudiantesDelSemestre.forEach(estudiante => {
    salida.innerHTML += `Nombre: ${estudiante.nombre}, Nota: ${estudiante.nota}<br>`;
});
