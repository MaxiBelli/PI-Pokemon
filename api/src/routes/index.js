// const { Router } = require('express');
// const pokemonRouter = require('./pokemon');
// const typeRouter = require('./type');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


// const router = Router();
// router.use('/pokemons', pokemonRouter);
// router.use('/types', typeRouter);

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


// module.exports = router;


const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemon');
const typeRouter = require('./type');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRouter);
router.use('/types', typeRouter);


module.exports = router;
