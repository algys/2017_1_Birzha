import Tree from './tree';

class GraphTree {
    constructor(map, color) {
        this.world = map;

        this.tree = new Tree;
        this.currentVertex = null;

        this.shapes = new Map();
        this.graphLine = null;
        this.lineColor = color;
    }

    get getTree() {
        return this.tree;
    }

    get getCurrentVertex() {
        return this.currentVertex;
    }

    addNewVertexToCurrent(data) {
        this.currentVertex = this.tree.addNode(data, this.currentVertex);
        return this.currentVertex;
    }

    addNewVertexByNode(data, node) {
        return this.tree.addNode(data, node)
    }

    setCurrentVertex(current) {
        this.currentVertex = current;
        return this.currentVertex;
    }

    goFromCurrentVertex(node){
        node.nextNode.push(this.currentVertex);
        return node;
    }

    addNewLink(from, to){
        this.tree.addLink(from, to);
    }

    addNewNode(data){
        return this.tree.addNode(data, null);
    }

    removeNode(point){
        let removedTower = this.world.getTowerFromMap(point);
        this.tree.removeNode(removedTower.parentNode);
        removedTower.destruct();
    }

    removeLink(point1, point2){
        let removedTower1 = this.world.getTowerFromMap(point1);
        let removedTower2 = this.world.getTowerFromMap(point2);
        this.tree.removeLink(removedTower1.parentNode, removedTower2.parentNode);
    }

    destruct() {
        this.world.stage.removeChild(this.graphLine);
        this.graphLine.graphics.clear();
        console.log(this.shapes);
        this.shapes.forEach((value, key) => {
            key.destruct();
        });
    }

    setNode(tower) {
        let coordinatesX = tower.pointX, coordinatesY = tower.pointY;

        if(!this.shapes.has(tower)) {
            this.shapes.set(tower, 1 /* default */);
        }
        tower.setRealCoordinates(coordinatesX, coordinatesY);
        tower.draw();
    }

    showNodes() {
        let currentNode = this.tree.rootNode;
        let marker = new Set();

        this.graphLine = this.graphLine || this.world.newLine(this.lineColor);
        this.graphLine.graphics.clear();
        this.graphLine.graphics.setStrokeStyle(3).beginStroke(this.lineColor);

        this.go = (function (current, marker) {
            if(current === null){
                return;
            }
            marker.add(current);
            this.setNode(current.data);
            current.nextNode.forEach((item)=>{
                if(!marker.has(item)) {
                    this.drawWireBetweenTowers(current.data.point, item.data.point);
                    this.go(item, marker);
                } else {
                    this.drawWireBetweenTowers(current.data.point, item.data.point);
                }
            });
        });
        this.go.bind(this)(currentNode, marker);

        this.graphLine.graphics.endStroke();
    }

    drawWireBetweenTowers(to, from, anim) {
        to = this.world.area.getPixelPoint(to.x, to.y);
        from = this.world.area.getPixelPoint(from.x, from.y);
        let x = to.x, y = to.y;
        let l = Math.sqrt((x - from.x)**2 + (y - from.y)**2);

        const byLine = (lamda) => {
            return {x: (from.x + lamda * x) / (1 + lamda), y: (from.y + lamda * y) / (1 + lamda)};
        };

        let radius = conf.radiusTower + conf.betweenTowersPadding;
        let lamda = (l - radius) / radius;

        let fromPoint = byLine(1 / lamda);
        let toPoint = byLine(lamda);

        this.graphLine.graphics.moveTo(fromPoint.x, fromPoint.y);
        this.graphLine.graphics.lineTo(toPoint.x, toPoint.y);
        this.graphLine.graphics.moveTo(x, y);
    }
}

export default GraphTree;