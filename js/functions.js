function stringLengthCheck(myString, maxLength) {
  return myString.length <= maxLength;
}

stringLengthCheck('проверяемая строка', 20);
stringLengthCheck('проверяемая строка', 18);
stringLengthCheck('проверяемая строка', 10);
