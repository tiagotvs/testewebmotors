import axios from 'axios';

export const GetAll = async () => {
    let url = "http://localhost:5000/api/anuncio";

    let data = await axios
        .get(url)
        .catch((error) => {
            console.log(error);
        });

    return data;
}

export const Delete = async (id) => {
    let url = "http://localhost:5000/api/anuncio/ " + id;

    let data = await axios
        .delete(url)
        .catch((error) => {
            console.log(error);
        });

    return data;
}