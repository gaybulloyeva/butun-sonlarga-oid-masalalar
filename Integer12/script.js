function solve() {
    let num = prompt("ikki xonali son kiriting")


    let yuzlar = parseInt(num / 100)
    let unlar = parseInt((num / 10) % 10)
    let birlar = (num % 100) % 10


    if (num > 99 && num <= 999) {
        let change = yuzlar
        yuzlar = birlar
        birlar = change
        document.getElementById("demo").innerHTML = yuzlar.toString() + unlar.toString() + birlar.toString()
    }

    else {
        document.getElementById("demo").innerHTML = "3 xonalik son bo'lishi kerak"
    }
}