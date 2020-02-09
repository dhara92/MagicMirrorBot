const GameState = Object.freeze({
    WELCOME:   Symbol("welcome"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("walk"),
    FOREST: Symbol("follow"),
    CAVE: Symbol("go in"),
    PARTY: Symbol("accept"),
    COOKIES:Symbol("cookies"),
    TREE:Symbol("go in"),
    MERMAID:Symbol("talk"),
    EXPLORE:Symbol("explore"),
    MERMAID:Symbol("hi"),
    TREASURE:Symbol("open"),
    QUEEN:Symbol("accept")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOME;
    }
    
    ScaryMove(sInput)
    {
        let sReply = "Put the bold ones as replay!";
        switch(this.stateCur){
            case GameState.WELCOME:
                sReply = "Welcome to the dark world! Are you want to <strong>walk</strong> in dark forest?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("walk")){
                    sReply = "There is a dark rainy night! you are scared of someone whispering near you! are you want to use <strong>torch</strong>?";
                    this.stateCur = GameState.FOREST;
                }else{
                    sReply ="A very far away,a tiny light telling you to follow it! Are you want to <strong>follow</strong> it?";
                    this.stateCur = GameState.FOREST;
                }
                break;
            case GameState.FOREST:
                if(sInput.toLowerCase().match("follow")){
                    sReply = "The light brought you to under water cave! Are you want to <strong> go in </strong> or stand outside?"
                    this.stateCur = GameState.CAVE;
                }else if(sInput.toLowerCase().match("torch")){
                    sReply = "Don't be scared! Turn on the Light and continue to walk! ";
                    this.stateCur = GameState.CAVE;

                }
                break;
            case GameState.CAVE:
                if(sInput.toLowerCase().match("go in")){
                    sReply = "You are now walking in to cave facing lots of bat! After that queen of cave welcoming you with glass of blood in her hand! Are you want to <strong>accept</strong> the offer?";
                    this.stateCur = GameState.QUEEN;

                }else{
                    sReply = "You seems like very tired? Do you want to try red bloody <strong>cookies</strong>? ";
                    this.stateCur = GameState.COOKIES;
    
                }
                break;
            case GameState.QUEEN:
                if(sInput.toLowerCase().match("accept")){
                    sReply = "Queen gives you a key of treasure trunk.Do you want to <strong>open<strong> it?";
                    this.stateCur = GameState.TREASURE;
    
                }else{
                    sReply = "oh no!!!She is angry and she hunt you down! ";
                    this.stateCur = GameState.WELCOME;
        
                }
                break;
            case GameState.COOKIES:
                if(sInput.toLowerCase().match("cookie")){
                    sReply = "The red cookies are presented for you by evil tree near you!You Like it?";
                    this.stateCur = GameState.TREE;
        
                }else{
                    sReply = "The evil tree near you have a door in it's lower trunk! Are you want to <strong>go in</strong>?";
                    this.stateCur = GameState.TREE;
            
               }
               break;
            case GameState.TREE:
                if(sInput.toLowerCase().match("go in")){
                    sReply = "Inside of the tree there are so many sparkling eyes looking at you! Do you want to <strong>explore</strong>?";
                    this.stateCur = GameState.EXPLORE;
            
                }else{
                    sReply = "If you see around you, there is in river of green sticky water! The evil mermaid looking at you! Are you want say HI to her?  ";
                    this.stateCur = GameState.MERMAID;
                
                }
                break;
            case GameState.EXPLORE:
                if(sInput.toLowerCase().match("explore")){
                    sReply = "Ohh!! They are cute owls!! Not scary any more!";
                    this.stateCur = GameState.WELCOME;
            
                }else{
                    sReply = "You found something sharp in to your feet seems like a key of treasure trunk? do you want to <strong>open</strong> it? ";
                    this.stateCur = GameState.TREASURE;
                
                }
                break;
            case GameState.MERMAID:
                    if(sInput.toLowerCase().match("hi")){
                        sReply = "She roar in front of you and telling something by whispering in your ear!Did you <strong>accept</strong> her instruction?";
                        this.stateCur = GameState.PARTY;
                
                    }else{
                        sReply = "Bad luck! She disappeared! do you want to <strong>go in</strong> to the cave? ";
                        this.stateCur = GameState.CAVE;
                    
                    }
                    break;
                 case GameState.TREASURE:
                    if(sInput.toLowerCase().match("open")){
                        sReply = "Congratulations! You found magic mirror!By the Magic Mirror's reflection, the darkness of the forest is gone for forever.do you <strong>accept</strong> this gift?";
                        this.stateCur = GameState.PARTY;
                    
                    }else{
                        sReply = "Bad luck! She disappeared! do you want to <strong>go in</strong> to the cave? ";
                        this.stateCur = GameState.CAVE;
                        
                    }
                    break;
                case GameState.PARTY:
                    if(sInput.toLowerCase().match("accept")){
                        sReply = "Surprise!!!That's a party time! You are such a brave person!";
                        this.stateCur = GameState.WELCOME;
                    }else{
                        sReply = "The adventure is not complete! Are you want to find magic mirror? ";
                        this.stateCur = GameState.FLAT;
                    }
                    break;    
            
        }
        return([sReply]);
    }
}