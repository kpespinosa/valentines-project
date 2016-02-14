var $content = document.getElementById('content');
var $author = document.getElementById('author');


function getRandomQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}


function renderQuote(quote) {
    $content.textContent = quote.content;
    $author.textContent = quote.author;
}


renderQuote(getRandomQuote());
