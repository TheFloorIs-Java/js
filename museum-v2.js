let content = document.getElementById("content");
let loadButton = document.getElementById("loadButton");
let titleInput = document.getElementById("titleInput");
let idInput = document.getElementById("idInput");
let submitButton = document.getElementById("submitButton");
// let's move into using eventListener instead of onclick - eventlistener allows multiple handlers for an event as well
// as more configuration - so potentially clicking loadButton may trigger multiple actions!
loadButton.addEventListener("click", apiGetPaintings);
submitButton.addEventListener("click", apiPostPainting);
// async marks a function as asynchronous. This means it's intended to wait (ie waiting for web communication)
// the reason why it matters, is because we want sites to be user-friendly: so rather than being unresponsive while
// waiting for our api to return, we can execute other methods that happen while we're waiting
// so, our code doesn't necessarily happen in order. we can have multiple events fire that end at entirely different times.

// related to promises: a value that will be filled, eventually, at the end of a web request.
// we can't expect instant results.
async function apiGetPaintings(){
    console.log("button clicked");
    let response = await fetch("http://localhost:9000/paintings");
    response = await response.json();
    loadPaintings(response);
}
async function apiGetArtistFromId(id){
    let response = await fetch("http://localhost:9000/artist/"+id);
    response = await response.json();
    console.log(response);
    return {id:response.id, name:response.name};
}
async function loadPaintings(response){
    content.innerHTML = "";
    console.log(response)
    let paintingList = document.createElement("ul");
    
    for(let i = 0; i < response.length; i++){
        let artist = await apiGetArtistFromId(response[i].artistID);
        console.log(artist);
        console.log(artist.id);
        console.log(artist.name);
        // ul is unordered list (bullet points)
        // li is a list element
        let paintingCard = document.createElement("li");
        let paintingTitle = document.createElement("p");
        paintingTitle.innerText = response[i].title;
        let artistName = document.createElement("p");
        artistName.innerText = artist.name;
        paintingCard.appendChild(paintingTitle);
        paintingCard.appendChild(artistName);
        paintingList.appendChild(paintingCard);
    }
    content.appendChild(paintingList);
}
async function apiPostPainting(){
    let inputPainting = {
        title:titleInput.value,
        artistID:idInput.value
    }
    let response = await fetch("http://localhost:9000/paintings", {
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify(inputPainting)
    });
    apiGetPaintings();
}