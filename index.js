const wordList = ["somebody", "anybody", "dobby", "robot", "root"];
const hiddenWord = "anybody";
// let dataBase = [];

// обрабатываю базу
const processedDB = processDB(wordList);

const galeryInsertionPoint = document.querySelector(".wordlist");
const buttonExecuter = document.querySelector(".button");
galeryInsertionPoint.addEventListener("click", (evt) =>
  // console.log(evt.target.name)
  similarityArrayCreator(parseInt(evt.target.name), processedDB)
);
// buttonExecuter.addEventListener("click", () => processDB(wordList));

// создаем разметку слов
const InsertionContent = createWordListMarkup(wordList);

galeryInsertionPoint.insertAdjacentHTML("afterbegin", InsertionContent);

// ----------------------------------------------------------------------------------------------------------------------------------------
function createWordListMarkup(arr) {
  //   console.log("arr", arr);
  return arr
    .map((el, index) => {
      return `<li name="${index}"><span>${el}</span> <button name="${index}">try ${index}</button></li>`;
    })
    .join("");
}

function wordArrLength(arrABC) {
  return arrABC.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function similarityArrayCreator(id, arr) {
  const excludedArr = arr
    .map((value, index) => {
      if (index !== id) {
        return { indexOfWord: index, wordArr: value };
      }
    })
    .filter((obj) => obj !== undefined);

  // console.log("excludedArr", excludedArr);

  const template = arr[id];
  // console.log("template", template);

  const templateLength = wordArrLength(template);

  const filteredArray = excludedArr.map((value) => {
    const { indexOfWord, wordArr } = value;

    let lettersMatch = 0;

    for (let i = 0; i < template.length; i++) {
      if (template[i] !== 0 && wordArr[i] !== 0) {
        lettersMatch += Math.min(template[i], wordArr[i]);
      }
    }
    // return { [index]: lettersMatch };
    return {
      indexOfWord: indexOfWord,
      lettersMatch: lettersMatch,
      wordLength: wordArrLength(wordArr),
    };
  });
  console.log("filteredArray", filteredArray);
}

function comparator(baseArr, targetArr) {
  console.log("baseArr", baseArr);
  console.log("targetArr", targetArr);
}

function processDB(arr) {
  const processedDB = arr.map((el) => DBfiller(el));
  // console.log(processedDB);
  return processedDB;
}

function DBfiller(word) {
  const templateArray = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];
  for (const char of word) {
    switch (char) {
      case "a":
        templateArray[0]++;
        break;
      case "b":
        templateArray[1]++;
        break;
      case "c":
        templateArray[2]++;
        break;
      case "d":
        templateArray[3]++;
        break;
      case "e":
        templateArray[4]++;
        break;
      case "f":
        templateArray[5]++;
        break;
      case "g":
        templateArray[6]++;
        break;
      case "h":
        templateArray[7]++;
        break;
      case "i":
        templateArray[8]++;
        break;
      case "j":
        templateArray[9]++;
        break;
      case "k":
        templateArray[10]++;
        break;
      case "l":
        templateArray[11]++;
        break;
      case "m":
        templateArray[12]++;
        break;
      case "n":
        templateArray[13]++;
        break;
      case "o":
        templateArray[14]++;
        break;
      case "p":
        templateArray[15]++;
        break;
      case "q":
        templateArray[16]++;
        break;
      case "r":
        templateArray[17]++;
        break;
      case "s":
        templateArray[18]++;
        break;
      case "t":
        templateArray[19]++;
        break;
      case "u":
        templateArray[20]++;
        break;
      case "v":
        templateArray[21]++;
        break;
      case "w":
        templateArray[22]++;
        break;
      case "x":
        templateArray[23]++;
        break;
      case "y":
        templateArray[24]++;
        break;
      case "z":
        templateArray[25]++;
        break;
      default:
        // Handle cases when the character doesn't match any specific case
        break;
    }
  }
  return templateArray;
}
