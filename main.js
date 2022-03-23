const subBtn = document.querySelector('.submit-button');
const inputFields = document.querySelectorAll('.text-input');
const passwordFields = document.querySelectorAll('.password');

let confPass = document.querySelector('#pass2');
let passMatch = false;

confPass.addEventListener('input', e =>{
    console.log(confPass.value);
    CheckPasswords(confPass.value);
})
subBtn.addEventListener('click', e => {
    console.log("Clicked!");

    let canSubmit = CheckFormValid();

    if(canSubmit && passMatch){
        document.getElementById('signupForm').submit();
    }
    else{
        MarkInvalidFields();
    }
});

function CheckFormValid(){
    for(var i = 0; i < inputFields.length; i++){
        if(inputFields[i].value == "" && inputFields[i].hasAttribute('required')){
            console.log("Missing required field: " + inputFields[i].id);
            return false;
        }
    }

    return true;
}

function CheckPasswords(passVal){
    var passWarning = document.querySelector('.password-warning');
    if(passwordFields[0].value != passVal){
        passwordFields.forEach(field => {
            field.classList.add('invalid-input');
        })

        passWarning.classList.add('visible');
        passMatch = false;
    }
    else{
        passwordFields.forEach(field => {
            field.classList.remove('invalid-input');
        })

        passWarning.classList.remove('visible');
        passMatch = true;
    }
}

function MarkInvalidFields(){
    inputFields.forEach(field => {
        if(field.value == "" && field.hasAttribute('required')){
            field.classList.add('invalid-input');
        }
    });
}