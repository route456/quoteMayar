var btn = document.getElementById('btn');
var output = document.getElementById('output');
var quoteAuthor = document.getElementById('theauthor');

var myQuote = [
    { quote: "“Be yourself; everyone else is already taken.”", author: '― Oscar Wilde' },
    { quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "― Bernard M. Baruch" },
    { quote: "“A friend is someone who knows all about you and still loves you.”", author: " ― Elbert Hubbard" },
    { quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", author: " ― Mahatma Gandhi" },
    { quote: "“We accept the love we think we deserve.”", author: "― Stephen Chbosky" },
    { quote: "“Insanity is doing the same thing, over and over again, but expecting different results.”", author: "― Narcotics Anonymous" },
    { quote: "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”", author: " ― Marilyn Monroe" },
    { quote: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”", author: " ― John Green" },
    { quote: "“I have not failed. I've just found 10,000 ways that won't work.”", author: "― Thomas A. Edison" },
    { quote: "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”", author: "― Dr. Seuss" },
    { quote: "“The way to get started is to quit talking and begin doing.”", author: "― Walt Disney" },
    { quote: "“If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.”", author: "― James Cameron" },
    { quote: "“If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.”", author: "― Oprah Winfrey" },
    { quote: "“We are what we pretend to be, so we must be careful about what we pretend to be.”", author: "― Kurt Vonnegut, Mother Night" },
    { quote: "“And in that moment, I swear we were infinite.”", author: "― Stephen Chbosky" },
    { quote: "“Anyone who has never made a mistake has never tried anything new.”", author: "― Albert Einstein" },
    { quote: "“But better to get hurt by the truth than comforted with a lie.”", author: "― Khaled Hosseini" },
    { quote: "“The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.”", author: "― Mark Twain" },
    { quote: "“We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.”", author: "― Veronica Roth, Divergent" },
    { quote: "“Knowing yourself is the beginning of all wisdom.”", author: "― Aristotle" },
    { quote: "“it's better to have loved and lost Than never to have loved at all.”", author: "― Alfred Lord Tennyson" },
    { quote: "“Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.”", author: "― Nicholas Sparks" },
    { quote: "“Perhaps one did not want to be loved so much as to be understood.”", author: "― George Orwell" },
    { quote: "“The only true wisdom is in knowing you know nothing.”", author: "― Socrates" },
    {quote:"“A day without laughter is a day wasted.”", author: "― Nicolas Chamfort"}

];

var noRepeat = [];

btn.addEventListener('click', function () {

    if (noRepeat.length === myQuote.length) {
        noRepeat = [];
    }
    do {
        var random = Math.floor(Math.random() * myQuote.length);
    } while (noRepeat.indexOf(random) !== -1)

    noRepeat.push(random);

    output.innerHTML = myQuote[random].quote;
    quoteAuthor.innerHTML = myQuote[random].author;

});

