import BaseView from './baseView';

import { startGame, debugGame } from '../game/init'

class GameView extends BaseView {
    constructor(node) {
        super(node);
    }

    show() {
        super.show();
        let div = document.getElementById("site-interface");
        div.style.visibility = 'hidden';

        if(!mainConfiguration.debugMode)
            startGame(this.node);
        else
            debugGame(this.node);
    }
    hide() {
        super.hide();

        let div = document.getElementById("site-interface");
        div.style.visibility = "visible";

    }

}

export default GameView;

