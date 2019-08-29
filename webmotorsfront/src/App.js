import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Listar from './views/Listar';
import Inserir from './views/Inserir';
import Atualizar from './views/Atualizar';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
""
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/" name="Home" component={Listar} />
      //     <Route path="/inserir" name="Inserir" component={Inserir} />
      //     <Route path="/atualizar" name="Atualizar" component={Atualizar} />
      //   </Switch>
      // </BrowserRouter>
    );
  }
}

export default App;
