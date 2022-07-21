import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import First from './components/basics/First'
import Second from './components/basics/Second'

const el = document.getElementById('root')
const tag = <strong>Olá React!</strong>
ReactDOM.render(
<div>
    <First></First>
    <Second name='Norton' amount={-100.0} ></Second>
</div>
, el)

