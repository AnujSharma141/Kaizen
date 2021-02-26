import got from 'got'
import jsdom from 'jsdom'
const {JSDOM} = jsdom

const search = async key =>{
	try{
	const showData = await got(`https://myanimelist.net/anime.php?q=${encodeURI(key)}&cat=anime`)
	const data = showData.body	
	const arr = data.split('<div class="picSurround">')
	const filter = arr.slice(1,arr.length-1	)
	const map = filter.map(item =>{
		const dom = new JSDOM(item)
		const desc = {
			name: dom.window.document.querySelector(".fw-b").textContent,
			link: dom.window.document.querySelector(".fw-b").getAttribute('href'),
		}	
		return desc
	})
	return map
	}
	catch(error){ 
		return {error:{ message: 'Not Found!' , status: true}}
	}
}

export default search