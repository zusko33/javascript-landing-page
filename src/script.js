const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { username: "hello@world.com" },
  { username: "test@user.com" },
  { username: "email@domain.com" },
];
let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
let renderEmailTakenError = () => {
  document.getElementById("taken-error-message").hidden = false;
};
let renderEmailEmptyError = () => {
  document.getElementById("empty-error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("taken-error-message").hidden = true;
  document.getElementById("empty-error-message").hidden = true;
};

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  if (usersTable.map((users) => users.username).includes(email)) {
    renderEmailTakenError();
  } else if (email === "") {
    renderEmailEmptyError();
  } else {
    usersTable.push({ username: email });
    renderSuccess();
  }
});

let toggleNav = () => {
  console.log("click");
  var nav = document.getElementById("mobile-nav");
  if (nav.className.indexOf("show") == -1) {
    nav.className += " show";
  } else {
    nav.className = nav.className.replace(" show", "");
  }
};
