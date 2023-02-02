// document.getElementById("talk_button").addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let countryCode = document.getElementById("select_code_country").value;
  if (email === "" || countryCode === "") {
    alert("Fill all the Field");
    return false;
  }
  let phoneNum = document.getElementById("number").value;

  let userData = {
    email: email,
    countryCode: countryCode,
    phoneNum: phoneNum,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "./greeting.html";
}
