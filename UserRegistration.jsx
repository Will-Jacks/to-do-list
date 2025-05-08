import React from 'react'
import { useUsersContext } from '../../context/Users/UsersContext.jsx';
import "./user-registration.css";

const UserRegistration = () => {
    const { name, password, username, setName, setUsername, setPassword, userRegister } = useUsersContext();

    function handleSubmit() {
        userRegister();
        setName('');
        setPassword('');
        setUsername('');
    }

    return (
        <div className='user-registration-container'>
            <div className='wrapper-input-content'>
                <h1>Cadastre-se</h1>
                <form action="/success/user-registration" method='get' onSubmit={handleSubmit}>
                    <div className="input-label-container">
                        <label htmlFor="">Nome</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className='input-field' />
                    </div>
                    <div className='input-label-container'>
                        <label htmlFor="">Usuário</label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} className='input-field' />
                    </div>
                    <div className='input-label-container'>
                        <label htmlFor="">Senha</label>
                        <input type="password" name="" id="" value={password} onChange={e => setPassword(e.target.value)} className='input-field' />
                    </div>
                    <div className="submit-button-wrapper">
                        <button type="submit" className='submit-button'>Cadastrar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UserRegistration;