function solve() {
    let N = +prompt("sekundlar sonini kiriting")

    let min = Math.floor(N / 60)

    if (N > 0) {
        document.getElementById("demo").innerHTML = `kun boshidan boshlab ${min} minut o'tdi`
    }
}