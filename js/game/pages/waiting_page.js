/**
 * Created by algys on 17.05.17.
 */

import MenuControls from '../controls/menuControls'

class MenuPage extends BasePage {
    constructor(world, goto) {
        super(world);
    }

    startPage(){
        this.controls = new MenuControls();
    }

    stopPage(){
        this.controls.destruct();
    }
}