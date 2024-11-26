const setaAvancar = document.getElementById('seta-avancar');

const setaVoltar = document.getElementById('seta-voltar');

const imagens = document.querySelectorAll('.slide');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function(){
    
    if(imagemAtual === imagens.length - 1){
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener('click', function(){
    
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove('opacidade');
        setaVoltar.classList.add('efeito-hover');
    } else{
        setaVoltar.classList.add('opacidade');
        setaVoltar.classList.remove('efeito-hover')
    }

    const chegouNaUltimaImagem = imagemAtual === imagens.length - 1;

    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('opacidade');
        setaAvancar.classList.remove('efeito-hover');
    } else{
        setaAvancar.classList.remove('opacidade');
        setaAvancar.classList.add('efeito-hover')
    }
}




