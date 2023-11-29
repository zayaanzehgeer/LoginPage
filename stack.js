function toggleSections() {
  var section1 = document.getElementById("section1");
  var section2 = document.getElementById("section2");

  if (section1.style.display === "none") {
    section1.style.display = "block";
    section2.style.display = "none";
  } else {
    section1.style.display = "none";
    section2.style.display = "block";
  }
}
//----------------------------------------------------------
let userDataArray = [];

function signIn() {
  var email = document.getElementById("signinEmail").value;
  var password = document.getElementById("signinPassword").value;

  var userFound = userDataArray.some(function (user) {
    return user.email === email && user.password === password;
  });
  var resultElement = document.getElementById("loginResult");
  var resultElement2 = document.getElementById("loginResult2");
  if (userFound) {
    resultElement2.innerHTML = "";
    resultElement.innerHTML = "";
    signInForm.reset();
    toggleBodies();
  } else {
    resultElement2.innerHTML = "Invalid email or password. Please try again.";
  }
}
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let signUpForm = document.getElementById("signUpForm");

  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var userData = {
      firstName: document.getElementById("ab").value,
      lastName: document.getElementById("ac").value,
      email: document.getElementById("ad").value,
      password: document.getElementById("entpass").value,
    };

    userDataArray.push(userData);

    signUpForm.reset();

    console.log("Sign Up Data:", userDataArray);
    toggleSections();
    displayUserData(userData);
  });
  function displayUserData(userData) {
    var userDataContainer = document.createElement("div");
    userDataContainer.classList.add("table3");

    for (var key in userData) {
      var valueSpan = document.createElement("span");
      valueSpan.classList.add("span3");
      valueSpan.innerHTML = userData[key];

      userDataContainer.appendChild(valueSpan);
    }

    var trashIcon = document.createElement("span");
    trashIcon.classList.add("span3", "trash-icon");
    trashIcon.innerHTML =
      '<i class="fa-solid fa-trash" style="color: #cd0000;"></i>';
    // -----------------------------------------------------
    trashIcon.addEventListener("click", function () {
      var index = userDataArray.indexOf(userData);
      if (index !== -1) {
        userDataArray.splice(index, 1);
      }

      userDataContainer.remove();
    });

    userDataContainer.appendChild(trashIcon);

    var section3main = document.querySelector(".section3main");
    section3main.appendChild(userDataContainer);
  }
});
//----------------------------------------------------------

function toggleBodies() {
  let section1 = document.getElementById("section1");
  let section3 = document.getElementById("section3");

  if (section1.style.display === "none") {
    section1.style.display = "block";
    section3.style.display = "none";
  } else {
    section1.style.display = "none";
    section3.style.display = "block";
  }
}
// ------------------------------------------------
