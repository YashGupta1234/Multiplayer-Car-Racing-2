class Game{
    constructor(){
    }
    getState(){
        var gameStateref = database.ref("GameState");
        gameStateref.on("value", function(data){
            GameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            GameState: state
        })
    }
    async start(){
        if(GameState === 0){
            player = new Player();
            var playercountref = await database.ref("PlayerCount").once("value");
            if(playercountref.exists()){
                PlayerCount = playercountref.val();
                player.getcount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(35);
        text("Let's Start", 120,100);
        Player.getplayerinfo();
        if(allplayers !== undefined){
            var displayposition = 130;
            for(var plr in allplayers){
                if(plr === "Player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                displayposition += 20;
                textSize(20);
                text(allplayers[plr].name + ":" + allplayers[plr].distance, 120, displayposition);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.updatename();
        }
    }
}
