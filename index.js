function writeCards(names, event) {
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return newArr;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count)
        count--;
    }
}

