/**
 * Created by algys on 18.04.17.
 */

class MenuBoard{
    constructor(){
        this.menuBoard = document.createElement("div");
        this.menuBoard.className = "MenuBoard";
        this.menuBoard.id = "board";

        this.buttonHome = document.createElement("div");
        this.buttonHome.id = "home";
        this.buttonHome.className = "fa fa-times fa-3x";

        this.menuBoard.appendChild(this.buttonHome);
        document.body.appendChild(this.menuBoard);

        this.scores = new Map();
    }

    addExitListener(callback){
        if(!this.exitListener)
            this.buttonHome.addEventListener("click",(event)=>{
                callback();
            });
        this.exitListener = callback;
    }

    destruct(){
        document.body.removeChild(this.menuBoard);
    }
}

export default MenuBoard;
/**
 * Created by algys on 18.04.17.
 */

