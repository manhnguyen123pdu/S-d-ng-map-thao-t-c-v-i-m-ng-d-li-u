const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];
// cach 1 
let Arrname=birds.map(function(bird){
    return bird.Name;
})
console.log(Arrname)

// cach 2
let Arrname1=new Map()
for(i=0;i<birds.length;i++){
    Arrname1.set(i,birds[i].Name)
}
console.log(Arrname)