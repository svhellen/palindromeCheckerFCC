let text =
  "Hello, world! This is an example: 1234 with some spaces.nÃO â á áá´é è ç ,,<<.>>+-_[][[)*&$%#@!;?";
const resultText = document.querySelector("#result");

function cleanTheInput(userInput) {
  return userInput
    .toLowerCase()
    .replace(/[^a-zA-Z\d:\u00C0-\u00FF]/g, "");
}

function checkIfItsPalindrome() {
  const userInput = document.querySelector("#text-input").value;
  if (userInput === "") {
    resultText.innerText = "Please input a value";
  } else {
    const cleanedUserInput = cleanTheInput(userInput);
    const isPalindrome = analiseString(cleanedUserInput);

    return (resultText.innerText = isPalindrome
      ? `${userInput} is a palindrome`
      : `${userInput} is not a palindrome`);
  }
}

function analiseString(string) {
  if (string.length > 0) {
    if (string[0] === string[string.length - 1]) {
      return analiseString(string.slice(1, -1));
    } else {
      return false;
    }
  }

  return true;
}
