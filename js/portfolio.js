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
    let data = new PortfolioProject (
        "Tindog",
        "Bootstrap practice. Single page for Dogs looking for new home.",
        "https://sisarus.github.io/Bootstrap-Tindog/",
        "Bootstrap-Tindog",
        "img/portfolio_images/tindog-image.png",
        ['frontend', 'bootstap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "QR code",
        "I completed this exercise by only looking at the image and following the given styles. More information in project.",
        "https://sisarus.github.io/css-qrcode/",
        "qr-code-component-main",
        "img/portfolio_images/learning.png",
        ['frontend', 'bootstap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Javascript-Drum",
        "Play drums by pressing or using the keyboard.",
        "https://github.com/Sisarus/Javascript-drum/settings/pages",
        "Javascript-drum",
        "img/portfolio_images/learning_1.png",
        ['frontend', 'jquery']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "jQuery-Simons Game",
        "I have developed a small game using jQuery.",
        "https://sisarus.github.io/jQuery-Simons-Game/",
        "jQuery-Simons-Game",
        "img/portfolio_images/learning_2.png",
        ['frontend', 'jquery']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "News Letter signup",
        "I have implemented a newsletter subscription using Node.js and Mailchimp. However, since Heroku is no longer free, this feature is not currently available.",
        "https://sisarus.github.io/css-qrcode/",
        "qr-code-component-main",
        "img/portfolio_images/Newletter.png",
        ['frontend', 'bootstap']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Nodejs Todolist",
        "This is a Node.js project where users can input messages that are displayed and can also be deleted.",
        "https://sisarus.github.io/css-qrcode/",
        "Nodejs-toDoList",
        "img/portfolio_images/nodejs-todolist.png",
        ['node']
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "nestjs-api-todo",
        "This is a Node.js project where users can input messages that are displayed and can also be deleted.",
        "",
        "nestjs-api-todo",
        "img/backend.jpg",
        ['backend', 'node']
    )
    listProjects.push(data);
}


let cards = '';

function makeCards(project) {
    cards += '<div class="col-md-3"><div class="card mt-3">';
    cards += '<img class="card-img" src="' + project._image +'" alt="project image" />';
    cards += '<div class="bg-secondary text-center text-white p-1" disabled>';
    if(project._tags.length !== 0) {
        let tagNumber = 0;
        cards += '<p class="mb-0 text-uppercase font-weight-light">';
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
    console.log(tagList)

    let filtered = listProjects.filter(project => tagList.some(wantedTag => project._tags.includes(wantedTag)));
    cards = '';
    console.log("filtteri" + filtered)
    if(filtered.length === 0) {
        listProjects.map(makeCards);

    } else {
        filtered.map(makeCards);
    }
    $('#portfolio').html(cards);
    console.log('here');
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


   // $('#look-for').html(btnTags);

    listProjects.map(makeCards);
    $('#portfolio').html(cards);
});
