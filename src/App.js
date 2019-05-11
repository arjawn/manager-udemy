import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: ' AIzaSyAh2wfmtpbQDvV-kh5HKXBQHGi6UFKxVYQ',
      authDomain: 'manager-ede25.firebaseapp.com',
      databaseURL: 'https://manager-ede25.firebaseio.com',
      projectId: 'manager-ede25',
      storageBucket: 'manager-ede25.appspot.com',
      messagingSenderId: '800843425273',
      appId: '1:800843425273:web:46111e361f8f8c10'
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
