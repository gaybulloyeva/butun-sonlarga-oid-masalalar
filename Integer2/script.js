function solve() {
    let M = prompt()

    let convert = M / 1000

    if (M >= 0) {
        document.getElementById("demo").innerHTML = M + " kg= " + convert + " t"
    }

    else {
        document.getElementById("demo").innerHTML = "Error"
    }
}