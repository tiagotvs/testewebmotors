import { Component } from 'react';
import { GetMarcas, GetModelos, GetVersoes, Insert, GetAnuncio, Put } from '../service/Inserir'
import { message } from 'antd'
import { Dto, ModelToDto } from '../ioc/AnuncioModel'
export default class Inserir extends Component {
    constructor(props) {
        super(props);

        this.state = {
            DadosMarcas: [],
            DadosModelos: [],
            DadosVersoes: [],
            Entidade: Dto()
        }
    }

    handleChangeByValue = (value, nameElement) => {
        let entitiesCopy = Object.assign({}, this.state.Entidade);
        Object.defineProperty(entitiesCopy, nameElement, { value: value, writable: true, enumerable: true, configurable: true });

        this.setState({ Entidade: entitiesCopy });
    }

    ListarComboMarcas = async () => {
        await GetMarcas().then((response) => {
            if (response != undefined) {
                this.setState({ DadosMarcas: response.data });
            }
        })
    }

    ListarComboModelos = async (idMarca) => {
        await GetModelos(idMarca).then((response) => {
            if (response != undefined) {
                this.setState({ DadosModelos: response.data });
            }
        })
    }

    ListarComboVersao = async (idModelo) => {
        await GetVersoes(idModelo).then((response) => {
            if (response != undefined) {
                this.setState({ DadosVersoes: response.data });
            }
        })
    }

    GetById = async (idAnuncio) => {
        await GetAnuncio(idAnuncio).then((response) => {
            if (response != undefined) {
                let ent = ModelToDto(response.data.entity);
                console.log(ent);
                console.log(this.state.DadosMarcas)
                this.state.DadosMarcas.map((row) => {
                    if (row.Name === ent.Marca) {
                        ent.IdMarca = row.ID;
                        console.log(ent);
                        GetModelos(row.ID).then((response) => {
                            if (response != undefined) {

                                this.setState({ DadosModelos: response.data });

                                this.state.DadosModelos.map((row) => {

                                    if (row.Name === ent.Modelo) {
                                        console.log(ent);
                                        ent.IdModelo = row.ID;
                                        GetVersoes(row.ID).then((response) => {

                                            if (response != undefined) {

                                                this.setState({ DadosVersoes: response.data });

                                                this.state.DadosVersoes.map((row) => {
                                                    if (row.Name === ent.Versao) {
                                                        ent.IdVersao = row.ID;
                                                        console.log(ent);
                                                        this.setState({ Entidade: ent });
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        console.log('acabou')
    }

    ChangeMarca = async (idMarca) => {
        let ent = this.state.Entidade;

        this.state.DadosMarcas.map((row) => {
            if (row.ID === idMarca) {
                ent.IdMarca = idMarca;
                ent.Marca = row.Name
            }
        })

        await this.ListarComboModelos(idMarca);
    }

    ChangeModelo = async (idModelo) => {
        let ent = this.state.Entidade;

        this.state.DadosModelos.map((row) => {
            if (row.ID === idModelo) {
                ent.IdModelo = idModelo;
                ent.Modelo = row.Name
            }
        })

        await this.ListarComboVersao(idModelo);
    }

    ChangeVersao = async (idVersao) => {
        let ent = this.state.Entidade;

        this.state.DadosVersoes.map((row) => {
            if (row.ID === idVersao) {
                ent.IdVersao = idVersao;
                ent.Versao = row.Name
            }
        })

        this.setState({ Entidade: ent })
    }

    Salvar = async () => {
        let ent = this.state.Entidade;
        if (ent.Id !== 0) {
            await Put(ent).then((response) => {
                if (response != undefined)
                    if (response.status === 400) {
                        response.data.errors.map((row) => {
                            message.error(row);
                        })
                    }
                    else {
                        if (response.data.success) {
                            message.success("Anúncio alterado com sucesso");
                            this.props.history.push('/')
                        }
                        else
                            message.error("Erro ao salvar");
                    }
            })
        }
        else {
            await Insert(ent).then((response) => {
                if (response != undefined)
                    if (response.status === 400) {
                        response.data.errors.map((row) => {
                            message.error(row);
                        })
                    }
                    else {
                        if (response.data.success) {
                            message.success("Anúncio incluído com sucesso");
                            this.props.history.push('/')
                        }
                        else
                            message.error("Erro ao inserir");
                    }
            })

        }
    }

    handleChange(e) {
        console.log('handle change called');
        this.setState({ value: e.target.value });
    }
}