Chick-fil-A Online Ordering System

This is a web-based simulation of a Chick-fil-A online ordering system 
built with HTML, CSS, and JavaScript. The project demonstrates front-end 
web development skills, including interactive forms, DOM manipulation, and 
basic order management logic.

Features:

- Home Page (index.html): Welcome page with navigation to order, status, 
and support pages.
- Order Page (order.html):
  - Browse menu items (Chicken Sandwich, Waffle Fries, Nuggets, Spicy 
Chicken Sandwich, Lemonade)
  - Add items to a dynamic cart
  - View total quantity in cart
  - Checkout with a summary of the order
- Order Status Page (status.html):
  - Enter order number or email to view a simulated order status
  - Status changes based on the last character of the input for 
demonstration purposes
- Customer Support Page (support.html):
  - Fill out a form with name, email, and message
  - Form validates required fields and email format
  - Displays a confirmation message when submitted
- Responsive Navigation: Highlighting the current page in the menu
- Interactive Cart: Updates dynamically as items are added

Technologies Used:

- HTML5 – Page structure and forms
- CSS3 – Styling, layout, and responsive design
- JavaScript – DOM manipulation, form validation, cart management, order 
status simulation

How to Use:

1. Clone the repository:
   git clone https://github.com/Orangesock/chickfila-project.git
2. Open index.html in a web browser to access the site.
3. Navigate through pages using the top menu:
   - Order Now to select items
   - Check Order Status to see simulated order updates
   - Customer Support to submit a message

Note: This project is a simulation and does not process real payments or 
orders.

Project Structure:

chickfila-project/
│
├─ index.html        # Home page
├─ order.html        # Order menu and checkout
├─ status.html       # Order status page
├─ support.html      # Customer support page
├─ style.css         # Styling for all pages
├─ script.js         # JavaScript functionality for cart, forms, and 
navigation
└─ .gitignore        # Files/folders ignored by Git

