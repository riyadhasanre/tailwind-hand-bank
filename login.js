// spep 1 add even handel with submite button  

document.getElementById("btn-submit").addEventListener('click', function () {
    

    // step 2 input field out put find
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    // console.log(email);
// step 3 password 
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    // console.log(email,password);

    // step 4 condition 
    if (email === 'sontan@bap.com' && password === 'manus') {
        console.log('valid user');
    }
    else {
        console.log('not valid at this moment')
    }
})