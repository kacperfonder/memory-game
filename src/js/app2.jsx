import React from 'react';
import ReactDOM from 'react-dom';
import cards from "./cards.js";
require('../../dist/css/main.css');


class GameBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getCards: [],
            checkedCards:[],
            cardOneFlipped: false,
            cardTwoFlipped: false,
            movesDone: 0,
            class: ""      
        }
    }
    render() {
     
        return (
            <section>
                <button onClick={this.startClick}>Start button</button>
                <div className='board'> 
                    {this.state.getCards}
                </div>
            </section>
        );
    }
}
// .sort(() => 0.5 - Math.random())
class App extends React.Component {
    render(){
        return (
        <div>
            <GameBoard 
            // cards={cards}
            />
        </div>
        )
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
