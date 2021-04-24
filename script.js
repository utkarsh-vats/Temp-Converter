let column1 = document.getElementById("col1");
let column2 = document.getElementById("col2");
let columnInput1 = document.getElementById("col1-input");
let columnInput2 = document.getElementById("col2-input");

let conversionTable = [
//to.. celsius                   fahrenheit            kelvin                      rankine              reaumur                 ..form
    [{m: 1, c: 0},            {m: 1.8, c: 32},      {m: 1, c: 273.15},          {m: 1.8, c: 491.67},  {m: 0.8, c: 0}],          //celsius
    [{m: (5/9), c: (-160/9)}, {m: 1, c: 0},         {m: (5/9), c: (2298.35/9)}, {m: 1, c: 459.67},    {m: (4/9), c: (-128/9)}], //fahrenheit
    [{m: 1, c: -273.15},      {m: 1.8, c: -459.67}, {m: 1, c: 0},               {m: 1.8, c: 0},       {m: 0.8, c: -218.52}],    //kelvin
    [{m: (5/9), c: -273.15},  {m: 1, c: -459.67},   {m: (5/9), c: 0},           {m: 1, c: 0},         {m: (4/9), c: -218.52}],  //rankine
    [{m: 1.25, c: 0},         {m: 2.25, c: 32},     {m: 1.25, c: 273.15},       {m: 2.25, c: 273.15}, {m: 1, c: 0}]             //reaumur
];

// let massTable = [

];

function convertAtoB() {
    let m = conversionTable[column1.selectedIndex][column2.selectedIndex].m;
    let c = conversionTable[column1.selectedIndex][column2.selectedIndex].c;

    columnInput2.value = `${(Math.round((parseFloat(columnInput1.value) * m + c) * Math.pow(10, 8)))/Math.pow(10, 8)}`;
}

function convertBtoA() {
    let m = conversionTable[column2.selectedIndex][column1.selectedIndex].m;
    let c = conversionTable[column2.selectedIndex][column1.selectedIndex].c;

    columnInput1.value = `${(Math.round((parseFloat(columnInput2.value) * m + c) * Math.pow(10, 8)))/Math.pow(10, 8)}`;
}

convertAtoB();