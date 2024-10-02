const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// d - Produtos por uma categoria parametrizada

db[collection].find({
    categoria: { $eq: "Vestuário" }
})