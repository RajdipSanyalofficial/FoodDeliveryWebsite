
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
    const quantity = document.getElementById("quantity").value.trim();
    const paymentMethods = document.getElementsByName("paymentMethod");

    // Simple field check
    if (!name || !email || !phone || !address || !food || !quantity) {
      alert("Please fill in all fields.");
      return false;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Phone format check (10 digits only
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    // Quantity check
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