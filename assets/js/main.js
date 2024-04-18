/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
    smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper('.categories__container', {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper('.new__container', {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});

//=============== COUNTDOWN TIMER IN HOME PAGE============================
// Function to update the countdown timer
function updateCountdown(countdownId, daysId, hoursId, minutesId, secondsId) {
  // Check if the required elements exist before proceeding
  const daysElement = document.getElementById(daysId);
  const hoursElement = document.getElementById(hoursId);
  const minutesElement = document.getElementById(minutesId);
  const secondsElement = document.getElementById(secondsId);

  if (daysElement && hoursElement && minutesElement && secondsElement) {
    // Set the date and time for the countdown
    const countdownDate = new Date('2024-04-20T00:00:00').getTime();

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown elements with the calculated values
    daysElement.querySelector('.countdown__period').textContent = days.toString().padStart(2, '0');
    hoursElement.querySelector('.countdown__period').textContent = hours.toString().padStart(2, '0');
    minutesElement.querySelector('.countdown__period').textContent = minutes.toString().padStart(2, '0');
    secondsElement.querySelector('.countdown__period').textContent = seconds.toString().padStart(2, '0');

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(window[countdownId]);
      document.getElementById(countdownId).textContent = 'Offer Expired';
    }
  }
}

// Call the updateCountdown function only if the required elements exist on the page
const countdown1Exists = document.getElementById('days1') && document.getElementById('hours1') && document.getElementById('minutes1') && document.getElementById('seconds1');
if (countdown1Exists) {
  updateCountdown('countdown1', 'days1', 'hours1', 'minutes1', 'seconds1');
  window.countdown1 = setInterval(function() {
    updateCountdown('countdown1', 'days1', 'hours1', 'minutes1', 'seconds1');
  }, 1000);
}

const countdown2Exists = document.getElementById('days2') && document.getElementById('hours2') && document.getElementById('minutes2') && document.getElementById('seconds2');
if (countdown2Exists) {
  updateCountdown('countdown2', 'days2', 'hours2', 'minutes2', 'seconds2');
  window.countdown2 = setInterval(function() {
    updateCountdown('countdown2', 'days2', 'hours2', 'minutes2', 'seconds2');
  }, 1000);
}

//=================VALIDATING REGISTRATION FORM======================
// Function to generate a unique user ID
function generateUniqueId() {
    // Generate a random string (you can use other methods for generating unique IDs)
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

// Function to validate the registration form and store user data in local storage
function validateRegistrationForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var personalUrl = document.getElementById("personalUrl").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var comments = document.getElementById("comments").value;
    var confirmData = document.getElementById("confirmData").checked;

    var usernameError = document.getElementById("username-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirmPassword-error");
    var personalUrlError = document.getElementById("personalUrl-error");
    var dobError = document.getElementById("dob-error");
    var genderError = document.getElementById("gender-error");
    var commentsError = document.getElementById("comments-error");
    var confirmDataError = document.getElementById("confirmData-error");

    var isValid = true;

    // Validation for each input field
    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (confirmPassword.trim() === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (personalUrl.trim() === "") {
        personalUrlError.textContent = "Personal URL is required";
        isValid = false;
    } else {
        personalUrlError.textContent = "";
    }

    if (dob.trim() === "") {
        dobError.textContent = "Date of Birth is required";
        isValid = false;
    } else {
        dobError.textContent = "";
    }

    if (!gender) {
        genderError.textContent = "Gender is required";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    if (comments.trim() === "") {
        commentsError.textContent = "Comments are required";
        isValid = false;
    } else {
        commentsError.textContent = "";
    }

    if (!confirmData) {
        confirmDataError.textContent = "Please confirm that the entered data are not fictitious";
        isValid = false;
    } else {
        confirmDataError.textContent = "";
    }

    // If form is valid, store user data in local storage
    if (isValid) {
        // Generate a unique key for the new user
        var userId = generateUniqueId();

        //Convert the username to uppercase
        var capitalizedUsername = username.toUpperCase();

        // Store user data in an object
        var userData = {
            username: username,
            email: email,
            password: password,
            personalUrl: personalUrl,
            dob: dob,
            gender: gender.value,
            comments: comments
        };

        // Convert user data to JSON string
        var userDataJSON = JSON.stringify(userData);

        // Check if user ID already exists
        var existingUserIds = JSON.parse(localStorage.getItem('userIDs')) || [];
        if (existingUserIds.includes(userId)) {
            // If user ID exists, generate a new one
            while (existingUserIds.includes(userId)) {
                userId = generateUniqueId();
            }
        }

        // Store user data in local storage under the unique key
        localStorage.setItem(userId, userDataJSON);

        // Add the new user ID to the list of existing user IDs
        existingUserIds.push(userId);
        localStorage.setItem('userIDs', JSON.stringify(existingUserIds));

        // Redirect to login-register.html
        window.location.href = "shop.html";
    }

    // Prevent form submission if there are errors
    event.preventDefault();
}

// Function to check if email is in valid format
function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


//=================VALIDATING LOGIN FORM======================

// Function to validate login form
function validateLogin() {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var loginEmailError = document.getElementById("loginEmailError");
    var loginPasswordError = document.getElementById("loginPasswordError");
    var loginErrorMessage = document.getElementById("loginErrorMessage");

    var isValid = true;

    // Validation for email
    if (loginEmail.trim() === "") {
        loginEmailError.textContent = "Email is required";
        isValid = false;
    } else {
        loginEmailError.textContent = "";
    }

    // Validation for password
    if (loginPassword.trim() === "") {
        loginPasswordError.textContent = "Password is required";
        isValid = false;
    } else {
        loginPasswordError.textContent = "";
    }

    // If form is valid, check user credentials
    if (isValid) {
        // Check if user exists and password matches
        var foundUser = false;
        var userKey;
        var userData;
        for (var i = 0; i < localStorage.length; i++) {
            userKey = localStorage.key(i);
            if (userKey.startsWith('user_')) {
                userData = JSON.parse(localStorage.getItem(userKey));
                if (userData.email === loginEmail && userData.password === loginPassword) {
                    foundUser = true;
                    break;
                }
            }
        }

        if (foundUser) {
            // Successful login, store user data in session storage
            // Use email as the unique identifier for the user
            var userId = userData.email;

            // Store user data in an object
            var loggedInUserData = {
                userId: userId,
                username: userData.username,
                email: userData.email,
                password: userData.password,
                gender: userData.gender,
                dob: userData.dob,
                personalUrl: userData.personalUrl
            };
            
            sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUserData));
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserData));
            // Retrieve the redirect URL from local storage
            const redirectUrl = localStorage.getItem('redirectUrl');

            // If there is a redirect URL, redirect the user back to that URL
            if (redirectUrl) {
                localStorage.removeItem('redirectUrl'); // Remove redirect URL after use
                window.location.href = redirectUrl;
            } else {
                // If there is no redirect URL, redirect the user to the default page (e.g., dashboard)
                window.location.href = "accounts.html";
            }
            
        } else {
            // Display error message for incorrect credentials
            loginErrorMessage.textContent = "Invalid email or password. Please try again.";
            document.getElementById("loginEmail").value = "";
            document.getElementById("loginPassword").value = "";
        }
    }

    // Prevent form submission if there are errors
    event.preventDefault();
}

