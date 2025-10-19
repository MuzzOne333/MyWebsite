(() => {
    'use strict';

    window.addEventListener('load', () => {
        const form = document.querySelector('.needs-validation');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords do not match");
            } else {
                confirmPassword.setCustomValidity("");
            }

            form.classList.add('was-validated');
        }, false);
    });
})();
