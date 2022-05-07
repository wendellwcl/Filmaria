import './app.css'
import Rotas from './rotas.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){

  return(

    <div className='app'>
      <Rotas/>
      <ToastContainer autoClose={3000}/>
    </div>

  );

};