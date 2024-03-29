//API stuff
let courseNum;
let courseData;
let course;
let yardage;
let tee;
let par;
let handicap;
let apiData;
let site = "https://golf-courses-api.herokuapp.com/courses";
let courseSite;
//api call
async function call(){
let response = await fetch(site);
apiData = await response.json();
course = apiData['courses'][courseNum];
apiFill();
}

async function apiFill(){
    courseSite = site + "/" + course.id;
    let response = await fetch(courseSite);
    courseData = await response.json();
    tableBuild();
}

function tableBuild(){
    if(tee == 0){
        cardBody.innerHTML += "<tr>" +
        "<th scope='row' class='border'>Yardage</th>" +
        "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][0]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+"</td>" +
      "</tr>" + "<tr class='drkRow'>" +
      "<th scope='row' class='border'>Par</th>" +
      "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][0]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+"</td>" +
    "</tr>" + "<tr>" +
    "<th scope='row' class='border'>Handicap</th>" +
    "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][0]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+"</td>" +
  "</tr>"
    }
    if(tee == 1){
        cardBody.innerHTML += "<tr>" +
        "<th scope='row' class='border'>Yardage</th>" +
        "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][1]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+"</td>" +
      "</tr>" + "<tr class='drkRow'>" +
      "<th scope='row' class='border'>Par</th>" +
      "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][1]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+"</td>" +
    "</tr>" + "<tr>" +
    "<th scope='row' class='border'>Handicap</th>" +
    "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][1]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+"</td>" +
  "</tr>"
    }
    if(tee == 2){
        cardBody.innerHTML += "<tr>" +
        "<th scope='row' class='border'>Yardage</th>" +
        "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][2]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+"</td>" +
      "</tr>" + "<tr class='drkRow'>" +
      "<th scope='row' class='border'>Par</th>" +
      "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][2]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+"</td>" +
    "</tr>" + "<tr>" +
    "<th scope='row' class='border'>Handicap</th>" +
    "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][2]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+"</td>" +
  "</tr>"
    }
    if(tee == 3){
        cardBody.innerHTML += "<tr>" +
        "<th scope='row' class='border'>Yardage</th>" +
        "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][3]["yards"] +"</td>" +
        "<td class='border'></td>" +
        "<td class='border'>"+"</td>" +
      "</tr>" + "<tr class='drkRow'>" +
      "<th scope='row' class='border'>Par</th>" +
      "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][3]["par"] +"</td>" +
      "<td class='border'></td>" +
      "<td class='border'>"+"</td>" +
    "</tr>" + "<tr>" +
    "<th scope='row' class='border'>Handicap</th>" +
    "<td class='border'>"+ courseData['data']['holes'][0]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][1]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][2]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][3]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][4]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][5]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][6]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][7]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][8]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+ courseData['data']['holes'][9]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][10]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][11]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][12]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][13]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][14]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][15]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][16]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'>"+ courseData['data']['holes'][17]['teeBoxes'][3]["hcp"] +"</td>" +
    "<td class='border'></td>" +
    "<td class='border'>"+"</td>" +
  "</tr>"
    }
    playerCount(golferArr.length);
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
let courseGrab = document.getElementById('courseSelect');
let teeGrab = document.getElementById('tees');


//score updating function
function refreshScore0(){
   let pointTotal = 0;
   let halfPoint1 = 0;
   let halfPoint2 = 0;
    for(let i = 0; i < pointFields0.length; i++){
        if(pointFields0[i].value == ""){
            pointFields0[i].value = 0;
        }
        pointTotal += parseInt(pointFields0[i].value);
        if(i < 9){
            halfPoint1 += parseInt(pointFields0[i].value);
        }
        if(i >= 9){
            halfPoint2 += parseInt(pointFields0[i].value);
        }
    }
    totalField0.innerHTML = "<p>" + pointTotal + "</p>";
    document.getElementById('halfPoints10').innerHTML = "<p>" + halfPoint1 + "</p>";
    document.getElementById('halfPoints20').innerHTML = "<p>" + halfPoint2 + "</p>";
}

