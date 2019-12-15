import '../styles/index.scss';

function calculateBet(howbet, coef) {
  return howbet * coef;
}

function calculateWin(result, howBet) {
  return result - howBet;
}


const calculatorButtonSubmit = document.getElementById('calculatorButtonSubmit');
const yourPays = document.getElementById('yourPays');
const calculatorWrapperInner = document.getElementById('calculatorWrapperInner');

calculatorButtonSubmit.addEventListener('click', () => {
  const howBetValue = document.getElementById('howBet').value;
  const coefficientValue = document.getElementById('coefficient').value;

  if (!(howBetValue && coefficientValue)) return;

  const result = calculateBet(howBetValue, coefficientValue);
  yourPays.value = result;
  calculatorWrapperInner.classList.toggle('hidden');
  calculatorWrapperInner.classList.toggle('visible');

  const winSum = document.getElementById('winSum');
  winSum.value = calculateWin(result, howBetValue);
  winSum.classList.add('greenColor');

  calculatorButtonSubmit.innerHTML = 'Посчитать';
  calculatorButtonSubmit.classList.toggle('blue');
  calculatorButtonSubmit.classList.toggle('red');
});

