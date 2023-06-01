window.onload = function(){
    changeLogoPosition();
    if(localStorage.length > 0){
        addUseronPage()
    }

    window.addEventListener('storage', addUseronPage);

    try{
        var signUpForm = document.getElementById('formSignUp');
        signUpForm.addEventListener('submit', validForm);
    }
    catch{};
    
    setInterval(changeLogoPosition, 2000);

}

function addUseronPage(){
    var meniuSignUp = document.getElementById('meniuSignUp');
    var userData = localStorage.getItem('formData');
    var userDataobj = JSON.parse(userData);
    console.log(JSON.parse(userData));

    meniuSignUp.textContent = 'Hello, ' + userDataobj['name']+'!';

    var form = document.getElementsByClassName('form-container')[0];
    form.remove();

    var titluPrincipal = document.getElementById('titluPrincipal');
    titluPrincipal.textContent = 'Welcome back, ' + userDataobj['name']+'!';

    var subTitlu = document.getElementById('subTitlu');
    subTitlu.textContent = 'This is your profile!';

    var main = document.getElementsByTagName('main')[0];
    //console.log(main);

    var newDiv = document.createElement('div');
    newDiv.className='profile-container';
    newDiv.style.display= 'flex';
    newDiv.style.flexDirection='row';
    newDiv.style.paddingBottom = '7%';
    newDiv.style.paddingTop = '2%';
    newDiv.style.zIndex ='1';

    main.append(newDiv);
    
    var divLeft= document.createElement('div');
    divLeft.id= 'left-side';
    newDiv.append(divLeft);
//left-side
    var parName = document.createElement('p');
    parName.id = 'par-name';
    parName.textContent = 'Name: ';
    divLeft.append(parName);

    var parDate = document.createElement('p');
    parDate.id = 'par-Date';
    parDate.textContent = 'Birth date: ';
    parDate.style = parName.style;
    divLeft.append(parDate);

    var parEmail = document.createElement('p');
    parEmail.id = 'par-Email';
    parEmail.textContent = 'E-mail: ';
    divLeft.append(parEmail);

    var parTel = document.createElement('p');
    parTel.id = 'par-Tel';
    parTel.textContent = 'Phone number: ';
    divLeft.append(parTel);

    var parGenre = document.createElement('p');
    parGenre.id = 'par-Genre';
    parGenre.textContent = 'Favorite genre:';
    divLeft.append(parGenre);

    var parMovies = document.createElement('p');
    parMovies.id = 'par-Movies';
    parMovies.textContent = 'Movies watched per month: ';
    divLeft.append(parMovies);
//right-side

    var divRight = document.createElement('div');
    divRight.id= 'right-side';
    newDiv.append(divRight);

    var parNameText = document.createElement('p');
    parNameText.id = 'par-name-Text';
    parNameText.textContent = userDataobj['name'];
    divRight.append(parNameText);

    var parDateText = document.createElement('p');
    parDateText.id = 'par-Date-Text';
    parDateText.textContent = userDataobj['dataN'];
    divRight.append(parDateText);

    var parEmailText = document.createElement('p');
    parEmailText.id = 'par-Email-Text';
    parEmailText.textContent = userDataobj['email'];
    divRight.append(parEmailText);

    var parTelText = document.createElement('p');
    parTelText.id = 'par-Tel-Text';
    parTelText.textContent = userDataobj['nrTel'];
    divRight.append(parTelText);

    var parGenreText = document.createElement('p');
    parGenreText.id = 'par-Genre-Text';
    parGenreText.textContent = userDataobj['genre'];
    divRight.append(parGenreText);

    var parMoviesText = document.createElement('p');
    parMoviesText.id = 'par-Movies-Text';
    parMoviesText.textContent = userDataobj['nrMovies'];
    divRight.append(parMoviesText);


}

function validForm(event){
    var nameText = document.forms['formSignUp']['name'].value;
    var nrTelText = document.forms['formSignUp']['nrTel'].value;
    var emailText = document.forms['formSignUp']['email'].value;
    var passwordText = document.forms['formSignUp']['password'].value;
    var repasswordText = document.forms['formSignUp']['re-password'].value;
    var dateText = new Date(document.forms['formSignUp']['dataN'].value);
    var currentDate = new Date();
    
    console.log(dateText, currentDate);
    console.log(currentDate.getFullYear() - dateText.getFullYear());

    event.preventDefault();
 
    if(currentDate.getFullYear() - dateText.getFullYear() < 16){
        alert('You must be at least 16 years old!')
        event.preventDefault();
        return false;
    }

    if(currentDate.getFullYear() - dateText.getFullYear() > 100){
        alert('You are too old!')
        event.preventDefault();
        return false;
    }


    if(nameText.lenght == 0){
        alert('Name is required');
        event.preventDefault();
        return false;
    }
    if(!nameText.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        alert('Insert a valid name');
        event.preventDefault();
        return false;
    }

    if(emailText.lenght == 0){
        alert('E-mail is required!');
        event.preventDefault();
        return false;
    }

    if(!emailText.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert('Insert a valid email');
        event.preventDefault();
        return false;
    }

    if(nrTelText.lenght == 0){
        alert('Telefon number is required');
        event.preventDefault();
        return false;
    }

    if(!nrTelText.match(/^07[0-9]{8}$/)){
        alert('Insert a valid telefon number*');
        event.preventDefault();
        return false;
    }

    if(passwordText.lenght == 0){
        alert('Password number is required');
        event.preventDefault();
        return false;
    }
    
    if(!passwordText.match(/^[A-Za-z]\w{8,}$/)){
        alert('Insert a valid');
        event.preventDefault();
        return false;
    }
    if(passwordText != repasswordText){
        alert('The passwords are diferent!')
        event.preventDefault();
        return false;
    }


    const formData = new FormData(document.forms['formSignUp']);

 //   console.log(document.forms['formSignUp']);

    const formDataObject = {};
    for (let [key, value] of formData.entries()) {
       // console.log(key, value);
        formDataObject[key] = value;
    }
  
    const formDataString = JSON.stringify(formDataObject);
    localStorage.setItem('formData', formDataString);

    location.reload(); 

    return true;
}

function getRandomPosition(maxWidth, maxHeight) {
    var meniu = document.getElementsByClassName('meniu')[0];
    var x = Math.floor(Math.random() * maxWidth);
    var y =  Math.floor(Math.random() * maxHeight);
    return { x: x, y: y };
  }
  
function changeLogoPosition() {
    var image = document.getElementById("logoRand");
    var logo = document.getElementsByClassName('logo')[0];
    var main = document.getElementsByTagName('main')[0];   
    var titlu = document.getElementsByClassName('titlu')[0]; 

    image.style.height = '90px';
    image.style.opacity ='0.7';
    image.style.zIndex = '1';

    var containerWidth = window.innerWidth - image.width;
    var containerHeight = main.clientHeight- image.height;
  
    var position = getRandomPosition(containerWidth, containerHeight);
    image.style.position = 'absolute';
    image.style.left = position.x+ "px";
    image.style.top = position.y+ "px";
  }
    

