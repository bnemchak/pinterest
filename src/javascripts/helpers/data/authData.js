import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';

const authDiv = $('#auth');
const boardsDiv = $('#board');
// const homeDiv = $('#homePage');
const pinsDiv = $('#pin');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      // homeDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      boardList.showBoards();
    } else {
      authDiv.removeClass('hide');
      // homeDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
