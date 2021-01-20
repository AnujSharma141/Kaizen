const got = require('got')
const jsdom = require('jsdom')
const {JSDOM} = jsdom

async function latest(){
	try{
	const showData = await got(`https://myanimelist.net/topanime.php?type=airing`)
	const data = showData.body	
	const arr = data.split('<tr class="ranking-list">')
	const filter = arr.slice(1,arr.length-1	)
	const map = filter.map(item =>{
		const dom = new JSDOM(item)
		const desc = {
			name: dom.window.document.querySelector(".anime_ranking_h3").textContent,
			rank: dom.window.document.querySelector(".score-label").textContent,	
			duration: dom.window.document.querySelector(".information").textContent,
			img:'IMG'
		}
		return desc
	})

	return { main: map, length: arr.length }
	}
	catch(error){ 
		return {error:{ message: 'Not Found!' , status: true}}
	}
}

module.exports = latest