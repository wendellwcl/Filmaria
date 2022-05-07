import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css'

export default function Favoritos(){

    const [filmes, setFilmes] = useState([]);


    //---------------------------------------------------------------------------


    useEffect(() => {

        const listaFavoritos = localStorage.getItem('filmes');
        setFilmes(JSON.parse(listaFavoritos) || []);

    }, []);


    //---------------------------------------------------------------------------


    function removerFavorito(removerId){

        let filtrarFilmes = filmes.filter((item) => {
            return(item.id !== removerId);
        });

        setFilmes(filtrarFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtrarFilmes));

        toast.error('Filme removido.');

    };


    //---------------------------------------------------------------------------


    return(

        <div className='container' id='meusFilmes'>
            <div className='row text-center'>
                <h2 className='mt-3 mb-2'>Favoritos</h2>
                {filmes.length === 0 && <span>Você não possui filmes salvos</span>}
            </div>
            <ul className='container g-4'>

                {filmes.map((item)=>{
                    return(
                        <li key={item.id} className='row py-3 px-0 px-md-5'>
                            <span className='h3 mb-2 mb-md-0 ps-md-5 col-12 col-md-6'>{item.nome}</span>
                            <div className='col-12 col-md-6 d-flex align-items-center justify-content-end'>
                                <Link className='btn' to={`/filme/${item.id}`}>Detalhes</Link>
                                <button className='btn ms-3' onClick={() => removerFavorito(item.id)}>
                                    <i className='bi bi-x-lg'></i>
                                    <span className='d-none d-md-inline ms-2'>Remover</span>
                                </button>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>

    );
};