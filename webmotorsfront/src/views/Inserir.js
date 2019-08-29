import React from 'react';
import { Link } from 'react-router-dom'
import Inserir from '../actions/Inserir'
import { Row, Card, Col, Select, Input, Form, Button } from 'antd'

class InserirView extends Inserir {

  componentWillMount = async () => {
    let id = this.props.match.params.idAnuncio;

    await this.ListarComboMarcas();


    if (id !== "0") {
      this.GetById(id);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.Salvar();
      }
    });
  };

  render() {
    const { Option } = Select;
    const titulo = this.props.match.params.idAnuncio === "0" ? "Cadastro de anúncio" : "Alteraração de anúncio"

    return (
      <div className="App">
        <Row>
          <Col offset={6} lg={12}>
            <Card title={titulo}>
              <Row>
                <Col lg={5}>
                  <label>Marca: </label>
                  <Select onChange={this.ChangeMarca} defaultValue={0} value={this.state.Entidade.IdMarca}>
                    <Option value={0}>Selecione</Option>
                    {this.state.DadosMarcas.map((row, index) => {
                      return (
                        <Option value={row.ID}>{row.Name}</Option>
                      );
                    })}
                  </Select>
                </Col>
                <Col offset={1} lg={7}>
                  <label>Modelo: </label>
                  <Select onChange={this.ChangeModelo} defaultValue={0} value={this.state.Entidade.IdModelo}>
                    <Option value={0}>Selecione</Option>
                    {this.state.DadosModelos.map((row, index) => {
                      return (
                        <Option value={row.ID}>{row.Name}</Option>
                      );
                    })}
                  </Select>
                </Col>
                <Col offset={1} lg={10}>
                  <label>Versao: </label>
                  <Select onChange={this.ChangeVersao} defaultValue={0} value={this.state.Entidade.IdVersao}>
                    <Option value={0}>Selecione</Option>
                    {this.state.DadosVersoes.map((row, index) => {
                      return (
                        <Option value={row.ID}>{row.Name}</Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={3}>
                  <Col lg={9}>
                    <label>Ano: </label>
                  </Col>
                  <Col lg={15}>
                    <Input required={true} onChange={(ev) => this.handleChangeByValue(ev.target.value, "Ano")} value={this.state.Entidade.Ano}></Input>
                  </Col>
                </Col>
                <Col offset={1} lg={8}>
                  <Col lg={11}>
                    <label>Quilometragem: </label>
                  </Col>
                  <Col lg={13}>
                    <Input required={true} onChange={(ev) => this.handleChangeByValue(ev.target.value, "Quilometragem")} value={this.state.Entidade.Quilometragem}></Input>
                  </Col>
                </Col>
                <Col offset={1} lg={11}>
                  <Col lg={8}>
                    <label>Observacao: </label>
                  </Col>
                  <Col lg={16}>
                    <Input required={true} onChange={(ev) => this.handleChangeByValue(ev.target.value, "Observacao")} value={this.state.Entidade.Observacao}></Input>
                  </Col>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={3}>
                  <Link to="/">
                    <Button type="primary" shape="round" icon="left" >
                      voltar
                    </Button>
                  </Link>
                </Col>
                <Col offset={1} lg={3}>
                  <Button type="primary" shape="round" icon="save" htmlType="submit" onClick={this.Salvar}>
                    {this.props.match.params.idAnuncio === "0" ? "Cadastrar" : "Alterar"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default InserirView;