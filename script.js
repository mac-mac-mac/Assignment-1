//From Professor Fleenor's Examples
//Runs when page loads
window.onload = init;
function init() {
  addLastUpdate();
}

//From Professor Fleenor's Examples
//Updates the HTML with the lastModified property of document
//We call it above so it runs when the page loads (window.onload)
function addLastUpdate() {
  var modDate = document.lastModified;
  document.getElementById("update_date").innerHTML = modDate;
}

//Calls 2 smaller functions to validate username availability and password match
//Need both to be correct(true) to be able to submit form
//Called when we try to submit the form on Page 3
function validateForm() {
  return (checkPass()&&checkName());
}

//Checks if text in both password boxes is the same
//Sends browser alert if passwords don't match
function checkPass() {
  let x = document.forms["myForm"]["password"].value;
  let y = document.forms["myForm"]["password2"].value;
  if (x == y) {
    return true;
  } else {
    alert("Passwords must match! Double check that you have typed your password correctly in both boxes.");
    return false;
  }
}

//Adapted from example on https://stackoverflow.com/questions/33583789/checking-for-a-variable-match-with-an-array-in-javascript
//Tries to find entered username in an array of current names
//Sends browser alert if it already exists in the array
function checkName() {
  let x = document.forms["myForm"]["username"].value;
  let names = ["Harry","Elizabeth","Shana"];
  if (names.indexOf(x) == -1) {
    return true;
    //OK to submit if NOT in list
  } else {
     alert("Sorry, this username is already taken! Please try a different one.");
    return false;
    //Need another name if already in list
  }
}

//Adapted from example on https://www.tutorialspoint.com/html5/canvas_text_fonts.htm
//Draws text on the canvas on Page 1
//Called when the script loads on Page 1
function drawCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "20px Arial";
  ctx.strokeText("Hello", 25, 20);
  ctx.strokeText("World!", 25, 50);
  ctx.font = "10px Courier New";
  ctx.strokeText("This is", 25, 80);
  ctx.strokeText("a canvas.", 25, 90);
}
