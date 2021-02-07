const popular = require('../api/popular')
const latest = require('../api/new')
const search = require('../api/search')
const detail = require('../api/details')
const map = require('../api/map')
  
const resolver = {
    Query: {
      new: () => latest(),
      popular: () => popular(),
      search : (_,{key}) => search(key),
      detail : (_,{link}) => detail(link),
      map : (_,{link}) => map(link)
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
      link: (parent) => parent.link
    },

    Unit: {
      name: (parent) => parent.name,
      link: (parent) => parent.link
    }
  }

module.exports = resolver