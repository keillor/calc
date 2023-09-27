function Clear() {
  document.getElementById("screen").innerText = 0; // .innterHTML would also work
}

function numPress(a) {
  let screen = document.getElementById("screen").innerText;
  if (screen == "0") {
    //there is nothing on screen
    screen = a;
  } else if (screen == "ERROR" || screen == "NaN") {
    Clear();
    screen = a;
  } else {
    //num + a
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
  let lastOperatorPOS = 0;
  //lets count how many operators we already have.
  for (let x = 0; x < screen.length; x++) {
    let f = screen[x];
    if (f == "+" || f == "-" || f == "X" || f == "÷") {
      i++;
      lastOperator = screen[x];
      lastOperatorPOS = x;
    }
  }

  if (i < 1) {
    // we don't have an operator in this string. Let's add the specificed one!
    screen = screen + operator;
    document.getElementById("screen").innerText = screen;
  } else if (screen[0] == "-" && i == 1) {
    //if the number is negative
    screen = screen + operator;
    document.getElementById("screen").innerText = screen;
    return;
  } else {
    if (1 == i) {
      // we already have a operator in this string, lets check to see if it's at the end.
      // if we have exactly 1 operator
      // and it is exactly at the end
      if (lastOperator == screen[screen.length - 1]) {
        //then we are eligible to change the operator
        // screen = screen.replace(lastOperator, operator);
        screen = screen.substring(0, lastOperatorPOS) + operator;
      }
    } else if (2 == i) {
      screen = screen.substring(0, lastOperatorPOS - 1) + operator;
    }
    document.getElementById("screen").innerText = screen;
    return;
  }
}

function Equals() {
  screen = document.getElementById("screen").innerText;
  let i = 0;
  let lastOperator = "";
  let lastOperatorPOS = 0;
  for (let x = 0; x < screen.length; x++) {
    let f = screen[x];
    if (f == "+" || f == "-" || f == "X" || f == "÷") {
      i++;
      lastOperator = screen[x];
      lastOperatorPOS = x;
    }
  }
  //I built this way to accomodate for potential PEMDAS...for now I will stick to one oeprator.
  if (lastOperatorPOS == 0 && lastOperator == "-") {
    //we only have 1 operator and its a negative...
    return;
  }
  if (lastOperator != "") {
    //we have an oeprator
    const splitStuff = screen.split(lastOperator);
    let leftSide = screen.substring(0, lastOperatorPOS);
    let rightSide = screen.substring(lastOperatorPOS + 1);
    console.log(leftSide);
    console.log(rightSide);
    if (rightSide != "") {
      //we have numbers on both sides of the operator.
      let a = leftSide; //splitStuff[0];
      let b = rightSide; //splitStuff[1];
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
      //round length to 12 if need be...
      if (screen.length > 12) {
        screen = screen.toFixed(12);
      }
      document.getElementById("screen").innerText = screen;
    } else if (1 == lastOperator && "-" == lastOperator) {
      // if we have a negative in front and only the negative, this the calculation.
      return;
    } else {
      //numbers only on 1 side of operator.
    }
  } else {
    // there is no operator
    return;
  }
}
