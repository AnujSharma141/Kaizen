import axios from 'axios'
import links from '../utils/links'
import helpers from '../utils/helpers'

async function rated () {
  try {
    const response = await axios(links.RATED_URL)
    const data = helpers.fetchAnimeList(response.data)
    return data
  } catch (error) {
    return { error: { message: 'Not Found!', status: false } }
  }
}

export default rated
