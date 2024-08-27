function solve() {
    let bayt = prompt()

    let convert = bayt / 1024

    if (bayt >= 0) {
        document.getElementById("demo").innerHTML = bayt + " bayt= " + convert + " kb"
    }

    else {
        document.getElementById("demo").innerHTML = "Error"
    }
}