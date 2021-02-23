const {gql} = require('apollo-server-express')

module.exports = gql`
type Query {
    popular : [Item!]! 
    new : [Item!]!
    rated : [Item!]!
    search(key: String!) : [Unit]!
    detail(link: String!) : Set!
    map(name: String!) : Set!
  }

  type Unit{
    name: String!
    link : String!
  }

  type Item{
    name: String!
    rating: String!
    link : String!
  }

  type Set{
    name: String!
    rating: String!
    genre: [String!]
    description: String!
    image: String!
    episodes: String!
  }
`
