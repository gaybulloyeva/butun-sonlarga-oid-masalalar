function solve() {
    let num = prompt("3 xonali son kiriting")

    let yuzlar = parseInt(num / 100)
    let unlar = parseInt((num / 10) % 10)
    let birlar = (num % 100) % 10

    let sum = yuzlar + unlar + birlar



    if (num > 99 && num <= 999) {
        document.getElementById("demo").innerHTML = "Natija: " + sum
    }

    else {
        document.getElementById("demo").innerHTML = "3 xonalik son bo'lishi kerak"
    }
}