const express = require('express')
const app = express()

//http://localhost:3000/lucero/123
app.get('/', (req, res) => {
    res.json({msg: 'Hola GET'})
})

app.get('/:user/:password', (req, res) => { //Endpoint
    const {user, password} = req.query
    if (!user || !password) {
        res.status(400).json({msg: 'You need to provide <user> and <password> params'})
    }
    if(user === 'viridiana' && password === '123'){
        res.json({msg: 'Sign In Succesfully'})
        return
    }
    res.status(404).json({msg: 'Wrong user or password'})
})

//http://localhost:3000/login?fullname=viridiana%20herrera%20lavalle
//http://localhost:3000/login?user=viridiana&password=123
app.get('/login', (req, res) => {
    const queries = req.query
    res.json(queries)
})

app.post('/', (req, res) => {
    res.json({msg: 'Hola POST'})
})

app.put('/', (req, res) => {
    res.json({msg: 'Hola PUT'})
})
app.patch('/', (req, res) => {
    res.json({msg: 'Hola PATCH'})
})
app.delete('/', (req, res) => {
    res.json({msg: 'Hola DELETE'})
})

//http://localhost:3000

app.listen(3000, () => {
    console.log('listening on port 3000')
})