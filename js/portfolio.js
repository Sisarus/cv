/*
 * Author: Alisa Luomanmäki
 * 
 */

class PortfolioProject {
    constructor(name, details, urlLivePage, urlGitHub, image, tags) {
        this._name = name;
        this._details = details;
        this._urlLivePage = urlLivePage;
        this._urlGitHub = urlGitHub;
        this._image = image;
        this._tags = [...tags];
    }
}

let listProjects = []

var accountURL = "https://github.com/Sisarus/"

// portfolioProjects

function fillData() {

    let  data = new PortfolioProject (
        "ReactOpedia",
        "In this app we test how React and Redux work together.",
        "",
        "react-redux",
        "reduxOpedia.png",
        ['frontend', 'react', 'redux', 'bootstrap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "My town",
        "Homework from school. Learning bootstrap and jQuery. Shows my hometown",
        "https://sisarus.github.io/Bootstrap-jQuery-my-town/",
        "Bootstrap-jQuery-my-town",
        "mytown01.png",
        ['frontend', 'bootstrap', 'jquery']
    )
    listProjects.push(data);
    
    data = new PortfolioProject (
        "Tindog",
        "Bootstrap practice. Single page for Dogs looking for new home.",
        "https://sisarus.github.io/Bootstrap-Tindog/",
        "Bootstrap-Tindog",
        "tindog-image.png",
        ['frontend', 'bootstrap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "QR code",
        "I completed this exercise by only looking at the image and following the given styles. More information in project.",
        "https://sisarus.github.io/css-qrcode/",
        "qr-code-component-main",
        "learning.png",
        ['frontend', 'bootstrap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Drums",
        "Play drums by pressing or using the keyboard.",
        "https://sisarus.github.io/js-drum/",
        "js-drum",
        "learning_1.png",
        ['javascript']
    )
    listProjects.push(data);


    data = new PortfolioProject (
        "Kalevala Quiz",
        "Play drums by pressing or using the keyboard.",
        "https://sisarus.github.io/kalevala-quiz/",
        "kalevala-quiz",
        "kalevala01.png",
        ['frontend', 'bootstrap', 'jquery']
    )
    listProjects.push(data);


    data = new PortfolioProject (
        "Simons Game",
        "I have developed a small game using jQuery.",
        "https://sisarus.github.io/jQuery-Simons-Game/",
        "jQuery-Simons-Game",
        "learning_2.png",
        ['jquery']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "News Letter signup",
        "I have implemented a newsletter subscription using Node.js and Mailchimp. However, since Heroku is no longer free, this feature is not currently available.",
        "https://sisarus.github.io/css-qrcode/",
        "qr-code-component-main",
        "Newletter.png",
        ['frontend', 'bootstrap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Todo-list",
        "This is a Node.js project where users can input messages that are displayed and can also be deleted.",
        "https://sisarus.github.io/css-qrcode/",
        "Nodejs-toDoList",
        "nodejs-todolist.png",
        ['node', 'express', 'rest']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "api-todo",
        "This is a Node.js project where users can input messages that are displayed and can also be deleted. Using NestJS",
        "",
        "nestjs-api-todo",
        "backend.jpg",
        ['backend', 'node', 'postgresql', 'docker', 'jwt' , 'rest']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "api-Notes",
        "Simple backend for notes.",
        "",
        "Nodejs-todoList",
        "backend.jpg",
        ['backend', 'node', 'express', 'rest']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "react-redux-db",
        "Single page React app that read and saves data to json. States are stored by Redux.",
        "",
        "react-redux-db",
        "backend.jpg",
        ['frontend', 'react', 'redux', 'bootstrap', 'rest']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Router Nav",
        "Single page React app where you can use navigation what is made with router.",
        "",
        "react-router",
        "reactrouter01.png",
        ['frontend', 'react', 'bootstrap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "CyclOPedia",
        "Single page app that shows difference between Class and Funtion Components. App create Instructor for class and user can add more student. App shows when components will update. Added same Class component but with function base.",
        "",
        "react-cyclopedia",
        "react_components.png",
        ['frontend', 'react', 'bootstrap']
    )
    listProjects.push(data);


    data = new PortfolioProject (
        "api-Notes",
        "Simple backend for notes.",
        "",
        "Nodejs-todoList",
        "backend.jpg",
        ['backend', 'node', 'express', 'rest']
    )
    listProjects.push(data);
    
    data = new PortfolioProject (
        "Fruits Database",
        "This is a simple application for managing fruits and users using MongoDB as the database. It allows users to add, update, and delete fruits, as well as associate fruits with users. Run from shell. This only create base database for testing.",
        "",
        "fruits_database",
        "backend.jpg",
        ['backend', 'mongodb', 'node']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Secrets",
        "This is a web application that provides user authentication and security features. Users can register, log in, and submit secrets. Secrets are visible to authenticated users only.",
        "",
        "auth-security",
        "secrets_01.png",
        ['backend', 'frontend', 'mongodb', 'node', 'ejs', 'session', 'mongoose', 'passportjs', 'google-authentication', 'express']
    )
    listProjects.push(data);
}


let cards = '';

function makeCards(project) {
    cards += '<div class="col-md-3"><div class="card mt-3">';
    cards += '<img class="card-img" src="img/portfolio_images/' + project._image +'" alt="project image" />';
    cards += '<div class="bg-secondary text-center text-white p-1 mt-n3" disabled>';
    if(project._tags.length !== 0) {
        let tagNumber = 0;
        cards += '<p class="mb-0 text-uppercase" style="font-size: 0.9rem">';
        project._tags.map(tag => {
            tagNumber += 1;
            cards += tag;
            if( tagNumber < project._tags.length){
                cards += ' | ';
            }
        });
        cards += '</p>';
    }
    cards +='</div>';
    cards += '<div class="card-body">';
    cards += '<h4 class="card-title">' + project._name + '</h4>';
    cards += '<p class="card-text">' + project._details + '</p>';
    if(project._urlLivePage.length !== 0) {
        cards += '<a href="' + project._urlLivePage + '" class="btn btn-outline-secondary mr-3" target="_blank">Live Page</a>';
    }
    if(project._urlGitHub.length !== 0) {
        cards += '<a href="' + accountURL + project._urlGitHub + '" class="btn btn-outline-secondary" target="_blank">Source Code</a>';
    }
    cards += '</div></div></div>';
}

let filteredList = [];

let tagList = [];

function filterWithTags() {
    if(tagList.length === 0){
        listProjects.map(makeCards);
        return $('#portfolio').html(cards);
    }

    let filtered = listProjects.filter(project => tagList.every(wantedTag => project._tags.includes(wantedTag)));
    cards = '';

    filtered.map(makeCards);
    
    $('#portfolio').html(cards);
}


$(document).ready(function () {
    fillData();

    $('.isActive').on('click', function() {
        if(tagList.includes($(this).attr("value"))){
            tagList = tagList.filter(v => v !== $(this).attr("value")); 
            $(this).removeClass('btn-secondary');
            $(this).addClass('btn-outline-secondary');
        } else {
            tagList.push($(this).attr("value"));
            
            $(this).addClass('btn-secondary');
            $(this).removeClass('btn-outline-secondary');
        }

        filterWithTags();

      });

    listProjects.map(makeCards);
    $('#portfolio').html(cards);
});
