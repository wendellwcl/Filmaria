import './filme.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../Services/api.js'
import { toast } from 'react-toastify';

export default function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true)


    //----------------------------------------------------------------------------------


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


    //----------------------------------------------------------------------------------


    function favoritarFilme(){

        const listaFilmesFavoritos = localStorage.getItem('filmes');

        let filmesFavoritos = JSON.parse(listaFilmesFavoritos) || [];

        //Verificar se o filme já está nos favoritos
        const verificar = filmesFavoritos.some((filmeAtual) => filmeAtual.id === filme.id)
        if(verificar){
            toast.info('Este filme já está em seus favoritos.');
            return;
        }

        //Adicionar filme ao array de favoritos
        filmesFavoritos.push(filme);
        //Adicionar ao localStorage
        localStorage.setItem('filmes', JSON.stringify(filmesFavoritos))
        toast.success('Filme adicionado aos favoritos.')

    };


    //----------------------------------------------------------------------------------


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
            <p>{filme.sinopse}</p>
            <div className='btns'>
                <button>
                    <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Assistir trailer
                    </a>
                </button>
                <button onClick={favoritarFilme}>Adicionar aos favoritos</button>
            </div>

        </div>

    );

};