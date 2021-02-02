const students = [
    {id: 21, name: "omar sunny"},
    {id: 31, name: "Manna"},
    {id: 41, name: "Mousomi"},

];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
//useing filter

const bigger = students.filter(s => s.id>40);
console.log(bigger);