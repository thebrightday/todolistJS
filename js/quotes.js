const quotes = [
    {
    quote: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    author: "Abraham Lincoln",
},{
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
},{
   quote: "I don't look to jump over 7-foot bars; I look around for 1-foot bars that I can step over.",
   author :  "Warren Buffett",
},{
   quote: "Learn as much by writing as by reading." ,
   author : "Lord Acton",
},{
   quote: "Dignity does not consist in possessing honors, but in deserving them.",
   author: "Aristotle",
},{
    quote: "The rule is perfect: in all matters of opinion our adversaries are insane.",
    author: "Mark Twain",
},{
    quote: "Death is better, a milder fate than tyranny.",
    author: "Aeschylus",
},{
    quote: "They have been at a great feast of languages, and stolen the scraps.",
    author: "William Shakespeare",
},{
    quote: "You can only be young once. But you can always be immature.",
    author: "Dave Barry",
},{
    quote:"Talent wins games, but teamwork wins championships.",
    author:"Michael Jordan",
}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;