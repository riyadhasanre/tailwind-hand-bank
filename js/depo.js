// step 1

    // just js file show hocce kina dekhar jonno
    // console.log('deposite');
document.getElementById('btn-deposite').addEventListener('click', function () {
    // console.log('deposite button show my name');

// step 2 deposite input get deposite

    const depositefield = document.getElementById('deposite-field');
    const newdepositeamountstring = depositefield.value;
    const newdepositeamount = parseFloat(newdepositeamountstring);

    // console.log(amount)
    // console.log(typeof newdepositeamount);
// step 3 get the total deposite amount
    // non input (input,textarea without) or any tag use {innerText} to get text 
    const depositeTotal = document.getElementById('total-deposite');
    const previusdepositeamountstring = depositeTotal.innerText;
    const previusdepositeamount = parseFloat(previusdepositeamountstring);

    // console.log(typeof previusdepositeamount);


    const totaladddepositeamount = previusdepositeamount + newdepositeamount;
    depositeTotal.innerText = totaladddepositeamount;


    // console.log('depositeamount');
    // depositeTotal.innerText = newdepositeamount;

// step 4
    depositefield.value = "";
    

    // step 5 get total balance

    const getbalance = document.getElementById('balance-tolal');
    const previousdepositebalancestring = getbalance.innerText;
    const previousdepositebalance = parseFloat(previousdepositebalancestring);


// step 6 calculate balance
    
    
    const newalldepositebalance = previousdepositebalance + newdepositeamount;
    getbalance.innerText = newalldepositebalance;


})