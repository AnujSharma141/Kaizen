import popular from '../util/popular'
import latest from '../util/new'
import search from '../util/search'
import detail from '../util/details'
import rated from '../util/rated'
import map from '../util/map'
  
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
      episodes: (parent) => parent.episodes
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