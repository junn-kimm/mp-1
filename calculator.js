function getA() {
    let val = document.getElementById("first-number").value;
    return val === "" ? 0 : Number(val); //because == is depreciated
}

function getB() {
    let val = document.getElementById("second-number").value;
    return val === "" ? 0 : Number(val);
}

function show(result) {
    const out = document.getElementById("output");
    out.innerHTML = String(result);

    if (result < 0) {
        out.style.color = "red";
    } else {
        out.style.color = "black";
    }
}

function addition() {
    show(getA() + getB());
}

function subtraction() {
    show(getA() - getB());
}

function multiplication() {
    show(getA() * getB());
}

function division() {
    show(getA() / getB());
}

function power() {
    let base = getA();
    let exp = getB();
    let result = 1;

    if (exp > 0) {
        for (let i = 0; i < exp; i++) {
            result *= base;
        }
    } else if (exp < 0) {
        for (let i = 0; i < -exp; i++) {
            result *= base;
        }
        result = 1 / result;
    } else if (base===0 && exp===0) {
        result = NaN;
    }
    else if (base===0) {
        result = 1;
    }
    else {
        result = NaN
    }

    show(result);
}

function clearAll() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
