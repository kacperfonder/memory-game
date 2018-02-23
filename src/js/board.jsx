
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