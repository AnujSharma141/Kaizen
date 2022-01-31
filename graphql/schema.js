import { gql } from 'apollo-server-express'

export default gql`
type Query {
    popular : [Item!]! 
    airing : [Item!]!
    rated : [Item!]!
    search(key: String!) : [Unit]!
    detail(id: String!) : Set!
    map(name: String!) : Set!
  }

  type Unit{
    name: String!
    id : String!
  }

  type Item{
    name: String!
    rating: String!
    id : String!
    image: String!
  }

  type Set{
    name: String!
    rating: String!
    genre: [String!]
    description: String!
    image: String!
    episodes: String!
    trailer: String!
  }
`
