let savedEdad = 18;

alert('Hola, necesitas más de 17 años para poder ingresar.');

function pass() {
    let ingresar = false;

    while (true) {
        let userEdad = prompt('Hola, por favor ingresa tu edad');
        if (userEdad >= savedEdad) {
            alert('Genial, tienes ' + userEdad + ' años, puedes ingresar.');
            ingresar = true;
            break;
        } else {
            alert('Tu edad es ' + userEdad + ', no puedes ingresar, vuelve a intentarlo');
        }
    }
    return ingresar;
}

if (pass()) {
    let nombre = prompt('Bienvenido, ingresa tu nombre.');
    alert('Bienvenido/a, ' + nombre + ' a nuestra página.');
    let cursos = [ //pienso agregar mas cursos
        {
            nombre: "Preparación Física Avanzada",
            duracion: "10 semanas",
            nivel: "Avanzado",
            precio: 15000
        },
        {
            nombre: "Entrenamiento Cardiovascular",
            duracion: "8 semanas",
            nivel: "Intermedio",
            precio: 8000
        },
        {
            nombre: "Pesas para Principiantes",
            duracion: "6 semanas",
            nivel: "Principiante",
            precio: 10000
        }
    ];

    let cursosSeleccionados = []; //array donde se enviarian los cursos elegidos

    let cursosInfo = 'Cursos Disponibles:\n';
    for (let i = 0; i < cursos.length; i++) {
        cursosInfo += `${i + 1}. ${cursos[i].nombre} - Duración: ${cursos[i].duracion} - Nivel: ${cursos[i].nivel} - Precio: ${cursos[i].precio} Pesos\n`;
    }
    alert(cursosInfo);
    let cantidadCursos = parseInt(prompt('¿Cuántos cursos quieres comprar?'));
    //utilice las funcion isNaN porque si pongo la linea de codigo sin ella cuando llego a esta parte del codigo y en cursos pongo la letra "a o cualquiera" me lo toma como valido y prefiero evitarlo y que solamente acepte numeros y tire error si ponen letras
    if (isNaN(cantidadCursos) || cantidadCursos <= 0) {
        alert('Por favor, ingresa un número válido y mayor a cero.');
    } else {
        let precioTotal = 0;
        let i = 0;

        while (i < cantidadCursos) {
            let seleccionCurso = parseInt(prompt('Elige el número del curso en el que quieres participar:'));

            if (seleccionCurso >= 1 && seleccionCurso <= cursos.length) {
                cursosSeleccionados.push(cursos[seleccionCurso - 1]);
                precioTotal += cursos[seleccionCurso - 1].precio;
                i++;
            } else {
                alert('Selección no válida.');
            }
        }

        alert(`Has seleccionado los siguientes cursos:\n${cursosSeleccionados.map(curso => curso.nombre).join('\n')}\nEl precio total de tus cursos es: ${precioTotal} Pesos. ¡Gracias por tu compra!`);
    }
} else {
    alert('No cumpliste con el requisito mínimo, adiós.');
}
alert('Hasta luego!');
