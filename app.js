const {ApolloServer} = require('apollo-server')
const schema = require('./models/schema')
const resolver = require('./models/resolver')

const typeDefs = schema
const resolvers = resolver

const server = new ApolloServer({
  typeDefs,
  resolvers,      
})
  
server
  .listen(process.env.PORT)
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  )
