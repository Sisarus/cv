/*
 * Author: Alisa Luomanmäki
 * 
 */

class PortfolioProject {
    constructor(name, details, urlGitHub, urlLivePage, image) {
        this._name = name;
        this._details = details;
        this._urlGitHub = urlGitHub;
        this._urlLivePage = urlLivePage;
        this._image = image;
    }
}

let listProjects = []

// portfolioProjects

function fillData() {
    let data = new PortfolioProject (
        "Tindog",
        "Bootstrap practice. Single page for Dogs looking for new home.",
        "https://github.com/Sisarus/Bootstrap-Tindog",
        "https://sisarus.github.io/Bootstrap-Tindog/",
        "img/portfolio_images/tindog-image.png",
    )
    listProjects.push(data);
}


let cards = '';

function makeCards(project) {
    cards += '<div class="col-md-4"><div class="card">';
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
