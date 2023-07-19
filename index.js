// Necessary Imports
const express = require('express');
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql');
// Port on which server will run
const PORT = 3004;

// Importing Schemas
const schema = require('./Schemas/index')

// Initializing Express App
const app = express();
// app.use(express.json());

// One Single Endpoint
app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}))

// Running Server
app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});