const refs = {
    openModalBtn: document.getElementById('openModalBtn'),
    closeModalBtn: document.getElementById('colseMoadalBtn'),
    modalWindow: document.getElementById('modalWindow'),

    openMenuBtn: document.getElementById('openMenuBtn'),
    closeMenuBtn: document.getElementById('closeMenuBtn'),
    menuWindow: document.getElementById('menuWindow')
};

refs.openModalBtn.addEventListener('click', () => { refs.modalWindow.classList.toggle('is-open') });
refs.closeModalBtn.addEventListener('click', () => { refs.modalWindow.classList.toggle('is-open') });

refs.openMenuBtn.addEventListener('click', () => { refs.menuWindow.classList.toggle('is-open') });
refs.closeMenuBtn.addEventListener('click', () => { refs.menuWindow.classList.toggle('is-open') });