document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked ${button.textContent}`);
    });
  });
  