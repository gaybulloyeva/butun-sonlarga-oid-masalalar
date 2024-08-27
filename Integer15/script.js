function solve() {
    let num = prompt("3 xonali son kiriting")


    let yuzlar = parseInt(num / 100)
    let unlar = num % 100
    let unlar_org = parseInt(unlar / 10)
    let birlar = unlar % 10



    if (num > 99 && num <= 999) {
        document.getElementById("demo").innerHTML = yuzlar + unlar_org + birlar
    }
}