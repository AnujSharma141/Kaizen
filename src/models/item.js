import jsdom from "jsdom"
const {JSDOM} = jsdom
    
class Item {
    constructor(data){
        this.src = new JSDOM(data)
        this.name = this.src.window.document.querySelector(".anime_ranking_h3").textContent
        this.id = this.src.window.document.querySelector(".hoverinfo_trigger").getAttribute('href').replace('https://myanimelist.net/anime/','')
        this.rating = this.src.window.document.querySelector(".score-label").textContent
        this.image = this.img(this.src)
    }

    img(tag){
        const raw = tag.window.document.querySelector(".lazyload").getAttribute('data-src')
        const pre = raw.split('anime/')
        const final = pre[1].split('.jpg')
        return `https://cdn.myanimelist.net/images/anime/${final[0]}.jpg`
    }

    feed(){
        return{
            name: this.name,
            id: this.id,
            rating: this.rating,
            image: this.image
        }
    }
}

export default Item