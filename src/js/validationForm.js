const form = document.getElementById('form');
const button = document.getElementById('button');

const validationForm = () => {
  const span = document.createElement('SPAN');
  span.textContent = 'Form Submit!!';
  span.classList.add('submit');
  button.insertAdjacentElement('afterend', span);

  form.addEventListener('submit', (e) => {
    span.classList.add('submit--active');
    e.preventDefault();
  });
};

export default validationForm;
