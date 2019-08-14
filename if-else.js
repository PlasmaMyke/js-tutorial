let c1 = true, c2 = true;

if (c1 || c2) {
    console.log("it's true!");
    console.log(1);
    console.log(2);
    console.log(3);
} else {
    console.log("it's false!");
}

if (c1) {
    console.log("c1 is true")
} else if (c2) {
    console.log("c2 is true");
}

// && AND operator = true ONLY when both booleans 
// are true
// || OR operator = false ONLY when both booleans 
// are false
// ! operator = reverse boolean statement
// 0 = false; 1 = true

// VS Code: Ctrl + d to pick next instance of highlighted text