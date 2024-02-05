function kehamassiIndeks(pikkus:number, mass:number){
  pikkus=pikkus/100;
  return mass/(pikkus*pikkus);
}


console.log((kehamassiIndeks(152, 60)).toFixed(2));

function kmiHinnang(indeks:number):string{
  if(indeks<16){return "Tervisele ohtlik alakaal";}
  if(indeks<18.5){return "Alakaal";}
  if(indeks<25){return "Normaalkaal";}
  if(indeks<30){return "Ülekaal";}
  if(indeks<35){return "Rasvumine";}
  if(indeks<40){return "Tugev rasvumine";}
  return "Tervisele ohtlik ülekaal;"
}
console.log(kmiHinnang(kehamassiIndeks(152, 60)));

let kmiArvud:number[]=[25, 18, 38, 28];
let hinnangud=kmiArvud.map(kmiHinnang);
console.log(hinnangud);