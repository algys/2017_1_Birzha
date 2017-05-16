import GameObject from '../game_object';
import GraphTree from '../../graph/graph_tree';

import Tower from '../models/tower';

/*
example info: {"nickname":"Nick2696","id":5784,"units":0,"beginX":50,"beginY":95,"readyForGameStart":true}
 */

class Enemy extends GameObject {
    constructor(connection, world, info) {
        super(world, info.id, info.nickname);

        let point = {x: info.beginX, y: info.beginY};

        this.connection = connection;

        this.enemyGraph = new GraphTree(world);

        let tower = this.generateEnemyTower(point, info.units);

        this.currentNode = this.enemyGraph.addNewVertexToCurrent(tower);
        this.world.addTowerToMap(point, tower);

        this.drawObject();
    }

    drawObject() {
        this.enemyGraph.showNodes();
        this.world.update();
    }

    animation(dx, dy) {}

    generateEnemyTower(point, units) {
        let tower = new Tower(this.world, point.x, point.y, towerType.ENEMY,
            units);

        tower.client_id = this.pid;
        tower.draw();
        return tower;
    }

    /* code for algys */
    /**
     * this function for add town - (for newNodes)
     */
    addOwnTower(newNode) {
        let point = {
            x : newNode.x,
            y : newNode.y
        };
        let unitsCount = newNode.value;

        let toTower = this.world.arrayMap[point.x][point.y];
        let tower = null;

        if(!toTower)
            tower = this.generateEnemyTower(point, unitsCount);
        else {
            toTower.refreshTower(towerType.ENEMY, unitsCount,
                null /* parent */, this.pid); // TODO check parentNode
            tower = toTower;
        }

        this.world.addTowerToMap(point, tower);
        this.drawObject();
    }

    /* example: {"xfrom":3,"yfrom":1,"xto":5,"yto":2,"unitsCount":50,"parentUnitsCount":0} */
    createNewEnemyVertex(info) {
        let pointFrom = { x: info["xfrom"], y: info["yfrom"] };
        let pointTo = { x: info["xto"], y: info["yto"] };
        let genUnits = info["unitsCount"];

        let lastNode = this.currentNode;

        let fromTower = this.world.arrayMap[pointFrom.x][pointFrom.y];
        let toTower = this.world.arrayMap[pointTo.x][pointTo.y];
        let tower = null;

        if(!toTower)
            tower = this.generateEnemyTower(pointTo, genUnits);
        else {
            toTower.refreshTower(towerType.ENEMY, genUnits,
                null /* parent */, this.pid); // TODO check parentNode
            tower = toTower;
        }

        this.enemyGraph.setCurrentVertex(fromTower);
        this.currentNode = this.enemyGraph.addNewVertexToCurrent(tower);
        this.world.addTowerToMap(pointTo, this.currentNode);

        if(tower.parentNode)
            tower.parentNode = this.currentNode; // TODO add node in constructor

        lastNode.data.units = info["parentUnitsCount"];

        this.drawObject();
    }

    setPerforming(flag) {
        this.enemyGraph.shapes.forEach((val, item)=>{
            item.setPerforming(flag);
        });
    }

    createLink(from, to){
        debugger;
        from.parentNode().nextNode.push(to.parentNode);
        this.drawObject();
    }
}

export default Enemy;