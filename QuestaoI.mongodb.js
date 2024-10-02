const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// i - Produtos ordenados do mais barato para o mais caro de uma categoria parametrizada

db[collection].find(
    {categoria: {$eq: "Eletrônicos"}}
).sort({ valor: 1 })