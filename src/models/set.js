import jsdom from "jsdom"
const {JSDOM} = jsdom

class Item {
    constructor(data){
        this.dom = new JSDOM(data)
        this.name = this.dom.window.document.querySelector(".title-name").textContent,
        this.image = this.dom.window.document.querySelector(".lazyload").getAttribute('data-src'),
        this.description = this.dom.window.document.querySelector('p[itemprop="description"]').textContent,
        this.rating = this.dom.window.document.querySelector(".score-label").textContent,
        this.genre = this.genres(this.dom),
        this.episodes = this.dom.window.document.querySelector("#curEps").textContent
        this.trailer = this.dom.window.document.querySelector(".iframe").getAttribute('href')
    }

    genres(tag){
        let genres = []
        tag.window.document.querySelectorAll('span[itemprop="genre"]').forEach(item =>  genres.push(item.textContent))
        return genres
    }

    feed(){
        return{
            name: this.name,
            rating: this.rating,
            image: this.image,
            description: this.description,
            genre: this.genre,
            episodes: this.episodes,
            trailer: this.trailer
        }
    }
}

export default Item