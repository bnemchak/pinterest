import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';

const authDiv = $('#auth');
const boardDiv = $('#board');
const homeDiv = $('#homePage');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.addClass('hide');
      boardDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      boardList.showBoards();
    } else {
      authDiv.removeClass('hide');
      homeDiv.removeClass('hide');
      boardDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
