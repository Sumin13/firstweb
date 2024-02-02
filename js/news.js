document.addEventListener("DOMContentLoaded", getNews);

function getNews() {
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=00c5539245b640e49c18af52164c8f28Y";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.articles) {
        displayNews(data.articles);
      } else {
        console.error(
          "Error fetching news:",
          data ? data.message : "Unknown error"
        );
      }
    })
    .catch((error) => console.error("Error fetching news:", error));
}

function displayNews(articles) {
  const newsContainer = document.getElementById("news-container");

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

    newsContainer.appendChild(articleElement);
  });
}
