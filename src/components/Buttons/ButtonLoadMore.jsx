import PropTypes from "prop-types";
import styles from "./ButtonLoadMore.module.scss"
export const ButtonLoadMore =({text, onClickFn})=> {

    return (
        <button type="button" className={styles.btn} onClick={onClickFn}>{text}</button>
    )

}

ButtonLoadMore.propTypes ={
    text: PropTypes.string.isRequired,
    onClickFn: PropTypes.func.isRequired
}