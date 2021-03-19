function calcular() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length === 0 && fim.value.length === 0 && passo.value.length === 0) {
        res.innerHTML = 'Digite numeros validos! Consideraremos o passo = 1.'
    } else {
        res.innerHTML = `\u{1F4AC}Contando:`
    }
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0) {
        alert('Digite numeros validos! Consideraremos o passo = 1.')
        p = 1 /*primeiro if anulado pois estava travando  o browser*/
    }
    if (i < f) { //contagem crescente //
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }

    } else { //contagem decrescente //
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`

    /*primeiro bloco if compara os comprimentos das variaveis digitadas pelo usuario para retornar erro caso ele não digite nada*/
    /*segundo bloco if declara que se inicio for menor que fim deve-se fazer o for: contador é igual a inicio, enquanto for menor ou igual a fim, realizando a (+)contagem com passo declarado pelo usuario */
    /*bloco else faz o mesmo, porém declarando que o contador fará a contagem enquanto inicio for maior ou igual a fim*/
    /* site de emojis https://unicode.org/emoji/charts/full-emoji-list.html*/









}
