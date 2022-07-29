function game(player1, player2) {
    const theMark = Math.floor(Math.random() * 100);
    console.log (`If the mark is ${theMark} then..`);
    let random1 = Math.abs(theMark - player1);
    let random2 = Math.abs(theMark - player2);
    if (random1 > random2) {
        return `Player 2 is closest`
    }
    else return `Player 1 is closest`
}

console.log(game(25,63))
