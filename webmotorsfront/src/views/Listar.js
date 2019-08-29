import React from 'react';
import { Link } from 'react-router-dom'
import Listar from './../actions/Listar'
import { Card, Table, Row, Button, Popconfirm, message, Col } from 'antd'

class ListarView extends Listar {

    componentWillMount = async () => {
        this.setState({
            columns: [
                {
                    title: 'Marca',
                    dataIndex: 'marca',
                    align: 'center',
                    width: '5%',
                },
                {
                    title: 'Modelo',
                    dataIndex: 'modelo',
                    align: 'center',
                    width: '15%',
                },
                {
                    title: 'Versão',
                    dataIndex: 'versao',
                    align: 'center',
                    width: '20%',
                },
                {
                    title: 'Ano',
                    dataIndex: 'ano',
                    align: 'center',
                    width: '5%',
                },
                {
                    title: 'Quilometragem',
                    dataIndex: 'quilometragem',
                    align: 'center',
                    width: '20%',
                },
                {
                    title: 'Observação',
                    dataIndex: 'observacao',
                    align: 'center',
                    width: '20%',
                },
                {
                    dataIndex: 'funcionarioId',
                    width: '15%',
                    render: (text, record) => (
                        <Row>
                            <Col lg={12}>
                                <Popconfirm
                                    title="Tem certeza que deseja excluir este registro?"
                                    onConfirm={e => this.confirm(record)}
                                    // onCancel={this.cancel}
                                    okText="Sim"
                                    cancelText="Não"
                                >
                                    <a href="#">Apagar</a>
                                </Popconfirm>
                            </Col>
                            <Col offset={1} lg={11}>
                                <Link to={"/inserir/" + record.id}>
                                    <a href="#">Alterar</a>
                                </Link>
                            </Col>
                        </Row>
                    ),
                }
            ]
        })

        await this.ListarDados();
    }

    confirm = async (e) => {
        await this.RemoverAnuncio(e.id);
    }

    render() {
        return (
            <div className="App">
                <Card title="Card title">
                    <Row>
                        <Col lg={3}>
                            <Link to="/inserir/0">
                                <Button type="primary" shape="round" icon="plus" >
                                    Inserir
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Table rowKey={"id"} dataSource={this.state.dataSource} columns={this.state.columns} />
                    </Row>
                </Card>
            </div>
        );
    }
}

export default ListarView;