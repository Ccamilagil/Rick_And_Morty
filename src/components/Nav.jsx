import style from './Nav.module.css';
import SearchBar from './SearchBar';

const Nav = ({onSearch}) => {
    return(
        <nav>
            <ul>
                <li> <SearchBar onSearch={onSearch}/></li>
                
            </ul>
        </nav>
    )
}

export default Nav;

