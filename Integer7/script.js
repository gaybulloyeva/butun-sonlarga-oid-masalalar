function solve() {
    let num = prompt("ikki xonali son kiriting")

    let unlar = parseInt((num / 10) % 10)
    let birlar = (num % 100) % 10

    let sum = unlar + birlar

    if (num > 9 && num <= 99) {
        document.getElementById("demo").innerHTML = "Natija: " + sum
    }

    else {
        document.getElementById("demo").innerHTML = "2 xonalik son bo'lishi kerak"
    }
}