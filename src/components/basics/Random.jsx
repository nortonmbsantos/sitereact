import React from "react";

export default props => {
    const {min, max} = props;
    const random = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valores aleatorios</h2>
            <p><strong>Valor mínimo:</strong> {min}</p>
            <p><strong>Valor máximo:</strong> {max}</p>
            <p><strong>Valor escolhido:</strong> {random}</p>
        </div>
    )
}

