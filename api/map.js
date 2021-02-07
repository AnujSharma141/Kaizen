const search = require('./search')
const detail = require('./details')

const map = async function(key){ 
const res = await search(key)
const link = await res[0].link
const final = await detail(link)
console.log(final)
return final
}

module.exports = map