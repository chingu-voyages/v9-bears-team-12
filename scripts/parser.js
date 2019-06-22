const affortableRentalData = require("../data/affordable_rental_developments.json");

// [ [lat, long] ]
let mapDataArray = [];

Object.keys(affortableRentalData.data).forEach(key => {
  const value = affortableRentalData.data[key];
  mapDataArray.push([value[19], value[20]]) // [lat, long]
})

console.log(mapDataArray);