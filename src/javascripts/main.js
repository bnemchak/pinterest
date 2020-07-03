import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import myNavBar from './components/myNavBar/myNavBar';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavBar.logOutEvent();

  // $('body').on('mouseenter', '.myco-card', (e) => {
  //   e.target.closest('.card').classList.add('bg-dark');
  // });
  // $('body').on('mouseleave', '.myco-card', (e) => {
  //   e.target.closest('.card').classList.remove('bg-dark');
  // });
};

init();
