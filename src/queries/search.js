import axios from 'axios'
import helpers from '../utils/helpers'

const search = async key => {
  try {
    const response = await axios.get(`https://myanimelist.net/anime.php?q=${encodeURI(key)}&cat=anime`)
    const data = helpers.fetchSearchList(response.data)
    return data
  } catch (error) {
    return { error: { message: 'Not Found!', status: true } }
  }
}

export default search
