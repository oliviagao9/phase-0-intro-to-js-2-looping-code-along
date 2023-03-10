// Code your solutions in this file
function writeCards(names, string) {
    let s = [];
    for(let i = 0; i < names.length; i++) {
        s.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }

    return s;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n = n -1;
    }
}