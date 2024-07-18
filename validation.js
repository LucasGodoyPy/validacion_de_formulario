function emailValidation() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const emailConfirm = document.getElementById('email_confirm');
  
    const validateEmailMatch = () => {
      if (email.value !== emailConfirm.value) {
        emailConfirm.classList.add('input-error');
        displayMessage("Correo electrónico no coincidente.");
      } else {
        emailConfirm.classList.remove('input-error');
        removeMessage();
      }
    };
  
    const displayMessage = (msg) => {
      let element = document.querySelector('.alert');
      if (!element) {
        element = document.createElement('p');
        element.classList.add('alert');
        form.appendChild(element);
      }
      element.textContent = msg;
    };
  
    const removeMessage = () => {
      const element = document.querySelector('.alert');
      if (element) {
        form.removeChild(element);
      }
    };
  
    emailConfirm.addEventListener('input', validateEmailMatch);
  
    form.addEventListener('submit', e => {
      validateEmailMatch();
      if (email.value !== emailConfirm.value) {
        e.preventDefault();
      }
    });
  }
  
  window.onload = emailValidation;
  