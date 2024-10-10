
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import { RouterProvider } from 'react-router-dom'
import router from './Routes/index.jsx'
import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
 
axios.defaults.baseURL = "https://api.themoviedb.org/3"

const apiUrl = import.meta.env.VITE_ACCESS_TOKEN;
console.log(apiUrl);

axios.defaults.headers.common['Authorization'] = `Bearer ${apiUrl}`

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
