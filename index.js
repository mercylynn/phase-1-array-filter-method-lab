// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array,name){

const matchingDrivers = array.filter((m) =>
m.toLowerCase().includes(name.toLowerCase())
);
return matchingDrivers;
}
function fuzzyMatch(array, string) {
    let length = string.length;
    const matchNames = array.filter((m) => m.slice(0, length) === string);
    return matchNames;
  }
  function matchName(array, nameInput) {
    let matchingDriverNames = array.filter((m) => m.name === nameInput);
    return matchingDriverNames;
  }