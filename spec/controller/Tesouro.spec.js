const supertest = require('supertest')
const app = require('../../src/app')
const Tesouro = require('../../src/models/Tesouro')
const request = supertest(app)
const TOKEN = 123456

describe('TesouroController', () => {
    beforeEach( async() => {
        await Tesouro.deleteMany()
    })
    it('deveria retornar status code de 200', async () => {
        const response = await request.get('/tesouro').set('token', TOKEN)
        expect(response.status).toBe(200)
    })
    it('deveria retornar status code 201', async () =>{
        const response = await request.post('/tesouro').set('token', TOKEN).send({nome: "TES1", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
        expect(response.status).toBe(201)
    })
    it('deveria retornar status code 204 para método PUT', async () => {
        const tesouro = await Tesouro.create({nome: "TES1", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
        const response = await request.put('/tesouro/' + tesouro._id).set('token', TOKEN).send({nome: "TES_P", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
        expect(response.status).toBe(204)
    }) 
    it('deveria retornar status code 204 para método DELETE', async () => {
        const tesouro = await Tesouro.create({nome: "TES1", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
        const response = await request.put('/tesouro/' + tesouro._id).set('token',TOKEN)
        expect(response.status).toBe(204)
    })
})