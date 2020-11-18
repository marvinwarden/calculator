let answer = [];

let adNum = [];
let minNum = [];


let parent = document.querySelector("#btn-main");

parent.addEventListener("click", numSelect);

let screen = document.getElementById("display");
let numbers = screen.textContent;

function numSelect(e) {


    if (e.target !== e.currentTarget) {

        let clickBtn = e.target.value;

        screen.textContent += clickBtn;


    }


}


function clear() {

    let clearDisplay = document.getElementById("clear-dis");
    clearDisplay.addEventListener("click", function () {
        screen.textContent = "";
        answer = [];
        adNum = [];
        minNum = [];

    })

}

clear();


function add() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        total += parseFloat(arguments[i])
    }

    return total
}

function subtract() {
    var total = minNum[0];

    for (var i = 1; i < arguments.length; i++) {
        total -= parseFloat(arguments[i])
    }

    return total
}

let addNum = document.getElementById("plus")

addNum.addEventListener("click", function () {
    let numbers = screen.textContent;
    
    // answer.push(numbers);
    adNum.push(numbers);
    answer.push(adNum);
    // answer.push(addNum.textContent);
    add(...adNum);
    screen.textContent = "";

})

let minusNum = document.getElementById("minus")

minusNum.addEventListener("click", function () {
    let numbers = screen.textContent;
    
    // answer.push(numbers);
    minNum.push(numbers);
    answer.push(minNum);
    subtract(...minNum);
    screen.textContent = "";

})

function result() {
    let equal = document.getElementById("equals");
    equal.addEventListener("click", function () {
        let baseNum = [];
        let numbers = screen.textContent;
        
        // minNum.push(numbers);
        // answer.push(numbers);
        
            if (adNum.length > 0) {
            // adNum.push(minNum);
            console.log(adNum);
            baseNum.push(add(...adNum));
            console.log(baseNum);
            screen.textContent = (add(...baseNum));  
            }

            if (minNum.length > 0) {
                minNum.push(adNum);
            minNum.push(numbers);   
            baseNum.push(subtract(...minNum));
            screen.textContent = (subtract(...baseNum));    
            }

        
        
        // console.log(answer);
        
        // // answer.push(adNum,minNum);
        // screen.textContent = (+add(...adNum)) + (+subtract(...minNum));
        // console.log((+add(...adNum)) + (+subtract(...minNum)));
    });

}

result();


   

