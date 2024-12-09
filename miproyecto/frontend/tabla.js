window.onload=function(){

listarusuarios();

}

let listarusuarios=async()=>{
    
const  peticion=await fetch("http://localhost:8080/users",
    {
        method:"GET",
        headers:{
"Accept":"application/json",
"Content-Type" :"application/json"


        }});
        const usuarios=await peticion.json();
        let contenidotabla=""

        for(let usuario of usuarios){
let contenidofila=` <tr><td>${usuario.id}</td>
<td>${usuario.firsname}</td>
<td>${usuario.lastname}</td>
<td>${usuario.email}</td>
<td> <input  type="button" onclick="borrarusuario(${usuario.id})"  value="eliminar">
<input  type="button" onclick="modificarusuarios(${usuario.id})"  value="modificar"></td>
 <tr>`
 contenidotabla+=contenidofila;



        }

        document.querySelector("#tabla tbody").outerHTML=contenidotabla;




}

let borrarusuario=async(id)=>{
const peticion=await fetch("http://localhost:8080/users/"+id,

    {
method:"DELETE",
headers:{
"Accept":"application/json",
"Content-Type":"application/json"


}});
listarusuarios();


}
let idediyat;
let modificarusuarios= async(id)=>{
    console.log("pruebaa");
    mostrar();
    idediyat=id;
    const peticion=await fetch("http://localhost:8080/users/"+id,
        {
        method:"GET",
        headers:{ 
"Accept":"application/json",
"Content-Type" :"application/json"


        }}
       



    );
    const recibido= await peticion.json();
    document.getElementById("firstname").value=recibido.firsname;
    document.getElementById("lastname").value=recibido.lastname;
    document.getElementById("email").value=recibido.email;

    let btnmodificar=document.getElementById("btnmodificar");   
}
let btnmodificar=document.getElementById("btnmodificar");
btnmodificar.addEventListener("click", evento =>{
   
aplicaractualizacion(idediyat);
 
})
let aplicaractualizacion=async(id)=>{
    try{
let campos={};
campos.id=id;
campos.firsname= document.getElementById("firstname").value;
campos.lastname= document.getElementById("lastname").value;   
campos.email= document.getElementById("email").value;

const p=await fetch("http://localhost:8080/users/"+id,

    {
method:"PUT",
headers:{
"Accept":"application/json",
"Content-Type":"application/json"

},
body:JSON.stringify(campos)

});

if (!p.ok) {
    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
}

console.log("Usuario actualizado correctamente");
listarusuarios();
} catch (error) {
    console.error("Error al actualizar el usuario:", error);
}





}
function mostrar(){

let formulario=document.getElementById("formulario").style.visibility="visible";

}

