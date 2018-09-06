import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faWrench, faUserNinja, faBook ,faFile, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import App from './App';
library.add(faCoffee, faWrench, faUserNinja, faBook ,faFile, faAddressBook);

ReactDOM.render(<App />, document.getElementById('root'));
