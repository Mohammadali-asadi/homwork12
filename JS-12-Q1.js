//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function displayMessages() {
    const messages = ["Action", "Potential", "Signals javascript"];

    function showMessage(index) {
        if (index < messages.length) {
            console.log(messages[index]);
            showMessage(index + 1); 
        }
    }

    showMessage(0);
}

displayMessages();
