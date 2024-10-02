const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// j - Produtos ordenados do mais caro para o mais barato excluindo uma categoria parametrizada

db[collection].find(
    {categoria: {$ne: "Eletrodomésticos"}}
).sort({ valor: -1 })