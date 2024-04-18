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

// ============ CHANGING LOGIN NAV LINK TO LOGOUT IF A USER IS LOGGED IN ===============
document.addEventListener("DOMContentLoaded", function () {
  function isLoggedIn() {
        // Check if user data exists in session storage or local storage
        return sessionStorage.getItem("loggedInUser") !== null;
    }

 // Function to update navigation menu based on login status
function updateNavigationMenu() {
  const loginNavItem = document.getElementById('loginNavItem');
  const registerNavItem = document.getElementById('registerNavItem');

  // Perform null checks before accessing elements
  if (loginNavItem && registerNavItem) {
    if (isLoggedIn()) {
      // If user is logged in, display My Account
      loginNavItem.innerHTML = `<a href="accounts.html" class="nav__link" ">My Account</a>`;
      // Remove the register nav link
      registerNavItem.parentNode.removeChild(registerNavItem);
    } else {
      // If user is not logged in, display login option
      loginNavItem.innerHTML = `<a href="login-register.html" class="nav__link">Login</a>`;
      // Add back the register nav link if it's not present
      // const navList = document.querySelector('.nav__list');
      // const newRegisterNavItem = document.createElement('li');
      // newRegisterNavItem.id = 'registerNavItem';
      registerNavItem.innerHTML = `<a href="register.html" class="nav__link">Register</a>`;
      // navList.appendChild(newRegisterNavItem);
    }
  }
}
  // Call the function to update navigation menu on page load
  updateNavigationMenu();
});

////============== MAKING DETAILS.HTML DYNAMIC ================
document.addEventListener('DOMContentLoaded', function() {
    // Handle click events on Quick View icons
    const quickViewIcons = document.querySelectorAll(".fi-rs-eye");

    quickViewIcons.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault();
            openProductDetails(this);
        });
    });

    // Handle click events on product images for Quick View
    const productImages = document.querySelectorAll(".product__images");

    productImages.forEach(image => {
        image.addEventListener("click", function(event) {
            event.preventDefault();
            openProductDetails(this);
        });
    });

    // Function to open product details
    function openProductDetails(element) {
        const productItem = element.closest(".product__item");
        const productId = productItem.getAttribute("data-product-id");
        const productName = productItem.querySelector('.product__title').innerText;
        const productNewPrice = productItem.querySelector('.new__price').innerText;
        const productOldPrice = productItem.querySelector('.old__price').innerText;
        const productImage = productItem.querySelector('.product__img').src;

        // Construct product details object
        const productDetails = {
            id: productId,
            name: productName,
            oldPrice: productOldPrice,
            newPrice: productNewPrice,
            image: productImage
        };

        // Store selected product details in local storage
        localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

        // Redirect user to details.html
        window.location.href = 'details.html';
    }


    // On details.html, retrieve product details from local storage and populate the page
    if (window.location.pathname.includes('details.html')) {
        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
        if (selectedProduct) {
            document.querySelector('#product-name').innerText = selectedProduct.name;
            document.querySelector('#product-old-price').innerText = selectedProduct.oldPrice;
            document.querySelector('#product-new-price').innerText = selectedProduct.newPrice;
            document.querySelector('#product-image').src = selectedProduct.image;
        }
    }
});

