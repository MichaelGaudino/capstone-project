import { createStore as _createStore } from 'vuex';
import axios from 'axios';

export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: {
        username: (currentUser && currentUser.username) || '',
        users: [
          {name: "Player1", score: 70, handicap: 8, course: "course1"},
          {name: "Player2", score: 67, handicap: 7, course: "course2"},
          {name: "Player3", score: 65, handicap: 6, course: "course3"},
        ],
      }
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = {};
        axios.defaults.headers.common = {};
      },
      ADD_TO_LEAGUE(state, user) {
        //ADD THE USER TO THE LEAGUE OF THE LEAGUE ORGANIZER
      }

    },
  });
  return store;

  
}
