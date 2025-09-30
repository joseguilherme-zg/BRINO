const container = document.getElementById('fotos')
const imagens = container.getElementsByTagName('img');
let verify = false

container.addEventListener('click', ()=> {
    if(verify === false){
        for (let i = 0; i < imagens.length; i++) {
        imagens[i].src = `baixados(${i + 5}).jpg`;
        foto_troca = true;
    }

    }else{
        for (let i = 0; i < imagens.length; i++) {
            imagens[i].src = `baixados(${i+2}).jpg`;
            foto_troca = false;
        }}
    });