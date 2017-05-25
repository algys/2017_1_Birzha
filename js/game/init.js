'use strict';

import Area from './game_area/area';
import World from './game_area/world';

import Loader from './ulits/loader';

import MenuPage from './pages/menu_page';
import PlayPage from './pages/play_page';

import Connection from './services/connection';
import Room from './services/room';
import User from './game_objects/user/user' /* add for debug */

window.DATATYPE_ROOMINFO = "DATATYPE_ROOMINFO";
window.DATATYPE_PLAYERMOVE = "DATATYPE_PLAYERMOVE";
window.DATATYPE_NEWBONUS = "DATATYPE_NEWBONUS";
window.DATATYPE_ERROR = "DATATYPE_ERROR";
window.DATATYPE_HELLO = "DATATYPE_HELLO";
window.DATATYPE_ROOM_DESTRUCT = "DATATYPE_ROOM_DESTRUCTION";
window.DATATYPE_PLAYER_DISCONNECT = "DATATYPE_PLAYER_DISCONNECT";
window.DATATYPE_ROOMMANAGER_UPDATE = "DATATYPE_ROOMMANAGER_UPDATE";
window.DATATYPE_YOU_WIN = "DATATYPE_YOU_WIN";

window.ACTION_GIVE_ME_ROOM = "ACTION_GIVE_ME_ROOM";
window.ACTION_GAME_MOVE = "ACTION_GAME_MOVE";
window.ACTION_PING = "ACTION_PING";
window.ACTION_EXIT_ROOM = "ACTION_EXIT_ROOM";

window.RES_OK = 0;
window.RES_ROLLBACK = 1;
window.RES_ERROR = 2;

window.STATUS_CREATING = "STATUS_CREATING";
window.STATUS_PLAYING = "STATUS_PLAYING";
window.STATUS_READY = "STATUS_READY";

window.conf = {
    ip: [ {host: "172.16.83.124", port: 8081, path: "/game "},
          {host: "192.168.43.107", port: 8081, path: "/game"},
          {host: "172.16.90.25", port: 8081, path: "/game"},
          {host: "172.20.10.4", port: 8081, path: "/game"},
          {host: "localhost", port: 8081, path: "/game"},
          {host: "cyclic-server.herokuapp.com", port: "", path: "/game"},
          {host: "172.16.94.65", port: 8081, path: "/game"}
    ],
    baseIP: 2,

    countUsersInRoom: 2,

    // UI
    rectSize: 100,
    borderSize: 8,

    defaultStartUnit: 100,

    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 0,
    paddingHintX: 40,
    paddingHintY: 40

};

window.defaultServer = 'http://' + conf.ip[conf.baseIP].host + ':' + conf.ip[conf.baseIP].port + '/api';

window.towerType = {
    DEFAULT: 0,
    BONUS: 1,
    ENEMY: 2
};

window.userColors = {
    0: "red",
    1: "green",
    2: "blue",
    3: "yellow"
};

function loadResourse(callback) {
    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    new Loader(needFilesForProjectManifest, callback);
}

function startGame(elementDOM) {
    let connectionService = null;
    let room = null;

    const iAmReady = function (countChoose) {
        if(room === null) {
            alert("room ~ null");
            return;
        }

        room.iAmReady(countChoose);
    };

    let area = new Area(elementDOM);
    let world = new World(elementDOM, area);

    // No connection
    let menuPage = new MenuPage(world, iAmReady);

    let startConnect = (result) => {
        connectionService = new Connection((status) => {
            if(status === RES_ERROR) {
                alert("error connect server!"); // error
                return;
            }
            connectionService.createPingPong();
            let playPage = new PlayPage(world, connectionService, null); // TODO loading

            let ifstop = () => {
                /* stop */
                menuPage.startPage();
            };

            connectionService.addEventListen(DATATYPE_HELLO, (json) => {
                let id = json["id"];
                let nickname = json["nickname"];

                if(id === null || nickname === null) {
                    alert("error");
                    return;
                }

                console.log("start after hello");
                menuPage.startPage(result);
                menuPage.startRoomChoose(connectionService);

                room = new Room(connectionService, menuPage, id, nickname, (room, height, width) => {
                    area.setSize(height, width);
                    world.reconfigure();
                    menuPage.stopPage(); // destruct room choose
                    playPage.startPage(room);
                });

            });
        });
    };

    loadResourse((result) => {
        console.log(result);
        startConnect(result);
    });
}

function debugGame(elementDOM) {
    let connectionService = null;
    let room = null;

    let area = new Area(elementDOM);
    let world = new World(elementDOM, area);

    const iAmReady = () => {
        menuPage.stopPage();
        let user = new User(null, world, {
            beginX: 10, beginY: 10, id: 1,
            nickname: "noname", units: 100,
            color: "green"
        });

        user.setPerforming(true);

        new PlayPage(world, null).startPage(null);
    };

    let menuPage = new MenuPage(world, iAmReady);


    loadResourse((result) => {
        console.log(result);
        menuPage.startPage(result);
    });
}

export { startGame, debugGame };