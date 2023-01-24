function tocaSom(idDoAudio){
    const elemento = document.querySelector(idDoAudio);

    if(elemento && elemento.localName === 'auido'){
        elemento.play()
    }else{
        alert("Elemento não encontrado")
    }
}
const lista = document.querySelectorAll(".tecla");


for(let contador = 0; contador < lista.length; contador++){

    const tecla = lista[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
