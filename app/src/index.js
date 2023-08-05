import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // react-dom 대신 react-dom/client를 가져옴
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot 메서드로 루트 컴포넌트를 생성

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
