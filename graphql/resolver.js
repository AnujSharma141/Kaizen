import popular from '../src/popular'
import latest from '../src/new'
import search from '../src/search'
import detail from '../src/details'
import rated from '../src/rated'
import map from '../src/map'
  
const resolver = {
    Query: {
      new: () => latest(),
      rated: () => rated(),
      popular: () => popular(),
      search : (_,{key}) => search(key),
      detail : (_,{link}) => detail(link),
      map : (_,{name}) => map(name)
    },
    
    Set:{
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
      link: (parent) => parent.link,
      image: (parent) => parent.image
    },

    Unit: {
      name: (parent) => parent.name,
      link: (parent) => parent.link
    }
  }

export default resolver