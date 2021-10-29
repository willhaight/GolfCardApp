let totalField = document.getElementById('totalPoints');
let pointFields = document.getElementsByClassName("pointField");

//score updating function
function refreshScore(){
   let pointTotal = 0;
    for(let i = 0; i < pointFields.length; i++){
        if(pointFields[i].value == ""){
            pointFields[i].value = 0;
        }
        pointTotal += parseInt(pointFields[i].value);
    }
    totalField.innerHTML = "<p>" + pointTotal + "</p>"
}
//event listener to update score
for(let i = 0; i < pointFields.length; i++){
    pointFields[i].addEventListener('click', refreshScore);
    pointFields[i].addEventListener('input', refreshScore);
}
//API stuff
let site = "https://golf-courses-api.herokuapp.com/courses";
async function call(){
let response = await fetch(site);
let apiData = await response.json();
console.log(apiData);
}
