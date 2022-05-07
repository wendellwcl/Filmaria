import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../Services/api.js'
import { toast } from 'react-toastify';

export default function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);


    //----------------------------------------------------------------------------------


    useEffect(()=>{
        
        async function loadFilme(){
            const resposta = await api.get(`r-api/?api=filmes/${id}`)

            if(resposta.data.length === 0){
                navigate('/');
                return;
            };

            setFilme(resposta.data);
            setLoading(false);
        };

        loadFilme();

    }, [id, navigate]);


    //----------------------------------------------------------------------------------


    function favoritarFilme(){

        const listaFilmesFavoritos = localStorage.getItem('filmes');

        let filmesFavoritos = JSON.parse(listaFilmesFavoritos) || [];

        //Verificar se o filme já está nos favoritos
        const verificar = filmesFavoritos.some((filmeAtual) => filmeAtual.id === filme.id)
        if(verificar){
            toast.info('Este filme já está em seus favoritos.');
            return;
        };

        //Adicionar filme ao array de favoritos
        filmesFavoritos.push(filme);
        //Adicionar ao localStorage
        localStorage.setItem('filmes', JSON.stringify(filmesFavoritos));
        toast.success('Filme adicionado aos favoritos.');

    };


    //----------------------------------------------------------------------------------


    if(loading){
        return(
            <div class="text-center d-flex align-items-center justify-content-center" id='loading'>
                <div class="spinner-border" role="status"></div>
            </div>
        );
    };

    return(

        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 d-flex flex-column align-items-center gx-5 g-md-0'>
                    <h2 className='text-center mt-3 mb-2'>{filme.nome}</h2>
                    <img src={filme.foto} alt={filme.nome} className='col-12 col-md-9 mb-3'/>
                    <p className='col-12 col-md-10 mb-5 mb-md-3'>{filme.sinopse}</p>
                    <div className='col-12 d-flex justify-content-evenly pb-5'>
                        <a className='btn' target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                            <i className="bi bi-play-circle-fill me-2"></i>
                            Assistir trailer
                        </a>
                        <button className='btn' onClick={favoritarFilme}>
                            <i className="bi bi-heart-fill me-2"></i>
                            Adicionar aos favoritos
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );

};