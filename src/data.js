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

export const pure = (harryData) => {
let pureblood= harryData.filter (data =>
data.ancestry === "pure-blood");
 return pureblood;
    }
   
export const mestizo = (harryData) => {
 let mestizos = harryData.filter (data=>
 data.ancestry === "half-blood");
 return mestizos;
    }

    export const impure = (harryData) => {
      let muggleborn = harryData.filter ( data =>
        data.ancestry === "muggleborn");
        return muggleborn;
    }

    export const squibs = (harryData) => {
      let squib = harryData.filter (data =>
        data.ancestry === "squib");
        return squib;
    }