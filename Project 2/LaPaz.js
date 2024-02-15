const getQuote = async function()  {
    let output = await fetch('https://type.fit/api/quotes',{method: 'GET'});
    let quotes = await output.json();
    let Quoteel = Math.floor(Math.random() * quotes.length);
    let quote = quotes[Quoteel];
    let contentel=document.getElementById("content")
    contentel.innerText=quote.text
     }
     const quote1 = getQuote().then((quote) => {console.log(quote)}).catch((error)=> {
        console.log(error)
     }) 
