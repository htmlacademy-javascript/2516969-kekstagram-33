function stringLengthCheck(myString, maxLength) {
  return myString.length <= maxLength;
}

stringLengthCheck('проверяемая строка', 20);
stringLengthCheck('проверяемая строка', 18);
stringLengthCheck('проверяемая строка', 10);


function checkPalindrom(myString){
  let newString = '';
  myString = myString.replaceAll(' ', '').toLowerCase();
  for (let i = myString.length - 1; i >= 0; i--) {
    newString += myString[i];
  }
  return newString === myString;
}

checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кекс');
checkPalindrom('Лёша на полке клопа нашёл ');
