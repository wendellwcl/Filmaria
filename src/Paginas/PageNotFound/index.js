import './pageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound(){

    return(

        <div className='container' id='notFound'>
            <div className='row'>
                <div className='col text-center pt-5'>
                    <h2>Error 404</h2>
                    <h3>Page not found</h3>
                    <Link to='/' className='btn btn-dark mt-5'>Página inicial</Link>
                </div>
            </div>
        </div>

    );

};