const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


// REFERENCIAS



// console.log(pizzas.find((elem)=>{
//   return elem.id===2
// }))

const button=document.querySelector('.pizzas-button')
const pizzaInput=document.querySelector('.pizzas-input')
const pizzaContainer=document.querySelector('.pizzas-container')

const getId=()=>{
    return parseInt(pizzaInput.value)
}

const isValid=(idPizza)=>{
  let valid=false
  if(pizzas.some((pizza)=>{
    return pizza.id===idPizza
  })){
    valid=true
  }
  return valid
}

const createCard=(pizza)=>{
  const {id,nombre,precio,ingredientes,imagen}=pizza
   return `
   <div>
   <h2>${nombre}</h2>
   <img src=${imagen}></img>
   <p>${precio}</p>
   </div>
   `
}

const renderCard=()=>{
  let inputD=parseInt(pizzaInput.value)
  if(isNaN(inputD)){
    const error=document.createElement('div')
    error.innerHTML=`
    <h2>Ingrese solo números.</h2>
    `
    pizzaContainer.appendChild(error)

    return;
  }

  if(isValid(getId())){

  const pizzaCard=document.createElement('div')
  pizzaCard.innerHTML=createCard(pizzas.find((pizza)=>
      pizza.id===getId()
    ))
 
    
  pizzaContainer.appendChild(pizzaCard)

  }else{
    const errorCard=document.createElement('div')
    errorCard.innerHTML=
    `<h2>Esta pizza no existe</h2>`

    pizzaContainer.appendChild(errorCard)
  }

}

// const noNumberError=()=>{
//   if(typeof(pizzaInput.value)!=='number'){
//     const error=document.createElement('div')
//     error.innerHTML=`
//     <h2>Ingrese solo números.</h2>
//     `
//     pizzaContainer.appendChild(error)
//   }
// }







const init=()=>{
  button.addEventListener('click',()=>{
    renderCard()

  })


}

init()


