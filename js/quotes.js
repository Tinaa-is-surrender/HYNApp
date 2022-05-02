const quotes = [
    { main: "김정수 사랑해",
        sub: "  - 나",
    }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// Math object : 수학 계산과 관련된 계산 기능을 포함한 객체
// Math.random() = 0~1사이의 숫자를 랜덤으로 송출함(0.4353423423)
// Math.random() * 10 = 1~10사이의 숫자를 송출 
// Matn.round(반올림), ceil(올림), floor(버림)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.main;
author.innerText = todaysQuote.sub;
