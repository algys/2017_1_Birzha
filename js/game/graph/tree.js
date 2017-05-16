/* Cyclic graph */

class Tree {
    constructor() {
        this.rootNode = null;
    }

    addNode(data, parent){
        let newNode = new NodeImpl(data);
        if(!this.rootNode){
            this.rootNode = newNode;
        }
        if(parent)
            this.addLink(newNode, parent);
        return newNode;
    }

    addLink(to, from){
        to.nextNode.push(from);
        from.nextNode.push(to);
    }

    get root(){
        return this.rootNode;
    }
}

function NodeImpl(data) {
    this.nextNode = [];
    this.data = data;
}

NodeImpl.prototype.addNode = function (node) {
    this.nextNode.push(node);
    return this.nextNode;
};

export default Tree;
