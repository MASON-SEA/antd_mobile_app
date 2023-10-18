/*
 * @Date: 2023-10-16 16:46:51
 * @LastEditors: mason
 * @LastEditTime: 2023-10-18 10:20:21
 * @FilePath: \app1\src\main.jsx
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RoutesConfig from '@/routes'
import { HashRouter } from 'react-router-dom'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <RoutesConfig />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
