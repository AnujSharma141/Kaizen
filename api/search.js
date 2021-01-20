const got = require('got')
const jsdom = require('jsdom')
const {JSDOM} = jsdom

async function search(key){
	try{
	const showData = await got(`https://myanimelist.net/search/all?q=${encodeURI(key)}&cat=all`)
	const data = showData.body	
	const arr = data.split('<div class="list di-t w100">')
	const filter = arr.slice(1,arr.length-1	)
	const map = filter.map(item =>{
		const dom = new JSDOM(item)
		const desc = {
			name: dom.window.document.querySelector(".fw-b").textContent,
		}
		return desc
	})

	return {main: map, length: map.length}
	}
	catch(error){ 
		return {error:{ message: 'Not Found!' , status: true}}
	}
}

module.exports = search