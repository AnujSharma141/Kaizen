const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./models/schema')
const resolvers = require('./models/resolver')

const app = express()

 const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground:{
    endpoint:'/api'
  }
})

app.use(express.static('docs'))
server.applyMiddleware({ app, path:'/api'} )

app.listen(process.env.PORT||4000,
  ()=>{console.log(`Server is running`)
})
