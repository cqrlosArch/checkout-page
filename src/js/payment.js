const sectionPayment = document.querySelector('.section-payment');

const counter = () => {
  sectionPayment.addEventListener('click', (e) => {
    if (e.target.matches('.counter__decrement')) {
      if (e.composedPath()[1].children.counter.value > 1) {
        e.composedPath()[1].children.counter.value--;
      }
    }
    if (e.target.matches('.counter__increment')) {
      if (e.composedPath()[1].children.counter.value < 10) {
        e.composedPath()[1].children.counter.value++;
      }
    }
  });
};

export default counter;
