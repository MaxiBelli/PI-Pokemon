const {Router} = require('express');
const addTypes = require('../Controllers/type');
const {Type} = require('../db')


const router = Router()
module.exports = router


router.get('/', async(req, res) => {
    const call = await addTypes();
    const resultType = await Type.findAll();
    res.send(resultType)
    console.log(resultType)
});