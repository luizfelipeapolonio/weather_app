// CSS
import styles from "./Header.module.css";

import logo from "../images/icon.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Wheather App logo" />
            <h1>City Weather App</h1>
        </header>
    );
}

export default Header;