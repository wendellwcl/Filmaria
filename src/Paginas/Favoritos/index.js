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
            return(item.id !== removerId)
        });

        setFilmes(filtrarFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtrarFilmes))

        toast.error('Filme removido.')

    }


    //---------------------------------------------------------------------------


    return(

        <div id='meusFilmes'>

            <h1>Lista de favoritos</h1>

            {filmes.length === 0 && <span>Você não possui filmes salvos</span>}

            <ul>

                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <h3>{item.nome}</h3>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => removerFavorito(item.id)}>Remover</button>
                            </div>
                        </li>
                    )
                })}

            </ul>

        </div>

    );

};