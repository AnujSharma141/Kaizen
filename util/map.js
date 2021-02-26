import search from './search'
import detail from './details'

const map = async function(key){ 
const res = await search(key)
const link = await res[0].link
const final = await detail(link)
return final
}

export default map