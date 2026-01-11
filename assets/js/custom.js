let porscheArray=[
    {
        img: 'assets/img/918.jpg',
        name:"918 Spyder",
        price: 845000,
        drivetrain: 'AWD',
        type: 'Hypercar',
        powertrain: 'Hybrid',
        featured: 'true'
    },
    {
        img: 'assets/img/cgt.jpg',
        name:"Carrera GT",
        price: 400000,
        drivetrain: 'RWD',
        type: 'Hypercar',
        powertrain: 'Petrol',
        featured: 'true'
    },
    {
        img: 'assets/img/gt3rs.jpg',
        name:"GT3 RS",
        price: 250000,
        drivetrain: 'RWD',
        type: 'Supercar',
        powertrain: 'Petrol',
        featured: 'true'
    },
    {
        img: 'assets/img/Macan.jpg',
        name:"Macan",
        price: 65400,
        drivetrain: 'AWD',
        type: 'SUV',
        powertrain: 'Petrol',
        featured: 'false'
    },
    {
        img: 'assets/img/cayman.jpg',
        name:"718 Cayman",
        price: 75000,
        drivetrain: 'RWD',
        type: 'Compact',
        powertrain: 'Petrol',
        featured: 'false'
    },
    {
        img: 'assets/img/911 cabriolet.png',
        name:"911 Turbo S Cabriolet",
        price: 284300,
        drivetrain: 'AWD',
        type: 'Sports',
        powertrain: 'Petrol',
        featured: 'false'
    },
    {
        img: 'assets/img/panamera.png',
        name:"Panamera",
        price: 29500,
        drivetrain: 'AWD',
        type: 'Sedan',
        powertrain: 'Hybrid',
        featured: 'false'
    },
    {
        img: 'assets/img/taycan.png',
        name:"Taycan",
        price: 99400,
        drivetrain: 'RWD',
        type: 'Sedan',
        powertrain: 'Electric',
        featured: 'false'
    },
    {
        img: 'assets/img/turbo s.jpg',
        name:"911 Turbo S",
        price: 270000,
        drivetrain: 'AWD',
        type: 'Sports',
        powertrain: 'Hybrid',
        featured: 'false'
    }
]
let ispisShop;
function createCars(car){
    ispisShop =`<div class="col-md-4">
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src="${car.img}">
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="shop-single.html" class="h3 text-decoration-none">${car.name}</a>
                                <p class="text-center mb-0">$${car.price}</p>
                            </div>
                        </div>
                    </div>`;
    return ispisShop;
}

let cars="";
if(document.getElementById("shopPage")){
    for(let car of porscheArray){
        cars+=createCars(car);
    }
    document.getElementById("shopPage").innerHTML = cars;
 }
 
 let ispisFeatured = "";
 for(let i=0;i<porscheArray.length;i++){
    if(porscheArray[i].featured == "true")
    {
        ispisFeatured+=`<div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="${porscheArray[i].img}" class="card-img-top" alt="featured car">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">${porscheArray[i].price}</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${porscheArray[i].name}</a>
                            <p class="card-text">
                                The 918 Spyder redefined the supercar, combining a high-revving V8 with advanced hybrid technology for breathtaking performance. Built in limited numbers, it stands as a milestone of our innovation and motorsport heritage.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>`;
    }
}if(document.getElementById("featuredCars")){
        document.getElementById("featuredCars").innerHTML = ispisFeatured;
    }
 
 let navArray=[
    {
        link: 'index.html',
        name: 'Home'
    },
    {
        link: 'about.html',
        name: 'About'
    },
    {
        link: 'shop.html',
        name: 'Shop'
    },
    {
        link: 'contact.html',
        name: 'Contact',
    },
    {
        link: 'author.html',
        name: 'Author'
    }
 ]

 let ispisNav = "";
 for(let i=0;i<navArray.length;i++){
    ispisNav+= `<li class="nav-item">
                            <a class="nav-link" href="${navArray[i].link}">${navArray[i].name}</a>
                        </li>`;
 }document.getElementById("idnav").innerHTML = ispisNav;
 
 var sort = document.getElementById("sortLista");
 if(sort){
 sort.addEventListener('change',sortCars);
 function sortCars(){
        var data = [...porscheArray];
        if(sort.value == "ABC"){
            cars = '';
            document.getElementById("shopPage").innerHTML = '';
            data = data.sort((a, b) => a.name.localeCompare(b.name));
            for(let car of data){
                cars+=createCars(car);
            }
            document.getElementById("shopPage").innerHTML = cars;
        }
        else if(sort.value == "Cost"){
            data = data.sort((a,b) => a.price - b.price);
            cars = '';
            document.getElementById("shopPage").innerHTML = '';
            for(let car of data){
                cars+=createCars(car);
            }
            document.getElementById("shopPage").innerHTML = cars;
        }
        else if(sort.value == "Default"){
            cars = '';
            document.getElementById("shopPage").innerHTML = '';
            for(let car of porscheArray){
                cars+=createCars(car);
            }
            document.getElementById("shopPage").innerHTML = cars;
        }
    }
}
 
 //         FORMA
 
    const nameRegex = /^[A-ZŠĆČŽĐ][a-zčćžšđ]{1,15}$/;
    const PhoneRegex = /^(\+)?[0-9]{7,15}$/;
    const EmailRegex = /^[\w\d\.]+@[\w\d\.]+\.[a-zA-Z\d]{2,}$/;
    const MessageRegex = /\S+/;
    const fnameInput = document.getElementById("fname");
    const fnameERR = document.getElementById("fnameERR");
    const lnameInput = document.getElementById("lname");
    const lnameERR = document.getElementById("lnameERR");
    const phoneInput = document.getElementById("phone");
    const phoneERR = document.getElementById("phoneERR");
    const emailInput = document.getElementById("email");
    const emailERR = document.getElementById("emailERR");
    const messageInput = document.getElementById("message");
    const messageERR = document.getElementById("messageERR");
if(document.getElementById("formsubmit")){
document.getElementById("formsubmit").addEventListener('click', function (e) {

    e.preventDefault();
    if (!nameRegex.test(fnameInput.value)) {
        fnameERR.textContent = 'First name must start with capital letter';
        fnameERR.style.color = 'red';
    } else {
        fnameERR.textContent = '';
    }
    if (!nameRegex.test(lnameInput.value)) {
        lnameERR.textContent = 'Last name must start with capital letter';
        lnameERR.style.color = 'red';
    } else {
        lnameERR.textContent = '';
    }
    if (!PhoneRegex.test(phoneInput.value)) {
        phoneERR.textContent = 'Phone number can contain only digits';
        phoneERR.style.color = 'red';
    } else {
        phoneERR.textContent = '';
    }
    if (!EmailRegex.test(emailInput.value)) {
        emailERR.textContent = 'Wrong email, email must be in form like customersupport@porsche.com';
        emailERR.style.color = 'red';
    } else {
        emailERR.textContent = '';
    }
    if (!MessageRegex.test(messageInput.value)){
        messageERR.textContent = "Message can not be empty";
        messageERR.style.color = 'red';
    } else {
        messageERR.textContent = '';
    }
})};