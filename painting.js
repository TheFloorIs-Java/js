let content = document.getElementById("content");
let url = window.location.href;
let title = url.split("=")[1];
console.log(title);
loadUrl();
async function loadUrl(){
    let response = await fetch("http://localhost:9000/paintings/title/"+title);
    response = await response.json();
    let image = document.createElement("img");
    image.src = response.url;
    console.log(response);
    content.appendChild(image);
}