// ===================== Updating wishlist and cart ======================
// Updating wishlist and cart
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if user is logged in
    function isUserLoggedIn() {
        return sessionStorage.getItem("loggedInUser") !== null;
    }

    // Function to update wishlist
    function updateWishlist() {
        // Get the wishlist items container
        const wishlistItemsContainer = document.getElementById("wishlistItems");

        // Check if the container exists
        if (!wishlistItemsContainer) {
            console.error("Wishlist items container not found.");
            return;
        }

        // Get the logged-in user's information from session storage
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

        if (loggedInUser) {
            const loggedInUserId = loggedInUser.userId;

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            // Filter wishlist items for the logged-in user
            const userWishlist = wishlist.filter(item => item.userId === loggedInUserId);

            // Display user's wishlist items
            wishlistItemsContainer.innerHTML = ""; // Clear existing wishlist items

            userWishlist.forEach(function(product) {
                // Create a table row for each product
                const row = document.createElement("tr");

                // Product image column
                const imageCell = document.createElement("td");
                const image = document.createElement("img");
                image.src = product.image;
                image.alt = "Product Image";
                image.classList.add("table__img"); // Add class for styling
                imageCell.appendChild(image);
                row.appendChild(imageCell);

                // Product name column
                const nameCell = document.createElement("td");
                const productName = document.createElement("h3");
                productName.textContent = product.name;
                productName.classList.add("table__title"); // Add class for styling
                const description = document.createElement("p");
                description.textContent = "Crafted with precision and designed for comfort, our garments are perfect for any occasion.";
                description.classList.add("table__description"); // Add class for styling
                nameCell.appendChild(productName);
                nameCell.appendChild(description);
                row.appendChild(nameCell);

                // Product price column
                const priceCell = document.createElement("td");
                const priceSpan = document.createElement("span");
                priceSpan.textContent = product.newPrice;
                priceSpan.classList.add("table__price"); // Add class for styling
                priceCell.appendChild(priceSpan);
                row.appendChild(priceCell);
                
                if (window.location.pathname.includes("wishlist")) {
                  const stockCell = document.createElement("td");
                  const stockSpan = document.createElement("span");
                  stockSpan.textContent = "In Stock"; // Example stock status
                  stockCell.appendChild(stockSpan);
                  row.appendChild(stockCell); 
                  
                  // Action column (Add to Cart button)
                  const actionCell = document.createElement("td");
                  const addToCartBtn = document.createElement("button");
                  addToCartBtn.textContent = "Add to Cart";
                  addToCartBtn.classList.add("btn", "btn--sm", "addToCartBtn"); // Add classes for styling
                  addToCartBtn.dataset.productId = product.id; // Store product ID as data attribute
                  actionCell.appendChild(addToCartBtn);
                  row.appendChild(actionCell);
                }

                // Remove column (Trash icon)
                const removeCell = document.createElement("td");
                const trashIcon = document.createElement("i");
                trashIcon.classList.add("fi", "fi-rs-trash", "table__trash"); // Add classes for styling
                trashIcon.dataset.productId = product.id; // Store product ID as data attribute
                removeCell.appendChild(trashIcon);
                row.appendChild(removeCell);

                // Add the row to the table
                wishlistItemsContainer.appendChild(row);
            });

            // Add event listeners to Add to Cart buttons from wishlist page
            const addToCartButtons = document.querySelectorAll(".addToCartBtn");
            addToCartButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const productId = this.dataset.productId;

                    // Get existing cart items from local storage
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];

                    // Check if cart is null or not an array
                    if (!Array.isArray(cart)) {
                        // Initialize cart as an empty array
                        cart = [];
                    }

                    // Find the product details in the wishlist
                    const product = userWishlist.find(item => item.id === productId);

                    // Add the product to the cart
                    cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert("Product added to cart!");

                    // Redirect user to the cart page
                    window.location.href = 'cart.html';
                });
            });

            // Add event listeners to Trash icons
            const trashIcons = document.querySelectorAll(".table__trash");
            trashIcons.forEach(icon => {
                icon.addEventListener("click", function() {
                    const productId = this.dataset.productId;

                    // Remove the item from the wishlist
                    wishlist = wishlist.filter(item => !(item.id === productId && item.userId === loggedInUserId));
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));

                    // Update the wishlist display
                    updateWishlist();
                });
            });
        }
    }

    // Function to update cart
    function updateCart() {
        // Get the cart items container
        const cartItemsContainer = document.getElementById("cartItems");

        // Check if the container exists
        if (!cartItemsContainer) {
            console.error("Cart items container not found.");
            return;
        }

        // Get the logged-in user's information from session storage
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

        if (loggedInUser) {
            const loggedInUserId = loggedInUser.userId;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Filter cart items for the logged-in user
            const userCart = cart.filter(item => item.userId === loggedInUserId);


            // Display user's cart items
            cartItemsContainer.innerHTML = ""; // Clear existing cart items

            userCart.forEach(function(product) {
                // Create a table row for each product
                const row = document.createElement("tr");

                
                // Product image column
                const imageCell = document.createElement("td");
                const image = document.createElement("img");
                image.src = product.image;
                image.alt = "Product Image";
                image.classList.add("table__img"); // Add class for styling
                imageCell.appendChild(image);
                row.appendChild(imageCell);

                // Product name column
                const nameCell = document.createElement("td");
                nameCell.textContent = product.name;
                row.appendChild(nameCell);

                // Product price column
                const priceCell = document.createElement("td");
                priceCell.textContent = product.newPrice;
                row.appendChild(priceCell);

                // Quantity column
                const quantityCell = document.createElement("td");
                const quantityInput = document.createElement("input");
                quantityInput.type = "number";
                quantityInput.value = 1; // Default quantity
                quantityInput.classList.add("quantity"); // Add class for styling
                quantityCell.appendChild(quantityInput);
                row.appendChild(quantityCell);

                // Sub-total column
                const subTotalCell = document.createElement("td");
                // Calculate sub-total
                const subTotalValue = parseFloat(product.newPrice) * parseInt(quantityInput.value);
                // subTotalCell.textContent = isNaN(subTotalValue) ? "0.00" : subTotalValue.toFixed(2);
                subTotalCell.textContent = product.newPrice;
                row.appendChild(subTotalCell);

                // Remove column (Trash icon)
                const removeCell = document.createElement("td");
                const trashIcon = document.createElement("i");
                trashIcon.classList.add("fi", "fi-rs-trash", "table__trash"); // Add classes for styling
                trashIcon.dataset.productId = product.id; // Store product ID as data attribute
                removeCell.appendChild(trashIcon);
                row.appendChild(removeCell);

                // Add the row to the table
                cartItemsContainer.appendChild(row);
                
                /// Update sub-total when quantity changes
                quantityInput.addEventListener("change", function() {
                  const newQuantity = parseInt(this.value);
                  
                  // Remove dollar sign from product.newPrice and parse as float
                  const priceWithoutDollarSign = parseFloat(product.newPrice.replace('$', ''));

                  // Check if priceWithoutDollarSign is a valid number
                  if (!isNaN(priceWithoutDollarSign)) {
                      const subTotal = priceWithoutDollarSign * newQuantity;
                      subTotalCell.textContent = subTotal.toFixed(2);
                  } else {
                      // Handle case where priceWithoutDollarSign is not a valid number
                      subTotalCell.textContent = "0.00";
                  }

                  // Update cart item in local storage
                  const cartIndex = cart.findIndex(item => item.id === product.id && item.userId === loggedInUserId);
                  if (cartIndex !== -1) {
                    const oldQuantity = cart[cartIndex].quantity;
                    const priceWithoutDollarSign = parseFloat(cart[cartIndex].newPrice.replace('$', ''));
                    
                    // Calculate new sub-total based on the updated quantity
                    const newQuantity = parseInt(this.value);
                    const newSubTotal = priceWithoutDollarSign * newQuantity;

                    // Update quantity and sub-total in the cart item
                    cart[cartIndex].quantity = newQuantity;
                    cart[cartIndex].subTotal = newSubTotal.toFixed(2); 
                    
                    // Update local storage
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            });
          });

            // Add event listeners to Add to Cart buttons
            const addToCartButtons = document.querySelectorAll(".addToCartBtn");
            addToCartButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const productId = this.dataset.productId;

                    // Get existing cart items from local storage
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];

                    // Check if cart is null or not an array
                    if (!Array.isArray(cart)) {
                        // Initialize cart as an empty array
                        cart = [];
                    }

                    // Find the product details in the wishlist
                    const product = userWishlist.find(item => item.id === productId);

                    // Add the product to the cart
                    cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert("Product added to cart!");

                    // Redirect user to the cart page
                    window.location.href = 'cart.html';
                });
            });

             // Add event listeners to Trash icons
            const trashIcons = document.querySelectorAll(".table__trash");
            trashIcons.forEach(icon => {
                icon.addEventListener("click", function() {
                    const productId = this.dataset.productId;

                    // Remove the item from the wishlist
                    cart = cart.filter(item => !(item.id === productId && item.userId === loggedInUserId));
                    localStorage.setItem("cart", JSON.stringify(cart));

                    // Update the cart display
                    updateCart();
                });
            });
        }
    }

    // Function to add a product to the cart
    function addToCart(productId, productName, productNewPrice, productOldPrice, productImage) {
      // Check if user is logged in
      const isLoggedIn = isUserLoggedIn();

      // If user is not logged in, redirect to login page
      if (!isLoggedIn) {
          // Store the current page URL to redirect back after login
          localStorage.setItem('redirectUrl', window.location.href);

          // Redirect to login page
          window.location.href = 'login-register.html';
          return; // Stop further execution
      } else {
          // Get existing cart items for the logged-in user from local storage
          const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          // Check if the product is already in the cart for the current user
          const isInCart = cart.some(item => item.id === productId && item.userId === loggedInUser.userId);

          if (isInCart) {
              // Notify the user that the product is already in the cart
              alert("Product is already in the cart!");
          } else {
              // Find the product details based on productId
              const productDetails = {
                  id: productId,
                  name: productName,
                  oldPrice: productOldPrice,
                  newPrice: productNewPrice,
                  image: productImage,
                  userId: loggedInUser.userId
              };

              // Add the product to the cart
              cart.push(productDetails);
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Product added to cart!");

              // Redirect user to the cart page
              window.location.href = 'cart.html';
          }
      }
  }

  // Handle click events on Add to Cart icons from all pages
  const addToCartIcons = document.querySelectorAll(".fi-rs-shopping-bag-add");
  addToCartIcons.forEach(function(icon) {
      icon.addEventListener("click", function(event) {
        event.preventDefault();
        const productId = this.closest(".product__item").getAttribute("data-product-id");
        const productName = this.closest(".product__item").querySelector('.product__title').innerText;
        const productNewPrice = this.closest(".product__item").querySelector('.new__price').innerText;
        const productOldPrice = this.closest(".product__item").querySelector('.old__price').innerText;
        const productImage = this.closest(".product__item").querySelector('.product__img').src;

        addToCart(productId, productName, productNewPrice, productOldPrice, productImage);
      });
  });

