function calculation(amountOfDonate, amountAlreadyDonated, donationTitle){
    console.log("Running Calculation function");
    const donateAmount = getInputValue(amountOfDonate);
    const balance = getInputInnerText('my-balance');
    const donatedOne = getInputInnerText(amountAlreadyDonated);
    if (isNaN(donateAmount) || donateAmount > balance || donateAmount <= 0) { alert("Enter Valid Amount"); }
    else {
        // console.log(donateAmount, banalce);
        const currentDonatedAmmount = getInputInnerText(amountAlreadyDonated);
        document.getElementById(amountAlreadyDonated).innerText = donateAmount + currentDonatedAmmount;
        document.getElementById('my-balance').innerText = (balance - donateAmount);
        const title = document.getElementById(donationTitle).innerText;
        // console.log(title);
        addHistory(donateAmount, title );
    
    }

}

function getInputInnerText(id){
    const inputValue = parseFloat(document.getElementById(id).innerText);
    return inputValue;
}
function getInputValue(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function toggleBtn(id){
    console.log();
    document.getElementById('history-toggle').classList.add('hidden');
    document.getElementById('donation-toggle').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function addHistory(amount,title){
    const time = new Date();
    const div = document.createElement('div');
    div.classList.add('mt-8', 'p-6' , 'border' , 'rounded-lg' , 'lg:max-w-6xl');
    div.innerHTML = `
    <h1 class="text-lg font-semibold mb-2">You Donated ${amount} BDT to ${title} </h1>
    <p>Time: ${time.getHours()}:${time.getMinutes()} on ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}</p>
    `
    document.getElementById('history-toggle').appendChild(div);
}

