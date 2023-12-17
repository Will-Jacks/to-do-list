import React from 'react'
import { useUsersContext } from '../../context/Users/UsersContext.jsx';
import { Link } from 'react-router-dom';

const UserRegistration = () => {
    const { name, password, username, setName, setUsername, setPassword, userRegister } = useUsersContext();

    function handleSubmit() {
        userRegister();
        setName('');
        setPassword('');
        setUsername('');
    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <form action="/success/user-registration" method='get' onSubmit={handleSubmit}>
                <label htmlFor="">Nome</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />

                <div>
                    <label htmlFor="">Usuário</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>

        </div>
    )
}

export default UserRegistration;