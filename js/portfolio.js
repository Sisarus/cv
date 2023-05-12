/*
 * Author: Alisa Luomanmäki
 * 
 */

class PortfolioProject {
    constructor(name, details, urlLivePage, urlGitHub, image) {
        this._name = name;
        this._details = details;
        this._urlLivePage = urlLivePage;
        this._urlGitHub = urlGitHub;
        this._image = image;
    }
}

let listProjects = []

// portfolioProjects

function fillData() {
    let data = new PortfolioProject (
        "Tindog",
        "Bootstrap practice. Single page for Dogs looking for new home.",
        "https://sisarus.github.io/Bootstrap-Tindog/",
        "https://github.com/Sisarus/Bootstrap-Tindog",
        "img/portfolio_images/tindog-image.png",
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "QR code",
        "I completed this exercise by only looking at the image and following the given styles. More in project",
        "https://sisarus.github.io/css-qrcode/",
        "https://github.com/Sisarus/qr-code-component-main",
        "img/portfolio_images/learning.png",
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Javascript-Drum",
        "Play drums by pressing or using the keyboard.",
        "https://github.com/Sisarus/Javascript-drum/settings/pages",
        "https://github.com/Sisarus/Javascript-drum",
        "img/portfolio_images/learning_1.png",
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "jQuery-Simons Game",
        "I have developed a small game using jQuery.",
        "https://sisarus.github.io/jQuery-Simons-Game/",
        "https://github.com/Sisarus/jQuery-Simons-Game",
        "img/portfolio_images/learning_2.png",
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "News Letter signup",
        "I have implemented a newsletter subscription using Node.js and Mailchimp. However, since Heroku is no longer free, this feature is not currently available.",
        "https://sisarus.github.io/css-qrcode/",
        "https://github.com/Sisarus/qr-code-component-main",
        "img/portfolio_images/Newletter.png",
    )
    listProjects.push(data);

    data = new PortfolioProject (
        "Nodejs Todolist",
        "This is a Node.js project where users can input messages that are displayed and can also be deleted.",
        "https://sisarus.github.io/css-qrcode/",
        "https://github.com/Sisarus/Nodejs-toDoList",
        "img/portfolio_images/nodejs-todolist.png",
    )
    listProjects.push(data);
}


let cards = '';

function makeCards(project) {
    cards += '<div class="col-md-3"><div class="card mt-3">';
    cards += '<img class="card-img-top profolioImg" src="' + project._image +'" />';
    cards += '<div class="card-body"><h4 class="card-title">' + project._name + '</h4>';
    cards += '<p class="card-text">' + project._details + '</p>';
    if(project._urlLivePage.lenght !== 0) {
        cards += '<a href="' + project._urlLivePage + '" class="btn btn-outline-secondary mr-3" target="_blank">Live Page</a>';
    }
    if(project._urlLivePage.lenght !== 0) {
        cards += '<a href="' + project._urlGitHub + '" class="btn btn-outline-secondary" target="_blank">Source Code</a>';
    }
    cards += '</div></div></div>';
}


$(document).ready(function () {
    fillData();    

    listProjects.map(makeCards);
    $('#portfolio').html(cards);
});
