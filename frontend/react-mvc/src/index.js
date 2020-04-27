import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./ZoomSlider.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap-cerulean.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


