// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.getElementById('closeBtn');
    const loginForm = document.getElementById('loginForm');

    // Abrir modal
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Prevenir cierre al hacer clic dentro del modal
    loginModal.querySelector('.login-box').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Manejar envío del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Aquí puedes agregar la lógica para procesar el login
        console.log({
            email,
            password,
            remember
        });
    });
});