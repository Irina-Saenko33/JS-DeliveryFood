'use strict';

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const conteinerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem('gloDelivery');



function toggleModal() {
  modal.classList.toggle("is-open");
}

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
  loginInput.style.borderColor = '';
}

function authorized(){
  function logOut(){
    login= null;
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display='';
    userName.style.display = '';
    buttonOut.style.display = '';  
    buttonOut.removeEventListener('click',logOut);

     checkAuth();
  }
  console.log('avtorized');
  userName.textContent = login;
  buttonAuth.style.display='none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click',logOut);
}

function notAuthorized(){
  console.log('not avtorized');

  function logIn(event){
    event.preventDefault();
        
    //dz 41 min intensiv
    
    if(loginInput.value.trim()){
      login = loginInput.value;
      localStorage.setItem('gloDelivery',login);
      toogleModalAuth();
     
      buttonAuth.removeEventListener('click', toogleModalAuth);
      closeAuth.removeEventListener('click', toogleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    }else{
      loginInput.style.borderColor = '#ff0000';
      loginInput.value = '';
      alert('login?');
    }
    
  }
  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
  //53 min intensiv mimo_modal_window_close
  modalAuth.addEventListener('click',function(event){
    if(event.target.classList.contains('is-open')){
      toogleModalAuth()
    }
  })
}

function checkAuth(){
    if(login){
    authorized();
  } else {
    notAuthorized();
  }
}


function createCardRestourant(){

  const card = `	
      <a class="card card-restaurant">
          <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
          <div class="card-text">
              <div class="card-heading">
                  <h3 class="card-title">?????????? ????????</h3>
                  <span class="card-tag tag">50 ??????</span>
              </div>             
              <div class="card-info">
                <div class="rating">
                  4.5
                </div>
                <div class="price">???? 900 ???</div>
                <div class="category">??????????</div>
              </div>              
            </div>            
      </a>
   `;

   cardsRestaurants.insertAdjacentHTML('beforeend',card);
    cardsRestaurants.insertAdjacentHTML('beforeend',card);
     cardsRestaurants.insertAdjacentHTML('beforeend',card);
}



function createCardGood(){
  const card = document.createElement('section');
  card.className= 'card';
  card.insertAdjacentHTML('beforeend', `
          <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
             <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title card-title-reg">?????????? ????????????????</h3>
                </div>               
                <div class="card-info">
                  <div class="ingredients">???????? ????????????????, ?????? ??????????????????????, ?????? ????????????????????, ??????????????, ????????????,
                    ??????????.
                  </div>
                </div>                
                <div class="card-buttons">
                  <button class="button button-primary button-add-cart">
                    <span class="button-card-text">?? ??????????????</span>
                    <span class="button-cart-svg"></span>
                  </button>
                  <strong class="card-price-bold">510 ???</strong>
                </div>
              </div>           
           
  `);

  cardsMenu.insertAdjacentElement('beforeend',card);
}

function openGoods(event){
  const target = event.target;
  const restaurant = target.closest('.card-restaurant');
  if(restaurant){
     cardsMenu.textContent = '';
    conteinerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');

    createCardGood();
    createCardGood();
    createCardGood();
  }

 
}


cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

cardsRestaurants.addEventListener('click', openGoods);

logo.addEventListener('click',function(){
  conteinerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
})

checkAuth();
createCardRestourant();