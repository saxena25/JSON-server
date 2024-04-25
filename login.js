let signup = document.querySelector('.signup');
let form = document.querySelector('.form');
let email = document.querySelector('.email');
let uName = document.querySelector('.uName');
let passwrd = document.querySelector('.password');

signup.addEventListener('click', ()=>window.location.href='signup.html');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let UserData = {
        email: email.value,
        name: uName.value,
        password: passwrd.value
    }
    fetch('http://localhost:3000/users',{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UserData)
    }).then(res=>{
        if(res.ok){
            window.location.href = 'products.html'
        }else{
            alert('!Login Again')
        }
    }).catch(()=>{
        alert("!Oops Something Went Wrong")
        alert("Login Again")
    })
})