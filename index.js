const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

function sendMessengerMessage() {
  var productTitleElement = document.getElementById('product-title'); // Get the product title element
  var productTitle = productTitleElement.textContent.trim(); // Extract the product title

  // Check if a product title is found
  if (productTitle) {
      var message = 'I am interested in the following car:\n' + productTitle;
      var pageId = 100071130524133; // Replace with your Facebook page ID

      // Construct the Messenger link
      var messengerLink = 'https://www.messenger.com/t/' + pageId + '?text=' + encodeURIComponent(message);

      // Open the link in a new tab/window
      window.open(messengerLink);
  } else {
      alert('Product title not found.'); // Handle the case where the title is not found
  }
}

function sendWhatsAppMessage() {
  var productTitleElement = document.getElementById('product-title'); // Get the product title element
  var productTitle = productTitleElement.textContent.trim(); // Extract the product title

  // Check if a product title is found
  if (productTitle) {
      var phoneNumber = '+9779849816678'; // Replace with the actual phone number
      var message = 'I am interested in the following car: ' + productTitle;

      // Construct the WhatsApp link
      var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

      // Open the link in a new tab/window
      window.open(whatsappLink);
  } else {
      alert('Product title not found.'); // Handle the case where the title is not found
  }
}

