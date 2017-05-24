import './conf/conf'

import Router from './router';

import LoginForm from './blocks/login/login';
import Menu from './blocks/menu/menu';
import About from './blocks/about/about'
import RegistrationForm from './blocks/register/registration';

import Auth from './auth';

import serviceWorkerLoader from '../worker_loader';

import { getCookie, setCookie } from './util'
import * from './controller'
const loginPack = [
  { path: '/', generator: loginController }, 
  { '/login', generator: loginController },
  { '/about', generator: aboutController }
];

const mainPack = ['/', '/main', '/leaderboard', '/logout', '/game', '/about'];

(function () {
    window.confServer = {};
    let url = window.location.pathname;

    if(mainConfiguration.needAppCache)
        serviceWorkerLoader();

    fetch('js/conf/dev.conf.json').then(function (data) {
        return data.json();
    }).then(function(result) {
        window.confServer = result;
    }).catch(error => "Error");

    let auth = new Auth();
    let router = () => new Router(window.document.documentElement);

    router.register('/', loginView);
    router.register('/login', loginView);
    router.register('/about', aboutView);
    router.register('/register', registrationView);
    router.register('/leaderboard', leaderBoardView);

    if(getCookie('logged')==='true') {
        console.log("Already login !");
        router.register('/', menuView);
        router.register('/main', menuView);
        router.register('/game', gameView);
        router.go("/main");
    } else if() {

    }

    router.start();

    let login = document.querySelector('#login');
    let registration = document.querySelector('#registration');
    let menu = document.querySelector('#menu');

    let menuForm = new Menu({
        el: document.createElement('div'),
        data: {
            controls: [
                {
                    text: 'Play',
                    attrs: {
                        type: 'click',
                        class: 'btn btn-success btn-block',
                        id: 'playPressed',
                        href: '/game'
                    }
                },
                {
                    text: 'LeaderBoard',
                    attrs: {
                        type: 'click',
                        class: 'btn btn-info btn-block',
                        id: 'leaderboardPressed',
                        href: '/leaderboard'
                    }
                },
                {
                    text: 'Logout',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-danger btn-block',
                        id: 'logoutPressed'
                    }
                }
            ]
        }
    });


    let loginForm = new LoginForm({
        el: document.createElement('div'),
        data: {
            title: 'Login',
            fields: [
                {
                    name: 'login',
                    type: 'text',
                    placeholder: 'Login'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
                }
            ],
            controls: [
                {
                    text: 'Login',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-default login-form__button login-form__button_red'
                    }
                }
            ]
        }
    });

    let registrationForm = new RegistrationForm({
        el: document.createElement('div'),
        data: {
            title: 'Registration',
            fields: [
                {
                    name: 'login',
                    type: 'text',
                    placeholder: 'Login'
                },
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
                },
                {
                    name: 'password_repeat',
                    type: 'password',
                    placeholder: 'Repeat'
                }
            ],
            controls: [
                {
                    text: 'Register',
                    attrs: {
                        type: 'submit',
                        class: 'btn btn-default registration-form__button registration-form__button_red'
                    }
                }
            ]
        }
    });



    login.appendChild(loginForm.el);
    registration.appendChild(registrationForm.el);
    menu.appendChild(menuForm.el);

    let btnLogout = document.getElementById("logoutPressed");

    btnLogout.onclick = (event)=>{
        debugger;
        event.preventDefault();
        setCookie('logged', 'false');
        setCookie('login', 'Guest');
        router.go('/login');
        auth.logout(
            () => {
                console.log("success login");
            },
            () => {
                console.log("Error, logout!");
            }
        );
    };

    loginForm.on('submit', event => {
        event.preventDefault();
        let loginData = loginForm.getFormData();

        auth.auth(loginData,
            () => {
                auth.getMe(
                    (user) => {
                        console.log("Success login !");
                        router.register('/', menuView);
                        router.register('/main', menuView);
                        router.register('/game', gameView);
                        router.go("/main");

                        document.cookie = "logged=true";
                        document.cookie = 'login=' + user.login;
                        document.getElementById('registered').textContent = user.login;
                    },
                    () => {

                    }
                )
            },
            () => {
                console.log("Fail login !");
            }
        );
    });


    registrationForm.on('submit', event => {
        event.preventDefault();
        const ifError = function(error) {
            registrationWarningElement.innerHTML = error;
        };
        let regData = registrationForm.getFormData();
        if(regData['password'] !== regData['password_repeat']) {
            ifError("Password is not equals!");
            return;
        }
        delete regData['password_repeat'];

        auth.register(regData,
            ()=>{
                console.log("Success login !");
                router.go("/login");
            },
            ()=>{
                console.log("Fail login !");
            }
        );

    });

    const aboutPage = document.getElementById('about');

    let loginWarningElement = document.getElementById("login_warning");
    let registrationWarningElement = document.getElementById("registration_warning");

    let about = new About();
    aboutPage.innerHTML = about.getElement();


    router.startPage(url);
})();
