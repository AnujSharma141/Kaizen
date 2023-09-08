import got from 'got'
import Item from '../models/item'

const LATEST_URL = 'https://myanimelist.net/topanime.php?type=airing'

async function airing () {
  try {
    const raw = await got(LATEST_URL)
    const chunk = raw.body
    const list = chunk.split('<tr class="ranking-list">')
    const filter = list.slice(1, list.length - 1)
    const anime = filter.map(item => {
      const desc = new Item(item)
      return desc.feed()
    })
    return anime
  } catch (error) {
    return { error: { message: 'Not Found!', status: false } }
  }
}

export default airing
