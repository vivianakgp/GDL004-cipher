//import { FORMERR } from "dns";
//import { decode } from "punycode";

 window.cipher = {
   encode: (offset , password) => {
  let encryptedPassword = "";
  for(i=0; i<password.length; i++){
    let resultado= (password.charCodeAt(i)-65 +offset)%26 + 65;
    encryptedPassword += String.fromCharCode(resultado);
    document.getElementById("text2").value = encryptedPassword ; 
  }
   return encryptedPassword;
 },
  decode: (offset , encryptedPassword) =>  {
  let password= "";
  for(i=0; i<encryptedPassword.length; i++){
   let resultado2=(encryptedPassword.charCodeAt(i)+65 - offset)% 26 + 65;
   password += String.fromCharCode(resultado2);
  }
 return password;

 } 
 };


/*Acá escribirás las 2 funciones necesarias para el usuario pueda cifrar o descifrar. 
 Para esto debes implementar el objeto cipher, el cual ya se encuentra exportado en el objeto global
 (window). Este objeto (cipher) contiene dos métodos:

 cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha
 en el alfabeto y string el mensaje (texto) que queremos cifrar.
 cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda 
 en el alfabeto y string el mensaje (texto) que queremos descifrar.*/
