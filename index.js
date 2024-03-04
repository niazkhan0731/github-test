// Function to increment the counter by 1
function incrementCounter() {
    // Get the current value of the counter
    let counter = parseInt(document.getElementById('counter').value);
    // Increment the counter by 1
    counter++;
    // Update the counter value on the page
    document.getElementById('counter').value = counter;
}

// Function to handle clicking on the "Seen" button
function markAsSeen(button) {
    // Call the function to increment the counter
    incrementCounter();
}