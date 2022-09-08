// JS is loosely typed. that means that we don't need to strictly define types when we create variables.
// types still exist, but JS tried to convert types when we have some operation that doesn't have matching types.
console.log(document);

let button = document.getElementById('loadButton');
let content = document.getElementById('container');
button.onclick = loadAllPaintings;

function loadSpan(response){
    for(let i = 0; i < response.length; i++){
        let paintingTitle = document.createElement("p");
        paintingTitle.innerText = response[i].title;
        content.appendChild(paintingTitle);
    }
}
function loadAllPaintings(){
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:9000/paintings");
    request.send();

    request.onreadystatechange = load;

    function load(){
        if(request.readyState == 4 && request.status == 200){
            let responsejson = JSON.parse(request.response);
            console.log(responsejson);
            loadSpan(responsejson);
        }
    }
}
