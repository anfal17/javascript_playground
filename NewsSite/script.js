const API_KEY = "d687f119eddf463abc0849f3a6bced09";
const url = "https://newsapi.org/v2/everything?q="

function reload() {
    window.location.reload();
}

window.addEventListener('load' , () => fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    // missed & before apikey wasted 30 mins
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById("cards-container");
    const newsCardsTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cardClone = newsCardsTemplate.content.cloneNode(true);
        fillDataInCard(cardClone , article);
        cardsContainer.appendChild(cardClone);
    })
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-Us",{
        timeZone: "Asia/Jakarta"
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    // Mistake of using '' instead of  ``

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url , "_blank");
    })
    
}

let curSelectedNav = null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-btn");
const searchText = document.getElementById("search-bar");

searchButton.addEventListener('click', () => {
    const searchQuery =  searchText.value;
    if(!searchQuery) return;
    fetchNews(searchQuery);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;

})
