//add money

document.getElementById('add-money-btn').addEventListener('click', function(even) {
    even.preventDefault();

    const addMoney = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('pin-number-input').value;

    if(pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money ! Try again.....')
    }
})