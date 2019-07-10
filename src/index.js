import React from 'react';
import ReactDOM from 'react-dom'; //render하는걸 도와주는 모델이야. 리액트를 웹사이트에 올리고싶다->reactDOM . 리액트를 모바일 앱에 올려놓고싶다->reactNative
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
