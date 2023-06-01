
window.onload = function(){


     if(localStorage.length > 0){
        addUseronPage()
    }

    var searchBar = document.getElementById('text-box');
    searchBar.textContent = '';

    searchBar.addEventListener('keydown', searchBarEnter);
}

function searchBarEnter(event){

    var searchBar = document.getElementById('text-box');
    var input = event.target.value.toLowerCase();
    var filme = document.getElementsByTagName('tr');
    console.log(input, filme.length);


    for(let i = 1; i < filme.length; i++){
        let titlu = secondChild(filme[i]).textContent.toLowerCase();
        let director = secondChild(filme[i]).nextElementSibling.textContent.toLowerCase();
        const isVisible = titlu.includes(input) || director.includes(input);
        if(!isVisible)
            filme[i].style.display = 'none';
        else
            filme[i].style.display = '';


    }

}

function secondChild(object){
    return object.firstElementChild.nextElementSibling
}


function addUseronPage(){
    var meniuSignUp = document.getElementById('meniuSignUp');
    var userData = localStorage.getItem('formData');
    var userDataobj = JSON.parse(userData);
    console.log(JSON.parse(userData));

    meniuSignUp.textContent = 'Hello, ' + userDataobj['name']+'!';

    
    console.log(meniuSignUp);
}

