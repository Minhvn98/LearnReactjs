const express = require('express')
const app = express()

const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const records = [
  {
    id: 1,
    recordName: 'Reactjs',
    artistName: 'Hung',
    description: 'Khoa hoc react co ban',
  },

  {
    id: 2,
    recordName: 'Angular',
    artistName: 'Tuan',
    description: 'Khoa hoc Angular co ban',
  },
]
app.get('/api/records', (req, res) => res.send(records))

app.listen(port, () => console.log(`App listening on port ${port}`))
