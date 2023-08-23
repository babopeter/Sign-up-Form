var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    password.style.borderColor = 'red';
    confirm_password.style.borderColor = 'red';
  } else if (password.value == confirm_password.value) {
    confirm_password.setCustomValidity('');
    password.style.borderColor = 'black';
    confirm_password.style.borderColor = 'black';
  } else if (password.value == '' && confirm_password.value == ''){
    confirm_password.setCustomValidity('');
    password.style.borderColor = 'black';
    confirm_password.style.borderColor = 'black';
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;