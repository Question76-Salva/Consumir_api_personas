/**
*   ============================
*   === Consumir API pública ===
*   ============================
*/

/*
    Web: Random User Generator
    https://randomuser.me/

*/

// Capturar contenido
let contenido = document.querySelector('#contenido');

function traer() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        // Nos trae la info
        console.log(data.results['0']);
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" widt=""100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.first}</p>
		<p>Apellido: ${data.results['0'].name.last}</p>
		<p>Sexo: ${data.results['0'].gender}</p>		
		<p>Teléfono: ${data.results['0'].phone}</p>
		<p>Email: ${data.results['0'].email}</p>
        <p>Pais: ${data.results['0'].location.country}</p>
        <p>Fecha nacimiento: ${data.results['0'].dob.date}</p>
        <p>Edad: ${data.results['0'].dob.age}</p>
        
        `
    })
}

