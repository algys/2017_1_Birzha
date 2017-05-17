/**
 * Created by algys on 17.05.17.
 */

class WaitingBoard{
    constructor(){
        this.board = document.createElement("div");
        this.board.className = "WaitBoard";

        this.board.textContent = "Waiting for players...";

        document.body.appendChild(this.board);
    }
}

export default WaitingBoard;