let amigos = [];

function agregarAmigo(){
    
    // capturar nombre
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    //validar que no esta vacio
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //agregar al array
    amigos.push(nombre);

    // actualizar la lista visible
    actualizarLista()

    //imprimir
    console.log('Lista de amigos', amigos);

    // 5. Limpiar el campo de entrada
    input.value = "";
} 


function actualizarLista() {
    
    //Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos
    let lista = document.getElementById("listaAmigos");
    
    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
     lista.innerHTML = "";

     //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i= 0 ; i < amigos.length; i++){
        //Crear un nuevo elemento <li>
        let li = document.createElement("li");
        li.textContent =amigos[i];
    //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        lista.appendChild(li);
    }
    
}

function sortearAmigo(){

    //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    amigos.length === 0 
    ? alert('No hay amigos para sortear. Por favor agrega al menos dos.')
    : amigos.length === 1 
    ? alert('Solo hay un participante. Agrega al menos otro para poder hacer el sorteo.')
    :sorteo();
    
    //Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    function sorteo(){
        let numeroSorteado = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[numeroSorteado];
        document.getElementById('resultado').innerHTML = `<li> El amigo secreto es: ${amigoSorteado} </li>`;
    }
}


