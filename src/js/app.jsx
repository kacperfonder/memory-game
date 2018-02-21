import React from 'react';
import ReactDOM from 'react-dom';
import cards from "./cards.js";
require('../../dist/css/main.css');

class Cards extends React.Component {
    
    render() {

        let getCards = cards.map((e,i) =>{
        return <div key={i}><img src={e.src}alt={e.name}/></div>
        })
        console.log(getCards);
        

        return (
            <section className='board'>
              {getCards}
            
            
              
            </section>
        );
    }
}

class App extends React.Component {

    render(){
        return (
        <div>
            <Cards cards={cards} />
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
