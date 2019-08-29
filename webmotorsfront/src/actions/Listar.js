import { Component } from 'react';
import { GetAll, Delete } from '../service/Listar'
import { message } from 'antd'

export default class Listar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
        }
    }

    ListarDados = async () => {
        await GetAll().then((response) => {
            if (response != undefined)
                if (response.data.success)
                    this.setState({ dataSource: response.data.listEntities })
        })
    }

    RemoverAnuncio = async (id) => {
        await Delete(id).then((response) => {
            if (response != undefined)
                if (response.data.success)
                {
                    message.success("Anuncio excluído com sucesso");
                    this.ListarDados();
                }
                else
                    message.error("Erro ao excluir o anúncio");

        })
    }
}