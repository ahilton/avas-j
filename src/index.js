import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './chimp.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import './semantic/dist/semantic.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));
unregister();
