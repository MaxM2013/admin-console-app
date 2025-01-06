import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import router from './routes/index'

// tailwind css
import './theme/index.css';
import { ConfigProvider, theme } from 'antd';

import store from "./store"
import { Provider } from "react-redux"

import './mock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ConfigProvider
    theme={{
      token: {
        algorithm: theme.darkAlgorithm,
      }
    }}
    >
      <Provider store={store}>
        <Suspense  fallback={<div>Loading...</div>}>
        <BrowserRouter> 
          <App />
        </BrowserRouter>
        </Suspense>
      </Provider>
  </ConfigProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
