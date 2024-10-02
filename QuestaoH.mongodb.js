const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// h - Produtos ordenados do mais caro para o mais barato

db[collection].find().sort({ valor: -1 })
