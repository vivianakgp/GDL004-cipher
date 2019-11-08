

function encode(){
let offset = parseInt(document.getElementById("des").value);
let string = document.getElementById("text1").value.toUpperCase();
let encryptedPassword = window.cipher.encode(offset,string);
console.log(encryptedPassword);
document.getElementById("text2").value = encryptedPassword ; 

}
let codificar1  = document.getElementById("text1");
codificar1.addEventListener("keyup",encode);

function decode(){
    let offset = parseInt(document.getElementById("des").value);
    let string = document.getElementById("text2").value.toUpperCase();
    let password = window.cipher.decode(offset,string);
    console.log(password);
    document.getElementById("text1").value = password;
    
}
let descodificar1  = document.getElementById("text2");
descodificar1.addEventListener("keyup",decode);


