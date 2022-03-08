import './filme.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../Services/api.js'

export default function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        
        async function loadFilme(){
            const resposta = await api.get(`r-api/?api=filmes/${id}`)

            if(resposta.data.length === 0){
                navigate('/')
                return;
            }

            setFilme(resposta.data)
            setLoading(false)
        };

        loadFilme();

    }, [id, navigate])

    if(loading){
        return(
            <div className='filmeInfo'>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(

        <div className='filmeInfo'>
            
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>
            <div className='btns'>
                <button>
                    <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Assistir trailer
                    </a>
                </button>
                <button onClick={()=>{}}>Adicionar aos favoritos</button>
            </div>

        </div>

    );

};