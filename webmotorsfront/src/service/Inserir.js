import axios from 'axios';

export const GetMarcas = async () => {
    let url = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make";

    let data = await axios
        .get(url)
        .catch((error) => {
            console.log(error);
        });

    return data;
}

export const GetModelos = async (idMarca) => {
    let url = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=" + idMarca;

    let data = await axios
        .get(url)
        .catch((error) => {
            console.log(error);
        });

    return data;
}

export const GetVersoes = async (idModelo) => {
    let url = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=" + idModelo;

    let data = await axios
        .get(url)
        .catch((error) => {
            console.log(error);
        });

    return data;
}

export const Insert = async (model) => {
    let url = "http://localhost:5000/api/anuncio";

    let data = await axios
        .post(url, model)
        .catch((error) => {
            console.log(error);
        });

    return data;
}

export const Put = async (model) => {
    let url = "http://localhost:5000/api/anuncio";

    let data = await axios
        .put(url, model)
        .catch((error) => {
            console.log(error);
        });

    return data;
}

export const GetAnuncio = async (idAnuncio) => {
    let url = "http://localhost:5000/api/anuncio/" + idAnuncio;

    let data = await axios
        .get(url)
        .catch((error) => {
            console.log(error);
        });

    return data;
}