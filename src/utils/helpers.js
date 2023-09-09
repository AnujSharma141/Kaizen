import Item from '../models/item'
import jsdom from 'jsdom'

const { JSDOM } = jsdom

const fetchAnimeList = (data) => {
  // spliting list of html elements
  const list = data.split('<tr class="ranking-list">')
  const filterList = list.slice(1, list.length - 1)

  // using classes to scrape strings from html elements
  const animeList = filterList.map(item => {
    const desc = new Item(item)
    return desc.feed()
  })
  return animeList
}

const fetchSearchList = (data) => {
  // spliting list of html elements
  const list = data.split('<div class="picSurround">')
  const filterList = list.slice(1, list.length - 1)

  // scrape strings from html elements
  const searchList = filterList.map(item => {
    const dom = new JSDOM(item)
    const anime = {
      name: dom.window.document.querySelector('.fw-b').textContent,
      id: dom.window.document.querySelector('.fw-b').getAttribute('href').replace('https://myanimelist.net/anime/', '')
    }
    return anime
  })

  return searchList
}

export default { fetchAnimeList, fetchSearchList }
