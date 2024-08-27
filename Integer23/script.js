function solve() {
    let N = +prompt("sekundlar sonini kiriting")

    let h = Math.floor(N / 3600)
    let min = Math.floor((N % 3600) / 60)
    let sec = N % 60

    if (N > 0) {
        document.getElementById("demo").innerHTML = `kun boshidan boshlab ${h} soat, ${min} minut va ${sec} sekund o'tdi`
    }
}