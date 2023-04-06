const emailId=document.getElementById('emailid');
const form = document.getElementById("form");
let email;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    email=emailId.value;
    console.log(email);
});