var h1 = document.getElementById("heading");
var handleClick = function (value) {
    if (value === 'AC') {
        h1.innerHTML = "0";
    }
    else if (value === 'x') {
        h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : "0";
    }
    else if (value === 'pi') {
        h1.innerHTML = h1.innerHTML === "0" ? "3.142" : h1.innerHTML + "3.142";
    }
    else {
        h1.innerHTML = h1.innerHTML === "0" ? value : h1.innerHTML + value;
    }
};
var deleteChar = function () {
    h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : "0";
};
var calculate = function () {
    var expression = h1.innerHTML.replace(/%/g, "/100");
    if (/^[0-9+\-*/.() ]+$/.test(expression)) {
        h1.innerHTML = eval(expression).toString();
    }
    else {
        h1.innerHTML = "Error";
    }
};
