document.querySelectorAll('.modal-close-button, .modal-container').forEach(element => {
  element.addEventListener('click', () => {
    document.querySelector('.modal-container').classList.add('modal-container-close');
  });
});

document.querySelector('.modal-container .modal').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelector('.modal-opening').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.modal-container').classList.remove('modal-container-close');
});
