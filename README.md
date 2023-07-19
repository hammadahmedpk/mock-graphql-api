# GraphQL API on Mock Data
This is a GraphQL API that uses Query and Mutation concepts. This has been developed by @hammadahmedpk. 

# Steps to Setup & Run the Project
- Clone the Repository
- Go inside the root directory and perform `npm install`
- Run the Project using `npx nodemon index.js`

# Test the API
- Go to route: `localhost:3004/graphql`
- Use the GUI to test the API

# Mutation
- Use the following query to create a user 

- `mutation{
  createUser (firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", password: "john"){
    firstName
    lastName
  }
}`

# Query
- Use the following query to get all the users with firstName and lastName

- _Do notice the last user if you used the Mutation Query First :D_

- `query {
  getAllUsers {
    firstName
    lastName
    id
  }
}`




