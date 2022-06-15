import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Componentes/Header';
import Home from './Paginas/Home';
import Filme from './Paginas/Filme';
import Favoritos from './Paginas/Favoritos';
import PageNotFound from './Paginas/PageNotFound';

export default function Rotas(){

    return(

        <div className='container-fluid g-0'>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Filmaria' element={<Home/>}/>
                    <Route path='/filme/:id' element={<Filme/>}/>
                    <Route path='/favoritos' element={<Favoritos/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </Router>
        </div>

    );

};