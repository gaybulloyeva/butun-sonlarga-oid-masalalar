function solve() {
    let L = prompt()

    let convert = L / 100

    if (L >= 0) {
        document.getElementById("demo").innerHTML = L + " sm= " + convert + " m"
    }

    else {
        document.getElementById("demo").innerHTML = "Error"
    }
}