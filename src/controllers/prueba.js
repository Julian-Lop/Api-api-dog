const { Router} = require('express');


exports.prueba = (req,res) => {
    return res.status(200).send('Esto es una prueba con otra branch, probando si se hace merge desde el subtree')
}