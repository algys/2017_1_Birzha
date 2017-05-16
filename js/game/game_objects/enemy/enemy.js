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

        let newNode = this.enemyGraph.addNewNode(tower);
        tower.parentNode = newNode;

        return tower;
    }

    addNewTower(newNodeInfo) {
        let point = {
            x : newNodeInfo.x,
            y : newNodeInfo.y
        };
        let unitsCount = newNodeInfo.value;
        debugger;
        if(this.world.getTowerFromMap(point)){
            let to = this.world.getTowerFromMap(point);
            to.destruct();
        }

        let tower = this.generateEnemyTower(point, unitsCount);

        this.world.addTowerToMap(point, tower);
        this.drawObject();
    }

    setPerforming(flag) {
        this.enemyGraph.shapes.forEach((val, item)=>{
            item.setPerforming(flag);
        });
    }

    createLink(from, to){
        this.enemyGraph.addNewLink(from.parentNode, to.parentNode);
        this.drawObject();
    }
}

export default Enemy;