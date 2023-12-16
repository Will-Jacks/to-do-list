import React from 'react'

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

      <p>Não possui login?<a href="">Cadastre-se</a></p>
    </div>
  )
}

export default HomeUser