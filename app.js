// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios al inicio y final

    // Validación: si el campo está vacío, muestra una alerta
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // actualizar la lista visual en la página
    actualizarLista();

    // esto limpia el campo de texto
    input.value = "";
}

// Función para actualizar la lista de nombres en pantalla
function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // se limpia la lista
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const item = document.createElement("li");
        
        // Asignar el nombre del amigo al contenido del <li>
        item.textContent = amigos[i];
        
        // Agregar el <li> a la lista (<ul>)
        lista.appendChild(item);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validación: debe haber al menos 2 nombres
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Genera un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];

    // Muestra el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${ganador} 🎉</li>`;   
}

// Función para reiniciar todo: lista, resultado y array
function reiniciarTodo() {
    amigos = []; // vacía la lista de nombres
    document.getElementById("listaAmigos").innerHTML = ""; // limpia la lista visible
    document.getElementById("resultado").innerHTML = ""; // borra el ganador
    document.getElementById("amigo").value = ""; // opcional: limpia el input
}