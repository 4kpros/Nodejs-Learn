const express = require('express')

const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello, Espress 2 !'))

app.get('/api/pokemon/:id', (req, res) => 
{
    const id = req.params.id
    res.send(`Hello, Pokemon ${id}`)
})



app.listen(port, () => console.log(`Notre application Node est demarree sur : http://localhost:${port}`))
