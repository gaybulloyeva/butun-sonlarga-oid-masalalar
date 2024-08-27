function solve() {
    let num = prompt("ikki xonali son kiriting")

    let unlar = parseInt((num / 10) % 10)
    let birlar = (num % 100) % 10



    if (num > 9 && num <= 99) {
        let change = unlar
        unlar = birlar
        birlar = change
        document.getElementById("demo").innerHTML = unlar + birlar
    }

    else {
        document.getElementById("demo").innerHTML = "2 xonalik son bo'lishi kerak"
    }
}