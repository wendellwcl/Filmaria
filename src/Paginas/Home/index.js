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

        <div className='container g-3 g-md-0'>
            <div className='row pt-3'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id} className='col-12 col-md-6'>
                            <h2 className='text-center'>{filme.nome}</h2>
                            <img src={filme.foto} alt={filme.nome} className='img-fluid'/>
                            <Link to={`/filme/${filme.id}`} className='text-light text-center'>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>

    );

};