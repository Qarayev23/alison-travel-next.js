import styles from "./Checkbox.module.scss";

function Checkbox({ name }) {
    return (
        <label className={styles.checkbox}>
            <span>{name}</span>
            <input type="checkbox" />
            <div className={styles.checkbox__mark}></div>
        </label>
    );
}

export default Checkbox;