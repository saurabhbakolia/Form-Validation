console.log("Welcome to ford validation");

const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUsername = false;
let validEmail = false;
let validPhone = false;

$('#failure').hide();
$('#success').hide();


username.addEventListener('blur', () => {
    console.log("name is blurred");
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your name is valid");
        username.classList.remove('is-invalid');
        validUsername = true;
    }
    else {
        console.log("Your name is not valid");
        username.classList.add('is-invalid');
        validUsername = false;
    }
});

email.addEventListener('blur', () => {
    console.log("name is blurred");
    // validate name here
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("Your email is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log("name is blurred");
    // validate name here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log("Your phone number is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on submit');

    // Submit form here 
    if (validEmail && validUsername && validPhone) {
        console.log("Phone, email and username are valid. Submitting the form");
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log("One of phone, email, or username is not valid, Hence not submitting the form, Please correct the errors and try again.");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();
    }
})