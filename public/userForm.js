function validateForm() {
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirm-password');
    var passwordError = document.getElementById('password-error');
    var confirmPasswordError = document.getElementById('confirm-password-error');

    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      return false;
    } else {
      confirmPasswordError.textContent = '';
    }

    return true;
  }