window.onload = function(){


    if(localStorage.length > 0){
       addUseronPage()
   }
}

function addUseronPage(){
    var meniuSignUp = document.getElementById('meniuSignUp');
    var userData = localStorage.getItem('formData');
    var userDataobj = JSON.parse(userData);
    console.log(JSON.parse(userData));

    meniuSignUp.textContent = 'Hello, ' + userDataobj['name']+'!';

    
    console.log(meniuSignUp);
}
