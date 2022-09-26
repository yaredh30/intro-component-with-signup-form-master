const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailEl = document.querySelector('#email');
const password = document.querySelector('#password');
const icon = document.querySelector('.icon');
const btn = document.querySelector('.btn');
const errorFirst = document.querySelector('#error-first');
const errorLast = document.querySelector('#error-last');
const errorEmailEl = document.querySelector('#error-email-1');
const errorPass = document.querySelector('#error-pass');
const firstIcon = document.querySelector('#icon-first');
const lastIcon = document.querySelector('#icon-last');
const emailIcon = document.querySelector('#icon-email');
const passIcon = document.querySelector('#icon-pass');
const emailvalidate = document.querySelector('#error-email');
const passWeak = document.querySelector('#weak-pass');


btn.addEventListener('click', () => {
   if(firstName.value === "") {
    errorFirst.style.display = 'block';
    firstName.style.borderColor = 'red';
    firstIcon.style.display = 'inline-block'
    
   
   } else {
    errorFirst.style.display = 'none';
    firstName.style.borderColor = 'green';
    firstIcon.style.display = 'none'
   }
   if(lastName.value === "") {
    errorLast.style.display = 'block';
    lastName.style.borderColor = 'red';
    lastIcon.style.display = 'inline-block'
   
   }
   else {
    errorLast.style.display = 'none';
    lastName.style.borderColor = 'green';
    lastIcon.style.display = 'none';
   }
   if(emailEl.value === "") {
    errorEmailEl.style.display = 'inline-block';
    emailEl.style.borderColor = 'red';
    emailIcon.style.display = 'inline-block';
    emailvalidate.style.display = 'none';
   

   } else {

        validateEmail()
   }
   if(password.value === "") {
    errorPass.style.display = 'block';
    password.style.borderColor = 'red';
    passIcon.style.display = 'inline-block';
    passWeak.style.display = 'none';
   } else if(password.value.length < 6 ) {
    passWeak.style.display = 'inline-block'
    password.style.borderColor = 'red';
    passIcon.style.display = 'inline-block';
    errorPass.style.display = 'none';
   } else {
    errorPass.style.display = 'none';
    password.style.borderColor = 'green';
    passIcon.style.display = 'none';
    passWeak.style.display = 'none';
   }
})

function validateEmail() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailEl.value.match(mailFormat)) {
        emailEl.style.borderColor = 'green'
        emailIcon.style.display = 'none'
       emailvalidate.style.display = 'none';
       errorEmailEl.style.display = 'none';
        return true

    } else {
        emailEl.style.borderColor = 'red'
        emailIcon.style.display = 'inline-block'
       emailvalidate.style.display = 'inline-block';
       errorEmailEl.style.display = 'none';
        return false
    }
}