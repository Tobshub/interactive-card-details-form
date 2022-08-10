const holderNameInput = document.getElementById('cardholder-input');
const holderName = document.querySelector('.card-holder-name-front');

holderNameInput.addEventListener('keyup',()=>{
  let name = holderNameInput.value.toUpperCase();
    holderName.innerHTML = (name.length===0)? 'JANE APPLESEED' : name;
})

const cardNumberInput = document.getElementById('card-number-input');
const cardNumber = document.querySelector('.card-number-front');

cardNumberInput.addEventListener('keyup',()=>{
  let num = cardNumberInput.value.toString();
  cardNumber.innerHTML = (num.length===0)? '0000 0000 0000 0000' : num;
})
cardNumberInput.addEventListener('keypress',()=>{
  let num = cardNumberInput.value.toString();
  cardNumber.innerHTML = num;
  if(num.length===4 ||num.length===9 || num.length===14){
    cardNumberInput.value+= ' ';
  }
})

const cardMonthInput = document.getElementById('exp-date-month-input');
const cardMonthExp = document.getElementById('card-front-month');

cardMonthInput.addEventListener('keyup',()=>{
  let month = cardMonthInput.value.toString();
  if(parseInt(month)>12){
    cardMonthInput.setCustomValidity('This number is too high');
  }else if(parseInt(month)<1){
    cardMonthInput.setCustomValidity('This number is too low');
  }else {
    cardMonthInput.setCustomValidity('');
  }
  month = (month.length===1)? '0'+month : month;
  cardMonthExp.innerHTML = (month.length===0)? '00' : month;
})

const cardYearInput = document.getElementById('exp-date-year-input');
const cardYearExp = document.getElementById('card-front-year');

cardYearInput.addEventListener('keyup',()=>{
  let year = cardYearInput.value.toString();
  cardYearExp.innerHTML = (year.length===0)? '00' : year;
})

const cardCVC = document.querySelector('.card-cvc');
const cardCVCInput = document.getElementById('cvc-input');

cardCVCInput.addEventListener('keyup', ()=>{
  let val = cardCVCInput.value.toString();
  cardCVC.innerHTML = (val.length===0)? '000' : val;
})

let submitBtn = document.getElementById('info-submit');
submitBtn.addEventListener('click',()=>{
  if(cardMonthInput.value=='') {
    cardMonthInput.setCustomValidity(`Can't be blank`);

  } else {
    cardMonthInput.setCustomValidity(``);
  }
  if(cardYearInput.value=='') {
    cardYearInput.setCustomValidity(`Can't be blank`);
  } else {
    cardYearInput.setCustomValidity(``);
  }
  if(holderNameInput.value=='') {
    holderNameInput.setCustomValidity(` `);
    holderNameInput.classList.add('invalid-empty');
  } else {
    holderNameInput.setCustomValidity(``);
  }
  if(cardNumberInput.value=='') {
    cardNumberInput.setCustomValidity(`Can't be blank`);
  } else {
    cardNumberInput.setCustomValidity(``)
  }
  if(cardCVCInput.value=='') {
    cardCVCInput.setCustomValidity(`Can't be blank`);
  } else {
    cardCVCInput.setCustomValidity(``);
  }
  
  //do not tamper with this:
  sessionStorage.NAME = holderNameInput.value.toUpperCase();
  sessionStorage.CARD_NUM = cardNumberInput.value.toString();
  sessionStorage.CARD_EXP_DATE = `${cardMonthInput.value.toString()}/${cardYearInput.value.toString()}`;
  sessionStorage.CARD_CVC = cardCVCInput.value.toString();
})




  