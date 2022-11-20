// CSS
import styles from "./SearchForm.module.css";

// Icon
import { BsSearch } from "react-icons/bs";

// Hooks
import { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
    const [cityName, setCityName] = useState("");

    const submit = (e) => {
        e.preventDefault();
        setCityName("");
        handleSubmit(cityName);
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <input 
                type="text" 
                value={cityName}
                placeholder="Digite o nome da cidade..."
                onChange={(e) => setCityName(e.target.value)}
            />
            <button><BsSearch /></button>
        </form>
    );
}

export default SearchForm;