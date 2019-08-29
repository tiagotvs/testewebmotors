export const ModelToDto = (model) => {
    let data = Dto();
    data.Id = model.id;
    data.Marca = model.marca;
    data.Modelo = model.modelo;
    data.Versao = model.versao;
    data.Ano = model.ano;
    data.Quilometragem = model.quilometragem;
    data.Observacao = model.observacao;
    return data;
}

export const Dto = () => {
    return ({
        Id: 0,
        IdMarca: 0,
        Marca: "",
        IdModelo: 0,
        Modelo: "",
        IdVersao: 0,
        Versao: "",
        Ano: 0,
        Quilometragem: "",
        Observacao: ""
    });
}