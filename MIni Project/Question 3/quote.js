
var quotes=["The Way Get Started Is To Quit Talking And Begin Doing. \- Walt Disney" ,
"The secret of getting ahead is getting started.  \- Mark Twain",
"The best time to plant a tree was 20 years ago. The second best time is now.   \-  Chinese Proverb",
"If people are doubting how far you can go, go so far that you can’t hear them anymore. \-  Michele Ruiz",
"Write it. Shoot it. Publish it. Crochet it, saut it, whatever. MAKE.  \- Joss Whedon" ,
"Don\'t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. \- Mary Kay Ash",
"Without hustle, talent will only carry you so far. \- Gary Vaynerchuk",
"How wonderful it is that nobody need wait a single moment before starting to improve the world. \-  Anne Frank",
"Success is the sum of small efforts, repeated day in and day out. \- Robert Collier",
"There is no substitute for hard work. \- Thomas Edison",
"If people only knew how hard I\'ve worked to gain my mastery, it wouldn\'t seem so wonderful at all.    \- Michelangelo",
"Don\'t say you don\'t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresea, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein. \- H. Jackson Brown Jr."]

function generate() {
var randnum= Math.floor( Math.random() * (quotes.length));
//var text=quotes[randnum];
document.getElementById('quote').innerHTML =quotes[randnum];
;
}
