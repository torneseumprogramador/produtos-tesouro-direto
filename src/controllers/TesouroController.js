const TOKEN = 123456
const Tesouro = require('../models/Tesouro')

module.exports = {
    async create (req, res) {

    },
    async index (req, res) {

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

    }
}