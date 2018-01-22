import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddressBook from './components/address-book';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < AddressBook / > , document.getElementById('root'));
registerServiceWorker();