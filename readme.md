# Ecommerce Full-Stack Application

## Creators
- This full-stack application was created by Rahmin Shoukoohi and West McMillen for the DigitalCrafts web development bootcamp.
- Rahmin worked on creating the backend, while West utilized the information and routes created on the backend to send and recieve data from the frontend, which was created by West.
- This application uses Javascript, Bulma CSS Framework, and HTML to write the code for the application. The backend is fully coded with Javascript, while the frontend has JavaScript files linked to the HTML pages.
- The CSS was mostly done with the Bulma CSS Framework, and linked to the HTML pages in order to add styling to the application.

## How to run this application
- Once the code has been cloned, in your console, type ```npm i``` to install all the dependencies and packages that this program need in order to work 
- these packages are: 
    - bcrypt
    - connect-session-sequelize
    - cookie-parser
    - cors
    - deep-email-validator
    - dotenv
    - email-validator
    - express
    - express-es6-template-engine
    - express-session
    - pg
    - sequelize
    - sequelize-cli
- This will install all the necessary packages that the application needs in order to run it. 
- Once all packages are installed, direct yourself into the 'controller' folder, and run the index.js file to start the server
    - If you have nodemon installed, type : ```nodemon index.js``` (must have nodemon installed previously)
    - If you DO NOT have nodemon installed, type: ```node index.js``` (must have node.js installed previously)
- after the server is running, go to your web browser and type 'localhost:3005'
    - This will take you to the main homepage of the application
- After you are on the main homepage, you are all set!

## Frontend Specifications
- The frontend was created by West McMillen to utilize the data Rahmin created to the frontend in order to print out the products, and send data back and forth to the API in the backend.
- The "express-es6-template-engine" allows West to obtain this data and use it how he wants it on the frontend
- The CSS was done using a framework, named Bulma, to style the web page. Most of the styling was obtained by that specific framework
    - The hex colors used in this fullstack application are: 
        - Primary colors: #00d1b2
        - Secondary colors: #363636, #f5f5f5, and #fafafa

## Website features
- A user can freely navigate the website once the user has logged in, 
    - A user will have to either create an account and store their information within the database, or
    - a user can sign in as a guest and freely navigate the website
- The user must be logged in in order to prevent non authorized users into the website. The unauthorized URLs will redirect the user to the account creation page, so that the user can create an account, or login as a guest
- The 'Buy Now' button sends all the user data to the database, which contains the product IDs of all the products that were in the cart at the time. 
- The 'Add to Cart' button allows the user to store the item that they want into their cart, which then allows them to check out and have the product information linked to their
specific account via the Orders table, which is a join table that includes the user id, and the product id, respectivly.

## More information about this project
- Here are the 'Medium.com' articles that West and Rahmin have created that go in more detail about the specifics of both the frontend and backend of this project.
    - Rahmin: https://medium.com/@rahminshoukoohi/digitalcrafts-backend-fullstack-project-c22c89c8640d
    - West: 