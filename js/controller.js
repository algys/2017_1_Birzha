import MenuView from './views/menuView'
import LoginView from './views/loginView'
import RegistrationView from './views/registrationView';
import LeaderBoardView from './views/leaderboardView';
import GameView from './views/gameView';
import AboutView from './views/aboutView';

export menuController = () => new MenuView(document.querySelector('.menu-view'));
export loginController = () => new LoginView(document.querySelector('.login-view'));
export registrationController =
    () => new RegistrationView(document.querySelector('.registration-view'));

export aboutController = () => new AboutView(document.querySelector('.about-view'));
export leaderBoardController =
    () => new LeaderBoardView(document.querySelector('.leaderboard-view'));
export gameController = () => new GameView(document.querySelector('.game-view'));
