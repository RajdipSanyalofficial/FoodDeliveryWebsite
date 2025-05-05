
//Active NavBar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const orderNowBtn = document.querySelector(".main-btn"); // Add the Order Now button class

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active")); // Remove active from all
      this.classList.add("active"); // Add active to clicked item
    });
  });

  // If "Order Now" is clicked, remove active from all nav links
  if (orderNowBtn) {
    orderNowBtn.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
    });
}
});



// Navbar close in mobile view

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link, .main-btn');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (collapse && navbarCollapse.classList.contains('show')) {
        collapse.hide();
      }
    });
  });
});




//Food Section
document.addEventListener("DOMContentLoaded", () => {
    const foodContainer = document.getElementById("abc");
    const hiddenFoodContainer = document.getElementById("efg");
    const nextFoodBtn = document.getElementById("add-food-btn");
    const prevFoodBtn = document.getElementById("remove-food-btn");
  
    // Function to show the next hidden food card
    const showNextCard = () => {
      const hiddenFoodItems = hiddenFoodContainer.querySelectorAll(".food-item");
      if (hiddenFoodItems.length > 0) {
        const nextFoodCard = hiddenFoodItems[0];
        foodContainer.appendChild(nextFoodCard);
        hiddenFoodContainer.removeChild(nextFoodCard);
      } else {
        alert("Oops! no more food items to show!.We will add more food items later");
      }
    };
  
    // Function to move the last visible card back to the hidden container
    const showPrevCard = () => {
      const visibleFoodItems = foodContainer.querySelectorAll(".food-item");
      if (visibleFoodItems.length > 0) { // Keep at least one card visible
        const lastFoodCard = visibleFoodItems[visibleFoodItems.length - 1];
        hiddenFoodContainer.insertBefore(lastFoodCard, hiddenFoodContainer.firstChild);
      } else {
        alert("Oops! no previous food items to show!");
      }
    };
  
    // Event Listeners for buttons
    nextFoodBtn.addEventListener("click", showNextCard);
    prevFoodBtn.addEventListener("click", showPrevCard);
  });




  //Starts Order Now Form Validation
  function validation() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const food = document.getElementById("food").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const paymentMethods = document.getElementsByName("paymentMethod");
    const cardSelected = document.getElementById("card").checked;
    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();



    // Simple field check
    if (!name || !email || !phone || !address || !country || !zip || !quantity) {
      alert("Please fill in all fields.");
      return false;
    }

    // Email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // 10 Digits Phone format check 
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    // Country 
    if (country !== "India") {
      alert("We only deliver in India.");
      return false;
    }
  
    // State 
    if (state === "") {
      alert("Please select your state.");
      return false;
    }
  
    // ZIP 
    const zipPattern = /^\d{6}$/;
    if (!zipPattern.test(zip)) {
      alert("Please enter a valid 6-digit ZIP code.");
      return false;
    }

    // Food item
    if (food === "") {
      alert("Please select food item.");
      return false;
    }

    // Quantity 
    if (isNaN(quantity) || quantity < 1) {
      alert("Please enter a valid quantity (at least 1).");
      return false;
    }

    //Payment Method 
    let paymentSelected = false;
    for (let i = 0; i < paymentMethods.length; i++) {
    if (paymentMethods[i].checked) {
      paymentSelected = true;
      break;
    }
  }
  if (!paymentSelected) {
    alert("Please select a payment method.");
    return false;
  }

  // If card selected, validate card fields
  if (cardSelected) {
    if (!cardName || !cardNumber || !expiry || !cvv) {
      alert("Please fill in all card details.");
      return false;
    }

    const cardNumPattern = /^\d{16}$/;
    if (!cardNumPattern.test(cardNumber.replace(/\s|-/g, ''))) {
      alert("Please enter a valid 16-digit card number.");
      return false;
    }

    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(expiry)) {
      alert("Please enter valid expiry date.");
      return false;
    }

    const cvvPattern = /^\d{3,4}$/;
    if (!cvvPattern.test(cvv)) {
      alert("Please enter a valid 3 digit CVV.");
      return false;
    }
  }


  // Confirmation
  const abcd= confirm("Are you sure you want to place the order?");
  if(!abcd){
    return false
  }

    // Success
    alert("Your order has been placed successfully!");
    document.querySelector("form").reset();
    return true;
  }
  //Ends Order Now Form Validation 