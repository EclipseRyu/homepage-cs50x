document.addEventListener('DOMContentLoaded', function() {
    // A silly little gag with the search form.
    let searchForm = document.querySelector('#search-gag');
    searchForm.addEventListener('submit', function() {
        let searchGagInput = document.querySelector('#search-gag-input');
        
        document.querySelector('#search-gag-button').remove();
        searchGagInput.blur();
        searchGagInput.value = 'Nothing for you to see.';

        let touches = 0;
        const pop = new Audio('Media/minecraft-drop-sfx.mp3');
        searchForm.addEventListener('click', function() {
            touches++;
            switch (touches) {
                case 1:
                    alert('Quit touching it!');
                    searchGagInput.value = 'Yeah, stop it!';
                    searchGagInput.blur();
                    break;
                case 2:
                    alert('Really, stop touching it...');
                    searchGagInput.value = "It's getting annoying..."
                    searchGagInput.blur();
                    break;
                case 3:
                    alert('Alright, last warning!');
                    searchGagInput.value = 'One more time, I swear!-';
                    searchGagInput.blur();
                    break;
                case 4:
                    pop.play();
                    alert("ENOUGH!");
                    searchGagInput.remove();
                    break;
            }
        });
    });

    // Another little gag but with the cards
    let cards = document.querySelectorAll('.card');
    for (let card of cards){
        card.addEventListener('mouseover', function() {
            card.style.borderWidth = "8px";
            card.querySelector('.card-button').innerHTML = 'Thinking about it?';
        })
        card.addEventListener('mouseout', function() {
            card.style.borderWidth = "5px";
            card.querySelector('.card-button').innerHTML = 'Right, fuck off then.';
            setTimeout(function() {
                card.querySelector('.card-button').innerHTML = 'Read more!';
                clearTimeout();
            }, 3000);
        })
    }
});