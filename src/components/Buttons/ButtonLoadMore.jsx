import PropTypes from "prop-types";

export const ButtonLoadMore =({text, onClickFn})=> {

    return (
        <button type="button" className="btn-load-more" onClick={onClickFn}>{text}</button>
    )

}

ButtonLoadMore.propTypes ={
    text: PropTypes.string.isRequired,
    onClickFn: PropTypes.func.isRequired
}