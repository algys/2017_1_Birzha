
class NotifyBoard {
    constructor() {
        this.notifyBoard = document.createElement("div");
        this.notifyBoard.className = "CyclicNotifyBoard";
        this.notifyBoard.id = "cyclic-notify";

        document.body.appendChild(this.notifyBoard);
        this.notifyArray = [];

        this.hide();
        this.isPush = false;
    }

    pushNotify(push) {
        if (this.isPush) {
            this.notifyArray.push(push);
            return;
        }

        let text = push["text"];
        let header = "";
        if ("header" in push)
            header = push["header"];

        /* show */
        this.notifyBoard.style.display = "block";
        this.notifyBoard.textContent = header + text;

        this.isPush = true;
        setTimeout(() => { this.hide(); }, mainConfiguration.pushNotifyDelay);
    }

    hide() {
        this.notifyBoard.style.display = "none";

        if (this.notifyArray.length > 0) {
            setTimeout(() => {
                this.isPush = false;
                let newPush = this.notifyArray.pop();
                this.pushNotify(newPush);
            }, mainConfiguration.pushNotifyDelta);
        } else {
            this.isPush = false;
        }
    }
}

export default NotifyBoard;