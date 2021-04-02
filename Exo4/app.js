function displayInput() {
  var inputLastName = document.getElementById("lastname").value;
  var inputFirstName = document.getElementById("firstname").value;
  var inputCity = document.getElementById("city").value;

  if(inputLastName && inputFirstName && inputCity){
    alert(`Votre nom est : ${inputLastName} \n Votre prenom est : ${inputFirstName} \n Votre ville est : ${inputCity}`);
} else{
  alert("Remplis les champs jt'ai dit là!");
}
}
