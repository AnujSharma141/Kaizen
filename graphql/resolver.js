import popular from '../src/queries/popular'
import airing from '../src/queries/airing'
import search from '../src/queries/search'
import detail from '../src/queries/details'
import rated from '../src/queries/rated'
import map from '../src/queries/map'

const resolver = {
  Query: {
    airing: () => airing(),
    rated: () => rated(),
    popular: () => popular(),
    search: (_, { key }) => search(key),
    detail: (_, { id }) => detail(id),
    map: (_, { name }) => map(name)
  },

  Set: {
    name: (parent) => parent.name,
    rating: (parent) => parent.rating,
    genre: (parent) => parent.genre,
    description: (parent) => parent.description,
    image: (parent) => parent.image,
    episodes: (parent) => parent.episodes,
    trailer: (parent) => parent.trailer
  },

  Item: {
    name: (parent) => parent.name,
    rating: (parent) => parent.rating,
    id: (parent) => parent.id,
    image: (parent) => parent.image
  },

  Unit: {
    name: (parent) => parent.name,
    id: (parent) => parent.id
  }
}

export default resolver
