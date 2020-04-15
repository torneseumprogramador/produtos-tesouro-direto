const TOKEN = '123456'
const Tesouro = require('../models/Tesouro')

module.exports = {
    async create (req, res) {
        if(req.headers.token === TOKEN){
            const {nome, ir, pais, prefixado, taxa, vencimento} = req.body
            try {
              const tesouro =  await Tesouro.create({ nome, ir, pais, prefixado, taxa, vencimento});
              return res.status(201).send(tesouro)
            } catch (error) {
              return res.status(401).send(error)
            }
          }
          return res.status(401).json({error: "Acesso não autorizado"})
    },
    async index (req, res) {
        if(req.headers.token === TOKEN){
            try{
            const tesouro =  await Tesouro.find({})
            return res.status(200).send(tesouro)
            }
            catch(err){
              return res.status(401).send(err)
            }
          }
          return res.status(401).json({error: "Acesso não autorizado"})
    },

    async getById (req, res) {
        const {id} = req.params
        if(req.headers.token === TOKEN){
          try {
            const tesouro =  await Tesouro.findById(id)
            return res.status(200).send(tesouro)
          } catch (error) {
            res.status(401).send(err)
          }
        }
        return res.status(401).json({error: "Acesso não autorizado"})
      },

    async update (req, res) {
        const {nome, taxa, ir, pais, prefixado, vencimento} = req.body
        const {id} = req.params
        if (req.headers.token == TOKEN) {
            const tesouro = await Tesouro.findByIdAndUpdate(id, {nome, taxa, ir, pais, prefixado, vencimento}, {new: true})
            return res.status(204).json(tesouro)
        }
        return res.status(401).json({err: "Acesso negado a API"})

    },
    async delete (req, res) {
        const {id} = req.params
        if(req.headers.token === TOKEN){
            try{
              await Tesouro.findByIdAndDelete(id)
              return res.status(204).send({});
            }
            catch(err){
             return res.status(401).send(err)
            }
          }
          return res.status(401).json({error: "Acesso não autorizado"})
    }
}
