function solve() {
    let num = +prompt("4 xonalik son kiriting")

    let minglar = parseInt(num /1000)

    if (num > 999) {
        document.getElementById("demo").innerHTML = `mingliklar xonasidagi raqam ${minglar}`
    }
}