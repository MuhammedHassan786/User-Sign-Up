let userArray = []; // Existing array to store usernames

let signUp = confirm("Do you want to sign up?");
if (signUp) {
  let userName = prompt("Please Enter Your Name:");
  let Email = prompt("Please Enter Your Correct Password:");
  let PassWord = prompt("Please Enter Your Email:");
  userArray.push(userName);
  alert("User added successfully! Updated array: " + userArray);
} else {
  alert("Sign up canceled. Array remains unchanged.");
}
