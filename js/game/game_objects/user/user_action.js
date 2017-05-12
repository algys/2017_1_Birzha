class UserAction {
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param world
     * @param from
     * @param to
     * @param unitCounts ~ int
     */
    createTown(from, to, unitCounts) {
        if(!this.connection)
            return;

        this.connection.send(GAME_UPDATE_MY_MOVE, {
            move: {
                xfrom: from.x,
                yfrom: from.y,
                xto: to.x,
                yto: to.y,
                unitsCount: unitCounts
            }
        });
    }

    setStop(world) {

    }
}

export default UserAction;