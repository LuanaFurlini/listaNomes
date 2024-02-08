import express from "express"

const routes = express.Router()

let lista = ['Luana', 'Manu', 'Moretto', 'Vanessa', 'Madu', 'Bagatin']

routes.get('/:nome', (req, res) => {
    const {nome} = req.params;
    if (lista.includes(nome)) {
      return res.status(200).json(`${nome} está na lista.`);
    } else {
        return res.status(200).json(`${nome} não está na lista.`);
    }
  });

export default routes