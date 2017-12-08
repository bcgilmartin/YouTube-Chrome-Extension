var oldVidTitle = "";

//runs checkURLChange every 500 ms to catch YouTube title change
//Note: YouTube does not load a new URL it only updates it so this is needed
var titleChangeHandler = window.setInterval(checkTitleChange, 500)

//Gets new video title and if it is different from the old one it will run
//the rest of the fucntion
//GETS: URL, Title
function checkTitleChange(){

  //Get new video title
  newVidTitle = document.getElementsByTagName("h1")[0].innerText;

  //check with old video
  if(oldVidTitle !== newVidTitle){

    //get current URL
    currentURL = document.URL;

    //set old VidTitle to new
    oldVidTitle = newVidTitle;

    //Prints to console for now
    //Will send to database here
    console.log(newVidTitle);
    console.log(currentURL);
  }
}
