import './rotas.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Componentes/Header';
import Home from './Paginas/Home';

export default function Rotas(){

    return(

        <div className='container'>

            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Router>

        </div>

    );

};