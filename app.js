const container = document.getElementById('fotos')
const imagens = container.getElementsByTagName('img');
let verify = false

container.addEventListener('click', ()=> {
        for (let i = 0; i < imagens.length; i++) {
        if(foto_troca === false){
        imagens[i].src = `baixados(${i + 9}).jpg`;
        foto_troca = true;
    }

    }else{
        for (let i = 0; i < imagens.length; i++) {
            imagens[i].src = `baixados(${i+1}).jpg`;
            foto_troca = false;
        }}
    });