import React from 'react';
import { Link } from 'react-router-dom';
import './homeUser.css'
import logo from "../../img/resized-todolist.png";

const HomeUser = () => {

  return (
    <div className='main-container'>
      <header>
          <img src={logo} alt="" id='main-image-logo' />
      </header>
      <form  className='form-container'>
        <div>
          <label htmlFor="" id='user-label'>
            Usuário
            <input type="text" id='user-input' />
          </label>
        </div>

        <div>
          <label htmlFor="" id='password-label'>
            Senha
            <input type="password" id='password-input' />
          </label>
        </div>

        <button type="submit" className='submit-button-login'>Entrar &gt;</button>
        <p>Não possui login?<Link to={"/userRegistration"}> Cadastre-se</Link></p>
        <Link to={"/app"}><p className='forgot-password-text'>Esqueceu a sua senha?</p></Link>
      </form>

    </div>
  )
}

export default HomeUser