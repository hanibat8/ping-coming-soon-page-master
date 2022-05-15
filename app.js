const form=document.getElementsByTagName('form')[0];
const email=document.getElementById('email');
const emailError=document.querySelector('#email +.error');

email.addEventListener('input',function(){
    if(email.validity.valid){
        emailError.innerHTML='';
        emailError.classList='error';
    }
    else{
        showError();
    }
});

form.addEventListener('submit',function(){
    if(!email.validity.valid){
        showError();
        if(email.validity.valueMissing){
            emailError.textContent='This field is required';
            email.className='active';
            emailError.className = 'error active';
        }
        event.preventDefault();
    }
});

function showError(){
    if(email.validity.typeMismatch){
        emailError.textContent='Please enter a valid email address.';
        emailError.classList='error active';
        email.classList-'active';
    }
}