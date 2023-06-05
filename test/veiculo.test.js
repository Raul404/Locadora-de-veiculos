const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Importe o seu arquivo de aplicativo aqui
const expect = chai.expect;

chai.use(chaiHttp);

describe('Rotas de Veículos', () => {
  describe('GET /', () => {
    it('deve retornar uma lista de veículos', (done) => {
      chai.request(app)
        .get('/veiculos')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /', () => {
    it('deve criar um novo veículo', (done) => {
      const newVeiculo = {
        "id": 75,
        "placa": "JKL-3456",
        "chassi": "80246713579024681",
        "renavam": "46813579246",
        "modelo": "Corolla",
        "marca": "Toyota",
        "ano": 2023
      };
      chai.request(app)
        .post('/veiculos')
        .send(newVeiculo)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('PATCH /:id', () => {
    it('deve atualizar um veículo existente', (done) => {
      const updatedVeiculo = {
        "id": 1,
        "placa": "JKL-3456",
        "chassi": "80246713579024681",
        "renavam": "46813579246",
        "modelo": "Corolla",
        "marca": "Toyota",
        "ano": 2023
      };
      const veiculoId = 75; // Substitua pelo ID do veículo que deseja atualizar
      chai.request(app)
        .patch(`/veiculos/${veiculoId}`)
        .send(updatedVeiculo)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('DELETE /:id', () => {
    it('deve excluir um veículo existente', (done) => {
      const veiculoId = 1; // Substitua pelo ID do veículo que deseja excluir
      chai.request(app)
        .delete(`/veiculos/${veiculoId}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
