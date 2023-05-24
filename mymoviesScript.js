/*const movieArr= [
    {cover: 'img/TheGodfather.jpg', title: 'The Godfater', director: 'Francis Ford Coppola', avgR: '9.2', yourR: 'my rating', shelves: 'Watched', watchD: '12 mar 2019'}
    ,{cover: 'img/Dune.jpg', title: 'Dune', director: 'Denis Villeneuve', avgR: '8.0', yourR: 'my rating', shelves: 'Watched', watchD: '4 oct 2022'}
    ,{cover: 'img/JohnWick:Chapter4.jpeg', title: 'John Wick: Chapter 4', director: 'Chad Stahelski', avgR: '8.3', yourR: 'my rating', shelves: 'Watched', watchD: '9 apr 2023'}
    ,{cover: 'img/Inception.jpg', title: 'Inception', director: 'Christopher Nolan', avgR: '8.8', yourR: 'my rating', shelves: '', watchD: '1 sep 2020'}
    ,{cover: 'img/TheOutfit.jpeg', title: 'The Outfit', director: 'Graham Moore', avgR: '7.1', yourR: 'my rating', shelves: 'Favorites', watchD: '23 aug 2021'}
    ,{cover: 'img/TheDevilAlltheTime.jpg', title: 'The Devil All the Time', director: 'Antonio Campos', avgR: '7.1', yourR: 'my rating', shelves: 'Favorites', watchD: '16 sep 2022'}
    ,{cover: 'img/BlackPanther:WakandaForever.webp', title: 'Black Panther: Wakanda Forever', director: 'Ryan Coogler', avgR: '6.7', yourR: 'my rating', shelves: 'Watched', watchD: '23 nov 2022'}
];*/

window.onload = function(){

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
