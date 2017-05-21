import BasePage from './base_page';

class MenuPage extends BasePage {
    constructor(world, connection) {
        super(world);

        this.children = [];

        this.buttonMenu = null;
        this.listenerId = null;
        this.connection = connection;
    }

    startPage(resource) {
        let cellCenter = this.world.area.getExactPosition(this.world.area.fullSize.x/2, this.world.area.fullSize.y/2);
        let cenX = cellCenter.x, cenY = cellCenter.y;
        this.world.setOffsetForCenter(cenX, cenY);
        scrollTo(0,0);
        document.body.style.overflow = "hidden";

        this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
        this.buttonMenu.x = cenX;
        this.buttonMenu.y = cenY;
        this.buttonMenu.regX = this.buttonMenu.image.width / 2;
        this.buttonMenu.regY = this.buttonMenu.image.height / 2;

        this.world.update();
        this.world.area.update();

        this.buttonAnimate = function(event){
            this.buttonMenu.rotation += 2;
            this.world.update();
        };

        this.listenerId = this.connection.addEventListen(DATATYPE_ROOMINFO, (json)=>{
            if(json["status"] === STATUS_PLAYING){
                this.stopPage();
            }
        });

        const onClickRun = (event) => {
            this.connection.send(ACTION_GIVE_ME_ROOM);
        };

        this.buttonMenu.on('click', onClickRun.bind(this));
    }

    stopPage() {
        this.world.map.removeChild(this.buttonMenu);
        this.world.update();
        this.connection.deleteListenIndex(DATATYPE_ROOMINFO, this.listenerId);
        this.listenerId = null;
    }

    setEnableRotation(flag) {
        if(flag && !createjs.Ticker.hasEventListener("tick")) {
            createjs.Ticker.addEventListener("tick", this.buttonAnimate.bind(this));
            createjs.Ticker.setInterval(10);
            createjs.Ticker.setFPS(60);
        } else {
            createjs.Ticker.removeAllEventListeners();
            createjs.Ticker.paused = true;
        }
        this.world.update();
    }
}

export default MenuPage;