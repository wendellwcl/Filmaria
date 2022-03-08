import { useEffect, useState } from "react";
import api from '../../Services/api.js'
import { Link } from 'react-router-dom';
import './home.css'

export default function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes(){
            const resposta = await api.get('r-api/?api=filmes')
            setFilmes(resposta.data)
        };

        loadFilmes();

    }, [])

    return(

        <div className='container'>

            <div className='listaFilmes'>

                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome}/>
                            <Link to='/'>Acessar</Link>
                        </article>
                    );
                })}

            </div>

        </div>

    );

};