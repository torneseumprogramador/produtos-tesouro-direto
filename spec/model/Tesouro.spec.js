const Tesouro = require('../../src/models/Tesouro')

describe('Tesouro', ()=> {
  beforeEach(async ()=> {
    await Tesouro.deleteMany()
  })
  it('Deve retornar o modelo de Tesouro', async () => {
    const tesouro = await Tesouro.find({})
    expect(tesouro).not.toBeUndefined()
  });
  it('deveria ser definido', () => {
      expect(Tesouro).toBeDefined()
  })
  it('deveria criar um tesouro', async () => {
    const tesouro = await Tesouro.create({nome: "TES1", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
    expect(tesouro.nome).toBe("TES1")
  })
  it('deveria atualizar um tesouro', async () =>{
    const tesouro = await Tesouro.create({nome: "TES1", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
    const novoTesouro = await Tesouro.findByIdAndUpdate(tesouro._id, {nome: "TES2", taxa: 7.5, ir: true, pais: "Brasil", prefixado: true, vencimento: new Date()}, {new: true})
    expect(novoTesouro.nome).toBe('TES2')
    expect(novoTesouro.ir).toBe(true)
  })
  it('deveria remover um tesouro', async () => {
    const tesouro = await Tesouro.create({nome: "TES1", taxa: 7.5, ir: false, pais: "Brasil", prefixado: true, vencimento: new Date()})
    await Tesouro.findByIdAndRemove(tesouro._id, {})
    const tesouroRemovido = await Tesouro.findById(tesouro._id)
    expect(tesouroRemovido).toBeNull()
  })
})
/* nome: {type: String, required: true, unique: true},
  taxa: {type: Number, required: true},
  ir: {type: Boolean, required: true},
  pais: {type: String, required: true},
  prefixado: {type: Boolean, required: true},
  vencimento: {type: Date, required: true, default:new Date().getDate()+1 }*/