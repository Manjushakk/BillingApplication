import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import configureStore from './Store/configureStore'
import App from "./App"


const store = configureStore()
console.log(store)

console.log('state', store.getState())

store.subscribe(() => {

  console.log('state updated', store.getState())
})
ReactDOM.render(
<Provider store = {store} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
, document.getElementById('root'))