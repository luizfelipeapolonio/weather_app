// CSS
import styles from "./SearchForm.module.css";

// Icon
import { BsSearch } from "react-icons/bs";

// Hooks
import { useState, useRef } from "react";

const SearchForm = ({ handleSubmit }) => {
    const [cityName, setCityName] = useState("");
    const formRef = useRef();

    const submit = (e) => {
        e.preventDefault();
        setCityName("");
        handleSubmit(cityName);
        // formRef.current.classList.add("hide");
    }

    return (
        <form className={styles.form} ref={formRef} onSubmit={submit}>
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