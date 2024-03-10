import React from 'react'
import { useUsersContext } from '../../context/Users/UsersContext.jsx';
import { Link } from 'react-router-dom';

const UserRegistration = () => {
    const { name, password, username, email, setEmail, setName, setUsername, setPassword, userRegister } = useUsersContext();

    function handleSubmit(e) {
        e.preventDefault();
        userRegister();
        setName('');
        setPassword('');
        setUsername('');
    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <form method='get' onSubmit={handleSubmit}>
                <label htmlFor="">
                    Nome
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                
                <div>
                    <label htmlFor="">
                        Email
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Usuário
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        Senha
                        <input type="password" name="" id="" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Cadastrar</button>
            </form>

        </div>
    )
}

export default UserRegistration;