
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


//Elementos del DOM capturados
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar =  document.querySelector("#btn-desencriptar");
var msg = document.querySelector("#msg");
var botonCopiar = document.querySelector("#btn-copy");


//Funcion del Boton Encriptar
botonEncriptar.addEventListener("click",function(){
	msg.value = encrypted();
})
//Funcion del Boton Desencriptar
botonDesencriptar.addEventListener("click",function(){
	msg.value = decrypted();
})


// Funcion de Encriptado

function encrypted(){
	var inputTexto = document.querySelector("#input-texto");
	var texto = inputTexto.value.toLowerCase();
	var arrayTexto = Array.from(texto);
	var arrayEncriptado = [];

	arrayTexto.forEach(function(letra){
		if(letra == "e"){
			arrayEncriptado.push("enter");
		}else if(letra == "i"){
			arrayEncriptado.push("imes");
		}else if(letra == "a"){
			arrayEncriptado.push("ai");
		}else if(letra == "o"){
			arrayEncriptado.push("ober");
		}else if(letra == "u"){
			arrayEncriptado.push("ufat");
		}else{
			arrayEncriptado.push(letra);
		}
	})

	var textoEncriptado = arrayEncriptado.join("");

	return textoEncriptado;
	
}


//Funcion Desencriptado

function decrypted(){

	var inputTexto = document.querySelector("#input-texto");
	var texto = inputTexto.value.toLowerCase();
	//var codigos = ["enter","imes","ai","ober","ufat"];
	//var vocales = ["e","i","a","o","u"];
	codigos = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
	var textoDesc = texto;
	codigos.forEach(function(codigo){
		var valorExp = codigo[0];
		var reg = new RegExp(valorExp,"g");
		textoDesc = textoDesc.replace(reg,codigo[1]);
	})

    return textoDesc;


  
	
};

//Funcion del botonb copia

botonCopiar.addEventListener('click',()=>{
	msg.select();
	document.execCommand('copy');
});