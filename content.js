var oldVidTitle = "";
var newVidTitle = "";
var oldEmail = "";
var newEmail = "";

//runs checkURLChange every 500 ms to catch YouTube title change
//Note: YouTube does not load a new URL it only updates it so this is needed
var titleChangeHandler = window.setInterval(checkTitleChange, 500);

//No user error
//Gets new video title and if it is different from the old one it will run
//the rest of the fucntion
//GETS: URL, Title
function checkTitleChange(){

  if(newEmail != oldEmail || oldEmail == "") {
    document.getElementById("avatar-btn").click();
    document.getElementById("avatar-btn").click();

    try{
      oldEmail = document.getElementById("email").innerText;
      newEmail = oldEmail;
    }
    catch(err){}
  }

  //Get new video title
  try {
    newVidTitle = document.getElementsByTagName("h1")[0].innerText;
  }
  catch(err){}

  //check with old video
  if(oldVidTitle !== newVidTitle){

    //get current URL
    currentURL = document.URL;

    //set old VidTitle to new
    oldVidTitle = newVidTitle;

    document.getElementById("avatar-btn").click();
    document.getElementById("avatar-btn").click();

    //Prints to console for now
    //Will send to database here
    console.log(newVidTitle);
    console.log(currentURL);
    console.log(oldEmail);
    objectToSend = {email:oldEmail, url:currentURL, vidTitle:newVidTitle};
  }

  // try{
  //   newEmail = document.getElementById("email").innerText;
  // }
  // catch(err){}
  //
  // if(oldEmail !== newEmail || oldEmail == ""){
  //   oldEmail = newEmail;
  // }

}
