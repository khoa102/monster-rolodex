import {Component} from "react";
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchedStr: '',
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                this.setState({monsters: users});
            });
    }

    onSearchChange = (event) => {
        const searchedStr = event.target.value.toLowerCase()
        this.setState({searchedStr});
    }

    render() {
        console.log("render");
        const filteredMonsters = this.state.monsters.filter(monster => {
            return monster.name.toLowerCase().includes(this.state.searchedStr);
        })

        return (
            <div className="App">
                <h1 className="app-title">Cat Monster Rolodex</h1>
                <SearchBox className = "monster-search-box"
                           onSearchChangeHandler = {this.onSearchChange}
                           placeholder = 'Search monsters' />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
