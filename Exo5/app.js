function displayResult(){
  var firstNumber = document.getElementById('first').value;
  var secondNumber = document.getElementById('second').value;
  result = firstNumber * secondNumber;
  if(firstNumber && secondNumber){
      alert ('Le resultat est :' + (result));
  }else {
    alert ('Faut remplir on a dit là!')
  }
}
