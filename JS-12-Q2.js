// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function innerFunc(a, b) {
    return a * b;
}

function outerFunc(num1, num2) {
    const result = innerFunc(num1, num2); // Call the inner function
    console.log('The multiplication of ${num1} and ${num2} is: ${result}');
}
outerFunc(5, 3); 
outerFunc(7, 4); 