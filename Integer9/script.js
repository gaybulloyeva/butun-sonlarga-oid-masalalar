function solve() {
    let num = prompt("3 xonali son kiriting")

    let yuzlar = parseInt(num / 100)



    if (num > 99 && num <= 999) {
        document.getElementById("demo").innerHTML = "yuzlar xonasidagi raqam " + yuzlar
    }

    else {
        document.getElementById("demo").innerHTML = "3 xonalik son bo'lishi kerak"
    }
}