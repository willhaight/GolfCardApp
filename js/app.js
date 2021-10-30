//API stuff
let site = "https://golf-courses-api.herokuapp.com/courses";
async function call(){
let response = await fetch(site);
let apiData = await response.json();
console.log(apiData);
}


//interaction
let totalField0 = document.getElementById('totalPoints');
let totalField1 = document.getElementById('totalPoints');
let totalField2 = document.getElementById('totalPoints');
let totalField3 = document.getElementById('totalPoints');
let pointFields0 = document.getElementsByClassName("pointField0");
let pointFields1 = document.getElementsByClassName("pointField1");
let pointFields2 = document.getElementsByClassName("pointField2");
let pointFields3 = document.getElementsByClassName("pointField3");
let nameField = document.getElementById('playerNames');
let cardBody = document.getElementById('playerCard');


//score updating function
function refreshScore0(){
    console.log("running0");
   let pointTotal = 0;
    for(let i = 0; i < pointFields0.length; i++){
        if(pointFields0[i].value == ""){
            pointFields0[i].value = 0;
        }
        pointTotal += parseInt(pointFields0[i].value);
    }
    totalField0.innerHTML = "<p>" + pointTotal + "</p>";
}

function refreshScore1(){
    console.log("running1");
   let pointTotal = 0;
    for(let i = 0; i < pointFields1.length; i++){
        if(pointFields1[i].value == ""){
            pointFields1[i].value = 0;
        }
        pointTotal += parseInt(pointFields1[i].value);
    }
    totalField1.innerHTML = "<p>" + pointTotal + "</p>";
}

function refreshScore2(){
    console.log("running2");
   let pointTotal = 0;
    for(let i = 0; i < pointFields2.length; i++){
        if(pointFields2[i].value == ""){
            pointFields2[i].value = 0;
        }
        pointTotal += parseInt(pointFields2[i].value);
    }
    totalField2.innerHTML = "<p>" + pointTotal + "</p>";
}

function refreshScore3(){
    console.log("running3");
   let pointTotal = 0;
    for(let i = 0; i < pointFields3.length; i++){
        if(pointFields3[i].value == ""){
            pointFields3[i].value = 0;
        }
        pointTotal += parseInt(pointFields3[i].value);
    }
    totalField3.innerHTML = "<p>" + pointTotal + "</p>";
}



//event listener to update score and starting data
document.getElementById('playerCount').addEventListener('input', submitNames);

function submitNames(){
    console.log(document.getElementById('playerCount').value);
    if(document.getElementById('playerCount').value == 4){
        nameField.innerHTML = "<input type='text' placeholder='name'>" + "<input type='text' placeholder='name'>" +
 "<input type='text' placeholder='name'>" +
"<input type='text' placeholder='name'>";
playerCount(4)
    }
    if(document.getElementById('playerCount').value == 3){
        nameField.innerHTML = "<input type='text' placeholder='name'>" + 
        "<input type='text' vplaceholder'name'>" + "<input type='text' placeholder='name'>";
        playerCount(3)
    }
    if(document.getElementById('playerCount').value == 2){
        nameField.innerHTML = "<input type='text' placeholder='name'>" +
"<input type='text' placeholder='name'>";
playerCount(2)
    }
    if(document.getElementById('playerCount').value == 1){
        nameField.innerHTML = "<input type='text' placeholder='name'>";
        playerCount(1)
    }
}
//adding players onto the card
function playerCount(loop){
    for(let i = 0; i < loop; i++){
        cardBody.innerHTML += `<tr>
<th scope="row" class='border'>Name</th>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" value="0"></td>
<td class='border'><p id="totalPoints`+ i + `"></p></td>
</tr>`;
    }
    totalField0 = document.getElementById('totalPoints0');
    pointFields0 = document.getElementsByClassName("pointField0");
    totalField1 = document.getElementById('totalPoints1');
    pointFields1 = document.getElementsByClassName("pointField1");
    totalField2 = document.getElementById('totalPoints2');
    pointFields2 = document.getElementsByClassName("pointField2");
    totalField3 = document.getElementById('totalPoints3');
    pointFields3 = document.getElementsByClassName("pointField3");
    for(let i = 0; i < pointFields0.length; i++){
        pointFields0[i].addEventListener('input', refreshScore0);
    }
    for(let i = 0; i < pointFields1.length; i++){
        pointFields1[i].addEventListener('input', refreshScore1);
    }
    for(let i = 0; i < pointFields2.length; i++){
        pointFields2[i].addEventListener('input', refreshScore2);
    }
    for(let i = 0; i < pointFields3.length; i++){
        pointFields3[i].addEventListener('input', refreshScore3);
    }
}