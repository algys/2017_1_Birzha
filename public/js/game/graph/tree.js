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

    removeLink(node1, node2){
        node1.nextNode = node1.nextNode.filter((item)=>{
            return (item.data.pointX !== node2.data.pointX ||
                    item.data.pointY !== node2.data.pointY)
        });
        node2.nextNode = node2.nextNode.filter((item)=>{
            return (item.data.pointX !== node1.data.pointX ||
            item.data.pointY !== node1.data.pointY)
        });
    }

    removeNode(removedNode){
        removedNode.nextNode.forEach((adjNode,i)=>{
           removedNode.nextNode[i].nextNode = adjNode.nextNode.filter((item)=>{
              return (item.data.pointX !== removedNode.data.pointX ||
                        item.data.pointY !== removedNode.data.pointY)
           });
        });
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
