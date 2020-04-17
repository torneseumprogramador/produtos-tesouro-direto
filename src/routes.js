const {Router } = require('express')
const router = Router()
const TesouroController = require('../src/controllers/TesouroController');

router.post('/tesouro', TesouroController.create);
router.get('/tesouro', TesouroController.index);
router.get('/tesouro/:id', TesouroController.getById);
router.put('/tesouro/:id', TesouroController.update);
router.delete('/tesouro/:id', TesouroController.delete);

module.exports = router