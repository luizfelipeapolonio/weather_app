// CSS
import styles from "./Loading.module.css";

// Loading Image
import loading from "../images/loading.svg";

const Loading = () => {
    return (
        <div className={styles.loading_container}>
            <img src={loading} alt="Loading Animation" />
        </div>
    );
}

export default Loading;