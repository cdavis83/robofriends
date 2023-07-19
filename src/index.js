import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from './Cardlist';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {robots} from './robots'

ReactDOM.render(
    <Cardlist robots ={robots}/>
    ,document.getElementById('root'))
reportWebVitals();
