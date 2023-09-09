import axios from 'axios'
import links from '../utils/links'
import helpers from '../utils/helpers'

async function airing () {
  try {
    const response = await axios.get(links.AIRING_URL)
    const data = helpers.fetchAnimeList(response.data)
    return data
  } catch (error) {
    return { error: { message: 'Not Found!', status: false } }
  }
}

export default airing
