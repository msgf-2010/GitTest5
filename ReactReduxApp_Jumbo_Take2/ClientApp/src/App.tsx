import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <Content />
        </div>
    );
};

export default App;

//import * as React from 'react';
//import { Route } from 'react-router';
//import Layout from './components/Layout';
//import Home from './components/Home';
//import Counter from './components/Counter';
//import FetchData from './components/FetchData';

//import './custom.css'

//export default () => (
//    <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
//    </Layout>
//);
