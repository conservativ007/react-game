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