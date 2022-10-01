export function getWinnerLines() {
  return [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
}

export function saveRecord(element) {

  let res = JSON.parse(localStorage.getItem("records"));
  if (element === 'abra-cadabra') return res;

  if (res === null) {
    let records = {
      x: element === 'x' ? 1 : 0,
      o: element === 'o' ? 1 : 0,
    }
    localStorage.setItem("records", JSON.stringify(records));
  } else {
    let a = res[element];
    a++;
    res[element] = a;
    localStorage.setItem("records", JSON.stringify(res));
  }
  return res;
}

export function getArrayInLocalStorage() {
  let res = JSON.parse(localStorage.getItem("array"));
  return res;
}

export function getA1InLocalStorage() {
  let res = localStorage.getItem("a1");
  return res;
}

export function getSittingsInLocalStorage(value) {
  let res = localStorage.getItem(value);
  return res;
}

let copyWinnerLines = null;

export function checkWinnerLines(arr, player) {

  copyWinnerLines = getWinnerLines();

  let endGame = arr.every(i => i !== null);
  if (endGame === true) return "eng-game";

  copyWinnerLines.forEach(subArr => {
    arr.forEach((item, itemIndex) => {
      if (item === player) {
        let index = subArr.indexOf(itemIndex);
        if (index !== -1) subArr.splice(index, 1);
      }
    })
  });

  copyWinnerLines.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });

  let theRightIndex = copyWinnerLines.shift();
  theRightIndex = checkBusyCell(arr, theRightIndex);
  return theRightIndex[0];
}

export function checkBusyCell(arr, index) {
  let willMoveTo = arr[index];
  if (willMoveTo === null) {
    return index;
  } else {
    let newIndex = getIndexAiMove(arr);
    // console.log("newIndex: ", newIndex);
    if (newIndex === undefined) return "end-game";
    return [newIndex];
  }
}

export function getIndexAiMove(arr) {
  let freeIndexes = [];
  arr.forEach((i, index) => i === null ? freeIndexes.push(index) : null);
  let randIndex = shuffle(freeIndexes)[0];
  return randIndex;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}