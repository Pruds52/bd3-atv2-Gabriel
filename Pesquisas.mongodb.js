const database = "bd3_atv2" 

const collection = "bd3_atv2_produtos"

use(database)

// a - Produto mais caro

db[collection].find()
    .sort({ valor: -1 })
    .limit(1)

// b - Produto mais barato



// c - Produtos entre uma faixa de valor parametrizada



// d - Produtos por uma categoria parametrizada



// e - Produtos por duas categorias parametrizadas



// f - Produtos excluindo duas categorias parametrizadas



// g - Produtos ordenados do mais barato para o mais caro



// h - Produtos ordenados do mais caro para o mais barato



// i - Produtos ordenados do mais barato para o mais caro de uma categoria parametrizada



// j - Produtos ordenados do mais caro para o mais barato excluindo uma categoria parametrizada



