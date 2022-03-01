const { Router} = require('express');


exports.prueba = (req,res) => {
    return res.status(200).send('esto es una prueba')
}