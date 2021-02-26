import got from 'got'
import Item from './models/item'

async function rated(){
	try{
	const scrape = await got(`https://myanimelist.net/topanime.php`)
	const data = scrape.body	
	const arr = data.split('<tr class="ranking-list">')
	const filter = arr.slice(1,arr.length-1	)
	const list = filter.map(item =>{
		const desc = new Item(item)
		return desc.feed()
	})

	return list
	}
	catch(error){ 
		return {error:{ message: 'Not Found!' , status: false}}
	}
}

export default rated