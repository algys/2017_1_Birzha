vectors = [
    {x: 1, y: 0},
    {x: -1, y: 0},
    {x: 0, y: 1},
    {x: 0, y: -1}
];

class UserValidator {
    constructor(map) {
        this.map = map;
    }

    getPair(point, vector) {
        return [
            this.map[point.x + vector.x][point.y + vector.y],
            this.map[point.x + vector.x * 2][point.y + vector.y * 2]
        ];
    }

    checkGraph(point, vector) {
        return this.map[point.x + vector.x][point.y + vector.y] == null;
    }

    breakGraph(point) {
        // TODO !
    }
}

export default UserValidator;