//================CHECK IF USER IS LOGGED IN AND UPDATE USER'S NAME IN ACCOUNTS PAGE===================

 document.addEventListener("DOMContentLoaded", function () {

    function isUserLoggedIn() {
        return sessionStorage.getItem("loggedInUser");
    }

    // Retrieve user data from session storage
    var userData = isUserLoggedIn();

    // Get the <h3> element
    var greetingHeader = document.querySelector(".tab__header");

    if (greetingHeader) { // Check if greetingHeader exists
        if (userData) {
            // Parse the user data
            userData = JSON.parse(userData);

            // Check if userData contains a username property
            if (userData.username) {
                // Update the <h3> element with the user's username
                greetingHeader.textContent = "Hello, " + userData.username.toUpperCase() + "!";
            } else {
                // Fallback in case username is missing
                greetingHeader.textContent = "Hello, User!";
            }
        } else {
            greetingHeader.textContent = "Hello, User!";
        }
    }
});

 // ==============UPDATING USERNAME IN UPDATE PROFILE TAB IN ACCOUNTS PAGE===============
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the "Save" button
    const updateUsernameBtn = document.getElementById('updateUsernameBtn');
    if (updateUsernameBtn) {
      updateUsernameBtn.addEventListener("click", function() {
        // Retrieve new username from input field
        var newUsername = document.getElementById("newUsername").value.trim();

        // Retrieve user data from session storage
        var userData = sessionStorage.getItem("loggedInUser");

        if (userData) {
            // Parse the user data
            userData = JSON.parse(userData);

            // Update the username in the user data
            userData.username = newUsername;

            // Save the updated user data back to session storage
            sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
            localStorage.setItem("loggedInUser", JSON.stringify(userData)); // Also save to local storage

            // Update the displayed username in the <h3> element
            var greetingHeader = document.querySelector(".tab__header");
            greetingHeader.textContent = "Hello, " + newUsername.toUpperCase() + "!";

            // Switch to the dashboard tab
            var dashboardTabContent = document.getElementById("dashboard");
            var dashboardTab = document.querySelector("[data-target='#dashboard']");
            var tabContents = document.querySelectorAll(".tab__content");

            // Remove 'active-tab' class from other tab content elements
            tabContents.forEach(function(tabContent) {
                tabContent.classList.remove("active-tab");
            });

            // Add 'active-tab' class to the dashboard tab content
            dashboardTabContent.classList.add("active-tab");

            // Trigger click event on the dashboard tab
            dashboardTab.click();
        }
    });
    }
});

