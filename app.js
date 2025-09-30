const container = document.getElementById('fotos')
const imagens = container.querySelectorAll('img');
let foto_troca = false

function trocaFoto(){
        for (let i = 0; i < imagens.length; i++){
        if(foto_troca === false){
        imagens[i].src = `baixados(${i + 9}).jpg`;
        foto_troca = true;
    }else{
        for (let i = 0; i < imagens.length; i++) {
            imagens[i].src = `baixados(${i+1}).jpg`;
            foto_troca = false;
        }}
    }};