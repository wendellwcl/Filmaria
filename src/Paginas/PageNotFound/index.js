import './pageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound(){

    return(

        <div id='pageNotFound'>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to='/'>Ir a página inicial</Link>
        </div>

    );

};