const store_location_database = {
  //database information is private
};

firebase.initializeApp(store_location_database);
var responses = firebase.database().ref("final_quiz_responses");

document.getElementById("responses").addEventListener("submit", receiveInfo);

function receiveInfo(e) {
  e.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var phone = document.getElementById("phoneNumber").value;
  var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var q3 = document.getElementById("q3").value;
  var q4 = document.getElementById("q4").value;
  var q5 = document.getElementById("q5").value;
  var q6 = document.getElementById("q6").value;
  var q7 = document.getElementById("q7").value;
  var q8 = document.getElementById("q8").value;
  var q9 = document.getElementById("q9").value;
  var q10 = document.getElementById("q10").value;
  var q11 = document.getElementById("q11").value;
  var q12 = document.getElementById("q12").value;
  var q13 = document.getElementById("q13").value;
  var q14 = document.getElementById("q14").value;
  var q15 = document.getElementById("q15").value;
  var q16 = document.getElementById("q16").value;
  var q17 = document.getElementById("q17").value;
  var q18 = document.getElementById("q18").value;

  var date = new Date();
  if (date.getMinutes() <= 9) {
    if(date.getSeconds() >= 10) {
      var display = (date.getMonth() + 1)+'/'+ date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':0' + date.getMinutes() + ":" + date.getSeconds();
    }
    else {
      var display = (date.getMonth() + 1) + '/'+ date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':0' + date.getMinutes() + ":0" + date.getSeconds();
    }
    
  }
  else {
    if(date.getSeconds() >= 10) {
      var display = (date.getMonth() + 1) +'/' + date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
    }
    else {
      var display = (date.getMonth()+1)+'/'+ date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ":0" + date.getSeconds();
    }
  }
  
  var addToDataBase = responses.push();

  addToDataBase.set({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    1:q1,
    2:q2,
    3:q3,
    4:q4,
    5:q5,
    6:q6,
    7:q7,
    8:q8,
    9:q9,
    10:q10,
    11:q11,
    12:q12,
    13:q13,
    14:q14,
    15:q15,
    16:q16,
    17:q17,
    18:q18,
    time_submitted:display,
  });
}
