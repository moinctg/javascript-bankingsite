

   document.getElementById('login-submit',addEventListener('click',function(){
    // Get Email Input 
    const emailField = document.getElementById('user-email');
    const email  = emailField.value;
    // console.log(email);
    // Get password input 
    const passwordField = document.getElementById('user-password');
    const password  = passwordField.value;
    // console.log(password);
    // Check Email and Password 

    if(email == "cpimoinuddin@gmail.com" && password == 123456){
        window.location.href = 'banking.html';
    }
    else{
        console.log("access not allowed!!")
    }
    

}));