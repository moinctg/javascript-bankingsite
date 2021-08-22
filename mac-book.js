//Update producs Price

function updatePrice(product, price) {
    if (price == 0) {
        // default Choose option ZERO
        updateInnerCost(product,0)
        //calculateTotal function
        calculateTotal(parseInt(price))
    }
    else {
        //every slected item price
        updateInnerCost(product,price)
        //calculateTotal function
        calculateTotal(parseInt(price))
    }
  }
  //Update Inner Cost
  function updateInnerCost(product, price) {
    document.getElementById(product + '-cost').innerText = price;
  }
  //Get Button value
  function getInputValue(product) {
    const selectButton = document.getElementById(product + '-cost');
    const buttonInnerText = parseInt(selectButton.innerText);
    return buttonInnerText;
  }
  //Get Input Text
  function getInputText(product) {
    const selectButton = document.getElementById(product + '-text');
    const buttonInnerText = selectButton.value;
    return buttonInnerText;
  }
  //Update the innerText Value
  function updateInnerText(product,text) {
    document.getElementById(product + '-price').innerText = text;
  }
  
  //Apply the Promo Code DISCOUNT
  document.getElementById('apply-button').addEventListener('click', function () {
    const inputPromoCode = getInputText('promo-code')
    if(inputPromoCode === 'stevekaku'){
        const initial =  document.getElementById('total-price');
        const innerValue = parseInt(initial.innerText);
        const percentage = (20 / 100) * innerValue;
        const promoCodeCal =  innerValue - percentage;
        updateInnerText('second-total',promoCodeCal)
        const inputPromoCode = document.getElementById('promo-code-text');
        inputPromoCode.value = '';
    }
  });
  //Total Calculation Producs 
  function calculateTotal(price){
  
    const extraMemory = getInputValue('extra-memory');
    const extraStorage = getInputValue('extra-storage');
    const deliveryCharge = getInputValue('delivery-charge');
    const totalPrice = extraMemory+extraStorage+deliveryCharge+1299;
    if(price){
        totalPrice - price
    }
    // update the innerText Value function
    updateInnerText('total',totalPrice)
    updateInnerText('second-total',totalPrice)
  }
  // memory event handle
  document.getElementById('memory-8gb').addEventListener('click', function () {
    updatePrice('extra-memory', 0);
  });
  document.getElementById('memory-16gb').addEventListener('click', function () {
    updatePrice('extra-memory', 180);
  })
  
  //storage event handle
  document.getElementById('ssd-256gb').addEventListener('click', function () {
    updatePrice('extra-storage', 0);
  })
  document.getElementById('ssd-512gb').addEventListener('click', function () {
    updatePrice('extra-storage', 100);
  })
  document.getElementById('ssd-1tb').addEventListener('click', function () {
    updatePrice('extra-storage', 180);
  })
  
  //delivery event handle
  document.getElementById('delivery-aug25').addEventListener('click', function () {
    updatePrice('delivery-charge', 0);
  })
  document.getElementById('delivery-aug21').addEventListener('click', function () {
    updatePrice('delivery-charge', 20);
  })
  