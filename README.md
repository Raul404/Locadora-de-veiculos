# Locadora de Veiculos

Este é um projeto de back-end em Node.js que gerencia veículos.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Execução

Para executar o projeto, use o seguinte comando:

```
npm start
```

Isso iniciará o servidor na porta 8000.

## Rotas

Este projeto possui as seguintes rotas para gerenciar veículos:

- `GET /veiculos`: Retorna uma lista de todos os veículos.
- `GET /veiculos/:id`: Retorna um veículo específico pelo ID.
- `POST /veiculos`: Cria um novo veículo. Os campos permitidos são: `id`, `placa`, `chassi`, `renavam`, `modelo`, `marca` e `ano`.
- `PATCH /veiculos/:id`: Atualiza um veículo existente pelo ID. Os campos permitidos são os mesmos da rota POST.
- `DELETE /veiculos/:id`: Deleta um veículo pelo ID.


## Testes

Para executar os testes do projeto, use o seguinte comando:

```
npm test
```

Isso executará os testes usando o Mocha.

Você também pode testar as rotas manualmente usando um cliente HTTP como o Postman ou o Insomnia. Basta enviar requisições para as rotas mencionadas na seção "Rotas" do README.

## Visualização 

Os dados podem ser visualizados dentro do arquivo [veiculos.jso](https://github.com/Raul404/Locadora-de-veiculos/blob/main/veiculos.json) localizado na pasta principal.
