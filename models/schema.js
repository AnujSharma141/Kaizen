module.exports = `
type Query {
    latest : [Set!]! 
    new : [Set!]!
    search : [String]!
    cover : String!
    
  }

  type Set{
    name: String!
    rating: String!
    link : String!
    duration: String!
  }

`
