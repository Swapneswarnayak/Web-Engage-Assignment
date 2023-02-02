document.getElementById("talk_button").addEventListener("click", handleClick);

function handleClick() {
  let email = document.getElementById("email").value;
  let countryCode = document.getElementById("select_code_country").value;
  let phoneNum = document.getElementById("number").value;

  let userData = {
    email: email,
    countryCode: countryCode,
    phoneNum: phoneNum,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
}
