const login = document.querySelector('#login');
const ipuser = document.querySelector('#mail');
const ipass = document.querySelector('#pass');
const error = document.querySelector('.error');

login.addEventListener('click',inisio);
ipuser.addEventListener('focus',focusinput);
ipass.addEventListener('focus',focusinput);

function inisio(){
    if (!ipuser.value || !ipass.value) return;

    if (ipuser.value !== 'ejemplo@gmail.com' || ipass.value !== '123456'){
        
    //error.classList.add(['visible']);
    error.classList.remove(['hide']);
        console.log('error');
    }
    else{
        console.log('acceso correcto');
        document.location.assign('../Layout/index.html');
    }

}
function focusinput(){
    //error.classList.add(['visible']);
    //error.classList.remove(['hide']);

}