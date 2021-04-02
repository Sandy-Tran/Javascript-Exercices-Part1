
const person = prompt('Entre ton prénom');

if(isNaN(person) && person == '') {
  alert(`Bonjour ${person}`);
} else{
  alert("L'utilisateur a annulé.");
}
