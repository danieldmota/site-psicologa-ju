  const buttons = document.querySelectorAll('.read-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.classList.toggle('active');

      button.textContent = card.classList.contains('active') ? 'Ler menos' : 'Ler mais';
    });
  });