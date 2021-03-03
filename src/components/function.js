function saveRecord(element) {
  
  let res = JSON.parse(localStorage.getItem ("records"));
  if(element === 'abra-cadabra') return res;

  if(res === null){
    let records = {
      x: element === 'x' ? 1 : 0,
      o: element === 'o' ? 1 : 0,
    }
    localStorage.setItem ("records", JSON.stringify(records));
  } else {
    let a = res[element];
    a++;
    res[element] = a;
    localStorage.setItem ("records", JSON.stringify(res));
  }
  return res;
}

function getArrayInLocalStorage() {
  let res = JSON.parse(localStorage.getItem("array"));
  return res;
}

function getA1InLocalStorage() {
  let res = localStorage.getItem("a1");
  return res;
}

// let [autoPlay, setAutoPlay] = useState(false);
// useEffect(() => {

//   if(autoPlay !== true) return;

//   // let timerId = setInterval(() => func(), 2000)

//   func();
//   function func() {
//     let randomNumber;
//     let copy;

//     function getRandomArbitrary(min, max) {
//       return Math.random() * (max - min) + min;
//     }

//     function getRandomElementinCopy() {
//       randomNumber = Math.trunc(getRandomArbitrary(0, 9));
//       copy = arr.slice();

//       return copy[randomNumber];
//     }

//     addArrElement()
//     function addArrElement() {
//       let elem = getRandomElementinCopy();
//       const checkElemInNull = (elem) => elem === null;

//       if(checkElemInNull(elem)) {
//         copy[randomNumber] = a1;
//         setArr(copy)
//         setA1(a1 === 'x' ? 'o' : 'x');
//         isWin(a1, copy);
//         // console.log(a1)
//       } else {
//         addArrElement();
//       }
//     }

//   }
  
//     // addArrElement();
  

//   // return () => clearInterval(timerId);
  
//   console.log(arr)
// }, [autoPlay])

export {saveRecord, getArrayInLocalStorage, getA1InLocalStorage}