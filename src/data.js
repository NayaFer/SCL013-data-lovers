//export const filtrado = (data, propiedad, valor ) => {
 // return data.filter ((a) => (a[propiedad] === valor ));

//export const filterData = (data, condition) => {

 // console.log(data);
 // console.log(condition);
//}


export const houseG = (harryData) => {
  let houseGryffindor = harryData.filter ( data =>
    data.house === "Gryffindor");
    return houseGryffindor;
  }

  export const houseS = (harryData) => {
    let houseSlytherin = harryData.filter ( data =>
      data.house === "Slytherin");
      return houseSlytherin;
    }

  export const houseR = (harryData) => {
      let houseRavenclaw = harryData.filter ( data =>
        data.house === "Ravenclaw");
        return houseRavenclaw;
   }
  
export const houseH = (harryData) => {
let houseHufflepuff = harryData.filter ( data =>
data.house === "Hufflepuff");
return houseHufflepuff;
   }

   export const san = (harryData) => {
    let pureblood= harryData.filter (data =>
    data.ancestry === "sangre-pura");
     return pureblood;
        }
  export const mes = (harryData) => {
   let mes = harryData.filter (data=>
    data.ancestry === "mestizo");
   return mes;
       }     

   export const hij = (harryData) => {
   let muggleborn = harryData.filter ( data =>
    data.ancestry === "muggles");
    return muggleborn;
      }    

 export const squi = (harryData) => {
   let squib = harryData.filter (data =>
     data.ancestry === "squib");
     return squib;
      } 
   
 export const est  = (harryData) => {
    let students  = harryData.filter (data =>
      data.hogwartsStudent  ===  true);
      return students;
      
      }

 export const sta  = (harryData) => {
   let staff  = harryData.filter (data =>
     data.hogwartsStaff  ===  true);
      return staff;
   }

  export const otras = (harryData) => {
    let criaturas = harryData.filter (data =>
      data.species ===  "gata" || data.species === "gigante" || data.species === "hombre-lobo");
      
      return criaturas ;
  }     

    //Ordena harry por nombre de la A a la Z
export const orderharryAz = (harryData)=>{
  const newDataArray = [];
  for (let i = 0; i < harryData.length; i++) {
    newDataArray.push(harryData[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    else if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return newDataArray;
};

//Ordena harry por nombre de la Z a la A
export const orderharryZa = (harryData)=>{
  const newDataArray = [];
  for (let i = 0; i < harryData.length; i ++) {
    newDataArray.push(harryData[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    else if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return newDataArray;
};