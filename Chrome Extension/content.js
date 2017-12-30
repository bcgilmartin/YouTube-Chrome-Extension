var oldVidTitle = "";
var newVidTitle = "";
var oldEmail = "";
var newEmail = "";

//runs checkURLChange every 500 ms to catch YouTube title change
//Note: YouTube does not load a new URL it only updates it so this is needed
var titleChangeHandler = window.setInterval(checkTitleChange, 500);

//
//Gets new video title and if it is different from the old one it will run
//the rest of the fucntion
//GETS: URL, Title
function checkTitleChange(){
  if(document.getElementById("avatar-btn") !== null){
    if(newEmail != oldEmail || oldEmail == "") {
      try{
        document.getElementById("avatar-btn").click();
        document.getElementById("avatar-btn").click();
        oldEmail = document.getElementById("email").innerText;
        newEmail = oldEmail;
      }
      catch(err){}
    }

    //Get new video title
    try {
      newVidTitle = document.getElementsByTagName("h1")[0].innerText;
    }
    catch(err){
      newVidTitle = oldVidTitle
    }

    //check with old video
    if(oldVidTitle !== newVidTitle){

      videoID = document.URL;

      //if there is no email recorded it, this checkTitleChange will run again
      if(oldEmail !== ""){
        //set old VidTitle to new
        oldVidTitle = newVidTitle;
        //Prints to console for now
        //Will send to database here
        console.log(oldVidTitle);
        console.log(videoID.split("=")[1].split("&")[0]);
        console.log(oldEmail);
        objectToSend = {email:oldEmail, vidID:videoID, vidTitle:newVidTitle};
      }
    }
  }
}
