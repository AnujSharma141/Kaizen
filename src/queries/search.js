import axios from 'axios'
import jsdom from 'jsdom'
const {JSDOM} = jsdom

const search = async key =>{
	try{
	const raw = axios.get(`https://myanimelist.net/anime.php?q=${encodeURI(key)}&cat=anime`)
	const chunk = (await raw).data	
	const list = chunk.split('<div class="picSurround">')
	const filter = list.slice(1,list.length-1)
	const response = filter.map(item =>{
		const dom = new JSDOM(item)
		const anime = {
			name: dom.window.document.querySelector(".fw-b").textContent,
			id: dom.window.document.querySelector(".fw-b").getAttribute('href').replace('https://myanimelist.net/anime/',''),
		}	
		return anime
	})
	return response
	}
	catch(error){ 
		return {error:{ message: 'Not Found!' , status: true}}
	}
}

export default search