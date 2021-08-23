// Code your solutions in this file
function writeCards(name, event) {
    let thankYouMessage = []
    for (let i = 0; i < name.length; i++) {
        thankYouMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`) // push is what you needed
    }
    return thankYouMessage
}

function countDown(number) {
    while (number > 0) {
        console.log(number); //shows the first number(10)
        number -= 1; //iterates down
    }
    return console.log(number); //prints all the numbers
}
