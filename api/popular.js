const got = require('got')
const jsdom = require('jsdom')
const {JSDOM} = jsdom

async function popular(){
	try{
	const showData = await got(`https://myanimelist.net/topanime.php`)
	const data = showData.body	
	const arr = data.split('<tr class="ranking-list">')
	const filter = arr.slice(1,arr.length-1	)
	const map = filter.map(item =>{
		const dom = new JSDOM(item)
		const desc = {
			name: dom.window.document.querySelector(".anime_ranking_h3").textContent,
			rating: dom.window.document.querySelector(".score-label").textContent,	
			link : dom.window.document.querySelector(".hoverinfo_trigger").getAttribute('href'),
		}
		return desc
	})

	return map
	}
	catch(error){ 
		return {error:{ message: 'Not Found!' , status: true}}
	}
}

module.exports = popular