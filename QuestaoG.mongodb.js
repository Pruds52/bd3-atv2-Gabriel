const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// g - Produtos ordenados do mais barato para o mais caro

db[collection].find().sort({ valor: 1 })