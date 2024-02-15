function plaadid(plaat:number, vuuk:number, laius:number, pikkus:number):number{

    //teisendamine
    plaat=plaat*10;
    laius=laius*1000;
    pikkus=pikkus*1000;


    //arvutused
    let laius_plaadid:number= Math.ceil((laius+vuuk)/(plaat+vuuk));
    let pikkus_plaadid:number= Math.ceil((pikkus+vuuk)/(plaat+vuuk));
    let plaadid_kokku:number= laius_plaadid*pikkus_plaadid;

    //väljatrükk
    console.log("Pikkupidi läheb "+ pikkus_plaadid+" plaati vaja");
    console.log("Laiupidi läheb "+ laius_plaadid+" plaati vaja");
    console.log("Vaja läheb vähemalt "+ plaadid_kokku+" plaati");
    return plaadid_kokku;
}

console.log(plaadid(19.5, 3, 4, 6));

//väljatrükk

/* 

console.log(plaadid(19.5, 5, 0.4, 0.6));

Pikkupidi läheb 4 plaati vaja
Laiupidi läheb 3 plaati vaja
Vaja läheb vähemalt 12 plaati */
