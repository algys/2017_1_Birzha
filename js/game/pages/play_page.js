'use strict';

import User from '../game_objects/user/user';
import Tower from '../game_objects/models/tower';

import Controls from '../controls/controls';

import BasePage from './base_page';
import Enemy from '../game_objects/enemy/enemy';

class PlayPage extends BasePage {
    constructor(world, connection, resource, router) {
        super(world);

        this.enemiesData = [];
        this.enemiesObject = {};

        this.user = null;

        this.connection = connection;
        this.resource = resource;
        this.router = router;

        this.nowPerforming = null;
    }

    splitUsers(array, meId) {
        let me = null;

        for(let user in array) {
            if(array[user].id === meId) {
                me = array[user];
            } else {
                this.enemiesData.push(array[user]);
            }
        }

        return me;
    }

    startPage(room, ifstop) {
        this.stop = ifstop;
        let perfomingPlayer = room.pid;

        let meData = this.splitUsers(room.players, room.meId);
        this.user = new User(this.connection, this.world,
            {x: meData.beginX, y: meData.beginY},
            meData.id,
            meData.nickname || "NONAME",
            meData.units);

        /* if user step */
        if(perfomingPlayer == room.meId) {
            this.nowPerforming = this.user;
            this.user.setPerforming(true);
        }

        for(let index in this.enemiesData) {
            let enemyData = this.enemiesData[index];
            this.enemiesObject[enemyData.id] = new Enemy(this.connection, this.world, enemyData);
            if(enemyData.id == perfomingPlayer) {
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
        controls.scoreBoard.addPlayerToScoreBoard("Alex", 13412);
        controls.scoreBoard.addPlayerToScoreBoard("Alg", 12423);
        controls.scoreBoard.addPlayerToScoreBoard("Sergey", 15352);
        controls.scoreBoard.addPlayerToScoreBoard("Daniyar", 15352);

        /* code for algys */
        this.connection.addEventListen(DATATYPE_PLAYERMOVE, (json) => {
            if(json["result"] !== "ACCEPT_OK") // TODO make fight
                return;

            let nextpid = json["nextpid"];

            this.nowPerforming.setPerforming(false);
            if(!(json["pid"] in this.enemiesObject)) {
                /* dont draw me */
                if(nextpid in this.enemiesObject)
                    this.nowPerforming = this.enemiesObject[json["nextpid"]];
                else
                    alert("wtf!");

                console.log("No Draw and update!");
            } else {
                if(nextpid === this.user.pid)
                    this.nowPerforming = this.user;
                else
                    this.nowPerforming = this.enemiesObject[nextpid];

                console.log("Draw: " + this.enemiesObject[json["pid"]]);

                let nowEnemy = this.enemiesObject[json["pid"]];
                let valueUpdates = json["valueUpdate"];
                let newNodes = json["newNodes"];

                for(let update in valueUpdates) {
                    // TODO
                }

                debugger;
                for(let index in newNodes) {
                    let obj = newNodes[nodeIndex];

                    let localPid = obj["pid"];
                    if(localPid == nowEnemy.pid) {
                        nowEnemy.addOwnTower(obj /* with x and y */, 342);
                    }
                }

                // this.enemiesObject[json["playerid"]].createNewEnemyVertex(json["move"]);
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
            /* while exit and wait new game */
            if(status == STATUS_CREATING) {
                // TODO to menu
                // alert("exit game and new room");
                return;
            } else if(status == STATUS_PLAYING && "pid" in json) {
                let pid = json["pid"];

                if(pid == this.user.pid) {
                    this.nowPerforming = this.user;
                } else if(pid in this.enemiesObject) {
                    this.nowPerforming = this.enemiesObject[pid];
                }

                this.nowPerforming.setPerforming(true);
                this.world.update();

            } else { alert("wtf!!!!"); }
        });
        window.onbeforeunload = ()=>{
            this.connection.disconnect();
        };
    }

    stopPage() {
        this.world.stage.removeAllChildren();
        this.world.stage.clear();

        this.world.update();
        this.stop();
        // TODO remove game scene and work with menupage
    }

    updateAllUsers(json) {
        // TODO Noraml method`
        /*
        console.log("receive");
        let objects = json["newUsersPositions"];
        for (let key in objects) {
            console.log(objects[key]["NewPoint"]["x"]);
            console.log(objects[key]["NewPoint"]["y"]);
            this.enemies.push(new User(this.world, {
                x: objects[key]["NewPoint"]["x"],
                y: objects[key]["NewPoint"]["y"]
            }));
        }
        */
    }
}

export default PlayPage;