
// Handle Deposit Button Event 

document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('depoist click');

    // get amount deposited 
    const deposit = document.getElementById('deposit-input');
    const depositAmountText = deposit.value;
    const depositAmount = parseFloat(depositAmountText);

    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // depositTotal.innerText = depositAmount;
   if(depositAmount>0){
    const priviousDepositAmountText = depositTotal.innerText;
    const priviousDepositAmount = parseFloat(priviousDepositAmountText);
    const newDepositAmount = priviousDepositAmount + depositAmount;

     depositTotal.innerText = newDepositAmount;
   }

     // clear deposit input 

    deposit.value='';
});


