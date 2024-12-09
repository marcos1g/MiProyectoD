const registerButton = document.getElementById("btnregister");

// Escuchamos el clic en el botón
registerButton.addEventListener("click", (event) => {
  event.preventDefault(); // Evitamos que el formulario recargue la página

  // Obtenemos los valores de los campos
  const firsname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;

  // Enviamos los datos al servidor usando fetch
  fetch("http://localhost:8080/users", { // Cambia la URL si es necesario
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firsname: firsname,
      lastname: lastname,
      email: email
    })
  })
 
  .then(response => response.json())
  .then(data => {
    console.log("Usuario registrado con éxito:", data);

    alert("Usuario registrado con éxito"); // Mensaje de éxito
  })
  .catch(error => {
    console.error("Error al registrar usuario:", error);
    alert("Error al registrar usuario. Revisa la consola para más detalles."); // Mensaje de error
  });
});




