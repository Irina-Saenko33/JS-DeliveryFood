const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


///day1
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');

let login = '';

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
  
}



function authorized(){
  console.log('avtorized');
  buttonAuth.style.display='none';
}

function notAuthorized(){
  console.log('not avtorized');

  function logIn(event){
    event.preventDefault();
    login = loginInput.value;
    toogleModalAuth();
    chekAuth();
  }
  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function chekAuth(){
    if(login){
    authorized();
  } else {
    notAuthorized();
  }
}
chekAuth();