import React from 'react'

const UserRegistration = () => {
    function handleSubmit() {

    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nome</label>
                <input type="text" />

                <div>
                    <label htmlFor="">Usuário</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />
                </div>
                <button type="submit">Cadastrar</button>
            </form>

        </div>
    )
}

export default UserRegistration