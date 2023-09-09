import axios from 'axios'
import links from '../utils/links'
import helpers from '../utils/helpers'

async function popular () {
  try {
    const response = await axios(links.POPULAR_URL)
    const data = helpers.fetchAnimeList(response.data)
    return data
  } catch (error) {
    return { error: { message: 'Not Found!', status: false } }
  }
}

export default popular
