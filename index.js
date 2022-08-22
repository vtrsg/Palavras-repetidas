const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'dados', 'legendas')

const simbolos = [
    '.','?','-',',','♪','"',
    '_','<i>','</i>','\r','[',']',
    '(',')'
]


//composição de funções, o resultado de uma função passa para outra função 
fn.lerDiretorio(caminho)
                        .then(fn.elementosTerminadosCom('.srt'))
                        .then(fn.lerArquivos)
                        .then(fn.mesclarElementos)
                        .then(fn.separarTextoPor('\n'))
                        .then(fn.removerElementosSeVazio)
                        .then(fn.removerElementosSeIncluir('-->'))
                        .then(fn.removerElementosSeApenasNumero)
                        .then(fn.removerSimbolos(simbolos))
                        .then(fn.mesclarElementos)
                        .then(fn.separarTextoPor(' '))
                        .then(fn.removerElementosSeVazio)
                        .then(fn.removerElementosSeApenasNumero)
                        .then(fn.agruparElementos)
                        .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
                        .then(console.log)

