import React from 'react';
import ReactDOM from 'react-dom';
import image from "./image.js";
require('../../dist/css/main.css');


class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boardCards: [],
            selectedCards:[],
            correctCards:[],
            class: ""      
        }
    }
    matched = () => {
    
        this.state.selectedCards = []; 
    }
    unmatched = () => {
     
        this.state.selectedCards = [];
    }
    handleClick = (cardClick) => {

        this.state.selectedCards.push(cardClick.currentTarget);

        if(this.state.selectedCards.length == 2){  
            
            if( this.state.selectedCards[0].firstElementChild.alt === this.state.selectedCards[1].firstElementChild.alt){
                console.log("takie same");
                this.matched();

            } else {
                console.log("rozne madafucka");
                this.unmatched();
            }
        }
    }   
  
    shuffleClick = (e) => {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
            console.log(shuffleArray);
        }
        shuffleArray(this.state.boardCards)
    };
   
    
    
render() {
    this.state.boardCards = image.map((e,i) =>{
        return  <div onClick={this.handleClick} key={i}>  <img className={this.state.class}  src={e.src} alt={e.name} id={e.id}/>   </div>
    })
    return (
       
        <div>
            <h1>Memory Game</h1>
            <button onClick={this.shuffleClick} >Reset game</button>
            <div className="board">
            shuffleArray(this.state.boardCards)
                {this.state.boardCards}
            </div>
        </div>
    );
    
    }
}


class App extends React.Component {
    render(){
        return (
        <div>
            <Game/>
        </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
})