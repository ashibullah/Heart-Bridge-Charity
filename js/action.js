const balance = getInputInnerText('my-balance');
const donatedOne = getInputInnerText('donated-one');

function calculate(bal, donatedBal) {


}

document.getElementById('donate-btn-1').addEventListener('click', function (event) {
    const donateAmount = getInputValue('donate-amount-1');
    if (donateAmount === NaN) { alert("Enter Valid Amount"); }
    else {
        console.log(donateAmount)
    }
})
