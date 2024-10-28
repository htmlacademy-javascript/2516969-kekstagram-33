function stringLengthCheck(myString, maxLength) {
  return myString.length <= maxLength;
}

stringLengthCheck('проверяемая строка', 20);
stringLengthCheck('проверяемая строка', 18);
stringLengthCheck('проверяемая строка', 10);


function checkForPalindrom(myString){
  let newString = '';
  myString = myString.replaceAll(' ', '').toLowerCase();
  for (let i = myString.length - 1; i >= 0; i--) {
    newString += myString[i];
  }
  return newString === myString;
}

checkForPalindrom('топот');
checkForPalindrom('ДовОд');
checkForPalindrom('Кекс');
checkForPalindrom('Лёша на полке клопа нашёл ');


function findNumber(myString) {
  let stringNumber = '';
  if(typeof myString === 'number') {
    myString = myString.toString();
  }
  for (let i = 0; i <= myString.length - 1; i++) {
    if(!Number.isNaN(parseInt(myString[i], 10))) {
      stringNumber += myString[i];
    }
  }
  return parseInt(stringNumber, 10);
}

findNumber('2023 год');
findNumber('ECMAScript 2022');
findNumber('1 кефир, 0.5 батона');
findNumber('агент 007');
findNumber(125);
findNumber('sjfnvifjv');
