console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers){
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  return "The sum is: " + sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {};
    book.title = "The Hobbit";
    book.author = "J.R.R Tolkien";
    book.pages = 295;
    book.readCount = 3;
    book.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
    }

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(str) {
  let splitSentence = str.split(" ");
  let reversedWordsArray = [];

  splitSentence.forEach((element) => {
    let reversedWord = element.split("").reverse().join("");
    reversedWordsArray.push(reversedWord);
  });

  return reversedWordsArray.join(" ");
}

// Using Map
// function reverseWords(str) {
//   let reverseWordsArray = str.split(" ").map(word => word.split("").reverse().join(""));
//   return reverseWordsArray.join(" ");
// }

// Using regex
// function reverseStringByWord(str) {
//   return str.replace(/[a-zA-Z]+/gm, function(item) {    
//     return item.split('').reverse().join('');
//   });
// }

// Reverse entire sentence
// function reverseStringBySentence(str) {
//   return str.split('').reverse().join('');
// }

console.log(reverseWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(data) {
  let rows = data.split('\n');
  let myArray = [];
  let objLabel, objLabel2;

  rows.forEach((element, index) => {
    let myObj = {};
    let temp = element.split(',');
    if(index == 0) {
      objLabel = temp[0];
      objLabel2 = temp[1];
    } else {
        myObj[objLabel] = temp[0];
        myObj[objLabel2] = temp[1];
        myArray.push(myObj);
    }
  });

  return myArray;
}
console.log(parseCSV(csvData));