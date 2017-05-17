/**
 * Created by algys on 17.05.17.
 */

class PerformBoard{
    constructor(){
        this.board = document.createElement("div");
        this.board.className = "PerformBoard";
        this.board.id = "board";

        this.title = document.createElement("div");
        this.title.id = "title";
        this.title.textContent = "Players";
        this.roomStatus = document.createElement("div");
        this.roomStatus.id = "roomStatus";
        this.roomStatus.textContent = "Wait for one more ...";

        this.board.appendChild(this.title);
        this.board.appendChild(this.roomStatus);
        document.body.appendChild(this.board);

        [2, 3, 4, 5].forEach((roomCount) => {
            let tempDiv = document.createElement("div");
            tempDiv.className = "room-" + (roomCount);
            tempDiv.innerHTML = "data " + roomCount;

            this.board.appendChild(tempDiv);
        });
    }

    /**
     * {2: 2, 3: 1, 4: 0}
     */
    update(status) {

    }
}

export default PerformBoard;
