//import { encode } from "punycode";


let boton1 = document.getElementById("codificar");
let boton2 = document.getElementById("descodificar");

boton1.addEventListener("click", () => {
let password = document.getElementById("text1").value.toUpperCase();
 console.log(password);
let offset = parseInt(document.getElementById("des").value);
console.log(offset);
let encryptedPassword = window.cipher.encode(offset,password);
document.getElementById("text2").innerHTML = encryptedPassword ; 
console.log(encryptedPassword);
});

boton2.addEventListener("click",() => {
    let encryptedPassword = document.getElementById("text2").value.toUpperCase();
    console.log(encryptedPassword);
    let offset = parseInt(document.getElementById("des").value);
    let password = window.cipher.decode(offset,encryptedPassword);
    console.log(password);
    document.getElementById("text1").innerHTML = password;
    
});

