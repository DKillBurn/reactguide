import React from 'react';
import ReactDoM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDoM.render(<App />, document.getElementById('root'));
registerServiceWorker();