document.addEventListener('DOMContentLoaded', function() {

    // Elementos del modal
    const modal = document.getElementById('authModal');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const closeModalBtn = document.querySelector('.close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const loginFormDiv = document.getElementById('loginForm');
    const registerFormDiv = document.getElementById('registerForm');
    const switchToRegisterLink = document.getElementById('switchToRegister');
    const switchToLoginLink = document.getElementById('switchToLogin');

    // Función para abrir modal
    function openModal(tabToShow) {
        if (!modal) return;
        modal.style.display = 'flex';
        if (tabToShow === 'register') {
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-tab') === 'register') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            if (loginFormDiv) loginFormDiv.classList.remove('active-form');
            if (registerFormDiv) registerFormDiv.classList.add('active-form');
        } else {
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-tab') === 'login') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            if (loginFormDiv) loginFormDiv.classList.add('active-form');
            if (registerFormDiv) registerFormDiv.classList.remove('active-form');
        }
    }

    // Función para cerrar modal
    function closeModal() {
        if (modal) modal.style.display = 'none';
    }

    // Verificar que los elementos existan antes de agregar eventos
    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('register');
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Cambio de pestañas
    if (tabBtns.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                if (tab === 'login') {
                    if (loginFormDiv) loginFormDiv.classList.add('active-form');
                    if (registerFormDiv) registerFormDiv.classList.remove('active-form');
                } else {
                    if (loginFormDiv) loginFormDiv.classList.remove('active-form');
                    if (registerFormDiv) registerFormDiv.classList.add('active-form');
                }
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Switches dentro del modal
    if (switchToRegisterLink) {
        switchToRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-tab') === 'register') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            if (loginFormDiv) loginFormDiv.classList.remove('active-form');
            if (registerFormDiv) registerFormDiv.classList.add('active-form');
        });
    }

    if (switchToLoginLink) {
        switchToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-tab') === 'login') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            if (loginFormDiv) loginFormDiv.classList.add('active-form');
            if (registerFormDiv) registerFormDiv.classList.remove('active-form');
        });
    }

    // Botones de login y registro demo
    const doLoginBtn = document.getElementById('doLogin');
    const doRegisterBtn = document.getElementById('doRegister');

    if (doLoginBtn) {
        doLoginBtn.addEventListener('click', () => {
            const email = document.getElementById('loginEmail').value.trim();
            const pass = document.getElementById('loginPassword').value.trim();
            if(email === "" || pass === "") {
                alert("Por favor completa ambos campos.");
                return;
            }
            alert(`Bienvenido/a ${email} (demo). En una web real esto validaría credenciales.`);
            closeModal();
        });
    }

    if (doRegisterBtn) {
        doRegisterBtn.addEventListener('click', () => {
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPassword').value;
            const confirm = document.getElementById('regConfirm').value;
            if(!name || !email || !pass || !confirm) {
                alert("Todos los campos son necesarios.");
                return;
            }
            if(pass !== confirm) {
                alert("Las contraseñas no coinciden.");
                return;
            }
            alert(`¡Gracias por registrarte ${name}! Revisa tu correo (demo).`);
            closeModal();
        });
    }

});