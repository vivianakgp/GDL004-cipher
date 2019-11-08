

 window.cipher = {
    encode: (offset,string) => {
      let encryptedPassword = "";
      for(let i=0; i<string.length; i++){
      let convertirNum = string.charCodeAt(i);
      if(convertirNum >64 && convertirNum <91 ){
        let resultado= (convertirNum-65 +offset)%26 + 65;
        encryptedPassword += String.fromCharCode(resultado);
      }else{
        encryptedPassword += String.fromCharCode(convertirNum);
      }
      
      }
      return encryptedPassword;
    },

    decode: (offset,string) => {
      let password = "";
      for(let i=0; i<string.length; i++){
      let convertirNum = string.charCodeAt(i);
      if(convertirNum >64 && convertirNum <91 ){
        let resultado= (convertirNum+65 - offset)%26 + 65;
        password += String.fromCharCode(resultado);
      }else{
        password += String.fromCharCode(convertirNum);
      }
      
      }
      return password;

    } 
 };





