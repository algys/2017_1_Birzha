'use strict';

import Area from './game_area/area';
import World from './game_area/world';

import Loader from './ulits/loader';

import MenuPage from './pages/menu_page';
import PlayPage from './pages/play_page';

import Connection from './services/connection';
import Room from './services/room';

window.DATATYPE_ROOMINFO = "DATATYPE_ROOMINFO";
window.DATATYPE_PLAYERMOVE = "DATATYPE_PLAYERMOVE";
window.DATATYPE_NEWBONUS = "DATATYPE_NEWBONUS";
window.DATATYPE_ERROR = "DATATYPE_ERROR";
window.DATATYPE_HELLO = "DATATYPE_HELLO";
window.DATATYPE_ROOM_DESTRUCT = "DATATYPE_ROOM_DESTRUCT";

window.READY_FOR_ROOM_SEARCH = "ACTION_READY_FOR_ROOM_SEARCH";
window.READY_FOR_GAME_START = "ACTION_READY_FOR_GAME_START";
window.GAME_UPDATE_MY_MOVE = "ACTION_GAME_MOVE";

window.RES_OK = 0;
window.RES_ROLLBACK = 1;
window.RES_ERROR = 2;

window.STATUS_CREATING = "STATUS_CREATING";
window.STATUS_PLAYING = "STATUS_PLAYING";
window.STATUS_READY = "STATUS_READY";

window.conf = {
    ip: [ {host: "172.16.83.124", port: 8081, path: "/game "},
          {host: "192.168.43.107", port: 8081, path: "/game"},
          {host: "172.16.90.2", port: 8081, path: "/game"},
          {host: "172.16.94.65", port: 8081, path: "/game"},
          {host: "localhost", port: 8081, path: "/game"},
          {host: "cyclic-server.herokuapp.com", port: "", path: "/game"},
          {host: "172.16.94.65", port: 8081, path: "/game"}
    ],
    baseIP: 3,

    countUsersInRoom: 2,

    // UI
    rectSize: 100,
    borderSize: 8,

    defaultStartUnit: 100,

    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 15
};

window.towerType = {
    DEFAULT: 0,
    BONUS: 1,
    ENEMY: 2
};

function startGame(elementDOM) {
    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    let connectionService = null;

    let room = null;

    const iAmReady = function () {
        if(room === null) {
            alert("room ~ null");
            return;
        }

   //     world.canvas.requestPointerLock(); // for lock user

        room.iAmReady();
    };

    let area = new Area(elementDOM);

    let world = new World(elementDOM, area);
    let menuPage = new MenuPage(world, iAmReady);


    new Loader(needFilesForProjectManifest, (result) => {
        console.log(result);
        menuPage.startPage(result);
    });

    connectionService = new Connection((status) => {
        if(status === RES_ERROR) {
            alert("error connect server!"); // error
            return;
        }

        let playPage = new PlayPage(world, connectionService, null); // TODO loading

        let ifstop = ()=>{
            menuPage.startPage();
        };

        connectionService.addEventListen(DATATYPE_HELLO, (json) => {
            let id = json["id"];
            let nickname = json["nickname"];

            if(!id || !nickname) {
                alert("error");
                return;
            }

            console.log("start after hello");
            room = new Room(connectionService, menuPage, id, nickname, (room) => {
                room.deleteListenRoomInfo();

                menuPage.stopPage(); // destruct room choose

                playPage.startPage(room, ifstop);

                world.update();
            });

        });

    });
}

export default startGame;