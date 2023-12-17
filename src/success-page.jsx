import React from 'react'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100vw",
            height: "100vh"

        }}>
            <h1>Usuário cadastrado com sucesso!</h1>
            <Link to={"/"}>
                <p>Voltar para a página principal</p>
            </Link>
        </div>
    )
}

export default SuccessPage