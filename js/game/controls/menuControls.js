/**
 * Created by algys on 17.05.17.
 */

import PerformBoard from './boards/performBoard'
import WaitBoard from './boards/waitingBoardBoard'

class MenuControls{
    constructor(){
        this.perfromBoard = new PerformBoard();
        this.waitBoard = new WaitBoard();
    }

    destruct(){
        document.removeChild(this.waitBoard.board);
        document.removeChild(this.perfromBoard.board);
    }
}

export default MenuControls;
