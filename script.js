function Clear() {
  document.getElementById("screen").innerText = 0; // .innterHTML would also work
}

function numPress(a) {
  let screen = document.getElementById("screen").innerText;
  if (screen == "0") {
    screen = a;
  } else if (screen == "ERROR") {
    Clear();
    screen = a;
  } else {
    screen = screen + a;
  }
  document.getElementById("screen").innerText = screen;
  return;
}

function OperatorKat(operator) {
  let screen = document.getElementById("screen").innerText;
  //traverse through the chars in the screen string
  let i = 0;
  let lastOperator = "";
  //lets count how many operators we already have.
  for (let x = 0; x < screen.length; x++) {
    let f = screen[x];
    if (f == "+" || f == "-" || f == "X" || f == "÷") {
      i++;
      lastOperator = screen[x];
      console.log(lastOperator);
    }
  }

  if (i < 1) {
    // we don't have an operator in this string. Let's add the specificed one!
    screen = screen + operator;
    document.getElementById("screen").innerText = screen;
  } else {
    if (1 == i) {
      console.log("i equal to 1");
      // we already have a operator in this string, lets check to see if it's at the end.
      // if we have exactly 1 operator
      // and it is exactly at the end
      if (lastOperator == screen[screen.length - 1]) {
        //then we are eligible to change the operator
        screen = screen.replace(lastOperator, operator);
        console.log(screen);
      }
    }
    document.getElementById("screen").innerText = screen;
    return;
  }
}

function Equals() {
  screen = document.getElementById("screen").innerText;
  let i = 0;
  let lastOperator = "";
  for (let x = 0; x < screen.length; x++) {
    let f = screen[x];
    if (f == "+" || f == "-" || f == "X" || f == "÷") {
      i++;
      lastOperator = screen[x];
    }
  }
  //I built this way to accomodate for potential PEMDAS...for now I will stick to one oeprator.
  if (lastOperator != "") {
    //we have an oeprator
    const splitStuff = screen.split(lastOperator);
    if (splitStuff[1] != "") {
      //we have numbers on both sides of the operator.
      let a = splitStuff[0];
      let b = splitStuff[1];
      a = parseInt(a);
      b = parseInt(b);
      switch (lastOperator) {
        case "+":
          screen = a + b;
          break;
        case "-":
          screen = a - b;
          break;
        case "X":
          screen = a * b;
          break;
        case "÷":
          if (b == 0) {
            screen = "ERROR";
            alert("Divide by 0 Error!");
          } else {
            screen = a / b;
          }

          //screen = screen.toFixed(5);
          break;
      }
      //submit to the screen
      document.getElementById("screen").innerText = screen;
    } else {
      //numbers only on 1 side of operator.
    }
  } else {
    // there is no operator
    return;
  }
}
