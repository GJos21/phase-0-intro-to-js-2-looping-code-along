function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}

function countDown(counter) {
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}

countDown(10);