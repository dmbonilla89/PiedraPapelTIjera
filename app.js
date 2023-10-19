const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const Piedra = document.getElementById('piedra');
const Papel = document.getElementById('papel');
const Tijeras = document.getElementById('tijeras');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


const imagenes = [
    {
        name: "Piedra",
        url:"img/piedra.png"
    },
    {
        name: "Papel",
        url: "img/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "img/Tijeras.PNG" 
    }
];



function iniciar(){
    seccionBatalla.style.display = 'none';
};

Piedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

Papel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

Tijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
})


function opPc(){
    let aleatorio = Aleatorio();

    if(aleatorio === 0){
        opcionPc = "Piedra";
    }else if(aleatorio === 1){
        opcionPc = "Papel";
    }else if(aleatorio === 2){
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(opcionJugador == "Piedra" && opcionPc === "Tijeras"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Papel" && opcionPc === "Piedra"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Tijeras" && opcionPc === "Papel"){
        msjBatalla.innerHTML = "Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
    };

    addImagenes();

}

function Aleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador === imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc === imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    
};


window.addEventListener('load', iniciar);