# Shelf Help
Full stack capstone project completed for Nashville Software School [February 2021]  
Shelf Help is an application geared towards helping users easily create a list of recipees they want to cook but more importantly, allows the user to quickly add a recipes ingredients to their grocery list, view ingredients they already have at home & keep track of what is needed for any given meal. 


## Technologies Used
### Front End
* [React](https://reactjs.org/)
* [Firebase Auth](https://firebase.google.com/)
* [React Router Dom](https://reactrouter.com/)
* [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
* [ReactStrap](https://reactstrap.github.io/)

### Back End
* .NET 5 
* ASP.NET Core 
* Entity Framework Core 

### Data
* [Sql Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
* [Spoonacular API](https://spoonacular.com/food-api) 

## Instructions
### Firebase
You will need to create a Firebase project to have working authentication and authorization.

Go to Firebase and create a project (can be named anything)
In the project settings, you will need your _Project Id_ and _Web API Key_

### Spoonacular API
You will need to create an account on Spoonacular's site, the api key will be in your user profile. 

### Getting Started
1. from your terminal, run `git clone` for this repository
2. in appsettings.js, paste your Firebase Project ID in the designated area
3. from API folder, run SQL create file to create the database
4. from API folder, run SQL seed file to initialize data
5. from terminal navigae to `client` folder of repository
6. execute `npm run` to install necessary node packages
7. create a `env.local` file & paste the following code (with your keys)
    ``` REACT_APP_API_KEY=FirebaseAPIKey
    ``` REACT_APP_SPOONACULAR_KEY=SpoonacularKey
8. execute `npm run` from client folder to start app
9. run server from local machine for SQL data. 
