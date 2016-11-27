  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrIFUPe2igC86N8gYcjugoxzn1ebCXiEI",
    authDomain: "quizbowl-de9bc.firebaseapp.com",
    databaseURL: "https://quizbowl-de9bc.firebaseio.com",
    storageBucket: "quizbowl-de9bc.appspot.com",
    messagingSenderId: "665976318874"
  };
  // firebase.initializeApp(config);

//var databaseRef = firebase.database().ref();

// Question attributes on the page
var pg_question_txt="";
var pg_answer_txt = "";
var pg_mcno = "";
var pg_mcyes="";
var pg_question_cat="";


function getFrmElements(){
//console.log("getting elements "+frmObj.frmcatID.value+ " "+ frmObj.frmcatDesc.value);
//writeUserData(frmObj.frmcatID.value,frmObj.frmcatDesc.value)
//question_txt, answer_txt, mc-no,mc-yes, question_cat
try{
pg_question_txt=document.getElementById("question_txt").value;
pg_answer_txt = document.getElementById("answer_txt").value;
pg_mcno = document.getElementById("mcno").value;
pg_mcyes=document.getElementById("mcyes").value;
pg_question_cat=document.getElementById("question_cat").value;

pg_question_txt =$(':text#question_txt').val().trim();
pg_answer_txt   =$(':text#answer_txt').val().trim();;
pg_mcno         =$(':radio#Mmcyes').val();
pg_mcyes        =$(':radio#mcyes').val();
pg_question_cat =$(':select#question_cat').val();

}catch(exc){

  console.log(exc.toString());
}
console.log("\n Question txt = "+ pg_question_txt +
            "\n Answer txt = "+ pg_answer_txt +
            "\n Multiple ChoiceNo="+ pg_mcno +
            "\n Multiple ChoiceYes="+ pg_mcyes +
            "\n Question Category"+ pg_question_cat);
}

// Retrieve using JQuery


function writeUserData(_catid,_catdesc) {
/*
     databaseRef.child("/Category/Question/").set(_catdesc);
    databaseRef.push().set("Category1"); # creates a random key
    rootRef = firebase.database().ref().child("Questions");
    console.log(//"ADDED: "+_catid+":"+_catdesc)

    rootRef.on("child_added",function(snapshot){
        console.log("Snaposhot val retrieved "+snapshot.val);
        });
    //('/Category').orderByChild("Science").on("value",function(snapshot){
    //once('value').then(function(snapshot){
      // console.log("snapshot="+snapshot.child+"   "+snapshot.key);
    // });
*/
}

//  var userId = firebase.auth().currentUser.uid;
