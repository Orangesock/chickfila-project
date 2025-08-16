//script.js

// This JavaScript code was developed with assistance from ChatGPT.
// I am actively reviewing and learning the functionality in this file.

// ---------- Add to Cart Functionality with Quantity ----------
const cart = [];
const cartCountElem = document.createElement('div');
cartCountElem.style.position = 'fixed';
cartCountElem.style.top = '10px';
cartCountElem.style.right = '10px';
cartCountElem.style.backgroundColor = '#cc0000';
cartCountElem.style.color = 'white';
cartCountElem.style.padding = '10px 20px';
cartCountElem.style.borderRadius = '10px';
cartCountElem.style.fontWeight = 'bold';
cartCountElem.style.zIndex = '1000';
cartCountElem.textContent = 'Cart: 0 items';
document.body.appendChild(cartCountElem);

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const menuItem = button.closest('.menu-item');
    const itemName = menuItem.querySelector('h3').textContent;
    const itemPriceText = menuItem.querySelector('p:nth-of-type(2)').textContent;
    const priceMatch = itemPriceText.match(/\$([\d\.]+)/);
    const itemPrice = priceMatch ? parseFloat(priceMatch[1]) : 0;

    const quantityInput = menuItem.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value, 10) || 0;

    if (quantity <= 0) {
      alert('Please select a quantity greater than 0.');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      cart.push({ name: itemName, price: itemPrice });
    }

    cartCountElem.textContent = `Cart: ${cart.length} item${cart.length !== 1 ? 's' : ''}`;

    let addedMsg = document.createElement('span');
    addedMsg.textContent = ` +${quantity} Added!`;
    addedMsg.style.color = '#990000';
    addedMsg.style.marginLeft = '10px';
    button.parentNode.appendChild(addedMsg);

    setTimeout(() => {
      addedMsg.remove();
    }, 1500);
  });
});

// ---------- Checkout Summary and Confirmation ----------
const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }

    // Group items by name
    const summaryMap = {};
    let total = 0;
    cart.forEach(item => {
      if (!summaryMap[item.name]) {
        summaryMap[item.name] = { count: 0, price: item.price };
      }
      summaryMap[item.name].count++;
      total += item.price;
    });

    // Build summary text
    let summary = 'Your order summary:\n';
    let index = 1;
    for (const [name, data] of Object.entries(summaryMap)) {
      const itemTotal = data.count * data.price;
      summary += `${index++}. ${name} x${data.count} - $${itemTotal.toFixed(2)}\n`;
    }
    summary += `Total: $${total.toFixed(2)}\n\nThank you for your order!`;

    alert(summary);

    cart.length = 0;
    cartCountElem.textContent = 'Cart: 0 items';
    orderForm.reset();
  });
}

// ---------- Order Status Form Handling ----------
const statusForm = document.getElementById('status-form');
const statusResult = document.getElementById('status-result');

if (statusForm && statusResult) {
  statusForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const orderId = document.getElementById('order-id').value.trim();

    if (!orderId) {
      statusResult.innerHTML = '<p style="color: red;">Please enter an order number or email.</p>';
      return;
    }

    const lastChar = orderId.slice(-1);
    let statusText = 'Your order is being prepared.';

    if (lastChar === '1') {
      statusText = 'Your order is Ready for Pickup!';
    } else if (lastChar === '2') {
      statusText = 'Your order is In Progress.';
    } else if (lastChar === '3') {
      statusText = 'Your order has been Completed.';
    }

    statusResult.innerHTML = `<p><strong>Status for "${orderId}":</strong> ${statusText}</p>`;
  });
}

// ---------- Support Form Validation ----------
const supportForm = document.getElementById('support-form');
if (supportForm) {
  supportForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you for contacting customer support! We will get back to you soon.');
    supportForm.reset();
  });
}

// ---------- Navigation Highlighting ----------
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.textDecoration = 'underline';
  }
});
