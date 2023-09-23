function Clear() {
    document.getElementById("screen").innerText = 0; // .innterHTML would also work
 }

function numPress(a) {
    /* THIS METHOD PARSES MUCH BEFORE
    // lets get the number using document.get...
    let screen = document.getElementById("screen").innerText;
    console.log(isNaN(screen));

    // should be entered if a number is already present on the screen. 
    if (isNaN(screen) == false) {
        //check to see if number is zero
        if (screen == 0) {
            console.log("function 1")
            screen = a;
        }
        //should only be used if we have a non-zero number
        else {
            //multiply by 10 to move digits over
            console.log("function 2")
            screen = screen * 10;
            screen = screen + a;
        }

    }
    // should be used if operator is found at the end of the string
    else if ((str.slice(-1) ==  "X" || "÷" || "+" || "-")) {

    }
    //should be used if error message is on screen to clear error out.
    else {
        console.log("function 3")
        screen = a;
    }

    //push to HTML at the end of everything and return.
    document.getElementById("screen").innerText = screen;
    return;*/

    // THIS METHOD ALLOWS FOR PARSING A LITTLE BIT LATER.

    let screen = document.getElementById("screen").innerText;
    if(screen == "0") {
        screen = a;
    }
    else {
        screen = screen + a;
    }
    document.getElementById("screen").innerText = screen;
    return;
}

function OperatorKat(operator) {
    let screen = document.getElementById("screen").innerText;
    //traverse through the chars in the screen string
    let i = 0;
    for (let x = 0; x < screen.length; x++) {
        console.log(screen[x]);
        let f = screen[x];
        if(f == "+" || f == "-" || f == "X" || f == "÷") {
            i++;
        }
    }
    if (i < 1) {
        // we don't have an operator in this string. Let's add one!
        screen = screen + operator;
    }
    else {
        // we already have a operator in this string, lets check to see if it's at the end.        
    }
    document.getElementById("screen").innerText = screen;
}


