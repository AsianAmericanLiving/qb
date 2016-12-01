// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrIFUPe2igC86N8gYcjugoxzn1ebCXiEI",
    authDomain: "quizbowl-de9bc.firebaseapp.com",
    databaseURL: "https://quizbowl-de9bc.firebaseio.com",
    storageBucket: "quizbowl-de9bc.appspot.com",
    messagingSenderId: "665976318874"
  };
firebase.initializeApp(config);
  console.log('Firebase database ref initialized');

// Initialize form UI


// Get root reference from the database
//var databaseRef = firebase.database().ref();

// TESTING CODE


// **********************************

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
    //pg_question_txt=document.getElementById("question_txt").value;
    //pg_answer_txt = document.getElementById("answer_txt").value;
    //pg_mcno = document.getElementById("mcno").value;
    //pg_mcyes=document.getElementById("mcyes").value;
    //pg_question_cat=document.getElementById("question_cat").value;

    pg_question_txt =$('#question_txt').val().trim();
    pg_answer_txt   =$('#answer_txt').val().trim();
    pg_mcno         =$('#Mmcyes').val();
    pg_mcyes        =$('#mcyes').val();
    pg_question_cat =$('#question_cat option:selected').text() ;
  }catch(exc){
    console.log(exc.toString());
  }
  console.log("\n Question txt = "+ pg_question_txt +
              "\n Answer txt = "+ pg_answer_txt +
              "\n Multiple ChoiceNo="+ pg_mcno +
              "\n Multiple ChoiceYes="+ pg_mcyes +
              "\n Question Category"+ pg_question_cat);
  addQuestion(pg_question_txt,pg_answer_txt);
}
// Retrieve using JQuery
function getQstnCategories(){
  var ref = firebase.database().ref("QCategories");
  console.log('Got reference to Categories');
  ref.once('value').then(function(dataSnapshot) {
                            dataSnapshot.forEach(
                                function(childDataSnapshot){
                                    console.log('Key:'+ childDataSnapshot.key+' Value:'+childDataSnapshot.val());

                                }
                            );
                          }
          );
}

function addQuestion(_qstn,_ans) {
  var ref = firebase.database().ref("QuizQuestions");
    // Retrieve generated ID
    newRef = ref.push();
    // Use generated ID to add to the QuizQuestions Element
    newRef.set(
      {
        'QDesc':_qstn,
        'ATxt':_ans
      }
    );

  // Use generated ID to add to the QuestionMetaInfo Element
  ref = firebase.database().ref("QMetaInfo");
  console.log('Adding '+newRef.key + ' to '+ ref);
  var frmData= "Need additional info";
  ref.child(newRef.key).set(
    {
      'Verified':true,
      'Category':pg_question_cat,
      'QuestionLocation':frmData,
      'RelativeInfo':frmData,
      'DifficultyLevel': 'Low',
      'OtherInfo':'other info goes here'
    }
  );
  // Call to reset form
$('#question_txt').val("");
$('#answer_txt').val("");
document.getElementById('formMessage').innerHTML="<B>'"+pg_question_txt+"'</B> </I>has been saved.</I>";
$("#frmTable").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

}
