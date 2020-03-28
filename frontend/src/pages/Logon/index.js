import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';


export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handlerLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('session', { id });
            const ongName = response.data.ong.name;
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', ongName);

            history.push('/profile');

        } catch (error) {
            console.log(error);
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handlerLogin}>
                    <h1>Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button" >Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}