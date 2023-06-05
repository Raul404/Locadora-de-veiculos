const Veiculo = require("../models/veiculo.model");
const { ServiceGetAllVeiculos, ServicegetIdVeiculo, ServicePostVeiculo, ServicePatchVeiculo, ServiceDeleteVeiculo } = require("../services/veiculos.service");

function controllerGetListVeiculos(req, res) {
  try {
    const veiculos = ServiceGetAllVeiculos();
    res.send(veiculos);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function controllerGetVeiculo(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const veiculo = ServicegetIdVeiculo(id);
         if (!veiculo) {
        res.status(404);
        res.send('Veículo não encontrado');
        return;
      }
      res.send(veiculo);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function controllerPostVeiculo(req, res) {
  try {
    const camposPermitidos = ['id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano'];
    const camposExtras = Object.keys(req.body).filter(campo => !camposPermitidos.includes(campo));
    if (camposExtras.length > 0) {
      res.status(400);
      res.send(`Os seguintes campos são inválidos: ${camposExtras.join(', ')}`);
      return;
    }

    const veiculoExistente = ServicegetIdVeiculo(req.body.id);
    if (veiculoExistente) {
      res.status(400);
      res.send('Já existe um veículo com o mesmo ID');
      return;
    }

    const veiculoNovo = Veiculo.build(req.body);
    veiculoNovo.validate().then(() => {
      ServicePostVeiculo(veiculoNovo);
      res.status(201);
      res.send("Veículo criado com sucesso");
    }).catch(error => {
      res.status(400);
      res.send(error.message);
    });
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
}


function controllerPatchVeiculo(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const veiculo = ServicegetIdVeiculo(id);
      if (!veiculo) {
        res.status(404);
        res.send('Veículo não encontrado');
        return;
      }
      const body = req.body;
      ServicePatchVeiculo(body, id);
      res.send("Veículo modificado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function controllerDeleteVeiculo(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {

      const veiculo = ServicegetIdVeiculo(id);
      if (!veiculo) {
        res.status(404);
        res.send('Veículo não encontrado');
        return;
      }
      ServiceDeleteVeiculo(id);

      res.send("Veículo deletado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  controllerGetListVeiculos,
  controllerGetVeiculo,
  controllerPostVeiculo,
  controllerPatchVeiculo,
  controllerDeleteVeiculo
};