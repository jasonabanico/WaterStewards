import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Background } from './components/Background';
import { DataUsed } from './components/DataUsed';
import { Framework } from './components/Framework';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/background' component={Background} />
        <Route exact path='/data_used' component={DataUsed} />
        <Route exact path='/framework' component={Framework} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
