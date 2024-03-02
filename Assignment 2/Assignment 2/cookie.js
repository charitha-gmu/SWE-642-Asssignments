// Sree Charitha Meka
// G01410061
// JS file that includes all the functions to handle cookie, Validation and AJAX functionality.

let isContentRendered = false;
function showContent(contentId) {
  // Hide all content
  document.querySelectorAll(".content").forEach(function (node) {
    node.style.display = "none";
  });

  // Show the selected content
  var contentElement = document.getElementById(contentId);
  contentElement.style.display = "block";

  // Update the active state of the nav items
  document.querySelectorAll(".nav-item").forEach(function (node) {
    node.classList.remove("active");
  });
  event.target.parentNode.classList.add("active");

  if (contentId === "survey") {
    console.log("in if loop")
   checkCookie()
  }
}

// Function to check the cookie username and displays greeting message
function checkCookie() {
  var username = getCookie("username");
  if (username !== "") {
    var greeting = getGreeting();
    var heading = document.getElementById("heading");
    heading.innerHTML =
      greeting +
      "<i>" +
      username +
      "</i> ! <br /> Welcome to SWE 642 survey page";
    var differentUser = document.getElementById("different-user");
    differentUser.innerHTML =
      "Not " +
      username +
      "? <a href='#' onclick='setUserName(); return false;'>Click here</a>";
  } else {
    setUserName();
  }
}

// Function that prompts the user to enter their name to set a cookie
function setUserName() {
  var username = prompt("Please enter your name:", "e.g. John");
  if (username !== "" && username !== null) {
    // setCookie("username", username, 1);
    setCookie("username", username, 1, function () {
      // Directly call checkCookie or update the content/display as needed
      checkCookie();
      showContent("survey"); // Keep the user on the survey page
    });
  }
}

// Function to set a cookie with the user's name
function setCookie(name, value, expiresInDays, callback) {
  var date = new Date();
  date.setTime(date.getTime() + expiresInDays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + date.toUTCString();

  console.log("Setting cookie:", name, "=", value, ";", expires); // Debugging line
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  // window.location.reload();

  if (typeof callback === "function") {
    callback();
  }
}

// Function to get the value of a cookie
function getCookie(name) {
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}

// Function to return a greeting based on the time of the day
function getGreeting() {
  var now = new Date();
  var hour = now.getHours();
  if (hour < 12) {
    return "Good Morning! ";
  } else if (hour < 18) {
    return "Good Afternoon! ";
  } else {
    return "Good Evening! ";
  }
}

function validateAndComputeAvgMax() {
  const dataInput = document.getElementById("data-input");
  const dataInputValue = dataInput.value;
  const numbers = dataInputValue
    .split(",")
    .map((num) => parseInt(num.trim(), 10));
  const errorMessage = document.getElementById("error-message-container");

  if (numbers.length < 10 || !numbers.every((num) => num >= 1 && num <= 100)) {
    errorMessage.innerHTML =
      "Error: Please enter at least ten comma separated values between 1 and 100 inclusive.";
    return;
  } else {
    errorMessage.textContent = ""; // Clear error message
  }

  const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
  const maximum = Math.max(...numbers);

  const averageElement = document.getElementById("average-output");
  const maximumElement = document.getElementById("maximum-output");

  averageElement.textContent = average.toFixed(2);
  maximumElement.textContent = maximum;
}

function displayError(errorMessage) {
  const errorText = document.getElementById("error-text");
  errorText.textContent = errorMessage;
  openErrorModal();
}

function openErrorModal() {
  const errorModal = document.getElementById("error-modal");
  errorModal.style.display = "block";
}

function closeErrorModal() {
  const errorModal = document.getElementById("error-modal");
  errorModal.style.display = "none";
}

// Function for creating form validation
function validateForm(event) {
  event.preventDefault();
  const nameInput = document.getElementById("username");

  const addressInput = document.getElementById("address");
  const cityInput = document.getElementById("city");
  const stateInput = document.getElementById("state");
  const zipInput = document.getElementById("zip");

  const telephoneInput = document.getElementById("telephone-number");
  const emailInput = document.getElementById("email");

  const radioInputs = document.querySelectorAll('input[name="interest"]');
  const checkInputs = document.querySelectorAll('input[name="likes"]:checked');

  let errors = [];

  // Validation for Name (Alphabets only)
  if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    errors.push("Name should contain only alphabets.");
    nameInput.value = ""; // Clear field
  }

  // Validation for Address (Alphanumeric characters allowed)
  if (!/^[a-zA-Z0-9\s]+$/.test(addressInput.value)) {
    errors.push("Street Address should contain only alphanumeric characters.");
    addressInput.value = ""; // Clear field
  }

  if (!/^[a-zA-Z\s]+$/.test(cityInput.value)) {
    errors.push("City should contain only alphabets.");
    cityInput.value = ""; // Clear field
  }
  if (!/^[a-zA-Z\s]+$/.test(stateInput.value)) {
    errors.push("State should contain only alphabets.");
    stateInput.value = ""; // Clear field
  }
  if (!/^[0-9]+$/.test(zipInput.value)) {
    errors.push("Zip code should contain only numeric characters.");
    zipInput.value = ""; // Clear field
  }
  // Validation for Email format
  if (!isValidEmail(emailInput.value)) {
    errors.push(" Email Address should be in a valid format. ex: abc@abc.com");
    emailInput.value = ""; // Clear field
  }
  if (
    !/^[0-9]+$/.test(telephoneInput.value) ||
    telephoneInput.value.length !== 10
  ) {
    errors.push("Telephone number should contain only 10 numeric characters.");
    telephoneInput.value = ""; // Clear field
  }
  // Validation for interest on university (at least one radio button selection)
  if (!Array.from(radioInputs).some((input) => input.checked)) {
    errors.push(
      "Please select 'how you became interested in the university'?."
    );
    radioInputs.value = ""; // Clear field
  }
  // Validation for  campus (at least two checkboxes checked)
  if (checkInputs.length < 2) {
    errors.push(
      "Please select at least two option for 'What you like the most about the campus'?."
    );
    checkInputs.value = ""; // Clear field
  }

  if (errors.length > 0) {
    const errorMessage = errors.join("\n");
    window.alert(errorMessage);
  } else {
    alert("Form successfully submitted!");
  }
}

function resetForm(event) {
  event.preventDefault();
  document.getElementById("survey-form").reset();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function fetchCityAndState() {
  const zipcodeInput = document.getElementById("zip");
  const cityElement = document.getElementById("city");
  const stateElement = document.getElementById("state");
  const errorElement = document.getElementById("zipcode-error-text");
  const zipcode = zipcodeInput.value;

  // Make sure the zipcode is not empty
  if (zipcode.trim() === "") {
    cityElement.textContent = "";
    stateElement.textContent = "";
    return;
  }

  // Ajax call to fetch the JSON file
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "zipcodes.json", true); // Make sure the file name matches your JSON file

  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const matchingZip = data.zipcodes.find((z) => z.zip === zipcode);
      if (matchingZip) {
        errorElement.textContent = "";
        cityElement.textContent = ` ${matchingZip.city}`;
        stateElement.textContent = ` ${matchingZip.state}`;
      } else {
        errorElement.textContent = "Invalid zip";
        cityElement.textContent = "";
        stateElement.textContent = "";
      }
    } else {
      // Handle server error or file not found
      console.error("Failed to load zipcodes data.");
    }
  };
  xhr.onerror = function () {
    // Handle network errors
    console.error("Error fetching data.");
  };
  xhr.send();
}
