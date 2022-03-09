import './rotas.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Componentes/Header';
import Home from './Paginas/Home';
import Filme from './Paginas/Filme';
import Favoritos from './Paginas/Favoritos';

export default function Rotas(){

    return(

        <div className='container'>

            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/filme/:id' element={<Filme/>}/>
                    <Route path='/favoritos' element={<Favoritos/>}/>
                </Routes>
            </Router>

        </div>

    );

};