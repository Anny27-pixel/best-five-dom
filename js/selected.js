const playerArray = [];

function displaySelectedPlayer(players) {

    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        const playerName = playerArray[i];
        // console.log(typeof player);
        const li = document.createElement('li');
        li.innerHTML = `
        <li>${i + 1}. ${playerName}</li>
        
        `;
        playerList.appendChild(li);

    }

}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('per-player-cost');
    // const playerList = document.getElementById('player-list');

    const playerNumber = playerArray.length;
    const totalCost = perPlayerCost * playerNumber;


    const totalExpenseField = document.getElementById('total-expense-field');

    totalExpenseField.innerText = totalCost;

})

document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerField = getInputFieldValueById('manager-field');
    const coachField = getInputFieldValueById('coach-field');
    const totalExpenseField = document.getElementById('total-expense-field');
    const totalExpenseString = totalExpenseField.innerText;
    const totalExpense = parseInt(totalExpenseString);

    const calculateTotalAmount = managerField + coachField + totalExpense;
    const totalCalculateField = document.getElementById('total-calculate-field');
    totalCalculateField.innerText = calculateTotalAmount;


    // const calculateTotalAmount = managerField + coachField + totalCost;
    // console.log(calculateTotalAmount);
    // const totalCalculateField = document.getElementById('total-calculate-field');
    // totalCalculateField.innerText = calculateTotalAmount;



})


function addToSelect(element) {

    const selectedPlayer = element.parentNode.parentNode.children[0].innerText;

    playerArray.push(selectedPlayer);

    displaySelectedPlayer(playerArray);
}
