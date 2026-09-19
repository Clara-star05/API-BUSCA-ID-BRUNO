function busca() {
    console.log("Apertou")

    fetch( 'db.json'). then(resposta => resposta.json()).then(banco => {
        //Variavel que busca o valor digitado pelo usuário
        let identificador = document.getElementById('valor').value 
        let encontrado = false

        //variavelque busca no JSON e compare com o digitado
        banco.forEach(corpo => {
                if(identificador == corpo.id ) {
                    document.getElementById('imagem'). innerHTML = corpo.image
                    document.getElementById('nome'). innerHTML = "Nome: " + corpo.name
                    document.getElementById('descricao'). innerHTML = "Descrição: " +  corpo.descriebe
                    document.getElementById('estilo'). innerHTML = "Estilo: " + corpo.style
                    document.getElementById('preco'). innerHTML = "Preço: " + corpo.price

                    encontrado = true
                }
        })
        if (!encontrado){
            document.getElementById('erro').innerHTML = "ID Não encontrado"
        }
    })
}

   