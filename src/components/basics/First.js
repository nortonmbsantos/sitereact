import React from "react"

export default function First(){
    const msg = 'Bem vindo(a) ao meu primeiro site react'
    return (
    <div>
        <h2>
            Primeiro Componente
        </h2>
        <p>
            {msg}
        </p>
    </div>
    )
}