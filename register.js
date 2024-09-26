let emailInput = document.querySelector("#email");
let nameInput = document.querySelector("#name");
let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");

const handleSubmit = (event) => {
  event.preventDefault();

  
  let email = emailInput.value;
  let name = nameInput.value;
  let password = passwordInput.value;
  let confirm = confirmInput.value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let hasError = 0;

  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    hasError++;
  }

  if (password !== confirm) {
    alert("Password Not Match");
    hasError++;
  }

  if (hasError > 0) {
    alert("Fix Problems");
  } else {
    alert("Form is Good");
  }

  let obj = { name, password, email, confirm };


  let usersString = localStorage.getItem("users");
  let users = [];

  if (usersString) {
    users = JSON.parse(usersString);
  }


  users.push(obj);


  localStorage.setItem("users", JSON.stringify(users));
};


