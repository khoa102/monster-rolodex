import {Component} from "react";
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: []
        };
        this._monsters = []
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                this._monsters = users;
                this.setState({monsters: this._monsters}, () => console.log(this.state));
            });
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                <input
                    className="search-box"
                    type='search'
                    placeholder='Search monsters'
                    onChange={(event) => {
                        const searchedStr = event.target.value.toLowerCase();
                        const filteredMonsters = this._monsters.filter(monster => {
                            return monster.name.toLowerCase().includes(searchedStr);
                        })

                        this.setState(() => {
                            return {monsters: filteredMonsters};
                        })
                    }
                }/>
                {
                    this.state.monsters.map((monster) => {
                        return <div key={monster.id}><h1>{monster.name}</h1></div>;
                    })
                }
            </div>
        );
    }
}

export default App;
