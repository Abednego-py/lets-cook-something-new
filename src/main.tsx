import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import firebase from "firebase/app";
import store from './store/index.ts'


// const app = (
//   <Provider store={store}>
//     {/* <BrowserRouter basename="/"> */}
//         <App />
//     {/* </BrowserRouter> */}
//   </Provider>
// )

// ReactDOM.render(app, document.getElementById("root"))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <Provider store={store}>
    <App />
  </Provider>
)
