let count = 0;

function cardCounter(card){
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        count++;
    } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        count--;
    }
    return count > 0 ? `${count} Bet` : `${count} Hold`;
}
