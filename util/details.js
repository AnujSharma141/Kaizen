import got from 'got'
import Set from './models/set'

const detail = async key =>{
	try{
	const scrape = await got(key)
	const data = scrape.body	
    const desc = new Set(data) 
	return desc.feed()
	}
	catch(error){ 
		return {error:{ message: error , status: false}}
	}
}

export default detail