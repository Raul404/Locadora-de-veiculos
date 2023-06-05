const { Router } = require("express")
const { controllerGetListVeiculos, controllerGetVeiculo , controllerPostVeiculo, controllerPatchVeiculo, controllerDeleteVeiculo} = require("../controllers/veiculo.controller")
const router = Router()

router.get('/', controllerGetListVeiculos)

router.get('/:id', controllerGetVeiculo)

router.post('/', controllerPostVeiculo)

router.patch('/:id', controllerPatchVeiculo)

router.delete('/:id', controllerDeleteVeiculo)
module.exports = router