//===================== UPDATING ACCOUNT PASSWORD FROM ACCOUNTS PAGE AND SAVING TO SESSION STORAGE=============
document.addEventListener("DOMContentLoaded", function () {
  const savePasswordBtn = document.getElementById('savePasswordBtn');
  
  // Add event listener to the "Save" button
  if (savePasswordBtn) {
    savePasswordBtn.addEventListener("click", function () {
    // Retrieve passwords from input fields
    var currentPassword = document.getElementById("currentPassword").value.trim();
    var newPassword = document.getElementById("newPassword").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Retrieve user data from session storage
    var userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Check if the current password matches the stored password
    if (currentPassword !== userData.password) {
      alert("Current password is incorrect.");
      return; // Return if current password is incorrect
    }

    // Validate new password
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    // Update password in user data
    userData.password = newPassword;

    // Save updated user data back to session storage
    sessionStorage.setItem("loggedInUser", JSON.stringify(userData));

    // Save updated user data back to local storage
    localStorage.setItem("loggedInUser", JSON.stringify(userData));

    // Optionally, display success message
    alert("Password updated successfully.");

    // Clear input fields
    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
  });
    }
});

//============== LOGGING OUT THE USER=====================
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById('logoutBtn');
    // Add event listener to the "Logout" button
    if(logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        // Clear user data from session storage or local storage
        sessionStorage.removeItem("loggedInUser");
        localStorage.removeItem("loggedInUser"); 

        // Redirect the user to the index.html page
        window.location.href = "index.html";
    });
    }
});

//============== ALLOWING LOGGED IN USERS TO VISIT WISHLIST AND CART PAGES ==================
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the Wishlist icon/button if it exists
    const wishlistBtn = document.querySelector(".header__action-btn[href='wishlist.html']");
    if (wishlistBtn) {
        wishlistBtn.addEventListener("click", function (event) {
            event.preventDefault();
            if (isLoggedIn()) {
                window.location.href = "wishlist.html";
            } else {
                window.location.href = "login-register.html";
            }
        });
    }

    // Add event listener to the Cart icon/button if it exists
    const cartBtn = document.querySelector(".header__action-btn[href='cart.html']");
    if (cartBtn) {
        cartBtn.addEventListener("click", function (event) {
            event.preventDefault();
            if (isLoggedIn()) {
                window.location.href = "cart.html";
            } else {
                window.location.href = "login-register.html";
            }
        });
    }

    // Function to check if the user is logged in
    function isLoggedIn() {
        return sessionStorage.getItem("loggedInUser") !== null;
    }
});

//=========== NEWSLETTER SECTION ============================
    // Function to validate email
    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission

      const emailInput = document.getElementById('emailInput');
      const email = emailInput.value;

      // Validate email
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // If email is valid, display success message
      alert('Thank you for subscribing!');
      // You can also submit the form to a backend endpoint here if needed
    }

    // Attach event listener to the subscribe button
    const subscribeBtn = document.getElementById('subscribeBtn');
    if(subscribeBtn){
      subscribeBtn.addEventListener('click', handleSubmit);
    }