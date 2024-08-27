function solve() {
    let num = prompt("ikki xonali son kiriting")

    let birlar = (num % 100) % 10
    let left = parseInt(num / 10)


    if (num > 99 && num <= 999) {
        document.getElementById("demo").innerHTML = birlar.toString() + left.toString()
    }

    else {
        document.getElementById("demo").innerHTML = "3 xonalik son bo'lishi kerak"
    }
}