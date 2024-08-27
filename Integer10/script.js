function solve() {
    let num = prompt("3 xonali son kiriting")

    let unlar = parseInt((num / 10) % 10)
    let birlar = (num % 100) % 10


    if (num > 99 && num <= 999) {
        document.getElementById("demo").innerHTML = "birlar xonasidagi raqam " + birlar + " o'nliklar xonasidagi raqam " + unlar
    }

    else {
        document.getElementById("demo").innerHTML = "3 xonalik son bo'lishi kerak"
    }
}