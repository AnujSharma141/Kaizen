import got from 'got'
import jsdom from 'jsdom'
const {JSDOM} = jsdom

async function popular(){
	try{
	const scrape = await got(`https://myanimelist.net/topanime.php`)
	const data = scrape.body	
	const arr = data.split('<tr class="ranking-list">')
	const filter = arr.slice(1,arr.length-1)
	const list = filter.map(item =>{
		const dom = new JSDOM(item)
		const desc = {
			name: dom.window.document.querySelector(".anime_ranking_h3").textContent,
			rating: dom.window.document.querySelector(".score-label").textContent,	
			link : dom.window.document.querySelector(".hoverinfo_trigger").getAttribute('href'),
		}
		return desc
	})

	return list
	}
	catch(error){ 
		return {error:{ message: 'Not Found!', status: false}}
	}
}

export default popular