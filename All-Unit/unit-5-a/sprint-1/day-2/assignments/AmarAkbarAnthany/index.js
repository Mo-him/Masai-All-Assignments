
function chnageSkill (borrowedSkill){
    this.skills = borrowedSkill;
}

function person(n, s, l){
    this.name = n,
    this.skills = s,
    this.location = l
}

var amar = new person ("Amar", "Singer", "Goa");
var akbar = new person ("Akbar", "Chef", "Mumbai");
var anthany = new person ("Anthany", "Magician", "Kashmir");

console.log("Original version");

console.log ("amar", amar);
console.log ("akbar", akbar);
console.log ("anthany", anthany);

chnageSkill.call(amar, "Chef");

console.log("Final version");

console.log ("amar", amar);
console.log ("akbar", akbar);
console.log ("anthany", anthany);
