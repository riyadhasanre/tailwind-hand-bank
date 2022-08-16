// add even handel type system

// step 1 withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // console.log('hello22');

    // step 2 input field value set 

    const withdrawfield = document.getElementById('withdraw-field');
    const newwithdrawfieldstring = withdrawfield.value;
    const newwithdrawfield = parseFloat(newwithdrawfieldstring);

// step 3 get withdarw amount set 
    const withdrawelement = document.getElementById('withdraw-total');
    const previouswithdrawstring = withdrawelement.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawstring);

    if (isNaN(previouswithdrawtotal)) {
        alert("please provide number");
        return;
    }

    // console.log(previouswithdrawtotal);

    // step 4 calculate total withdraw amount 
    // step 4.5 set amount 

    

    // step 6 
    const getbalance = document.getElementById('balance-tolal');
    const previousdepositebalancestring = getbalance.innerText;
    const previousdepositebalance = parseFloat(previousdepositebalancestring);


   // step 7 value submite than clear 
    withdrawfield.value = '';


//  step 8 overamount withdraw not fonud
    
    if (newwithdrawfield > previousdepositebalance) {
        alert('you have not insufisent balance ');
        return;
    }
    

    const currentwithdrawamount = previouswithdrawtotal + newwithdrawfield;
    withdrawelement.innerText = currentwithdrawamount;  
    
    // console.log(previousdepositebalance);

    // step 6.5 set amount /

    const newbalancetotal = previousdepositebalance - newwithdrawfield;
    getbalance.innerText = newbalancetotal;

 
    

})