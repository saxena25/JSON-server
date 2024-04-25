let form = document.querySelector('.form');
let submitBtn = document.querySelector('.submit-btn');
let uEmail = document.querySelector('#email');
let uName = document.querySelector('#userName');
let passwrd = document.querySelector('#password');
let loginBtn = document.querySelector('.login-btn')

loginBtn.addEventListener('click', ()=>{
    window.location.href = 'login.html'
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let obj = {
        id: Math.random().toString(2),
        name: uName.value,
        email: uEmail.value,
        password: passwrd.value
    }

    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res =>{
        if(res.ok){
            window.location.href = 'login.html'
        }else{
            alert('!Wrong Information, Please SignUp Again')
        }
    }).catch(()=>{
        alert('Something Went Wrong1 signup');
    })
})