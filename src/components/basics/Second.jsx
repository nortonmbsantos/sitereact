import React from "react"

export default function Second(props){
    const status = props.amount > 0 ? 'Saldo positivo' : 'Cheque especial' 
    return ( 
    <div>
        <h2>Olá, {props.name}</h2>
        <h3>Seu saldo em conta é: R$ {props.amount}</h3>
        <p>Status de conta: {status}</p>
    </div>
    )
}