function refreshScore1(){
   let pointTotal = 0;
   let halfPoint1 = 0;
   let halfPoint2 = 0;
    for(let i = 0; i < pointFields1.length; i++){
        if(pointFields1[i].value == ""){
            pointFields1[i].value = 0;
        }
        pointTotal += parseInt(pointFields1[i].value);
        if(i < 9){
            halfPoint1 += parseInt(pointFields1[i].value);
        }
        if(i >= 9){
            halfPoint2 += parseInt(pointFields1[i].value);
        }
    }
    totalField1.innerHTML = "<p>" + pointTotal + "</p>";
    document.getElementById('halfPoints11').innerHTML = "<p>" + halfPoint1 + "</p>";
    document.getElementById('halfPoints21').innerHTML = "<p>" + halfPoint2 + "</p>";
}

function refreshScore2(){
   let pointTotal = 0;
   let halfPoint1 = 0;
   let halfPoint2 = 0;
    for(let i = 0; i < pointFields2.length; i++){
        if(pointFields2[i].value == ""){
            pointFields2[i].value = 0;
        }
        pointTotal += parseInt(pointFields2[i].value);
        if(i < 9){
            halfPoint1 += parseInt(pointFields2[i].value);
        }
        if(i >= 9){
            halfPoint2 += parseInt(pointFields2[i].value);
        }
    }
    totalField2.innerHTML = "<p>" + pointTotal + "</p>";
    document.getElementById('halfPoints12').innerHTML = "<p>" + halfPoint1 + "</p>";
    document.getElementById('halfPoints22').innerHTML = "<p>" + halfPoint2 + "</p>";
}

function refreshScore3(){
   let pointTotal = 0;
   let halfPoint1 = 0;
   let halfPoint2 = 0;
    for(let i = 0; i < pointFields3.length; i++){
        if(pointFields3[i].value == ""){
            pointFields3[i].value = 0;
        }
        pointTotal += parseInt(pointFields3[i].value);
        if(i < 9){
            halfPoint1 += parseInt(pointFields3[i].value);
        }
        if(i >= 9){
            halfPoint2 += parseInt(pointFields3[i].value);
        }
    }
    totalField3.innerHTML = "<p>" + pointTotal + "</p>";
    document.getElementById('halfPoints13').innerHTML = "<p>" + halfPoint1 + "</p>";
    document.getElementById('halfPoints23').innerHTML = "<p>" + halfPoint2 + "</p>";
}



//event listener to update score and starting data with a dropdown menu for players
document.getElementById('playerCount').addEventListener('input', dropNames);
document.getElementById('start').onclick = function(){
    if(teeGrab.value == 'Selection'){
        alert("All Information Must Be Filled Out")
    }
    else if(courseGrab.value == 'Selection'){
        alert("All Information Must Be Filled Out")
    }
    else if(document.getElementById('playerCount').value == 'Selection'){
        alert("All Information Must Be Filled Out")
    }else{
    submitNames();
}
}


function dropNames(){
    if(document.getElementById('playerCount').value == 4){
        nameField.innerHTML = "<input type='text' placeholder='name' id='golferNameBox3'>" + "<input type='text' placeholder='name' id='golferNameBox2'>" +
 "<input type='text' placeholder='name' id='golferNameBox1'>" +
"<input type='text' placeholder='name' id='golferNameBox0'>";

    }
    if(document.getElementById('playerCount').value == 3){
        nameField.innerHTML = "<input type='text' placeholder='name' style='width:33%' id='golferNameBox2'>" + 
        "<input type='text' placeholder='name' style='width:33%' id='golferNameBox1'>" + "<input type='text' placeholder='name' style='width:33%' id='golferNameBox0'>";
        
    }
    if(document.getElementById('playerCount').value == 2){
        nameField.innerHTML = "<input type='text' placeholder='name' style='width:50%' id='golferNameBox1'>" +
"<input type='text' placeholder='name' style='width:50%' id='golferNameBox0'>";

    }
    if(document.getElementById('playerCount').value == 1){
        nameField.innerHTML = "<input type='text' placeholder='name' style='width:100%' id='golferNameBox0'>";
  
    }

   

}

