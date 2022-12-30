import {useState} from "react";

import './App.css';
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [searchedStr, setSearchedStr] = useState(''); // [value, setValue func.]
    console.log({searchedStr});
    const onSearchChange = (event) => {
        const newSearchedStr = event.target.value.toLowerCase()
        setSearchedStr(newSearchedStr);
    }

    return (
        <div className="App">
            <h1 className="app-title">Cat Monster Rolodex</h1>
            <SearchBox className = "monster-search-box"
                       onSearchChangeHandler = {onSearchChange}
                       placeholder = 'Search monsters' />
            {/*<CardList monsters={filteredMonsters}/>*/}
        </div>
    );
}

export default App;