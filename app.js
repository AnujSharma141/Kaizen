import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolver'

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