//creation from the inputs into the actual card
let golferArr = [];

function checkNames(){
    let dupes = 0;
    if(teeGrab.value == 'Selection'){
        dupes++;
    }
    if(courseGrab.value == 'Selection'){
        dupes++;
    }
    if(document.getElementById('playerCount').value == 'Selection'){
        dupes++;
    }
    for(let i = 0; i < golferArr.length; i++){
        for(let j = (i + 1); j < golferArr.length; j++){
          if(golferArr[i] == golferArr[j]){
              dupes++;
              alert('All information must be filled out and there can be no duplicate names');
              golferArr = [];
          }
        }
    }
    if(dupes == 0){
        if(courseGrab.value == 'Thanksgiving Point'){
            courseNum = 1;
        }
        if(courseGrab.value == 'Fox Hollow'){
            courseNum = 0;
        }
        if(courseGrab.value == 'Spanish Oaks'){
            courseNum = 2;
        }
        if(teeGrab.value == 'Champion'){
            tee = 1;
            console.log(tee);
        }
        if(teeGrab.value == 'Men'){
            tee = 2;
            console.log(tee);
        }
        if(teeGrab.value == 'Women'){
            tee = 3;
            console.log(tee);
        }
        if(teeGrab.value == 'Pro'){
            tee = 0;
            console.log(tee);
        }
        call();
        document.getElementsByClassName('courseSelector')[0].outerHTML = "<h1>" + courseGrab.value + "</h1>" + 
        "<h2>Tee Type: " + teeGrab.value + "</h2>";
    }
}

function submitNames(){
    if(document.getElementById('playerCount').value == 4){
        golferArr.push(document.getElementById('golferNameBox3').value);
        golferArr.push(document.getElementById('golferNameBox2').value);
        golferArr.push(document.getElementById('golferNameBox1').value);
        golferArr.push(document.getElementById('golferNameBox0').value);
    }
    if(document.getElementById('playerCount').value == 3){
        golferArr.push(document.getElementById('golferNameBox2').value);
        golferArr.push(document.getElementById('golferNameBox1').value);
        golferArr.push(document.getElementById('golferNameBox0').value);
    }
    if(document.getElementById('playerCount').value == 2){
        golferArr.push(document.getElementById('golferNameBox1').value);
        golferArr.push(document.getElementById('golferNameBox0').value);
    }
    if(document.getElementById('playerCount').value == 1){
        golferArr.push(document.getElementById('golferNameBox0').value);
    }
    for(let i = 0; i < document.getElementById('playerCount').value; i++){
        console.log(i);
        if(golferArr[i] == ''){
            golferArr = [];
            alert("Cannot Submit An Empty Name");
            throw "empty name";
        }
    }
    checkNames();
}
//adding players onto the card
function playerCount(loop){
    for(let i = 0; i < loop; i++){
        if(i == 0 || i == 2){
            cardBody.innerHTML += `<tr class='drkRow'>
<th scope="row" class='border' id='golferName` + i + `'>`+ golferArr[i]+`</th>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><p id="halfPoints1`+ i + `"></p></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><p id="halfPoints2`+ i + `"></p></td>
<td class='border'><p id="totalPoints`+ i + `"></p></td>
</tr>`;
        }
        if(i == 1 || i == 3){
            cardBody.innerHTML += `<tr>
            <th scope="row" class='border' id='golferName` + i + `'>`+ golferArr[i]+`</th>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><p id="halfPoints1`+ i + `"></p></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><input type="number" class="pointField`+ i +`" style="width:120%" value="0"></td>
<td class='border'><p id="halfPoints2`+ i + `"></p></td>
<td class='border'><p id="totalPoints`+ i + `"></p></td>
</tr>`;
        }
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
