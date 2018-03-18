import React from 'react';
import ReactDOM from 'react-dom';
import cards from "./cards.js";
require('../../dist/css/main.css');


class GameCard extends React.Component {
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
    componentWillMount() {
        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
        shuffleArray(this.state.getCards = cards.map((e,i) =>{
            return  <div onClick={e => this.handleClick(e)} key={i}>  <img className={this.state.class}  src={e.src} alt={e.name} id={e.id}/>   </div>
        }));
      }

    matched = () => {
    
        this.state.checkedCards = []; 
    }
    unmatched = () => {
     
        this.state.checkedCards = [];
    }
   
    handleClick = (e) => {
        this.setState({
            class: this.state.class == 'rotate' ? '' : 'rotate'
            
        })
       
        this.state.checkedCards.push(e.currentTarget);
        
        console.log(this.state.checkedCards);
        
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
    startClick = (e) => {
        this.setState({
         
        })
    };
    render() {
        // this.state.getCards = cards.map((e,i) =>{
        //     return  <div onClick={this.handleClick} key={i}>  <img className={this.state.class}  src={e.src} alt={e.name} id={e.id}/>   </div>
        // })

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
        <section>
            <GameCard />
        </section>
        )
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
