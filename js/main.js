
let propinaV = document.querySelector('.bill');
let numeroPrina = parseInt(propinaV.value)
let porcentajes = document.querySelectorAll('.btn');
console.log(numeroPrina)
let cantidadPersonas = document.querySelector('.person');
let numeroPersona = parseInt(cantidadPersonas.value)
let amount = document.querySelector('.total');

const totalPerson = document.querySelector('#total-person');
const reset = document.querySelector('#reset');
let custom = document.querySelector('.custom');
let valorPorcentaje = 15;


console.log(cantidadPersonas)

porcentajes.forEach( boton => {
    
    boton.addEventListener('click' , (e) =>{
    clase(e);
    valorPorcentaje = parseInt( e.target.innerText.slice(0,-1));
    actualizarPersonas()
    calcular();

    
    })

})


propinaV.addEventListener('input', () =>{
    numeroPrina = parseFloat(propinaV.value);
    
    calcular()

})
cantidadPersonas.addEventListener('input', () =>{
    isNaN(cantidadPersonas)
    actualizarPersonas()

})

custom.addEventListener('input', () =>{
    valorPorcentaje = parseFloat(custom.value);
    if (isNaN(valorPorcentaje)){}
    else{
        calcular()
    }
    

})


reset.addEventListener('click', ()=>{
    propinaV.value = 0;
    numeroPrina = 0;
    cantidadPersonas.value = 2;
    numeroPersona= 0;
    amount.innerText = 0;
    totalPerson.innerText = 0
    
})

function actualizarPersonas() {
    
    numeroPersona = parseInt(cantidadPersonas.value)
    
}




function clase(e){

    porcentajes.forEach(btn=> {
        btn.classList.remove('active');

    })

    e.target.classList.add('active');
}

function  calcular (){
    
    
    // tip amount
    amount.innerText = ((numeroPrina * valorPorcentaje / 100) / numeroPersona).toFixed(2)
    // total

    totalPerson.innerText = (((numeroPrina * valorPorcentaje / 100) + numeroPrina) / numeroPersona).toFixed(2)

}


