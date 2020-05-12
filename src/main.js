import harryData from './data/potter/potter.js';
import {houseG} from './data.js';
const seleccionadoG = houseG(harryData)
import {houseS} from './data.js';
const seleccionadoS = houseS(harryData)
import {houseR} from './data.js';
const seleccionadoR = houseR(harryData)
import {houseH} from './data.js';
const seleccionadoH = houseH(harryData)
import {san} from './data.js';
const seleccionadoPura= san(harryData)
import {mes} from './data.js';
const seleccionadoMestizo = mes(harryData)
import {hij} from './data.js';
const seleccionadoSucia = hij(harryData)
import {squi} from './data.js';
const seleccionadoSquib = squi (harryData)  
import {est} from './data.js';
const seleccionadoE = est (harryData)
import {sta} from './data.js';
const seleccionadoST = sta (harryData)
import {Otras} from './data.js';
const seleccionadoCriaturas = Otras (harryData)
import {orderharryAz} from './data.js';
const orderedDataAz = orderharryAz (harryData)
import {orderharryZa} from './data.js';
const orderedDataZa = orderharryZa (harryData)



document.getElementById("left-logo").style.visibility= "hidden";
document.getElementById("link-todos").addEventListener("click", enterTodos);
function enterTodos() {
  document.getElementById("left-logo").style.visibility = "visible";
  document.getElementById("pantalla-inicio").style.visibility= "hidden";
// cards
for (let i=0; i< harryData.length; i++ ) {
  let harryCard = document.createElement("div");
  harryCard.className="harryCards";
  harryCard.id="harryCards";
  let harryimage= document.createElement("img");
  harryimage.className="harry-image";
  harryimage.src = harryData[i].image;
  let harryName= document.createElement("h3");
  harryName.className="harry-names";
  harryName.textContent=harryData[i].name;
  let harryDob= document.createElement("p");
  harryDob.className="dateofb";
  harryDob.textContent=harryData[i].dateOfBirth;
  let harrySpecies= document.createElement("p");
   harrySpecies.textContent= harryData[i].species;
   harrySpecies.className = "species";
  let harryAncestry = document.createElement("p");
   harryAncestry.textContent = harryData[i].ancestry;
   let harryPatronus = document.createElement("p");
   harryPatronus.textContent = harryData[i].patronus;
   let harryStatus = document.createElement("p");
   harryStatus.textContent = harryData[i].alive;
   harryCard.appendChild(harryimage);
   harryCard.appendChild(harryName);
   harryCard.appendChild(harryDob);
   harryCard.appendChild(harrySpecies);
   harryCard.appendChild(harryAncestry);
   harryCard.appendChild(harryPatronus);
  harryCard.appendChild(harryStatus);
   document.getElementById("results").appendChild(harryCard).innerHTML;
  }}
  let results = document.getElementById("results");
  document.getElementById("gry").addEventListener("click", ()=>{
    var div = document.getElementById('results');
while(div.firstChild){
    div.removeChild(div.firstChild);
}
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("left-logo").style.visibility = "visible";
    let houseGryffindor = seleccionadoG;
    for (let i=0; i <houseGryffindor.length; i++){
        results.innerHTML +=
        `<div class = "harryCards">
         <img class="harry-image" src= ${houseGryffindor[i].image}>
         <li class= "nombre" >Nombre: ${houseGryffindor[i].name}
         <li class= "descripcion" >Especie: ${houseGryffindor[i].species}
         <li class= "descripcion"> Casa: ${houseGryffindor[i].house}
         <li class= "descripcion"> Linaje: ${houseGryffindor[i].ancestry}
         <li class= "descripcion"> Varita: ${houseGryffindor[i].wand.wood} ${houseGryffindor[i].wand.core} ${houseGryffindor[i].wand.length}
         <li class= "descripcion"> Cumpleaños: ${houseGryffindor[i].dateOfBirth}
         </div>`
       // console.log(houseGryffindor)
    }
})
     document.getElementById("sly").addEventListener("click", ()=>{
      var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
      document.getElementById("left-logo").style.visibility = "visible";
      document.getElementById("pantalla-inicio").style.display = "none";
    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
    results.innerHTML +=
     `<div class = "harryCards">
    <img class="harry-image" src= ${houseSlytherin[i].image}
    <li class= "nombre" >Nombre: ${houseSlytherin[i].name}
    <li class= "descripcion" >Especie: ${houseSlytherin[i].species}
    <li class= "descripcion"> Casa: ${houseSlytherin[i].house}
    <li class= "descripcion"> Linaje: ${houseSlytherin[i].ancestry}
    <li class= "descripcion"> Varita: ${houseSlytherin[i].wand.wood} ${houseSlytherin[i].wand.core} ${houseSlytherin[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${houseSlytherin[i].dateOfBirth}
        </div>`
     // console.log(houseSlytherin)
  }
})
document.getElementById("rav").addEventListener("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";
  let houseRavenclaw = seleccionadoR;
  for (let i=0; i <houseRavenclaw.length; i++){
    results.innerHTML += `<div class = "harryCards">
     <img class="harry-image" src= ${houseRavenclaw[i].image}>
     <li class= "nombre" >Nombre: ${houseRavenclaw[i].name}
     <li class= "descripcion" >Especie: ${houseRavenclaw[i].species}
     <li class= "descripcion"> Casa: ${houseRavenclaw[i].house}
     <li class= "descripcion"> Linaje: ${houseRavenclaw[i].ancestry}
     <li class= "descripcion"> Varita: ${houseRavenclaw[i].wand.wood} ${houseRavenclaw[i].wand.core} ${houseRavenclaw[i].wand.length}
     <li class= "descripcion"> Cumpleaños: ${houseRavenclaw[i].dateOfBirth}
        </div>`
     // console.log(houseRavenclaw)
  }
})
document.getElementById("huf").addEventListener("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";
  let houseHufflepuff = seleccionadoH;
  for (let i=0; i <houseHufflepuff.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${houseHufflepuff[i].image}>
    <li class= "nombre" >Nombre: ${houseHufflepuff[i].name}
    <li class= "descripcion" >Especie: ${houseHufflepuff[i].species}
    <li class= "descripcion"> Casa: ${houseHufflepuff[i].house}
    <li class= "descripcion"> Linaje: ${houseHufflepuff[i].ancestry}
    <li class= "descripcion"> Varita: ${houseHufflepuff[i].wand.wood} ${houseHufflepuff[i].wand.core} ${houseHufflepuff[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${houseHufflepuff[i].dateOfBirth}
        </div>`
     // console.log(houseHufflepuff)
  }
})

document.getElementById("est").addEventListener ("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";
  
  let students = seleccionadoE;
  for (let i=0; i<students.length; i++){
    results.innerHTML += `<div class = "harryCards">
  <img class="harry-image" src= ${students[i].image}>
  <li class= "nombre" >Nombre: ${students[i].name}
  <li class= "descripcion" >Especie: ${students[i].species}
  <li class= "descripcion"> Casa: ${students[i].house}
  <li class= "descripcion"> Linaje: ${students[i].ancestry}
  <li class= "descripcion"> Varita: ${students[i].wand.wood} ${students[i].wand.core} ${students[i].wand.length}
  <li class= "descripcion"> Cumpleaños: ${students[i].dateOfBirth}
        </div>`
  
}
})


document.getElementById("sta").addEventListener ("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";
  
  let staff = seleccionadoST;
  for (let i=0; i<staff.length; i++){
    results.innerHTML += `<div class = "harryCards">
  <img class="harry-image" src= ${staff[i].image}>
  <li class= "nombre" >Nombre: ${staff[i].name}
  <li class= "descripcion" >Especie: ${staff[i].species}
  <li class= "descripcion"> Casa: ${staff[i].house}
  <li class= "descripcion"> Linaje: ${staff[i].ancestry}
  <li class= "descripcion"> Varita: ${staff[i].wand.wood} ${staff[i].wand.core} ${staff[i].wand.length}
  <li class= "descripcion"> Cumpleaños: ${staff[i].dateOfBirth}
        </div>`
  
}
})

//Seleccionador linaje
document.getElementById("san").addEventListener("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("left-logo").style.visibility = "visible";
  let pureblood = seleccionadoPura;
  for (let i=0; i<pureblood.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${pureblood[i].image}>
    <li class= "nombre" >Nombre: ${pureblood[i].name}
    <li class= "descripcion" >Especie: ${pureblood[i].species}
    <li class= "descripcion"> Casa: ${pureblood[i].house}
    <li class= "descripcion"> Linaje: ${pureblood[i].ancestry}
    <li class= "descripcion"> Varita: ${pureblood[i].wand.wood} ${pureblood[i].wand.core} ${pureblood[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${pureblood[i].dateOfBirth}
          </div>`
  }
}
)
document.getElementById("mes").addEventListener("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("left-logo").style.visibility = "visible";
  document.getElementById("pantalla-inicio").style.display = "none";
  let mestizo = seleccionadoMestizo;
  for (let i=0; i<mes.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${mestizo[i].image}>
    <li class= "nombre" >Nombre: ${mestizo[i].name}
    <li class= "descripcion" >Especie: ${mestizo[i].species}
    <li class= "descripcion"> Casa: ${mestizo[i].house}
    <li class= "descripcion"> Linaje: ${mestizo[i].ancestry}
    <li class= "descripcion"> Varita: ${mestizo[i].wand.wood} ${mestizo[i].wand.core} ${mestizo[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${mestizo[i].dateOfBirth}
          </div>`
  }
})
document.getElementById("hij").addEventListener("click", ()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("left-logo").style.visibility = "visible";    
  document.getElementById("pantalla-inicio").style.display = "none";
  let muggleborn = seleccionadoSucia;
  for (let i=0; i<muggleborn.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${muggleborn[i].image}>
    <li class= "nombre" >Nombre: ${muggleborn[i].name}
    <li class= "descripcion" >Especie: ${muggleborn[i].species}
    <li class= "descripcion"> Casa: ${muggleborn[i].house}
    <li class= "descripcion"> Linaje: ${muggleborn[i].ancestry}
    <li class= "descripcion"> Varita: ${muggleborn[i].wand.wood} ${muggleborn[i].wand.core} ${muggleborn[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${muggleborn[i].dateOfBirth}
          </div>`
  }
})
document.getElementById("squ").addEventListener("click",()=>{
  var div = document.getElementById('results');
      while(div.firstChild){
          div.removeChild(div.firstChild);
      }
  document.getElementById("left-logo").style.visibility = "visible";
  document.getElementById("pantalla-inicio").style.display = "none";
  let squib= seleccionadoSquib;
  for (let i=0; i<squib.length; i++){
    results.innerHTML += `<div class = "harryCards">
    <img class="harry-image" src= ${squib[i].image}>
    <li class= "nombre" >Nombre: ${squib[i].name}
    <li class= "descripcion" >Especie: ${squib[i].species}
    <li class= "descripcion"> Casa: ${squib[i].house}
    <li class= "descripcion"> Linaje: ${squib[i].ancestry}
    <li class= "descripcion"> Varita: ${squib[i].wand.wood} ${squib[i].wand.core} ${squib[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${squib[i].dateOfBirth}
     </div>`
  }
  })

  document.getElementById("Otras").addEventListener("click", ()=>{
    var div = document.getElementById('results');
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
    document.getElementById("left-logo").style.visibility = "visible";   
    document.getElementById("pantalla-inicio").style.display = "none";
    let criaturas  = seleccionadoCriaturas;
    for (let i=0; i<criaturas.length; i++){
      results.innerHTML += `<div class = "harryCards">
      <img class="harry-image" src= ${criaturas[i].image}>
      <li class= "nombre" >Nombre: ${criaturas[i].name}
      <li class= "descripcion" >Especie: ${criaturas[i].species}
      <li class= "descripcion"> Casa: ${criaturas[i].house}
      <li class= "descripcion"> Linaje: ${criaturas[i].ancestry}
      <li class= "descripcion"> Varita: ${criaturas[i].wand.wood} ${criaturas[i].wand.core} ${criaturas[i].wand.length}
      <li class= "descripcion"> Cumpleaños: ${criaturas[i].dateOfBirth}
            </div>`
    }
  })

  function viewAllharry (harryData) {
    let cardTemplate = ""; 
    for (let i = 0; i < harryData.length; i++) {
      cardTemplate  += `<div class = "harryCards">
      <img class="harry-image" src= ${harryData[i].image}>
      <li class= "nombre" >Nombre: ${harryData[i].name}
      </div>`
      results.innerHTML = cardTemplate
    }}
  
  const  selectElement=document.querySelector(".dropdown-select");
  selectElement.addEventListener("change",(e) => {
    const resultado =`${e.target.value}`;
    
    if  (resultado === "A-Z"){
      viewAllharry(orderedDataAz);
    }
    else if (resultado === "Z-A"){
      viewAllharry(orderedDataZa);
    }
  });