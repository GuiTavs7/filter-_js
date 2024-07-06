// 1) FILTRANDO SEM USAR O FILTER

let pessoas = [
    {nome: "Roberto", idade: 33},
    {nome: "Ricardo", idade: 33},
    {nome: "Raphael", idade: 27}
]

let pessoasComIdadeDe33Anos = []
for (let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].idade === 33){
        pessoasComIdadeDe33Anos.push(pessoas[i]);
    }
}

console.log(pessoasComIdadeDe33Anos);

// 2) FILTRANDO COM O FILTER

let pessoasFilter33Anos = pessoas.filter(pessoas => pessoas.idade === 33);

console.log(pessoasFilter33Anos);

// BLOCO SEM ARROW FUNCTION 

/*

let pessoasFilter33Anos = pessoas.filter(function(pessoas){
    return pessoas.idade === 33;
})

*/