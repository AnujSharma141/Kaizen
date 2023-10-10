import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cron from 'node-cron'

import ping from './src/utils/ping'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolver'

// cron: self pinging service
cron.schedule('*/5 * * * * ', () => {
  ping.handler('https://kaizen-api-ju41.onrender.com/')
  ping.handler('https://dashboard-2cw8.onrender.com')
})

const app = express()

// apollo server middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/api'
  }
})

// serving documentation pages
app.use(express.static('docs'))

server.applyMiddleware({ app, path: '/api' })

app.listen(process.env.PORT || 4000,
  () => {
    console.log('Server is running')
  })
