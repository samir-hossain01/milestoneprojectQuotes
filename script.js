/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

const quotes = [
    
    {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source : "Maya Angelou ",
    citation: "google",
    year : 2022,
    tag: 'Motivational',
    id:01,
   
},
    {
    quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
    source : "Dalai Lama ",
    citation: "google",
    year : 2022,
    tag: 'artist',
    id:02,

   
},
    {
    quote: "It's like soul music, isn't it all soul music? Otherwise what is it, non-soul music? I-have-no-soul music? Soulless music? People need to put a name on something to identify it, and I understand it",
    source : "Mark Lanegan ",
    citation: "google",
    year : 2022,
    tag: 'Motivational'
 
   
},
    {
    quote: "Life has a much bigger plan for you. Happiness is part of that plan. Health is part of that plan. Stability is part of that plan. Constant struggle is not.",
    source : "Kris Carr ",
    citation: "google",
    year : 20422,
    tag: 'artist'

   
},
    {
    quote: "The first step is clearly defining what it is you're after, because without knowing that, you'll never get it.",
    source : "Halle Berry ",
    citation: "google",
    year : 2022,
    tag: 'Motivational'

   
},
    {
    quote: "Rarely are opportunities presented to you in a perfect way. In a nice little box with a yellow bow on top. 'Here, open it, it's perfect. You'll love it.' Opportunities -- the good ones -- are messy, confusing and hard to recognize. They're risky. They challenge you.",
    source : "Susan Wojcicki ",
    citation: "google",
    year : 2022,
    tag: 'artist'


   
},
    {
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    source : "Martin Luther King, Jr. ",
    citation: "google",
    year : 2022,
    tag: 'Motivational'



   
},
    {
    quote: "Fail fast. Fail often... The most talented people in the world have bad ideas. That's a good thing to learn.",
    source : "Rashida Jones ",
    citation: "google",
    year : 2022,
    tag: 'artist'


   
},
    {
    quote: "Success is a lot like a bright, white tuxedo. You feel terrific when you get it, but then you're desperately afraid of getting it dirty, of spoiling it in any way.",
    source : "Conan O'Brien ",
    citation: "google",
    year : 2022,
    tag: 'Motivational'


   
},
    {
    quote: "My mother thinks I am the best. And I was raised to always believe what my mother tells me",
    source : "Diego Maradona ",
    citation: "google",
    tag:'Motivational',


   
},
    {
    quote: "There is a thing about beauty. Beauty is always associated with the male fantasy of what the female body is. I don't think there is anything wrong with beauty. It's just what women think is beautiful can be different. And there can be a beauty in individualism. If there is a wart or a scar, this can be beautiful, in a sense, when you paint it.",
    source : "Jenny Saville ",
    citation: "yahoo",
    year : 2005,
    tag:'artist',

   
},
]

// Random Quote Array End here


let randomButton = document.querySelector('#load-quote'); 
let quote = document.querySelector('.quote');
let source = document.querySelector('.source');
let citation = document.querySelector('.citation');
let year = document.querySelector('.year');
let container =document.querySelector('.container');
let quoteTag = document.querySelector('.artist');
let buttonTag = document.querySelector('#BtnTag');

/***
 * `getRandomQuote` function
 ***/
 let randomquote;
 function getRandomQuote(){
    randomquote = Math.floor(Math.random()*quotes.length);
    printQuote();
}

/***
 * `printQuote` function
 ***/
 function printQuote(){
    quote.innerHTML=quotes[randomquote].quote;
    source.innerHTML=quotes[randomquote].source;
    citation.innerText=quotes[randomquote].citation;
    year.innerHTML=quotes[randomquote].year;
    quoteTag.innerHTML = quotes[randomquote].tag;
    source.appendChild(citation)
    source.appendChild(year);

}
/***
 * click event listener for the print quote button
 ***/
randomButton.addEventListener('click',()=>{

    getRandomQuote();
    colorFunction();
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quote-box');
    quoteDiv.innerHTML =
    `
    <p class="quote">
    ${quote}
    </p>
    <p class="source">${source} <span class="citation">${citation}</span>
    <span class="year">${year}</span></span>  </p>

`;
  

})

// Click And Get Random Quote End here


// Random Color Chnage start here
var colors = [
    '#F8D210',
    '#122620',
    '#4C5270',
    '#000C66',
    '#050A30',
    '#4E4F50',
    '#171515',
    '#FF8882',
    '#15B5B0',
  
];
function colorFunction(){
randomcolor = Math.floor(Math.random() * colors.length);
container.style.backgroundColor= `${colors[randomcolor]}`;
}
// Random Color Change End here

// Auto Change Quote Start here
function getRandomColor() {
    for (let i = 0; i <quotes.length; i++ ) {
        randomquote = Math.floor(Math.random()*quotes.length);
    }
}

function autoChangeQuote(){
    getRandomQuote();
    colorFunction();
}
setInterval(autoChangeQuote,4000);

// Window Onload Color Change

window.addEventListener('load',function(){
    colorFunction();
})



// buttonTag.addEventListener('click',function(){

//     if(quotes[randomquote].tag == 'Motivational'){
        
//         console.log('asteci tore nite');
//     }
//     // for(let i = 0; i<quotes[randomquote].tag == 'Motivational'.length; i++){
//     // }
//         // if start here
//     //      console.log(quotes[i]);

//     //    }quotes[i]);
//     //    if(quotes[i]){

//     //    if end here
// //        else {
        
// // console.log(`isndkg`)
// //     }
//     // else end here



// })


    