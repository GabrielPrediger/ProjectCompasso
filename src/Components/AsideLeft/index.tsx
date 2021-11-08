import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, } from './styles';


const Header: React.FC = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleSubmitUser (event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLocaleLowerCase().trim());
  }

  return (
    <Container id="page-auth">
        <aside>
            <strong>Seja Bem-vindo</strong>
            <p>Ao meu teste técnico</p>
            <h1>Digite um nome de Usuario:</h1>
            <div className="main-container">
                <input 
                    placeholder="Digite um Usuario" 
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}
                />                
                <button className="search-user" onClick={handleSubmitUser}>
                        Procurar
                </button>
                <div className="separator">ou entre no site</div>
                <div className="back-to-site">
                    <a href="https://github.com/">
                          GitHub
                    </a>
                </div>
            </div>
        </aside>  
    </Container>
  )
}

export default Header;