import "./search-box-functional.style.css"

const SearchBox = ({className, placeholder, onSearchChangeHandler}) => {
    console.log("search-box rendered");
    return (
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onSearchChangeHandler}
        />
    )
}

export default SearchBox;