// Handle click events on Add to Wishlist buttons/icons
    const addToWishlistButtons = document.querySelectorAll(".addToWishlist");
    addToWishlistButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            // Check if user is logged in
            const isLoggedIn = isUserLoggedIn();

            // If user is not logged in, redirect to login page
            if (!isLoggedIn) {
                // Store the current page URL to redirect back after login
                localStorage.setItem('redirectUrl', window.location.href);

                // Redirect to login page
                window.location.href = 'login-register.html';
                return; // Stop further execution
            } else {
                // User is logged in, proceed with adding to wishlist
                const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
                const productId = this.closest(".product__item").getAttribute("data-product-id");
                const productName = this.closest(".product__item").querySelector('.product__title').innerText;
                const productNewPrice = this.closest(".product__item").querySelector('.new__price').innerText;
                const productOldPrice = this.closest(".product__item").querySelector('.old__price').innerText;
                const productImage = this.closest(".product__item").querySelector('.product__img').src;

                // Construct product details object
                const productDetails = {
                    id: productId,
                    name: productName,
                    oldPrice: productOldPrice,
                    newPrice: productNewPrice,
                    image: productImage,
                    userId: loggedInUser.userId
                };

                // Get existing wishlist items from local storage
                let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

                // Check if wishlist is null or not an array
                if (!Array.isArray(wishlist)) {
                    // Initialize wishlist as an empty array
                    wishlist = [];
                }

                // Check if the product is already in the wishlist for the current user
                if (!wishlist.some(item => item.id === productId && item.userId === loggedInUser.userId)) {
                    // Add the product to the wishlist
                    wishlist.push(productDetails);
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                    alert("Product added to wishlist!");

                    // Redirect user to the wishlist page
                    window.location.href = 'wishlist.html';
                } else {
                    alert("Product is already in the wishlist!");
                    // Redirect user to the wishlist page
                    window.location.href = 'wishlist.html';
                }
            }
        });
    });

    // Call updateWishlist on page load
    updateWishlist();

    // Call updateCart on page load
    updateCart();


