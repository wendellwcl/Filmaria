import './header.css';
import {Link} from 'react-router-dom';

export default function Header(){

    return(

        <header className='container-fluid'>

                <nav className='navbar navbar-dark w-75 m-auto justify-content-between'>
                    <Link className='navbar-brand' to='/'>
                        <i class="bi bi-film me-2"></i>
                        Filmaria
                    </Link>
                    <Link className='nav-link text-light d-flex' to='/favoritos'>
                        <i className="bi-heart-fill d-block"></i>
                        <span className='ms-2'>Favoritos</span>
                    </Link>
                </nav>

        </header>

    );

};