const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// e - Produtos por duas categorias parametrizadas

db[collection].find({
    $or: [
        { categoria: { $eq: "Eletrônicos" } },
        { categoria: { $eq: "Vestuário" } }
    ]
})