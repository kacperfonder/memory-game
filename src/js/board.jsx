
  cardCheck = () => {
        if()
        
        matched =() => {
            checkedCards[0].classList.add("match");
            checkedCards[1].classList.add("match");
            checkedCards[0].classList.remove("show", "open");
            checkedCards[1].classList.remove("show", "open");
            checkedCards = [];
        }
    }
    toggle = () => { if (this.state.display === 'none') {
          this.setState({ display: 'block' })
       
          setTimeout(() =>
            this.setState({ opacity: 1 }), 10 // something very short
          )
        }
        if (this.state.display === 'none') {
          this.setState({ opacity: 0 })
          setTimeout(() =>
            this.setState({ display: 'block' }), 300 // same as transition time
          )
        }
      }
    


      render() {
        return (
          <div>
            <button onClick={this.toggle}>toggle</button>        
            <div 
              style={{ 
                transition: 'opacity 0.3s ease',
                opacity: this.state.opacity,
                display: this.state.display
              }} 
            />
          </div>







    function cardOpen() {
        checkedCards.push(e.currentTarget);
        var len = checkedCards.length;
        if(len === 2){
            moveCounter();
            if(checkedCards[0].firstElementChild.alt === checkedCards[1].firstElementChild.alt){
                    console.log("shieet");
                matched();
            } else {
                unmatched();
            }
        }
    };


    var Comp = React.createClass({
        getInitialState: function(){
        return {hide: false};
      },
      toggle: function(){
        this.setState({hide: !this.state.hide});
      },
      render: function() {
        return <div>
                <button onClick={this.toggle}>toggle</button>    
            <div className={'hide-' + this.state.hide}>Hi there</div>
        </div>;
      }
    });

    ReactDOM.render(
      <Comp />,
      document.getElementById('container')
    );
CSS

    .hide-true  {
      display: none;
    }



        if (!this.state.checkedCards || (this.state.checkedCard !== e.currentTarget.alt)) {
            this.state.checkedCard.push(e.currentTarget);
        }
        // console.log(e.currentTarget.firstElementChild.alt);
        console.log(this.state.checkedCards);
        this.state.checkedCards.push(e.currentTarget);

        if(this.state.checkedCards.length == 2) {
            this.state.checkedCards = []

        }
    } 

    this.shuffle(buttons);

    shuffle(a) {
        for (let i = a.length; i; i--) {
           let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
       }
    }


    unmatched(){
        openedCards[0].classList.add("unmatched");
        openedCards[1].classList.add("unmatched");
        disable();
        setTimeout(function(){
            openedCards[0].classList.remove("show", "open", "unmatched");
            openedCards[1].classList.remove("show", "open", "unmatched");
            enable();
            openedCards = [];
        },1100);
    }