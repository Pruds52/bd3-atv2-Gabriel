const database = "bd3_atv2"

const collection = "bd3_atv2_produtos"

use(database)

// c - Produtos entre uma faixa de valor parametrizada

db[collection].find({
    valor: { $gt: 200, $lt: 2000 }
})
