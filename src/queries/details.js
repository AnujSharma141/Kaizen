import got from 'got'
import Set from '../models/set'

const PRE_KEY = 'https://myanimelist.net/anime/'

const detail = async key => {
  try {
    const raw = await got(PRE_KEY + key)
    const data = raw.body
    const desc = new Set(data)
    return desc.feed()
  } catch (error) {
    return { error: { message: error, status: false } }
  }
}

export default detail
