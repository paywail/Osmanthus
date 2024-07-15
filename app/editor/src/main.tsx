import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { App } from 'antd';
import router from './router/index';
import './css/index.css'

ReactDOM.createRoot(document.getElementById('EditorApp')!).render(
  <React.StrictMode>
    <App >
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)
