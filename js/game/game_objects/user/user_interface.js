const STATE_BEGIN = 0,
      STATE_FLY = 1,
      STATE_CHOOSE_NODE = 2,
      STATE_DO_STEP = 3,
      STATE_CHECK_STEP = 4,
      STATE_CHOOSE_UNITS = 5;

class UserInterface {
    constructor(world, packCallback, startPos) {
        this.world = world; // get area
        document.addEventListener("mousemove", this.eventManager.bind(this));
        document.addEventListener("mouseup", this.eventManager.bind(this));
        document.addEventListener("mousedown", this.eventManager.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.world.canvas.addEventListener("click", this.eventManager.bind(this));

        this.packCallback = packCallback;
        this.startPos = startPos;

        this.world.update();
        this.world.area.world.stage.update();

        this.last_mv = {x: 0, y: 0};

        this.pointerLockStatus = false;
        document.addEventListener("pointerlockchange", ()=>{
            this.pointerLockStatus = !this.pointerLockStatus;
        }, false);

        this.currentPos = this.startPos;

        this.makeState(STATE_BEGIN, null);
    }

    makeState(typeState, data) {
        this.currentMode = {
            typeState: typeState,
            data: data
        };
    }

    eventMove(event) {
        let pxPoint = this.world.area.getPixelPoint(this.currentPos.x, this.currentPos.y);
        this.last_mv = this.last_mv || {x: 0, y: 0};

        let mv = {
            x: this.last_mv.x - event.movementX ,
            y: this.last_mv.y - event.movementY
        };
        if(pxPoint.x - mv.x < 0 || pxPoint.x - mv.x > this.world.area.fullSize.x-1)
            return;
        if(pxPoint.y - mv.y < 0 || pxPoint.y - mv.y > this.world.area.fullSize.y-1)
            return;

        let cellPos = this.world.area.getCellPosition(pxPoint.x - mv.x, pxPoint.y - mv.y);

        this.probablyCircle.x = pxPoint.x - mv.x;
        this.probablyCircle.y = pxPoint.y - mv.y;

        this.probablyLine.graphics.clear();
        if(this.currentMode.typeState === STATE_DO_STEP) {
            if(fullLength < Math.abs(mv.x) || (fullLength < Math.abs(mv.y))) {
        if(this.currentMode === 'moving') {
            if(!this.checkToMove(cellPos)) {
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
            } else
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);

            this.probablyLine.graphics.setStrokeStyle(1).beginStroke(this.color);
            this.probablyLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            this.probablyLine.graphics.lineTo(this.probablyCircle.x, this.probablyCircle.y);
            this.probablyLine.graphics.endStroke();
        } else if(this.currentMode === STATE_CHOOSE_NODE) {
            if(this.world.arrayMap[cellPos.x][cellPos.y]) {
                if (this.world.arrayMap[cellPos.x][cellPos.y].client_id !== this.packCallback['getClientId']()) {
                    this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
                }
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 0);
            } else
                this.world.area.markCurrentCell(cellPos.x, cellPos.y, 1);
        }
        this.last_mv.x = mv.x;
        this.last_mv.y = mv.y;

        this.world.setOffsetForCenter(this.probablyCircle.x, this.probablyCircle.y);
        this.world.update(); // TODO tick
    }

    checkCellForVertex() {
        let fullLength = conf.rectSize * 2 + conf.borderSize * 6;
        if (fullLength < Math.abs(this.last_mv.x) || (fullLength < Math.abs(this.last_mv.y))) {
            this.makeState(STATE_DO_STEP);
            return false;
        }

        return true;
    }

    putNewVertex(newPoint, units) {
        console.log("choose units: " + units);

        let pxPoint = this.world.area.getPixelPoint(this.currentPos.x, this.currentPos.y);
        let newX = newPoint.x, newY = newPoint.y;
        let newPos = this.world.area.getCellPosition(newX, newY);
        if(!this.checkToMove(newPos)) {
            return;
        }

        if(this.currentPos.x === newPos.x && this.currentPos.y === newPos.y){
            return;
        }

        this.packCallback["addTower"](newPos);
        this.world.area.markSelectedCell(newPos.x, newPos.y, true);

        this.world.update();

        this.last_mv.x = 0;
        this.last_mv.y = 0;
        this.currentPos = newPos;
    }

    chooseNewVertex() {
        let newX = this.probablyCircle.x, newY = this.probablyCircle.y;
        let newPos = this.world.area.getCellPosition(newX, newY);
        if(this.world.arrayMap[newPos.x][newPos.y]) {
            if (this.world.arrayMap[newPos.x][newPos.y].client_id !== this.packCallback['getClientId']()) {
                return;
            }
        } else
            return;
        this.currentPos = newPos;
        this.probablyCircle.x = newX;
        this.probablyCircle.y = newY;
        this.packCallback['setCurrentNode'](newPos);

        this.world.area.markSelectedCell(newPos.x, newPos.y, true);

        this.world.update();

        this.last_mv.x = 0;
        this.last_mv.y = 0;
    }

    eventManager(event){
        if(event.type === 'click' && event.which === 1 && this.pointerLockStatus === false){
            this.makeState(STATE_CHOOSE_NODE, null);
            this.world.canvas.requestPointerLock();
            return;
        }

        if(event.type === 'click' &&
            event.which === 1 &&
            this.packCallback["getPerforming"]()) {

            if (this.currentMode.typeState === STATE_CHOOSE_NODE) {
                this.makeState(STATE_DO_STEP, null);
                this.chooseNewVertex(event);
                return;
            }

            // if (this.currentMode.typeState === STATE_DO_STEP) {
            //     this.makeState(STATE_CHECK_STEP, null);
            //     this.putNewVertex(event);
            //     return;
            // }
        }

        if (event.type === 'click' && event.which === 3 && this.currentMode.typeState === STATE_DO_STEP) {
            this.makeState(STATE_CHOOSE_NODE, null);
            this.probablyLine.graphics.clear();
        }

        if(this.pointerLockStatus)
            if(event.type === 'mousemove') {
                this.eventMove(event); // PASS STATE_CHOOSE_NODE AND STATE_DO_STEP, STATE_CHOOSE_UNITS

                if(this.currentMode.typeState === STATE_CHOOSE_UNITS) {
                    console.log("!!");
                }
            } else if(event.type === 'mousedown' && this.currentMode.typeState === STATE_DO_STEP) {
                if(!this.checkCellForVertex())
                    return;

                let newX = this.probablyCircle.x, newY = this.probablyCircle.y;
                let newPos = this.world.area.getCellPosition(newX, newY);

                this.world.area.markSelectedCell(newPos.x, newPos.y);

                this.makeState(STATE_CHOOSE_UNITS, {
                    position: { x: newX, y: newY },
                    mv: { x: this.last_mv.x, y: this.last_mv.y }
                });
            } else if(event.type === 'mouseup' && this.currentMode.typeState === STATE_CHOOSE_UNITS) {
                this.putNewVertex(this.currentMode.data.position,
                    this.last_mv.y - this.currentMode.data.mv.y + 50);

                this.makeState(STATE_DO_STEP, null);
                // TODO draw scroll
            }
    }

    closeManager(event) {
        if(this.currentMode == 'chooseunits') {
            console.log("up");
        }
    }
}

export default UserInterface;