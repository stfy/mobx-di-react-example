import 'reflect-metadata';


import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './application';
import './global-styles';
import './ioc'

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
