const h1 = document.getElementById("heading") as HTMLElement;

const handleClick = (value: string) => {
    if (value === 'AC') {
        h1.innerHTML = "0";
    } else if (value === 'x') {
        h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : "0";
    } else if (value === 'pi') {
        h1.innerHTML = h1.innerHTML === "0" ? "3.142" : h1.innerHTML + "3.142";
    } else {
        h1.innerHTML = h1.innerHTML === "0" ? value : h1.innerHTML + value;
    }
};

const deleteChar = () => {
    h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : "0";
};

const calculate = () => {
    const expression = h1.innerHTML.replace(/%/g, "/100");
    if (/^[0-9+\-*/.() ]+$/.test(expression)) {
        h1.innerHTML = eval(expression).toString();
    } else {
        h1.innerHTML = "Error";
    }
};
