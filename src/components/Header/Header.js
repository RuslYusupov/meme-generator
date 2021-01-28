import './Header.css';
import logo from '../../images/trollface.png';

function Header() {
    return (
        <header className="bg-color">
                <img src={logo} alt="Logo" />
                <p className="text-in-header">Meme Generator</p>
        </header>
    );
}

export default Header;

