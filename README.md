# Healthy Store App

[![Home](https://i.ibb.co/YTn95Vj/Home.png)](https://i.ibb.co/YTn95Vj/Home.png)

[![Product-selection](https://i.ibb.co/XC3P08S/Product-selection.png)](https://i.ibb.co/XC3P08S/Product-selection.png)

## Description

Demo app for a purchase flow using a set of web API endpoints.

The purchase flow:

1. User visits the website
2. Website presents a welcome message and a “Get started” button.
3. User clicks “Get started”.
4. Website presents a list with all the categories in alphabetical order.
5. User selects the category they wish and clicks "Next".
6. Website presents a list of products (from that category) in alphabetical order and for each product.
  - Pre-selected is the default product variant of the default product for that category.
7. User selects the product variant they wish and clicks "Next" (or just clicks “Next” if they are happy with the default selection).
8. Website presents a form for the user to enter their contact data
  - First name
  - Last name
  - Phone number
  - Email address
9. User enters their data and clicks "Next".
10. Website presents a confirmation page showing all of the previous user entered data along with a “Pay now” button:
  - The category, product, product variant along with the cost
  - The user contact data
11. User clicks “Pay now”
12. Website presents a “Thank you for your purchase” page

## Getting Started

To run application:

1. [Install Node](https://nodejs.org/en)
2. Run `npm install` in this folder
3. Run `npm run dev` in this folder.

After this there should be two applications running:

- React front-end: http://localhost:5173/
- Express server: http://localhost:5008