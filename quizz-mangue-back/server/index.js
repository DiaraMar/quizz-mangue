const port = 9999
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db.config.js')
const api = require('./apis')(db, ['user', 'question', 'quizz', 'score'])

app.use(bodyParser.json())
app.use(`/api/v${api.version}`, api.routers)
//ci-dessus prefixer chaque route des API par api/v1/ + associer routers à l'app
app.set('trust proxy', true)

app.get('/', (req, res) => {
  res.send('root@my-api')
})

console.log('node server running @ http://localhost:' + port)

app.listen(port)
