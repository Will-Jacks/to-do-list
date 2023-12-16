import React from 'react';
import { Link } from 'react-router-dom';

const HomeUser = () => {

  function handleSubmit() {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Usuário</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Senha</label>
          <input type="password" />
        </div>
      </form>

      <p>Não possui login?<Link to={"/userRegistration"}>Cadastre-se</Link></p>
      <Link to={"/app"}><p>Esqueceu a sua senha?</p></Link>
    </div>
  )
}

export default HomeUser