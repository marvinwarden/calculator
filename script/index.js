let numberBtn = document.querySelectorAll(".number-btn");
let pointBtn = document.querySelector(".point-btn");
let deleteNumber = document.querySelector(".delete");
let calcDisplay = document.querySelector(".display");
let clearDisplay = document.getElementById("clear-display");
let a = null;
let b = null;
let answer = 0;
let operator = "";
let numbers = [];



//populate display
function populateDisplay() {



  pointBtn.addEventListener("click", function () {
    if (calcDisplay.textContent.includes(".") === true) {
      return;

    }

    return calcDisplay.textContent += pointBtn.textContent;
  });




  for (let i = 0; i < numberBtn.length; i++) {

    numberBtn[i].addEventListener("click", displayNumbers);

    function displayNumbers() {

      if (calcDisplay.textContent.length > 8) {
        let displayMaxLength = calcDisplay.textContent.substr(0, 8);
        calcDisplay.textContent = displayMaxLength;
        
      };

      if (numbers.length === 1) {

        calcDisplay.textContent = "";
        numbers = [];
      }

      if (numbers.length !== 1) {

        numberBtn = document.querySelectorAll(".number-btn")[i];
        return calcDisplay.textContent += numberBtn.textContent;

      }
    }


  }
};

populateDisplay();

//delete character from display

deleteNumber.addEventListener("click", function () {
  let removed = calcDisplay.textContent.slice(-1)
  if (calcDisplay.textContent.endsWith(removed) === true) {
    calcDisplay.textContent = calcDisplay.textContent.replace(removed, "");
  }
});

//clear display

clearDisplay.addEventListener("click", clear);

function clear() {
  calcDisplay.textContent = "";
  a = null;
  b = null;
  operator = "";
  numbers = [];
  answer = 0;
}

//operator functions
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}


// operations events

let divideNum = document.getElementById("divide")
let addNum = document.getElementById("plus")
let minusNum = document.getElementById("minus")
let multiplyNum = document.getElementById("multiply")

divideNum.addEventListener("click", function () {

  if (operator !== "/" && b !== null) {
    
    calcDisplay.textContent = operate();

  }


  if (a === null) {
    a = calcDisplay.textContent;
    b = 1;
    operator = "/";
    answer = divide(a, b);
    calcDisplay.textContent = answer;
    numbers.push(a);
  } else {
    a = answer;
    b = calcDisplay.textContent;
    answer = divide(a, b)
    calcDisplay.textContent = answer;
    a = answer;
    numbers.push(a);
  }


});

addNum.addEventListener("click", function () {

  if (operator !== "+" && b !== null) {


    calcDisplay.textContent = operate();


  }

  if (a === null) {
    a = calcDisplay.textContent;
    b = 0;


    operator = "+";
    answer = add(a, b);
    calcDisplay.textContent = answer;
    numbers.push(a);

  } else {
    a = answer;
    b = calcDisplay.textContent;
    answer = add(a, b)
    calcDisplay.textContent = answer;
    a = answer;
    numbers.push(a);


  }

});

minusNum.addEventListener("click", function () {

  if (operator !== "-" && b !== null) {


    calcDisplay.textContent = operate();


  }

  if (a === null) {
    a = calcDisplay.textContent;
    b = 0;
    numbers.push(a);
    operator = "-";
    answer = subtract(a, b);
    calcDisplay.textContent = a;

  } else {
    operator = "-";
    a = answer;
    b = calcDisplay.textContent;
    answer = subtract(a, b)
    calcDisplay.textContent = answer;
    a = answer;
    numbers.push(a);

  }

});

multiplyNum.addEventListener("click", function () {

  if (operator !== "x" && b !== null) {

    calcDisplay.textContent = operate();

  }


  if (a === null) {
    a = calcDisplay.textContent;
    b = 1;
    operator = "x";
    answer = multiply(a, b);
    calcDisplay.textContent = answer;
    numbers.push(a);
  } else {

    a = answer;
    b = calcDisplay.textContent;
    answer = multiply(a, b)
    calcDisplay.textContent = answer;
    a = answer;
    numbers.push(a);
  }

});


let equal = document.getElementById("equals");
equal.addEventListener("click", operate);

function operate() {
  
  b = calcDisplay.textContent;

  switch (operator) {
    case "+":
      answer = add(a, b);
      a = null;
      break;

    case "-":
      answer = subtract(a, b);
      a = null;
      break;

    case "x":
      answer = multiply(a, b);
      a = null;
      break;

    case "/":
      answer = divide(a, b);
      a = null;
      break;

    default:
      console.log("Operation has not been executed");
  }

  operator = "";
  
  if (answer.toString().length <= 9) {
    return calcDisplay.textContent = answer;
  } 

  if (answer.toString().length > 9) {
    return calcDisplay.textContent = answer.toExponential(4);
  }
 

};

let percent = document.getElementById("percent");

percent.addEventListener("click", function() {

//   if (operator === "/") {
//   let percentage = operate() * 100;
//   calcDisplay.textContent = percentage;
//   operator = "";
// } else {
//   b = calcDisplay.textContent
//   let addPercentage = parseFloat(a) + (parseFloat(b / 100)) ;
//   calcDisplay.textContent = addPercentage;

// }


switch (operator) {
  case "/":
    let percentage = operate() * 100;
  calcDisplay.textContent = percentage;
  operator = "";
break;
  case "+":
    b = calcDisplay.textContent
  let addPercentage = a * (b / 100) ;
  calcDisplay.textContent = parseFloat(addPercentage) + parseFloat(a);
  operator = "";
  
    break;

  case "-":
    b = calcDisplay.textContent
    let subtractPercentage = a * (b / 100);
    calcDisplay.textContent =  parseFloat(a) - parseFloat(subtractPercentage);
    operator = "";
    break;

  case "x":
    b = calcDisplay.textContent
    let multiplyPercentage = a * (b / 100);
    calcDisplay.textContent =  parseFloat(a) - parseFloat(multiplyPercentage);
    operator = "";
    break;

  default:
    console.log("Percentage operation has not been executed");
}


});