function relogioH(){

function criaHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    });
}
console.log(criaHora(10));

let segundos = 0;   
let timer;

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHora(segundos);
    }, 1000);
}

const relogio = document.querySelector('.relogio');

document.addEventListener('click', function(e){
const el = e.target;

if(el.classList.contains('zerar')){

    relogio.classList.remove('pausado')
    clearInterval(timer);
    
    relogio.innerHTML = '00:00:00'
    segundos = 0; 
}
if(el.classList.contains('pausar')){
    relogio.classList.add('pausado')
    clearInterval(timer);
}
if(el.classList.contains('iniciar')){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciarRelogio();
}
});
}
relogioH();