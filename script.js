
const clickSound = new Audio("./click.mp3");
clickSound.volume = 0.5;
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";


buttons.forEach(btn => {
    
    btn.addEventListener("click", () => {
        const value = btn.innerText;
    

        if (value === "C") {
            current = "";
            display.value = "";
        }
        else if (value === "CE") {
            current = current.slice(0, -1);
            display.value = current;
        }
        else if (value === "=") {
            try {
                 document.getElementById("history").innerText = current + " =";

                current = current
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                const result = eval(current);
                display.value = result;
                display.classList.add("result");
setTimeout(() => display.classList.remove("result"), 400);

                current = result.toString();
            } catch {
                display.value = "Error";
                current = "";
            }
        }
        else if (value === "√") {
            current = Math.sqrt(current).toString();
            display.value = current;
        }
        else if (value === "%") {
            current = (current / 100).toString();
            display.value = current;
        }
     else {
    const lastChar = current.slice(-1);
    if ("+−×÷".includes(lastChar) && "+−×÷".includes(value)) return;

    current += value;
    display.value = current;
}

    });
    const clickSound = new Audio("click.mp3");
buttons.forEach(btn => {
    btn.addEventListener("click", () => clickSound.play());
});

});
