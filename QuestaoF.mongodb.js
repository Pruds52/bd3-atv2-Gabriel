const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// f - Produtos excluindo duas categorias parametrizadas

db[collection].find({
    $and: [
        {categoria: { $ne: "Eletrônicos" }},
        {categoria: { $ne: "Vestuário"}}
    ]
})