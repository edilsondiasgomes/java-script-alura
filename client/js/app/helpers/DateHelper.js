class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instaciada')
    }

    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('formato de data inválido');

        return new Date(...texto
            .split('-')
            .map(function (item, indice) {
                if (indice == 1) {
                    return item - 1;
                }
                return item;
            })
        );
    }

    static dataParaTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();

    }
}