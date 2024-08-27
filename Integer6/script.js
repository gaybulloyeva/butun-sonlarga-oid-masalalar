function solve() {
    let num = prompt("ikki xonali son kiriting")

    let unlar = parseInt((num / 10) % 10)
    let birlar = (num % 100) % 10

    if (num > 9 && num <= 99) {
        document.getElementById("demo").innerHTML = "o'nliklar xonasidagi raqam " + unlar + " birlar xonasidagi raqam " + birlar
    }

    else {
        document.getElementById("demo").innerHTML = "2 xonalik son bo'lishi kerak"
    }
}