const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', ()=>{
    const loginArea = document.getElementById('loginArea').style.display = 'none';
    const transactionArea = document.getElementById('transactionArea').style.display = 'block';
})

// const depositBtn = document.getElementById('deposit');
// depositBtn.addEventListener('click', ()=>{
  function deposit(){
    const inputNumber = document.getElementById('inputNumber').value;
    const inputAmount = parseFloat(inputNumber);

    updateSpanText('depositNumber', inputAmount)
    updateSpanText('totalBalance', inputAmount);
    
    document.getElementById('inputNumber').value = "";

}
function withdraw(){
    const outputNumber = document.getElementById('outputNumber').value;
    const outputAmount = parseFloat(outputNumber);

    updateSpanText('withdrawNumber', outputAmount );
    updateSpanText('totalBalance',-1* outputAmount );
    // downBalance('totalBalance', outputAmount)
    
    document.getElementById('outputNumber').value = "";
}
// function downBalance(id, outputAmount){
//     const totalBalance = document.getElementById(id).innerText;
//     const balanceAmount = parseFloat(totalBalance);
//     const avilableBalance = balanceAmount - outputAmount;
//     document.getElementById(id).innerText = avilableBalance;
// }

function updateSpanText(id , depositMoney){
    const totalBalance = document.getElementById(id).innerText;
    const balanceAmount = parseFloat(totalBalance);
    const avilableBalance = balanceAmount + depositMoney;
    document.getElementById(id).innerText = avilableBalance;
}