function solve() {
    let num = +prompt("4 xonalik son kiriting")

    let yuzlar = parseInt((num % 1000) / 100)

    if (num > 999) {
        document.getElementById("demo").innerHTML = `yuzlar xonasidagi raqam ${yuzlar}`
    }
}