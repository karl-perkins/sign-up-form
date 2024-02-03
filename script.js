const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password-confirm');
const passwordErrorMessage = document.querySelector('#password-error-message');

confirmPassword.addEventListener('keyup', (e) => {
  if (confirmPassword.value !== password.value) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    passwordErrorMessage.textContent = '* Passwords do not match'
  } else {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
    passwordErrorMessage.textContent = ''
  }
});