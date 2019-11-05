class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...this._inputData.value
            .split('-')
            .map(function (item, indice) {
                if (indice == 1) {
                    return item - 1;
                }
                return item;
            })
        );

        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value)
        console.log(negociacao);

        let diaMesAno = negociacao.data.getDate()
            + '/' + (negociacao.data.getMonth() + 1)
            + '/' + negociacao.data.getFullYear();
        console.log(diaMesAno);


    }
}