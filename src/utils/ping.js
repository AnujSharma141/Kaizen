import https from 'https'

exports.handler = async () => {
  const url = 'https://kaizen-api-ju41.onrender.com/'

  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log('log: service pinged successfully!')
        resolve({
          statusCode: 200,
          body: 'service pinged successfully'
        })
      } else {
        reject(
          new Error(`Server ping failed with status code: ${res.statusCode}`)
        )
      }
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}
