let root = document.querySelector('.root');
let signup = document.querySelector('.signup');
let login = document.querySelector('.login');

signup.addEventListener('click', ()=>{
    window.location.href = 'signup.html';
})

login.addEventListener('click', ()=>{
    window.location.href = 'login.html';
})

async function fetchData(){
    try {
        let res = await fetch('http://localhost:3000/products');
        let finalRes = await res.json();
        console.log(finalRes)
        displayData(finalRes)
    } catch{
        alert('Something Went Wrong')
    }
}

fetchData()

function displayData(data){
    root.innerHTML = '';
    data.forEach((e)=>{
        let div = document.createElement('div');
        div.className = 'box';

        let image = document.createElement('img');
        image.className = 'image';
        image.src = e.src;

        let id = document.createElement('h4');
        id.innerText = 'Id:'+' '+e.id;

        let title = document.createElement('h2');
        title.innerText = 'Title:'+' '+ e.title;

        let rating = document.createElement('p');
        rating.innerText = 'Ratings:'+ " " + e.ratings;

        let price = document.createElement('h3');
        price.innerText = 'Price'+' '+e.price;

        let addCart = document.createElement('button');
        addCart.innerText = 'Add to Cart';

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete From Cart'

        div.append(image, id, title, rating, price, addCart, deleteBtn);
        root.append(div)
    })
}