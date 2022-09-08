// JS is loosely typed. that means that we don't need to strictly define types when we create variables.
// types still exist, but JS tried to convert types when we have some operation that doesn't have matching types.
console.log(document);

let button = document.getElementById('loadButton');
let content = document.getElementById('container');
button.onclick = loadSpan;

function loadSpan(){
    content.innerText = "button clicked placeholder";
}