const count = document.getElementById('count');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

let counter = 0;

const upDate = (v) => {
  counter = counter + v;
  count.innerText = counter;

  if (counter >= 10) {
    plus.setAttribute('disabled', true);
  } 
  else {
    plus.removeAttribute('disabled', false);
  }


  if (counter <= 0) {
    minus.setAttribute('disabled', true);

  } 
  else {
   minus.removeAttribute('disabled', false); 
  }

};



plus.addEventListener('click', () => {
  upDate(1);
});

minus.addEventListener('click', () => {
  upDate(-1);
});
