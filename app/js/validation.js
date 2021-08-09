document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('#sendform');
  const formInput = form.querySelectorAll('.contact__form-input');
  const formItem = Array.from(formInput);

  
function checkForEmpty(value){
  return !value;
}

function validation(){
  for(let i = 0; i <= formItem.length; i++){
    const currentInput = formItem[i];
    let isEmpty;
    if(currentInput.value.length === 0){
      isEmpty = checkForEmpty(currentInput.value);
    }
    if(isEmpty){
      currentInput.classList.add('error-marker');
      currentInput.setAttribute('placeholder', 'this field must be filled');
    }
  }
}
function deleteError() {
  const error = document.querySelectorAll('.error-marker');
  for(let i = 0; i < error.length; i++){
    error[i].classList.remove('error-marker');
  }
  validation();
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  deleteError();
});
 
});
