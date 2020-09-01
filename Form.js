class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Start");
        this.greeting = createElement("h3");
    }
    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(130,0);        
        this.input.style("color", "red")
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount ++;
            player.index = PlayerCount;
            player.updatename();
            player.updatecount(PlayerCount)
                this.greeting.html("Welcome"+ " " + player.name);
                this.greeting.position(130,160);
            })
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}