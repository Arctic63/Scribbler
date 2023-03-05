
let sign_in = document.getElementById('sign-in-container');
let sign_up = document.getElementById('sign-up-container');
let container = document.getElementById('parent');

const signInControl = () => {
    sign_in.style.display = 'block';
    sign_up.style.display = 'none';
    
}

const signUpControl = () => {
    sign_up.style.display = 'block';
    sign_in.style.display = 'none';
    
}

const closePopUp = (id) => {
    document.getElementById(id).style.display = 'none';
    // document.getElementsById('btn-sign-in').disabled = false;
    // document.getElementsById('btn-sign-up').disabled = false;
}

const creatPost = (id) => {
    document.getElementById(id).style.display = 'block';
    // document.getElementsById('btn-sign-in').disabled = true;
    // document.getElementsById('btn-sign-up').disabled = true;
}

