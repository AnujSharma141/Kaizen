const search = require('./search')
const detail = require('./details')

search('code geass')
.then(data =>{
    detail(data.main[0].link)
    .then(res => console.log(res))
})
