var $content = document.getElementById('content');
var $author = document.getElementById('author');
var $random = document.getElementById('random');

var currentIndex = null;


function getRandomQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    while (currentIndex && currentIndex === index) {
        index = Math.floor(Math.random() * quotes.length);
    }
    currentIndex = index;
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
