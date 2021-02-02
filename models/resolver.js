const popular = require('../api/popular')
const latest = require('../api/new')
const search = require('../api/search')

let links = [{
    name: 'Shinjeki No Kyojin',
    rating: '9.1',
    duration: 'December 2020 - present'
  },{
    name: 'Code Geass',
    rating: '8.7',
    duration: 'May 2006 - June 2012'
  }]

let list = ['Shinjeki No Kyojin', 'Code Geass', 'Jujutsu Kaisen']

  
const resolver = {
    Query: {
      latest: () => links,
      new: () => links,
      search : () => list,
      cover : () => 'http://cdn.xyz.com/api/img/snk.jpg'
    },
    
    Set: {
      name: (parent) => parent.name,
      rating: (parent) => parent.rating,
      duration: (parent) => parent.duration
    }
  }

module.exports = resolver