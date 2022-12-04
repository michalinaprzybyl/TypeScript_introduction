// Zad 1. Napisz funkcję która będzie obliczała cene w zależności od tego czy zniżka jest przyznana czy nie.
// Nazwa: calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (prawda/fałsz)
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróc liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równy false, zwróc originalPrice bez żadnych modyfikacji.
const discount = true;
const price = 100;
// tu piszecie
// pod spodem wywołujecie, jako argumenty podajecie zmienne discount i price
function calculatePrice(originalPrice, hasDiscount) {
    if (hasDiscount === true) {
        return originalPrice * 0.77;
    }
    else {
        return originalPrice;
    }
}
;
const calculatePrice2 = (originalPrice, hasDiscount) => hasDiscount ? originalPrice * 0.77 : originalPrice;
