import search from './search'
import detail from './details'

const map = async function(key){ 
const list = await search(key)
const id = await list[0].id
const res = await detail(id)
return res
}

export default map