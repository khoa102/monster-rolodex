import {useEffect, useState} from "react";

import './App.css';
import SearchBox from "./components/search-box-functional/search-box-functional.component";
import CardList from "./components/card-list-functional/card-list-functional.component";

const App = () => {
    const [searchedStr, setSearchedStr] = useState(''); // [value, setValue func.]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    console.log("rendered");
    const onSearchChange = (event) => {
        const newSearchedStr = event.target.value.toLowerCase()
        setSearchedStr(newSearchedStr);
    };

    useEffect(() => {
        console.log("Effect fire");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setMonsters(users));
    }, [])

    useEffect(() => {
        console.log("Effect filtered fire");
        const newFilteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchedStr);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchedStr])


    return (
        <div className="App">
            <h1 className="app-title">Cat Monster Rolodex</h1>
            <SearchBox className = "monster-search-box"
                       onSearchChangeHandler = {onSearchChange}
                       placeholder = 'Search monsters' />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;