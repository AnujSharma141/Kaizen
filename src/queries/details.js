import Set from '../models/set'
import axios from 'axios'
import links from '../utils/links'

const detail = async key => {
  try {
    const response = await axios(links.DETAILS_KEY + key)
    const data = response.data
    const desc = new Set(data)
    return desc.feed()
  } catch (error) {
    return { error: { message: error, status: false } }
  }
}

export default detail