//=============================================================== POPULATING CART ITEMS INTO CHECKOUT PAGE========================================
    // Get the checkout table container
    const checkoutTable = document.getElementById("checkoutTable");

    // Check if the checkout table container exists
    if (!checkoutTable) {
        console.error("Checkout table container not found.");
        return;
    }

    // Populate checkout table
    populateCheckoutTable();

    function populateCheckoutTable() {
        // Get the logged-in user's information from session storage
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

        // Check if user is logged in
        if (!loggedInUser) {
            console.log("User is not logged in.");
            return;
        }

        // Get cart items from local storage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Filter cart items for the logged-in user
        const userCart = cart.filter(item => item.userId === loggedInUser.userId);

        // Check if user's cart is empty
        if (userCart.length === 0) {
            console.log("User's cart is empty.");
            return;
        }

        let totalSubTotal = 0;

        // Clear existing rows
        checkoutTable.innerHTML = "";

        // Iterate over each cart item
        userCart.forEach(item => {
            // Create a new table row
            const row = document.createElement("tr");

            // Product image column
            const imageCell = document.createElement("td");
            const image = document.createElement("img");
            image.src = item.image || ""; // Handle missing image
            image.alt = "Product Image";
            image.classList.add("order__img");
            imageCell.appendChild(image);
            row.appendChild(imageCell);

            // Product name and quantity column
            const nameQuantityCell = document.createElement("td");
            const productName = document.createElement("h3");
            productName.textContent = item.name || ""; // Handle missing name
            productName.classList.add("table__title");
            const quantity = document.createElement("p");
            quantity.textContent = `x ${item.quantity || 0}`; // Handle missing quantity
            quantity.classList.add("table__quantity");
            nameQuantityCell.appendChild(productName);
            nameQuantityCell.appendChild(quantity);
            row.appendChild(nameQuantityCell);

            // Sub-total column
            const subTotalCell = document.createElement("td");
            const subTotalWithoutDollarSign = parseFloat(item.subTotal.replace('$', '') || 0); // Handle missing or invalid subTotal
            subTotalCell.textContent = `$${subTotalWithoutDollarSign.toFixed(2)}`;
            subTotalCell.classList.add("table__price");
            row.appendChild(subTotalCell);

            // Add the row to the checkout table
            checkoutTable.appendChild(row);

            // Add the subtotal of this item to the totalSubTotal
            totalSubTotal += subTotalWithoutDollarSign;
        });

        // Add row for Subtotal
        const subtotalRow = document.createElement("tr");
        const subtotalTitleCell = document.createElement("td");
        subtotalTitleCell.colSpan = 2;
        subtotalTitleCell.innerHTML = '<span class="order__subtitle">SubTotal</span>';
        subtotalRow.appendChild(subtotalTitleCell);
        const subtotalValueCell = document.createElement("td");
        subtotalValueCell.innerHTML = `<span class="table__price">$${totalSubTotal.toFixed(2)}</span>`;
        subtotalRow.appendChild(subtotalValueCell);
        checkoutTable.appendChild(subtotalRow);

        // Add row for Shipping
        const shippingRow = document.createElement("tr");
        const shippingTitleCell = document.createElement("td");
        shippingTitleCell.colSpan = 2;
        shippingTitleCell.innerHTML = '<span class="order__subtitle">Shipping</span>';
        shippingRow.appendChild(shippingTitleCell);
        const shippingValueCell = document.createElement("td");
        shippingValueCell.innerHTML = '<span class="table__price">Free Shipping</span>';
        shippingRow.appendChild(shippingValueCell);
        checkoutTable.appendChild(shippingRow);

        // Add row for Total
        const totalRow = document.createElement("tr");
        const totalTitleCell = document.createElement("td");
        totalTitleCell.colSpan = 2;
        totalTitleCell.innerHTML = '<span class="order__subtitle">Total</span>';
        totalRow.appendChild(totalTitleCell);
        const totalValueCell = document.createElement("td");
        const totalAmount = totalSubTotal;
        totalValueCell.innerHTML = `<span class="order__grand-total">$${totalAmount.toFixed(2)}</span>`;
        totalRow.appendChild(totalValueCell);
        checkoutTable.appendChild(totalRow);
    }


// ====================================================================PLACE ORDER BUTTON ================================================
    // Get the Place Order button
    const placeOrderButton = document.getElementById("placeOrderButton");

    // Check if the Place Order button exists
    if (!placeOrderButton) {
        console.error("Place Order button not found.");
        return;
    }

    // Add event listener to the Place Order button
    placeOrderButton.addEventListener("click", function() {
        // Display congratulations message
        alert("Congratulations! Your order has been placed!");

        // Redirect user to shop.html
        window.location.href = 'shop.html';
    });
});