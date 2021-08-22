
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

  //  Display Total Amount 

  const balanceTotal = document.getElementById('total-balance');
  // depositTotal.innerText = depositAmount;
 if(depositAmount>0){
  const totalAmountText = balanceTotal.innerText;
  const totalAmount = parseFloat(totalAmountText);
  const newTotalAmount = totalAmount + depositAmount;
  balanceTotal.innerText= newTotalAmount;
 }



     // clear deposit input 

    deposit.value='';
});


// Handle withdraw Button Event 

document.getElementById('withdraw-button').addEventListener('click',function(){

  // console.log('withdraw click');

      // get amount withdraw
  const withdrawInput = document.getElementById('withdraw-input');
  const  withdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawAmountText);
  // console.log(withdrawAmount);

  const totalWithdrawAmount = document.getElementById('withdraw-amount');

  if(withdrawAmount>0){
    const totalWithdrawAmountText = totalWithdrawAmount.innerText;
    const  totalWithdrawAmount = parseFloat(totalWithdrawAmountText);
    const  totalWithdrawAmount = parseFloat(totalWithdrawAmountText);
    const withdrawAmountTotal = withdrawAmount+ totalWithdrawAmount;
    withdrawInput.innerText = withdrawAmountTotal;

  }

  // clear withdraw 

  withdrawInput.value='';
});