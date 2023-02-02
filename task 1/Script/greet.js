let userData = JSON.parse(localStorage.getItem("userData")) || [];

// console.log(userData.email);
// console.log(typeof userData.countryCode);
// console.log(typeof userData.phoneNum);
let contact = userData.countryCode + " " + userData.phoneNum;
console.log(contact);

document.getElementById(
  "email"
).innerHTML = `Email Address: <span class="field">${userData.email}</span>`;
document.getElementById(
  "contact"
).innerHTML = `Contact Number:<span class="field"> ${contact}</span> `;
