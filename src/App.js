import {Component} from "react";
import './App.css';

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
                this.setState({monsters: users}, () => console.log(this.state));
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
                <input
                    className="search-box"
                    type='search'
                    placeholder='Search monsters'
                    onChange={this.onSearchChange}
                />
                {
                    filteredMonsters.map((monster) => {
                        return <div key={monster.id}><h1>{monster.name}</h1></div>;
                    })
                }
            </div>
        );
    }
}

export default App;
