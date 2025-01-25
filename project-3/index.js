const quotes = [

"The only way to do great work is to love what you do.",
"Success is not the key to happiness. Happiness is the key to success.",
"Life is 10% what happens to us and 90% how we react to it.",
"The future belongs to those who believe in the beauty of their dreams.",
"Do not wait for the perfect moment, take the moment and make it perfect.",
"In the middle of every difficulty lies opportunity.",
"Happiness is not something ready-made. It comes from your own actions.",
"Believe you can, and you're halfway there.",
"The best time to plant a tree was 20 years ago. The second-best time is now.",
"Don’t watch the clock; do what it does. Keep going."
]

const usedIndex = new Set() 
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndex.size >= quotes.length) {
        usedIndex.clear()
    }

    while(true) {

    const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndex.has(randomIdx)) continue

    const quote = quotes [randomIdx]
    quoteElement.innerHTML = quote;
    usedIndex.add(randomIdx)
    break
    }
    
}