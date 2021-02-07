const got = require('got')
const jsdom = require('jsdom')
const {JSDOM} = jsdom

const detail = async key =>{
	try{
	const showData = await got(key)
	const data = await showData.body	
    const dom = new JSDOM(data)
    let genres = []
    dom.window.document.querySelectorAll('span[itemprop="genre"]').forEach(item =>  genres.push(item.textContent))
    const desc = {
        name: dom.window.document.querySelector(".title-name").textContent,
        image: dom.window.document.querySelector(".lazyload").getAttribute('data-src'),
        description: dom.window.document.querySelector('p[itemprop="description"]').textContent,
        rating: dom.window.document.querySelector(".score-label").textContent,
        genre:  genres,
        episodes: dom.window.document.querySelector("#curEps").textContent
    }	
	return desc
	}
	catch(error){ 
		return {error:{ message: error , status: true}}
	}
}

module.exports = detail