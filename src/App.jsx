import React from "react";

import First from './components/basics/First'
import Second from './components/basics/Second'
import Fragment from './components/basics/Fragment'
import Fragment2 from './components/basics/Fragment2'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import './App.css'

export default function (props) {
    return (
        <div className="App">
            <h1>Aprendendo React</h1> 
            <div className="Cards">
                <Card titulo='Desafio aleatório' color='#76549A'>
                    <Random max={60} min={1}></Random>
                </Card>
                <Card titulo='Fragmento 2' color='#94B49F'>
                    <Fragment2 />
                </Card>
                <Card titulo='Fragmento' color='#94B49F'>
                    <Fragment />
                </Card>
                <Card titulo='Componente com parametros' color='#DF7861'>
                    <Second name='Norton' amount={-100.0} ></Second>
                </Card>
                <Card titulo='Primeiro componente' color='#DF7861'>
                    <First></First>
                </Card>
            </div>
        </div>
    );
}

