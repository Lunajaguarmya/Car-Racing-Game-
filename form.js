class Form {
    constructor(){

    }
    
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput ("Name");
        var button = createButton('PLay');

        input.position(130,160);
        botton.position(250,200);

        button.mousePressed(function(){
            inputhide();
            botton.hide();

            var name = input.value();

            playerCount+=1
            player.update(name)
            player.updadteCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("Are you Ready?" + name)
            greeting.position(130,160)
        });
    }
}