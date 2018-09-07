import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faWrench, faUserNinja, faBook ,faFile, faAddressBook, faEnvelopeSquare, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import App from './App';
library.add(fab, faCoffee, faWrench, faUserNinja, faBook ,faFile, faAddressBook, faEnvelopeSquare, faGithubSquare, faLinkedin, faBoxOpen);
ReactDOM.render(<App />, document.getElementById('root'));
