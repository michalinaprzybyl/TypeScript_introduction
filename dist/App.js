// 1. PODSTAWOWE TYPY DANYCH
// NUMBER
// let
let age;
age = 40;
console.log(age);
// STRING
// const
const firstName = "John";
let surname = "Smith";
surname = "Novak";
// BOOLEAN
let bool = true;
bool = false;
// 2. TYPOWANIE FUNKCJI
const add = (num1, num2) => {
    return num1 + num2;
};
function add2(num1, num2) {
    return num1 + num2;
}
;
const add3 = function (num1, num2) {
    return num1 + num2;
};
const logToConsole = (thingToDisplay) => {
    console.log(thingToDisplay);
}; // ta funkcja nic nie zwraca, więc będzie void
// Zadanie 1. Napisz funkcję calculatePrice która będzie obliczała cenę w zależności od tego, czy zniżka jest przyznana czy nie. Nadaj funkcji parametry: originalPrice (liczba), hasDiscount (prawda/fałsz). Jeżeli parametr hasDiscount jest równy true, zwróc liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równy false, zwróc originalPrice bez żadnych modyfikacji.
const discount = true;
const price = 100;
// 1st method
function calculatePrice(originalPrice, hasDiscount) {
    if (hasDiscount === true) {
        return originalPrice * 0.77;
    }
    else {
        return originalPrice;
    }
}
;
console.log(calculatePrice(price, discount));
// 2nd method
const calculatePrice2 = (originalPrice, hasDiscount) => hasDiscount ? originalPrice * 0.77 : originalPrice;
console.log(calculatePrice2(price, discount));
// 3.ELEMENTY HTML
// a) selektory
const categoryList = document.querySelector(".category"); // do constów z klasą i id powinno się deklarować typy
const input = document.querySelector("#name");
console.log(input.value);
const button = document.querySelector("button");
// b) eventListenery
button.addEventListener("click", (event) => {
    console.log("Click button");
});
// Zadanie 2.
// 1. Dodaj event listener na button (click)
// 2. Wylosuj czy użytkownik ma zniżkę czy nie (Math.random())
// 3. Ściągnij wartość z inputu textowego, od razu zmień typ pozyskanej wartości na number
// 4. Wykonaj console.log "You have to pay *wywołanie funkcji calculatePrice", argumenty to wartości z pkt 2 i 3, ${}
button.addEventListener("click", () => {
    const discount = Math.random() > 0.5 ? true : false;
    const price = +input.value;
    console.log(`You have to pay ${calculatePrice(price, discount)}`);
});
// 4. UNION TYPES - chcę aby tylko te 3 typy danych mogły wchodzić w tą zmienną
let test;
test = "test";
test = 21;
test = true;
let test1;
let test2;
let test3;
let test4;
let category;
category = "january";
category = "may";
// category = "month"; // ERROR
category = 2;
;
; // ? to pole opcjonalne
let john = {
    name: "John",
    surname: "Smith",
    age: 30,
    married: true
};
let sarah = {
    name: "Sarah",
    surname: "Smith",
    age: 30
};
;
let kevin = {
    name: "Kevin",
    surname: "Brown",
    age: 27,
    language: "Python",
    experience: 4
};
// 7. TYPOWANIE LIST
// let list = [1, 2, 3, 4, 5, 6, 7, 8];
// list = ["123", "321"]; 
// TS odróżnia listę liczb od listy stringów
let list = [1, 2, 3, 4, 5, 6, 7, 8];
list = ["123", "321"];
list = ["123", 123];
const objList = [
    {
        name: "Kevin",
        surname: "Brown",
        age: 27,
        language: "Python",
        experience: 4
    },
    {
        name: "John",
        surname: "Smith",
        age: 40,
        language: "C++",
        experience: 15
    }
];
