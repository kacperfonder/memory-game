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
            display: 'none',
           
        }
    }
    matched = () => {
    
        this.state.checkedCards = [];
        
    }
    unmatched = () => {
        this.setState({
            
        })
        this.state.checkedCards = [];

    }

    handleClick = (e) => {
 
        this.state.checkedCards.push(e.currentTarget);
        console.log("click");
        console.log(this.state.checkedCards);
        if (e.currentTarget === 'none') {
            this.setState({ display: 'block' })
        }
        if(this.state.checkedCards.length == 2){  
            
            if( this.state.checkedCards[0].firstElementChild.alt === this.state.checkedCards[1].firstElementChild.alt){
                console.log("takie same");
              
                this.matched();

            } else {
                console.log("rozne madafucka");

                this.unmatched();
               
            }
        }
    };
  
    render() {
      
    this.state.getCards = cards.map((e,i) =>{
        return  <div onClick={this.handleClick} key={i}>  <img  src={e.src} alt={e.name} id={e.id}/>   </div>
    })

    function shuffle (array) {
        let m = array.length, t, i;
        while (m) {
    
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

        return (
            <section className='board'> 
               {shuffle(this.state.getCards)}

            </section>
        );
    }
}

class App extends React.Component {
    render(){
        return (
        <div>
            <GameBoard cards={cards}/>
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
