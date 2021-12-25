import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import CryptoNews from './views/news/CryptoNews';
import About from './views/About';
import Contact from './views/Contact';
import Trending from './views/Trending';
import Market from './views/Market';
import YourCryptos from './views/YourCryptos';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="news" element={<CryptoNews />} />
            <Route path="trending" element={<Trending />} />
            <Route path="market" element={<Market />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="yourcryptos" element={<YourCryptos />} />
            <Route path="login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
