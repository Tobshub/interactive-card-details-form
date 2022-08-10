document.querySelector('.card-cvc').innerHTML = sessionStorage.CARD_CVC;
document.querySelector('.card-number-front').innerHTML = sessionStorage.CARD_NUM;
document.querySelector('.card-holder-name-front').innerHTML = sessionStorage.NAME;
document.querySelector('.card-exp-front').innerHTML = sessionStorage.CARD_EXP_DATE;
console.log(sessionStorage.NAME, sessionStorage.CARD_NUM);