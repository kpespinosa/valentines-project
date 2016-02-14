var $content = document.getElementById('content');
var $author = document.getElementById('author');
var $random = document.getElementById('random');


function getRandomQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}


function renderQuote(quote) {
    $content.textContent = quote.content;
    $author.textContent = quote.author;
}


renderQuote(getRandomQuote());

$random.addEventListener('click', function() {
    renderQuote(getRandomQuote());
});
