const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// a - Produto mais caro

db[collection].find()
    .sort({ valor: -1 })
    .limit(1)