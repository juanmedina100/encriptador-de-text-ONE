function capturarTexto(){
    let textoAEncriptar = document.getElementById('texto').value.toLowerCase();
    let letras = ""; // Variable para almacenar las letras
    let muneco = document.getElementById("imagen-encriptado");
    let titulo = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    //console.log(textoAEncriptar);
    for (let i = 0; i < textoAEncriptar.length; i++) {
        if(textoAEncriptar.charAt(i)=='a'){
            letras += 'ai'
        }else if(textoAEncriptar.charAt(i)=='e'){
            letras += 'enter'
        }else if(textoAEncriptar.charAt(i)=='i'){
            letras += 'imes'
        }else if(textoAEncriptar.charAt(i)=='o'){
            letras += 'ober'
        }else if(textoAEncriptar.charAt(i)=='u'){
            letras += 'ufat'
        }else{
            letras += textoAEncriptar.charAt(i);
        }
      //console.log("Letras :"+i+" "+ letras)
    }
    
    if(document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value=letras;
        muneco.src = "./img/encriptado.jpg"
        titulo.textContent = "El texto fue encriptado con exito";
        parrafo.textContent = "";
    }else{
        
        //alert("Es necesario escribir un texto a encriptar");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes escribir un texto para que el encriptador funcione",
            footer: 'No olvides visitar mi <a href="https://github.com/juanmedina100">repositorio</a> y darle una estrella'
          });
        titulo.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa un texto a desencriptar";
        muneco.src = "./img/muneco.png"
    }
    
    
    return letras;
  }


  function desencriptarTexto() {
    let textoDesencriptado = "";
    let textoEncriptado = document.getElementById('texto').value;
  
    for (let i = 0; i < textoEncriptado.length; i++) {
      switch (textoEncriptado.charAt(i)) {
        case "a":
            if(textoEncriptado.charAt(i + 1) === "i"){
                console.log("En letra a : "+textoEncriptado.charAt(i+1));
                textoDesencriptado +="a";
                i +=1
            }else{
                textoDesencriptado += textoEncriptado.charAt(i);
            }
          break;
        case "i":
          if (textoEncriptado.charAt(i + 1) === "m" && textoEncriptado.charAt(i + 2) === "e" && textoEncriptado.charAt(i + 3) === "s") {
            textoDesencriptado += "i";
            i += 3;
          } else {
            textoDesencriptado += textoEncriptado.charAt(i);
          }
          break;
        case "e":
          if (textoEncriptado.charAt(i + 1) === "n" && textoEncriptado.charAt(i + 2) === "t" && textoEncriptado.charAt(i + 3) === "e" && textoEncriptado.charAt(i + 4) === "r") {
            textoDesencriptado += "e";
            i += 4;
          } else {
            textoDesencriptado += textoEncriptado.charAt(i);
          }
          break;
        case "o":
          if (textoEncriptado.charAt(i + 1) === "b" && textoEncriptado.charAt(i + 2) === "e" && textoEncriptado.charAt(i + 3) === "r") {
            textoDesencriptado += "o";
            i += 3;
          } else {
            textoDesencriptado += textoEncriptado.charAt(i);
          }
          break;
        case "u":
          if (textoEncriptado.charAt(i + 1) === "f" && textoEncriptado.charAt(i + 2) === "a" && textoEncriptado.charAt(i + 3) === "t") {
            textoDesencriptado += "u";
            i += 3;
          } else {
            textoDesencriptado += textoEncriptado.charAt(i);
          }
          break;
        default:
          textoDesencriptado += textoEncriptado.charAt(i);
      }
    }
    console.log("esto "+textoDesencriptado);
    let muneco = document.getElementById("imagen-encriptado");
    muneco.src = "./img/muneco.png"
    document.getElementById("texto").value=textoDesencriptado;
    return textoDesencriptado;
  }
  
  function copiarAlPortapapeles() {
    try{
        let textoACopiar = document.getElementById("texto");
        textoACopiar.select();
        textoACopiar.setSelectionRange(0,999999);
        document.execCommand('copy');
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Texto copiado",
            showConfirmButton: false,
            timer: 1500
          });
    }catch(error){
        console.log("Error en el copiado")
    }
  }
