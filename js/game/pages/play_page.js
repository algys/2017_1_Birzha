'use strict';

import User from '../game_objects/user/user';
import Tower from '../game_objects/models/tower';

import Controls from '../controls/gameControls';

import BasePage from './base_page';
import Enemy from '../game_objects/enemy/enemy';

class PlayPage extends BasePage {
    constructor(world, connection) {
        super(world);

        this.enemiesData = [];
        this.enemiesObject = {};

        this.user = null;

        this.connection = connection;

        this.nowPerforming = null;
    }

    splitUsers(array, meId) {
        let me = null;
        for(let user in array) {
            array[user].color = window.userColors[(user % 4)];
            if(array[user].id === meId) {
                me = array[user];
            } else {
                this.enemiesData.push(array[user]);
            }
        }
        return me;
    }

    startPage(room) {
        let perfomingPlayer = room.pid;

        let meData = this.splitUsers(room.players, room.meId);
        this.user = new User(this.connection, this.world, meData);

        if(perfomingPlayer === room.meId) {
            this.nowPerforming = this.user;
            this.user.setPerforming(true);
        }

        for(let index in this.enemiesData) {
            let enemyData = this.enemiesData[index];
            this.enemiesObject[enemyData.id] = new Enemy(this.connection, this.world, enemyData);
            if(enemyData.id === perfomingPlayer) {
                this.nowPerforming = this.enemiesObject[enemyData.id];
                this.enemiesObject[enemyData.id].setPerforming(true);
            }
        }

        this.connection.addEventListen(DATATYPE_NEWBONUS, (json) => {
            let bonuses = json["bonuses"];
            bonuses.forEach((item) => {
                let x = item.x;
                let y = item.y;
                let value = item.value;

                let bonus = new Tower(this.world, x, y, towerType.BONUS, value, null);
                this.world.addTowerToMap({x: x, y: y}, bonus);
                bonus.draw();
            });
        });

        let controls = new Controls();
        let lastScores = null;

        /* code for algys */
        this.connection.addEventListen(DATATYPE_PLAYERMOVE, (json) => {
            let nextpid = json["nextpid"];
            let pid = json["pid"];
            let result = json["result"];

            this.nowPerforming.setPerforming(false);
            if (nextpid === this.user.pid)
                this.nowPerforming = this.user;
            else
                this.nowPerforming = this.enemiesObject[nextpid];

            console.log("Draw !");

            let valueUpdates = json["valueUpdate"];
            let newNodes = json["newNodes"];
            let newLinks = json["newLinks"];
            let removedNodes = json["removedNodes"];
            let scores = json["scores"];

         //   debugger;

            if (removedNodes) {
                removedNodes.forEach((removedNode) => {
                    let pid = this.world.getTowerFromMap(removedNode).client_id;
                    if (pid === this.user.pid)
                        this.user.removeNode(removedNode);
                    else
                        this.enemiesObject[pid].removeNode(removedNode);
                });
            }

            if (newNodes) {
                newNodes.forEach((newNode) => {
                    let pid = newNode["pid"];
                    if (pid !== this.user.pid) {
                        this.enemiesObject[pid].addNewTower(newNode);
                    }
                });
            }

            if (valueUpdates) {
                valueUpdates.forEach((update) => {
                    let point = {
                        x: update["x"],
                        y: update["y"]
                    };
                    let newUnits = update["value"];
                    let tower = this.world.getTowerFromMap(point);
                    let pid = tower.client_id;
                    if(pid !== this.user.pid)
                        this.world.getTowerFromMap(point).changeUnits(newUnits);
                });
            }

            if (newLinks) {
                newLinks.forEach((newLink) => {
                    let from = newLink["l"];
                    let to = newLink["r"];
                    let fromTower = this.world.getTowerFromMap(from);
                    let toTower = this.world.getTowerFromMap(to);
                    let pid = fromTower.client_id;
                    if (pid !== this.user.pid)
                        this.enemiesObject[pid].createLink(fromTower, toTower);
                });
            }

            if(result === "ACCEPT_WIN" || result === "ACCEPT_LOSE")
                this.user.acceptMove(json);

            if(scores) {
                if(JSON.stringify(lastScores) !== JSON.stringify(scores)) {
                    controls.scoreBoard.clear();
                    scores.forEach((score) => {
                        let nickname;
                        if (score.pid === this.user.pid)
                            nickname = this.user.nickName;
                        else
                            nickname = this.enemiesObject[score.pid].nickName;
                        controls.scoreBoard.addPlayerToScoreBoard(nickname, score.score);
                    });
                }
            }

            this.nowPerforming.setPerforming(true);
            this.world.update();
        });

        this.connection.addEventListen(DATATYPE_ROOM_DESTRUCT, (json) => {
            alert("Room is destructed !");
            this.stopPage();
        });

        /* was kicked */
        this.connection.addEventListen(DATATYPE_ERROR, (json) => {
            alert("You was kicked!");
            this.stopPage();
        });

        /* event status server and pid*/
        this.connection.addEventListen(DATATYPE_ROOMINFO, (json) => {
            let status = json["status"];
            this.world.area.setSize(json["fieldHeight"],json["fieldWidth"]);
            if (status === STATUS_PLAYING && "pid" in json) {
                let pid = json["pid"];

                if (pid === this.user.pid) {
                    this.nowPerforming = this.user;
                } else if (pid in this.enemiesObject) {
                    this.nowPerforming = this.enemiesObject[pid];
                }
                this.nowPerforming.setPerforming(true);
                this.world.update();
            } else {
                alert("wtf!!!!");
            }
        });

        window.onbeforeunload = ()=>{
            this.connection.disconnect();
        };
    }

    stopPage() {
        this.world.map.removeAllChildren();
        this.world.update();
        this.world.area.stage.removeAllChildren();

        this.connection.disconnect();
        this.stop();
        // TODO remove game scene and work with menupage
    }
}

export default PlayPage;