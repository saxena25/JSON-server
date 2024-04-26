let signup = document.querySelector('.signup');
let form = document.querySelector('.form');
let email = document.querySelector('.email');
let uName = document.querySelector('.uName');
let passwrd = document.querySelector('.password');

signup.addEventListener('click', ()=>window.location.href='signup.html');

form.addEventListener('submit',login);

async function login(e){
    // e.preventDefault();
    let res = await fetch('http://localhost:3000/users');
    let finalRes = await res.json();

    let userNotRegister = false;
    finalRes.forEach((e)=>{
        if(email.value === e.email && passwrd.value === e.password){
            userNotRegister = true;
            window.location.href = 'products.html';
        }
        if(!userNotRegister){
            alert('User Not Found, Register First')
        }
    })
}