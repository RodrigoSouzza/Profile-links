function escreverTexto(texto){
    const textoArray = texto.innerHTML.split('');
    texto.innerHTML = ' ';
    textoArray.forEach(function(letra, i ){

        setTimeout(() => {
           texto.innerHTML += letra; 
        }, 80 * i);
    });
}

const titulo = document.getElementById('titulo')
const subTitulo = document.getElementById('sub_titulo')
escreverTexto(titulo)
escreverTexto(subTitulo)