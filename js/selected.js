const playerArray = [];

function displaySelectedPlayer(players) {

    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        const player = playerArray[i];

        const li = document.createElement('li');
        li.innerHTML = `
        <li>${i + 1}. ${player}</li>
        
        `;
        playerList.appendChild(li);
    }

}

function addToSelect(element) {

    const selectedPlayer = element.parentNode.parentNode.children[0].innerText;

    playerArray.push(selectedPlayer);

    displaySelectedPlayer(playerArray);
}