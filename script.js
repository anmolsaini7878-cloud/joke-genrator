let joketext=document.getElementById("joke")
let btn=document.getElementById("btn")

btn.addEventListener("click",async () => {
    try{
const response= await fetch("https://joke.deno.dev/")
const data= await response.json()
joketext.innerHTML=` setup=${data.setup}"😂" <br><em>punchline=${data.punchline}</em>"😹" `
    }
    catch(err){
        joketext.textContent="failed to load joke 😢"
    }
})