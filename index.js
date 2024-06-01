const URL = "https://api.quotable.io/random";

const button = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const getQuote = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    quote.innerText = `"${data.content}"`;
    author.innerText = "-"+data.author;
}

button.addEventListener("click", getQuote);